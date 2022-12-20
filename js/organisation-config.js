var organisationConfig = {
    nl_organisationName: "Logius",
  nl_organisationStylesURL:
    "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
  nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",
  nl_logo: {
    src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  },
  // preProcess: [mdAddFigure],

  localizationStrings: {
    en: {
      wv: "Draft",
      cv: "Recommendation",
      vv: "Proposed recommendation",
      def: "Definitive version",
      basis: "Document",
      eo: "Outdated version",
      tg: "Rescinded version",
      no: "Norm",
      st: "Standard",
      im: "Information model",
      pr: "Guideline",
      hr: "Guide",
      wa: "Proposed recommendation",
      al: "General",
      bd: "Governance documentation",
      bp: "Best practice",
    },
    nl: {
      wv: "Werkversie",
      cv: "Consultatieversie",
      vv: "Versie ter vaststelling",
      def: "Vastgestelde versie",
      basis: "Document",
      eo: "Verouderde versie",
      tg: "Teruggetrokken versie",
      no: "Norm",
      st: "Standaard",
      im: "Informatiemodel",
      pr: "Praktijkrichtlijn",
      hr: "Handreiking",
      wa: "Werkafspraak",
      al: "Algemeen",
      bd: "Beheerdocumentatie",
      bp: "Best practice",
    },
  },

  specTypeText: {
    en: {
      no: "Norm",
      st: "Standard",
      im: "Information model",
      pr: "Guideline",
      hr: "Guide",
      wa: "Proposed recommendation",
      al: "General",
      bd: "Governance documentation",
      bp: "Best practice",
    },
    nl: {
      no: "Norm",
      st: "Standaard",
      im: "Informatiemodel",
      pr: "Praktijkrichtlijn",
      hr: "Handreiking",
      wa: "Werkafspraak",
      al: "Algemeen",
      bd: "Beheerdocumentatie",
      bp: "Best practice",
    },
  },

  specStatusText: {
    en: {
      wv: "Draft",
      cv: "Recommendation",
      vv: "Proposed recommendation",
      def: "Definitive version",
      basis: "Document",
      eo: "Outdated version",
      tg: "Rescinded version",
    },
    nl: {
      wv: "Werkversie",
      cv: "Consultatieversie",
      vv: "Versie ter vaststelling",
      def: "Vastgestelde versie",
      basis: "Document",
      eo: "Verouderde versie",
      tg: "Teruggetrokken versie",
    },
  },

  sotdText: {
    nl: {
      sotd: "Status van dit document",
      def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door het TO goedgekeurde consultatieversie.`,
      cv: `Dit is een door het TO goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar `,
      vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      basis: "Dit is een document zonder officiële status.",
    },
    en: {
      sotd: "Status of This Document",
      def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
      wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by TO.`,
      cv: `This is a proposed recommendation approved by TO. Comments regarding this document may be sent to `,
      vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
      basis: "This document has no official standing.",
    },
  },
  
  nl_markdownEmbedImageInFigure: true,

  labelColor: {
    def: "#154273",
    wv: "#32a852",
  },
  licenses: {
    cc0: {
      name: "Creative Commons 0 Public Domain Dedication",
      short: "CC0",
      url: "https://creativecommons.org/publicdomain/zero/1.0/",
      image:
        "https://tools.geostandaarden.nl/respec/style/logos/CC-Licentie.svg",
    },
    "cc-by": {
      name: "Creative Commons Attribution 4.0 International Public License",
      short: "CC-BY",
      url: "https://creativecommons.org/licenses/by/4.0/legalcode",
      image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by.svg",
    },
    "cc-by-nd": {
      name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
      short: "CC-BY-ND",
      url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
      image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by-nd.svg",
    },
  },
	
localBiblio: {
    NEN3610: {
      href: "http://www.nen.nl/web/Normshop/Norm/NEN-36102011-nl.htm",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: [""],
      date: "Maart 2011",
      publisher: "Nederlands Normalisatie-instituut",
    },
    "no-Reliable-messaging": {
      href: "https://www.infoq.com/articles/no-reliable-messaging/",
      title: "Nobody Needs Reliable Messaging",
      authors: ["Marc de Graauw"],
      date: "June 18, 2010",
      publisher: "infoQ",
    },
    "API Design Rules": {
      href: "https://publicatie.centrumvoorstandaarden.nl/api/adr/",
      title: "API Design Rules (Nederlandse API Strategie IIa)",
      authors: ["Jasper Roes", "Joost Farla"],
      date: "Juli 2020",
      publisher: "Logius",
    },
    "Digikoppeling Koppelvlakstandaard REST API": {
      href: "https://logius-standaarden.github.io/Digikoppeling-Koppelvlakstandaard-REST-API/",
      title: "Digikoppeling Restful API Profiel (Concept)",
      date: "februari 2021",
      publisher: "Logius",
    },
    "Digikoppeling Beheermodel":
    {
      href: "https://publicatie.centrumvoorstandaarden.nl/dk/beheer/",
      title: "Beheermodel en releasebeleid Digikoppeling v1.5",
      date: "Oktober 2017",
      publisher: "Logius",
    },
    "Digikoppeling Koppelvlakstandaard Grote Berichten": {
      href: "https://logius-standaarden.github.io/Digikoppeling-Koppelvlakstandaard-GB/",
      title: "Digikoppeling Koppelvlakstandaard Grote Berichten",
      date: "september 2020",
      publisher: "Logius",
    },
    "Digikoppeling Koppelvlakstandaard WUS": {
      href: "https://logius-standaarden.github.io/Digikoppeling-Koppelvlakstandaard-WUS/",
      title: "Digikoppeling Koppelvlakstandaard ebMS2",
      date: "oktober 2020",
      publisher: "Logius",
    },
    "Digikoppeling Koppelvlakstandaard ebMS2": {
      href: "https://logius-standaarden.github.io/Digikoppeling-Koppelvlakstandaard-ebMS2/",
      title: "Digikoppeling Koppelvlakstandaard ebMS2",
      date: "mei 2019",
      publisher: "Logius",
    },
    "Digikoppeling Beveiligingsdocument": {
      href: "https://publicatie.centrumvoorstandaarden.nl/dk/beveilig/",
      title: "Digikoppeling Beveiligingsstandaarden en voorschriften",
      date: "2021",
      publisher: "Logius",
    },
    "Digikoppeling Best Practices ebMS2": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie",
      title: "Digikoppeling Best Practices ebMS2",
      date: "2019",
      publisher: "Logius",
    },
    "Digikoppeling Best Practices WUS": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie",
      title: "Digikoppeling Best Practices WUS",
      date: "2019",
      publisher: "Logius",
    },
    "Digikoppeling Best Practices Grote Berichten": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie",
      title: "Digikoppeling Best Practices Grote Berichten",
      date: "2019",
      publisher: "Logius",
    },
    "Digikoppeling Identificatie-Authenticatie": {
      href: "https://www.logius.nl/diensten/digikoppeling/documentatie",
      title: "Digikoppeling Identificatie en Authenticatie",
      publisher: "Logius",
    },
    "Digikoppeling Actuele Documentatie": {
      href: "http://www.logius.nl/digikoppeling",
      title: "Digikoppeling Overzicht Actuele Documentatie en Compliance",
      publisher: "Logius",
    },
    "Digikoppeling Gebruik Certificaten": {
      href: "http://www.logius.nl/digikoppeling",
      title: "Digikoppeling Gebruik en achtergrond certificaten",
      publisher: "Logius",
    },
    "Digikoppeling-Cert": {
      href: "http://www.logius.nl/digikoppeling",
      title: "Gebruik en achtergrond van Digikoppeling certificaten",
      publisher: "Logius",
    },
    "PKI Policy": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/pogramma-van-eisen",
      title: "Programma van Eisen (PKIoverheid)",
      publisher: "Logius",
    },
    "PKI CA": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/toegetreden-vertrouwensdienstverleners",
      title: "Toegetreden vertrouwensdienstverleners",
      publisher: "Logius",
    },
    "PKIoverheid Certificaten": {
      href: "https://cert.pkioverheid.nl/",
      title: "Pkioverheid certificaten",
      publisher: "Logius"
    },
    "Logius website": {
      href: "https://logius.nl/digikoppeling",
      title: "Logius Digikoppeling",
      publisher: "Logius",
    },
    "Digikoppeling Compliance Voorziening": {
      href: "https://portaal.digikoppeling.nl",
      title: "Digikoppeling Compliance Voorziening",
      publisher: "Logius",
    },
    "Pas-toe-of-leg-uit": {
      href: "https://www.forumstandaardisatie.nl/open-standaarden/verplicht",
      title: "Lijst Verplichte standaarden",
      publisher: "Forum Standaardisatie",
    }
  },
}
