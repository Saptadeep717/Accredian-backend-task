const nodemailer = require("nodemailer");
//const { referreEmail } = require("../mail/templates/referreMail.js");
const {
  referrerEmail,
  referreEmail,
} = require("../mail/templates/referrerMail.js");
const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS, 
  },
});




const sendReferralEmails = async (
  yourName,
  friendName,
  yourEmail,
  friendEmail
) => {
  try {
    const referreHtml = referreEmail(yourName, friendName);
    const referrerHtml = referrerEmail(yourName, friendName);
    // Send email to the referrer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: yourEmail,
      subject: "Referral Confirmation",
      html: referrerHtml,
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: friendEmail,
      subject: "Referral Confirmation - You've Been Referred!",
      html: referreHtml, 
    });

    console.log("Referral emails sent successfully!");
  } catch (error) {
    console.error("Error sending emails:", error);
  }
};

module.exports = sendReferralEmails;
