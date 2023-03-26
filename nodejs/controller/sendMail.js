const nodemailer = require("nodemailer");

const sendMail = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();
//connect to smtp

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'raphaelle8@ethereal.email',
        pass: 'rBqn1q6sR6Cq9jYzxQ'
    },
  });
  let info = await transporter.sendMail({
    from: '"Vikash kumar" <viksh@gmail.com>', // sender address
    to: "iamvikshkumar@gmail.com", // list of receivers
    subject: "Hello vikash", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
    res.send(info)
}
module.exports = sendMail;