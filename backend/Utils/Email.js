const nodeMailer = require("nodemailer");

async function SendVerificationMail(userId,email) {
    const transporter = nodeMailer.createTransport({
        service: process.env.SMPT_SERVICE,
        secure: true,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: email,
        subject: "Verification",
        html: '<div style="height: 400px;background-color: white"><center><img src="https://media.istockphoto.com/id/1135899660/vector/set-of-colorful-shopping-bags-and-packages.jpg?s=612x612&w=0&k=20&c=DOndmXAcN1M77k3rrlFrYNnsw8hxHGxmJv57tXyyJaQ=" style="height: 200px;width: 200px"/></center><h1 style="color: #00aced;text-align: center">Click Link Below To Verify Yourself</h1>' +
            `<center><a href=${process.env.FRONTEND_BASE_URL + "verify/" + userId.toString()} style="background-color: rgb(255, 165, 47);padding: 20px;padding-left: 50px;padding-right: 50px;color: #efefef; border-radius: 10px;margin-top: 20px;">Click Me</a></center></div>`
    }
    await transporter.sendMail(mailOptions)
}

async function SendResetMail(email,userId){
    const transporter = nodeMailer.createTransport({
        service: process.env.SMPT_SERVICE,
        secure: true,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: email,
        subject: "Password Reset",
        html: '<div style="height: 400px;background-color: white"><center><img src="https://cdn.dribbble.com/users/2879528/screenshots/11007898/media/02a3ee1367c85fbf8ee060614cb97fb0.jpeg?resize=400x0" style="height: 200px;width: 200px"/></center><h1 style="color: #00aced;text-align: center">Click Link Below To Reset Your Password</h1>' +
            `<center><a href=${process.env.FRONTEND_BASE_URL + "reset/" + userId.toString()}  style="background-color: rgb(255, 165, 47);padding: 20px;padding-left: 50px;padding-right: 50px;color: #efefef; border-radius: 10px;margin-top: 20px;">Reset Password</a></center></div>`
    }

    await transporter.sendMail(mailOptions)
}

module.exports = {SendVerificationMail, SendResetMail}
