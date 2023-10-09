Create Database Testa_Api

create table Api_Testes 
(
Nome					 Varchar(25)  not null primary key, 
endereco				 Varchar(250) not null, 
data_hora_criacao		 datetime	  not null, 
data_hora_ultimo_sucesso datetime	  null, 
data_hora_ultimo_erro    datetime	  null
)


