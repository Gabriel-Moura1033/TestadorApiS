import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const transporter = nodemailer.createTransport({
    host: process.env.HOSTEMAIL, 
    port: process.env.PORTEMAIL, 
    secure: process.env.SECUREEMAIL, 
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.SENHAEMAIL, 
    },
  });