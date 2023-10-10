import nodemailer from 'nodemailer';
import { transporter } from '../config/emailConfig.js'
import { consultarDadosErro } from '../query/consultarDados.js';
import moment from 'moment-timezone';


export async function enviaEmailErro() {
    
    const dados = await consultarDadosErro()
    const html = geraTabelaHtml(dados)

  const mailOptions = {
    from: 'testaapi@gabriel-moura.com',
    to: 'testaapi@gabriel-moura.com',
    subject: `TESTADOR: Erro reportado em ${dados.length} Api(s)`,
    text: '',
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar o email:', error);
    } else {
      console.log('Email enviado com sucesso:', info.response);
    }
  });
}


function geraTabelaHtml (dados) {

   let html = `
    <table border="1">
      <tr>
        <th>Nome</th>
        <th>Endereço</th>
        <th>Data Criação</th>
        <th>Último Sucesso</th>
        <th>Último Erro</th>
        <th>Erros consecutivos</th>    
      </tr>`;

      dados.forEach((linha) => {
        html += `
          <tr>
            <td>${linha.Nome}</td>
            <td>${linha.endereco}</td>
            <td>${showDateTimeFormat(linha.data_hora_criacao)}</td>
            <td>${showDateTimeFormat(linha.data_hora_ultimo_sucesso)}</td>
            <td>${showDateTimeFormat(linha.data_hora_ultimo_erro)}</td>
            <td>${linha.Erros_Consecutivos}</td>
          </tr>`;
      });
    
      html += '</table>';
      return html;

}


function showDateTimeFormat(data) {
let data1 = moment.tz(data, 'America/Sao_Paulo');
const dataHoraFormatada = data1.format('YYYY-MM-DD HH:mm:ss');
    return dataHoraFormatada;
  }