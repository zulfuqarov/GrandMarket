const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 40.41055243332035,
  lng: 49.864271825038664,
};

const zoomLevel = 10;

const markers = [
  {
    id: 1,
    position: {
      lat: 40.37732014588537,
      lng: 49.85450178823395,
    },
    content: {
      title: "Grandmart | 28 May",
      tel: "+994 051-255-51-55",
      street: "129A Nizami Gəncəvi küçəsi, Bakı 1022",
      open: "7 AM / Close 11PM",
    },
  },
  {
    id: 2,
    position: {
      lat: 40.377819689190105,
      lng: 49.83127518834208,
    },
    content: {
      title: "Grandmart | 5 mərtəbə",
      tel: "+994 051-255-51-55",
      street: "Shamil Azizbeyov, Baku 1009",
      open: "24/7",
    },
  },
  {
    id: 3,
    position: {
      lat: 40.39931869754326,
      lng: 49.85974938221239,
    },
    content: {
      title: "Grandmart | Abu Arena",
      tel: "+994 051-255-51-55",
      street: "20 Aşıq Alı küçəsi, Bakı 1069",
      open: "7 AM / Close 11:30PM",
    },
  },
  {
    id: 4,
    position: {
      lat: 40.37666954585941,
      lng: 49.84167650000001,
    },
    content: {
      title: "Grandmart | AF Mall",
      tel: "+994 051-255-51-55",
      street: "Nəsimi rayonu, Səməd Vurğun küçəsi 34, Baku 1102",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 5,
    position: {
      lat: 40.38317332455038,
      lng: 49.809859888342544,
    },
    content: {
      title: "Grandmart | Almaz Plaza",
      tel: "+994 051-255-51-55",
      street: "14 Hasan Majidov St, Baku 1122",
      open: "24/7",
    },
  },
  {
    id: 6,
    position: {
      lat: 40.36828970694241,
      lng: 49.8212183993882,
    },
    content: {
      title: "Grandmart | Altes Plaza",
      tel: "+994 051-255-51-55",
      street: "507/512 İsmayıl Qutqaşınlı küçəsi, Baku 1073",
      open: "24/7",
    },
  },
  {
    id: 7,
    position: {
      lat: 40.375469291621805,
      lng: 49.929856900152416,
    },
    content: {
      title: "Grandmart | Asiman",
      tel: "+994 051-255-51-55",
      street: "17A İlqar Abbasov küçəsi, Baku 1000",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 8,
    position: {
      lat: 40.45190763843764,
      lng: 49.93191610138619,
    },
    content: {
      title: "Grandmart | Kürdəxanı",
      tel: "+994 051-255-51-55",
      street: "Kürdəxanı qəsəbəsi, Bakı 1059",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 9,
    position: {
      lat: 40.41789312639089,
      lng: 50.10765917655719,
    },
    content: {
      title: "Grandmart | Binə 1",
      tel: "+994 051-255-51-55",
      street: "küçəsi, Binə qəsəbəsi, Sabunçu rayonu, Əli İsazdə, Baku 1132",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 10,
    position: {
      lat: 40.380314402813845,
      lng: 49.84267645902667,
    },
    content: {
      title: "Grandmart | Jalə Plaza",
      tel: "+994 051-255-51-55",
      street: "küçəsi 140, Shamil Azizbeyov, Baku 1014",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 11,
    position: {
      lat: 40.37176729947186,
      lng: 49.953948670734526,
    },
    content: {
      title: "Grandmart | Həzi Aslanov",
      tel: "+994 051-255-51-55",
      street: "Khudu Mammadov, Qaraçuxur",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 12,
    position: {
      lat: 40.393849288394264,
      lng: 49.86240139281092,
    },
    content: {
      title: "Grandmart | HƏM",
      tel: "+994 051-255-51-55",
      street: "ev 53A Gülarə Qədirbəyova küçəsi, Baku 1100",
      open: "24/7",
    },
  },
  {
    id: 13,
    position: {
      lat: 40.46266483053224,
      lng: 50.083375900188116,
    },
    content: {
      title: "Grandmart | Binə 2",
      tel: "+994 051-255-51-55",
      street: "Binə qəsəbəsi, Xəzər rayonu, Mərdəkan şosesi 74, Bakı 1044",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 14,
    position: {
      lat: 40.417893636896,
      lng: 50.10765548850041,
    },
    content: {
      title: "Grandmart | Binə 1",
      tel: "+994 051-255-51-55",
      street: "küçəsi, Binə qəsəbəsi, Sabunçu rayonu, Əli İsazdə, Baku 1132",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 15,
    position: {
      lat: 40.42156733618134,
      lng: 49.95721705441594,
    },
    content: {
      title: "Grandmart | Bakıxanov 2",
      tel: "+994 051-255-51-55",
      street: "Sabunçu rayonu, Bakıxanov qəs, Əli Kərim küçəsi 157A, Baku 1132",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 16,
    position: {
      lat: 40.42731555823432,
      lng: 49.93923792347598,
    },
    content: {
      title: "Grandmart | Bakıxanov 1",
      tel: "+994 051-255-51-55",
      street:
        "Sabunçu rayonu, Bakıxanov qəsəbəsi, Bəşir Bünyadov küçəsi 134, Baku 1132",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 17,
    position: {
      lat: 40.37546826748826,
      lng: 49.92985621014772,
    },
    content: {
      title: "Grandmart | Asiman",
      tel: "+994 051-255-51-55",
      street: "17A İlqar Abbasov küçəsi, Baku 1000",
      open: "7 AM / Close 2 AM",
    },
  },
  {
    id: 18,
    position: {
      lat: 40.541016375460764,
      lng: 49.7833896943475,
    },
    content: {
      title: "Grandmart | Novxanı",
      tel: "+994 051-255-51-55",
      street: "Novxanı kəndi, Bakı 0119",
      open: "24/7",
    },
  },
  {
    id: 19,
    position: {
      lat: 40.398820525380145,
      lng: 49.949922294347694,
    },
    content: {
      title: "Grandmart | Xalqlar Dostluğu",
      tel: "+994 051-255-51-55",
      street: "Bəhruz Nuriyev küçəsi, 2379 82-ci məhəllə, Bakı 4453",
      open: "7 AM / Close 11:50 PM",
    },
  },
  {
    id: 20,
    position: {
      lat: 40.34697812262664,
      lng: 49.75097217068701,
    },
    content: {
      title: "Grandmart Ekspress | Qobu 2",
      tel: "+994 051-255-51-55",
      street: "Park 1, Qaradağ rayonu, Qobu qəsəbəsi, Qobu, Baku 0117",
      open: "7 AM / Close 11:50 PM",
    },
  },
  {
    id: 21,
    position: {
      lat: 40.45401774488643,
      lng: 49.73907068849363,
    },
    content: {
      title: "Grandmart | Xırdalan",
      tel: "+994 051-255-51-55",
      street: "54B Mehdi Hüseynzadə küçəsi, Xırdalan 0100",
      open: "24/7",
    },
  },
  {
    id: 22,
    position: {
      lat: 40.43505044015732,
      lng: 49.8392678293959,
    },
    content: {
      title: "Grandmart | Palma",
      tel: "+994 051-255-51-55",
      street: "22/24 Zahid Gambarov St, Baku 1054",
      open: "24/7",
    },
  },
  {
    id: 23,
    position: {
      lat: 40.419397037007194,
      lng: 49.94399662961381,
    },
    content: {
      title: "Grandmart | Qara Qarayev",
      tel: "+994 051-255-51-55",
      street: "74 Məmmədli Şərifli küçəsi, Bakı 1001",
      open: "7 AM / Close 11:50 PM",
    },
  },
  {
    id: 24,
    position: {
      lat: 40.45800093347988,
      lng: 49.98430678357912,
    },
    content: {
      title: "Grandmart | Ramana",
      tel: "+994 051-255-51-55",
      street: "Sabunçu rayonu, Ramana qəsəbəsi, Baku 1128",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 25,
    position: {
      lat: 40.5791066699431,
      lng: 49.69336090014101,
    },
    content: {
      title: "Grandmart | Sumqayıt",
      tel: "+994 051-255-51-55",
      street: "küçəsi 6 Samad Vurghun, Sumqayit 5001",
      open: "7 AM / Close 2 PM",
    },
  },
  {
    id: 26,
    position: {
      lat: 40.55742863634516,
      lng: 49.58776741127744,
    },
    content: {
      title: "Grandmart | Stansiya Sumqayıt",
      tel: "+994 051-255-51-55",
      street: "HH4Q+X4C, Sumqayit",
      open: "7 AM / Close 2 PM",
    },
  },
  {
    id: 27,
    position: {
      lat: 40.416221657895726,
      lng: 49.83383635907079,
    },
    content: {
      title: "Grandmart | Varovski",
      tel: "+994 051-255-51-55",
      street: "26/01 Jafar Khandan St, Baku 1130",
      open: "7 AM / Close 11:30 PM",
    },
  },
  {
    id: 28,
    position: {
      lat: 40.49106910996117,
      lng: 49.954650800165865,
    },
    content: {
      title: "Grandmart | Zabrat",
      tel: "+994 051-255-51-55",
      street: "Montin küçəsi 21 Zabrat şossesi, Baku 1104",
      open: "7 AM / Close 11:50 PM",
    },
  },
  {
    id: 28,
    position: {
      lat: 40.49106910996117,
      lng: 49.954650800165865,
    },
    content: {
      title: "Grandmart | Zabrat",
      tel: "+994 051-255-51-55",
      street: "Montin küçəsi 21 Zabrat şossesi, Baku 1104",
      open: "7 AM / Close 11:50 PM",
    },
  },
  {
    id: 29,
    position: {
      lat: 40.40731607480115,
      lng: 49.93573864574474,
    },
    content: {
      title: "Grandmart | Neftçilər",
      tel: "+994 051-255-51-55",
      street:
        "Nizami rayonu, Rüstəm Rüstəmov küçəsi 72 E 2561 məhəllə, Bakı 1001",
      open: "7 AM / Close 11:30 PM",
    },
  },
  {
    id: 30,
    position: {
      lat: 40.34697710053251,
      lng: 49.75096948852701,
    },
    content: {
      title: "Grandmart Ekspress | Qobu 2",
      tel: "+994 051-255-51-55",
      street: "Park 1, Qaradağ rayonu, Qobu qəsəbəsi, Qobu, Baku 0117",
      open: "7 AM / Close 11 PM",
    },
  },
  {
    id: 31,
    position: {
      lat: 40.41801733292082,
      lng: 49.74327123041469,
    },
    content: {
      title: "Grandmart Hocasən",
      tel: "+994 051-255-51-55",
      street: "Montin küçəsi 21 Zabrat şossesi, Baku 1104",
      open: "7 AM / Close 11:50 PM",
    },
  },
  {
    id: 31,
    position: {
      lat: 40.41801733292082,
      lng: 49.74327123041469,
    },
    content: {
      title: "Grandmart Hocasən",
      tel: "+994 051-255-51-55",
      street: "Montin küçəsi 21 Zabrat şossesi, Baku 1104",
      open: "7 AM / Close 11:50 PM",
    },
  },
];

const FilterMarkers = (Search) => {
  const FilteringSearchMarker = markers.filter((oneFilter) =>
    oneFilter.content.title.toLowerCase().includes(Search.toLowerCase())
  );
  return FilteringSearchMarker;
};

export default markers;
export { containerStyle, center, zoomLevel, FilterMarkers };
