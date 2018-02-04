-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema home_management
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema home_management
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `home_management` DEFAULT CHARACTER SET utf8 ;
USE `home_management` ;

-- -----------------------------------------------------
-- Table `home_management`.`family_members`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_management`.`family_members` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `home_management`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `home_management`.`tasks` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `create_date` DATE NOT NULL,
  `family_member` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `task_family_member_idx` (`family_member` ASC),
  CONSTRAINT `task_family_member`
    FOREIGN KEY (`family_member`)
    REFERENCES `home_management`.`family_members` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;

USE `home_management` ;

-- -----------------------------------------------------
-- procedure get_family_members_for_ddl
-- -----------------------------------------------------

DELIMITER $$
USE `home_management`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_family_members_for_ddl`()
BEGIN

		SELECT 	id as value,
				nickname  as text 
		FROM    family_members
        order by nickname;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure get_tasks
-- -----------------------------------------------------

DELIMITER $$
USE `home_management`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_tasks`()
BEGIN

		SELECT 	tblTasks.id,
				tblTasks.description,
                DATE_FORMAT(tblTasks.create_date, '%d/%m/%Y') AS createDate,
				tblMembers.nickname
		FROM tasks tblTasks
		inner join family_members tblMembers
		on tblTasks.family_member = tblMembers.id
		order by nickname, createDate, tblTasks.description;
        
END$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
