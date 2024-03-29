-- SQLBook: Code
CREATE DATABASE IF NOT EXISTS makesense;

USE makesense;

DROP TABLE IF EXISTS designatedUser;

DROP TABLE IF EXISTS advice;

DROP TABLE IF EXISTS conflict;

DROP TABLE IF EXISTS decision;

DROP TABLE IF EXISTS decisionMaking;

DROP TABLE IF EXISTS `user`;

DROP TABLE IF EXISTS decisionStatus;

CREATE TABLE
    `user` (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        `password` VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        `role` VARCHAR(255) NOT NULL
    );

INSERT INTO
    `user` (
        id,
        firstname,
        lastname,
        `password`,
        email,
        `role`
    )
VALUES (
        1,
        "Alexandre",
        "Rouxel",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "alexandrerouxel@mail.com",
        "user"
    ), (
        2,
        "Amina",
        "Hakimi",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "aminahakimi@mail.com",
        "user"
    ), (
        3,
        "Charlie",
        "Piancatelli",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "charliepiancatelli@mail.com",
        "user"
    ), (
        4,
        "Christopher",
        "Guichard",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "christopherguichard44@gmail.com",
        "user"
    ), (
        5,
        "Emmanuel",
        "Martinez",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "emmanuelmartinez@mail.com",
        "user"
    ), (
        6,
        "Gaëtan",
        "Lemoine",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "gaetanlemoine@mail.com",
        "user"
    ), (
        7,
        "Guillaume",
        "Wernert",
        "$argon2id$v=19$m=65536,t=5,p=1$4c8hssuotK6/e5qCvtGvQw$BugMwutuOxrZCFr1ptEbmRDhMzT3RI08UrwcnJjXoL8",
        "guillaumewernert@mail.com",
        "administrator"
    ), (
        8,
        "Jordan",
        "Vaxelaire",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "jordanvaxelaire@mail.com",
        "user"
    ), (
        9,
        "Karim",
        "Aoudia",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "karimaoudia@mail.com",
        "user"
    ), (
        10,
        "Sylvain",
        "Tormo",
        "$argon2id$v=19$m=65536,t=5,p=1$PPil+7D3GLyBQe7FuWUlXQ$O8qDWfl/YXfoIgHm4Rbvvf+0Xq5dmXs9TM4+LomAXwY",
        "sylvain.tormo11@gmail.com",
        "user"
    ), (
        11,
        "Sébastien",
        "Petaccia",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "sebastienpetaccia@mail.com",
        "user"
    ), (
        12,
        "Tsiry",
        "Ralambotsirofo",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "tsiryralambotsirofo@mail.com",
        "user"
    ), (
        13,
        "Vassili",
        "Papadopoulos",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "vassilipapadopoulos@mail.com",
        "user"
    ), (
        14,
        "Yanis",
        "Viot",
        "$argon2id$v=19$m=65536,t=5,p=1$RuwKBZ6U4GyUp070M4VcsA$cBqYfvdyMbVfXUrGDwyh7R72qRI5Jas0VuicngzrHGs",
        "yayav.yaya@gmail.com",
        "administrator"
    ), (
        15,
        "Joy",
        "Markarian",
        "$argon2id$v=19$m=65536,t=5,p=1$HiWYJB4Y6/P9JRe908ksGQ$5IIIk7yVhigPkwXg8HOO8Q3YwixMNy/ax15Ta9ATkKI",
        "jmarkarian@hotmail.fr",
        "administrator"
    ), (
        16,
        "Julien",
        "Richard",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "julienrichard@mail.com",
        "user"
    ), (
        17,
        "Kevin",
        "Lavigne",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "kevinlavigne@mail.com",
        "user"
    ), (
        18,
        "Anthony",
        "Gorski",
        "$argon2id$v=19$m=65536,t=5,p=1$PtphdlePmHzgd8cA7siVQA$pd5RJxteeD8pfRKpe8AqcSStqRg5nR7rLCJC4agSBAE",
        "anthonygorski@mail.com",
        "administrator"
    ), (
        19,
        "Jean-François",
        "Morin",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "jeanfrançoismorin@gmail.com",
        "user"
    ), (
        20,
        "Benoît",
        "Vandanjon",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "benoitvandanjon@mail.com",
        "user"
    ), (
        21,
        "Pierre",
        "Degée",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "pierredegée@mail.com",
        "user"
    ), (
        22,
        "Rachel",
        "Boé",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "rachelboé@mail.com",
        "user"
    ), (
        23,
        "Adrien",
        "Lenne",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "adrienlenne@mail.com",
        "user"
    ), (
        24,
        "Iris",
        "Boyer",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "irisboyer@mail.com",
        "user"
    ), (
        25,
        "Elia",
        "Durand",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "eliadurand@mail.com",
        "user"
    ), (
        26,
        "Maxence",
        "Fontaine",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "maxencefontaine@mail.com",
        "user"
    ), (
        27,
        "Océane",
        "Lefebvre",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "océanelefebvre@mail.com",
        "user"
    ), (
        28,
        "Antonin",
        "Brebion",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "antoninbrebion@mail.com",
        "user"
    ), (
        29,
        "Marcel",
        "Brunet",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "marcelbrunet@gmail.com",
        "user"
    ), (
        30,
        "Jean",
        "Mercier",
        "$argon2id$v=19$m=65536,t=5,p=1$ZRxlTcN9qjDQqke6R5khjA$HF++7a2yPb9MUtWSiwHow+bXxC45xu9cN0YDlEg3VqQ",
        "jeanmercier@hotmail.fr",
        "user"
    );

