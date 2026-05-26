const NODE = { width: 200, height: 74 };
const WORLD = { width: 9100, height: 2560 };
const ROW = [130, 570, 1010, 1450, 1890, 2330];
const LAYOUT = { sideMargin: 180, slotGap: 34 };
const COMPACT_LAYOUT = { sideMargin: 180, top: 130, rowGap: 620, slotGap: 34, bottom: 180 };
const MIN_ZOOM = 0.08;
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

const familyLineById = {
  "nathay-khan": "Khan family",
  "wazeer-begum": "Khan family",
  "mohammad-sharif-khan": "Khan family",
  "razia-sultana": "Khan family",
  "mohammad-basheer-khan": "Khan family",
  "iqbal-begum": "Khan family",
  "zakiya-sultana": "Khan family",
  "naseer-khan": "Khan family",
  "dr-arshad-khan": "Khan family",
  "mohammad-ashraf": "Khan family",
  "sadia": "Khan family",
  "asifa": "Khan family",
  "shakeela": "Khan family",
  "fouzia": "Khan family",
  "amjad-pervaiz-khan": "Khan family",
  "tahira-ilyas": "Khan family",
  "nasira-zia": "Khan family",
  "tehsin-afza": "Khan family",
  "anjum": "Khan family",
  "hammad-amjad-khan": "Khan family",
  "farjad-amjad-khan": "Khan family",
  "atika-amjad": "Khan family",
  "arshia-amjad": "Khan family",
  "samiha-amjad": "Khan family",
  "azhar-iqbal-khan": "Khan family",
  "rashida-hameed": "Khan family",
  "farina-azhar-khan": "Khan family",
  "saad-azhar-khan": "Khan family",
  "tehmina-azhar-khan": "Khan family",
  "raziqa-azhar-khan": "Khan family",
  "jawad-azhar-khan": "Khan family",
  "aleeza-noor": "Khan family",
  "jazim-hammad-khan": "Khan family",
  "azlan-hammad": "Khan family",
  "mohammad-essa-farjad-khan": "Khan family",
  "mohammad-zakariyya-farjad-khan": "Khan family",
  "gulrez-khan": "Khan family",
  "nuzat-khan": "Khan family",
  "faisal-khan": "Khan family",
  "raheel-khan": "Khan family",

  "malik-taj-deen": "Malik family",
  "malik-salahuddin": "Malik family",
  "malik-ghayasuddin": "Malik family",
  "malik-ziauddin": "Malik family",
  "azra": "Malik family",
  "tahira": "Malik family",
  "shahida": "Malik family",
  "zahida": "Malik family",
  "qaisira": "Malik family",

  "hakim-ali": "Ali family",
  "m-abid-ali": "Ali family",
  "m-jafer": "Ali family",
  "fareeda": "Ali family",
  "naheed-akhter": "Ali family",
  "rukhsana-kausar": "Ali family",
  "fakhara-parveen": "Ali family",
  "ghazala-parveen": "Ali family",
  "raheela-tabassum": "Ali family",
  "m-tariq": "Ali family",
  "sami-ul-haq": "Ali family",

  "dr-abdul-karim": "Qazi family",
  "dr-abdul-rehman": "Qazi family",
  "saima-karim": "Qazi family",
  "vanees-karim": "Qazi family",
  "sadaf-nazli": "Qazi family",
  "nasir-karim": "Qazi family",
  "abdul-aziz": "Qazi family",
  "hafsa-vanees": "Qazi family",
  "affan": "Qazi family",
  "shahmir": "Qazi family",

  "mohammad-khalid": "Khalid family",
  "shaila-khan": "Khalid family",
  "nudrat": "Khalid family",
  "imran-khalid": "Khalid family",
  "usman-khalid": "Khalid family",
  "nosheen-afza": "Khalid family",

  "faisal-bhatti": "Bhatti family",
  "imaan-bhatti": "Bhatti family",
  "sameen-bhatti": "Bhatti family",
  "aiza-bhatti": "Bhatti family",
  "zayan-bhatti": "Bhatti family",

  "nauman-qureshi": "Qureshi family",
  "azaan": "Qureshi family",
  "inaya": "Qureshi family",
  "hannan": "Qureshi family",

  "talat-jameel-sohail": "Khan family",
  "tayaba": "Khan family",
  "madiha-sohail": "Khan family",
  "fahad-sohail": "Khan family",
  "sumbal-sohail": "Khan family",
  "zohaib-sohail": "Khan family",
  "uzair-sohail": "Khan family",
  "momin-khan": "Khan family",
  "zarwa-khan": "Khan family",
  "ashar-khan": "Khan family",
  "hamdan-khan": "Khan family",

  "basmah-athar": "Athar family",
  "khawar-aziz": "Aziz family",
  "rehan-ahmed": "Ahmed family",
  "halima-younes": "Younes family",
  "abdul-mueez": "Mueez family",
  "irum-fatima": "Fatima family",
  "shahzad-hashmi": "Hashmi family",
  "fatima-hashmi": "Hashmi family",
  "amjad-bilal-hashmi": "Hashmi family",
  "nafeesa-hashmi": "Hashmi family",
  "ghulam-fatima-hashmi": "Hashmi family",
  "syed-said-shah": "Shah family",
  "mohammad-saim": "Shah family",
  "mohammad-abdul-rehman-shah": "Shah family",
  "nazish-ijaz": "Ijaz family",
  "aavaiz-noor": "Khan family",
  "rijja-noor": "Khan family",
  "ayesha-noor-jawad": "Khan family",
  "maria-noor": "Khan family",
  "romaisa": "Khan family",
  "zoha": "Khan family",
  "fayaz": "Fayaz family",
  "subhan-madiha": "Fayaz family",
  "fatima-madiha": "Fayaz family",
  "inaam": "Inaam family",
  "khadija-sumbal": "Inaam family",
  "anabiya-afraima": "Inaam family",
};

