import { verificaInsert } from "./verificaInsert.js";

export async function loopVerificacoes(enderecos) {
    for (let i = 0; i < enderecos.length; i++) {
        await verificaInsert(enderecos[i])
    }
    
}

