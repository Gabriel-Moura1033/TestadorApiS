import axios from "axios";
import enderecos from "../config/enderecos.js";
import { udpateErro, updateSucesso } from "../query/updateReqs.js";


export async function testaRequestHttp (nome) {
    const { endereco, metodo} = enderecos.find((endereco) => endereco.nome === nome)
    try {
        axios.get(endereco)
            .then(async function (response) {
              await updateSucesso(nome, endereco, response.status)
            })
            .catch(async function (error) {
              await udpateErro(nome, endereco, error.response.status)
            })
    } catch (error) {

    }

}