const layoutOverrides = {
  "hammad-amjad-khan": { seedOrder: 1830 },
  "farina-azhar-khan": { seedOrder: 1831, partnerLane: 1 },
  "aleeza-noor": { seedOrder: 1680 },
  "jazim-hammad-khan": { seedOrder: 1681 },
  "basmah-athar": { seedOrder: 1682, partnerLane: 1 },
  "azlan-hammad": { seedOrder: 1683 },
  "samiha-amjad": { seedOrder: 2200 },
  "nauman-qureshi": { seedOrder: 2201, partnerLane: 1 },
  "azaan": { seedOrder: 2600 },
  "inaya": { seedOrder: 2601 },
  "hannan": { seedOrder: 2602 },
};

const xy = (generation, order) => ({ seedGeneration: generation, seedOrder: order, partnerLane: 0 });
const partnerXy = (generation, order) => ({ seedGeneration: generation, seedOrder: order, partnerLane: 1 });

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
  { id: "jahan-ara", name: "Jahan Ara", branch: "partner", generation: 3, layout: partnerXy(2, 120) },
  { id: "mohammad-ashraf", name: "Mohammad Ashraf", branch: "sharif", generation: 3, layout: xy(2, 230) },
  { id: "shamim", name: "Shamim", branch: "partner", generation: 3, layout: partnerXy(2, 230) },
  { id: "naaz", name: "Naaz", branch: "partner", generation: 3, layout: { ...partnerXy(2, 230), partnerLane: 2 } },
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
  { id: "azhar-iqbal-khan", name: "Azhar Iqbal Khan", branch: "basheer", generation: 3, layout: xy(2, 2200) },
  { id: "rashida-hameed", name: "Rashida Hameed", branch: "partner", generation: 3, layout: partnerXy(2, 2200) },
  { id: "talat-jameel-sohail", name: "Talat Jameel (Sohail)", branch: "basheer", generation: 3, layout: xy(2, 2630) },
  { id: "tayaba", name: "Tayaba", branch: "partner", generation: 3, layout: partnerXy(2, 2630) },
  { id: "anjum", name: "Anjum", branch: "basheer", generation: 3, layout: xy(2, 2910) },

  { id: "m-abid-ali", name: "M. Abid Ali", branch: "zakiya", generation: 3, layout: xy(2, 2300) },
  { id: "mohammad-khalid", name: "Mohammad Khalid", branch: "zakiya", generation: 3, layout: xy(2, 2385) },
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
  { id: "khawar-aziz", name: "Khawar Aziz", branch: "partner", generation: 4, layout: partnerXy(3, 860) },
  { id: "vanees-karim", name: "Vanees Karim", branch: "basheer", generation: 4, layout: xy(3, 960) },
  { id: "sadaf-nazli", name: "Sadaf Nazli", branch: "basheer", generation: 4, layout: xy(3, 1060) },
  { id: "rehan-ahmed", name: "Rehan Ahmed", branch: "partner", generation: 4, layout: partnerXy(3, 1060) },
  { id: "nasir-karim", name: "Nasir Karim", branch: "basheer", generation: 4, layout: xy(3, 1160) },
  { id: "halima-younes", name: "Halima Younes", branch: "partner", generation: 4, layout: partnerXy(3, 1160) },

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
  { id: "yousef", name: "Yousef", branch: "partner", generation: 4, layout: partnerXy(3, 1920) },
  { id: "imran-khalid", name: "Imran Khalid", branch: "basheer", generation: 4, layout: xy(3, 2020) },
  { id: "samina", name: "Samina", branch: "partner", generation: 4, layout: partnerXy(3, 2020) },
  { id: "usman-khalid", name: "Usman Khalid", branch: "basheer", generation: 4, layout: xy(3, 2120) },
  { id: "sumiera", name: "Sumiera", branch: "partner", generation: 4, layout: partnerXy(3, 2120) },
  { id: "nosheen-afza", name: "Nosheen Afza", branch: "basheer", generation: 4, layout: xy(3, 2220) },
  { id: "jamil", name: "Jamil", branch: "partner", generation: 4, layout: partnerXy(3, 2220) },

  { id: "farina-azhar-khan", name: "Farina Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2340) },
  { id: "saad-azhar-khan", name: "Saad Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2440) },
  { id: "irum-fatima", name: "Irum Fatima", branch: "partner", generation: 4, layout: partnerXy(3, 2440) },
  { id: "tehmina-azhar-khan", name: "Tehmina Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2540) },
  { id: "shahzad-hashmi", name: "Shahzad Hashmi", branch: "partner", generation: 4, layout: partnerXy(3, 2540) },
  { id: "raziqa-azhar-khan", name: "Raziqa Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2640) },
  { id: "syed-said-shah", name: "Syed Said Shah", branch: "partner", generation: 4, layout: partnerXy(3, 2640) },
  { id: "jawad-azhar-khan", name: "Jawad Azhar Khan", branch: "basheer", generation: 4, layout: xy(3, 2740) },
  { id: "nazish-ijaz", name: "Nazish Ijaz", branch: "partner", generation: 4, layout: partnerXy(3, 2740) },

  { id: "madiha-sohail", name: "Madiha Sohail Khan", branch: "basheer", generation: 4, layout: xy(3, 2860) },
  { id: "fayaz", name: "Fayaz", branch: "partner", generation: 4, layout: partnerXy(3, 2860) },
  { id: "fahad-sohail", name: "Fahad Sohail", branch: "basheer", generation: 4, layout: xy(3, 2960) },
  { id: "sumbal-sohail", name: "Sumbal Sohail Khan", branch: "basheer", generation: 4, layout: xy(3, 3060) },
  { id: "inaam", name: "Inaam", branch: "partner", generation: 4, layout: partnerXy(3, 3060) },
  { id: "zohaib-sohail", name: "Zohaib Sohail Khan", branch: "basheer", generation: 4, layout: xy(3, 3160) },
  { id: "rubina", name: "Rubina", branch: "partner", generation: 4, layout: partnerXy(3, 3160) },
  { id: "uzair-sohail", name: "Uzair Sohail Khan", branch: "basheer", generation: 4, layout: xy(3, 3260) },
  { id: "afza-arif", name: "Afza Arif", branch: "partner", generation: 4, layout: partnerXy(3, 3260) },

  { id: "abdul-aziz", name: "Abdul Aziz", branch: "basheer", generation: 5, layout: xy(4, 1140) },
  { id: "hafsa-vanees", name: "Hafsa Vanees", branch: "basheer", generation: 5, layout: xy(4, 1240) },
  { id: "abdul-mueez", name: "Abdul Mueez", branch: "partner", generation: 5, layout: partnerXy(4, 1240) },
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

  { id: "aavaiz-noor", name: "Aavaiz Noor", branch: "basheer", generation: 5, layout: xy(4, 2820) },
  { id: "rijja-noor", name: "Rijja Noor", branch: "basheer", generation: 5, layout: xy(4, 2920) },
  { id: "fatima-hashmi", name: "Fatima Hashmi", branch: "basheer", generation: 5, layout: xy(4, 3040) },
  { id: "amjad-bilal-hashmi", name: "Amjad Bilal Hashmi", branch: "basheer", generation: 5, layout: xy(4, 3140) },
  { id: "nafeesa-hashmi", name: "Nafeesa Hashmi", branch: "basheer", generation: 5, layout: xy(4, 3240) },
  { id: "ghulam-fatima-hashmi", name: "Ghulam Fatima Hashmi", branch: "basheer", generation: 5, layout: xy(4, 3340) },
  { id: "mohammad-saim", name: "Mohammad Saim", branch: "basheer", generation: 5, layout: xy(4, 3480) },
  { id: "mohammad-abdul-rehman-shah", name: "Mohammad Abdul Rehman", branch: "basheer", generation: 5, layout: xy(4, 3580) },
  { id: "ayesha-noor-jawad", name: "Ayesha Noor", branch: "basheer", generation: 5, layout: xy(4, 3720) },
  { id: "maria-noor", name: "Maria Noor", branch: "basheer", generation: 5, layout: xy(4, 3820) },
  { id: "romaisa", name: "Romaisa", branch: "basheer", generation: 5, layout: xy(4, 3920) },
  { id: "zoha", name: "Zoha", branch: "basheer", generation: 5, layout: xy(4, 4020) },
  { id: "subhan-madiha", name: "Subhan", branch: "basheer", generation: 5, layout: xy(4, 4160) },
  { id: "fatima-madiha", name: "Fatima", branch: "basheer", generation: 5, layout: xy(4, 4260) },
  { id: "khadija-sumbal", name: "Khadija", branch: "basheer", generation: 5, layout: xy(4, 4400) },
  { id: "anabiya-afraima", name: "Anabiya Afraima", branch: "basheer", generation: 5, layout: xy(4, 4500) },
  { id: "momin-khan", name: "Momin Khan", branch: "basheer", generation: 5, layout: xy(4, 4640) },
  { id: "zarwa-khan", name: "Zarwa Khan", branch: "basheer", generation: 5, layout: xy(4, 4780) },
  { id: "ashar-khan", name: "Ashar Khan", branch: "basheer", generation: 5, layout: xy(4, 4880) },
  { id: "hamdan-khan", name: "Hamdan Khan", branch: "basheer", generation: 5, layout: xy(4, 4980) },
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
    cross: true,
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
  { id: "saad-irum", partners: ["saad-azhar-khan", "irum-fatima"], children: ["aavaiz-noor", "rijja-noor"] },
  { id: "tehmina-shahzad", partners: ["tehmina-azhar-khan", "shahzad-hashmi"], children: ["fatima-hashmi", "amjad-bilal-hashmi", "nafeesa-hashmi", "ghulam-fatima-hashmi"] },
  { id: "raziqa-said", partners: ["raziqa-azhar-khan", "syed-said-shah"], children: ["mohammad-saim", "mohammad-abdul-rehman-shah"] },
  { id: "jawad-nazish", partners: ["jawad-azhar-khan", "nazish-ijaz"], children: ["ayesha-noor-jawad", "maria-noor", "romaisa", "zoha"] },
  {
    id: "sohail-tayaba",
    partners: ["talat-jameel-sohail", "tayaba"],
    children: ["madiha-sohail", "fahad-sohail", "sumbal-sohail", "zohaib-sohail", "uzair-sohail"],
  },
  { id: "madiha-fayaz", partners: ["madiha-sohail", "fayaz"], children: ["subhan-madiha", "fatima-madiha"] },
  { id: "sumbal-inaam", partners: ["sumbal-sohail", "inaam"], children: ["khadija-sumbal", "anabiya-afraima"] },
  { id: "zohaib-rubina", partners: ["zohaib-sohail", "rubina"], children: ["momin-khan"] },
  { id: "uzair-afza", partners: ["uzair-sohail", "afza-arif"], children: ["zarwa-khan", "ashar-khan", "hamdan-khan"] },
  {
    id: "zakiya-hakim",
    partners: ["zakiya-sultana", "hakim-ali"],
    children: [
      "m-abid-ali",
      "mohammad-khalid",
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

applyTopDownLayout(peopleList);

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

const visiblePeople = peopleList.filter((person) => person.layout);
const state = {
  selectedId: null,
  filter: "all",
  zoom: 0.34,
  panX: 0,
  panY: 0,
};
let blockNodeClickUntil = 0;
let renderLayouts = new Map();

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
  branchFilter.value = state.filter;

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
    state.selectedId = null;
    hideDetails();
    renderLineage();
    renderTree();
    fitVisible();
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

  const activePointers = new Map();
  let gesture = null;
  let tapCandidateId = null;
  let movedDuringGesture = false;

  viewport.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    if (!activePointers.size) {
      tapCandidateId = event.target.closest(".person-node")?.dataset.id || null;
      movedDuringGesture = false;
    } else {
      tapCandidateId = null;
      movedDuringGesture = true;
    }

    activePointers.set(event.pointerId, pointFromEvent(event));
    viewport.classList.add("is-dragging");
    try {
      viewport.setPointerCapture(event.pointerId);
    } catch {
      // Synthetic tests and some interrupted touch gestures may not allow capture.
    }
    startGesture();
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!activePointers.has(event.pointerId)) return;
    event.preventDefault();
    activePointers.set(event.pointerId, pointFromEvent(event));

    if (activePointers.size >= 2 && gesture?.mode === "pinch") {
      const [first, second] = getPointerPair();
      const mid = midpoint(first, second);
      const distanceNow = Math.max(12, distanceBetween(first, second));
      state.zoom = clamp(gesture.zoom * (distanceNow / gesture.distance), MIN_ZOOM, 1.35);
      state.panX = mid.x - gesture.worldMid.x * state.zoom;
      state.panY = mid.y - gesture.worldMid.y * state.zoom;
      movedDuringGesture = true;
      blockNodeClickUntil = Date.now() + 350;
      applyTransform();
      return;
    }

    if (activePointers.size === 1 && gesture?.mode === "drag") {
      const point = [...activePointers.values()][0];
      const dx = point.x - gesture.start.x;
      const dy = point.y - gesture.start.y;
      if (Math.hypot(dx, dy) > 6) {
        movedDuringGesture = true;
        blockNodeClickUntil = Date.now() + 350;
      }
      state.panX = gesture.panX + dx;
      state.panY = gesture.panY + dy;
      applyTransform();
    }
  });

  viewport.addEventListener("pointerup", endPointer);
  viewport.addEventListener("pointercancel", endPointer);

  viewport.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const worldX = (event.clientX - rect.left - state.panX) / state.zoom;
      const worldY = (event.clientY - rect.top - state.panY) / state.zoom;
      const factor = event.deltaY < 0 ? 1.08 : 0.92;
      state.zoom = clamp(state.zoom * factor, MIN_ZOOM, 1.35);
      state.panX = event.clientX - rect.left - worldX * state.zoom;
      state.panY = event.clientY - rect.top - worldY * state.zoom;
      applyTransform();
    },
    { passive: false },
  );

  window.addEventListener("resize", () => {
    renderTree();
    fitVisible();
    resizeWaterCanvas();
  });

  function startGesture() {
    if (activePointers.size >= 2) {
      const [first, second] = getPointerPair();
      const mid = midpoint(first, second);
      const rect = viewport.getBoundingClientRect();
      gesture = {
        mode: "pinch",
        distance: Math.max(12, distanceBetween(first, second)),
        zoom: state.zoom,
        worldMid: {
          x: (mid.x - rect.left - state.panX) / state.zoom,
          y: (mid.y - rect.top - state.panY) / state.zoom,
        },
      };
      blockNodeClickUntil = Date.now() + 350;
      return;
    }

    const point = [...activePointers.values()][0];
    gesture = {
      mode: "drag",
      start: point,
      panX: state.panX,
      panY: state.panY,
    };
  }

  function endPointer(event) {
    const shouldTap = activePointers.size === 1 && activePointers.has(event.pointerId) && !movedDuringGesture && tapCandidateId;
    activePointers.delete(event.pointerId);
    try {
      viewport.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture may already be gone after a system-level gesture cancel.
    }

    if (!activePointers.size) {
      gesture = null;
      viewport.classList.remove("is-dragging");
      if (shouldTap) {
        blockNodeClickUntil = Date.now() + 350;
        selectPerson(tapCandidateId, true);
      }
      tapCandidateId = null;
      return;
    }

    startGesture();
  }

  function pointFromEvent(event) {
    return { x: event.clientX, y: event.clientY };
  }

  function getPointerPair() {
    return [...activePointers.values()].slice(0, 2);
  }

  function midpoint(first, second) {
    return {
      x: (first.x + second.x) / 2,
      y: (first.y + second.y) / 2,
    };
  }

  function distanceBetween(first, second) {
    return Math.hypot(first.x - second.x, first.y - second.y);
  }
}

