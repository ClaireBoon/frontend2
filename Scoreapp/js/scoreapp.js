var SCOREAPP = SCOREAPP || {}; //scoreapp is een bestaand object (met waarde) of leeg object (geen waarde). Bestaande objecten kunnen niet overgeschreven worden. Voorkomt conflicten.


//self invoking anonymous function: alle objecten hierbinnen kunnen niet vanuit buiten aangeroepen worden en voorkomt dus conflicten
(function() {

SCOREAPP.game = {
        title: "Pool A - Score: Boomsquad vs. Burning Snow",
		game: [
		     { score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
		    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
		    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
		    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
		    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
		    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
		    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
		    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
		    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
		    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
		    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
		    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
		    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
		    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
		    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
		    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
		    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
		    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
		    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
		    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
		    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
		    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
		    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		    ]

};

SCOREAPP.ranking = {
		title: "Pool A - Ranking",
		ranking: [
		    { team: "Chasing", Win: "2", Lost: "2", Sw: "7", Sl: "9", Pw: "35", Pl: "39"},
		    { team: "Boomsquad", Win: "2", Lost: "2", Sw: "9", Sl: "8", Pw: "36", Pl: "34"},
		    { team: "Burning Snow", Win: "3", Lost: "1", Sw: "11", Sl: "4", Pw: "36", Pl: "23"},
		    { team: "Beast Amsterdam", Win: "2", Lost: "2", Sw: "6", Sl: "8", Pw: "30", Pl: "34"},
		    { team: "Amsterdam Money Gang", Win: "1", Lost: "3", Sw: "6", Sl: "10", Pw: "30", Pl: "37"}
		    ]
};

SCOREAPP.schedule = {
		title:'Schedule',
		schedule: [
		    { date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
		    { date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
		    { date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
		    { date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
		    { date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
		    { date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
		    { date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
		    { date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
		    { date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
		    { date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
		    ]
};

//zorgt dat de router geinitialiseerd wordt. (startpunt)
SCOREAPP.controller = {
		init: function () {
			//initialiseert router
			SCOREAPP.router.init();
}
};

//router

SCOREAPP.router = {
		init: function () {

			//initialiseert de volgende gegevens:
			routie({
				"/game": function() {
			    	SCOREAPP.state.render('game');
				},
			    "/ranking": function() {
			    	SCOREAPP.state.render('ranking'); // Hij pakt hier het object state met de methode rendert. Hij rendert dan case ranking. //
			    },

			    "/schedule": function() {
			    	SCOREAPP.state.render('schedule');
			    },
			  
			});

		},

		//hier verandert hij de inhoud en de functie van de states
		change: function () {
			//maakt variabelen aan
            var route = window.location.hash.slice(2), // pakt gedeelte na # en /?
                sections = qwery('section'), // hier pakt hij alle sections in de html
                section = qwery('[data-route=' + route + ']')[0];  // data-route is bv game + uitkomst van route en dan alleen die (0) er kunnen meerdere pages zijn met dezelfde naam.


            // Laat de active section zien en verwijdert de anderen: display none.
            if (section) {
            	for (var i=0; i < sections.length; i++){ 
            		sections[i].classList.remove('active'); // verwijder de andere sections
            	}
            	section.classList.add('active'); //als section = true, voeg class active toe. Dit doet hij 3 keer, omdat er 3 sections zijn.
            }

            // Default route
            if (!route) {
            	sections[0].classList.add('active'); // geeft een standaard: hij pakt de eerste section.
            }

		}
	};

		
	// hier verandert hij van state
	SCOREAPP.state = {
		render: function (route) {
			var data;
			switch (route){
				case 'game': 
				data = SCOREAPP.game;
				break;

				case 'ranking': 
				data = SCOREAPP.ranking;
				break;

				case 'schedule': 
				data = SCOREAPP.schedule;
				break;

				default : 
				data = SCOREAPP.game;
			}

			Transparency.render(qwery('[data-route='+route+']')[0], data);//rendert de template (script naar DOM) qwery selecteert: dataroute game (de eerste) uit DOM en het object game uit namespace
			SCOREAPP.router.change(); //verandert van section. zegt tegen router dat hij verandert is qua inhoud en functie.

		}
	}
		
	

 //DOM ready
 domready(function(){
 		// start meteen de applicatie als dom geladen is.
 		SCOREAPP.controller.init();
 	});

})();