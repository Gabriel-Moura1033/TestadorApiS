import { config } from '../config/dbConfig.js';
import sql from 'mssql'
import chalk from 'chalk';

export async function deletaChaveDup(dados) {
    const nome     = dados.nome
    const endereco = dados.endereco
    try {
      const pool = await sql.connect(config);
     const result = 
      await pool
        .request()
        .input('nome', sql.VarChar, nome)
        .input('endereco', sql.VarChar, endereco)
        .query('Delete Api_Testes Where (Nome = @nome And Endereco <> @endereco) OR (Nome <> @nome And Endereco = @endereco)');
      
        if(pool._connected === true) {
          await sql.close()
        }
        if(result.rowsAffected[0] > 0) {
            console.log(chalk.red(`Excluido o registro do nome ${nome} pois o endereço mudou`))
        } 
    } catch (error) {
      console.log('Erro ao inserir dados(deletaChaveDup):', error);
      if(pool._connected === true) {
        await sql.close()
      }
    }
  }
  
