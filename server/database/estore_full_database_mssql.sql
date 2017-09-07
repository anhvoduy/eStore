USE estore;
GO

/****** Object:  Table [dbo].[Customer] ******/
-- DROP TABLE [dbo].[Customer];
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
-- DROP TABLE [dbo].[Truck];
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
-- DROP TABLE [dbo].[Account];
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
-- DROP TABLE [dbo].[Transaction];
CREATE TABLE [dbo].[Transaction](
	[TransactionId] [int] IDENTITY(1,1) NOT NULL,
	[TransactionKey] [nvarchar](50) NOT NULL,
	[TransactionNo] [nvarchar](50) DEFAULT NULL,
	[TransactionDate] [datetime] DEFAULT NULL,
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

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionNo, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'CASHIN-000001', '2016-11-07','CASHIN','Cash In ', '111', '642', 'VND', 5000000, 1, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionNo, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'CASHIN-000002', '2016-11-07','CASHIN','Cash In ', '111', '642', 'VND', 6000000, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionNo, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'CASHIN-000003', '2016-11-07','CASHIN','Cash In ', '111', '531', 'USD', 900, 1, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionNo, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'CASHOUT-000001', '2016-11-07','CASHOUT','Cash Out', '111', '642', 'VND', 1000000, 2, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionNo, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'CASHOUT-000002', '2016-11-07','CASHOUT','Cash Out', '111', '642', 'VND', 2000000, 3, 'SYSTEM', 'SYSTEM');

INSERT INTO [dbo].[Transaction] (TransactionKey, TransactionNo, TransactionDate, TransactionType, Description, DebitAcctNo, CreditAcctNo, Currency, TotalAmount, CustomerId, Author, Editor)
VALUES (NEWID(),'CASHOUT-000003', '2016-11-07','CASHOUT','Cash Out', '111', '532', 'USD', 500, 1, 'SYSTEM', 'SYSTEM');


