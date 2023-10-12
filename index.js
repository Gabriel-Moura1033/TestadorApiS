import enderecos from "./config/enderecos.js";
import { encerraRepetidos } from "./tratamentos/configRepetidos.js";
import { enviaEmailErro } from './controladores/enviaEmail.js'
import { loopVerificacoes } from "./controladores/loopVer.js";
import { loopReqHttp } from "./controladores/loopReq.js";

async function startApp() {
    encerraRepetidos(enderecos);
    await loopVerificacoes(enderecos);
    loopReqHttp(enderecos)
    await enviaEmailErro()
  }

  async function runLoopS() {
    setInterval(async () => {
      await loopVerificacoes(enderecos);
      await loopReqHttp(enderecos);
    }, 1 * 30 * 1000); 
  }
  
  function runEnviaEmailErro() {
    setInterval(async () => {
      await enviaEmailErro();
    }, 3600000); 
  }
  

  await startApp();
  
  await runLoopS();
  runEnviaEmailErro();