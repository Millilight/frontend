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
    'Voici les volontés cérémoniales que vous souhaitez transmettre à vos personnes de confiance ' +
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
