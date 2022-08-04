const jwt = require('jsonwebtoken');
const User = require('../models/primary schema/userModel');

const signToken = (user) => {
    return jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user);
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    });
};

exports.signup = async (req, res) => {
    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        user: req.body.user,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        passwordChangedAt: req.body.passwordChangedAt,
        passwordResetToken: req.body.passwordResetToken,
        passwordResetExpires: req.body.passwordResetExpires,
        active: req.body.active,
    });

    createSendToken(newUser, 201, req, res);
};

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;

    //1. Check if email and password exists
    if(!email || !password) {
        throw new Error ('Please enter email and password');
    }

    //2. Check if user exists and password is correct
    const user = await User.findOne({ email }).select('password');

    if(!user || !(await user.correctPassword(password, user.password)))
        throw new Error ('Incorrect email or password');

    //3. Send JWT back to client, if everything is ok
    createSendToken(user, 200, req, res);
    } catch (error) {
        console.log( "Error: " + error.message );
    }
    
};

/*exports.logout = async (req, res, next) => {
    try {
       const { refreshToken } = req.body;
    if(!refreshToken) throw Error.BadRequest()
    const user = await verifyRefreshToken(refreshToken);
    user.Del(user, (err, val) => {
    if(err) {
        console.log(err.message);
        throw new Error.InternalServerError();
    }
    consle.log(val);
    res.sendStatus(204);
})
    } catch (error) {
        next(error)
    }
}*/

exports.protect = async (req, res) => {
    try {
    //1. Get token and check if it exists
    let token;
  
    if (!token) {
      throw new Error('You are not logged in. Please login to get access.');
    }
  
    //2. Verification: Validate token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    //3. Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      throw new Error('The user belonging to this token does no longer exist.');
    } 

     //4. Check if user changed password if token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
        throw new Error('User recently changed password! Please login again!');
    }
    } catch (error) {
        console.log( "Error: " + error.message );
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  };
  
  // Only for rendered pages, there will be no error
  exports.isLoggedIn = async (req, res, next) => {
    try {
      if (req.cookies.jwt) {
        // 1.) Verify token
        const decoded = await promisify(jwt.verify)(
          req.cookies.jwt,
          process.env.JWT_SECRET
        );
  
        // 2.) Check if user still exists
        const currentUser = await User.findById(decoded.id);
        if (!currentUser) {
          return next();
        }
  
        // 3.) Check if user changed password if token was issued
        if (currentUser.changedPasswordAfter(decoded.iat)) {
          return next();
        }
  
        // THERE IS A LOGGED IN USER
        res.locals.user = currentUser;
        return next();
      }
      next();
    } catch (err) {
      next();
    }
  };

exports.forgotPassword = async (req, res) => {
    try {
    // 1. Get user based on posted email
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      throw new Error('There is no user with that email address');
  
    //2. Generate random token
    const resetToken = user.createPasswordResetToken();
    } catch (error) {
        console.log( "Error: " + error.message );
    }
    await user.save({ validateBeforeSave: false });
    try {
      const resetURL = `http://${req.get(
        'host'
      )}/api/v1/auth/resetPassword/${resetToken}`;
  
      await new Email(user, resetURL).sendPasswordReset();
  
      await res.status(200).json({
        status: 'success',
        message: 'Token sent to email!',
      });
    } catch (error) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
  
      throw new Error ('There was an error sending the email. Try again later!');
    }
  };
  
  exports.resetPassword = async (req, res, next) => {
    try {

  //2. If token has not expired and there is a user, set new password
  if (!user) throw new Error ('Token is invalid or has expired');

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  //3. Log the user in, send JWT
  createSendToken(user, 200, req, res); 
    } catch (error) {
        console.log( "Error: " + error.message );  
    }
  };

  exports.updatePassword = async (req, res, next) => {
    try {
    //1. Get user from collection
    const user = await User.findById(req.user._id).select('+password');
  
    //2. Check if posted current password is correct
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
      throw new Error('Your current password is incorrect');
    }
  
    //3. If so, update password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();
  
    //4. Log user in, send JWT
    createSendToken(user, 200, req, res);
    } catch (error) {
        console.log( "Error: " + error.message );  
    }
    
  };