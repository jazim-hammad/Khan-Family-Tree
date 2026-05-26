const NODE = { width: 220, height: 74 };
const WORLD = { width: 3120, height: 3720 };
const COL = [80, 620, 1160, 1700, 2240, 2780];
const FOCUS_ID = "jazim-hammad-khan";

const branchLabels = {
  root: "Founding line",
  sharif: "Mohammad Sharif Khan branch",
  razia: "Razia Sultana branch",
  basheer: "Mohammad Basheer Khan branch",
  zakiya: "Zakiya Sultana branch",
  naseer: "Naseer Khan branch",
  partner: "Family by marriage",
};

const xy = (generation, y) => ({ x: COL[generation], y });
const partnerXy = (generation, y) => ({ x: COL[generation] + 250, y });

const peopleList = [
  { id: "nathay-khan", name: "Nathay Khan", branch: "root", generation: 1, layout: xy(0, 1510) },
  { id: "wazeer-begum", name: "Wazeer Begum", branch: "root", generation: 1, layout: xy(0, 1600) },

  { id: "mohammad-sharif-khan", name: "Mohammad Sharif Khan", branch: "sharif", generation: 2, layout: xy(1, 300) },
  { id: "razia-sultana", name: "Razia Sultana", branch: "razia", generation: 2, layout: xy(1, 820) },
  { id: "malik-taj-deen", name: "Malik Taj Deen", branch: "partner", generation: 2, layout: partnerXy(1, 820) },
  { id: "mohammad-basheer-khan", name: "Mohammad Basheer Khan", branch: "basheer", generation: 2, layout: xy(1, 1510) },
  { id: "iqbal-begum", name: "Iqbal Begum", branch: "partner", generation: 2, layout: partnerXy(1, 1510) },
  { id: "zakiya-sultana", name: "Zakiya Sultana", branch: "zakiya", generation: 2, layout: xy(1, 2450) },
  { id: "hakim-ali", name: "Hakim Ali", branch: "partner", generation: 2, layout: partnerXy(1, 2450) },
  { id: "naseer-khan", name: "Naseer Khan", branch: "naseer", generation: 2, layout: xy(1, 3220) },
  { id: "fehmeeda", name: "Fehmeeda", branch: "partner", generation: 2, layout: partnerXy(1, 3220) },

  { id: "dr-arshad-khan", name: "Dr. Arshad Khan", branch: "sharif", generation: 3, layout: xy(2, 120) },
  { id: "jahan-ara", name: "Jahan Ara", branch: "partner", generation: 3 },
  { id: "mohammad-ashraf", name: "Mohammad Ashraf", branch: "sharif", generation: 3, layout: xy(2, 230) },
  { id: "shamim", name: "Shamim", branch: "partner", generation: 3 },
  { id: "naaz", name: "Naaz", branch: "partner", generation: 3 },
  { id: "sadia", name: "Sadia", branch: "sharif", generation: 3, layout: xy(2, 340) },
  { id: "asifa", name: "Asifa", branch: "sharif", generation: 3, layout: xy(2, 450) },
  { id: "shakeela", name: "Shakeela", branch: "sharif", generation: 3, layout: xy(2, 560) },
  { id: "fouzia", name: "Fouzia", branch: "sharif", generation: 3, layout: xy(2, 670) },

  { id: "malik-salahuddin", name: "Malik Salahuddin", branch: "razia", generation: 3, layout: xy(2, 700) },
  { id: "malik-ghayasuddin", name: "Malik Ghayasuddin", branch: "razia", generation: 3, layout: xy(2, 800) },
  { id: "malik-ziauddin", name: "Malik Ziauddin", branch: "razia", generation: 3, layout: xy(2, 900) },
  { id: "azra", name: "Azra", branch: "razia", generation: 3, layout: xy(2, 1000) },
  { id: "tahira", name: "Tahira", branch: "razia", generation: 3, layout: xy(2, 1100) },
  { id: "shahida", name: "Shahida", branch: "razia", generation: 3, layout: xy(2, 1200) },
  { id: "zahida", name: "Zahida", branch: "razia", generation: 3, layout: xy(2, 1300) },
  { id: "qaisira", name: "Qaisira", branch: "razia", generation: 3, layout: xy(2, 1400) },

  { id: "nasira-zia", name: "Nasira Zia", branch: "basheer", generation: 3, layout: xy(2, 900) },
  { id: "dr-abdul-karim", name: "Dr. Abdul Karim", branch: "partner", generation: 3, layout: partnerXy(2, 900) },
  { id: "amjad-pervaiz-khan", name: "Amjad Pervaiz Khan", branch: "basheer", generation: 3, born: "5 May 1942", layout: xy(2, 1420) },
  { id: "tahira-ilyas", name: "Tahira Ilyas", branch: "partner", generation: 3, born: "26 February 1946", layout: partnerXy(2, 1420) },
  { id: "tehsin-afza", name: "Tehsin Afza", branch: "basheer", generation: 3, layout: xy(2, 1900) },
  { id: "mohammad-khalid", name: "Mohammad Khalid", branch: "partner", generation: 3, layout: partnerXy(2, 1900) },
  { id: "azhar-iqbal-khan", name: "Azhar Iqbal Khan", branch: "basheer", generation: 3, layout: xy(2, 2200) },
  { id: "rashida-hameed", name: "Rashida Hameed", branch: "partner", generation: 3, layout: partnerXy(2, 2200) },
  { id: "talat-jameel-sohail", name: "Talat Jameel (Sohail)", branch: "basheer", generation: 3, layout: xy(2, 2630) },
  { id: "tayaba", name: "Tayaba", branch: "partner", generation: 3, layout: partnerXy(2, 2630) },
  { id: "anjum", name: "Anjum", branch: "basheer", generation: 3, layout: xy(2, 2910) },

  { id: "m-abid-ali", name: "M. Abid Ali", branch: "zakiya", generation: 3, layout: xy(2, 2300) },
  { id: "m-khalid-zakiya", name: "M. Khalid", branch: "zakiya", generation: 3, layout: xy(2, 2385) },
  { id: "m-jafer", name: "M. Jafer", branch: "zakiya", generation: 3, layout: xy(2, 2470) },
  { id: "fareeda", name: "Fareeda", branch: "zakiya", generation: 3, layout: xy(2, 2555) },
  { id: "naheed-akhter", name: "Naheed Akhter", branch: "zakiya", generation: 3, layout: xy(2, 2640) },
  { id: "rukhsana-kausar", name: "Rukhsana Kausar", branch: "zakiya", generation: 3, layout: xy(2, 2725) },
  { id: "fakhara-parveen", name: "Fakhara Parveen", branch: "zakiya", generation: 3, layout: xy(2, 2810) },
  { id: "ghazala-parveen", name: "Ghazala Parveen", branch: "zakiya", generation: 3, layout: xy(2, 2895) },
  { id: "raheela-tabassum", name: "Raheela Tabassum", branch: "zakiya", generation: 3, layout: xy(2, 2980) },
  { id: "m-tariq", name: "M. Tariq", branch: "zakiya", generation: 3, layout: xy(2, 3065) },
  { id: "sami-ul-haq", name: "Sami-ul-Haq", branch: "zakiya", generation: 3, layout: xy(2, 3150) },

  { id: "gulrez-khan", name: "Gulrez Khan", branch: "naseer", generation: 3, layout: xy(2, 3240) },
  { id: "nuzat-khan", name: "Nuzat Khan", branch: "naseer", generation: 3, layout: xy(2, 3330) },
  { id: "faisal-khan", name: "Faisal Khan", branch: "naseer", generation: 3, layout: xy(2, 3420) },
  { id: "raheel-khan", name: "Raheel Khan", branch: "naseer", generation: 3, layout: xy(2, 3510) },

  { id: "dr-abdul-rehman", name: "Dr. Abdul Rehman", branch: "basheer", generation: 4, layout: xy(3, 760) },
  { id: "saima-karim", name: "Saima Karim", branch: "basheer", generation: 4, layout: xy(3, 860) },
  { id: "khawar-aziz", name: "Khawar Aziz", branch: "partner", generation: 4 },
  { id: "vanees-karim", name: "Vanees Karim", branch: "basheer", generation: 4, layout: xy(3, 960) },
  { id: "sadaf-nazli", name: "Sadaf Nazli", branch: "basheer", generation: 4, layout: xy(3, 1060) },
  { id: "rehan-ahmed", name: "Rehan Ahmed", branch: "partner", generation: 4 },
  { id: "nasir-karim", name: "Nasir Karim", branch: "basheer", generation: 4, layout: xy(3, 1160) },
  { id: "halima-younes", name: "Halima Younes", branch: "partner", generation: 4 },

  { id: "hammad-amjad-khan", name: "Hammad Amjad Khan", branch: "basheer", generation: 4, layout: xy(3, 1300) },
  { id: "farjad-amjad-khan", name: "Farjad Amjad Khan", branch: "basheer", generation: 4, layout: xy(3, 1400) },
  { id: "saima-farjad", name: "Saima", branch: "partner", generation: 4, layout: partnerXy(3, 1400) },
  { id: "atika-amjad", name: "Atika Amjad", branch: "basheer", generation: 4, layout: xy(3, 1500) },
  { id: "arshia-amjad", name: "Arshia Amjad", branch: "basheer", generation: 4, layout: xy(3, 1600) },
  { id: "faisal-bhatti", name: "Faisal Bhatti", branch: "partner", generation: 4, layout: partnerXy(3, 1600) },
  { id: "samiha-amjad", name: "Samiha Amjad", branch: "basheer", generation: 4, layout: xy(3, 1700) },
  { id: "nauman-qureshi", name: "Nauman Qureshi", branch: "partner", generation: 4, layout: partnerXy(3, 1700) },

  { id: "shaila-khan", name: "Shaila Khan", branch: "basheer", generation: 4, layout: xy(3, 1820) },
  { id: "nudrat", name: "Nudrat", branch: "basheer", generation: 4, layout: xy(3, 1920) },
  { id: "yousef", name: "Yousef", branch: "partner", generation: 4 },
  { id: "imran-khalid", name: "Imran Khalid", branch: "basheer", generation: 4, layout: xy(3, 2020) },
  { id: "samina", name: "Samina", branch: "partner", generation: 4 },
  { id: "usman-khalid", name: "Usman Khalid", branch: "basheer", generation: 4, layout: xy(3, 2120) },
  { id: "sumiera", name: "Sumiera", branch: "partner", generation: 4 },
  { id: "nosheen-afza", name: "Nosheen Afza", branch: "basheer", generation: 4, layout: xy(3, 2220) },
  { id: "jamil", name: "Jamil", branch: "partner", generation: 4 },

  { id: "farina-azhar-khan", name: "Farina Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2340) },
  { id: "saad-azhar-khan", name: "Saad Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2440) },
  { id: "irum-fatima", name: "Irum Fatima", branch: "partner", generation: 4 },
  { id: "tehmina-azhar-khan", name: "Tehmina Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2540) },
  { id: "shahzad-hashmi", name: "Shahzad Hashmi", branch: "partner", generation: 4 },
  { id: "raziqa-azhar-khan", name: "Raziqa Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2640) },
  { id: "syed-saif-shah", name: "Syed Saif Shah", branch: "partner", generation: 4 },
  { id: "jawad-azhar-khan", name: "Jawad Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2740) },
  { id: "nazish-ijaz", name: "Nazish Ijaz", branch: "partner", generation: 4 },

  { id: "madiha-sohail", name: "Madiha Sohail", branch: "basheer", generation: 4, layout: xy(3, 2860) },
  { id: "fayaz", name: "Fayaz", branch: "partner", generation: 4 },
  { id: "fahad-sohail", name: "Fahad Sohail", branch: "basheer", generation: 4, layout: xy(3, 2960) },
  { id: "sumbal-sohail", name: "Sumbal Sohail", branch: "basheer", generation: 4, layout: xy(3, 3060) },
  { id: "inaam", name: "Inaam", branch: "partner", generation: 4 },
  { id: "zohaib-sohail", name: "Zohaib Sohail", branch: "basheer", generation: 4, layout: xy(3, 3160) },
  { id: "rubina", name: "Rubina", branch: "partner", generation: 4 },
  { id: "uzair-sohail", name: "Uzair Sohail", branch: "basheer", generation: 4, layout: xy(3, 3260) },
  { id: "afza-arif", name: "Afza Arif", branch: "partner", generation: 4 },

  { id: "abdul-aziz", name: "Abdul Aziz", branch: "basheer", generation: 5, layout: xy(4, 1140) },
  { id: "hafsa-vanees", name: "Hafsa Vanees", branch: "basheer", generation: 5, layout: xy(4, 1240) },
  { id: "abdul-mueez", name: "Abdul Mueez", branch: "partner", generation: 5 },
  { id: "affan", name: "Affan", branch: "basheer", generation: 5, layout: xy(4, 1340) },
  { id: "shahmir", name: "Shahmir", branch: "basheer", generation: 5, layout: xy(4, 1440) },

  { id: "mohammad-essa-farjad-khan", name: "Mohammad Essa Farjad Khan", branch: "basheer", generation: 5, layout: xy(4, 1540) },
  { id: "mohammad-zakariyya-farjad-khan", name: "Mohammad Zakariyya Farjad Khan", branch: "basheer", generation: 5, layout: xy(4, 1640) },

  { id: "aleeza-noor", name: "Aleeza Noor", branch: "basheer", generation: 5, layout: xy(4, 1760) },
  { id: "jazim-hammad-khan", name: "Jazim Hammad Khan", branch: "basheer", generation: 5, layout: xy(4, 1860), isFocus: true },
  { id: "basmah-athar", name: "Basmah Athar", branch: "partner", generation: 5, layout: partnerXy(4, 1860) },
  { id: "azlan-hammad", name: "Azlan Hammad", branch: "basheer", generation: 5, layout: xy(4, 1960) },

  { id: "imaan-bhatti", name: "Imaan Bhatti", branch: "basheer", generation: 5, layout: xy(4, 2080) },
  { id: "sameen-bhatti", name: "Sameen Bhatti", branch: "basheer", generation: 5, layout: xy(4, 2180) },
  { id: "aiza-bhatti", name: "Aiza Bhatti", branch: "basheer", generation: 5, layout: xy(4, 2280) },
  { id: "zayan-bhatti", name: "Zayan Bhatti", branch: "basheer", generation: 5, layout: xy(4, 2380) },
  { id: "azaan", name: "Azaan", branch: "basheer", generation: 5, layout: xy(4, 2500) },
  { id: "inaya", name: "Inaya", branch: "basheer", generation: 5, layout: xy(4, 2600) },
  { id: "hannan", name: "Hannan", branch: "basheer", generation: 5, layout: xy(4, 2700) },
];

const unions = [
  {
    id: "nathay-wazeer",
    partners: ["nathay-khan", "wazeer-begum"],
    children: ["mohammad-sharif-khan", "razia-sultana", "mohammad-basheer-khan", "zakiya-sultana", "naseer-khan"],
  },
  {
    id: "sharif-unknown",
    partners: ["mohammad-sharif-khan"],
    spouseLabel: "Spouse unknown",
    children: ["dr-arshad-khan", "mohammad-ashraf", "sadia", "asifa", "shakeela", "fouzia"],
  },
  { id: "dr-arshad-jahan", partners: ["dr-arshad-khan", "jahan-ara"], children: [] },
  { id: "ashraf-shamim", partners: ["mohammad-ashraf", "shamim"], children: [] },
  { id: "ashraf-naaz", partners: ["mohammad-ashraf", "naaz"], children: [] },
  {
    id: "razia-malik",
    partners: ["razia-sultana", "malik-taj-deen"],
    children: ["malik-salahuddin", "malik-ghayasuddin", "malik-ziauddin", "azra", "tahira", "shahida", "zahida", "qaisira"],
  },
  {
    id: "basheer-iqbal",
    partners: ["mohammad-basheer-khan", "iqbal-begum"],
    children: ["nasira-zia", "amjad-pervaiz-khan", "tehsin-afza", "azhar-iqbal-khan", "talat-jameel-sohail", "anjum"],
  },
  {
    id: "nasira-karim",
    partners: ["nasira-zia", "dr-abdul-karim"],
    children: ["dr-abdul-rehman", "saima-karim", "vanees-karim", "sadaf-nazli", "nasir-karim"],
  },
  { id: "abdul-rehman-shaila", partners: ["dr-abdul-rehman", "shaila-khan"], children: [], cross: true },
  { id: "saima-karim-khawar", partners: ["saima-karim", "khawar-aziz"], children: [] },
  { id: "vanees-atika", partners: ["vanees-karim", "atika-amjad"], children: ["abdul-aziz", "hafsa-vanees", "affan", "shahmir"], cross: true },
  { id: "sadaf-rehan", partners: ["sadaf-nazli", "rehan-ahmed"], children: [] },
  { id: "nasir-halima", partners: ["nasir-karim", "halima-younes"], children: [] },
  {
    id: "amjad-tahira",
    partners: ["amjad-pervaiz-khan", "tahira-ilyas"],
    children: ["hammad-amjad-khan", "farjad-amjad-khan", "atika-amjad", "arshia-amjad", "samiha-amjad"],
  },
  { id: "hammad-farina", partners: ["hammad-amjad-khan", "farina-azhar-khan"], children: ["aleeza-noor", "jazim-hammad-khan", "azlan-hammad"], cross: true },
  { id: "aleeza-abdul-aziz", partners: ["aleeza-noor", "abdul-aziz"], children: [], cross: true },
  { id: "jazim-basmah", partners: ["jazim-hammad-khan", "basmah-athar"], children: [] },
  { id: "farjad-saima", partners: ["farjad-amjad-khan", "saima-farjad"], children: ["mohammad-essa-farjad-khan", "mohammad-zakariyya-farjad-khan"] },
  { id: "hafsa-abdul-mueez", partners: ["hafsa-vanees", "abdul-mueez"], children: [] },
  { id: "arshia-faisal", partners: ["arshia-amjad", "faisal-bhatti"], children: ["imaan-bhatti", "sameen-bhatti", "aiza-bhatti", "zayan-bhatti"] },
  { id: "samiha-nauman", partners: ["samiha-amjad", "nauman-qureshi"], children: ["azaan", "inaya", "hannan"] },
  {
    id: "tehsin-khalid",
    partners: ["tehsin-afza", "mohammad-khalid"],
    children: ["shaila-khan", "nudrat", "imran-khalid", "usman-khalid", "nosheen-afza"],
  },
  { id: "nudrat-yousef", partners: ["nudrat", "yousef"], children: [] },
  { id: "imran-samina", partners: ["imran-khalid", "samina"], children: [] },
  { id: "usman-sumiera", partners: ["usman-khalid", "sumiera"], children: [] },
  { id: "nosheen-jamil", partners: ["nosheen-afza", "jamil"], children: [] },
  {
    id: "azhar-rashida",
    partners: ["azhar-iqbal-khan", "rashida-hameed"],
    children: ["farina-azhar-khan", "saad-azhar-khan", "tehmina-azhar-khan", "raziqa-azhar-khan", "jawad-azhar-khan"],
  },
  { id: "saad-irum", partners: ["saad-azhar-khan", "irum-fatima"], children: [] },
  { id: "tehmina-shahzad", partners: ["tehmina-azhar-khan", "shahzad-hashmi"], children: [] },
  { id: "raziqa-saif", partners: ["raziqa-azhar-khan", "syed-saif-shah"], children: [] },
  { id: "jawad-nazish", partners: ["jawad-azhar-khan", "nazish-ijaz"], children: [] },
  {
    id: "sohail-tayaba",
    partners: ["talat-jameel-sohail", "tayaba"],
    children: ["madiha-sohail", "fahad-sohail", "sumbal-sohail", "zohaib-sohail", "uzair-sohail"],
  },
  { id: "madiha-fayaz", partners: ["madiha-sohail", "fayaz"], children: [] },
  { id: "sumbal-inaam", partners: ["sumbal-sohail", "inaam"], children: [] },
  { id: "zohaib-rubina", partners: ["zohaib-sohail", "rubina"], children: [] },
  { id: "uzair-afza", partners: ["uzair-sohail", "afza-arif"], children: [] },
  {
    id: "zakiya-hakim",
    partners: ["zakiya-sultana", "hakim-ali"],
    children: [
      "m-abid-ali",
      "m-khalid-zakiya",
      "m-jafer",
      "fareeda",
      "naheed-akhter",
      "rukhsana-kausar",
      "fakhara-parveen",
      "ghazala-parveen",
      "raheela-tabassum",
      "m-tariq",
      "sami-ul-haq",
    ],
  },
  { id: "naseer-fehmeeda", partners: ["naseer-khan", "fehmeeda"], children: ["gulrez-khan", "nuzat-khan", "faisal-khan", "raheel-khan"] },
];

const people = new Map(peopleList.map((person) => [person.id, person]));
const linksEl = document.getElementById("links");
const nodesEl = document.getElementById("nodes");
const viewport = document.getElementById("viewport");
const world = document.getElementById("world");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const branchFilter = document.getElementById("branchFilter");
const detailPanel = document.getElementById("detailPanel");
const selectedPill = document.getElementById("selectedPill");
const menuToggle = document.getElementById("menuToggle");
const menuPanel = document.getElementById("menuPanel");

let waterCanvas;
let waterContext;
let waterFrame = 0;

const visiblePeople = peopleList.filter((person) => person.layout);
const state = {
  selectedId: null,
  filter: "all",
  zoom: 0.34,
  panX: 0,
  panY: 0,
};

const parentUnions = new Map();
const childUnions = new Map();
const partnerUnions = new Map();

for (const union of unions) {
  for (const childId of union.children) {
    const unionsForChild = childUnions.get(childId) || [];
    unionsForChild.push(union);
    childUnions.set(childId, unionsForChild);
  }

  for (const partnerId of union.partners) {
    const unionsForPartner = partnerUnions.get(partnerId) || [];
    unionsForPartner.push(union);
    partnerUnions.set(partnerId, unionsForPartner);
  }

  if (union.children.length) {
    for (const partnerId of union.partners) {
      const unionsForParent = parentUnions.get(partnerId) || [];
      unionsForParent.push(union);
      parentUnions.set(partnerId, unionsForParent);
    }
  }
}

const directFocusSet = new Set([
  ...getAncestors(FOCUS_ID),
  ...getParents(FOCUS_ID),
  ...getSiblings(FOCUS_ID),
  ...getSpouses(FOCUS_ID).filter((item) => item.id).map((item) => item.id),
  FOCUS_ID,
]);

const crossMarriageSet = new Set();
for (const union of unions.filter((item) => item.cross)) {
  for (const id of [...union.partners, ...union.children]) {
    crossMarriageSet.add(id);
  }
}

init();

function init() {
  linksEl.setAttribute("viewBox", `0 0 ${WORLD.width} ${WORLD.height}`);
  world.style.width = `${WORLD.width}px`;
  world.style.height = `${WORLD.height}px`;
  branchFilter.value = "all";

  renderStats();
  renderLineage();
  renderTree();
  hideDetails();
  bindEvents();
  startWaterCanvas();

  requestAnimationFrame(() => fitVisible());
}

function bindEvents() {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuPanel.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  document.getElementById("focusMeButton").addEventListener("click", () => {
    branchFilter.value = "all";
    state.filter = "all";
    selectPerson("nathay-khan", true);
  });

  document.getElementById("fitButton").addEventListener("click", () => {
    branchFilter.value = "all";
    state.filter = "all";
    state.selectedId = null;
    hideDetails();
    renderLineage();
    renderTree();
    fitVisible();
  });

  document.getElementById("directButton").addEventListener("click", () => {
    branchFilter.value = "direct";
    state.filter = "direct";
    renderTree();
    fitVisible();
  });

  document.getElementById("zoomOut").addEventListener("click", () => zoomBy(0.86));
  document.getElementById("zoomIn").addEventListener("click", () => zoomBy(1.16));
  document.getElementById("zoomReset").addEventListener("click", () => {
    state.zoom = 0.58;
    centerOn(state.selectedId || FOCUS_ID, state.zoom);
  });

  branchFilter.addEventListener("change", () => {
    state.filter = branchFilter.value;
    renderTree();
    if (state.filter === "all") {
      fitVisible();
    } else if (state.filter === "direct") {
      fitVisible();
    } else {
      fitVisible();
    }
  });

  searchInput.addEventListener("input", renderSearch);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.value = "";
      searchResults.classList.remove("is-open");
    }
  });

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let panX = 0;
  let panY = 0;

  viewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button, input, select")) return;
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    panX = state.panX;
    panY = state.panY;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    state.panX = panX + event.clientX - startX;
    state.panY = panY + event.clientY - startY;
    applyTransform();
  });

  viewport.addEventListener("pointerup", (event) => {
    dragging = false;
    viewport.classList.remove("is-dragging");
    viewport.releasePointerCapture(event.pointerId);
  });

  viewport.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const worldX = (event.clientX - rect.left - state.panX) / state.zoom;
      const worldY = (event.clientY - rect.top - state.panY) / state.zoom;
      const factor = event.deltaY < 0 ? 1.08 : 0.92;
      state.zoom = clamp(state.zoom * factor, 0.22, 1.35);
      state.panX = event.clientX - rect.left - worldX * state.zoom;
      state.panY = event.clientY - rect.top - worldY * state.zoom;
      applyTransform();
    },
    { passive: false },
  );

  window.addEventListener("resize", () => {
    applyTransform();
    resizeWaterCanvas();
  });
}

