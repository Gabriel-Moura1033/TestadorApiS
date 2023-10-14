Create Database Testa_Api

USE [Testa_Api]
GO

/****** Object:  Table [dbo].[Api_Testes]    Script Date: 14/10/2023 14:12:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Api_Testes](
	[Nome] [varchar](250) NOT NULL,
	[endereco] [varchar](250) NOT NULL,
	[data_hora_criacao] [datetime] NOT NULL,
	[data_hora_ultimo_sucesso] [datetime] NULL,
	[data_hora_ultimo_erro] [datetime] NULL,
	[Sucessos_Consecutivos] [numeric](10, 0) NULL,
	[Erros_Consecutivos] [numeric](10, 0) NULL,
	[Ultimo_Status_Code] [numeric](5, 0) NULL,
PRIMARY KEY CLUSTERED 
(
	[Nome] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Api_Testes] ADD  DEFAULT ((0)) FOR [Sucessos_Consecutivos]
GO

ALTER TABLE [dbo].[Api_Testes] ADD  DEFAULT ((0)) FOR [Erros_Consecutivos]
GO


