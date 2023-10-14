import { config } from '../config/dbConfig.js';
import sql from 'mssql'

export async function inserirDados(dados) {
    const nome     = dados.nome
    const endereco = dados.endereco
    try {
      const pool = await sql.connect(config);
      await pool
        .request()
        .input('nome', sql.VarChar, nome)
        .input('endereco', sql.VarChar, endereco)
        .query('INSERT INTO Api_Testes (Nome, endereco, data_hora_criacao) VALUES (@nome, @endereco, GETDATE())');
        if(pool._connected === true) {
          await sql.close()
        }
    } catch (error) {
      console.log('Erro ao inserir dados(InserirDados):', error);
      if(pool._connected === true) {
        await sql.close()
      }
    }
  }
  