function renderTree() {
  renderLinks();
  renderNodes();
  updateSelectedPill();
}

function renderNodes() {
  const activeLineage = getActiveLineageSet();
  const html = visiblePeople
    .map((person) => {
      const hidden = !passesFilter(person.id);
      const spouses = getSpouses(person.id).map((item) => item.name || item.label).filter(Boolean);
      const classes = [
        "person-node",
        person.id === state.selectedId ? "is-selected" : "",
        activeLineage.has(person.id) ? "is-direct" : "",
        person.isFocus ? "is-focus" : "",
        hidden ? "is-hidden" : "",
        shouldMute(person.id) ? "is-muted" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button class="${classes}" type="button" data-id="${person.id}" style="left:${person.layout.x}px;top:${person.layout.y}px">
          <span class="node-name">${escapeHtml(person.name)}</span>
          <span class="node-branch">${escapeHtml(branchLabels[person.branch] || branchLabels.partner)}</span>
          ${person.born ? `<span class="node-birth">Born ${escapeHtml(person.born)}</span>` : ""}
          ${spouses.length ? `<span class="node-spouses">${escapeHtml(spouses.join(", "))}</span>` : ""}
        </button>
      `;
    })
    .join("");

  nodesEl.innerHTML = html;
  nodesEl.querySelectorAll(".person-node").forEach((node) => {
    node.addEventListener("click", () => selectPerson(node.dataset.id, true));
  });
}

function renderLinks() {
  const activeLineage = getActiveLineageSet();
  const paths = [];
  for (const union of unions) {
    const visiblePartners = union.partners.filter((id) => people.get(id)?.layout && passesFilter(id));
    const cross = union.cross ? " cross" : "";
    const direct = union.partners.some((id) => activeLineage.has(id)) ? " direct" : "";

    if (visiblePartners.length >= 2) {
      const [first, second] = visiblePartners;
      paths.push(pathElement(spousePath(centerOf(first), centerOf(second)), `link marriage${cross}${direct}`));
    }

    if (!union.children.length || !visiblePartners.length) continue;

    const start = unionCenter(visiblePartners);
    for (const childId of union.children) {
      const child = people.get(childId);
      if (!child?.layout || !passesFilter(childId)) continue;
      const childCenter = centerOf(childId);
      const isDirect = activeLineage.has(childId) && union.partners.some((id) => activeLineage.has(id));
      paths.push(pathElement(parentPath(start, childCenter), `link parent${isDirect ? " direct" : ""}`));
    }
  }

  linksEl.innerHTML = paths.join("");
}

function pathElement(d, className) {
  return `<path class="${className}" d="${d}"></path>`;
}

function parentPath(start, end) {
  const distance = Math.max(90, Math.abs(end.x - start.x));
  const c1x = start.x + distance * 0.44;
  const c2x = end.x - distance * 0.42;
  const wave = Math.min(90, Math.abs(end.y - start.y) * 0.16);
  return `M ${start.x} ${start.y} C ${c1x} ${start.y + wave}, ${c2x} ${end.y - wave}, ${end.x} ${end.y}`;
}

function spousePath(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const bend = Math.max(70, Math.abs(dx) * 0.36);
  return `M ${start.x} ${start.y} C ${start.x + bend} ${start.y + dy * 0.12}, ${end.x - bend} ${end.y - dy * 0.12}, ${end.x} ${end.y}`;
}

function centerOf(id) {
  const person = people.get(id);
  return {
    x: person.layout.x + NODE.width / 2,
    y: person.layout.y + NODE.height / 2,
  };
}

function unionCenter(partnerIds) {
  const points = partnerIds.map(centerOf);
  return {
    x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
    y: points.reduce((sum, point) => sum + point.y, 0) / points.length,
  };
}

function renderDetails(id) {
  const person = people.get(id);
  if (!person) {
    hideDetails();
    return;
  }

  const parents = getParents(id);
  const spouses = getSpouses(id);
  const children = getChildren(id);
  const siblings = getSiblings(id).filter((siblingId) => siblingId !== id);
  const relation = relationToFocus(id);
  const initials = person.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  detailPanel.innerHTML = `
    <div class="detail-card">
      <div class="detail-head">
        <div>
          <p class="detail-kicker">${escapeHtml(relation)}</p>
          <h2>${escapeHtml(person.name)}</h2>
          <p class="detail-subtle">${escapeHtml(branchLabels[person.branch] || branchLabels.partner)}</p>
        </div>
        <button class="detail-close" type="button" title="Close details" aria-label="Close details">x</button>
      </div>
      <div class="photo-slot" aria-label="Photo placeholder">${escapeHtml(initials)}</div>
      <div class="detail-grid">
        ${detailTextRow("Born", person.born || "Not added yet")}
        ${detailButtonsRow("Parents", parents)}
        ${detailSpouseRow(spouses)}
        ${detailButtonsRow("Children", children)}
        ${detailButtonsRow("Siblings", siblings)}
      </div>
    </div>
  `;
  detailPanel.classList.add("is-open");

  detailPanel.querySelectorAll("[data-select-id]").forEach((button) => {
    button.addEventListener("click", () => selectPerson(button.dataset.selectId, true));
  });

  detailPanel.querySelector(".detail-close").addEventListener("click", () => {
    state.selectedId = null;
    hideDetails();
    renderLineage();
    renderTree();
    updateSelectedPill();
    fitVisible();
  });
}

function hideDetails() {
  detailPanel.classList.remove("is-open");
  detailPanel.innerHTML = "";
}

function detailTextRow(label, value) {
  return `
    <div class="detail-row">
      <strong>${escapeHtml(label)}</strong>
      <span class="detail-subtle">${escapeHtml(value)}</span>
    </div>
  `;
}

function detailButtonsRow(label, ids) {
  const knownIds = ids.filter((id) => people.has(id));
  const body = knownIds.length
    ? `<div class="detail-list">${knownIds.map((id) => personButton(id)).join("")}</div>`
    : `<span class="empty-list">Not listed</span>`;

  return `
    <div class="detail-row">
      <strong>${escapeHtml(label)}</strong>
      ${body}
    </div>
  `;
}

function detailSpouseRow(spouses) {
  const body = spouses.length
    ? `<div class="detail-list">${spouses
        .map((item) => (item.id ? personButton(item.id) : `<span class="empty-list">${escapeHtml(item.label)}</span>`))
        .join("")}</div>`
    : `<span class="empty-list">Not listed</span>`;

  return `
    <div class="detail-row">
      <strong>Spouses</strong>
      ${body}
    </div>
  `;
}

function personButton(id) {
  const person = people.get(id);
  return `<button class="name-button" type="button" data-select-id="${id}">${escapeHtml(person.name)}</button>`;
}

function renderStats() {
  document.getElementById("personCount").textContent = peopleList.length;
  document.getElementById("unionCount").textContent = unions.length;
  document.getElementById("generationCount").textContent = Math.max(...peopleList.map((person) => person.generation));
}

function renderLineage() {
  const lineageTitle = document.getElementById("lineageTitle");
  const lineage = getLineageListFor(state.selectedId);
  lineageTitle.textContent = state.selectedId ? "Selected Line" : "Main Line";

  document.getElementById("lineageList").innerHTML = lineage
    .map((id) => {
      const person = people.get(id);
      if (!person) return "";
      return `
        <div class="lineage-item">
          <span class="lineage-dot" aria-hidden="true"></span>
          <button type="button" data-select-id="${id}">${escapeHtml(person.name)}</button>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".lineage-item button").forEach((button) => {
    button.addEventListener("click", () => selectPerson(button.dataset.selectId, true));
  });
}

function getLineageListFor(id) {
  if (!id) {
    return [
      "nathay-khan",
      "wazeer-begum",
      "mohammad-basheer-khan",
      "iqbal-begum",
      "amjad-pervaiz-khan",
      "tahira-ilyas",
      "hammad-amjad-khan",
      "farina-azhar-khan",
      "jazim-hammad-khan",
    ];
  }

  const ids = [
    ...getAncestors(id),
    ...getParents(id),
    id,
    ...getSpouses(id).filter((item) => item.id).map((item) => item.id),
    ...getChildren(id),
  ];

  return unique(ids)
    .filter((personId) => people.has(personId))
    .sort((a, b) => {
      const first = people.get(a);
      const second = people.get(b);
      return first.generation - second.generation || (first.layout?.y || 0) - (second.layout?.y || 0);
    });
}

function renderSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchResults.classList.remove("is-open");
    searchResults.innerHTML = "";
    return;
  }

  const matches = peopleList
    .map((person) => {
      const name = person.name.toLowerCase();
      const spouseNames = getSpouses(person.id)
        .map((item) => item.name || item.label)
        .join(" ");
      const branch = (branchLabels[person.branch] || "").toLowerCase();
      const spouseText = spouseNames.toLowerCase();
      let score = null;

      if (name.startsWith(query)) score = 0;
      else if (name.includes(query)) score = 1;
      else if (spouseText.includes(query)) score = 2;
      else if (branch.includes(query)) score = 3;

      return { person, score };
    })
    .filter((item) => item.score !== null)
    .sort((a, b) => a.score - b.score || a.person.name.localeCompare(b.person.name))
    .map((item) => item.person)
    .slice(0, 8);

  searchResults.innerHTML = matches
    .map((person) => {
      return `
        <button class="search-result" type="button" data-id="${person.id}">
          ${escapeHtml(person.name)}
          <small>${escapeHtml(branchLabels[person.branch] || branchLabels.partner)}</small>
        </button>
      `;
    })
    .join("");

  searchResults.classList.toggle("is-open", matches.length > 0);
  searchResults.querySelectorAll(".search-result").forEach((button) => {
    button.addEventListener("click", () => {
      searchInput.value = "";
      searchResults.classList.remove("is-open");
      menuPanel.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      selectPerson(button.dataset.id, true);
    });
  });
}

