const prisma = require("../services/prismaClient.js");
const sendReferralEmails = require("../utils/emailService.js");
exports.referFriendHandler = async (req, res) => {
  const {
    friendName,
    friendEmail,
    friendPhone,
    vertical,
    yourName,
    yourEmail,
    yourPhone,
  } = req.body;

  if (
    !friendName ||
    !friendEmail ||
    !friendPhone ||
    !vertical ||
    !yourName ||
    !yourEmail ||
    !yourPhone
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (friendPhone.length !== 10 || yourPhone.length !== 10) {
    return res.status(400).json({ error: "Phone number must be 10 digits" });
  }
  if (friendEmail === yourEmail) {
    return res.status(400).json({ error: "You cannot refer yourself." });
  }
  try {
    let friend = await prisma.friend.findUnique({
      where: { email: friendEmail },
    });

    if (!friend) {
      friend = await prisma.friend.create({
        data: {
          name: friendName,
          email: friendEmail,
          phone: friendPhone,
          vertical,
        },
      });
    }

    let user = await prisma.user.findUnique({ where: { email: yourEmail } });

    if (!user) {
      user = await prisma.user.create({
        data: { name: yourName, email: yourEmail, phone: yourPhone },
      });
    }

    const referral = await prisma.referral.create({
      data: { userId: user.id, friendId: friend.id },
    });

    await sendReferralEmails(yourName, friendName, yourEmail, friendEmail);

    return res.status(200).json({
      success: true,
      message: "Referral submitted successfully",
      referral,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Something went wrong, please try again" });
  }
};
