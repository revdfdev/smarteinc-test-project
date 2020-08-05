import logo from "../resources/images/company-logo.png";

export async function getAllCompaniesApi() {
    try {
        const data = await new Promise((resolve, reject) => {
            const returnData = [{
                    abbImageUrl: logo,
                    name: "ABB limited",
                    address: "Affolterntrasse, 44, Zurich, Zurlch, Zurlch, 8050 Switzerland",
                    phone: "+41 433177111",
                    website: "social.abb",
                    ownership: "Corporation",
                    linkedInUrl: "https://linkedin/companyabb",
                    parentCompany: "ABB LTD",
                    primaryIndustry: "Electrical equipment, Applainces and component manufacturing",
                    revenue: "$1b+",
                    employeeSize: "10,001+",
                    sic: "36 - Electronic, Elctrcl Eqpmnt & Cmpnts, Excpt Computer Eqpmnt",
                    naic: "335 - Electrical Equipment, Applaince and Component Manufacturing",
                    allIndustry: "Manufacturing, Electrical Equipment, Applainces and Component Manufacturing and Business services",
                    allSic: "36 - Electronic, Electrical Equipment & Cmpnts, Excpt Computer Eqpmnt, 67 - Holding and Other Investment"
                },
                {
                    abbImageUrl: logo,
                    name: "ABB limited",
                    address: "Affolterntrasse, 44, Zurich, Zurlch, Zurlch, 8050 Switzerland",
                    phone: "+41 433177111",
                    website: "social.abb",
                    ownership: "Corporation",
                    linkedInUrl: "https://linkedin/companyabb",
                    parentCompany: "ABB LTD",
                    primaryIndustry: "Electrical equipment, Applainces and component manufacturing",
                    revenue: "$1b+",
                    employeeSize: "10,001+",
                    sic: "36 - Electronic, Elctrcl Eqpmnt & Cmpnts, Excpt Computer Eqpmnt",
                    naic: "335 - Electrical Equipment, Applaince and Component Manufacturing",
                    allIndustry: "Manufacturing, Electrical Equipment, Applainces and Component Manufacturing and Business services",
                    allSic: "36 - Electronic, Electrical Equipment & Cmpnts, Excpt Computer Eqpmnt, 67 - Holding and Other Investment"
                },
                {
                    abbImageUrl: logo,
                    name: "ABB limited",
                    address: "Affolterntrasse, 44, Zurich, Zurlch, Zurlch, 8050 Switzerland",
                    phone: "+41 433177111",
                    website: "social.abb",
                    ownership: "Corporation",
                    linkedInUrl: "https://linkedin/companyabb",
                    parentCompany: "ABB LTD",
                    primaryIndustry: "Electrical equipment, Applainces and component manufacturing",
                    revenue: "$1b+",
                    employeeSize: "10,001+",
                    sic: "36 - Electronic, Elctrcl Eqpmnt & Cmpnts, Excpt Computer Eqpmnt",
                    naic: "335 - Electrical Equipment, Applaince and Component Manufacturing",
                    allIndustry: "Manufacturing, Electrical Equipment, Applainces and Component Manufacturing and Business services",
                    allSic: "36 - Electronic, Electrical Equipment & Cmpnts, Excpt Computer Eqpmnt, 67 - Holding and Other Investment"
                },
                {
                    abbImageUrl: logo,
                    name: "ABB limited",
                    address: "Affolterntrasse, 44, Zurich, Zurlch, Zurlch, 8050 Switzerland",
                    phone: "+41 433177111",
                    website: "social.abb",
                    ownership: "Corporation",
                    linkedInUrl: "https://linkedin/companyabb",
                    parentCompany: "ABB LTD",
                    primaryIndustry: "Electrical equipment, Applainces and component manufacturing",
                    revenue: "$1b+",
                    employeeSize: "10,001+",
                    sic: "36 - Electronic, Elctrcl Eqpmnt & Cmpnts, Excpt Computer Eqpmnt",
                    naic: "335 - Electrical Equipment, Applaince and Component Manufacturing",
                    allIndustry: "Manufacturing, Electrical Equipment, Applainces and Component Manufacturing and Business services",
                    allSic: "36 - Electronic, Electrical Equipment & Cmpnts, Excpt Computer Eqpmnt, 67 - Holding and Other Investment"
                },
                {
                    abbImageUrl: logo,
                    name: "ABB limited",
                    address: "Affolterntrasse, 44, Zurich, Zurlch, Zurlch, 8050 Switzerland",
                    phone: "+41 433177111",
                    website: "social.abb",
                    ownership: "Corporation",
                    linkedInUrl: "https://linkedin/companyabb",
                    parentCompany: "ABB LTD",
                    primaryIndustry: "Electrical equipment, Applainces and component manufacturing",
                    revenue: "$1b+",
                    employeeSize: "10,001+",
                    sic: "36 - Electronic, Elctrcl Eqpmnt & Cmpnts, Excpt Computer Eqpmnt",
                    naic: "335 - Electrical Equipment, Applaince and Component Manufacturing",
                    allIndustry: "Manufacturing, Electrical Equipment, Applainces and Component Manufacturing and Business services",
                    allSic: "36 - Electronic, Electrical Equipment & Cmpnts, Excpt Computer Eqpmnt, 67 - Holding and Other Investment"
                },
                {
                    abbImageUrl: logo,
                    name: "ABB limited",
                    address: "Affolterntrasse, 44, Zurich, Zurlch, Zurlch, 8050 Switzerland",
                    phone: "+41 433177111",
                    website: "social.abb",
                    ownership: "Corporation",
                    linkedInUrl: "https://linkedin/companyabb",
                    parentCompany: "ABB LTD",
                    primaryIndustry: "Electrical equipment, Applainces and component manufacturing",
                    revenue: "$1b+",
                    employeeSize: "10,001+",
                    sic: "36 - Electronic, Elctrcl Eqpmnt & Cmpnts, Excpt Computer Eqpmnt",
                    naic: "335 - Electrical Equipment, Applaince and Component Manufacturing",
                    allIndustry: "Manufacturing, Electrical Equipment, Applainces and Component Manufacturing and Business services",
                    allSic: "36 - Electronic, Electrical Equipment & Cmpnts, Excpt Computer Eqpmnt, 67 - Holding and Other Investment"
                }
            ]
            resolve(returnData)
        });

        return data;
    } catch (exception) {
        throw exception;
    }
}