/****** Object:  Table [dbo].[TransactionDetail] ******/
-- DROP TABLE [dbo].[TransactionDetail];
CREATE TABLE [dbo].[TransactionDetail](
	[TransactionDetailId] [int] IDENTITY(1,1) NOT NULL,	
	[TransactionId] [int] NOT NULL,
    [ProductId] [int] NOT NULL DEFAULT 0,
	[ProductName] [nvarchar](50) NULL,
	[Description] [nvarchar](250) NULL,
	[Currency] [nvarchar](3) NOT NULL,
	[Quantity] [int] NOT NULL DEFAULT 0,
	[Price] [decimal](12,4) NOT NULL DEFAULT 0,
	[Amount] [decimal](12,4) NOT NULL DEFAULT 0,			
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
-- DROP TABLE [dbo].[Inventory];
CREATE TABLE [dbo].[Inventory](
	[InventoryId] [int] IDENTITY(1,1) NOT NULL,	
	[StockId] [int] NOT NULL,
    [StockDate] [datetime] NOT NULL,
	[ProductId] [int] NOT NULL,
	[ProductName] [nvarchar](50) NOT NULL,	
	[QuantityInput] [int] NOT NULL DEFAULT 0,
	[QuantityOutput] [int] NOT NULL DEFAULT 0,
	[QuantityBalance] [int] NOT NULL DEFAULT 0,
	[IsPerpetual] [int] NOT NULL DEFAULT 0,	
	[Currency] [nvarchar](3) NOT NULL,
	[Price] [decimal](12,4) NOT NULL DEFAULT 0,
	[TotalAmount] [decimal](12,4) NOT NULL DEFAULT 0,		
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_InventoryId] PRIMARY KEY CLUSTERED 
(
	[InventoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


/****** Object:  Table [dbo].[Stock] ******/
-- DROP TABLE [dbo].[Stock];
CREATE TABLE [dbo].[Stock](
	[StockId] [int] IDENTITY(1,1) NOT NULL,	
	[StockKey] [nvarchar](50) NOT NULL,
    [StockDate] [datetime] NOT NULL,
	[StockType] [nvarchar](20) NOT NULL,	
	[Description] [nvarchar](250) NULL,
	[Currency] [nvarchar](3) NOT NULL,
	[TotalAmount] [decimal](12,4) NOT NULL DEFAULT 0,
	[CustomerId] [int] DEFAULT 0,
  	[CustomerName] [nvarchar](50) NULL,
	[InvoiceNo] [nvarchar](20) NULL,
	[InvoiceDate] [datetime] NULL, -- ngay hoa don
	[InvoiceDesc] [nvarchar](250) NULL,
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_StockId] PRIMARY KEY CLUSTERED
(
	[StockId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


/****** Object:  Table [dbo].[StockDetail] ******/
-- DROP TABLE [dbo].[StockDetail];
CREATE TABLE [dbo].[StockDetail](
	[StockDetailId] [int] IDENTITY(1,1) NOT NULL,	
	[StockId] [int] NOT NULL DEFAULT 0,
	[ProductId] [int] NOT NULL DEFAULT 0,
  	[ProductName] [nvarchar](50) NULL,
    [Description] [nvarchar](250) NULL,
	[Quantity] [int] NOT NULL DEFAULT 0,
	[Price] [decimal](12,4) NOT NULL DEFAULT 0,
	[Amount] [decimal](12,4) NOT NULL DEFAULT 0,	
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_StockDetailId] PRIMARY KEY CLUSTERED
(
	[StockDetailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Journal] ******/
-- DROP TABLE [dbo].[Journal];
CREATE TABLE [dbo].[Journal](
	[JournalId] [int] IDENTITY(1,1) NOT NULL,	
	[JournalKey] [nvarchar](50) NOT NULL,
	[JournalType] [nvarchar](20) NOT NULL,
	[JournalDate] [datetime] NULL,
	[Description] [nvarchar](250) NULL,
	[Currency] [nvarchar](3) NOT NULL,
	[TotalAmount] [decimal](12,4) NOT NULL DEFAULT 0,
	[DebitAcctNo] [nvarchar](20) NOT NULL,
	[CreditAcctNo] [nvarchar](20) NOT NULL,	
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_JournalId] PRIMARY KEY CLUSTERED
(
	[JournalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


/****** Object:  Table [dbo].[Brand] ******/
-- DROP TABLE [dbo].[Brand];
CREATE TABLE [dbo].[Brand](
	[BrandId] [int] IDENTITY(1,1) NOT NULL,	
	[BrandKey] [nvarchar](50) NOT NULL,
	[BrandName] [nvarchar](50) NOT NULL,	
	[Description] [nvarchar](250) NULL,	
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_BrandId] PRIMARY KEY CLUSTERED
(
	[BrandId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Thinkpad T450','Lenovo Thinkpad T450','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Apple','Apple','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'HIPHOP 005','HIPHOP 005','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Asus','Asus','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'HP Pro 1005','HP Pro 1005','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'IBM','IBM','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Super Car 2002','Super Car 2002','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Dell_XPS','Dell_XPS','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'HP 1009','HP Enterprise 1009','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Brand TEST 10','Brand TEST 10','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Asus 520 V.1001','Asus 520 V.10008','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Brand TEST 12xx','Brand TEST 12xx','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'HP ProBook 2015','HP ProBook 2015','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Brand TEST 14','Brand TEST 14','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'HP Pro Enter 2011','HP Pro Enter 2011','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Brand 16','Brand 16','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'DEL version.2017','DEL version.2017','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Brand TEST 18','Brand TEST 18','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Brand 19 Century','Brand 19 Century','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Coca Cola','Coca Cola','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Pepsi Company','Pepsi Company','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Brand] (BrandKey,BrandName,Description,Author,Editor) VALUES (NEWID(),'Facebook','The Facebook','SYSTEM','SYSTEM');


/****** Object:  Table [dbo].[Product] ******/
-- DROP TABLE [dbo].[Product];
CREATE TABLE [dbo].[Product](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,	
	[ProductKey] [nvarchar](50) NOT NULL,
	[ProductName] [nvarchar](50) NOT NULL,	
	[Description] [nvarchar](250) NULL,
	[BrandId] [int] NOT NULL DEFAULT 0,
	[Price] [decimal](12,4) NOT NULL DEFAULT 0,
	[Colour] [nvarchar](10) NULL,
	[Status] [nvarchar](10) NULL,
	[LatestReviewInfo] [nvarchar](250) NULL,
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_ProductId] PRIMARY KEY CLUSTERED
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


/****** Object:  Table [dbo].[Review] ******/
-- DROP TABLE [dbo].[Review];
CREATE TABLE [dbo].[Review](
	[ReviewId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Rating] [int] NOT NULL DEFAULT 0,
	[Comment] [nvarchar](250) NULL,
	[ProductId] [int] NOT NULL DEFAULT 0,
	[Email] [nvarchar](50) NULL,
	[Created] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Updated] [datetime] DEFAULT CURRENT_TIMESTAMP,
	[Author] [nvarchar](50) NOT NULL,
	[Editor] [nvarchar](50) NOT NULL,
    [Deleted] [int] DEFAULT 0
 CONSTRAINT [PK_ReviewId] PRIMARY KEY CLUSTERED
(
	[ReviewId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Review](Name, Rating,Comment,Created,ProductId,Email,Author,Editor) VALUES ('TEST',1,'Not bad','2013-08-25 17:00:00',1,'test@hvn.com','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Review](Name, Rating,Comment,Created,ProductId,Email,Author,Editor) VALUES ('TEST',5,'Normal','2013-08-25 17:00:00',2,'test@hvn.com','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Review](Name, Rating,Comment,Created,ProductId,Email,Author,Editor) VALUES ('TEST',6,'Good','2013-08-22 17:00:00',3,'test@hvn.com','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Review](Name, Rating,Comment,Created,ProductId,Email,Author,Editor) VALUES ('TEST',3,'Good','2013-08-22 17:00:00',3,'test@hvn.com','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Review](Name, Rating,Comment,Created,ProductId,Email,Author,Editor) VALUES ('TEST',3,'Bad','2013-08-22 17:00:00',5,'test@hvn.com','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Review](Name, Rating,Comment,Created,ProductId,Email,Author,Editor) VALUES ('TEST',3,'Comment','2016-07-10 16:43:40',7,'hvn@hvn.net','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Review](Name, Rating,Comment,Created,ProductId,Email,Author,Editor) VALUES ('TEST',3,'Comment','2016-07-10 16:43:41',7,'hvn@hvn.net','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Review](Name, Rating,Comment,Created,ProductId,Email,Author,Editor) VALUES ('TEST',3,'Comment','2016-07-10 16:43:41',7,'hvn@hvn.net','SYSTEM','SYSTEM');
INSERT INTO [dbo].[Review](Name, Rating,Comment,Created,ProductId,Email,Author,Editor) VALUES ('TEST',2,'2222','2016-07-10 16:59:04',15,'hvn@hvn.net','SYSTEM','SYSTEM');


/****** Object:  Table [dbo].[User] ******/
-- DROP TABLE [dbo].[User];
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
