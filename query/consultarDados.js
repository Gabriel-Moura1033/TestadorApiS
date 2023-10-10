import { config } from '../config/dbConfig.js';
import sql from 'mssql'


export async function consultarDados(dados) {
    const nome     = dados.nome
    const endereco = dados.endereco
    try {
      const pool = await sql.connect(config);
      const result = await pool
                          .request()
                          .input('nome', sql.VarChar, nome)
                          .input('endereco', sql.VarChar, endereco)
                          .query('SELECT * FROM Api_Testes WHERE nome = @nome OR endereco = @endereco');
      await sql.close()
      return result
    } catch (error) {
      console.error('Erro ao consultar dados:', error);
      await sql.close()
    }
  }

  export async function consultarDadosErro() {
    try {
      const pool = await sql.connect(config);
      const result = await pool
                          .request()
                          .query('SELECT * FROM Api_Testes WHERE Erros_Consecutivos >= 1');
      await sql.close()
      return result.recordset
    } catch (error) {
      console.error('Erro ao consultar dados:', error);
      await sql.close()
    }
  }


