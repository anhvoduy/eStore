-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: workflow
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_unique_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP SCHEMA IF EXISTS `workflow` ;
CREATE SCHEMA `workflow` ;

USE `workflow`;

--
-- Table structure for table `si_user`
--
DROP TABLE IF EXISTS `si_user`;
CREATE TABLE `si_user` (
  `user_id`     int NOT NULL AUTO_INCREMENT,
  `email`       varchar(100) DEFAULT NULL,
  `name`    	varchar(250) DEFAULT NULL,
  `full_name`    	varchar(250) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `total_debit`    decimal(18,4) DEFAULT 0,
  `total_credit`   decimal(18,4) DEFAULT 0,
  `group_id`    int NOT NULL,
  `created`     timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated`     timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author`      varchar(50) DEFAULT NULL,
  `editor`      varchar(50) DEFAULT NULL,
  `deleted`     tinyint(1) DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_unique` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `si_user` (`email`,`name`,`full_name`,`description`,`total_debit`,`total_credit`,`group_id`,`author`) 
VALUES ('khalhb@gearvn.com','khalhb','Kha Lê','Developer',5000000,0,1,'SYSTEM');

INSERT INTO `si_user` (`email`,`name`,`full_name`,`description`,`total_debit`,`total_credit`,`group_id`,`author`) 
VALUES ('anhvd@gearvn.com','anhvd','Duy Anh','Developer',0,0,1,'SYSTEM');

INSERT INTO `si_user` (`email`,`name`,`full_name`,`description`,`total_debit`,`total_credit`,`group_id`,`author`) 
VALUES ('hao@gearvn.com','hao','Mr Hao','Developer',0,0,1,'SYSTEM');

INSERT INTO `si_user` (`email`,`name`,`full_name`,`description`,`total_debit`,`total_credit`,`group_id`,`author`) 
VALUES ('nhanvienhr1@gearvn.com','nvhr1','NV HR1','NV tuyển dụng 1',0,0,2,'SYSTEM');

INSERT INTO `si_user` (`email`,`name`,`full_name`,`description`,`total_debit`,`total_credit`,`group_id`,`author`) 
VALUES ('nhanvienhr2@gearvn.com','nvhr2','NV HR2','NV tuyển dụng 2',0,0,2,'SYSTEM');

--
-- Table structure for table `si_group`
--
DROP TABLE IF EXISTS `si_group`;
CREATE TABLE `si_group` (
  `group_id`     int NOT NULL AUTO_INCREMENT,
  `email`       varchar(100) NOT NULL,
  `name`    varchar(250) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `created`     timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated`     timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author`      varchar(50) DEFAULT NULL,
  `editor`      varchar(50) DEFAULT NULL,
  `deleted`     tinyint(1) DEFAULT '0',
  PRIMARY KEY (`group_id`),
  UNIQUE KEY `group_id_unique` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `si_group` (`email`, `name`, `description`, `author`) 
VALUES ('ptpm@gearvn.com', 'Phòng Phát Triển Phần Mềm', NULL, 'SYSTEM');

INSERT INTO `si_group` (`email`, `name`, `description`, `author`) 
VALUES ('nhansu@gearvn.com', 'Phòng Nhân Sự', NULL, 'SYSTEM');

--
-- Table structure for table `si_workflow`
--
DROP TABLE IF EXISTS `si_workflow`;
CREATE TABLE `si_workflow` (
  `workflow_id`   int NOT NULL AUTO_INCREMENT,
  `code`          varchar(20) DEFAULT NULL,
  `name`          varchar(250) DEFAULT NULL,
  `description`   varchar(250) DEFAULT NULL,
  `created`       timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated`       timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author`        varchar(50) DEFAULT NULL,
  `editor`        varchar(50) DEFAULT NULL,
  `deleted`       tinyint(1) DEFAULT '0',
  PRIMARY KEY (`workflow_id`),
  UNIQUE KEY `workflow_id_unique` (`workflow_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `si_workflow`(name, code, description, author, editor)
VALUES ('Giấy đề nghị tạm ứng', 'DNTU', 'Giấy đề nghị tạm ứng', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_workflow`(name, code, description, author, editor)
VALUES ('Giấy đề nghị hoàn ứng', 'HTTU', 'Giấy đề nghị hoàn ứng', 'SYSTEM', 'SYSTEM');

--
-- Table structure for table `si_status`
--
DROP TABLE IF EXISTS `si_status`;
CREATE TABLE `si_status` (
  `status_id`   int NOT NULL AUTO_INCREMENT,
  `code`        varchar(50) DEFAULT NULL,
  `name`        varchar(250) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `created`     timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated`     timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author`      varchar(50) DEFAULT NULL,
  `editor`      varchar(50) DEFAULT NULL,
  `deleted`     tinyint(1) DEFAULT '0',
  PRIMARY KEY (`status_id`),
  UNIQUE KEY `status_id_unique` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `si_status`(code, name, description, author, editor)
VALUES ('DRAFT', 'Draft a task', 'Draft a task', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_status`(code, name, description, author, editor)
VALUES ('PROCESSING', 'Task is processing', 'Task is processing', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_status`(code, name, description, author, editor)
VALUES ('DONE', 'Task is done', 'Task is done', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_status`(code, name, description, author, editor)
VALUES ('FAILED', 'Task is failed', 'Task is failed', 'SYSTEM', 'SYSTEM');

--
-- Table structure for table `si_process`
--
DROP TABLE IF EXISTS `si_process`;
CREATE TABLE `si_process` (
  `process_id`  int NOT NULL AUTO_INCREMENT,
  `workflow_id` int NOT NULL,
  `code`        varchar(50) DEFAULT NULL,
  `name`        varchar(250) DEFAULT NULL,
  `name_EN`     varchar(250) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  
  `assignees`       longtext DEFAULT NULL, -- khalhb@gearvn.com,anhvd@gearvn.com
  `followers`       longtext DEFAULT NULL, -- khalhb@gearvn.com,anhvd@gearvn.com

  `created`     timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated`     timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author`      varchar(50) DEFAULT NULL,
  `editor`      varchar(50) DEFAULT NULL,
  `deleted`     tinyint(1) DEFAULT '0',
  PRIMARY KEY (`process_id`),
  UNIQUE KEY `process_id_unique` (`process_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 'Giấy đề nghị tạm ứng'
SET @workflow_id1 = (SELECT workflow_id FROM si_workflow WHERE code = 'DNTU');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id1, 'PROCESS_BY_DEPARTMENT_LEAD', 'Đang duyệt bởi trưởng bộ phận', 'Process by Department Lead', '', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id1, 'PROCESS_BY_DIRECTOR', 'Đang duyệt bởi ban giám đốc', 'Process by Department Director', '', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id1, 'PROCESS_BY_ACCOUNTANT', 'Đang duyệt bởi kế toán duyệt chi', 'Process by Accountant', '', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id1, 'PROCESS_BY_PAYMENT', 'Đang duyệt bởi kế toán thanh toán', 'Process payment', '', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id1, 'PAYMENT_COMPLETED', 'Đã thanh toán', 'Payment Completed', '', 'SYSTEM', 'SYSTEM');

-- 'Giấy đề nghị hoàn ứng'
SET @workflow_id2 = (SELECT workflow_id FROM si_workflow WHERE code = 'HTTU');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id2, 'PROCESS_BY_DEPARTMENT_LEAD', 'Đang duyệt bởi trưởng bộ phận', 'Process by Department Lead', '', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id2, 'PROCESS_BY_ACCOUNTANT', 'Đang duyệt bởi kế toán duyệt chi', 'Process by Accountant', '', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id2, 'PROCESS_BY_CHIEF_ACCOUNTANT', 'Đang duyệt bởi kế toán trưởng', 'Process by Chief Accountant', '', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id2, 'PROCESS_BY_PAYMENT', 'Đang duyệt bởi kế toán thanh toán', 'Process payment', '', 'SYSTEM', 'SYSTEM');

INSERT INTO `si_process`(workflow_id, code, name, name_EN, description, author, editor)
VALUES (@workflow_id2, 'PAYMENT_COMPLETED', 'Đã thanh toán', 'Payment Completed', '', 'SYSTEM', 'SYSTEM');



--
-- Table structure for table `task`
--
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `task_id`         int NOT NULL AUTO_INCREMENT,
  `task_no`         varchar(50) DEFAULT NULL,
  `task_type`       varchar(50) DEFAULT NULL, -- Tam Ung = DNTU, Hoan Ung = HTTU
  `task_date`       datetime DEFAULT NULL,
  `name`            varchar(250) DEFAULT NULL,
  `description`     varchar(250) DEFAULT NULL,  
  `comments`        varchar(250) DEFAULT NULL,
    
  `status_id`       int(11) DEFAULT NULL,
  `status_code`     varchar(50) DEFAULT NULL,
  `workflow_id`     int(11) DEFAULT NULL,
  `processing_id`   int(11) DEFAULT NULL,
  `processing_code` varchar(50) DEFAULT NULL,
  `assignees`       longtext DEFAULT NULL, -- khalhb@gearvn.com,anhvd@gearvn.com
  `followers`       longtext DEFAULT NULL, -- khalhb@gearvn.com,anhvd@gearvn.com
  
  `amount`          decimal(18,4) DEFAULT 0,
  `amount_text`     varchar(250) DEFAULT NULL,
  `cash_amount`     decimal(18,4) DEFAULT 0,
  `invoice_amount`  decimal(18,4) DEFAULT 0,

  `total_debit`     decimal(18,4) DEFAULT 0,
  `total_credit`    decimal(18,4) DEFAULT 0,
  `note`            varchar(250) DEFAULT NULL,
  `paymnent_date`   datetime DEFAULT NULL,
  `is_bank`         tinyint(1) DEFAULT '0',
  `is_bank_text`    varchar(250) DEFAULT NULL,

  `task_ref_no`     varchar(50) DEFAULT NULL,
  `task_ref_date`   datetime DEFAULT NULL,
  `task_ref_amount` decimal(18,4) DEFAULT 0,

  `created`         timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated`         timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author`          varchar(50) DEFAULT NULL,
  `editor`          varchar(50) DEFAULT NULL,
  `deleted`         tinyint(1) DEFAULT '0',
  PRIMARY KEY (`task_id`),
  UNIQUE KEY `task_id_unique` (`task_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Tạm ứng
INSERT INTO `task` (`task_no`,`task_type`,`name`,`description`,`comments`,`workflow_id`,`status_id`,`status_code`,`assignees`,`followers`,`amount`,`amount_text`,`total_debit`,`total_credit`,`note`,`paymnent_date`,`is_bank`,`is_bank_text`,`author`) 
VALUES ('DNTU-2020-06-00001','DNTU','GIẤY ĐỀ NGHỊ TẠM ỨNG - PHÒNG PTPM','GIẤY ĐỀ NGHỊ TẠM ỨNG','TEAM WORK THÁNG 6',1,1,'DRAFT','thanhlhb@gearvn.com','nguyentheanh@gearvn.com',5000000,'Năm triệu đồng',5000000,0,'TEAM WORK THÁNG 6','2020-06-19 00:00:00',False,'tiền mặt','khalhb@gearvn.com');

INSERT INTO `task` (`task_no`,`task_type`,`name`,`description`,`comments`,`workflow_id`,`status_id`,`status_code`,`assignees`,`followers`,`amount`,`amount_text`,`total_debit`,`total_credit`,`note`,`paymnent_date`,`is_bank`,`is_bank_text`,`author`) 
VALUES ('DNTU-2020-06-00002','DNTU','GIẤY ĐỀ NGHỊ TẠM ỨNG - PHÒNG PTPM','GIẤY ĐỀ NGHỊ TẠM ỨNG','Công tác THÁNG 6',1,1,'DRAFT','thanhlhb@gearvn.com','nguyentheanh@gearvn.com',10000000,'Mười triệu đồng',10000000,0,'Công tác THÁNG 6','2020-06-19 00:00:00',False,'tiền mặt','khalhb@gearvn.com');

INSERT INTO `task` (`task_no`,`task_type`,`name`,`description`,`comments`,`workflow_id`,`status_id`,`status_code`,`assignees`,`followers`,`amount`,`amount_text`,`total_debit`,`total_credit`,`note`,`paymnent_date`,`is_bank`,`is_bank_text`,`author`) 
VALUES ('DNTU-2020-06-00003','DNTU','GIẤY ĐỀ NGHỊ TẠM ỨNG - PHÒNG PTPM','GIẤY ĐỀ NGHỊ TẠM ỨNG','Công tác THÁNG 6',1,1,'DRAFT','thanhlhb@gearvn.com','nguyentheanh@gearvn.com',3000000,'Mười triệu đồng',0,0,'Công tác THÁNG 6','2020-06-19 00:00:00',False,'tiền mặt','anhvd@gearvn.com');

INSERT INTO `task` (`task_no`,`task_type`,`name`,`description`,`comments`,`workflow_id`,`status_id`,`status_code`,`assignees`,`followers`,`amount`,`amount_text`,`total_debit`,`total_credit`,`note`,`paymnent_date`,`is_bank`,`is_bank_text`,`author`) 
VALUES ('DNTU-2020-06-00004','DNTU','GIẤY ĐỀ NGHỊ TẠM ỨNG - PHÒNG PTPM','GIẤY ĐỀ NGHỊ TẠM ỨNG','TIÊU DÙNG CÁ NHÂN',1,1,'DRAFT','thanhlhb@gearvn.com','nguyentheanh@gearvn.com',10000000,'Mười triệu đồng',10000000,0,'TIÊU DÙNG CÁ NHÂN THÁNG 6','2020-06-20 00:00:00',False,'tiền mặt','haopp@gearvn.com');

-- Hoàn ứng
INSERT INTO `task` (`task_no`,`task_type`,`name`,`description`,`comments`,`workflow_id`,`status_id`,`status_code`,`assignees`,`followers`,`amount`,`amount_text`,`total_debit`,`total_credit`,`note`,`paymnent_date`,`is_bank`,`is_bank_text`,`cash_amount`,`invoice_amount`,`task_ref_no`,`task_ref_amount`,`author`) 
VALUES ('HTTU-2020-06-00001','HTTU','GIẤY THANH TOÁN TIỀN TẠM ỨNG - PHÒNG PTPM','GIẤY THANH TOÁN TIỀN TẠM ỨNG','Hoàn ứng DNTU-2020-06-00002',2,1,'DRAFT','thanhlhb@gearvn.com','nguyentheanh@gearvn.com',10000000,'Mười triệu đồng',0,0,'Hoàn ứng DNTU-2020-06-00002',null,False,'tiền mặt',2000000,8000000,'DNTU-2020-06-00002',10000000,'khalhb@gearvn.com');

INSERT INTO `task` (`task_no`,`task_type`,`name`,`description`,`comments`,`workflow_id`,`status_id`,`status_code`,`assignees`,`followers`,`amount`,`amount_text`,`total_debit`,`total_credit`,`note`,`paymnent_date`,`is_bank`,`is_bank_text`,`cash_amount`,`invoice_amount`,`task_ref_no`,`task_ref_amount`,`author`) 
VALUES ('HTTU-2020-06-00003','HTTU','GIẤY THANH TOÁN TIỀN TẠM ỨNG - PHÒNG PTPM','GIẤY THANH TOÁN TIỀN TẠM ỨNG','Hoàn ứng DNTU-2020-06-00004',2,1,'DRAFT','thanhlhb@gearvn.com','nguyentheanh@gearvn.com',10000000,'Mười triệu đồng',0,0,'Hoàn ứng DNTU-2020-06-00004',null,False,'tiền mặt',5000000,5000000,'DNTU-2020-06-00004',10000000,'haopp@gearvn.com');

--
-- Table structure for table `task_history`
--
DROP TABLE IF EXISTS `task_history`;

CREATE TABLE `task_history` (
  `history_id`     int NOT NULL AUTO_INCREMENT,
  `task_id`        int(11) DEFAULT NULL,
  `task_no`        varchar(50) DEFAULT NULL,
  `task_type`      varchar(50) DEFAULT NULL, -- Tam Ung = DNTU, Hoan Ung = HTTU
  `task_date`      datetime DEFAULT NULL,
  `name`           varchar(250) DEFAULT NULL,
  `description`    varchar(250) DEFAULT NULL,
  `comments`       varchar(250) DEFAULT NULL,
  
  `status_id`       int(11) DEFAULT NULL,
  `status_code`     varchar(50) DEFAULT NULL,
  `workflow_id`     int(11) DEFAULT NULL,
  `processing_id`   int(11) DEFAULT NULL,
  `processing_code` varchar(50) DEFAULT NULL,
  `assignees`       longtext DEFAULT NULL, -- khalhb@gearvn.com,anhvd@gearvn.com
  `followers`       longtext DEFAULT NULL, -- khalhb@gearvn.com,anhvd@gearvn.com
  
  `amount`         decimal(18,4) DEFAULT 0,
  `amount_text`    varchar(250) DEFAULT NULL,
  `cash_amount`     decimal(18,4) DEFAULT 0,
  `invoice_amount`  decimal(18,4) DEFAULT 0,
  
  `total_debit`    decimal(18,4) DEFAULT 0,
  `total_credit`   decimal(18,4) DEFAULT 0,
  `note`           varchar(250) DEFAULT NULL,
  `paymnent_date`  datetime DEFAULT NULL,
  `is_bank`        tinyint(1) DEFAULT '0',
  `is_bank_text`   varchar(250) DEFAULT NULL,

  `task_ref_no`     varchar(50) DEFAULT NULL,
  `task_ref_date`   datetime DEFAULT NULL,
  `task_ref_amount` decimal(18,4) DEFAULT 0,  

  `created`         timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated`         timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author`          varchar(50) DEFAULT NULL,
  `editor`          varchar(50) DEFAULT NULL,
  `deleted`         tinyint(1) DEFAULT '0',
  PRIMARY KEY (`history_id`),
  UNIQUE KEY `history_id_unique` (`history_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `task_files`
--
DROP TABLE IF EXISTS `task_files`;

CREATE TABLE `task_files` (
  `file_id`     int NOT NULL AUTO_INCREMENT,
  `task_id`     int(11) DEFAULT NULL,
  `file_url`    text DEFAULT NULL,
  `created`     timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated`     timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `author`      varchar(50) DEFAULT NULL,
  `editor`      varchar(50) DEFAULT NULL,
  `deleted`     tinyint(1) DEFAULT '0',
  PRIMARY KEY (`file_id`),
  UNIQUE KEY `file_id_unique` (`file_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `workflow`.`task_files` (`task_id`,`file_url`,`author`) 
VALUES (4,'https://www.w3schools.com/css/img_5terre.jpg','khalhb@gearvn.com'); -- Hình ảnh tượng trưng cho hóa đơn 10 triệu

INSERT INTO `workflow`.`task_files` (`task_id`,`file_url`,`author`) 
VALUES (6,'https://i.imgur.com/lhVJCJy.png','haopp@gearvn.com'); -- Hình ảnh tượng trưng cho hóa đơn 5 triệu