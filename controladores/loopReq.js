import { testaRequestHttp } from "./testaRequestHttp.js"

export async function loopReqHttp(enderecos) {
    for (let i = 0; i < enderecos.length; i++) {
        await testaRequestHttp(enderecos[i].nome)
    }
    
}