function renderTree() {
  updateRenderLayout();
  renderLinks();
  renderNodes();
  updateSelectedPill();
}

function updateRenderLayout() {
  const active = visiblePeople.filter((person) => passesFilter(person.id));
  renderLayouts = new Map();

  if (!active.length) {
    syncWorldSize(WORLD.width, WORLD.height);
    return;
  }

  const rows = new Map();
  for (const person of active) {
    const row = person.layout.seedGeneration ?? Math.max(0, person.generation - 1);
    const rowItems = rows.get(row) || [];
    rowItems.push(person);
    rows.set(row, rowItems);
  }

  const slot = NODE.width + COMPACT_LAYOUT.slotGap;
  const orderById = new Map();
  const rowPlans = [];
  const sortedRows = [...rows.keys()].sort((a, b) => a - b);

  for (const row of sortedRows) {
    const items = rows.get(row).sort((a, b) => {
      const memo = new Map();
      return (
        rowSortKey(a, row, orderById, memo) - rowSortKey(b, row, orderById, memo) ||
        a.layout.x - b.layout.x ||
        (a.layout.partnerLane || 0) - (b.layout.partnerLane || 0) ||
        a.name.localeCompare(b.name)
      );
    });
    const width = Math.max(NODE.width, (items.length - 1) * slot + NODE.width);
    rowPlans.push({ items, width });
    items.forEach((person, index) => orderById.set(person.id, index));
  }

  const widest = Math.max(...rowPlans.map((row) => row.width), NODE.width);
  const width = Math.ceil(widest + COMPACT_LAYOUT.sideMargin * 2);
  let y = COMPACT_LAYOUT.top;

  for (const plan of rowPlans) {
    const startX = (width - plan.width) / 2;
    plan.items.forEach((person, index) => {
      renderLayouts.set(person.id, {
        x: Math.round(startX + index * slot),
        y: Math.round(y),
      });
    });
    y += COMPACT_LAYOUT.rowGap;
  }

  syncWorldSize(width, Math.ceil(y - COMPACT_LAYOUT.rowGap + NODE.height + COMPACT_LAYOUT.bottom));
}

