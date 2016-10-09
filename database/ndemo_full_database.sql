DROP SCHEMA IF EXISTS `ndemo` ;
CREATE SCHEMA `ndemo` ;

USE `ndemo`;
--
-- Table structure for table `tblBrand`
--
DROP TABLE IF EXISTS `tblbrand`;
CREATE TABLE `tblbrand` (
  `BrandId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `Deleted` tinyint(1) DEFAULT '0',
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
  `CategoryId` int(11) NOT NULL,
  `CategoryName` varchar(45) DEFAULT NULL,
  `Deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`CategoryId`),
  UNIQUE KEY `CategoryId_UNIQUE` (`CategoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;


--
-- Table structure for table `tblproduct`
--
DROP TABLE IF EXISTS `tblproduct`;
CREATE TABLE `tblproduct` (
  `ProductId` int(11) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(45) NOT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `BrandId` int(11) NOT NULL,
  `Price` decimal(10,0) DEFAULT '0',
  `Colour` varchar(10) DEFAULT NULL,
  `Created` date DEFAULT NULL,
  `Status` varchar(10) DEFAULT NULL,
  `Deleted` tinyint(1) DEFAULT '0',
  `LatestReviewInfo` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ProductId`),
  UNIQUE KEY `ProductId_UNIQUE` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COMMENT='	';

