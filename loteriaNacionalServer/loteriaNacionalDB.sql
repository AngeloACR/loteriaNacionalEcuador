/*
SQLyog Enterprise Trial - MySQL GUI v8.05 
MySQL - 5.5.5-10.4.6-MariaDB : Database - Docto
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

USE `LoteriaNacionalApp`;

/*Table structure for table `Ticket` */

DROP TABLE IF EXISTS `Transaction`;

CREATE TABLE `Transaction` (
  `id_transaction` int(11) NOT NULL COMMENT 'Transaction unique identifier',
  `amount` int(11) NOT NULL COMMENT 'Amount of transaction',
  `sign` boolean,
  `date` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Date when transaction was made',

  PRIMARY KEY (`id_transaction`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `Transaction` */

LOCK TABLES `Transaction` WRITE;

UNLOCK TABLES;

/*Table structure for table `Ticket` */

DROP TABLE IF EXISTS `Ticket`;

CREATE TABLE `Ticket` (
  `id_ticket` int(11) NOT NULL COMMENT 'Ticket unique identifier',
  `transaction` int(11) NOT NULL COMMENT 'Transaction unique identifier',
  `drawNumber` int(11) NOT NULL COMMENT 'Draw number of ticket',
  `prize` int(11) NOT NULL COMMENT 'Draw number of ticket',
  `purchasedFraction` int(11) NOT NULL COMMENT 'Number of fractions of ticket',
  `lotteryType` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Type of lottery ticket, whether lottery, lotto or pozo millonario',
  `drawDate` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Draw date of ticket',
  `detail` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Detail of ticket',
  `status` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Status of ticket, wheter winner, loser, reserved or pending',

  PRIMARY KEY (`id_ticket`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `Ticket` */

LOCK TABLES `Ticket` WRITE;

UNLOCK TABLES;

/*Table structure for table `Wallet` */

DROP TABLE IF EXISTS `Wallet`;

CREATE TABLE `Wallet` (
  `id_wallet` int(11) NOT NULL COMMENT 'Wallet unique identifier',
  `token` varchar(150) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Wallet identifier from third party',
  `amount` int(11) NOT NULL COMMENT 'Amount available within wallet',
  PRIMARY KEY (`id_wallet`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `Wallet` */

LOCK TABLES `Wallet` WRITE;

UNLOCK TABLES;

/*Table structure for table `User` */

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `id_user` int(11) NOT NULL COMMENT 'User unique identifier',
  `email` varchar(250) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User email ',
  `username` varchar(50) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Username ',
  `name` varchar(50) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Name of user ',
  `picture` blob COLLATE latin1_spanish_ci NOT NULL COMMENT 'Picture of user ',
  `password` varchar(255) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User password',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


/*Data for the table `User` */

LOCK TABLES `User` WRITE;

UNLOCK TABLES;

/*Table structure for table `User_BankAccount` */

DROP TABLE IF EXISTS `User_BankAccount`;

CREATE TABLE `User_BankAccount` (
  `id_user_bank_account` int(11) NOT NULL COMMENT 'Unique identifier of relation between an user and a bank account',
  `id_user` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User unique identifier',
  `bank` varchar(255) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Name of bank',
  `number` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Account number',
  PRIMARY KEY (`id_user_bank_account`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `User_BankAccount` */

LOCK TABLES `User_BankAccount` WRITE;

UNLOCK TABLES;

/*Table structure for table `User_CreditCard` */

DROP TABLE IF EXISTS `User_CreditCard`;

CREATE TABLE `User_CreditCard` (
  `id_user_credit_card` int(11) NOT NULL COMMENT 'Unique identifier of relation between an user and a credit card',
  `id_user` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User unique identifier',
  `token` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Unique token of credit card',
  PRIMARY KEY (`id_user_credit_card`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `User_CreditCard` */

LOCK TABLES `User_CreditCard` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `User_Wallet`;

CREATE TABLE `User_Wallet` (
  `id_user_wallet` int(11) NOT NULL COMMENT 'Unique identifier of relation between an user and a wallet',
  `id_user` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User unique identifier',
  `idWallet` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Walett unique identifier',
  PRIMARY KEY (`id_user_wallet`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `User_Wallet` */

LOCK TABLES `User_Wallet` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `User_Ticket`;

CREATE TABLE `User_Ticket` (
  `id_user_ticket` int(11) NOT NULL COMMENT 'Unique identifier of relation between an user and a ticket',
  `id_user` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User unique identifier',
  `id_ticket` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Ticket unique identifier',
  PRIMARY KEY (`id_user_ticket`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `User_Ticket` */

LOCK TABLES `User_Ticket` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `User_Transaction`;

CREATE TABLE `User_Transaction` (
  `id_user_transaction` int(11) NOT NULL COMMENT 'Unique identifier of relation between an user and a transaction',
  `id_user` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User unique identifier',
  `id_transaction` int(11) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Transaction unique identifier',
  PRIMARY KEY (`id_user_bank_account`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `User_Transaction` */

LOCK TABLES `User_Transaction` WRITE;

UNLOCK TABLES;


ALTER TABLE User_BankAccount ADD FOREIGN KEY (id_user) REFERENCES User (id_user);
ALTER TABLE User_CreditCard ADD FOREIGN KEY (id_user) REFERENCES User (id_user);
ALTER TABLE User_Ticket ADD FOREIGN KEY (id_user) REFERENCES User (id_user);
ALTER TABLE User_Transaction ADD FOREIGN KEY (id_user) REFERENCES User (id_user);
ALTER TABLE User_Wallet ADD FOREIGN KEY (id_user) REFERENCES User (id_user);
ALTER TABLE User_Ticket ADD FOREIGN KEY (id_ticket) REFERENCES Ticket (id_ticket);
ALTER TABLE User_Transaction ADD FOREIGN KEY (id_transaction) REFERENCES Transaction (id_transaction);
ALTER TABLE User_Wallet ADD FOREIGN KEY (id_wallet) REFERENCES User (id_wallet);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*
INSERT INTO user (id_user, email_user, password_usser, name_user) VALUES
(1, "testuser@test.com", "c789e997e2322ceafa49170ee6b1dea8d46eef0e", "Test User"), /*User: testuser@test.com; Password: testapp2021*/
/*(2, "testuser2@test.com", "c789e997e2322ceafa49170ee6b1dea8d46eef0e", "Test User 2"); /*User: testuser2@test.com; Password: testapp2021*/



