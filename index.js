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
  
  // Função que executa loopVerificacoes a cada 5 minutos
  function runLoopVerificacoes() {
    setInterval(async () => {
      await loopVerificacoes(enderecos);
    }, 5 * 60 * 1000); // 5 minutos em milissegundos
  }
  
  // Função que executa loopReqHttp a cada 5 minutos
  function runLoopReqHttp() {
    setInterval(async () => {
      await loopReqHttp(enderecos);
    }, 5 * 60 * 1000); // 5 minutos em milissegundos
  }
  
  // Função que executa enviaEmailErro a cada 15 minutos
  function runEnviaEmailErro() {
    setInterval(async () => {
      await enviaEmailErro();
    }, 15 * 60 * 1000); // 15 minutos em milissegundos
  }
  
  // Iniciar a função encerraRepetidos no início
  await startApp();
  
  // Agendar as outras funções
  runLoopVerificacoes();
  runLoopReqHttp();
  runEnviaEmailErro();