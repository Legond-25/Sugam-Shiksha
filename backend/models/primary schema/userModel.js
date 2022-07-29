const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// Creating user schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: ['true', 'Please provide your first name'],
    },
    lastName: {
      type: String,
      trim: true,
      required: ['true', 'Please provide your last name'],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: ['true', 'Please provide a email address'],
      validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    mobile: {
      type: Number,
      trim: true,
      unique: true,
      required: [true, 'Please provide a mobile number'],
      validate: {
        validator: function () {
          return validator.isMobilePhone(this.mobile.toString(), 'en-IN');
        },
        meassge: 'Please provide a valid mobile number',
      },
    },
    userType: {
      type: String,
      enum: {
        values: [
          'student',
          'institute',
          'industry',
          'aicte',
          'alumni',
          'academic_professional',
          'admin',
        ],
        message: '{VALUE} is not supported',
      },
      required: [true, 'Please provide a user type'],
    },
    photo: {
      type: String,
      default: 'default.jpg',
    },
    password: {
      type: String,
      required: ['true', 'Please provide a password'],
      minlength: [8, 'Password length must be atleast 8'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: 'Passwords do not match',
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Document middleware - Pre hook
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12 using (bcrypt)
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// Query middleware - Pre hook
userSchema.pre(/^find/, function (next) {
  // this points to current query
  this.find({ active: { $ne: false } });
  next();
});

// Instance Methods - will be available on all documents of the schema
userSchema.methods.comparePassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimeStamp;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// Creating user Model
const User = mongoose.model('User', userSchema);

// Exporting User Model
module.exports = User;