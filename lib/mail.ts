import nodemailer from "nodemailer";

const domain = process.env.NEXT_PUBLIC_APP_URL;
const sendingEmail = process.env.EMAIL;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await transport.sendMail({
    from: sendingEmail,
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await transport.sendMail({
    from: sendingEmail,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  try {
    const res = await transport.sendMail({
      from: sendingEmail,
      to: email,
      subject: "Confirm your email",
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
