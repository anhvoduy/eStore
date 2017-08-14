USE estore;
GO;

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


/****** Object:  Table [dbo].[Customer] ******/
CREATE TABLE [dbo].[Customer](
	[CustomerId] [INT] IDENTITY(1,1) NOT NULL,
    [CustomerKey] [nvarchar](50) NOT NULL,
	[CustomerName] [nvarchar](50) NOT NULL,
    [Description] [nvarchar](250) NOT NULL,
    [Email] [nvarchar](50) NOT NULL,
    [Mobile] [nvarchar](50) NOT NULL,
    [Tel] [nvarchar](50) NOT NULL,
    [Fax] [nvarchar](50) NOT NULL,
    [Title] [nvarchar](50) NOT NULL,
	[Address] [nvarchar](250) NULL,	
    [Deleted] [INT] DEFAULT 0
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Customer] ([CustomerName] ,[Address] ,[Mobile])
VALUES ('The Bank of Tokyo and Mitsuibishi', 'Manchester United', '1234567890')

INSERT INTO [dbo].[Customer] ([CustomerName] ,[Address] ,[Mobile])
VALUES ('REE Corporation Group', 'Manchester United', '9876543210')

INSERT INTO [dbo].[Customer] ([CustomerName] ,[Address] ,[Mobile])
VALUES ('FPT Information System', 'Real Madrid', '1234567890')

INSERT INTO [dbo].[Customer] ([CustomerName] ,[Address] ,[Mobile])
VALUES ('HAG Corporation Group', 'Liverpool', '1234567890')

INSERT INTO [dbo].[Customer] ([CustomerName] ,[Address] ,[Mobile])
VALUES ('SMC Steel Company', 'PSG', '1234567890')

INSERT INTO [dbo].[Customer] ([CustomerName] ,[Address] ,[Mobile])
VALUES ('Marubeni Itochu Steel Vietnam Co. Ltd.', 'PSG', '1234567890')

GO


/****** Object:  Table [dbo].[Truck] ******/
CREATE TABLE [dbo].[Truck](
	[TruckId] [int] IDENTITY(1,1) NOT NULL,
    [TruckKey] [nvarchar](50) NOT NULL,
	[TruckName] [nvarchar](50) NOT NULL,
	[TruckNumber] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](250) NULL,
    [Deleted] [INT] DEFAULT 0
 CONSTRAINT [PK_Truck] PRIMARY KEY CLUSTERED 
(
	[TruckId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Truck] ([TruckName] ,[TruckNumber] ,[Description])
VALUES ('TRUCK - Land Cruiser', 'T-LAND-123456789', 'Land Cruiser 2015')

INSERT INTO [dbo].[Truck] ([TruckName] ,[TruckNumber] ,[Description])
VALUES ('TRUCK - Mercedez', 'T-MERC-123456789', 'Mercedez 2017')

INSERT INTO [dbo].[Truck] ([TruckName] ,[TruckNumber] ,[Description])
VALUES ('TRUCK - BMW', 'T-BMW-852741963', 'BMW 2015')


/****** Object:  Table [dbo].[Account] ******/
CREATE TABLE [dbo].[Account](
	[AccountId] [int] IDENTITY(1,1) NOT NULL,
	[AccountNo] [nvarchar](20) NOT NULL,
    [AccountName] [nvarchar](100) NOT NULL,	
	[Description] [nvarchar](250) NULL,
    [Deleted] [INT] DEFAULT 0
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[AccountId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('111','Cash','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('112','Cash in bank','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('113','Cash transfer ','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('156','Goods','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('131','Account Receivable','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('331','Account Payment','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('511','Revenue','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('632','Cost of Goods Sold','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('642','Selling Cost','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('711','711','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('811','811','',0);
INSERT INTO [dbo].[Account] (AccountNo,AccountName,Description,Deleted) VALUES ('911','911','',0);
