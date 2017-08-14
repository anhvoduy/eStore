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
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,	
    [Deleted] [INT] DEFAULT 0
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile, Author, Editor)
VALUES (NEWID(), 'The Bank of Tokyo and Mitsuibishi', 'Manchester United', '1234567890', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile, Author, Editor)
VALUES (NEWID(), 'REE Corporation Group', 'Manchester United', '9876543210', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile, Author, Editor)
VALUES (NEWID(), 'FPT Information System', 'Real Madrid', '1234567890', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile, Author, Editor)
VALUES (NEWID(), 'HAG Corporation Group', 'Liverpool', '1234567890', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile, Author, Editor)
VALUES (NEWID(), 'SMC Steel Company', 'PSG', '1234567890', 'SYSTEM', 'SYSTEM')

INSERT INTO [dbo].[Customer] (CustomerKey, CustomerName, Address, Mobile, Author, Editor)
VALUES (NEWID(), 'Marubeni Itochu Steel Vietnam Co. Ltd.', 'PSG', '1234567890', 'SYSTEM', 'SYSTEM')

GO


/****** Object:  Table [dbo].[Truck] ******/
CREATE TABLE [dbo].[Truck](
	[TruckId] [int] IDENTITY(1,1) NOT NULL,
    [TruckKey] [nvarchar](50) NOT NULL,
	[TruckName] [nvarchar](50) NULL,
	[TruckNumber] [nvarchar](50) NULL,
	[Description] [nvarchar](250) NULL,
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [INT] DEFAULT 0
 CONSTRAINT [PK_Truck] PRIMARY KEY CLUSTERED 
(
	[TruckId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Truck] (TruckKey, TruckName, TruckNumber, Description, Author, Editor)
VALUES (NEWID(), 'TRUCK - Land Cruiser', 'T-LAND-123456789', 'Land Cruiser 2015', 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Truck] (TruckKey, TruckName, TruckNumber, Description, Author, Editor)
VALUES (NEWID(), 'TRUCK - Mercedez', 'T-MERC-123456789', 'Mercedez 2017', 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Truck] (TruckKey, TruckName, TruckNumber, Description, Author, Editor)
VALUES (NEWID(), 'TRUCK - BMW', 'T-BMW-852741963', 'BMW 2015', 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Truck] (TruckKey, TruckName, TruckNumber, Description, Author, Editor)
VALUES (NEWID(), 'TRUCK - MAX', 'T-MAX-852741963', 'Kawasaki 2015', 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Truck] (TruckKey, TruckName, TruckNumber, Description, Author, Editor)
VALUES (NEWID(), 'TRUCK - EVEREST', 'T-EVEREST-852741963', 'Everest 2018', 'SYSTEM', 'SYSTEM');


/****** Object:  Table [dbo].[Account] ******/
CREATE TABLE [dbo].[Account](
	[AccountId] [int] IDENTITY(1,1) NOT NULL,
	[AccountKey] [nvarchar](50) NOT NULL,
	[AccountNo] [nvarchar](20) NOT NULL,
    [AccountName] [nvarchar](100) NULL,	
	[Description] [nvarchar](250) NULL,
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [INT] DEFAULT 0
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[AccountId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '111','Cash','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '112','Cash in bank','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '113','Cash transfer','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '156','Goods','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '131','Account Receivable','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '331','Account Payment','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '511','Revenue','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '632','Cost of Goods Sold','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '642','Selling Cost','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '711','711','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '811','811','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Account] (AccountKey, AccountNo,AccountName,Author,Editor) VALUES (NEWID(), '911','911','SYSTEM','SYSTEM');


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
	[InvoiceDate] [datetime] DEFAULT NULL, -- ngay hoa don
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
CREATE TABLE [dbo].[TransactionDetail](
	[TransactionDetailId] [int] IDENTITY(1,1) NOT NULL,	
	[TransactionId] [int] NOT NULL,
    [ProductId] [int] NOT NULL,
	[ProductName] [nvarchar](50) NOT NULL,	
	[Quantity] [int] NOT NULL DEFAULT 0,
	[Price] [decimal](12,4) NOT NULL DEFAULT 0,
	[Amount] [decimal](12,4) NOT NULL DEFAULT 0,
	[Currency] [nvarchar](3) NOT NULL,
	[Description] [nvarchar](250) NULL,	
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_TransactionDetail] PRIMARY KEY CLUSTERED 
(
	[TransactionDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


/****** Object:  Table [dbo].[Inventory] ******/


/****** Object:  Table [dbo].[Stock] ******/


/****** Object:  Table [dbo].[StockDetail] ******/


/****** Object:  Table [dbo].[Journal] ******/


/****** Object:  Table [dbo].[Brand] ******/


/****** Object:  Table [dbo].[Product] ******/


/****** Object:  Table [dbo].[Review] ******/


/****** Object:  Table [dbo].[User] ******/
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserKey] [nvarchar](50) NOT NULL,	
    [UserType] [nvarchar](20) NULL,
	[UserName] [nvarchar](50) NULL,
	[Hash] [nvarchar](50) NOT NULL,	
	[DisplayName] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[Mobile] [nvarchar](50) NULL,
	[Tel] [nvarchar](50) NULL,
	[Title] [nvarchar](50) NULL,
	[DateOfBirth] [datetime] DEFAULT CURRENT_TIMESTAMP,  	
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NULL,
	[Editor] [nvarchar](50) NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[User] (UserKey, UserType, UserName, Hash, DisplayName, Email, DateOfBirth, Author, Editor) VALUES (NEWID(),'USER', 'beckham',NEWID(),'David Beckham','hoanganh@ibm.com','1990-03-03','SYSTEM','SYSTEM');
INSERT INTO [dbo].[User] (UserKey, UserType, UserName, Hash, DisplayName, Email, DateOfBirth, Author, Editor) VALUES (NEWID(),'USER', 'huetran',NEWID(),'Hue Tran','huetran@hvn.com','1990-04-04','SYSTEM','SYSTEM');
INSERT INTO [dbo].[User] (UserKey, UserType, UserName, Hash, DisplayName, Email, DateOfBirth, Author, Editor) VALUES (NEWID(),'ADMIN','admin',  NEWID(),'John Mike','john@microsoft.com','2000-12-26','SYSTEM','SYSTEM');
INSERT INTO [dbo].[User] (UserKey, UserType, UserName, Hash, DisplayName, Email, DateOfBirth, Author, Editor) VALUES (NEWID(),'USER', 'avo4',   NEWID(),'Anh Vo','avo4@csc.com','1984-12-22','SYSTEM','SYSTEM');
INSERT INTO [dbo].[User] (UserKey, UserType, UserName, Hash, DisplayName, Email, DateOfBirth, Author, Editor) VALUES (NEWID(),'USER', 'anhvod', NEWID(),'Vo Duy Anh','anhvod@hvn.com','1984-12-24','SYSTEM','SYSTEM');
INSERT INTO [dbo].[User] (UserKey, UserType, UserName, Hash, DisplayName, Email, DateOfBirth, Author, Editor) VALUES (NEWID(),'USER', 'lukaku', NEWID(),'Lukaku','lukaku@sony.com','1982-08-08','SYSTEM','SYSTEM');
INSERT INTO [dbo].[User] (UserKey, UserType, UserName, Hash, DisplayName, Email, DateOfBirth, Author, Editor) VALUES (NEWID(),'USER', 'pogba',  NEWID(),'Pogba','pogba@samsung.com','1985-06-06','SYSTEM','SYSTEM');
