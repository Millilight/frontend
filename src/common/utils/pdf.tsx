import { jsPDF } from 'jspdf';

const wishTitles: { [key: string]: string } = {
  burial_cremation: 'Choix entre une crémation ou une inhumation:',
  burial_cremation_place: "Lieu d'inhumation ou de placement des cendres:",
  music: 'Musiques à utiliser lors des funérailles:',
  religion: "Désir ou non d'une cérémonie religieuse:",
  place: 'Lieu souhaité pour le déroulement de la cérémonie',
  prevoyance: "Possession d'un contrat de prévoyance obsèques:",
  list_of_people: 'Personnes en particulier à convier à la cérémonie:',
  coffin:
    "Attentes particulières concernant le choix du cercueil ou de l'urne:",
  ornament: 'Demandes concernant les décorations et ornements:',
  text: 'Texte à lire lors de la cérémonie',
  other: 'Autres informations laissées:',
};

const proceduresContent: { [key: string]: { [key2: string]: string } } = {
  intro: {
    i0: 'Informations administratives',
    i1: 'Les démarches administratives liées à la perte d’un proche peuvent être lourdes et chronophages, un moment où l’on voudrait ne pas avoir à se soucier de cela. ',
    i2: ' a choisi de faire confiance à Amuni pour vous faciliter les choses. Dans ce document, vous trouverez les éléments que ',
    i3: ' vous a laissés, ainsi que des informations supplémentaires pour vous guider dans les démarches.',
    i4: 'A noter que ces démarches sont à effectuer par un héritier de la personne décédée. Il pourra vous être demandé de prouver que vous l’êtes, dans ce cas vous devrez fournir une attestation de l’ensemble des héritiers (si la succession est inférieure à 5000€) ou un acte notarial (si elle est supérieure à 5000€).',
  },
  succession: {
    s1: 'Point succession\n',
    s2: 'Pour régler la succession, vous devez impérativement passer par un notaire si la succession comprend des biens immobiliers, si elle est supérieure à 5000€, ou s’il existe un testament ou une donation entre époux. \nLa loi impose aux héritier·es du défunt un délai pour le dépôt de la déclaration de succession et le paiement des droits de succession. Ce délai est de six mois si le défunt est décédé en France métropolitaine, de douze mois dans les autres cas. En cas de retard, un intérêt de 0,40 % par mois est dû. Le notaire doit donc être contacté rapidement afin de permettre un règlement dans les meilleurs délais. Pour aller voir un notaire, il est important de faire le point sur les éléments suivants.\n',
  },
  bank_products: {
    title: 'Comptes en banque',
    legatorContent1: 'Voici la liste de comptes en banque laissée par ',
    legatorContent2: ' (type de compte, banque, agence) :',
    help1:
      'D’abord, il est important de rapidement informer du décès la ou les banques dans lesquelles votre proche possédait des comptes, afin que ceux-ci soient bloqués (et que plus aucune opération ne soit enregistrée dessus, sauf s’il s’agit d’un compte joint).',
    help2:
      'Vous devez contacter chacune des banques pour les informer du décès. Pour la majorité des banques, il est nécessaire de contacter l’agence en particulier où votre proche possédait ses comptes. \nSi vous ne connaissez les comptes en banque de votre proche, ou que vous voulez vous assurer de ne pas en oublier, vous pouvez interroger le fichier national FICOBA. Attention, pour effectuer cette demande vous devez être héritier, et la démarche se fait par courrier. \nPlus tard, les comptes pourront être débloqués et clôturés par les héritiers au moment du règlement de la succession.\n',
  },
  life_insurances: {
    title: 'Assurances vie',
    legatorContent1: "Voici la liste d'assurances vie laissée par ",
    legatorContent2: " (organisme d'assurance, numéro de contrat) :",
    help1:
      "Si votre proche vous avait désigné·e comme bénéficiaire d'un contrat d'assurance vie, vous pouvez contacter l'assureur pour demander le versement du capital. Des justificatifs vous seront demandés, notamment un acte de décès, un justificatif de votre qualité de bénéficiaire, ou encore un RIB pour le versement.",
    help2:
      'En cas de doute, vous pouvez également vous renseigner auprès de l’Agira pour savoir si vous êtes bénéficiaire d’un contrat d’assurance vie. Elle disposera de 15 jours pour contacter les assurances, qui elles même reviendront ensuite vers vous pour vous demander les documents nécessaires.\n',
  },
  insurance_products: {
    title: "Contrats d'assurance",
    legatorContent1: 'Voici la liste des contrats d’assurance laissée par ',
    legatorContent2: '  (type de compte, entreprise, agence) :',
    help1:
      'Ensuite, vous devez contacter les assurances. D’après le Code des Assurances, lorsqu’une personne souscrit à une assurance habitation, auto ou deux-roues, la couverture continue après son décès. Ce sont les héritier·es qui seront couvert·es et devront payer les cotisations (ils devront effectuer la démarche de résiliation s’ils ne souhaitent pas poursuivre le contrat).',
    help2:
      'En tant qu’héritier·e, que vous souhaitiez poursuivre ou résilier ces contrats d’assurance, vous devez contacter les compagnies d’assurances concernées pour les informer du décès, passer les contrats à votre nom ou les résilier.\n',
  },
  vehicles: {
    title: 'Véhicules',
    legatorContent1: 'Voici la liste de véhicules que possédait ',
    legatorContent2: ' (modèle, numéro d’immatriculation) :',
    help1:
      "Il est important de rapidement mettre à jour la carte grise (aussi appelée certificat d’immatriculation) des véhicules de votre proche. C’est impératif pour que le véhicule puisse continuer à rouler sur la voie public après le décès de son propriétaire (article R322-5 du Code de la route). \nLes documents à fournir dépendent de votre relation avec votre proche (conjoint·e,enfant), de si le véhicule a roulé depuis le décès, et de ce que vous souhaitez en faire (le conserver ou le vendre). Cette liste de documents peut être trouvée sur le site du service public ([https://www.service-public.fr/particuliers/vosdroits/F1480](https://www.service-public.fr/particuliers/vosdroits/F1480)). \nVous pouvez également choisir de détruire le véhicule (pas de changement de carte grise nécessaire) en le remettant à un centre Véhicule Hors d'Usage (VHU) agréé.",
    help2:
      'Pour effectuer ces démarches, vous aurez besoin de la carte grise originale du véhicule. Dans le cas où elle serait introuvable, vous devrez effectuer une déclaration de perte auprès de l’Agence Nationale des Titres Sécurisés (ANTS), à partir du modèle et du numéro d’immatriculation du véhicule.\n',
  },
  consumer_credits: {
    title: 'Crédits à la consommation',
    legatorContent1: 'Voici la liste de crédits à la consommation laissée par ',
    legatorContent2: ' (entreprise, numéro de contrat) :',
    help1:
      'Si votre proche a souscrit à des crédits à la consommation (sans assurance décès et sans co-emprunteur), le capital restant à rembourser au moment du décès sera intégré au passif de la succession.',
    help2:
      'En tant qu’héritier·e, vous devez faire l’état des lieux des crédits à la consommation en cours, en vous basant sur les informations que votre proche vous aurait transmises et en faisant le tri dans ses papier. En effet, ces crédits seront à prendre en compte dans votre choix d’accepter ou non l’héritage, puisque vous devrez prendre en charge le remboursement des dettes, dont ces crédits font partie.\n',
  },
  properties: {
    title: 'Biens immobiliers',
    legatorContent1: 'Voici la liste des biens immobiliers laissée par ',
    legatorContent2:
      ' pour vous aider dans cette démarche (type de bien, localisation) :',
    help1:
      'Au moment du partage des biens, le notaire devra rechercher tous les biens immobiliers du défunt. Si l’existence et la localisation des biens est mal connue, il doit alors se livrer à une véritable enquête, les démarches peuvent être très longues et retarder le règlement de la succession. \nEn tant qu’héritier·e, vous pouvez faciliter les choses en préparant une liste précise des biens que possédait votre proche. (Il est bien sûr possible que les choses aient été anticipées par un testament.)',
    help2: '\n',
  },
  internet_accounts_to_be_deleted: {
    title: 'Comptes internet à fermer',
    legatorContent1: 'Voici la liste des comptes internet que  ',
    legatorContent2: ' souhaite faire fermer (site, nom d’utilisateur).',
    help1:
      'Avec l’article 40-1 Loi Informatique et libertés (2016),  vous pouvez en tant qu’héritier·e exercer certains droits sur les comptes numériques de votre proche, notamment demander la clôture des comptes utilisateurs.',
    help2:
      'Pour fermer les comptes, les plus gros acteurs proposent des formulaires (Google, Facebook, Instagram, Twitter) ou adresses emails (Microsoft, Amazon) dédiés, dans les rubriques d’aide ou d’assistance de leur site. Pour les autres, il vous faudra contacter le support du site.\nIl vous sera généralement demandé de fournir un certificat de décès, votre pièce d’identité, et une preuve de lien familial. Ces démarches prennent en moyenne 30 jours.\n',
  },
};