--
-- Sample data for table `tblproduct`
--
INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`) 
VALUES ('Sony Vaio','Sony Vaio',1,100,'White','2013-08-25','In',0,'UserName###Email###Rating###Comment');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Dell','Dell Vostro',2,2000,'White','2013-08-25','In',1,'anhnguyen###anhnguyen@sony.com###2###Rating 2 - Very Good');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP Note','HP Note',2,100,'Yellow','2013-08-25','In',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Asus','Asus',4,800,'White','2013-08-25','In',0,'hoanganh###hoanganh@ibm.com###4###Rating 4');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Acer','Laptop Acer',4,100,'White','2013-08-25','In',0,'hoanganh###hoanganh@ibm.com###5###Rating 5');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Sony Xperia','Sony Xperia',6,1200,'White','2015-08-25','Out',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('IBM T42','IBM T42',20,100,'Red','2013-08-25','Out',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('IBM T60','IBM T60',20,100,'Red','2006-08-25','Out',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('IBM T400','IBM T400',20,100,'Red','2010-08-25','Out',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Sony Erikson','Sony Erikson',20,1100,'Black','2013-08-25','Out',0,'anhnguyen###anhnguyen@sony.com###4###It is good');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP Onebook','HP One Book',10,100,'Black','2013-08-25','Out',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP Thirdbook','HP Thirdbook',10,700,'Blue','2013-08-25','Archive',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP Thirdbook','HP Thirdbook',7,100,'Green','2013-08-25','Archive',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP Thirdbook','HP Thirdbook',7,300,'Blue','2013-08-25','Archive',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP Thirdbook','HP Thirdbook',7,25,'Green','2013-08-25','Archive',0,'Duy Anh###avo4@hvn.com###5###Review with Rating 5');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP Thirdbook','HP Thirdbook',7,100,'Green','2013-08-25','Archive',0,'Duy Anh###avo4@hvn.com###9###Very Good');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP 101','HP 101',7,300,'Green','2016-08-25','IN',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP 102','HP 102',8,4000,'Blue','2016-08-25','IN',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP 103','HP 103',9,300,'Blue','2016-08-25','OUT',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP 104','HP 104',10,300,'Blue','2016-08-25','OUT',0,'Duy Anh###avo4@hvn.com###2###MySQL 5.7 is the best release ever of the world most popular open source database and provides a new, advanced feature set designed to enable those who are building the next generation of web-based');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP 105','HP 105',10,300,'Blue','2016-08-25','OUT',0,NULL);

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP 106','HP 106',10,300,'Blue','2016-08-25','OUT',0,'Duy Anh###avo4@hvn.com###2###Rating 2');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('HP 1088','HP 1088',10,200,'Blue','2016-08-25','IN',0,'Duy Anh###avo4@hvn.com###2###Rating 2');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Iphone 6','Iphone 6',10,300,'Green','2016-08-26','OUT',0,'Anh###avo4@hvn.com###5###I this tutorial, you will learn about variables in the stored procedure, how to declare, and use SQL');

INSERT INTO `tblproduct`(`ProductName`,`Description`,`BrandId`,`Price`,`Colour`,`Created`,`Status`,`Deleted`,`LatestReviewInfo`)
VALUES ('Ipad 5','Ipad 5',22,3000,'Green','2016-08-28','OUT',0,'Duy Anh###avo4@hvn.com###7###Rating 7');

--
-- Table structure for table `tblreview`
--
DROP TABLE IF EXISTS `tblreview`;
CREATE TABLE `tblreview` (
  `ReviewId` int(11) NOT NULL AUTO_INCREMENT,
  `Rating` int(2) DEFAULT NULL,
  `Comment` varchar(200) DEFAULT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `ProductId` int(11) NOT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`ReviewId`),
  UNIQUE KEY `ReviewId_UNIQUE` (`ReviewId`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

--
-- Sample data for table `tbluser`
--
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (1,'Not bad','2013-08-25 17:00:00',1,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (5,'Normal','2013-08-25 17:00:00',2,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (6,'Good','2013-08-22 17:00:00',3,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (6,'Good','2013-08-22 17:00:00',3,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (6,'Good','2013-08-22 17:00:00',3,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Good','2013-08-22 17:00:00',3,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad','2013-08-22 17:00:00',6,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Very Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Very Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Very Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (6,'Very Good','2015-08-22 17:00:00',11,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (6,'Very Good','2015-08-22 17:00:00',11,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Very Good','2015-08-22 17:00:00',11,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Good','2015-08-22 17:00:00',11,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad 5321','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad 5321','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Rate Bad 2016','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (5,'Rate Bad 2016','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Very Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Very Bad','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (6,'Very Good','2015-08-22 17:00:00',11,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (4,'Very Good','2015-08-22 17:00:00',11,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Very Good','2015-08-22 17:00:00',11,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad 5321','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad 5321','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Bad Rate','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (5,'5555','2016-07-10 15:35:28',12,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (7,'It is good ...','2016-07-10 15:47:40',12,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'It is good','2016-07-10 15:51:46',12,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (4,'It is good','2016-07-10 15:52:16',12,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (5,'It is good','2016-07-10 16:02:46',7,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (2,'It is good','2016-07-10 16:04:12',7,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (5,'Comment 5','2016-07-10 16:26:23',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (4,'4','2016-07-10 16:57:39',15,'4',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (6,'6','2016-07-10 16:32:05',7,'6',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:40',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:40',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:41',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:41',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:41',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Angola & Nigieria','2016-07-10 16:43:58',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (2,'Comment','2016-07-10 16:49:55',15,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'3','2016-07-10 16:51:22',15,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (7,'Rate Bad 2016','2013-08-22 17:00:00',5,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (4,'Good','2016-07-10 15:46:03',2,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (0,'It is good ...','2016-07-10 15:47:55',12,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'It is good','2016-07-10 15:51:48',12,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (7,'Very Bad','2016-07-10 15:52:29',12,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (7,'However, you would be wise to convert the column to the DATE data type instead of using strings','2016-07-10 15:52:58',12,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (2,'It is good','2016-07-10 16:02:21',12,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (1,'It is good','2016-07-10 16:03:49',7,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (8,'It is good','2016-07-10 16:04:52',7,'test@hvn.com',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (5,'Comment 5','2016-07-10 16:26:24',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:38',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:40',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:40',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:41',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Comment','2016-07-10 16:43:41',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (3,'Angola & Nigieria','2016-07-10 16:43:57',7,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (6,'Comment 6','2016-07-10 16:46:51',15,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (1,'11','2016-07-10 16:50:26',15,'hvn@hvn.net',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (2,'2','2016-07-10 16:56:47',15,'2',0);
INSERT INTO `tblreview`(`Rating`, `Comment`, `Created`, `ProductId`, `Email`, `Deleted`) VALUES (2,'2222','2016-07-10 16:59:04',15,'hvn@hvn.net',0);

--
-- Table structure for table `tbluser`
--
DROP TABLE IF EXISTS `tbluser`;
CREATE TABLE `tbluser` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `UserType` varchar(20) NOT NULL,
  `UserName` varchar(45) NOT NULL,
  `DisplayName` varchar(50) DEFAULT NULL,
  `Email` varchar(20) NOT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `Deleted` tinyint(1) DEFAULT '0',
  `Hash` varchar(200) DEFAULT NULL,
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
INSERT INTO `tbluser` (`UserType`, `UserName`, `Email`, `DateOfBirth`, `Deleted`) VALUES ('CUSTOMER','vinh','vinhcao@hvn.com','1990-04-04',1);
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