export async function getCompanyEmployeeList(company) {
    try {
        const data = await new Promise((resolve, reject) => {
            const returnData =[
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: false
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: false
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: false
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: false
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
                {
                    employeeName: "Carsten Kloch",
                    designation: "Software engineer",
                    email: "carstent.kloch@abb.com",
                    contact: "+5 142 56162781",
                    isLocked: true
                },
            ];
            resolve(returnData);
        });
        return data;
    } catch (exception) {
        throw exception;
    }
}

export async function getCompanyDetailsApi(company) {
    try {
        const data = await new Promise((resolve, reject) => {
            const returnData = {
                abbImageUrl: logo,
                name: "ABB limited",
                address: "Affolterntrasse, 44, Zurich, Zurlch, Zurlch, 8050 Switzerland",
                phone: "+41 433177111",
                website: "social.abb",
                ownership: "Corporation",
                linkedInUrl: "/linkedin/companyabb",
                parentCompany: "ABB LTD",
                primaryIndustry: "Electrical equipment, Applainces and component manufacturing",
                revenue: "$1b+",
                employeeSize: "10,001+",
                sic: "36 - Electronic, Elctrcl Eqpmnt & Cmpnts, Excpt Computer Eqpmnt",
                naic: "335 - Electrical Equipment, Applaince and Component Manufacturing",
                allIndustry: "Manufacturing, Electrical Equipment, Applainces and Component Manufacturing and Business services",
                allSic: "36 - Electronic, Electrical Equipment & Cmpnts, Excpt Computer Eqpmnt, 67 - Holding and Other Investment"
            }
            resolve(returnData)
        });

        return data;
    } catch (exception) {
        throw exception;
    }
}