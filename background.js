const stateDescriptions = {
    "A1": "Real, Residential, Single-Family",
    "A2": "Real, Residential, Mobile Homes",
    "B1": "Real, Residential, Multi-Family",
    "B2": "Real, Residential, Two-Family",
    "B3": "Real, Residential, Three-Family",
    "B4": "Real, Residential, Four- or More-Family",
    "C1": "Real, Vacant Lots/Tracts",
    "C2": "Real, Vacant Commercial",
    "C3": "Real, Vacant",
    "D1": "Real, Qualified Agricultural Land",
    "D2": "Real, Unqualified Agricultural Land",
    "E1": "Real, Farm & Ranch Improved",
    "F1": "Real, Commercial",
    "F2": "Real, Industrial",
    "G1": "Oil and Mineral Gas Reserves",
    "G2": "Real Property Other Mineral Reserves",
    "H1": "Tangible, Vehicles",
    "H2": "Tangible, Goods In Transit",
    "I1": "Real, Banks",
    "J1": "Real & Tangible Personal, Utility Water",
    "J2": "Gas Companies",
    "J3": "Electric Companies",
    "J4": "Telephone Companies",
    "J5": "Railroads",
    "J6": "Pipelines",
    "J7": "Major Cable Television Systems",
    "L1": "Tangible, Commercial",
    "L2": "Tangible, Industrial",
    "M1": "Tangible, Nonbusiness Watercraft",
    "M2": "Tangible, Nonbusiness Aircraft",
    "M3": "Tangible, Mobile Homes",
    "M4": "Tangible, Miscellaneous",
    "N1": "Intangibles",
    "O1": "Inventory",
    "O2": "Inventory",
    "O3": "Inventory",
    "PT": "Subdivision Header",
    "S1": "Dealer Inventory",
    "T": "Temporary",
    "U0": "Unknown",
    "XA": "Public Property for Housing Indigent Persons",
    "XB": "Income Producing Personal Property (<$2500)",
    "XC": "Mineral Interest (<$500)",
    "XD": "Improving Property for Housing w/ Volunteer Labor",
    "XE": "Community Housing Development Organizations",
    "XF": "Assisting Ambulatory Health Care Centers",
    "XG": "Primarily Performing Charitable Functions",
    "XH": "Developing Model Colonia Subdivisions",
    "XI": "Youth Spiritual, Mental and Physical Development",
    "XJ": "Private Schools",
    "XL": "Economic Development Services to Local Community",
    "XM": "Marine Cargo Containers",
    "XN": "Motor Vehicles Leased for Personal Use",
    "XO": "Motor Vehicles (Income Production & Personal Use)",
    "XP": "Offshore Drilling Equipment Not In Use",
    "XQ": "Intracoastal Waterway Dredge Disposal Site",
    "XR": "Nonprofit Water or Wastewater Corporations",
    "XS": "Raw Cocoa and Green Coffee Held in Harris County",
    "XT": "Limitation on Taxes in Certain Municipalities",
    "XU": "Miscellaneous Exemptions",
    "XV": "Other Exempt (Incl Public, Religious, Charitable)",
    "X0": "Primarily Charitable Organization",
    "X1": "Governmental Exempt",
    "X2": "Charitable Exempt",
    "X3": "Religious Exempt",
    "X4": "Cemetery Exempt",
    "X5": "Private School Exempt",
    "X6": "Youth Development Exempt",
    "X7": "Historical Exempt",
    "X8": "Miscellaneous Exempt",
    "X9": "Low-Moderate Income Housing",
};

const paragraphs = document.querySelectorAll('p');
let stateCode = null;

for (let i = 0; i < paragraphs.length; i++) {
  if (paragraphs[i].innerText.includes("State Code:")) {
    stateCode = paragraphs[i + 1]?.innerText.trim();
    break;
  }
}

const description = stateCode ? stateDescriptions[stateCode] || "Unknown State Code" : null;

stateCode ? { stateCode, description } : null;
