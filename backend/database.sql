CREATE DATABASE IF NOT EXISTS makesense;

USE makesense;

DROP TABLE IF EXISTS `user`;

CREATE TABLE
    `user` (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        username VARCHAR (255),
        firstname VARCHAR(255),
        lastname VARCHAR(255),
        `password` VARCHAR(255),
        mailAdress VARCHAR(255),
        `role` VARCHAR(255)
    );

INSERT INTO
    `user` (
        id,
        username,
        firstname,
        lastname,
        `password`,
        mailAdress,
        `role`
    )
VALUES (
        1,
        "arouxel",
        "Alexandre",
        "Rouxel",
        "Azerty123",
        "alexandrerouxel@mail.com",
        "user"
    ), (
        2,
        "ahakimi",
        "Amina",
        "Hakimi",
        "Azerty123",
        "aminahakimi@mail.com",
        "user"
    ), (
        3,
        "cpiancatelli",
        "Charlie",
        "Piancatelli",
        "Azerty123",
        "charliepiancatelli@mail.com",
        "user"
    ), (
        4,
        "cguichard",
        "Christopher",
        "Guichard",
        "Azerty123",
        "christopherguichard44@gmail.com",
        "user"
    ), (
        5,
        "emartinez",
        "Emmanuel",
        "Martinez",
        "Azerty123",
        "emmanuelmartinez@mail.com",
        "user"
    ), (
        6,
        "glemoine",
        "Gaëtan",
        "Lemoine",
        "Azerty123",
        "gaetanlemoine@mail.com",
        "user"
    ), (
        7,
        "gwernert",
        "Guillaume",
        "Wernert",
        "MakeSenseProjet3!",
        "guillaumewernert@mail.com" "administrator"
    ), (
        8,
        "jvaxelaire",
        "Jordan",
        "Vaxelaire",
        "Azerty123",
        "jordanvaxelaire@mail.com",
        "user"
    ), (
        9,
        "kaouadia" "Karim",
        "Aoudia",
        "Azerty123",
        "karimaoudia@mail.com",
        "user"
    ), (
        10,
        "stormo",
        "Sylvain",
        "Tormo",
        "LeToulousain11",
        "sylvain.tormo11@gmail.com",
        "user"
    ), (
        11,
        "spetaccia",
        "Sébastien",
        "Petaccia",
        "Azerty123",
        "sebastienpetaccia@mail.com",
        "user"
    ), (
        12,
        "tralambotsiro",
        "Tsiry",
        "Ralambotsirofo",
        "Azerty123",
        "tsiryralambotsirofo@mail.com",
        "user"
    ), (
        13,
        "vpapadopoulos",
        "Vassili",
        "Papadopoulos",
        "Azerty123",
        "vassilipapadopoulos@mail.com",
        "user"
    ), (
        14,
        "yviot",
        "Yanis",
        "Viot",
        "jesuisunnez",
        "yayav.yaya@gmail.com",
        "administrator"
    ), (
        15,
        "jmarkarian",
        "Joy",
        "Markarian",
        "WCS2022!",
        "jmarkarian@hotmail.fr",
        "administrator"
    ), (
        16,
        "jrichard",
        "Julien",
        "Richard",
        "Azerty123",
        "julienrichard@mail.com",
        "user"
    ), (
        17,
        "klavigne",
        "kevin",
        "Lavigne",
        "Azerty123",
        "kevinlavigne@mail.com",
        "user"
    ), (
        18,
        "agorski",
        "Anthony",
        "Gorski",
        "Crewstillant!",
        "anthonygorski@mail.com",
        "administrator"
    ), (
        19,
        "jfmorin",
        "Jean-François",
        "Morin",
        "Azerty123",
        "jeanfrançoismorin@gmail.com",
        "user"
    ), (
        20,
        "bvandanjon",
        "Benoît",
        "Vandanjon",
        "Azerty123",
        "benoitvandanjon@mail.com",
        "user",
    ), (
        21,
        "pdegee",
        "Pierre",
        "Degée",
        "Azerty123",
        "pierredegée@mail.com",
        "user"
    ), (
        22,
        "rboe",
        "Rachel",
        "Boé",
        "Azerty123",
        "rachelboé@mail.com",
        "user"
    ), (
        23,
        "alenne",
        "Adrien",
        "Lenne",
        "Azerty123",
        "adrienlenne@mail.com",
        "user"
    ), (
        24,
        "iboyer",
        "Iris",
        "Boyer",
        "Azerty123",
        "irisboyer@mail.com",
        "user"
    ), (
        25,
        "edurand",
        "Elia",
        "Durand",
        "Azerty123",
        "eliadurand@mail.com",
        "user"
    ), (
        26,
        "mfontaine",
        "Maxence",
        "Fontaine",
        "Azerty123",
        "maxencefontaine@mail.com",
        "user"
    ), (
        27,
        "olefebvre",
        "Océane",
        "Lefebvre",
        "Azerty123",
        "océanelefebvre@mail.com"
    ), (
        28,
        "abrebion",
        "Antonin",
        "Brebion",
        "Azerty123",
        "antoninbrebion@mail.com",
        "user"
    ), (
        29,
        "mbrunet",
        "Marcel",
        "Brunet",
        "Azerty123",
        "marcelbrunet@gmail.com",
        "user"
    ), (
        30,
        "jmercier",
        "Jean",
        "Mercier",
        "Azerty123",
        "jeanmercier@hotmail.fr",
        "user"
    );

DROP TABLE IF EXISTS decision;

CREATE TABLE
    decisionMaking (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        users_id VARCHAR (100) NOT NULL,
        CONSTRAINT fk_decisionMaking_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        title VARCHAR(255) NOT NULL,
        `description` VARCHAR(255) NOT NULL,
        impact VARCHAR(255) NOT NULL,
        profit VARCHAR(255) NOT NULL,
        risk VARCHAR(255) NOT NULL,
        decisionStatus VARCHAR(255) NOT NULL,
        dateCreate DATE NOT NULL,
        dateAdvice DATE,
        dateFirstDecision DATE,
        dateConflict DATE,
        dateFinalDecision DATE,
    );

DROP TABLE IF EXISTS advice;

CREATE TABLE
    advice (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        adviceText VARCHAR(500),
        users_id VARCHAR (100) NOT NULL,
        CONSTRAINT fk_advice_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        decisionMaking_id VARCHAR (100) NOT NULL,
        CONSTRAINT fk_advice_decisionMaking FOREIGN KEY (decisionMaking_id) REFERENCES decisionMaking(id)
    );