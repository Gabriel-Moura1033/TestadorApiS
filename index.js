import enderecos from "./config/enderecos.js";
import { encerraRepetidos } from "./tratamentos/configRepetidos.js";
import { enviaEmailErro } from './controladores/enviaEmail.js'
import { loopVerificacoes } from "./controladores/loopVer.js";


encerraRepetidos(enderecos);
await loopVerificacoes(enderecos);

await enviaEmailErro()