export function dowloadLegatorWishes(
  wishes: UrgentDataWishes,
  legator: Legator
) {
  const doc = new jsPDF('p', 'in', 'letter');

  let offset = 1.8; // in inches

  // Amuni logo
  const img = new Image();
  img.src = '/amuni.png';
  doc.addImage(img, 'png', 0.75, 0.75, 2.8, 0.75);

  // Title
  const text =
    'Voici les volontés cérémoniales transmises par ' +
    legator.first_name +
    ' ' +
    legator.last_name +
    ':\n';
  let lines = doc.setFontSize(16).splitTextToSize(text, 7);
  doc.setTextColor(3, 77, 110);
  doc.text(lines, 0.75, offset + 16 / 72);
  offset += ((lines.length + 0.5) * 18) / 72;

  doc.setTextColor(0);

  let noWishes = true;

  // Display all wishes
  for (const [key, value] of Object.entries(wishes)) {
    if (value) {
      noWishes = false;
      // Title
      const title = '• ' + wishTitles[key] + '\n';
      lines = doc.setFontSize(14).splitTextToSize(title, 7);
      if (offset + ((lines.length + 0.5) * 14) / 72 > 10.25) {
        doc.addPage();
        offset = 0.75;
      }
      doc.text(lines, 0.75, offset + 14 / 72);
      offset += ((lines.length + 0.5) * 14) / 72;

      // Content
      const content = value + '\n';
      lines = doc.setFontSize(11).splitTextToSize(content, 6.5);
      if (offset + ((lines.length + 0.5) * 14) / 72 > 10.25) {
        doc.addPage();
        offset = 0.75;
      }
      doc.text(lines, 1.15, offset + 11 / 72);
      offset += ((lines.length + 0.5) * 14) / 72;
    }
  }

  // Messsage if no wishes
  if (noWishes) {
    const title = "Aucune volonté n'a été renseignée pour le moment." + '\n';
    lines = doc.setFontSize(14).splitTextToSize(title, 7);
    doc.text(lines, 0.75, offset + 14 / 72);
    offset += ((lines.length + 0.5) * 14) / 72;
  }

  doc.save('volontes_ceremoniales.pdf');
}