function rowSortKey(person, row, orderById, memo, visiting = new Set()) {
  if (memo.has(person.id)) return memo.get(person.id);
  if (visiting.has(person.id)) return person.layout.x;
  visiting.add(person.id);

  let key = null;

  for (const union of partnerUnions.get(person.id) || []) {
    if (!union.children.length) continue;
    const anchorId = getUnionAnchorParent(union);
    if (!anchorId || anchorId === person.id) continue;
    const anchor = people.get(anchorId);
    if (!anchor?.layout) continue;
    const anchorRow = anchor.layout.seedGeneration ?? Math.max(0, anchor.generation - 1);
    if (anchorRow !== row) continue;
    const anchorKey = rowSortKey(anchor, row, orderById, memo, visiting);
    key = anchorKey + 0.35 + (person.layout.partnerLane || 1) * 0.08;
    break;
  }

  const birthUnion = (childUnions.get(person.id) || [])[0];
  if (key === null && birthUnion) {
    const anchorId = getUnionAnchorParent(birthUnion);
    const parentOrder = orderById.get(anchorId);
    if (parentOrder !== undefined) {
      key = parentOrder * 1000 + Math.max(0, birthUnion.children.indexOf(person.id)) * 12;
    }
  }

  if (key === null) {
    for (const union of partnerUnions.get(person.id) || []) {
      const sameRowPartnerId = union.partners.find((partnerId) => {
        if (partnerId === person.id) return false;
        const partner = people.get(partnerId);
        return partner?.layout && (partner.layout.seedGeneration ?? Math.max(0, partner.generation - 1)) === row;
      });
      const partnerBirthUnion = sameRowPartnerId ? (childUnions.get(sameRowPartnerId) || [])[0] : null;
      if (!partnerBirthUnion) continue;
      const anchorId = getUnionAnchorParent(partnerBirthUnion);
      const parentOrder = orderById.get(anchorId);
      if (parentOrder === undefined) continue;
      key =
        parentOrder * 1000 +
        Math.max(0, partnerBirthUnion.children.indexOf(sameRowPartnerId)) * 12 +
        0.35 +
        (person.layout.partnerLane || 1) * 0.08;
      break;
    }
  }

  if (key === null) key = person.layout.x;
  memo.set(person.id, key);
  visiting.delete(person.id);
  return key;
}

