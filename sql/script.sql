CREATE SCHEMA `4140A2` ;

CREATE TABLE `4140A2`.`Parts116` (
  `partNo116` INT NOT NULL,
  `partName116` VARCHAR(45) NULL,
  `currentPrice116` INT NULL,
  `qoh116` INT NULL,
  PRIMARY KEY (`partNo116`));

INSERT INTO `4140A2`.`Parts116` (`partNo116`, `partName116`, `currentPrice116`, `qoh116`) VALUES ('1', 'tier', '20', '20');
INSERT INTO `4140A2`.`Parts116` (`partNo116`, `partName116`, `currentPrice116`, `qoh116`) VALUES ('2', 'wrench', '2', '100');

CREATE TABLE `4140A2`.`POs116` (
  `poNo116` INT NOT NULL,
  `clientCompID116` INT NULL,
  `dateOfPo116` VARCHAR(45) NULL,
  `status116` VARCHAR(45) NULL,
  PRIMARY KEY (`poNo116`));

INSERT INTO `4140A2`.`POs116` (`poNo116`, `clientCompID116`, `dateOfPo116`, `status116`) VALUES ('1', '1', '24 January 2000', 'Pending');
INSERT INTO `4140A2`.`POs116` (`poNo116`, `clientCompID116`, `dateOfPo116`, `status116`) VALUES ('2', '2', '10 January 2021', 'Delivered');

CREATE TABLE `4140A2`.`Lines116` (
  `poNo116` INT NOT NULL,
  `lineNo116` INT NULL,
  `partNo116` INT NULL,
  `qty116` INT NULL,
  `priceOrdered116` INT NULL,
  PRIMARY KEY (`poNo116`));


ALTER TABLE `4140A2`.`Lines116` 
CHANGE COLUMN `poNo116` `poNo116` INT NULL ,
DROP PRIMARY KEY;
;
INSERT INTO `4140A2`.`Lines116` (`poNo116`, `lineNo116`, `partNo116`, `qty116`, `priceOrdered116`) VALUES ('1', '1', '1', '5', '100');
INSERT INTO `4140A2`.`Lines116` (`poNo116`, `lineNo116`, `partNo116`, `qty116`, `priceOrdered116`) VALUES ('1', '2', '2', '1', '100');
;


CREATE TABLE `4140A2`.`Clients116` (
  `clientId116` INT NOT NULL,
  `clientName116` VARCHAR(45) NULL,
  `clientCity116` VARCHAR(45) NULL,
  `clientPassword116` VARCHAR(45) NULL,
  `moneyOwed116` VARCHAR(45) NULL,
  PRIMARY KEY (`clientId116`));
  
  ALTER TABLE `4140A2`.`POs116` 
DROP PRIMARY KEY;
;