CREATE TABLE
    decisionStatus (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        status VARCHAR(255) NOT NULL
    );

INSERT INTO
    decisionStatus (status) VALUE (
        "Prise de décision commencée"
    ), ("Première décision prise"), ("Décision définitive"), ("Décision archivée");

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
        firstDecision LONGTEXT,
        finalDecision LONGTEXT,
        decisionStatus_id INT NOT NULL,
        CONSTRAINT fk_decisionMaking_decisionStatus FOREIGN KEY (decisionStatus_id) REFERENCES decisionStatus(id),
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
        decisionStatus_id,
        dateCreate,
        dateFinalDecision
    )
VALUES (
        1,
        16,
        "Baisser le prix du café à la machine",
        "Suite à des échanges avec différents collaborateurs, nous avons constaté que le prix du café à la machine-ci était trop élevé (0,75 euros). Le café faisant partie intégrante de notre quotidien, nous réclamons une baisse conséquente du prix fixée à 0,40 euros afin que nous puissions nous réunir de façon conviviale lors de nos pauses et ainsi échanger plus régulièrement autour d'un bon café. Nos différents échanges ont mis en exergue le fait que le prix actuel du café empêchaient certaines personnes d’en consommer, réduisant par conséquent les liens sociaux",
        "Les impacts pour l’organisation sont de deux ordres : 1 : Financier :  La baisse du tarif du café sera compensée par une hausse de sa consommation. Les pertes seront donc nulles pour l’entreprise qui pourra même espérer des bénéfices.  2 : Vision positive de l’entreprise : Les salariés seront sensibles à cette baisse significative, particulièrement en cette période d’inflation.",
        "Pour les salariés, les bénéfices seront multiples : 1. Lien social : Cette décision permettra incontestablement de favoriser le lien social entre les collaborateurs.  2. Productivité : Des études ont démontré que la caféine améliore les performances au travail.",
        "Le principal risque de cette demande tient à la multiplication des pauses café. Les managers seront particulièrement attentifs et veilleront à limiter les abus.",
        3,
        "2022-11-08",
        "2023-01-17"
    ), (
        2,
        17,
        "Proposition d'un menu végétarien à la cantine",
        "Dans le respect des choix de nos collaborateurs en matière culinaire, nous vous proposons de créer un menu végétarien sans gluten.",
        "Aucun impact économique, juste un impact sur le bien-être de nos collaborateurs et sur le respect de leur choix de vie.",
        "Les collaborateurs étant forcés à prendre leurs pauses à l'extérieur de la société pourront bénéficier d'un menu au sein de nos cantines",
        "Certains risques, liés aux allergènes, peuvent être prévenu dès lors de l'entrée de la cantine, il suffira de prévenir le chef cuisinier qui se tiendra à votre disposition, pour qu'il prenne en compte votre demande.",
        1,
        "2023-01-28",
        "2023-04-08"
    ), (
        3,
        14,
        "Remplacement des fauteuils de bureau",
        "Dans le cadre du remplacement de tous les postes de travail; viens par synergie; le changement de tous les fauteuils de bureau.",
        "Pour une meilleure ergonomie, pour prévenir des troubles musculo-squelletiques, nous nous engageons à changer ceux-ci pour le confort et le bien-être de tous nos collaborateurs.",
        "Meilleur environnement pour une meilleure rentabilité, ces fauteuils éco-responsable seront changés tous les 5 ans et remis à diverses associations pour être réutilisés dans les pays les plus nécessiteux.",
        "Date de livraison indéterminée, certains open-space seront livrés plusieurs semaines avant d'autres",
        1,
        "2023-01-27",
        "2023-03-13"
    ), (
        4,
        12,
        "Remplacement du mobilier de bureau",
        "Depuis plusieurs années, les collaborateurs nous signalent des difficultés liées au vieillissement de l'outil bureautique qui semble nuire aux
        rendements de l'entreprise ainsi qu'aux performances des salariés. Le matériel usité ayant fait son temps, il nous paraît indispensable de le  remplacer par un nouvel outil plus en adéquation avec la nouvelle norme de base sur l’ergonomie, correspondant davantage aux attentes de tous nos associés et collaborateurs. Dans une logique de cohérence écologique,
        nous ferons le choix de travailler avec le maximum d'entreprises et artisans locaux en accord avec l'utilisation et la fabrication de
        matériaux durables et écoresponsables. Pour ce faire, nous avons pris en compte de nombreux critères d'amélioration pour le bien-être
        au travail. Notre choix s’est donc porté sur de nouveaux fauteuils de bureaux ergonomiques ainsi que des bureaux assis-debout.
        Dans le même temps, nous souhaitons procéder au remplacement des radiateurs et climatisations par des pompes à chaleur, bien plus économiques et durables. La mise en place de nouvelles imprimantes modernes et donc plus efficientes est également envisagée ainsi que le remplacement du réseau internet filaire actuel par un réseau fibré. Enfin, suite à la première vague de modernisation des locaux de l'entreprise, nous terminerons par le remplacement de tous les luminaires par des plafonniers à LED.

        Dans la liste des nouveaux outils, nous avons répertorié :
        - des fauteuils ergonomiques,
        - des bureaux assis-debout,
        - des imprimantes nouvelle génération,
        - la rénovation du réseau internet filaire par fibre,
        - une pompe à chaleur,
        - des plafonniers LED.

        Nous sommes à l'écoute de toute suggestion et espérons avoir un maximum de retours sur cette initiative qui signerait le nouveau départ de l'entreprise vers une période de transition écologique.
        Nous avons tenu compte de toutes les réclamations adressées aux ressources humaines ces dernières années.

        Nous ne sommes toutefois pas à l'abri d’oublis. Par conséquent, nous vous invitons à réfléchir à d’autres propositions pour contribuer à votre nouvel environnement de travail.

        En cas d’approbation de nos propositions, nous prévoyons d’initier les travaux durant la période estivale afin de limiter les nuisances dans votre environnement de travail. Pour cela,

        La décision devra être prise au plus tard au mois de mai afin de ne pas retarder le planning prévisionnel des principaux chantiers clients en cours.

        Faites du sens, soyez MakeSense.",
        "L'impact mesuré sur l'entreprise est double :
        d'une part, ce projet nécessite une grosse enveloppe budgétaire,
        d'autre part, nos dirigeants offriraient à notre entreprise un avenir plus écologique et à ses collaborateurs un environnement de travail plus sain.
        Nos experts ont évalué le coût total du projet à 528.660 euros pour un déploiement sur une période de 3 mois. Les espaces de travail seront donc perturbés durant quelques semaines. A terme, les changements devraient toutefois grandement améliorer le bien-être au travail, véritable enjeu au cœur de la politique de l’entreprise.",
        "Nous attendons un rapide retour sur investissement via un amortissement sur la facture énergétique. Nous espérons que les nouveaux outils seront acceptés par tous les collaborateurs afin de permettre une meilleure performance.",
        "Cependant, il n'est pas à exclure un allongement de la durée des travaux selon les difficultés d’approvisionnement des fournitures de
        bureautique. Cela peut avoir un impact sur le chiffre d'affaires de l'entreprise compte tenu de la dégradation temporaire de l'environnement de travail. Néanmoins, nous espérons que les travaux se dérouleront sans incident.",
        2,
        "2023-01-02",
        "2023-03-13"
    ), (
        5,
        18,
        "Créer une fête annuelle pour renforcer la cohésion d'équipe",
        "Comme il est de coutume au sein de nombreuses entreprises, je vous propose d’organiser une soirée annuelle de « Noël » afin que nous puissions ensemble, célébrer une année supplémentaire passée ensemble.
        Cet événement débutera à 17h le vendredi 16 décembre par une partie de bowling en équipe de 4 personnes. Les formations des équipes seront tirées au sort afin de favoriser les rencontres. Au sein de chaque équipe, chacune des personnes devra offrir à l’un de ses coéquipiers un présent, acheté au préalable (valeur maximum 10 euros). Le thème cette année pour le présent : le voyage.
        Cette partie endiablée sera suivie d’un repas de « Noël » au sein même du bowling. Un traiteur, choisi au préalable, nous aura concocté un menu « entrée-plat-dessert » suivi de quelques douceurs. Ce repas sera, bien évidemment accompagné de doux nectar, sélectionné avec délicatesse par notre expert Yanis.
        Pour les plus téméraires, une soirée dansante sous le thème des années 80, animé par un DJ, vous sera proposé.",
        "Aborder les vacances scolaires plus sereinement pour les parents.",
        "Minimiser les conflits",
        "Abus sur le nombre de jours de CA posés, démotivation pour les personnes les plus ancienne de l’entreprise.",
        3,
        "2022-04-12",
        "2022-08-12"
    ),(
        6,
        24,
        "Action contre la faim",
        "Changement climatique, conflits, inégalités, épidémies. La faim continue de progresser. Il est plus que nécessaire de faire des dons pour soutenir les associations luttant contre ce fléau. Il n'appartient qu'à nous de montrer l'exemple à d'autres gros acteurs du marchés financiers. Ensemble nous irons plus loin, ensemble nous pouvons faire du sens dans nos quotidiens.",
        "Les répercussions seront surtout d'ordre fiancier mais aussi sur la main d'oeuvre. A contrario, nous pouvons aussi bénéficier d'une couverture médiatique sur nos activités même si cela ne fait pas partie des objectifs de cette décision.",
        "Un soutien sans failles pour des humains dans le besoin. Une lutte contre la précarité et une victoire pour l'humanité.",
        "Les dons ne pourront être fait que dans la limite de nos finances disponibles.",
        1,
        "2023-01-12",
        "2023-03-23"
    ),(
        7,
        25,
        "Elargir le nombre d'employés",
        "Malgré un contexte économique difficile, nous avons tous vu les bénéfices records enregistrés par l'entreprise. Cela nous donne les moyens d'aller plus haut et plus loin dans nos ambitions. Malheureusement, nous ne sommes plus assez nombreux pour continuer cette progression. Il nous faut alors recruter de nouveaux visages aux multiples compétences pour espérer prolonger cet essor.
        Nous pouvons lancer de nouvelles activités lucratives pour nos objectifs et nos ambitions en intégrant de nouvelles personnes.",
        "Dans un premier temps, il y aura forcément un impact économique dans les recettes qui sera néanmoins rapidement résorbé. Et dans un second temps, il faudra tenir compte de nos infrastructures qui devront évoluer avec le nombres de salariés.",
        "Un nouveau souffle pour notre progression.
        De nouveaux visages avec de nouvelles idées.",
        "De possibles frictures entre nouveaux employés et anciens.
        Nos infrastructures limitent nos capacités de recrutement.",
        2,
        "2022-12-01",
        "2023-02-09"
    );