export function dowloadMyWishes(wishes: UrgentDataWishes) {
  const doc = new jsPDF('p', 'in', 'letter');

  let offset = 1.8; // in inches

  // Amuni logo
  const img = new Image();
  img.src = '/amuni.png';
  doc.addImage(img, 'png', 0.75, 0.75, 2.8, 0.75);

  // Title
  const text =
    'Voici les volontés cérémoniales que vous souhaitez transmettre à vos tiers de confiance ' +
    ':\n';
  let lines = doc.setFontSize(16).splitTextToSize(text, 7);
  doc.setTextColor(3, 77, 110);
  doc.text(lines, 0.75, offset + 16 / 72);
  offset += ((lines.length + 0.5) * 18) / 72;

  doc.setTextColor(0);

  let noWishes = true;

  // Display all wishes
  for (const [key, value] of Object.entries(wishes)) {
    if (value) {
      noWishes = false;
      // Title
      const title = '• ' + wishTitles[key] + '\n';
      lines = doc.setFontSize(14).splitTextToSize(title, 7);
      if (offset + ((lines.length + 0.5) * 14) / 72 > 10.25) {
        doc.addPage();
        offset = 0.75;
      }
      doc.text(lines, 0.75, offset + 14 / 72);
      offset += ((lines.length + 0.5) * 14) / 72;

      // Content
      const content = value + '\n';
      lines = doc.setFontSize(11).splitTextToSize(content, 6.5);
      if (offset + ((lines.length + 0.5) * 14) / 72 > 10.25) {
        doc.addPage();
        offset = 0.75;
      }
      doc.text(lines, 1.15, offset + 11 / 72);
      offset += ((lines.length + 0.5) * 14) / 72;
    }
  }

  // Messsage if no wishes
  if (noWishes) {
    const title = "Aucune volonté n'a été renseignée pour le moment." + '\n';
    lines = doc.setFontSize(14).splitTextToSize(title, 7);
    doc.text(lines, 0.75, offset + 14 / 72);
    offset += ((lines.length + 0.5) * 14) / 72;
  }

  doc.save('mes_volontes_ceremoniales.pdf');
}

