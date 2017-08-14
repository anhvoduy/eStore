USE estore;
GO

/****** Object:  Table [dbo].[Customer] ******/
CREATE TABLE [dbo].[Customer](
	[CustomerId] [INT] IDENTITY(1,1) NOT NULL,
    [CustomerKey] [nvarchar](50) NOT NULL,
	[CustomerName] [nvarchar](50) NOT NULL,
    [Description] [nvarchar](250) NULL,
    [Email] [nvarchar](50) NULL,
    [Mobile] [nvarchar](50) NULL,
    [Tel] [nvarchar](50) NULL,
    [Fax] [nvarchar](50) NULL,
    [Title] [nvarchar](50) NULL,
	[Address] [nvarchar](250) NULL,	
    [Deleted] [INT] DEFAULT 0
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile)
VALUES (NEWID(), 'The Bank of Tokyo and Mitsuibishi', 'Manchester United', '1234567890')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile)
VALUES (NEWID(), 'REE Corporation Group', 'Manchester United', '9876543210')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile)
VALUES (NEWID(), 'FPT Information System', 'Real Madrid', '1234567890')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile)
VALUES (NEWID(), 'HAG Corporation Group', 'Liverpool', '1234567890')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile)
VALUES (NEWID(), 'SMC Steel Company', 'PSG', '1234567890')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile)
VALUES (NEWID(), 'Marubeni Itochu Steel Vietnam Co. Ltd.', 'PSG', '1234567890')

GO


/****** Object:  Table [dbo].[Truck] ******/
CREATE TABLE [dbo].[Truck](
	[TruckId] [int] IDENTITY(1,1) NOT NULL,
    [TruckKey] [nvarchar](50) NOT NULL,
	[TruckName] [nvarchar](50) NULL,
	[TruckNumber] [nvarchar](50) NULL,
	[Description] [nvarchar](250) NULL,
    [Deleted] [INT] DEFAULT 0
 CONSTRAINT [PK_Truck] PRIMARY KEY CLUSTERED 
(
	[TruckId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Truck] (TruckKey, TruckName, TruckNumber, Description)
VALUES (NEWID(), 'TRUCK - Land Cruiser', 'T-LAND-123456789', 'Land Cruiser 2015')

INSERT INTO [dbo].[Truck] (TruckKey, TruckName, TruckNumber, Description)
VALUES (NEWID(), 'TRUCK - Mercedez', 'T-MERC-123456789', 'Mercedez 2017')

INSERT INTO [dbo].[Truck] (TruckKey, TruckName, TruckNumber, Description)
VALUES (NEWID(), 'TRUCK - BMW', 'T-BMW-852741963', 'BMW 2015')


/****** Object:  Table [dbo].[Account] ******/
CREATE TABLE [dbo].[Account](
	[AccountId] [int] IDENTITY(1,1) NOT NULL,
	[AccountKey] [nvarchar](50) NOT NULL,
	[AccountNo] [nvarchar](20) NOT NULL,
    [AccountName] [nvarchar](100) NULL,	
	[Description] [nvarchar](250) NULL,
    [Deleted] [INT] DEFAULT 0
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[AccountId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '111','Cash','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '112','Cash in bank','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '113','Cash transfer ','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '156','Goods','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '131','Account Receivable','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '331','Account Payment','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '511','Revenue','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '632','Cost of Goods Sold','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '642','Selling Cost','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '711','711','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '811','811','',0);
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Description,Deleted) VALUES (NEWID(), '911','911','',0);


/****** Object:  Table [dbo].[Transaction] ******/
CREATE TABLE [dbo].[Transaction](
	[TransactionId] [int] IDENTITY(1,1) NOT NULL,
	[TransactionKey] [nvarchar](50) NOT NULL,
	[TransactionDate] [datetime] NOT NULL,
    [TransactionType] [nvarchar](20) NULL,
	[Description] [nvarchar](250) NULL,
	[DebitAcctNo] [nvarchar](20) NOT NULL,
	[CreditAcctNo] [nvarchar](20) NOT NULL,
	[Currency] [nvarchar](3) NOT NULL,
	[TotalAmount] [decimal](12,4) NOT NULL DEFAULT 0,
	[CustomerId] [int] DEFAULT 0,
  	[CustomerName] [nvarchar](50) DEFAULT NULL,
	[InvoiceNo] [nvarchar](20) DEFAULT NULL,
	[InvoiceDate] [datetime] DEFAULT CURRENT_TIMESTAMP, -- ngay hoa don
	[InvoiceDesc] [nvarchar](250) DEFAULT NULL,  
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_Transaction] PRIMARY KEY CLUSTERED 
(
	[TransactionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'2016-11-07','CASHIN','Cash In ', '111', '642', 'VND', 5000000, 1, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'2016-11-07','CASHIN','Cash In ', '111', '642', 'VND', 6000000, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'2016-11-07','CASHIN','Cash In ', '111', '531', 'USD', 900, 1, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'2016-11-07','CASHOUT','Cash Out', '111', '642', 'VND', 1000000, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'2016-11-07','CASHOUT','Cash Out', '111', '642', 'VND', 2000000, 3, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'2016-11-07','CASHOUT','Cash Out', '111', '532', 'USD', 500, 1, 'SYSTEM', 'SYSTEM');


/****** Object:  Table [dbo].[TransactionDetail] ******/