function getUnionAnchorParent(union) {
  if (union.partners.length <= 1 || !union.children.length) return union.partners[0];

  const childLineCounts = new Map();
  for (const childId of union.children) {
    const label = getFamilyLineLabel(childId);
    childLineCounts.set(label, (childLineCounts.get(label) || 0) + 1);
  }

  const dominantLine = [...childLineCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
  return union.partners.find((partnerId) => getFamilyLineLabel(partnerId) === dominantLine) || union.partners[0];
}

function syncWorldSize(width, height) {
  WORLD.width = Math.max(Math.ceil(width), NODE.width + COMPACT_LAYOUT.sideMargin * 2);
  WORLD.height = Math.max(Math.ceil(height), NODE.height + COMPACT_LAYOUT.top + COMPACT_LAYOUT.bottom);
  linksEl.setAttribute("viewBox", `0 0 ${WORLD.width} ${WORLD.height}`);
  world.style.width = `${WORLD.width}px`;
  world.style.height = `${WORLD.height}px`;
}

function renderNodes() {
  const activeLineage = getActiveLineageSet();
  const html = visiblePeople
    .map((person) => {
      const hidden = !passesFilter(person.id);
      const layout = getRenderLayout(person.id);
      const spouses = getSpouses(person.id).map((item) => item.name || item.label).filter(Boolean);
      const familyLine = getFamilyLineLabel(person.id);
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
        <button class="${classes}" type="button" data-id="${person.id}" style="left:${layout.x}px;top:${layout.y}px">
          <span class="node-name">${escapeHtml(person.name)}</span>
          <span class="node-branch">${escapeHtml(familyLine)}</span>
          ${person.born ? `<span class="node-birth">Born ${escapeHtml(person.born)}</span>` : ""}
          ${spouses.length ? `<span class="node-spouses">${escapeHtml(spouses.join(", "))}</span>` : ""}
        </button>
      `;
    })
    .join("");

  nodesEl.innerHTML = html;
  nodesEl.querySelectorAll(".person-node").forEach((node) => {
    node.addEventListener("click", (event) => {
      if (Date.now() < blockNodeClickUntil) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      selectPerson(node.dataset.id, true);
    });
  });
}

function renderLinks() {
  const activeLineage = getActiveLineageSet();
  const paths = [];
  for (const union of unions) {
    const visiblePartners = union.partners.filter((id) => people.get(id)?.layout && passesFilter(id));
    const cross = union.cross ? " cross" : "";
      const marriageDirect = state.selectedId && union.partners.includes(state.selectedId) ? " direct" : "";

    if (visiblePartners.length >= 2) {
      const [first, second] = visiblePartners;
      paths.push(pathElement(spousePath(centerOf(first), centerOf(second)), `link marriage${cross}${marriageDirect}`));
    }

    if (!union.children.length || !visiblePartners.length) continue;

    const anchorId = getUnionAnchorParent(union);
    const start = visiblePartners.includes(anchorId) ? centerOf(anchorId) : unionCenter(visiblePartners);
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

function applyTopDownLayout(records) {
  const rows = new Map();
  const slot = NODE.width + LAYOUT.slotGap;

  for (const person of records) {
    if (!person.layout) continue;
    const override = layoutOverrides[person.id];
    if (override) person.layout = { ...person.layout, ...override };
    const row = person.layout.seedGeneration ?? Math.max(0, person.generation - 1);
    const rowItems = rows.get(row) || [];
    rowItems.push(person);
    rows.set(row, rowItems);
  }

  const sortedRows = [...rows.keys()].sort((a, b) => a - b);
  const rowWidths = new Map();
  let widestRow = 0;

  for (const row of sortedRows) {
    const rowItems = rows.get(row);
    rowItems.sort((a, b) => {
      const first = a.layout;
      const second = b.layout;
      return (
        first.seedOrder - second.seedOrder ||
        first.partnerLane - second.partnerLane ||
        a.name.localeCompare(b.name)
      );
    });

    const rowWidth = Math.max(NODE.width, (rowItems.length - 1) * slot + NODE.width);
    rowWidths.set(row, rowWidth);
    widestRow = Math.max(widestRow, rowWidth);
  }

  WORLD.width = Math.ceil(widestRow + LAYOUT.sideMargin * 2);
  WORLD.height = Math.max(...ROW) + NODE.height + 180;

  for (const row of sortedRows) {
    const rowItems = rows.get(row);
    const rowWidth = rowWidths.get(row);
    const startX = (WORLD.width - rowWidth) / 2;
    const y = ROW[row] ?? ROW[ROW.length - 1] + (row - ROW.length + 1) * 440;

    rowItems.forEach((person, index) => {
      person.layout = {
        x: Math.round(startX + index * slot),
        y,
        seedGeneration: row,
        seedOrder: person.layout.seedOrder,
        partnerLane: person.layout.partnerLane,
      };
    });
  }
}

function parentPath(start, end) {
  const startY = start.y + NODE.height / 2;
  const endY = end.y - NODE.height / 2;
  const distance = Math.max(120, Math.abs(endY - startY));
  const c1y = startY + distance * 0.45;
  const c2y = endY - distance * 0.45;
  const drift = Math.min(120, Math.abs(end.x - start.x) * 0.05);
  return `M ${start.x} ${startY} C ${start.x + drift} ${c1y}, ${end.x - drift} ${c2y}, ${end.x} ${endY}`;
}

function spousePath(start, end) {
  const direction = end.x >= start.x ? 1 : -1;
  const startX = start.x + (NODE.width / 2) * direction;
  const endX = end.x - (NODE.width / 2) * direction;
  const dx = endX - startX;
  const dy = end.y - start.y;
  const bend = Math.max(70, Math.abs(dx) * 0.28);
  const arc = Math.min(130, Math.max(42, Math.abs(dx) * 0.045));
  return `M ${startX} ${start.y} C ${startX + bend * direction} ${start.y - arc + dy * 0.1}, ${endX - bend * direction} ${end.y - arc - dy * 0.1}, ${endX} ${end.y}`;
}

function centerOf(id) {
  const layout = getRenderLayout(id);
  return {
    x: layout.x + NODE.width / 2,
    y: layout.y + NODE.height / 2,
  };
}

function getRenderLayout(id) {
  return renderLayouts.get(id) || people.get(id)?.layout || { x: 0, y: 0 };
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
  const familyLine = getFamilyLineLabel(id);
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
          <p class="detail-subtle">${escapeHtml(familyLine)}</p>
        </div>
        <button class="detail-close" type="button" title="Close details" aria-label="Close details">x</button>
      </div>
      <div class="photo-slot" aria-label="Photo placeholder">${escapeHtml(initials)}</div>
      <div class="detail-grid">
        ${detailTextRow("Born", person.born || "Not added yet")}
        ${detailTextRow("Family line", familyLine)}
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
      const familyLine = getFamilyLineLabel(person.id).toLowerCase();
      const spouseText = spouseNames.toLowerCase();
      let score = null;

      if (name.startsWith(query)) score = 0;
      else if (name.includes(query)) score = 1;
      else if (spouseText.includes(query)) score = 2;
      else if (familyLine.includes(query)) score = 3;
      else if (branch.includes(query)) score = 4;

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
          <small>${escapeHtml(getFamilyLineLabel(person.id))}</small>
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
  state.selectedId = id;

  if (shouldCenterNode && anchorId && state.filter !== "explorer" && !passesFilter(anchorId)) {
    state.filter = "all";
    branchFilter.value = "all";
  }

  renderLineage();
  renderTree();
  renderDetails(id);
  updateSelectedPill();

  if (shouldCenterNode) {
    centerOn(nearestVisibleAnchor(id), Math.max(state.zoom, selectedNodeZoom()));
  }
}

function updateSelectedPill() {
  const person = people.get(state.selectedId);
  selectedPill.textContent = person ? person.name : state.filter === "explorer" ? "Branch explorer" : "Full family";
}

function passesFilter(id) {
  const person = people.get(id);
  if (!person?.layout) return false;

  if (state.filter === "explorer") return getExplorerSet().has(id);
  if (state.filter === "all") return true;
  if (state.filter === "direct") return getActiveLineageSet().has(id);
  if (state.filter === "connected") return crossMarriageSet.has(id);

  if (person.branch === state.filter) return true;
  return isPartnerOfBranch(id, state.filter);
}

function getExplorerSet() {
  if (!state.selectedId) return getRootExplorerSet();

  const ids = new Set([
    state.selectedId,
    ...getAncestors(state.selectedId),
    ...getParents(state.selectedId),
    ...getSiblings(state.selectedId),
    ...getSpouses(state.selectedId).filter((item) => item.id).map((item) => item.id),
    ...getChildren(state.selectedId),
  ]);

  addVisibleSpouses(ids, [...ids]);
  for (const childId of getChildren(state.selectedId)) {
    addVisibleSpouses(ids, [childId]);
  }

  return ids;
}

function getRootExplorerSet() {
  const ids = new Set(["nathay-khan", "wazeer-begum", ...getChildren("nathay-khan")]);
  addVisibleSpouses(ids, [...ids]);
  return ids;
}

function addVisibleSpouses(target, sourceIds) {
  for (const id of sourceIds) {
    for (const spouse of getSpouses(id)) {
      if (spouse.id && people.get(spouse.id)?.layout) target.add(spouse.id);
    }
  }
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

function getFamilyLineLabel(id) {
  return familyLineById[id] || branchLabels[people.get(id)?.branch] || "Family line unknown";
}

function unique(items) {
  return [...new Set(items)];
}

function centerOn(id, zoom = state.zoom) {
  const person = people.get(id);
  if (!person?.layout) return;
  const layout = getRenderLayout(id);

  state.zoom = clamp(zoom, MIN_ZOOM, 1.35);
  const rect = viewport.getBoundingClientRect();
  const targetX = rect.width / 2;
  const targetY = window.innerWidth <= 760 ? rect.height * 0.26 : rect.height / 2;
  state.panX = targetX - (layout.x + NODE.width / 2) * state.zoom;
  state.panY = targetY - (layout.y + NODE.height / 2) * state.zoom;
  applyTransform();
}

function fitVisible() {
  const active = visiblePeople.filter((person) => passesFilter(person.id));
  if (!active.length) return;

  const bounds = active.reduce(
    (box, person) => {
      const layout = getRenderLayout(person.id);
      box.minX = Math.min(box.minX, layout.x);
      box.minY = Math.min(box.minY, layout.y);
      box.maxX = Math.max(box.maxX, layout.x + NODE.width);
      box.maxY = Math.max(box.maxY, layout.y + NODE.height);
      return box;
    },
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
  );

  const rect = viewport.getBoundingClientRect();
  const padding = window.innerWidth <= 760 ? 80 : 160;
  const zoomX = rect.width / (bounds.maxX - bounds.minX + padding * 2);
  const zoomY = rect.height / (bounds.maxY - bounds.minY + padding * 2);
  const fitZoom = Math.min(zoomX, zoomY);

  const wideTree = active.length > 32;
  const heightFitZoom = window.innerWidth <= 760 ? clamp(zoomY * 0.9, 0.26, 0.4) : clamp(zoomY * 0.9, 0.28, 0.48);
  state.zoom = wideTree ? heightFitZoom : clamp(fitZoom, MIN_ZOOM, 0.78);
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

  state.zoom = clamp(state.zoom * factor, MIN_ZOOM, 1.35);
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

function selectedNodeZoom() {
  return window.innerWidth <= 760 ? 0.82 : 0.62;
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
}

function resizeWaterCanvas() {
  if (!waterCanvas) return;
  const ratio = window.devicePixelRatio || 1;
  waterCanvas.width = Math.floor(window.innerWidth * ratio);
  waterCanvas.height = Math.floor(window.innerHeight * ratio);
  waterCanvas.style.width = `${window.innerWidth}px`;
  waterCanvas.style.height = `${window.innerHeight}px`;
  waterContext?.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawWater();
}

function drawWater() {
  if (!waterContext) return;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const base = waterContext.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, "rgba(11, 10, 8, 0.94)");
  base.addColorStop(0.48, "rgba(18, 15, 12, 0.88)");
  base.addColorStop(1, "rgba(7, 6, 4, 0.94)");
  waterContext.fillStyle = base;
  waterContext.fillRect(0, 0, width, height);

  drawGlow(width * 0.18, height * 0.18, width * 0.42, "197,139,94", 0.18);
  drawGlow(width * 0.78, height * 0.2, width * 0.36, "106,219,207", 0.14);
  drawGlow(width * 0.58, height * 0.82, width * 0.44, "207,123,157", 0.09);
  drawGlow(width * 0.45, height * 0.45, width * 0.58, "244,236,220", 0.045);
}

function drawGlow(x, y, radius, color, alpha) {
  const glow = waterContext.createRadialGradient(x, y, 0, x, y, radius);
  glow.addColorStop(0, `rgba(${color}, ${alpha})`);
  glow.addColorStop(0.48, `rgba(${color}, ${alpha * 0.36})`);
  glow.addColorStop(1, `rgba(${color}, 0)`);
  waterContext.fillStyle = glow;
  waterContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
}
