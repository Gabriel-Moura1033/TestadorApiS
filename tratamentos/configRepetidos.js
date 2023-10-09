import chalk from "chalk";
function temRegistrosRepetidos(array) {
    const nomes = {};
    const enderecos = {};

    for (const endereco of array) {
        const nome = endereco.nome;
        const enderecow = endereco.endereco

        if (nomes[nome]) {
            return true;
        }
        if (enderecos[enderecow]) {
            return true;
        }
        nomes[nome] = true;
        enderecos[enderecow] = true;
        }
    return false;
}


export function encerraRepetidos (enderecos) {
    const existemRepetidos = temRegistrosRepetidos(enderecos);
    
    if (existemRepetidos) {
        console.error(chalk.red('Existem registros repetidos programa encerrado.'));
        process.exit(1);
    } else {
        console.log(chalk.green('Não existem registros repetidos.'));
    }
}