import { config } from '../config/dbConfig.js';
import sql from 'mssql'

export async function udpateErro(nome, endereco, sttsCode) {
    try {
      const pool = await sql.connect(config);
      await pool
        .request()
        .input('nome', sql.VarChar, nome)
        .input('endereco', sql.VarChar, endereco)
        .input('sttsCode', sql.Int, sttsCode)
        .query('UPDATE Api_Testes SET Sucessos_Consecutivos = 0, Erros_Consecutivos = Erros_consecutivos + 1, data_hora_ultimo_erro = GETUTCDATE(), Ultimo_Status_Code = @sttsCode Where nome = @nome and endereco = @endereco');
      sql.close()
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
      sql.close()
    }
  }
  

  export async function updateSucesso(nome, endereco, sttsCode) {
    try {
      const pool = await sql.connect(config);
      await pool
        .request()
        .input('nome', sql.VarChar, nome)
        .input('endereco', sql.VarChar, endereco)
        .input('sttsCode', sql.Int, sttsCode)
        .query('UPDATE Api_Testes SET Sucessos_Consecutivos = isnull(Sucessos_Consecutivos, 0) + 1, Erros_Consecutivos = 0, data_hora_ultimo_sucesso = GETUTCDATE(), Ultimo_Status_Code = @sttsCode Where nome = @nome and endereco = @endereco');
      sql.close()
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
      sql.close()
    }
  }
  