function selectPerson(id, shouldCenterNode) {
  const anchorId = nearestAnyAnchor(id);
  if (shouldCenterNode && anchorId && !passesFilter(anchorId)) {
    state.filter = "all";
    branchFilter.value = "all";
  }

  state.selectedId = id;
  renderLineage();
  renderTree();
  renderDetails(id);
  updateSelectedPill();

  if (shouldCenterNode) {
    centerOn(nearestVisibleAnchor(id), Math.max(state.zoom, 0.55));
  }
}

function updateSelectedPill() {
  const person = people.get(state.selectedId);
  selectedPill.textContent = person ? person.name : "Full family";
}

function passesFilter(id) {
  const person = people.get(id);
  if (!person?.layout) return false;

  if (state.filter === "all") return true;
  if (state.filter === "direct") return getActiveLineageSet().has(id);
  if (state.filter === "connected") return crossMarriageSet.has(id);

  if (person.branch === state.filter) return true;
  return isPartnerOfBranch(id, state.filter);
}

function shouldMute(id) {
  if (state.filter !== "all") return false;
  if (!state.selectedId || id === state.selectedId) return false;

  return !getActiveLineageSet().has(id);
}

function getActiveLineageSet() {
  if (state.selectedId) return getSelectedLineageSet(state.selectedId);
  if (state.filter === "direct") return new Set(directFocusSet);
  return new Set();
}

