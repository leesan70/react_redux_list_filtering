import * as axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getApiUrl } from 'Helpers';

const Axios = axios.create({
    baseURL: getApiUrl(),
});

const mock = new MockAdapter(Axios);
mock.onGet('/api/assessment/students').reply(200, {
    "students": [
        {
            "city": "Fush\u00eb-Muhurr",
            "company": "Yadel",
            "email": "iorton0@imdb.com",
            "firstName": "Ingaberg",
            "grades": [
                "78",
                "100",
                "92",
                "86",
                "89",
                "88",
                "91",
                "87"
            ],
            "id": "1",
            "lastName": "Orton",
            "pic": process.env.PUBLIC_URL + "/voluptasdictablanditiis.jpg",
            "skill": "Oracle"
        },
        {
            "city": "Sanghan",
            "company": "Avamm",
            "email": "cboards1@weibo.com",
            "firstName": "Clarke",
            "grades": [
                "75",
                "89",
                "95",
                "93",
                "99",
                "82",
                "89",
                "76"
            ],
            "id": "2",
            "lastName": "Boards",
            "pic": process.env.PUBLIC_URL + "/voluptasautreprehenderit.jpg",
            "skill": "Sports"
        },
        {
            "city": "Kugesi",
            "company": "Skalith",
            "email": "lromanet2@wired.com",
            "firstName": "Laurens",
            "grades": [
                "88",
                "90",
                "79",
                "82",
                "81",
                "99",
                "94",
                "73"
            ],
            "id": "3",
            "lastName": "Romanet",
            "pic": process.env.PUBLIC_URL + "/aspernaturnonsapiente.jpg",
            "skill": "Employee Handbooks"
        },
        {
            "city": "Krajan",
            "company": "Mybuzz",
            "email": "bskitt3@aboutads.info",
            "firstName": "Berti",
            "grades": [
                "88",
                "93",
                "92",
                "81",
                "95",
                "98",
                "77",
                "94"
            ],
            "id": "4",
            "lastName": "Skitt",
            "pic": process.env.PUBLIC_URL + "/autautdeserunt.jpg",
            "skill": "Nutrition Education"
        },
        {
            "city": "Huiqi",
            "company": "Avavee",
            "email": "msummerley4@craigslist.org",
            "firstName": "Mureil",
            "grades": [
                "71",
                "81",
                "72",
                "92",
                "79",
                "82",
                "91",
                "90"
            ],
            "id": "5",
            "lastName": "Summerley",
            "pic": process.env.PUBLIC_URL + "/consequaturdelectusquis.jpg",
            "skill": "ISO 14971"
        },
        {
            "city": "Jianghong",
            "company": "Twinte",
            "email": "rcoryndon5@cargocollective.com",
            "firstName": "Robbyn",
            "grades": [
                "97",
                "92",
                "72",
                "99",
                "92",
                "92",
                "79",
                "96"
            ],
            "id": "6",
            "lastName": "Coryndon",
            "pic": process.env.PUBLIC_URL + "/autautdeserunt.jpg",
            "skill": "Cinema 4D"
        },
        {
            "city": "Sanxi",
            "company": "Buzzster",
            "email": "seykel6@examiner.com",
            "firstName": "Sheena",
            "grades": [
                "74",
                "95",
                "75",
                "95",
                "85",
                "97",
                "88",
                "85"
            ],
            "id": "7",
            "lastName": "Eykel",
            "pic": process.env.PUBLIC_URL + "/utquamut.jpg",
            "skill": "Ulead VideoStudio"
        },
        {
            "city": "Huancheng",
            "company": "Edgeblab",
            "email": "mewen7@ycombinator.com",
            "firstName": "Minnnie",
            "grades": [
                "80",
                "100",
                "97",
                "78",
                "99",
                "99",
                "76",
                "85"
            ],
            "id": "8",
            "lastName": "Ewen",
            "pic": process.env.PUBLIC_URL + "/nesciuntrerumlibero.jpg",
            "skill": "Vulcan"
        },
        {
            "city": "Luoxiong",
            "company": "Fadeo",
            "email": "riban8@hubpages.com",
            "firstName": "Rory",
            "grades": [
                "70",
                "100",
                "75",
                "96",
                "83",
                "90",
                "94",
                "92"
            ],
            "id": "9",
            "lastName": "Iban",
            "pic": process.env.PUBLIC_URL + "/autemporroplaceat.jpg",
            "skill": "EE4"
        },
        {
            "city": "Toulon",
            "company": "Yakidoo",
            "email": "lroxby9@cam.ac.uk",
            "firstName": "Lenna",
            "grades": [
                "70",
                "99",
                "81",
                "83",
                "78",
                "95",
                "81",
                "76"
            ],
            "id": "10",
            "lastName": "Roxby",
            "pic": process.env.PUBLIC_URL + "/doloribusquitempora.jpg",
            "skill": "LPS"
        },
        {
            "city": "Lazo",
            "company": "Photolist",
            "email": "rfitzalana@parallels.com",
            "firstName": "Rosalynd",
            "grades": [
                "98",
                "93",
                "78",
                "87",
                "99",
                "89",
                "97",
                "81"
            ],
            "id": "11",
            "lastName": "FitzAlan",
            "pic": process.env.PUBLIC_URL + "/utquamut.jpg",
            "skill": "Geography"
        },
        {
            "city": "Bichura",
            "company": "Babblestorm",
            "email": "srapellib@adobe.com",
            "firstName": "Stephanie",
            "grades": [
                "83",
                "97",
                "70",
                "96",
                "75",
                "98",
                "90",
                "71"
            ],
            "id": "12",
            "lastName": "Rapelli",
            "pic": process.env.PUBLIC_URL + "/enimpariaturoptio.jpg",
            "skill": "Identity Management"
        },
        {
            "city": "Chval\u0161iny",
            "company": "Mynte",
            "email": "mmacdirmidc@plala.or.jp",
            "firstName": "Maire",
            "grades": [
                "87",
                "73",
                "85",
                "98",
                "73",
                "95",
                "75",
                "97"
            ],
            "id": "13",
            "lastName": "MacDirmid",
            "pic": process.env.PUBLIC_URL + "/aspernaturnonsapiente.jpg",
            "skill": "Outdoor Advertising"
        },
        {
            "city": "Itaparica",
            "company": "Photospace",
            "email": "nshepherdd@desdev.cn",
            "firstName": "Nicoline",
            "grades": [
                "90",
                "73",
                "88",
                "95",
                "71",
                "100",
                "80",
                "86"
            ],
            "id": "14",
            "lastName": "Shepherd",
            "pic": process.env.PUBLIC_URL + "/nonipsaet.jpg",
            "skill": "Amazon VPC"
        },
        {
            "city": "Praia da Vit\u00f3ria",
            "company": "Vitz",
            "email": "ythornse@github.com",
            "firstName": "Yoshi",
            "grades": [
                "78",
                "78",
                "96",
                "92",
                "80",
                "82",
                "91",
                "99"
            ],
            "id": "15",
            "lastName": "Thorns",
            "pic": process.env.PUBLIC_URL + "/voluptasdictablanditiis.jpg",
            "skill": "DMR"
        },
        {
            "city": "Sambir",
            "company": "Twitterwire",
            "email": "mtothef@shutterfly.com",
            "firstName": "Marna",
            "grades": [
                "88",
                "74",
                "76",
                "89",
                "75",
                "97",
                "75",
                "86"
            ],
            "id": "16",
            "lastName": "Tothe",
            "pic": process.env.PUBLIC_URL + "/utquamut.jpg",
            "skill": "PFI"
        },
        {
            "city": "Sarulla",
            "company": "Blogpad",
            "email": "okearyg@g.co",
            "firstName": "Orelia",
            "grades": [
                "78",
                "92",
                "86",
                "80",
                "82",
                "95",
                "76",
                "84"
            ],
            "id": "17",
            "lastName": "Keary",
            "pic": process.env.PUBLIC_URL + "/enimpariaturoptio.jpg",
            "skill": "General Surgery"
        },
        {
            "city": "Ochakovo-Matveyevskoye",
            "company": "Mydeo",
            "email": "mswaith@cafepress.com",
            "firstName": "Moses",
            "grades": [
                "84",
                "82",
                "92",
                "74",
                "87",
                "98",
                "86",
                "73"
            ],
            "id": "18",
            "lastName": "Swait",
            "pic": process.env.PUBLIC_URL + "/velitnonquibusdam.jpg",
            "skill": "Sales Tax"
        },
        {
            "city": "Youxi Chengguanzhen",
            "company": "Avaveo",
            "email": "fnusseyi@skyrock.com",
            "firstName": "Fonsie",
            "grades": [
                "100",
                "75",
                "84",
                "91",
                "100",
                "97",
                "98",
                "87"
            ],
            "id": "19",
            "lastName": "Nussey",
            "pic": process.env.PUBLIC_URL + "/remtemporavelit.jpg",
            "skill": "Urbanism"
        },
        {
            "city": "Limoges",
            "company": "Tazzy",
            "email": "srydingsj@phoca.cz",
            "firstName": "Skelly",
            "grades": [
                "89",
                "81",
                "77",
                "93",
                "96",
                "96",
                "70",
                "79"
            ],
            "id": "20",
            "lastName": "Rydings",
            "pic": process.env.PUBLIC_URL + "/etporroalias.jpg",
            "skill": "IFTA"
        },
        {
            "city": "\u0141ob\u017cenica",
            "company": "Quatz",
            "email": "obrennekek@yellowbook.com",
            "firstName": "Olly",
            "grades": [
                "81",
                "74",
                "77",
                "82",
                "74",
                "88",
                "86",
                "87"
            ],
            "id": "21",
            "lastName": "Brenneke",
            "pic": process.env.PUBLIC_URL + "/velitnonquibusdam.jpg",
            "skill": "ATM Networks"
        },
        {
            "city": "Divo",
            "company": "Gigazoom",
            "email": "nbadwickl@nifty.com",
            "firstName": "Norby",
            "grades": [
                "73",
                "99",
                "91",
                "92",
                "85",
                "96",
                "95",
                "73"
            ],
            "id": "22",
            "lastName": "Badwick",
            "pic": process.env.PUBLIC_URL + "/delenitiestdolorum.jpg",
            "skill": "Media Relations"
        },
        {
            "city": "Sortavala",
            "company": "Eamia",
            "email": "mmichiem@nifty.com",
            "firstName": "Melody",
            "grades": [
                "100",
                "83",
                "76",
                "71",
                "93",
                "95",
                "73",
                "88"
            ],
            "id": "23",
            "lastName": "Michie",
            "pic": process.env.PUBLIC_URL + "/sitlaborecorrupti.jpg",
            "skill": "PC Games"
        },
        {
            "city": "Taupo",
            "company": "Midel",
            "email": "jwillougheyn@psu.edu",
            "firstName": "Janice",
            "grades": [
                "71",
                "80",
                "83",
                "99",
                "91",
                "95",
                "81",
                "75"
            ],
            "id": "24",
            "lastName": "Willoughey",
            "pic": process.env.PUBLIC_URL + "/dolordoloremassumenda.jpg",
            "skill": "Kondor+"
        },
        {
            "city": "Krajandadapmulyo",
            "company": "Wikibox",
            "email": "ggallymoreo@mashable.com",
            "firstName": "Geraldine",
            "grades": [
                "97",
                "71",
                "89",
                "85",
                "85",
                "87",
                "92",
                "75"
            ],
            "id": "25",
            "lastName": "Gallymore",
            "pic": process.env.PUBLIC_URL + "/sitlaborecorrupti.jpg",
            "skill": "WTL"
        }
    ]
});

export { Axios };