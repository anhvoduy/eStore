DROP SCHEMA IF EXISTS `ndemo` ;
CREATE SCHEMA `ndemo` ;

USE `ndemo`;


--
-- Table structure for table `tblCustomer`
--
DROP TABLE IF EXISTS `tblCustomer`;
CREATE TABLE `tblCustomer` (
  `CustomerId` INT(11) NOT NULL AUTO_INCREMENT,
  `CustomerNo` VARCHAR(45) NOT NULL,
  `CustomerName` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(200) DEFAULT NULL,
  `Address` VARCHAR(200) DEFAULT NULL,
  `Mobile` VARCHAR(45) DEFAULT NULL,
  `Tel` VARCHAR(45) DEFAULT NULL,
  `Email` VARCHAR(45) DEFAULT NULL,  
  `Deleted` TINYINT(1) DEFAULT '0',
  PRIMARY KEY (`CustomerId`),
  UNIQUE KEY `CustomerId_UNIQUE` (`CustomerId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

--
-- Sample data for table `tblCustomer`
--
INSERT INTO `tblCustomer` (`CustomerNo`,`CustomerName`,`Description`,`Deleted`) VALUES (uuid(),'Van Thinh Phat','',0);
INSERT INTO `tblCustomer` (`CustomerNo`,`CustomerName`,`Description`,`Deleted`) VALUES (uuid(),'Cong ty CP REE','',0);
INSERT INTO `tblCustomer` (`CustomerNo`,`CustomerName`,`Description`,`Deleted`) VALUES (uuid(),'Cong ty CP FPT','',0);


--
-- Table structure for table `tblAccount`
--
DROP TABLE IF EXISTS `tblAccount`;
CREATE TABLE `tblAccount` (
  `AccountId` INT(11) NOT NULL AUTO_INCREMENT,
  `AccountNo` VARCHAR(20) NOT NULL,
  `AccountName` VARCHAR(100) NOT NULL,
  `Description` VARCHAR(200) DEFAULT NULL,
  `Deleted` TINYINT(1) DEFAULT '0',
  PRIMARY KEY (`AccountId`),
  UNIQUE KEY `AccountId_UNIQUE` (`AccountId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

--
-- Sample data for table `tblAccount`
--
INSERT INTO `tblAccount` (`AccountNo`,`AccountName`,`Description`,`Deleted`) VALUES ('111','Cash','',0);
INSERT INTO `tblAccount` (`AccountNo`,`AccountName`,`Description`,`Deleted`) VALUES ('112','Cash in bank','',0);
INSERT INTO `tblAccount` (`AccountNo`,`AccountName`,`Description`,`Deleted`) VALUES ('113','Cash transfer ','',0);
INSERT INTO `tblAccount` (`AccountNo`,`AccountName`,`Description`,`Deleted`) VALUES ('156','Goods','',0);
INSERT INTO `tblAccount` (`AccountNo`,`AccountName`,`Description`,`Deleted`) VALUES ('131','Cac khoan phai thu','',0);
INSERT INTO `tblAccount` (`AccountNo`,`AccountName`,`Description`,`Deleted`) VALUES ('331','Cac khoan phai tra','',0);
INSERT INTO `tblAccount` (`AccountNo`,`AccountName`,`Description`,`Deleted`) VALUES ('511','Doanh thu','',0);
INSERT INTO `tblAccount` (`AccountNo`,`AccountName`,`Description`,`Deleted`) VALUES ('631','Chi phí','',0);


--
-- Table structure for table `tblTransaction`
--
DROP TABLE IF EXISTS `tblTransaction`;
CREATE TABLE `tblTransaction` (
  `TransactionId` INT(11) NOT NULL AUTO_INCREMENT,
  `TransactionNo` VARCHAR(45) NOT NULL,
  `TransactionType` VARCHAR(20) NOT NULL,
  `Currency` VARCHAR(3) DEFAULT NULL,
  `TotalAmount` DECIMAL(11,4) NOT NULL DEFAULT '0',
  `CustomerId` INT(11) DEFAULT NULL,
  `CustomerName` VARCHAR(45) DEFAULT NULL,
  `InvoiceNo` VARCHAR(20) DEFAULT NULL,
  `InvoiceDate` DATE DEFAULT NULL,
  `InvoiceDesc` VARCHAR(200) DEFAULT NULL,
  `Description` VARCHAR(200) DEFAULT NULL,  
  `Deleted` TINYINT(1) DEFAULT '0',
  PRIMARY KEY (`TransactionId`),
  UNIQUE KEY `TransactionId_UNIQUE` (`TransactionId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

--
-- Table structure for table `tblTransactionDetail`
--
DROP TABLE IF EXISTS `tblTransactionDetail`;
CREATE TABLE `tblTransactionDetail` (
  `TransactionDetailId` INT(11) NOT NULL AUTO_INCREMENT,
  `TransactionId` INT(11) NOT NULL,
  `ProductId` INT(11) DEFAULT NULL,  
  `ProductName` VARCHAR(45) DEFAULT NULL,  
  `Quantity` DECIMAL(11,4) NOT NULL DEFAULT '0',
  `Amount` DECIMAL(11,4) NOT NULL DEFAULT '0',
  `TotalAmount` DECIMAL(11,4) NOT NULL DEFAULT '0',
  `Deleted` TINYINT(1) DEFAULT '0',
  PRIMARY KEY (`TransactionDetailId`),
  UNIQUE KEY `TransactionDetailId_UNIQUE` (`TransactionDetailId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

--
-- Table structure for table `tblBrand`
--
DROP TABLE IF EXISTS `tblBrand`;
CREATE TABLE `tblBrand` (
  `BrandId` INT(11) NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(200) DEFAULT NULL,
  `Deleted` TINYINT(1) DEFAULT '0',
  PRIMARY KEY (`BrandId`),
  UNIQUE KEY `BrandId_UNIQUE` (`BrandId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

--
-- Sample data for table `tblbrand`
--
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Thinkpad T450','Lenovo Thinkpad T450',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Apple','Apple',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('HIPHOP 005','HIPHOP 005',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Asus','Asus',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('HP Pro 1005','HP Pro 1005',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('IBM','IBM',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Super Car 2002','Super Car 2002',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Dell_XPS','Dell_XPS',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('HP 1009','HP Enterprise 1009',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Brand TEST 10','Brand TEST 10',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Asus 520 V.1001','Asus 520 V.10008',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Brand TEST 12xx','Brand TEST 12xx',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('HP ProBook 2015','HP ProBook 2015',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Brand TEST 14','Brand TEST 14',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('HP Pro Enter 2011','HP Pro Enter 2011',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Brand 16','Brand 16',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('DEL version.2017','DEL version.2017',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Brand TEST 18','Brand TEST 18',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Brand 19 Century','Brand 19 Century',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Coca Cola','Coca Cola',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Pepsi Company','Pepsi Company',0);
INSERT INTO `tblbrand` (`Name`,`Description`,`Deleted`) VALUES ('Facebook','The Facebook',0);

--
-- Table structure for table `tblcategory`
--

DROP TABLE IF EXISTS `tblcategory`;
CREATE TABLE `tblcategory` (
  `CategoryId` INT(11) NOT NULL,
  `CategoryName` VARCHAR(45) DEFAULT NULL,
  `Deleted` TINYINT(1) DEFAULT '0',
  PRIMARY KEY (`CategoryId`),
  UNIQUE KEY `CategoryId_UNIQUE` (`CategoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;


--
-- Table structure for table `tblproduct`
--
DROP TABLE IF EXISTS `tblproduct`;
CREATE TABLE `tblproduct` (
  `ProductId` INT(11) NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(200) DEFAULT NULL,
  `BrandId` INT(11) NOT NULL,
  `Price` DECIMAL(10,0) DEFAULT '0',
  `Colour` VARCHAR(10) DEFAULT NULL,
  `Created` DATE DEFAULT NULL,
  `Status` VARCHAR(10) DEFAULT NULL,
  `Deleted` TINYINT(1) DEFAULT '0',
  `LatestReviewInfo` VARCHAR(250) DEFAULT NULL,
  PRIMARY KEY (`ProductId`),
  UNIQUE KEY `ProductId_UNIQUE` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COMMENT='	';

--
-- Sample data for table `tblproduct`
--
INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`) 
VALUES ('Sony Vaio','Sony Vaio',1,100,'White','2013-08-25','In',0,'');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Dell','Dell Vostro',2,2000,'White','2013-08-25','In',1,'');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP Note','HP Note',2,100,'Yellow','2013-08-25','In',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Asus','Asus',4,800,'White','2013-08-25','In',0,'');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Acer','Laptop Acer',4,100,'White','2013-08-25','In',0,'');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Sony Xperia','Sony Xperia',6,1200,'White','2015-08-25','Out',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('IBM T42','IBM T42',20,100,'Red','2013-08-25','Out',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('IBM T60','IBM T60',20,100,'Red','2006-08-25','Out',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('IBM T400','IBM T400',20,100,'Red','2010-08-25','Out',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Ipad 5','Ipad 5',22,3000,'Green','2016-08-28','OUT',0,'');

--
-- Table structure for table `tblreview`
--
DROP TABLE IF EXISTS `tblreview`;
CREATE TABLE `tblreview` (
  `ReviewId` INT(11) NOT NULL AUTO_INCREMENT,
  `Rating` int(2) DEFAULT NULL,
  `Comment` VARCHAR(200) DEFAULT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `ProductId` INT(11) NOT NULL,
  `Email` VARCHAR(45) DEFAULT NULL,
  `Deleted` TINYINT(1) DEFAULT '0',
  PRIMARY KEY (`ReviewId`),
  UNIQUE KEY `ReviewId_UNIQUE` (`ReviewId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

--
-- Sample data for table `tbluser`
--
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (1,'Not bad','2013-08-25 17:00:00',1,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (5,'Normal','2013-08-25 17:00:00',2,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (6,'Good','2013-08-22 17:00:00',3,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Good','2013-08-22 17:00:00',3,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:40',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:41',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:41',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (2,'2222','2016-07-10 16:59:04',15,'hvn@hvn.net',0);

--
-- Table structure for table `tbluser`
--
DROP TABLE IF EXISTS `tbluser`;
CREATE TABLE `tbluser` (
  `UserId` INT(11) NOT NULL AUTO_INCREMENT,
  `UserType` VARCHAR(20) NOT NULL,
  `UserName` VARCHAR(45) NOT NULL,
  `DisplayName` VARCHAR(50) DEFAULT NULL,
  `Email` VARCHAR(20) NOT NULL,
  `DateOfBirth` DATE DEFAULT NULL,
  `Deleted` TINYINT(1) DEFAULT '0',
  `Hash` VARCHAR(200) DEFAULT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`),
  UNIQUE KEY `UserId_UNIQUE` (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

--
-- Sample data for table `tbluser`
--
INSERT INTO `tbluser` (`UserType`, `UserName`, `Email`, `DateOfBirth`, `Deleted`) VALUES ('CUSTOMER','anhnguyen','anhnguyen@sony.com','1980-06-06',0);
INSERT INTO `tbluser` (`UserType`, `UserName`, `Email`, `DateOfBirth`, `Deleted`) VALUES ('MERCHANT','hoanganh','hoanganh@ibm.com','1990-03-03',0);
INSERT INTO `tbluser` (`UserType`, `UserName`, `Email`, `DateOfBirth`, `Deleted`) VALUES ('CUSTOMER','vinhcao','vinhcao@hvn.com','1990-04-04',1);
INSERT INTO `tbluser` (`UserType`, `UserName`, `Email`, `DateOfBirth`, `Deleted`) VALUES ('CUSTOMER','john','john@microsoft.com','2000-12-26',0);
INSERT INTO `tbluser` (`UserType`, `UserName`, `Email`, `DateOfBirth`, `Deleted`) VALUES ('CUSTOMER','Duy Anh','avo4@hvn.com','1984-12-22',0);
INSERT INTO `tbluser` (`UserType`, `UserName`, `Email`, `DateOfBirth`, `Deleted`) VALUES ('MERCHANT','Anh','anhvod@hvn.com','1984-12-24',0);

--
-- Store Procedure: sp_product_paging
--
DROP procedure IF EXISTS `sp_product_paging`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_product_paging`(
	IN _pageindex int)
BEGIN
	IF(_pageindex = 0) THEN
		SELECT 	prod.ProductId, prod.ProductName, prod.Description,
			prod.BrandId, bra.Name AS BrandName, 
			prod.Price, prod.Colour, prod.Created, prod.Status 
		FROM tblproduct prod inner join tblbrand bra 
		WHERE 	prod.brandId = bra.brandId
			AND prod.productId > _pageindex
		ORDER BY prod.productId DESC
		LIMIT 10;
    ELSE
		SELECT 	prod.ProductId, prod.ProductName, prod.Description,
			prod.BrandId, bra.Name AS BrandName, 
			prod.Price, prod.Colour, prod.Created, prod.Status 
		FROM tblproduct prod inner join tblbrand bra 
		WHERE 	prod.brandId = bra.brandId
			AND prod.productId < _pageindex
		ORDER BY prod.productId DESC
        LIMIT 10;
    END IF;	    
END ;;
DELIMITER ;