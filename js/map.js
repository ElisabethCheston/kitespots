function initialize() {
    var mapOptions = {
        zoom: 6,
        center: new google.maps.LatLng (63.2130515, 18.4892165), 
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions); 

        //  Array of markers
            var markers = [
        //Kalix//
            {coords: {lat: 65.8108770, lng: 23.6116663}, content:'BREVIKEN', windDirection: 'S/SW'},  // Breviken SSV //
            {coords: {lat: 65.8130515, lng: 23.4892165}, content:'BODÖN', windDirection: 'N/NW'},  // Bodön NNV //
        //Luleå//
            {coords: {lat: 65.6230793, lng: 22.0222872}, content:'STORSAND', windDirection: 'S/SW'},      // Storsand SSW //
            {coords: {lat: 65.5456349, lng: 22.1564902}, content:'LULVIKSBADET', windDirection: 'NW'},  // Lulviksbadet NW //
            {coords: {lat: 65.5189811, lng: 22.1522248}, content:'LULHÄLLAN', windDirection: 'S/SW'}, // Lulhällan SSW //
            {coords: {lat: 65.4982979, lng: 22.3689945}, content:'KLUBBVIKEN', windDirection: 'S'},  // Klubbviken S //
        //Skellefteå//
            {coords: {lat: 64.7742422, lng: 21.1834173}, content:'STORSNÄCK', windDirection: 'N/NW'},     // Storsnäck NNW //
            {coords: {lat: 64.7408877, lng: 21.2183383}, content:'SILLSKATAN', windDirection: 'S/SW'},// Sillskatan SW//
            {coords: {lat: 64.5184790, lng: 21.5452258}, content:'VÅNÖREN', windDirection: 'S/SW'},   // Vånören SSW //
            {coords: {lat: 64.4348443, lng: 21.6102720}, content:'BJURÖKLUBB EAST', windDirection: 'SE'}, // Bjuröklubb SE //
            {coords: {lat: 64.4362105, lng: 21.5805984}, content:'BJURÖKLUBB WEST', windDirection: 'SW'}, // Bjuröklubb SW //
        //Umeå//
            {coords: {lat: 63.6678316, lng: 20.0246587}, content:'LILLIS', windDirection: ' S/SE'},        // Lillis SSE //
            {coords: {lat: 63.6504034, lng: 19.9964010}, content:'LÄNKEBO', windDirection: ' NE/E'},       // Länkebo NEE //
            {coords: {lat: 63.4897141, lng: 19.4738929}, content:'STORÄNGET', windDirection: ' N/NE'}, // Storänget NNE //
            {coords: {lat: 63.4573565, lng: 19.2647473}, content:'SALUSAND', windDirection: ' SW'},      // Salusand SW //
        //Örnsköldsvik//
            {coords: {lat: 62.9903104, lng: 18.5276622}, content:'STORSANDEN', windDirection: 'N/NE/NW'},  // Storsanden NNE NW //
            {coords: {lat: 63.2505607, lng: 18.6855082}, content:'NYÄNGET', windDirection: 'S/SE'},       // Nyänget SSE//
            {coords: {lat: 63.2150045, lng: 18.8268965}, content:'GULLVIK', windDirection: 'S'},       // Gullvik S//
            {coords: {lat: 63.2067795, lng: 18.8098370}, content:'VANNVIKEN', windDirection: 'S/SE'},     // Vannviken SSE//
            {coords: {lat: 63.2206414, lng: 18.9595582}, content:'STUBBSAND', windDirection: 'S/SW'},     // Stubbsand SSW//
        //Härnösand//
            {coords: {lat: 62.5759766, lng: 17.9129405 },  content:'SMITINGE', windDirection: 'S/SE'},        // Smitingen SSE//
            {coords: {lat: 62.5990367, lng: 18.0325180 },  content:'SVARTVIK', windDirection: 'S/SE'},        // Svartvik SSE//
            {coords: {lat: 62.5847226, lng: 17.9239516 },  content:'YTTREFÄLLE', windDirection: 'S/SE'},      // Ytterfälle SSE //
            {coords: {lat: 62.6448072, lng: 17.9683284 },  content:'SÄLSTEN', windDirection: 'NE/NW'},         // Sälsten NW NE//
        //Sundsvall//
            {coords: {lat: 62.4511973, lng: 17.5340607 },  content:'MYCKELÄNG', windDirection: 'NV'},    // Myckeläng NW //
            {coords: {lat: 62.4490114, lng: 17.5004908 },  content:'STORNÄSET', windDirection: 'S'},     // Stornäset S //
            {coords: {lat: 62.5095594, lng: 17.4745280 },  content:'SMACKEN', windDirection: 'S/SW'},     // Smackken SSW //
            {coords: {lat: 62.5102920, lng: 17.4833562 },  content:'GULLFIBER', windDirection: 'S/SW'},   // Gullfiber SSW//
            {coords: {lat: 62.0768640, lng: 17.4581468 },  content:'DYRÅSAND', windDirection: 'E'},        // Dyråsand E//
            {coords: {lat: 62.0268011, lng: 17.4232861 },  content:'SÖRFJÄRDEN', windDirection: 'S/SE'},      // Sörfjärden SSE//
            {coords: {lat: 62.0181316, lng: 17.4144492 },  content:'VARPSAND', windDirection: 'NE'},        // Varpsand NE//
            {coords: {lat: 61.9938701, lng: 17.3965579 },  content:'HÅRTE', windDirection: 'S/SE'},           // Hårte SSE//
            {coords: {lat: 61.9201011, lng: 16.7183359 },  content:'FÖNEBO', windDirection: 'S/SE'},          // Fönebo SSE //
            {coords: {lat: 61.8149679, lng: 16.8746091 },  content:'HALLSBO', windDirection: 'NE'},         // Hallsbo NE //
        //Hudiksvall//
            {coords: {lat: 61.7184406, lng: 17.1726866 },  content:'MALNBADET', windDirection: 'S/SW'},       // Malnbaden SSW//
            {coords: {lat: 61.7011666, lng: 17.5090105 },  content:'SÖRSUNDET', windDirection: 'N/NE'},       // Sörsundet NNE //
            {coords: {lat: 61.6215421, lng: 17.4670460 },  content:'TÅNGVIK', windDirection: 'S/SE'},         // Tångvik SSO//
            {coords: {lat: 61.6224418, lng: 17.4454898 },  content:'HÖLICK SOUTH', windDirection: 'S/SE'},    // Hölick SOUTH SSE  //
            {coords: {lat: 61.6297878, lng: 17.4326722 },  content:'HÖLICK WEST', windDirection: 'S/SW'},     // Hölick WEST SSW //
        //Söderhamn//
            {coords: {lat: 61.4187314, lng: 17.1798377 },  content:'SNÄCKEN', windDirection: 'S/SE'},     // Snäcken SSE//
            {coords: {lat: 61.4169583, lng: 17.1525610 },  content:'KRÅKNÄS', windDirection: 'S/SW'},     // Kråknäs SSW//
            {coords: {lat: 61.2468373, lng: 17.1947394 },  content:'STENÖ HAVSBAD', windDirection: 'S/SE'},   // Stenö Havsbad SSE //
            {coords: {lat: 61.2406976, lng: 17.2613011 },  content:'ORSUNDET', windDirection: 'S/SW'},        // Orsundet SSW NNE//
            {coords: {lat: 61.2352256, lng: 17.2766953 },  content:'ENSKÄR', windDirection: 'S/SE'},          // Enskär SSE //
            ];
            
                //  Loop through markers
        for (var i = 0; i < markers.length;i++){
        //  Add marker      
            addMarker(markers[i]);
        }

}