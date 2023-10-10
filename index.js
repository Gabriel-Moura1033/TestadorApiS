import { verificaInsert } from "./controladores/verificaInsert.js";
import enderecos from "./config/enderecos.js";
import { encerraRepetidos } from "./tratamentos/configRepetidos.js";
import { enviaEmailErro } from './controladores/enviaEmail.js'

await enviaEmailErro()
encerraRepetidos(enderecos);

for (let i = 0; i < enderecos.length; i++) {
    await verificaInsert(enderecos[i])
}