export function dowloadLegatorPaperworkProcedures(
  procedures: SensitiveDataProcedures,
  legator: User,
  legatorPOV: boolean
) {
  const doc = new jsPDF('p', 'in', 'letter');

  let offset = 1.8; // in inches

  function writeText(
    text: string,
    size: number,
    verticalSpace: number,
    width: number,
    leftSpace: number,
    withSquare: boolean
  ) {
    const lines = doc.setFontSize(size).splitTextToSize(text, width);
    if (offset + ((lines.length + 0.5) * verticalSpace) / 72 > 10.25) {
      doc.addPage();
      offset = 0.75;
    }
    if (withSquare) {
      doc.setFillColor(225, 237, 255);
      doc.roundedRect(
        0.75,
        offset,
        7,
        ((lines.length + 0.5) * 12.5) / 72,
        0.1,
        0.1,
        'F'
      );
    }

    doc.text(lines, leftSpace, offset + size / 72);
    offset += ((lines.length + 0.5) * verticalSpace) / 72;
  }

  function displayProcedure(
    key: string,
    value:
      | Vehicle[]
      | InternetAccountToBeDeleted[]
      | RealEstate[]
      | ConsumerCredit[]
      | LifeInsurance[]
      | BankProduct[]
      | InsuranceProduct[]
      | string[]
      | null
      | undefined
  ) {
    // Title
    const title = '• ' + proceduresContent[key].title + '\n';
    writeText(title, 14, 14, 7, 0.75, false);

    writeText(proceduresContent[key].help1, 11, 14, 7, 0.75, false);

    if (value && value !== null && value.length) {
      // Content
      let content =
        '\n' +
        proceduresContent[key].legatorContent1 +
        legator.first_name +
        proceduresContent[key].legatorContent2 +
        '\n\n';
      value.map((row) => {
        let rowContent = '- ';
        for (const [id, field] of Object.entries(row)) {
          if (id !== '__typename') {
            rowContent += field + ', ';
          }
        }
        const rowContent2 = rowContent.substring(0, rowContent.length - 2);
        content += rowContent2 + '\n';
      });
      writeText(content, 11, 11, 6, 1.25, true);
      writeText('\n', 11, 11, 6, 1.25, false);
    }

    writeText(proceduresContent[key].help2, 11, 14, 7, 0.75, false);
  }

  // Amuni logo
  const img = new Image();
  img.src = '/amuni.png';
  doc.addImage(img, 'png', 0.75, 0.75, 2.8, 0.75);

  if (legatorPOV) {
    writeText(
      'Voici le document qui sera transmis à vos tiers de confiance pour les aider dans les démarches administratives' +
        ':\n',
      11,
      14,
      7,
      0.75,
      false
    );
  }

  // Title;
  doc.setTextColor(3, 77, 110);
  writeText(proceduresContent.intro.i0 + '\n', 16, 16, 7, 0.75, false);

  // Intro
  const intro =
    proceduresContent.intro.i1 +
    legator.first_name +
    ' ' +
    legator.last_name +
    proceduresContent.intro.i2 +
    legator.first_name +
    proceduresContent.intro.i3;

  doc.setTextColor(0);
  writeText(intro, 11, 14, 7, 0.75, false);

  const lines = doc
    .setFontSize(11)
    .splitTextToSize('\n' + proceduresContent.intro.i4 + '\n', 6);
  if (offset + ((lines.length + 0.5) * 14) / 72 > 10.25) {
    doc.addPage();
    offset = 0.75;
  }
  doc.setFillColor(3, 77, 110);
  doc.roundedRect(
    0.75,
    offset,
    7,
    ((lines.length + 0.5) * 12.5) / 72,
    0.1,
    0.1,
    'F'
  );
  doc.setTextColor(256);
  doc.text(lines, 1.25, offset + 11 / 72);
  offset += ((lines.length + 0.5) * 14) / 72;

  // Display all procedures
  doc.setTextColor(0);
  displayProcedure('bank_products', procedures['bank_products']);
  displayProcedure('life_insurances', procedures['life_insurances']);
  displayProcedure('insurance_products', procedures['insurance_products']);
  displayProcedure('vehicles', procedures['vehicles']);
  displayProcedure(
    'internet_accounts_to_be_deleted',
    procedures['internet_accounts_to_be_deleted']
  );

  const succesion = doc
    .setFontSize(11)
    .splitTextToSize(
      '\n' +
        proceduresContent.succession.s1 +
        '\n' +
        proceduresContent.succession.s2 +
        '\n',
      6
    );
  if (offset + ((lines.length + 0.5) * 14) / 72 > 10.25) {
    doc.addPage();
    offset = 0.75;
  }
  doc.setFillColor(3, 77, 110);
  doc.roundedRect(
    0.75,
    offset,
    7,
    ((succesion.length + 0.5) * 12.5) / 72,
    0.1,
    0.1,
    'F'
  );
  doc.setTextColor(256);
  doc.text(succesion, 1.25, offset + 11 / 72);
  offset += ((succesion.length + 0.5) * 14) / 72;

  doc.setTextColor(0);
  displayProcedure('properties', procedures['properties']);
  displayProcedure('consumer_credits', procedures['consumer_credits']);

  doc.save('informations_administratives.pdf');
}
