import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
       service: 'gmail',
       host: process.env.SMTP_HOST,
       port: process.env.SMTP_PORT,
       secure: true,
       auth: {
           loin: true,
           user: process.env.SMTP_USER,
           pass: process.env.SMTP_PASSWORD
       }
})

export const sendActivationMail = async (to, link) => {
   await transporter.sendMail({
       from: process.env.SMTP_USER,
       to,
       subject: `Activation link ${process.env.API_URL}`,
       text: '',
       html: `<a href=${link}>Follow the link to activate ${link}</a>`
   })
}