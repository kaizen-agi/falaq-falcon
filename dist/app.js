const translations = {
  fr: {
    'nav.concept':'L’écurie','nav.ownership':'Propriété','nav.digital':'Espace propriétaire','nav.circle':'Le Cercle','nav.enquire':'Demande privée',
    'hero.eyebrow':'Propriété privée · Gestion intégrale','hero.line1':'Possédez un champion.','hero.line2':'Créez un héritage.','hero.intro':'Acquérez un faucon d’exception. Nous gérons chaque détail de sa vie, de ses performances et de son avenir — avec l’exigence d’une écurie de classe mondiale.','hero.cta':'Demander une présentation privée','hero.discover':'Découvrir l’écurie','hero.f1':'Acquisition & pedigree','hero.f2':'Entraînement & compétition','hero.f3':'Soins & traçabilité digitale',
    'concept.eyebrow':'Une nouvelle vision de la propriété','concept.title':'Plus qu’un faucon.<br />Un héritage vivant.','concept.lead':'Private Falcon Stable associe la discipline d’une écurie de course au patrimoine d’un grand haras, au service du noble art de la fauconnerie.','concept.p1t':'Vous possédez','concept.p1d':'La propriété entière ou partagée d’un faucon réel et identifié, avec des droits contractuels clairs.','concept.p2t':'Nous gérons','concept.p2d':'Entraînement, nutrition, soins vétérinaires, transport, licences, assurance et compétition.','concept.p3t':'Ensemble, nous créons de la valeur','concept.p3d':'Performance, pedigree, reproduction et vente future sont réunis dans une stratégie de long terme.',
    'own.eyebrow':'Le parcours propriétaire','own.title':'De la sélection<br />à la transmission.','own.intro':'Un service discret et complet, pensé autour du faucon, de son propriétaire et de la transmission familiale.','own.s1t':'Sélectionner','own.s1d':'Espèce, génétique, pedigree et potentiel sportif — évalués avec une diligence complète.','own.s2t':'Développer','own.s2d':'Protocoles individualisés d’entraînement, de nutrition et de suivi vétérinaire.','own.s3t':'Concourir','own.s3d':'Planification de saison, licences, transport et gestion des compétitions officielles.','own.s4t':'Préserver','own.s4d':'Reproduction, transmission et vente future maîtrisée pour protéger la valeur à long terme.','own.note':'La propriété, les gains de compétition et le partage des revenus sont soumis à des accords individuels, à la réglementation applicable et à une validation juridique et de conformité à la finance islamique indépendante.',
    'digital.eyebrow':'Toujours proche. Où que vous soyez.','digital.title':'La mémoire vivante<br />de votre faucon.','digital.intro':'Un espace propriétaire privé rassemble performances, santé, localisation et provenance dans une expérience simple et raffinée.','digital.l1':'GPS en direct & activité d’entraînement','digital.l2':'Santé, vaccins & documents','digital.l3':'Vidéos, résultats & calendrier','digital.l4':'Pedigree, ADN & passeport numérique',
    'circle.eyebrow':'Adhésion, sur invitation','circle.title':'Choisissez votre place<br />dans l’écurie.','circle.intro':'Chaque relation est sur mesure. Votre niveau de membre définit vos accès, vos services et vos expériences privées.','circle.t1l':'Falcon Member','circle.t1t':'Commencez votre histoire.','circle.t1a':'Un faucon sous gestion','circle.t1b':'Espace propriétaire privé','circle.t1c':'Visites sur rendez-vous','circle.t2l':'Elite Falcon Owner','circle.t2t':'Créez votre écurie.','circle.t2a':'Portefeuille de plusieurs faucons','circle.t2b':'Salon privé & événements','circle.t2c':'Programme compétition prioritaire','circle.t3l':'Royal Falcon Circle','circle.t3t':'Fondez une dynastie.','circle.t3a':'Conciergerie dédiée','circle.t3b':'Voyages & compétitions privées','circle.t3c':'Accès reproduction d’élite',
    'heritage.quote':'« L’héritage n’est pas ce que nous gardons derrière nous. C’est ce que nous plaçons entre les mains de la prochaine génération. »','heritage.eyebrow':'Enraciné dans la tradition. Fondé sur la confiance.','heritage.title':'Propriété réelle.<br />Transparence totale.','heritage.body':'Chaque faucon est un actif réel, avec une identité vérifiée, des soins documentés et une provenance complète. Le modèle repose sur des contrats transparents — jamais sur le hasard ou la spéculation.','heritage.t1':'Passeport numérique','heritage.t2':'Pedigree traçable','heritage.t3':'Validation indépendante',
    'form.eyebrow':'Présentations privées','form.title':'Votre héritage<br />commence ici.','form.intro':'Dites-nous comment vous imaginez votre place dans l’écurie. Un conseiller privé vous contactera pour organiser une présentation discrète.','form.name':'Nom complet','form.email':'Adresse e-mail','form.phone':'Téléphone / WhatsApp','form.interest':'Je suis intéressé par','form.message':'Quelques mots sur votre projet','form.privacy':'Votre demande est traitée en toute confidentialité.','form.submit':'Demander une présentation','footer.note':'Un concept de propriété privée pour les gardiens de demain.','footer.contact':'Contact','footer.privacy':'Confidentialité'
  }
};

const original = {};
document.querySelectorAll('[data-i18n]').forEach(el => original[el.dataset.i18n] = el.innerHTML);
const langButton = document.querySelector('.lang-toggle');
let language = 'en';
langButton.addEventListener('click', () => {
  language = language === 'en' ? 'fr' : 'en';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = language === 'fr' ? translations.fr[key] || original[key] : original[key];
  });
  langButton.querySelectorAll('span').forEach((span, index) => span.classList.toggle('active', index === (language === 'en' ? 0 : 1)));
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 100), {passive:true});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); document.body.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded','false');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.journey-card').forEach(card => card.addEventListener('mouseenter', () => {
  document.querySelectorAll('.journey-card').forEach(c => c.classList.remove('active')); card.classList.add('active');
}));

document.getElementById('year').textContent = new Date().getFullYear();
