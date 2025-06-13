    const allFilterButtons = document.querySelectorAll(".filter-button, .vertical-filter-button");
    const cards = document.querySelectorAll(".restaurant-card");

    allFilterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-button.active")?.classList.remove("active");
        document.querySelector(".vertical-filter-button.active")?.classList.remove("active");

        btn.classList.add("active");

        const category = btn.dataset.category;
        cards.forEach(card => {
        card.style.display = (category === "all" || card.dataset.category.includes(category)) ? "block" : "none";
        });
    });
    });
    
    const startLatLng = [49.963977023968376, 16.974466658578336];//výchozí bod
    const startIcon = L.icon({
        iconUrl: 'vychozi_bod.png',
        iconSize: [35, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
        });

        const endIcon = L.icon({
        iconUrl: 'cilovy_bod.png',
        iconSize: [35, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
        });


    const map1 = L.map('map1');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map1);
    const bounds1 = L.latLngBounds([startLatLng, [49.965792201057205, 16.97573241815665]]);
    map1.fitBounds(bounds1, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map1);

    const geojsonRoute1 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974816688287007, 49.96409814518836],
              [16.97407120386589, 49.96512481412077],
              [16.974234404123365, 49.965235455065994],
              [16.97474356942837, 49.965380996346255],
              [16.97496131855266, 49.96549995738329],
              [16.975146256165715, 49.965716772709925],
              [16.97570405186758, 49.96573787857474],
              [16.97573241815665, 49.965792201057205]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute1, {
      style: {
        color: "#2f3b45",
        weight: 4
      }
    }).addTo(map1);

    L.marker(startLatLng, { icon: startIcon }).addTo(map1).bindPopup("Start");
    L.marker([49.965792201057205, 16.97573241815665], { icon: endIcon }).addTo(map1).bindPopup("Pizzeria Istria"); //souřadnice restaurace + název

    const map2 = L.map('map2');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map2);
    const bounds2 = L.latLngBounds([startLatLng, [49.96571682415065, 16.97150735500601]]);
    map2.fitBounds(bounds2, { padding: [25, 25] });
 
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map2);

    const geojsonRoute2 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974837760542414, 49.96407674161466],
              [16.97413528478765, 49.9650600679598],
              [16.973764165522653, 49.965091329450416],
              [16.97314563341152, 49.9651595362692],
              [16.972838693672657, 49.96537091300132],
              [16.971795118661674, 49.965223157609756],
              [16.971585459542354, 49.96565030355046],
              [16.97150735500601, 49.96571682415065] 
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute2, {
      style: {
        color: "#2f3b45",
        weight: 4
      }
    }).addTo(map2);

    L.marker(startLatLng, { icon: startIcon }).addTo(map2).bindPopup("Start");
    L.marker([49.96571682415065, 16.97150735500601], { icon: endIcon }).addTo(map2).bindPopup("Cakir's Burger");


    const map3 = L.map('map3');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map3);
    const bounds3 = L.latLngBounds([startLatLng, [49.96638335083531, 16.973027405050953]]);
    map3.fitBounds(bounds3, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map3);

    const geojsonRoute3 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.97483305672074, 49.96407323592874],
              [16.97413147838182, 49.965042460262254],
              [16.97398824430863, 49.965119322316355],
              [16.973845091242993, 49.9656209650758],
              [16.973836424924485, 49.96588269817025],
              [16.97352558228033, 49.96620153938272],
              [16.97314238840616, 49.96643636061839],
              [16.973027405050953, 49.96638335083531]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute3, {
      style: {
        color: "#2f3b45", 
        weight: 4
      }
    }).addTo(map3);

    L.marker(startLatLng, { icon: startIcon }).addTo(map3).bindPopup("Start");
    L.marker([49.96638335083531, 16.973027405050953], { icon: endIcon }).addTo(map3).bindPopup("Bistro J&J");

    const map4 = L.map('map4');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map4);
    const bounds4 = L.latLngBounds([startLatLng, [49.964280432703525, 16.98005109481759]]);
    map4.fitBounds(bounds4, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map4);

    const geojsonRoute4 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974826265311577, 49.96408874098597],
              [16.975329194029086, 49.9634441411753],
              [16.978385521519385, 49.96454103529334],
              [16.978750997795316, 49.96415480860736],
              [16.979686626313736, 49.96451146341485],
              [16.97987503661352, 49.96456553597267],
              [16.979985184173728, 49.96451892170231],
              [16.98005109481759, 49.964280432703525]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute4, {
      style: {
        color: "#314e7b", 
        weight: 4
      }
    }).addTo(map4); 

    L.marker(startLatLng, { icon: startIcon }).addTo(map4).bindPopup("Start");
    L.marker([49.964280432703525, 16.98005109481759], { icon: endIcon }).addTo(map4).bindPopup("PHOčko");

    const map5 = L.map('map5');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map5);
    const bounds5 = L.latLngBounds([startLatLng, [49.97054860372086, 16.974248772098605]]);
    map5.fitBounds(bounds5, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map5);
    
    const geojsonRoute5 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974848517484247, 49.96408083431771],
              [16.97409726055338, 49.96508931177871],
              [16.973959639173074, 49.96520924945469],
              [16.97383089659084, 49.96561760644386],
              [16.97383089659084, 49.965903168713425],
              [16.97364859370191, 49.9660956022862],
              [16.975075547618502, 49.96685231101739],
              [16.975204290218983, 49.96691513325851],
              [16.975079987035144, 49.96700079980769],
              [16.97498605586017, 49.96716946512595],
              [16.974883949674904, 49.96749785100246],
              [16.974898072804365, 49.967840887943794],
              [16.975049012382414, 49.96834916412956],
              [16.97472493518552, 49.9683814904611],
              [16.974787086777496, 49.96926667715175],
              [16.97489258395379, 49.96942124259937],
              [16.975025765935726, 49.96947549527354],
              [16.974737204974645, 49.96959827741523],
              [16.974888622444666, 49.9697424231299],
              [16.97407282076034, 49.97035277761063],
              [16.97415790746163, 49.970501564773286],
              [16.974248772098605, 49.97054860372086]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute5, {
      style: {
        color: "#314e7b", 
        weight: 4
      }
    }).addTo(map5); 

    L.marker(startLatLng, { icon: startIcon }).addTo(map5).bindPopup("Start");
    L.marker([49.97054860372086, 16.974248772098605], { icon: endIcon }).addTo(map5).bindPopup("Hatze restaurace");

    const map6 = L.map('map6');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map6);
    const bounds6 = L.latLngBounds([startLatLng, [49.966061087457035, 16.97695989772433]]);
    map6.fitBounds(bounds6, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map6);

    const geojsonRoute6 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974834283514213, 49.96407923964324],
              [16.974094087918104, 49.965108060312986],
              [16.97418533839911, 49.965221052359425],
              [16.974733746597423, 49.96538047262797],
              [16.974907122509308, 49.96545971338253],
              [16.975135348579727, 49.96571542708023],
              [16.977009066326787, 49.96579313497364],
              [16.9771087858592, 49.96580654593461],
              [16.97695989772433, 49.966061087457035]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute6, {
      style: {
        color: "#314e7b", 
        weight: 4
      }
    }).addTo(map6); 

    L.marker(startLatLng, { icon: startIcon }).addTo(map6).bindPopup("Start");
    L.marker([49.966061087457035, 16.97695989772433], { icon: endIcon }).addTo(map6).bindPopup("Můj sendvič");

    const map7 = L.map('map7');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map7);
    const bounds7 = L.latLngBounds([startLatLng, [49.96433499813746, 16.972900468888895]]);
    map7.fitBounds(bounds7, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map7);

    const geojsonRoute7 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974855857673987, 49.964067426520955],
              [16.974165883592462, 49.9650156826506],
              [16.973869972783774, 49.96497645098046],
              [16.97369321182606, 49.964584074715674],
              [16.97315010706967, 49.96420879412261],
              [16.972900468888895, 49.96433499813746]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute7, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map7); 

    L.marker(startLatLng, { icon: startIcon }).addTo(map7).bindPopup("Start");
    L.marker([49.96433499813746, 16.972900468888895], { icon: endIcon }).addTo(map7).bindPopup("Vosíme");

    const map8 = L.map('map8');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map8);
    const bounds8 = L.latLngBounds([startLatLng, [49.96738159848841, 16.984933692581173]]);
    map8.fitBounds(bounds8, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map8);

    const geojsonRoute8 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974851609843483, 49.964075709831604],
              [16.974175534909648, 49.96501083644176],
              [16.974053682078505, 49.965145978457],
              [16.974888351480985, 49.965449498766645],
              [16.975136258964056, 49.96571707715043],
              [16.97658778580808, 49.96577809690092],
              [16.97762308675297, 49.96581064895096],
              [16.977980241603603, 49.96574307892382],
              [16.979395194430793, 49.96594580467362],
              [16.979384930265553, 49.96601332494092],
              [16.980682717152064, 49.966326644390165],
              [16.98181271192209, 49.96674707472272],
              [16.98294397411439, 49.96715971581037],
              [16.983696986739517, 49.96739488688448],
              [16.983853674920027, 49.96721960741766],
              [16.984098925985393, 49.96715825945378],
              [16.98441570861152, 49.9672458993783],
              [16.98469904918926, 49.96719184848345],
              [16.984746889035563, 49.967327577392695],
              [16.984933692581173, 49.96738159848841]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute8, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map8); 

    L.marker(startLatLng, { icon: startIcon }).addTo(map8).bindPopup("Start");
    L.marker([49.96738159848841, 16.984933692581173], { icon: endIcon }).addTo(map8).bindPopup("Pizzerie Palermo");

    const map9 = L.map('map9');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map9);
    const bounds9 = L.latLngBounds([startLatLng, [49.9648730582568, 16.974479729728472]]);
    map9.fitBounds(bounds9, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map9);

    const geojsonRoute9 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974835186648562, 49.96407966222185],
              [16.974328025290646, 49.964806381751146],
              [16.974479729728472, 49.9648730582568]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute9, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map9); 

    L.marker(startLatLng, { icon: startIcon }).addTo(map9).bindPopup("Start");
    L.marker([49.9648730582568, 16.974479729728472], { icon: endIcon }).addTo(map9).bindPopup("Vojtova pizza");

    const map10 = L.map('map10');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map10);
    const bounds10 = L.latLngBounds([startLatLng, [49.96636169610501, 16.97044508780298]]);
    map10.fitBounds(bounds10, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map10);

    const geojsonRoute10 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974837933744396, 49.964091487941914],
              [16.974170837359026, 49.965000748276765],
              [16.973862614644048, 49.96497787143264],
              [16.973718149602377, 49.9650753623979],
              [16.973184687212097, 49.96512111598224],
              [16.972817191349634, 49.96535750857814],
              [16.972682837858656, 49.96579216332739],
              [16.9719985427825, 49.96601395206906],
              [16.971824673558444, 49.96633422000218],
              [16.971453225672747, 49.96634947080335],
              [16.97116476082428, 49.96628592576806],
              [16.970587166573978, 49.966181875821235],
              [16.97049084503368, 49.96630936256338],
              [16.97044508780298, 49.96636169610501]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute10, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map10);

    L.marker(startLatLng, { icon: startIcon }).addTo(map10).bindPopup("Start");
    L.marker([49.96636169610501, 16.97044508780298], { icon: endIcon }).addTo(map10).bindPopup("Pikola");

    const map11 = L.map('map11');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map11);
    const bounds11 = L.latLngBounds([startLatLng, [49.96569760858843, 16.97156334753326]]);
    map11.fitBounds(bounds11, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map11);
    
    const geojsonRoute11 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974837760542414, 49.96407674161466],
              [16.97413528478765, 49.9650600679598],
              [16.973764165522653, 49.965091329450416],
              [16.97314563341152, 49.9651595362692],
              [16.972838693672657, 49.96537091300132],
              [16.971795118661674, 49.965223157609756],
              [16.971585459542354, 49.96565030355046],
              [16.97156334753326, 49.96569760858843]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute11, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map11); 

    L.marker(startLatLng, { icon: startIcon }).addTo(map11).bindPopup("Start");
    L.marker([49.96569760858843, 16.97156334753326], { icon: endIcon }).addTo(map11).bindPopup("Úzká");

    const map12 = L.map('map12');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map12);
    const bounds12 = L.latLngBounds([startLatLng, [49.965368012658, 16.97163228538239]]);
    map12.fitBounds(bounds12, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map12);

    const geojsonRoute12 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.97483442951119, 49.96408313539777],
              [16.974191079040253, 49.96500839625705],
              [16.9738611307489, 49.96498070732537],
              [16.97372964224749, 49.965073343271285],
              [16.97319161030606, 49.96510682823774],
              [16.973022553661536, 49.96519342248769],
              [16.9728910651601, 49.96532230666412],
              [16.972685457185378, 49.96534662798311],
              [16.97181512853382, 49.965215730055235],
              [16.97174572709781, 49.965352121524035],
              [16.97163228538239, 49.965368012658]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute12, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map12);

    L.marker(startLatLng, { icon: startIcon }).addTo(map12).bindPopup("Start");
    L.marker([49.965368012658, 16.97163228538239], { icon: endIcon }).addTo(map12).bindPopup("Speed Pizza");

    const map13 = L.map('map13');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map13);
    const bounds13 = L.latLngBounds([startLatLng, [49.96583219555506, 16.977264941900554]]);
    map13.fitBounds(bounds13, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map13);

    const geojsonRoute13 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974831987707148, 49.96408403412724],
              [16.974089764996563, 49.9651027975859],
              [16.97415001129616, 49.96521629036272],
              [16.97475613602245, 49.9653860492717],
              [16.97490890342374, 49.9654635561067],
              [16.975291634745133, 49.96572085954844],
              [16.97697224680229, 49.96578873811731],
              [16.97710884750967, 49.96580562870338],
              [16.977264941900554, 49.96583219555506]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute13, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map13);

    L.marker(startLatLng, { icon: startIcon }).addTo(map13).bindPopup("Start");
    L.marker([49.96583219555506, 16.977264941900554], { icon: endIcon }).addTo(map13).bindPopup("Pizza pasáž (JVS)");

    const map14 = L.map('map14');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map14);
    const bounds14 = L.latLngBounds([startLatLng, [49.957851946132344, 16.973219770248033]]);
    map14.fitBounds(bounds14, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map14);

    const geojsonRoute14 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974833274204798, 49.96408815928655],
              [16.975123412362734, 49.963578796729365],
              [16.975029341646575, 49.96340902304232],
              [16.97511296009401, 49.96330648617368],
              [16.97471519340067, 49.96317331926963],
              [16.973869096362364, 49.962487185474856],
              [16.97378266570402, 49.962203968527405],
              [16.973904386863154, 49.961860285721286],
              [16.97375544156236, 49.96184347587234],
              [16.974060784652295, 49.96105511963532],
              [16.974619717414242, 49.95989736290875],
              [16.97477337855102, 49.95949566722484],
              [16.974771815500645, 49.959316131506995],
              [16.974743940067327, 49.95922232729242],
              [16.974949789420037, 49.958989195437255],
              [16.974936923835855, 49.95888711367806],
              [16.97420336011959, 49.95862294057309],
              [16.97420336011959, 49.95857879680048],
              [16.973724068635164, 49.95841217343238],
              [16.973632065774837, 49.958286865833344],
              [16.973219770248033, 49.957851946132344]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute14, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map14);

    L.marker(startLatLng, { icon: startIcon }).addTo(map14).bindPopup("Start");
    L.marker([49.957851946132344, 16.973219770248033], { icon: endIcon }).addTo(map14).bindPopup("UFO burger");
  
    const map15 = L.map('map15');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map15);
    const bounds15 = L.latLngBounds([startLatLng, [49.965923108041466, 16.977268026559468]]);
    map15.fitBounds(bounds15, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map15);

    const geojsonRoute15 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974831987707148, 49.96408403412724],
              [16.974089764996563, 49.9651027975859],
              [16.97415001129616, 49.96521629036272],
              [16.97475613602245, 49.9653860492717],
              [16.97490890342374, 49.9654635561067],
              [16.975291634745133, 49.96572085954844],
              [16.97697224680229, 49.96578873811731],
              [16.97710884750967, 49.96580562870338],
              [16.977268026559468, 49.965923108041466]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute15, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map15);

    L.marker(startLatLng, { icon: startIcon }).addTo(map15).bindPopup("Start");
    L.marker([49.965923108041466, 16.977268026559468], { icon: endIcon }).addTo(map15).bindPopup("Sushi bar (Dakota SUSHI)");

    const map16 = L.map('map16');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map16);
    const bounds16 = L.latLngBounds([startLatLng, [49.96585999277659, 16.98289561257995]]);
    map16.fitBounds(bounds16, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map16);

    const geojsonRoute16 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974840436535374, 49.9640800654349],
              [16.974070208346546, 49.965119041817445],
              [16.974186185898617, 49.96522077308279],
              [16.974743300165358, 49.96538787473335],
              [16.97491990234758, 49.965470954819466],
              [16.975418078652723, 49.9657269762223],
              [16.976997253741814, 49.965792862595066],
              [16.977629858573835, 49.96579794909212],
              [16.978061728314344, 49.96575187739933],
              [16.97939329584969, 49.96592747731728],
              [16.97991002125275, 49.96592381429505],
              [16.98111314910713, 49.96605469715578],
              [16.982348549597532, 49.96609841753934],
              [16.983280035037666, 49.96613910935588],
              [16.983417099418205, 49.96587461266384],
              [16.98289561257995, 49.96585999277659]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute16, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map16);

    L.marker(startLatLng, { icon: startIcon }).addTo(map16).bindPopup("Start");
    L.marker([49.96585999277659, 16.98289561257995], { icon: endIcon }).addTo(map16).bindPopup("Red rat");

    const map17 = L.map('map17');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map17);
    const bounds17 = L.latLngBounds([startLatLng, [49.965163502893816, 16.970945495877466]]);
    map17.fitBounds(bounds17, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map17);
    
    const geojsonRoute17 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974848325532065, 49.9640802632473],
              [16.974178261206532, 49.96500432407831],
              [16.97387093002331, 49.964973434624625],
              [16.97371086169875, 49.965072280805686],
              [16.973202693410173, 49.965106359810164],
              [16.97283773762973, 49.96534523707308],
              [16.97112968356285, 49.965079649288526],
              [16.970945495877466, 49.965163502893816]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute17, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map17);

    L.marker(startLatLng, { icon: startIcon }).addTo(map17).bindPopup("Start");
    L.marker([49.965163502893816, 16.970945495877466], { icon: endIcon }).addTo(map17).bindPopup("Mr. India");

    const map18 = L.map('map18');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map18);
    const bounds18 = L.latLngBounds([startLatLng, [49.965645671508504, 16.97084628723853]]);
    map18.fitBounds(bounds18, { padding: [20, 20], maxZoom: 17 });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map18);

    const geojsonRoute18 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.97480978678297, 49.964090225408086],
              [16.974162350946898, 49.965017133239854],
              [16.973875750589002, 49.964983888491986],
              [16.973687815926894, 49.96507153368651],
              [16.973119313576575, 49.96516220096143],
              [16.972828014851842, 49.96536771281842],
              [16.97270115895472, 49.96578780050277],
              [16.97200989094489, 49.96601359862913],
              [16.97084628723853, 49.965645671508504]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute18, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map18);

    L.marker(startLatLng, { icon: startIcon }).addTo(map18).bindPopup("Start");
    L.marker([49.965645671508504, 16.97084628723853], { icon: endIcon }).addTo(map18).bindPopup("Šumpercana");

    const map19 = L.map('map19');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map19);
    const bounds19 = L.latLngBounds([startLatLng, [49.96017310179614, 16.989395731391244]]);
    map19.fitBounds(bounds19, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map19);

    const geojsonRoute19 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974812328584278, 49.964100972875144],
              [16.975283465130218, 49.96346158492162],
              [16.976750075171196, 49.96396950993932],
              [16.977565821168156, 49.963062493063376],
              [16.97789902418836, 49.96278618882096],
              [16.978639138109685, 49.96248731956558],
              [16.97907672371082, 49.962473418624796],
              [16.981813825098556, 49.96338690542069],
              [16.982742328527394, 49.962463087947725],
              [16.986468805687025, 49.96355996282219],
              [16.98750845804588, 49.96203319498221],
              [16.988509403239618, 49.96044259923059],
              [16.989083519305865, 49.96025762910904],
              [16.989395731391244, 49.96017310179614]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute19, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map19);


    L.marker(startLatLng, { icon: startIcon }).addTo(map19).bindPopup("Start");
    L.marker([49.96017310179614, 16.989395731391244], { icon: endIcon }).addTo(map19).bindPopup("Benátky");
  
    const map20 = L.map('map20');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map20);
    const bounds20 = L.latLngBounds([startLatLng, [49.96727499270005, 16.972331782383314]]);
    map20.fitBounds(bounds20, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map20);

    const geojsonRoute20 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.97484605398259, 49.96408250390644],
              [16.974062519930726, 49.965124760650326],
              [16.973837534147492, 49.96560180802348],
              [16.973812535726495, 49.96590465025045],
              [16.973371730131532, 49.96631431851225],
              [16.97278591558046, 49.9666750070613],
              [16.972340110417576, 49.96709308031464],
              [16.972331782383314, 49.96727499270005]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute20, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map20);

    L.marker(startLatLng, { icon: startIcon }).addTo(map20).bindPopup("Start");
    L.marker([49.96727499270005, 16.972331782383314], { icon: endIcon }).addTo(map20).bindPopup("İstanbul Kebab");
   
    const map21 = L.map('map21');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map21);
    const bounds21 = L.latLngBounds([startLatLng, [49.964638299880065, 16.975305804827542]]);
    map21.fitBounds(bounds21, { padding: [20, 20] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map21);

    const geojsonRoute21 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974853984187945, 49.96407946608045],
              [16.974610717426287, 49.96440545249871],
              [16.974926304968108, 49.96454195044416],
              [16.975305804827542, 49.964638299880065]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute21, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map21);

    L.marker(startLatLng, { icon: startIcon }).addTo(map21).bindPopup("Start");
    L.marker([49.964638299880065, 16.975305804827542], { icon: endIcon }).addTo(map21).bindPopup("Kurdish Kebab");
   
    const map22 = L.map('map22');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map22);
    const bounds22 = L.latLngBounds([startLatLng, [49.964058575943355, 16.977312097018523]]);
    map22.fitBounds(bounds22, { padding: [20, 20],maxZoom: 17.5 });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors'
    }).addTo(map22);

    const geojsonRoute22 = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [16.974466658578336, 49.963977023968376],
              [16.974837596226394, 49.96408761052629],
              [16.97533531553671, 49.96343342914136],
              [16.977042811282075, 49.9640962108829],
              [16.977312097018523, 49.964058575943355]
            ]
          }
        }
      ]
    };

    L.geoJSON(geojsonRoute22, {
      style: {
        color: "#314e7b",
        weight: 4
      }
    }).addTo(map22);

    L.marker(startLatLng, { icon: startIcon }).addTo(map22).bindPopup("Start");
    L.marker([49.964058575943355, 16.977312097018523], { icon: endIcon }).addTo(map22).bindPopup("Restaurace");
   
    function toggleFullscreen(button, mapId) {
      const container = button.parentElement;
      const isFullscreen = container.classList.toggle("fullscreen");

      document.querySelectorAll(".leaflet-control-container").forEach(el => {
        const parentMap = el.closest(".card-map");
        el.style.display = (parentMap !== container && isFullscreen) ? "none" : "";
      });

      document.querySelectorAll(".fullscreen-button").forEach(btn => {
        const parentMap = btn.closest(".card-map");
        btn.style.display = (parentMap !== container && isFullscreen) ? "none" : "";
      });

     
    }
    
    setTimeout(() => {
        [
            map1, map2, map3, map4, map5, map6, map7, map8, map9, map10,
            map11, map12, map13, map14, map15, map16, map17, map18, map19, map20, map21, map22
        ].forEach(m => m.invalidateSize());
        }, 300);

    const schedule = [
      { start: "09:00", end: "10:10", name: "Registrace" },
      { start: "10:15", end: "10:25", name: "Přivítání" },
      { start: "10:30", end: "11:00", name: "Icebreakery" },
      { start: "11:05", end: "11:30", name: "Chvály" },
      { start: "11:35", end: "12:35", name: "Semináře" },
      { start: "12:40", end: "14:40", name: "Oběd" },
      { start: "14:40", end: "16:30", name: "Workshopy" },
      { start: "16:35", end: "16:50", name: "Chvály" },
      { start: "16:55", end: "17:50", name: "Slovo" },
      { start: "17:55", end: "18:05", name: "Chvály" },
      { start: "18:10", end: "20:30", name: "Závěrečný program" }
    ];

    function getCurrentAndNextBlock(schedule) {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      let current = null;
      let next = null;

      for (let i = 0; i < schedule.length; i++) {
        const block = schedule[i];
        const [startH, startM] = block.start.split(":").map(Number);
        const [endH, endM] = block.end.split(":").map(Number);
        const startMin = startH * 60 + startM;
        const endMin = endH * 60 + endM;

        if (currentMinutes >= startMin && currentMinutes < endMin) {
          current = block;
          next = schedule[i + 1] || null;
          break;
        } else if (currentMinutes < startMin) {
          // mezera mezi bloky
          current = null;
          next = block;
          break;
        }
      }

      return { current, next };
    }

    function updateProgramBar() {
      const { current, next } = getCurrentAndNextBlock(schedule);
      const bar = document.getElementById("program-bar");

      if (current && next) {
        bar.textContent = `${current.start} - ${current.end} ${current.name} → ${next.start} - ${next.end} ${next.name}`;
      } else if (current && !next) {
        bar.textContent = `${current.start} - ${current.end} ${current.name}`;
      } else if (!current && next) {
        bar.textContent = `→ ${next.start} - ${next.end} ${next.name}`;
      } else {
        bar.textContent = "Program ukončen.";
      }
    }
    document.getElementById("program-bar").addEventListener("click", () => {
      alert("Zde se později zobrazí celý program. (Plakát)");
    });
    updateProgramBar();
    setInterval(updateProgramBar, 60000); // aktualizace každou minutu
