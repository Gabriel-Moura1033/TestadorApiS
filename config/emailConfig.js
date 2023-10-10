import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const transporter = nodemailer.createTransport({
    host: process.env.HOSTEMAIL, // Use o host SMTP do Titan Email
    port: process.env.PORTEMAIL, // Porta SMTP padrão para envio
    secure: process.env.SECUREEMAIL, // Define como "true" se você estiver usando uma conexão segura (TLS/SSL)
    auth: {
      user: process.env.EMAIL, // Seu endereço de e-mail
      pass: process.env.SENHAEMAIL, // Sua senha
    },
  });