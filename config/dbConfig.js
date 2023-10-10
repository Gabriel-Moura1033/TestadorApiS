import dotenv from 'dotenv'
dotenv.config()

export const config = {
    user: process.env.USERDB,
    password: process.env.SENHADB,
    server: 'localhost', 
   // port: 1443,
    database: 'Testa_Api',
    options: {
      encrypt: true,
      trustServerCertificate: true, // essa opção serve pra confiar em um certificado autoemitido :/
    },
  };