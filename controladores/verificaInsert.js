import { consultarDados } from "../query/consultarDados.js";
import { inserirDados } from "../query/inserirDados.js";
import chalk from "chalk";

export async function verificaInsert (dados) {
    const resultado = await consultarDados(dados);


    if(resultado.rowsAffected[0] === 0) {
        console.log(chalk.yellowBright(`Não existe um Registro pro nome '${dados.nome}' e endereço '${dados.endereco}'`));
        await inserirDados(dados)
        console.log(chalk.blueBright('Registro Criado com Sucesso.'))
    } else {
        console.log(chalk.greenBright(`Já existe um Registro pro nome '${resultado.recordset[0].Nome}' e endereço '${resultado.recordset[0].endereco}'`));
    }
}