const CONFIG = 'hsl';
const API_URL = process.env.API_URL || 'https://dev-api.digitransit.fi';
const MAP_URL =
  process.env.MAP_URL || 'https://digitransit-dev-cdn-origin.azureedge.net';
const APP_DESCRIPTION = 'Helsingin seudun liikenteen uusi Reittiopas.';
const YEAR = 1900 + new Date().getYear();

export default {
  CONFIG,

  URL: {
    OTP: process.env.OTP_URL || `${API_URL}/routing/v1/routers/hsl/`,
    STOP_MAP: `${MAP_URL}/map/v1/hsl-stop-map/`,
    CITYBIKE_MAP: `${MAP_URL}/map/v1/hsl-citybike-map/`,
    PARK_AND_RIDE_MAP: `${MAP_URL}/map/v1/hsl-parkandride-map/`,
    TICKET_SALES_MAP: `${MAP_URL}/map/v1/hsl-ticket-sales-map/`,
    FONT: 'https://cloud.typography.com/6364294/7572592/css/fonts.css',
  },

  contactName: {
    sv: 'HSR',
    fi: 'HSL',
    default: 'HSL',
  },

  title: 'Reittiopas',

  availableLanguages: ['fi', 'sv', 'en'],
  defaultLanguage: 'fi',

  favicon: './app/configurations/images/hsl/icon_favicon-reittiopas.svg',

  // Navbar logo
  logo: 'hsl/reittiopas-logo.svg',

  feedIds: ['HSL'],

  showHSLTracking: true,

  defaultMapCenter: {
    lat: 60.1710688,
    lon: 24.9414841,
  },

  nearbyRoutes: {
    radius: 2000,
    bucketSize: 100,
  },

  maxWalkDistance: 2500,
  itineraryFiltering: 2.5, // drops 40% worse routes

  parkAndRide: {
    showParkAndRide: true,
    parkAndRideMinZoom: 14,
  },

  ticketSales: {
    showTicketSales: true,
    ticketSalesMinZoom: 16,
  },

  showDisclaimer: true,

  stopsMinZoom: 14,

  colors: {
    primary: '#007ac9',
  },

  sprites: 'svg-sprite.hsl.svg',

  appBarLink: { name: 'HSL.fi', href: 'https://www.hsl.fi/' },

  nationalServiceLink: { name: 'matka.fi', href: 'https://opas.matka.fi/' },

  agency: {
    show: false,
  },

  socialMedia: {
    title: 'Uusi Reittiopas',
    description: APP_DESCRIPTION,

    image: {
      url: '/img/hsl-social-share.png',
      width: 400,
      height: 400,
    },

    twitter: {
      card: 'summary',
      site: '@HSL_HRT',
    },
  },

  meta: {
    description: APP_DESCRIPTION,
  },

  transportModes: {
    airplane: {
      availableForSelection: false,
      defaultValue: false,
    },
  },

  streetModes: {
    bicycle: {
      availableForSelection: true,
      defaultValue: false,
      icon: 'biking',
    },

    car_park: {
      availableForSelection: true,
      defaultValue: false,
      icon: 'car-withoutBox',
    },

    car: {
      availableForSelection: false,
      defaultValue: false,
      icon: 'car_park-withoutBox',
    },
  },

  search: {
    /* identify searches for route numbers/labels: bus | train | metro */
    lineRegexp: new RegExp(
      '(^[0-9]+[a-z]?$|^[yuleapinkrtdz]$|(^m[12]?b?$))',
      'i',
    ),
  },

  modesWithNoBike: ['BUS', 'TRAM'],

  useSearchPolygon: true,

  areaPolygon: [
    [25.5345, 60.2592],
    [25.3881, 60.1693],
    [25.3559, 60.103],
    [25.3293, 59.9371],
    [24.2831, 59.78402],
    [24.2721, 59.95501],
    [24.2899, 60.00895],
    [24.3087, 60.01947],
    [24.1994, 60.12753],
    [24.1362, 60.1114],
    [24.1305, 60.12847],
    [24.099, 60.1405],
    [24.0179, 60.1512],
    [24.0049, 60.1901],
    [24.0445, 60.1918],
    [24.0373, 60.2036],
    [24.0796, 60.2298],
    [24.1652, 60.2428],
    [24.3095, 60.2965],
    [24.3455, 60.2488],
    [24.428, 60.3002],
    [24.5015, 60.2872],
    [24.4888, 60.3306],
    [24.5625, 60.3142],
    [24.5957, 60.3242],
    [24.6264, 60.3597],
    [24.666, 60.3638],
    [24.7436, 60.3441],
    [24.9291, 60.4523],
    [24.974, 60.5253],
    [24.9355, 60.5131],
    [24.8971, 60.562],
    [25.0388, 60.5806],
    [25.1508, 60.5167],
    [25.1312, 60.4938],
    [25.0385, 60.512],
    [25.057, 60.4897],
    [25.0612, 60.4485],
    [25.1221, 60.4474],
    [25.1188, 60.4583],
    [25.149, 60.4621],
    [25.1693, 60.5062],
    [25.2242, 60.5016],
    [25.3661, 60.4118],
    [25.3652, 60.3756],
    [25.5345, 60.2592],
  ],

  // If certain mode(s) only exist in limited number of areas, that are unwanted or unlikely places for transfers,
  // listing the areas as a list of polygons for selected mode key will remove the mode(s) from queries if no coordinates
  // in the query are within the polygon(s). This reduces complexity in finding routes for the query.
  modePolygons: {
    FERRY: [
      [
        [24.9793, 60.1513],
        [24.9695, 60.1485],
        [24.9871, 60.1365],
        [24.9913, 60.1379],
        [24.9952, 60.1457],
        [24.9916, 60.1488],
        [24.9793, 60.1513],
      ],
    ],
  },

  footer: {
    content: [
      { label: `© HSL ${YEAR}` },
      {},
      {
        name: 'footer-faq',
        nameEn: 'FAQ',
        href: 'https://www.hsl.fi/ohjeita-ja-tietoja/reittiopas',
      },
      {
        name: 'footer-feedback',
        nameEn: 'Submit feedback',
        href: 'https://www.hsl.fi/palaute',
        icon: 'icon-icon_speech-bubble',
      },
      {
        name: 'about-this-service',
        nameEn: 'About the service',
        route: '/tietoja-palvelusta',
        icon: 'icon-icon_info',
      },
      {
        name: 'footer-link-to-privacy-policy',
        nameEn: 'Privacy policy',
        href: 'https://www.hsl.fi/tietoa-sivustosta',
      },
    ],
  },

  defaultEndpoint: {
    address: 'Rautatieasema, Helsinki',
    lat: 60.1710688,
    lon: 24.9414841,
  },

  defaultOrigins: [
    {
      icon: 'icon-icon_rail',
      label: 'Rautatieasema, Helsinki',
      lat: 60.1710688,
      lon: 24.9414841,
    },
    {
      icon: 'icon-icon_airplane',
      label: 'Lentoasema, Vantaa',
      lat: 60.317429,
      lon: 24.9690395,
    },
    {
      icon: 'icon-icon_bus',
      label: 'Kampin bussiterminaali, Helsinki',
      lat: 60.16902,
      lon: 24.931702,
    },
  ],

  redirectReittiopasParams: true,
  queryMaxAgeDays: 14, // to drop too old route request times from entry url

  aboutThisService: {
    fi: [
      {
        header: 'Tietoja palvelusta',
        paragraphs: [
          'Tervetuloa Reittioppaaseen! Reittiopas kertoo, miten pääset nopeasti ja helposti perille joukkoliikenteellä Helsingissä, Espoossa, Vantaalla, Kauniaisissa, Keravalla, Kirkkonummella, Sipoossa, Siuntiossa ja Tuusulassa. Reittiopas etsii nopeat reitit myös kävelyyn ja pyöräilyyn sekä rajatusti myös yksityisautoiluun. Reittiopas-palvelun tarjoaa HSL Helsingin seudun liikenne, ja se perustuu Digitransit-palvelualustaan.',
        ],
      },
      {
        header: 'Tietolähteet',
        paragraphs: [
          'Kartat, tiedot kaduista, rakennuksista, pysäkkien sijainnista ynnä muusta tarjoaa © OpenStreetMap contributors. Osoitetiedot tuodaan Väestörekisterikeskuksen rakennustietorekisteristä. Joukkoliikenteen reitit ja aikataulut perustuvat HSL:n JORE-aineistoon.',
        ],
      },
    ],

    sv: [
      {
        header: 'Om tjänsten',
        paragraphs: [
          'Den här tjänsten erbjuds av HRT för reseplanering inom huvudstadsregionen (Helsingfors, Esbo, Vanda, Grankulla, Kervo, Kyrkslätt, Sibbo, Sjundeå och Tusby). Reseplaneraren täcker med vissa begränsningar kollektivtrafik, promenad, cykling samt privatbilism. Tjänsten baserar sig på Digitransit-plattformen.',
        ],
      },
      {
        header: 'Datakällor',
        paragraphs: [
          'Kartor, gator, byggnader, hållplatser och dylik information erbjuds av © OpenStreetMap contributors. Addressinformation hämtas från BRC:s byggnadsinformationsregister. Kollektivtrafikens rutter och tidtabeller är baserade på HRT:s JORE data.',
        ],
      },
    ],

    en: [
      {
        header: 'About this service',
        paragraphs: [
          'Welcome to the Journey Planner! The Journey Planner shows you how to get to your destination fast and easy by public transport in Helsinki, Espoo, Vantaa, Kauniainen, Kerava, Kirkkonummi, Sipoo, Siuntio and Tuusula. You can also use the planner to find fast walking and cycling routes, and to an extent, for driving directions. The Journey Planner is provided by HSL Helsinki Region Transport and it is based on the Digitransit service platform.',
        ],
      },
      {
        header: 'Data sources',
        paragraphs: [
          'Maps, streets, buildings, stop locations etc. are provided by © OpenStreetMap contributors. Address data is retrieved from the Building and Dwelling Register of the Finnish Population Register Center. Public transport routes and timetables are based on JORE data of HSL.',
        ],
      },
    ],
  },

  showTicketInformation: true,
  ticketLink: 'https://www.hsl.fi/liput-ja-hinnat',
  showTicketSelector: true,

  fares: [
    'HSL:hki',
    'HSL:esp',
    'HSL:van',
    'HSL:ker',
    'HSL:kir',
    'HSL:seu',
    'HSL:lse',
    'HSL:kse',
  ],

  // mapping (string, lang) from OTP fare identifiers to human readable form
  fareMapping: function mapHslFareId(fareId, lang) {
    const names = {
      fi: {
        esp: 'Espoo ja Kauniainen',
        hki: 'Helsinki',
        ker: 'Kerava-Sipoo-Tuusula',
        kir: 'Kirkkonummi-Siuntio',
        kse: 'Lähiseutu 3',
        lse: 'Lähiseutu 2',
        seu: 'Seutulippu',
        van: 'Vantaa',
      },
      en: {
        esp: 'Espoo and Kauniainen',
        hki: 'Helsinki',
        ker: 'Kerava-Sipoo-Tuusula',
        kir: 'Kirkkonummi-Siuntio',
        kse: 'Region three zone',
        lse: 'Region two zone',
        seu: 'Regional ticket',
        van: 'Vantaa',
      },
      sv: {
        esp: 'Esbo och Grankulla',
        hki: 'Helsingfors',
        ker: 'Kervo-Sibbo-Tusby',
        kir: 'Kyrkslätt-Sjundeå',
        kse: 'Närregion 3',
        lse: 'Närregion 2',
        seu: 'Regionbiljett',
        van: 'Vanda',
      },
    };
    const mappedLang = names[lang] ? lang : 'fi';
    if (fareId && fareId.substring) {
      const zone = fareId.substring(
        fareId.indexOf(':') + 1,
        fareId.indexOf(':') + 4,
      );
      return names[mappedLang][zone];
    }
    return '';
  },

  staticMessages: [
    {
      id: '2',
      content: {
        fi: [
          {
            type: 'text',
            content:
              'Käytämme evästeitä palveluidemme kehitykseen. Käyttämällä sivustoa hyväksyt evästeiden käytön. Lue lisää: ',
          },
          {
            type: 'a',
            content: 'Käyttöehdot',
            href: 'https://www.hsl.fi/kayttoehdot',
          },
          {
            type: 'a',
            content: 'Tietosuojaseloste',
            href: 'https://www.hsl.fi/tietosuojaseloste',
          },
        ],
        en: [
          {
            type: 'text',
            content:
              'We use cookies to improve our services. By using this site, you agree to its use of cookies. Read more: ',
          },
          {
            type: 'a',
            content: 'Terms of use',
            href: 'https://www.hsl.fi/en/terms-of-use',
          },
          {
            type: 'a',
            content: 'Privacy Statement',
            href: 'https://www.hsl.fi/en/description-of-the-file',
          },
        ],
        sv: [
          {
            type: 'text',
            content:
              'Vi använder cookies för att utveckla våra tjänster. Genom att använda webbplatsen godkänner du att vi använder cookies. Läs mer: ',
          },
          {
            type: 'a',
            content: 'Användarvillkor',
            href: 'https://www.hsl.fi/sv/anvandarvillkor',
          },
          {
            type: 'a',
            content: 'Dataskyddsbeskrivning',
            href: 'https://www.hsl.fi/sv/dataskyddsbeskrivning',
          },
        ],
      },
    },
  ],
  staticMessagesUrl: 'https://yleisviesti.hsldev.com/',
  mapLayers: {
    featureMapping: {
      ticketSales: {
        Palvelupiste: 'servicePoint',
        'HSL Automaatti MNL': 'ticketMachine',
        'HSL Automaatti KL': 'ticketMachine',
        Myyntipiste: 'salesPoint',
        'R-kioski': 'salesPoint',
      },
    },
  },
};