function getSelectedLineageSet(id) {
  return new Set([
    ...getAncestors(id),
    id,
    ...getSpouses(id).filter((item) => item.id).map((item) => item.id),
    ...getChildren(id),
  ]);
}

function isPartnerOfBranch(id, branch) {
  const unionsForPartner = partnerUnions.get(id) || [];
  return unionsForPartner.some((union) => union.partners.some((partnerId) => people.get(partnerId)?.branch === branch));
}

function getParents(id) {
  const unionsForChild = childUnions.get(id) || [];
  const parents = [];
  for (const union of unionsForChild) {
    parents.push(...union.partners);
  }
  return unique(parents);
}

function getChildren(id) {
  const unionsForParent = parentUnions.get(id) || [];
  return unique(unionsForParent.flatMap((union) => union.children));
}

function getSpouses(id) {
  const unionsForPartner = partnerUnions.get(id) || [];
  const spouses = [];
  for (const union of unionsForPartner) {
    const partnerIds = union.partners.filter((partnerId) => partnerId !== id);
    for (const partnerId of partnerIds) {
      const person = people.get(partnerId);
      if (person) spouses.push({ id: partnerId, name: person.name });
    }

    if (!partnerIds.length && union.spouseLabel) {
      spouses.push({ label: union.spouseLabel });
    }
  }
  return spouses;
}

