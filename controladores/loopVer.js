import { verificaInsert } from "./verificaInsert.js";
import { deletaChaveDup } from "../query/deletaChaveDup.js";
import chalk from "chalk";

export async function loopVerificacoes(enderecos) {
    
    try {
        
        for (let i = 0; i < enderecos.length; i++) {
        await deletaChaveDup(enderecos[i])
        await verificaInsert(enderecos[i])
    }
console.log(chalk.greenBright('Loop de verificações executado com sucesso.'))
} catch {
    console.log(chalk.red('Erro ao executar o Loop de verificações'))
}
    

    
}

