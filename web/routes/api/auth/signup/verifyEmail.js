module.exports = async (email) => {
  const ejs = require('ejs');
  const nodemailer = require('nodemailer');

  const auth_code = Math.random().toString().substring(2, 6);
  const year = new Date().getFullYear().toString();

  try {
    // 메일 전송시 보낼 화면
    const email_template = await ejs.renderFile(
      'views/auth/emailTemplate.ejs',
      { auth_code, year },
      { async: true }
    );
    // 메일 설정
    const smtpTransport = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PW,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `AUTOINVEN<${process.env.MAIL_ID}>`,
      to: email,
      subject: '[AUTOINVEN] identfiy mail',
      html: email_template,
    };

    // 메일 전송
    await smtpTransport.sendMail(mailOptions);

    return auth_code;
  } catch (err) {
    throw err;
  }
};