UPDATE decisionMaking SET firstDecision = "test first decision", finalDecision = "test final decision" WHERE id = 1;


DROP TABLE IF EXISTS `status`;

CREATE TABLE `status` (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR (20) NOT NULL
);

INSERT INTO `status` (`name`) VALUES ("Personne impactée"), ("Personne experte");

DROP TABLE IF EXISTS designatedUser;

CREATE TABLE
    designatedUser (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        CONSTRAINT fk_designatedUser_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        decisionMaking_id INT NOT NULL,
        CONSTRAINT fk_designatedUser_decisionMaking FOREIGN KEY (decisionMaking_id) REFERENCES decisionMaking(id),
        status_id INT NOT NULL,
        CONSTRAINT fk_designatedUser_status FOREIGN KEY (status_id) REFERENCES `status`(id)
    );


INSERT INTO
    designatedUser (
        id,
        user_id,
        decisionMaking_id,
        status_id
    )
VALUES (1, 25, 1, 1), (2, 30, 1, 1), (3, 8, 1, 1), (4, 6, 1, 2), (5, 2, 2, 1), (6, 18, 2, 2), (7, 22, 3, 1), (8, 23, 3, 2), (9, 9, 4, 1), (10, 24, 4, 2), (11, 22, 5, 1), (12, 23, 5, 2), (13, 9, 5, 1), (14, 24, 5, 2);
CREATE TABLE
    advice (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        textAdvice LONGTEXT NOT NULL,
        user_id INT NOT NULL,
        CONSTRAINT fk_advice_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        decisionMaking_id INT NOT NULL,
        CONSTRAINT fk_advice_decisionMaking FOREIGN KEY (decisionMaking_id) REFERENCES decisionMaking(id)
    );

INSERT INTO
    advice (
        id,
        textAdvice,
        user_id,
        decisionMaking_id
    )
VALUES (
        1,
        "Bonjour Julien, très bonne initiative, je pense que le fait de baisser le prix du café nous permettra d'être plus en symbiose du fait que certaines personnes se restreignaient à cause du coût; assez fort; de celui-ci.
        Nous verrons dorénavant plus de collègues dès lors de ce changement. Cela nous apportera une meilleure entente et de nombreux liens au-delà du cadre professionnel.",
        10,
        1
    );

CREATE TABLE
    conflict (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        textConflict LONGTEXT NOT NULL,
        user_id INT NOT NULL,
        CONSTRAINT fk_conflict_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        decisionMaking_id INT NOT NULL,
        CONSTRAINT fk_conflict_firstDecision FOREIGN KEY (decisionMaking_id) REFERENCES decisionMaking(id)
    );

INSERT INTO
    conflict (
        id,
        textConflict,
        user_id,
        decisionMaking_id
    )
VALUES (
        1,
        "Cela ne me semble pas très raisonnable au vu des coûts. Je ne suis donc pas tout à fait en accord avec les ambitions de l'entreprise, je dirais même que je suis sceptique pour le moment.",
        20,
        2
    );