function getSiblings(id) {
  const parents = getParents(id);
  const siblings = new Set();
  for (const parentId of parents) {
    for (const childId of getChildren(parentId)) {
      if (childId !== id) siblings.add(childId);
    }
  }
  return [...siblings];
}

function getAncestors(id, visited = new Set()) {
  const parents = getParents(id);
  for (const parentId of parents) {
    if (visited.has(parentId)) continue;
    visited.add(parentId);
    getAncestors(parentId, visited);
  }
  return [...visited];
}

function nearestVisibleAnchor(id) {
  if (people.get(id)?.layout && passesFilter(id)) return id;

  const candidates = [
    ...getSpouses(id).filter((item) => item.id).map((item) => item.id),
    ...getParents(id),
    ...getChildren(id),
    FOCUS_ID,
  ];

  return candidates.find((candidateId) => people.get(candidateId)?.layout && passesFilter(candidateId)) || FOCUS_ID;
}

function nearestAnyAnchor(id) {
  if (people.get(id)?.layout) return id;

  const candidates = [
    ...getSpouses(id).filter((item) => item.id).map((item) => item.id),
    ...getParents(id),
    ...getChildren(id),
    FOCUS_ID,
  ];

  return candidates.find((candidateId) => people.get(candidateId)?.layout) || FOCUS_ID;
}

