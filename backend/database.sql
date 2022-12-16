DROP DATABASE IF EXISTS makesense;

CREATE DATABASE makesense;

USE makesense;

DROP TABLE IF EXISTS `user`;

CREATE TABLE
    `user` (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        username VARCHAR (255) NOT NULL,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        `password` VARCHAR(255) NOT NULL,
        mail VARCHAR(255) NOT NULL,
        `role` VARCHAR(255) NOT NULL
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

CREATE TABLE
    decisionStatus (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        status VARCHAR(255) NOT NULL
    );

INSERT INTO
    decisionStatus (status) VALUE (
        "Prise de décision commencée"
    ), ("Première décision prise");

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
        decisionStatus_id INT NOT NULL,
        CONSTRAINT fk_decisionMaking_decisionStatus FOREIGN KEY (decisionStatus_id) REFERENCES decisionStatus(id),
        dateCreate DATE NOT NULL DEFAULT CURRENT_DATE,
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
        dateAdvice,
        dateFirstDecision,
        dateConflict,
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
        2,
        "2022/12/08"
    ), (
        2,
        17,
        "Proposition d'un menu végétarien à la cantine",
        "Dans le respect des choix de nos collaborateurs en matière culinaire, nous vous proposons de créer un menu végétarien sans gluten.",
        "Aucun impact économique, juste un impact sur le bien-être de nos collaborateurs et sur le respect de leur choix de vie.",
        "Les collaborateurs étant forcés à prendre leurs pauses à l'extérieur de la société pourront bénéficier d'un menu au sein de nos cantines",
        "Certains risques, liés aux allergènes, peuvent être prévenu dès lors de l'entrée de la cantine, il suffira de prévenir le chef cuisinier qui se tiendra à votre disposition, pour qu'il prenne en compte votre demande.",
        1,
        "12/04/2023"
    ), (
        3,
        14,
        "Remplacement des fauteuils de bureau",
        "Dans le cadre du remplacement de tous les postes de travail; viens par synergie; le changement de tous les fauteuils de bureau.",
        "Pour une meilleure ergonomie, pour prévenir des troubles musculo-squelletiques, nous nous engageons à changer ceux-ci pour le confort et le bien-être de tous nos collaborateurs.",
        "Meilleur environnement pour une meilleure rentabilité, ces fauteuils éco-responsable seront changés tous les 5 ans et remis à diverses associations pour être réutilisés dans les pays les plus nécessiteux.",
        "Date de livraison indéterminée, certains open-space seront livrés plusieurs semaines avant d'autres",
        1,
        "02/01/2023"
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
        02/03/2023,
        02/03/2023,
        02/04/2023,
        02/05/2023,
        10/05/2023,
        "Suite à vos retours, nous avons fait le choix de procéder au rafraîchissement des murs des locaux de travail. D'après plusieurs études, il nous semble opportun de repeindre les murs par des teintes de couleurs plus à même d'égayer vos journées et non les murs en teintes blanches et grises qui, j''en conviens, étaient moroses. Cela entraîne un léger surcoût sur la totalité du projet,
        passant de 528 660 € à 532 000 € suites aux négociations avec les artisans locaux. Bien sûr, pour respecter notre nouvelle charte écologique et durable, nous avons fait le choix de peinture écoresponsable aux couleurs pastels qui nous ont été recommandées."
    ), (
        5,
        18,
        "Créer une fête annuelle",
        "Comme il est de coutume au sein de nombreuses entreprises, je vous propose d’organiser une soirée annuelle de « Noël » afin que nous puissions ensemble, célébrer une année supplémentaire passée ensemble.
        Cet événement débutera à 17h le vendredi 16 décembre par une partie de bowling en équipe de 4 personnes. Les formations des équipes seront tirées au sort afin de favoriser les rencontres. Au sein de chaque équipe, chacune des personnes devra offrir à l’un de ses coéquipiers un présent, acheté au préalable (valeur maximum 10 euros). Le thème cette année pour le présent : le voyage.
        Cette partie endiablée sera suivie d’un repas de « Noël » au sein même du bowling. Un traiteur, choisi au préalable, nous aura concocté un menu « entrée-plat-dessert » suivi de quelques douceurs. Ce repas sera, bien évidemment accompagné de doux nectar, sélectionné avec délicatesse par notre expert Yanis.
        Pour les plus téméraires, une soirée dansante sous le thème des années 80, animé par un DJ, vous sera proposé.",
        "Aborder les vacances scolaires plus sereinement pour les parents.",
        "Minimiser les conflits",
        "Abus sur le nombre de jours de CA posés, démotivation pour les personnes les plus ancienne de l’entreprise.",
        1,
        1,
        "12/04/2023"
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
        textConflict LONGTEXT NOT NULL,
        user_id INT NOT NULL,
        CONSTRAINT fk_conflict_user FOREIGN KEY (user_id) REFERENCES `user`(id),
        decision_id INT NOT NULL,
        CONSTRAINT fk_conflict_decision FOREIGN KEY (decision_id) REFERENCES decision(id)
    );
