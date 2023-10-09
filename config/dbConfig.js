export const config = {
    user: 'user_api',
    password: 'Mudar123',
    server: 'localhost', // Substitua pelo endereço do servidor SQL Server
   // port: 1443,
    database: 'Testa_Api',
    options: {
      encrypt: true, // Use esta opção se você estiver usando uma conexão segura (SSL/TLS)
      trustServerCertificate: true, // essa opção serve pra confiar em um certificado autoemitido :/
    },
  };