function relationToFocus(id) {
  if (id === state.selectedId) return "Selected person";
  if (state.selectedId && getSpouses(state.selectedId).some((item) => item.id === id)) return "Spouse";
  if (state.selectedId && getParents(state.selectedId).includes(id)) return "Parent";
  if (state.selectedId && getChildren(state.selectedId).includes(id)) return "Child";
  if (state.selectedId && getAncestors(state.selectedId).includes(id)) return "Ancestor";
  if (crossMarriageSet.has(id)) return "Cross-branch connection";
  return branchLabels[people.get(id)?.branch] || "Family record";
}

function unique(items) {
  return [...new Set(items)];
}

function centerOn(id, zoom = state.zoom) {
  const person = people.get(id);
  if (!person?.layout) return;

  state.zoom = clamp(zoom, 0.22, 1.35);
  const rect = viewport.getBoundingClientRect();
  state.panX = rect.width / 2 - (person.layout.x + NODE.width / 2) * state.zoom;
  state.panY = rect.height / 2 - (person.layout.y + NODE.height / 2) * state.zoom;
  applyTransform();
}

function fitVisible() {
  const active = visiblePeople.filter((person) => passesFilter(person.id));
  if (!active.length) return;

  const bounds = active.reduce(
    (box, person) => {
      box.minX = Math.min(box.minX, person.layout.x);
      box.minY = Math.min(box.minY, person.layout.y);
      box.maxX = Math.max(box.maxX, person.layout.x + NODE.width);
      box.maxY = Math.max(box.maxY, person.layout.y + NODE.height);
      return box;
    },
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
  );

  const rect = viewport.getBoundingClientRect();
  const padding = 120;
  const zoomX = rect.width / (bounds.maxX - bounds.minX + padding * 2);
  const zoomY = rect.height / (bounds.maxY - bounds.minY + padding * 2);
  state.zoom = clamp(Math.min(zoomX, zoomY), 0.22, 0.72);
  state.panX = rect.width / 2 - ((bounds.minX + bounds.maxX) / 2) * state.zoom;
  state.panY = rect.height / 2 - ((bounds.minY + bounds.maxY) / 2) * state.zoom;
  applyTransform();
}

