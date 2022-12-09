DROP DATABASE IF EXISTS makesense;

CREATE DATABASE makesense;

USE makesense;

DROP TABLE IF EXISTS `user`;

CREATE TABLE
    `user` (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        username VARCHAR (255),
        firstname VARCHAR(255),
        lastname VARCHAR(255),
        `password` VARCHAR(255),
        mail VARCHAR(255),
        `role` VARCHAR(255)
    );

INSERT INTO
    `user` (
        id,
        username,
        firstname,
        lastname,
        `password`,
        mail,
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
        "guillaumewernert@mail.com",
        "administrator"
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
        "kaouadia",
        "Karim",
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
        "user"
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
        "océanelefebvre@mail.com",
        "user"
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

DROP TABLE IF EXISTS decisionMaking;

CREATE TABLE
    decisionMaking (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        CONSTRAINT fk_decisionMaking_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        title VARCHAR(255) NOT NULL,
        `description` LONGTEXT NOT NULL,
        impact LONGTEXT NOT NULL,
        profit LONGTEXT NOT NULL,
        risk LONGTEXT NOT NULL,
        decisionStatus VARCHAR(255) NOT NULL,
        dateCreate DATE NOT NULL,
        dateAdvice DATE,
        dateFirstDecision DATE,
        dateConflict DATE,
        dateFinalDecision DATE
    );

INSERT INTO
    decisionMaking (
        id,
        user_id,
        title,
        `description`,
        impact,
        profit,
        risk,
        decisionStatus,
        dateCreate
    )
VALUES (
        1,
        16,
        "Baisser le prix du café à la machine",
        "Suite à des échanges avec différents collaborateurs, nous avons constaté que le prix du café à la machine-ci était trop élevé (0,75 euros). Le café faisant partie intégrante de notre quotidien, nous réclamons une baisse conséquente du prix fixée à 0,40 euros afin que nous puissions nous réunir de façon conviviale lors de nos pauses et ainsi échanger plus régulièrement autour d'un bon café. Nos différents échanges ont mis en exergue le fait que le prix actuel du café empêchaient certaines personnes d’en consommer, réduisant par conséquent les liens sociaux",
        "Les impacts pour l’organisation sont de deux ordres : 1 : Financier :  La baisse du tarif du café sera compensée par une hausse de sa consommation. Les pertes seront donc nulles pour l’entreprise qui pourra même espérer des bénéfices.  2 : Vision positive de l’entreprise : Les salariés seront sensibles à cette baisse significative, particulièrement en cette période d’inflation.",
        "Pour les salariés, les bénéfices seront multiples : 1. Lien social : Cette décision permettra incontestablement de favoriser le lien social entre les collaborateurs.  2. Productivité : Des études ont démontré que la caféine améliore les performances au travail.",
        "Le principal risque de cette demande tient à la multiplication des pauses café. Les managers seront particulièrement attentifs et veilleront à limiter les abus.",
        "Prise de décision commencée",
        "2022-12-08"
    );

DROP TABLE IF EXISTS designatedUser;

CREATE TABLE
    designatedUser (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        CONSTRAINT fk_designatedUser_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        decisionMaking_id INT NOT NULL,
        CONSTRAINT fk_designatedUser_decisionMaking FOREIGN KEY (decisionMaking_id) REFERENCES decisionMaking(id),
        `status` VARCHAR (100) NOT NULL
    );

INSERT INTO
    designatedUser (
        id,
        user_id,
        decisionMaking_id,
        `status`
    )
VALUES (1, 25, 1, "Personne impactée"), (2, 6, 1, "Personne experte");

DROP TABLE IF EXISTS advice;

CREATE TABLE
    advice (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        textAdvice LONGTEXT,
        user_id INT NOT NULL,
        CONSTRAINT fk_advice_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        decisionMaking_id INT NOT NULL,
        CONSTRAINT fk_advice_decisionMaking FOREIGN KEY (decisionMaking_id) REFERENCES decisionMaking(id)
    );

DROP TABLE IF EXISTS decision;

CREATE TABLE
    decision (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        decisionMaking_id INT NOT NULL,
        CONSTRAINT fk_decision_decisionMaking FOREIGN KEY (decisionMaking_id) REFERENCES decisionMaking(id),
        textDecision LONGTEXT NOT NULL
    );

DROP TABLE IF EXISTS conflict;

CREATE TABLE
    conflict (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        textConflict LONGTEXT,
        user_id INT NOT NULL,
        CONSTRAINT fk_conflict_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        decision_id INT NOT NULL,
        CONSTRAINT fk_conflict_decision FOREIGN KEY (decision_id) REFERENCES decision(id)
    );