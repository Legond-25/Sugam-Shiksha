const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config({ path: "./.env" });

class SendEmail {
  constructor(user, url, message) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.message = message;
    this.from = `Sugam Shiksha <${process.env.EMAIL}>`;
  }

  setApiKey() {
    const sgMailApiKey = process.env.SENDGRID_API_KEY;
    return sgMail.setApiKey(sgMailApiKey);
  }

  async send(template, subject) {
    const mailOptions = {
      from: process.env.EMAIL,
      to: this.to,
      subject: subject,
      text: this.message,
    };

    await this.setApiKey()
      .send(mailOptions)
      .then(() => console.log("Email sent successfully"))
      .catch((err) => console.log(err));
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to Canteen!");
  }
  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      "Your password reset token (valid for only 10 mins)."
    );
  }
}

module.exports = SendEmail;
