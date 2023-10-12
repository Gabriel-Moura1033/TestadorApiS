import { verificaInsert } from "./verificaInsert.js";
import { deletaChaveDup } from "../query/deletaChaveDup.js";

export async function loopVerificacoes(enderecos) {
    for (let i = 0; i < enderecos.length; i++) {
        await deletaChaveDup(enderecos[i])
        await verificaInsert(enderecos[i])
        
    }
    
}