function zoomBy(factor) {
  const rect = viewport.getBoundingClientRect();
  const pivotX = rect.width / 2;
  const pivotY = rect.height / 2;
  const worldX = (pivotX - state.panX) / state.zoom;
  const worldY = (pivotY - state.panY) / state.zoom;

  state.zoom = clamp(state.zoom * factor, 0.22, 1.35);
  state.panX = pivotX - worldX * state.zoom;
  state.panY = pivotY - worldY * state.zoom;
  applyTransform();
}

function applyTransform() {
  world.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function startWaterCanvas() {
  waterCanvas = document.getElementById("waterCanvas");
  waterContext = waterCanvas.getContext("2d");
  resizeWaterCanvas();
  requestAnimationFrame(drawWater);
}

function resizeWaterCanvas() {
  if (!waterCanvas) return;
  const ratio = window.devicePixelRatio || 1;
  waterCanvas.width = Math.floor(window.innerWidth * ratio);
  waterCanvas.height = Math.floor(window.innerHeight * ratio);
  waterCanvas.style.width = `${window.innerWidth}px`;
  waterCanvas.style.height = `${window.innerHeight}px`;
  waterContext?.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawWater() {
  if (!waterContext) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  waterFrame += 0.006;

  const base = waterContext.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, "rgba(11, 10, 8, 0.94)");
  base.addColorStop(0.48, "rgba(18, 15, 12, 0.88)");
  base.addColorStop(1, "rgba(7, 6, 4, 0.94)");
  waterContext.fillStyle = base;
  waterContext.fillRect(0, 0, width, height);

  const bands = [
    { y: 0.14, amp: 28, alpha: 0.08, color: "244,236,220", speed: 0.7 },
    { y: 0.3, amp: 42, alpha: 0.1, color: "106,219,207", speed: 0.9 },
    { y: 0.5, amp: 36, alpha: 0.08, color: "197,139,94", speed: 1.1 },
    { y: 0.68, amp: 54, alpha: 0.08, color: "207,123,157", speed: 0.6 },
    { y: 0.84, amp: 30, alpha: 0.08, color: "244,236,220", speed: 1.25 },
  ];

  for (const band of bands) {
    drawBand(width, height, band);
  }

  requestAnimationFrame(drawWater);
}

function drawBand(width, height, band) {
  const baseY = height * band.y;
  waterContext.beginPath();
  waterContext.moveTo(0, baseY);

  for (let x = 0; x <= width + 24; x += 24) {
    const y =
      baseY +
      Math.sin(x * 0.006 + waterFrame * 90 * band.speed) * band.amp +
      Math.cos(x * 0.013 - waterFrame * 70 * band.speed) * (band.amp * 0.36);
    waterContext.lineTo(x, y);
  }

  waterContext.lineTo(width, height);
  waterContext.lineTo(0, height);
  waterContext.closePath();
  waterContext.fillStyle = `rgba(${band.color}, ${band.alpha})`;
  waterContext.fill();
}
