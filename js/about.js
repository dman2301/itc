let mapId = 0;

const mapSources = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.0115079010634!2d35.24009571744384!3d31.79743629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1503298de208345f%3A0x213b89eb41efcbf0!2z15HXmdeqINeU15fXldec15nXnSDXlNeT16HXlCDXlNeoINeU16bXldek15nXnSwg15HXmdeqINeU15fXldec15nXnSDXqdecINem16TXldefINeZ16jXldep15zXmdedINeV16HXkdeZ15HXqteU!5e0!3m2!1sen!2sil!4v1633275825737!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27128.29886669041!2d35.13432789330728!3d31.796731771061427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d6ef90670629%3A0x69762a21d65be083!2sMevaseret%20Zion!5e0!3m2!1sen!2sil!4v1633276171417!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.7410428458!2d34.72703360820195!3d32.088057580990416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1633276195702!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155797.26233392887!2d16.761238309497337!3d52.4006548472028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444d2ece10ab7%3A0xa4ea31980334bfd1!2zUG96bmHFhCwgUG9sYW5k!5e0!3m2!1sen!2sil!4v1633276214352!5m2!1sen!2sil"
];

function onMapNavigation(next = true) {
    // if (id === 0 && !next) {
    //   return;
    // }
    const mapsIframe = document.getElementById('map-embed');

    if (next) {
        // next button
        if (mapId < mapSources.length - 1)
            mapId++;
        else
            mapId = 0;
    } else {
        // prev button
        if (mapId) {
            mapId--;
        } else {
            mapId = mapSources.length - 1;
        }
    }
    mapsIframe.src = mapSources[mapId];


}