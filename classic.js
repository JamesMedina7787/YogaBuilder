// Edit this:

parallaxscroll = true; //true or false
parallaxanimate = true; //true or false

cloudtypes = 10; // 1 to 10, depending on available pictures: e.g. c1.png - c4.png
clouddirectory = 'clouds8'; //here: cloud8 or cloud24, but you can make any other directory

clouddistance = 10; //typical: 5 to 50; higher values cause less clouds
cloudlayers = 3; //max 3

menuewrappertop = 170;

//=========================================================================
old = 0;
oldallerg = 0;
animat = 0;
menuleft = '200px';
menulocked=false;
h = $( '#wrapper ' ).height();
w = $( window ).width();

//Create Clouds
i =0;
while (i <= cloudlayers) {
	t= '';
	cloudy =0;
	zu = 0;

	while (cloudy < h) {
		/*Percents of width:*/
		cloudw = (i+3) + (Math.random() * 10);
		cloudw = Math.floor(0.1*(cloudw * cloudw));
		if(i==0) {cloudw *=3;}
		if (cloudw > 25)  {cloudw = (15 + (Math.random() * 10))}


		rest = w - cloudw;
		cloudr = Math.floor(Math.random() * 95);

		cloudy = cloudy + Math.floor(Math.random() * 40) + zu;
		if(i==0) {zu += clouddistance;} else  {zu += (2*clouddistance) + (i*3);}



		o = 0.3 + (Math.random() * 0.7);
		nr = 1 + Math.floor(Math.random() * cloudtypes);

		t += '<img src="'+TEMPLATE_DIR+'/'+clouddirectory+'/c'+nr+'.png" style="width:'+cloudw+'%; top:'+cloudy+'px; right:'+cloudr+'%;  opacity:'+o+';" />';

	}
  //console.log("t: " + t );
	$( '#clouds'+i ).html(t);
	$( '#clouds'+i ).height(h);
	i++;


}


function init() {
	moveclouds();
}





function moveclouds() {
	if (document.documentElement && document.documentElement.scrollTop)
		{	gescrolltes = document.documentElement.scrollTop}

	else if (document.body)					// IE
		{	gescrolltes = document.body.scrollTop}


	animat ++;
	if (parallaxanimate != true) {animat = 0};
	allerg = gescrolltes + animat;
	if (allerg != oldallerg) {
		f = (4-cloudlayers) * allerg;

		p = parseInt(f * 0.05);
		document.getElementById('clouds1').style.top = (0-p)+ "px";

		p = parseInt(f * 0.2);
		document.getElementById('clouds2').style.top = (0-p)+ "px";

		p = parseInt(f * 0.8);
		document.getElementById('clouds3').style.top = (0-p)+ "px";
	}


	if (gescrolltes != old) {
		//p = parseInt(0.33 * gescrolltes);
		p = gescrolltes;
		if (p > menuewrappertop) {
			if (menulocked==false) {
				document.getElementById('menuewrapper').style.position = "fixed";
				document.getElementById('menuewrapper').style.top = (0-menuewrappertop)+ "px";
			}
			menulocked=true;
		} else {
			if (menulocked==true) {
				document.getElementById('menuewrapper').style.position = "absolute";
				document.getElementById('menuewrapper').style.top = "0px";
			}
			menulocked=false;
		}
	}
	old = gescrolltes;
	oldallerg = allerg;
	temp = setTimeout('moveclouds()',20);

}




function getObj(name)
{
  if (document.getElementById)
  {
  	this.obj = document.getElementById(name);
	this.style = document.getElementById(name).style;
  }
  else if (document.all)
  {
	this.obj = document.all[name];
	this.style = document.all[name].style;
  }
  else if (document.layers)
  {
	this.obj = getObjNN4(document,name);
	this.style = this.obj;
  }
}


//Other stuff:



function showmenu() {
	mm = document.getElementById("mobilenav").style.display;
	if ( mm == 'block') {
		//Ist da -> muss meg:
		document.getElementById("mobilenav").style.display = 'none';
		document.getElementById("menuswitch").style.display = 'block';
		document.getElementById("wrapper").style.left = '0';
		document.getElementById("menuewrapper").style.left = '0';
	} else {
		//Ist NICHT da -> muss her:
		document.getElementById("mobilenav2").innerHTML = document.getElementById("nav").innerHTML;
		document.getElementById("mobilenav").style.display = 'block';
		document.getElementById("menuswitch").style.display = 'none';
		document.getElementById("wrapper").style.left = menuleft;
		document.getElementById("menuewrapper").style.left = menuleft;
	}
}

function menuremove() {
	mm = document.getElementById("mobilenav").style.display;
	if ( mm == 'block') {
		document.getElementById("mobilenav").style.display = 'none';
		document.getElementById("menuswitch").style.display = 'block';
	}
}
var poses = ["Yoga", "tadasana", "vrksasana", "utthita trikonasana", "parivrtta trikonasana", "utthita parsvakonasana", "parivrtta parsvakonasana", "virabhadrasana 1", "virabhadrasana 2", "virabhadrasana 3", "ardha chandrasana", "Utthita hasta padangusthasana", "parsvottanasana", "prasarita padottanasana 1", "prasarita padottanasana 2", "parighasana", "ustrasana", "utkatasana", "padangusthasana", "pada hastasana", "uttanasana", "urdhva prasarita ekapadasana", "ardha baddha padmottanasana", "garudasana", "vatayanasana", "salabhasana", "makarasana", "dhanurasana", "parsva dhanurasana", "chaturanga dandasana", "nakrasana", "bhujangasana 1", "urdhva mukha svanasana", "adho mukha svanasana", "dandasana", "paripurna navasana", "ardha navasana", "gomukhasana", "lolasana", "siddhasana", "virasana", "supta virasana", "paryankasana", "bhekasana", "baddha konasana", "padmasana", "sanmukhi mudra", "parvatasana", "tolasana", "simhasana 1", "simhasana 2", "matsyasana", "kukkutasana", "garbha pindasana", "goraksasana", "baddha padmasana", "yoga mudrasana", "supta vajrasana", "maha mudra", "janu sirsasana", "parivrtta janu sirsasana", "ardha baddha padma paschimottanasana", "triang mukhaikapada paschimottanasana", "krounchasana", "marichyasana 1", "marichyasana 2", "upavistha konasana", "paschimottanasana ugrasana brahmacharyasana", "parivrtta paschimottanasana", "ubhaya padangusthasana", "urdhva mukha paschimottanasana 1", "urdhva mukha paschimottanasana 2", "purvottanasana", "akarna dhanurasana", "salamba sirsasana 1", "urdhva dandasana", "salamba sirsasana 2", "salamba sirsasana 3", "baddha hasta sirsasana", "mukta hasta sirsasana", "parsva sirsasana", "parivrttaikapada sirsasana", "eka pada sirsasana", "parsvaika pada sirsasana", "urdhva padmasana in sirsasana", "parsva urdhva padmasana in sirsasana", "pindasana in sirsasana", "salamba sarvangasana 1", "salamba sarvangasana 2", "niralamba sarvangasana 1", "niralamba sarvangasana", "halasana", "karnapidasana", "supta konasana", "parsva halasana", "eka pada sarvangasana", "parsvaika sarvangasana", "parsva sarvangasana", "setu bandha sarvangasana uttana mayurasana", "eka pada setu bandha sarvangasana eka pada uttana mayurasana", "urdhva padmasana in sarvangasana", "parsva urdhva padmasana in sarvangasana", "uttana padma mayurasana", "pindasana in sarvangasana", "parsva pindasana in sarvangasana", "jathara parivartanasana", "urdhva prasarita padasana", "chakrasana", "supta padangusthasana", "anantasana", "uttana padasana", "setu bandhasana", "bharadvajasana 1", "bharadvajasana 2", "marichyasana 3", "marichyasana 4", "ardha matsyendrasana 1", "malasana 1", "malasana 2", "pasasana", "ardha matsyendrasana 2", "ardha matsyendrasana 3", "paripurna matsyendrasana", "astavakrasana", "eka hasta bhujasana", "dwi hasta bhujasana", "bhujapidasana", "mayurasana", "padma mayurasana", "hamsasana", "pincha mayurasana", "sayanasana", "adho mukha vrksasana", "kurmasana", "supta kurmasana", "eka pada sirsasana", "skandasana", "buddhasana", "kapilasana", "bhairavasana", "kala bhairavasana", "chakorasana", "durvasasana", "ruchikasana", "viranchyasana 1", "viranchyasana 2", "yoganidrasana", "dwi pada sirsasana", "tittibhasana", "vasisthasana", "kasyapasana", "visvamitrasana", "bakasana", "parsva bakasana", "urdhva kukkutasana", "parsva kukkutasana", "galavasana", "eka pada galavasana", "dwi pada koundinyasana", "eka pada koundinyasana 1", "eka pada koundinyasana 2", "eka pada bakasana 1", "eka pada bakasana 2", "yogadandasana", "supta bhekasana", "mulabhandasana", "vamadevasana 1", "vamadevasana 2", "kandasana", "hanumanasana", "somakonasana", "supta trivikramasana", "urdhva dhanurasana 1 & 2", "viparita chakrasana in U. Dh.", "eka pada urdhva dhanurasana", "kapotasana", "laghuvajrasana", "dwi pada viparita dandasana", "eka pada viparita dandasana 1", "eka pada viparita dandasana 2", "chakra bandhasana", "mandalasana", "vrschikasana 1", "vrschikasana 2", "eka pada rajakapotasana", "valakhilyasana", "eka pada rajakapotasana 2", "eka pada rajakapotasana 3", "eka pada rajakapotasana 4", "bhujangasana 2", "rajakapotasana", "padangustha dhanurasana", "gherandasana", "gheranddasana 2", "kapinjalasana", "sirsa padasana", "ganda bherundasana", "viparita salabhasana", "tiriang mukhottanasana", "natarajasana", "savasana mrtasana", "uddtyana bandha", "nauli", "ujjayi", "surya bhedana", "nadi sodhana", "bhastrika", "kapalabhati", "bhamari", "sitali", "sitakari", "sama vrtti", "visama vrtti", "viloma", "anuloma", "pratiloma", "sahita and kevala", "Sun Salutations", "Warm Up hands, wrist, and neck then Cat and Cow"];
var handles = ["Yoga", "Mountain", "Tree", "Triangle", "Revolved Triangle", "Side Angle", "Revolved Side Angle", "Warrior 1", "Warrior 2", "Warrior 3", "Half Moon", "Leg To Nose", "Side Stretch", "Spread", "Spread Reverse Prayer", "Kick Stand", "Camel", "Chair", "Standing Forward Big Toe Fold", "Hand Squish", "Standing Forward Bend", "Standing Split", "Half Bind Lotus Fold", "Eagle", "Horse Face", "Grasshopper", "Crocodile", "Bow Pose", "Sideways Bow", "Staff", "Crocodile Pounce", "Cobra", "Up Dog", "Down Dog", "Boat", "Rod", "Half Boat", "Cow Face", "Dangle", "Easy Seat", "Hero", "Recliner", "Couch", "Frog", "Bound Ankle", "Lotus", "Six Gate Close", "Hill", "Scales", "Lion", "Leg Crossed Lion", "Fish", "Rooster", "Fetus", "Cowherd", "Locked Lotus", "Psychic Union", "Firm Sit", "Great Seal", "Head To Knee", "Revolved Head To Knee", "Half Lotus Forward Bend", "Half Virasana Forward Bend", "Heron", "Sage Twist", "Sage Twist Two", "Wide Angle Seated Forward Bend", "Seated Forward Bend","Revolved Seated Forward Fold", "Upward Facing Intense West Stretch", "Double Toe Hold", "Double Toe Hold Reverse Roll", "Upward Plank", "Ear Bow", "Head Stand", "Headstand Staff", "Supported Headstand", "Ledge Headstand" ,"Bound Hand Headstand", "Headstand Freestyle" ,"Side Headstand", "Revolved Head To Knee", "Headstand Scizzor Split", "Side Leg Foot To Floor Headstand", "Headstand Floating Lotus", "Drifting Lotus", "Headstand Waterfall", "Shoulderstand Using Prop", "Shoulder Stand", "Shoulderstand Freestyle", "Shoulder stand Unsupported", "Plow", "Knee To Ear", "Plow Butterfly", "Side Shoulderstand", "Shoulder Stand One Leg Draw Bridge", "Shoulderstand Hookah", "Shoulderstand Trunk Twist", "Draw Bridge", "Shoulderstand Lotus", "Shoulderstand Lotus Bridge", "Shoulderstand Ramp", "Shoulderstand Embryo", "Shoulderstand Lateral Embryo", "Belly Twist", "Leg Raise", "Wheel", "Reclining Foot To Face", "Vishnu's Couch", "Raised Legs Pose", "Bridge", "Twisted Seated", "Zig Zag Bind", "Lateral Twisted Seat", "Swirl", "Sage Twist", "Half Spinal Twist", "Deep Squat", "Cabbage Patch", "Noose Twist", "Deeper Lateral Twist", "Leg Around The Hip Grip", "Gaze Away Twist", "Crooked Crow", "Elephant's Trunk", "Arm Sit","Shoulder Press", "Peacock", "Flying Lotus", "Swan", "Peacock Dance", "Elbowstand Peacock", "Handstand", "Tortoise", "Turtle", "Arrow", "Attacker", "Enlightened Attacker","Attacker Bind" ,"Reclined Attacker", "Lateral Attacker", "Canary Swing", "Destroyer", "Oak Roots","Rope Kink" ,"Twisted Rope", "Knot", "Tumble Weed", "Fire Fly", "Side Plank", "Side PLank Half Lotus Toe Grab", "Flying Warrior", "Crow", "Side Crow", "Lifting Lotus", "Sideways Lifting Lotus", "Flying Lotus", "Flying Pigeon", "Side Crow Stretch", "Soaring Ninja Star", "Flying Split", "One Legged Crow", "Weight Machine", "Crutch", "Reclining Frog", "Root Bond", "Leg Coil", "Leg Coil Bond", "Kanda Root", "Front Split", "Spread Split", "reclining split", "Upward Bow", "Upward Bow Backflip", "Half Upward Bow", "Dove", "Thunder Bolt", "Forearm Bow", "Forearm Bow divided", "Forearm Giraffe", "Forearm Wheel", "Forearm Lap Around The Head", "Forearmstand Scorpion", "Handstand Scorpion", "Pigeon Pose", "Spirited Pigeon", "King Pigeon Pose", "King Pigeon Toe Hold", "King Pigeon Split", "Curled Serpent", "Royal Pigeon", "Stomach Seat Bow", "Stomach Seat Half Bow", "Stomach Seat Half Lotus Bow", "Drinking Partridge", "Head Stomp", "Formidable Face", "Reverse Grasshopper", "Upside Down Face", "King Dancer", "Corpse", "Abdominal Lock", "Navel Fire", "Ocean Breath", "Right Nostril Breath", "Channel Cleanse Breath", "Bellows Breath", "Bellows Breath 2", "Black Bee Breath", "Cooling Breath", "Ice Breath", "Equal Breath", "Equal Ratio Breath", "Alternate Nostril Breath", "Alternate Passage Breath", "Against Order Breath", "Divine Free Breath", "Sun Salutations", "Warm Up hands, wrist, and neck then Cat and Cow"];
var gastric = new Array(
new Array("acid", 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 19, 20, 74, 87, 105, 35, 36, 106, 59, 60, 67, 64, 65, 114, 116, 120, 121, 146, 25, 27, 31, 127),
new Array("ankles", 3, 4, 5, 6, 7, 8, 9, 12, 13, 33, 37, 40, 41, 43, 55, 44, 108, 62, 63, 112, 113, 73, 25, 27, 16, 24, 23, 164, 117, 118),
new Array("appendix", 74, 87, 70, 67, 71, 72, 58, 59, 116, 119, 172, 177, 20),
new Array("anaemia", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 67, 20, 203, 205),
new Array("lower back arthritis", 3, 4, 5, 6, 7, 8, 9, 10, 18, 19, 20, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 64, 65, 114, 115, 112, 113, 116, 119, 15, 25, 27, 28, 110, 16, 111, 172, 177, 132, 130),
new Array ("arthritis of dorsal spine", 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 40, 42, 37, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 67, 70, 71, 31, 32, 130, 132, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 64, 114, 112, 113, 116, 121, 119, 16, 27, 172, 174, 178, 177, 175, 176),
new Array("shoulder arthritis", 3, 4, 5, 6, 7, 8, 9, 10, 12, 74, 87, 88, 91, 27, 32, 33, 40, 47, 22, 61, 67, 37, 55, 56, 130, 132, 149, 150, 151, 126, 152, 64, 65, 114, 116, 120, 112, 113, 119, 122, 16, 163, 172, 175, 181, 191),
new Array("arm and abs", 29, 30, 32, 33, 38, 48, 50, 127, 128, 129, 123, 126, 130, 132, 152, 153, 124, 125, 141, 149, 151, 148, 154, 155, 158, 159, 160, 161, 162, 156, 157, 173),
new Array("asthma", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 58, 59, 20, 67, 31, 189, 25, 27, 32, 33, 40, 41, 42, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 110, 111, 72, 116, 120, 199, 16, 172, 177, 203, 205),
new Array("backPain", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 108, 58, 59, 60, 67, 70, 71, 68, 64, 114, 116, 120, 119, 122, 117, 118, 33, 16, 25, 27, 28, 172, 173, 177, 181),
new Array("blood pressure", 91, 59, 61, 62, 67, 40, 39, 45, 200, 205),
new Array("blood pressurless", 87, 74, 91, 92, 67, 40, 39, 45, 44, 205),
new Array("brain", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 33, 67, 20, 133, 134, 146, 172, 173, 177, 178, 179, 182, 183, 195, 196, 197, 205, 204, 206, 209, 200),
new Array("forget", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 67, 70, 71, 205, 206),
new Array("breathlessness", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 67, 20, 33, 47, 172, 205, 200, 201),
new Array("bronchitus", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 67, 105, 70, 71, 59, 58, 31, 33, 37, 64, 114, 116, 117, 118, 119, 40, 41, 42, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 44, 66, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,148, 133, 134, 25, 27, 16, 172, 175, 177, 203, 205, 204),
new Array("broncho pneumonia", 87, 74, 91, 67, 20, 58, 33, 40, 39, 45, 55, 44, 205, 204, 200),
new Array("chest", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 27, 29, 31, 189, 32, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 67, 73, 69, 71, 70, 44, 126, 114, 116, 120, 121, 119, 130, 132, 152, 153, 158, 159, 160, 161, 162, 154, 155, 166, 167, 172, 173, 175, 176, 177, 178, 179, 180, 181, 182, 190, 184, 186, 187, 185, 191, 196, 197, 198, 199, 203, 205),
new Array("chills", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 116, 119, 172, 203, 204, 205, 206),
new Array("cocyx", 40, 41, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 74, 87, 98, 99, 25, 27, 28, 31, 189, 132, 130, 32, 24, 16, 172, 177, 175, 176, 182, 190, 184, 186, 187, 188, 185, 196, 197, 191, 198, 169, 165),
new Array("cold", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 67, 133, 134, 146, 203),
new Array("cough", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 67, 116, 119, 172, 203),
new Array("colic", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 105, 35, 36, 40, 41, 58, 201),
new Array("colitis", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 67, 40, 41, 105, 35, 36, 114, 116, 119, 58, 33, 59, 146, 25, 27, 172, 203, 205),
new Array("constipation", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20, 67, 105, 205),
new Array("coronary thrombosis", 203, 200),
new Array("legs", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 59, 61, 62, 63, 66, 69, 70, 71, 91, 105, 108, 109, 33, 25, 169, 170, 171),
new Array("arms", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 47, 91, 32, 33, 132, 37, 64, 114, 116, 55, 117, 119),
new Array("diabetes", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 58, 59, 67, 40, 41, 73, 25, 27, 35, 36, 105, 20, 64, 65, 114, 115, 119, 122, 172, 177, 127, 129, 31, 189, 201, 202, 205, 200),
new Array("diarrhoea", 205, 74, 87),
new Array("heart dilation", 205),
new Array("uterus", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 18, 19, 33, 34, 47, 51, 44, 66, 203, 205, 201),
new Array("spinal discs", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 19, 20, 67, 25, 26, 27, 16, 31, 32, 110, 111, 87, 99, 130, 132, 47, 51, 41, 42, 15, 174, 177, 203, 205),
new Array("dysentery", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104),
new Array("epilepsy", 74, 87, 91, 58, 67, 203, 205, 46, 200, 209),
new Array("eye", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 67, 46, 200, 205, 209),
new Array("fatigue", 87, 74, 91, 67, 71, 33, 20, 116, 119, 118, 177, 205),
new Array("flatFeet", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 74, 87, 40, 41, 42, 43, 164, 62, 63, 55, 44, 165, 108, 37, 163, 166, 167, 193),
new Array("gas", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 19, 20, 58, 59, 61, 62, 63, 64, 35, 36, 114, 116, 121, 118, 119, 122, 67, 70, 71, 105, 106, 107, 41, 56, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 133, 25, 27, 127, 172, 177, 181, 202, 201),
new Array("gout", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 40, 41, 42, 15, 23, 37, 20, 67, 69, 73, 63, 114, 116, 117, 118, 119, 163, 43, 164, 165, 166, 167, 168, 169),
new Array("badBreath", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 105, 67, 49, 50, 203, 205, 201, 209),
new Array("hamstrings", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 108, 109, 67, 72, 44, 66, 73, 133, 16, 25, 27, 172, 177, 181, 116, 118, 119, 169, 170, 171),
new Array("headache", 74, 87, 91, 67, 20, 200, 205),
new Array("heartDisease", 203, 205, 200),
new Array("footPain", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 33, 40, 41, 42, 43, 164, 44, 165, 116, 117, 118, 119, 122, 70, 71, 37, 130, 132, 166, 167, 163, 168),
new Array("umbilicalHernia", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 44, 66, 67, 70, 71, 73, 108, 58, 33, 18, 19, 20, 172, 177, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 35, 36, 201),
new Array("inguinalHernia", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 69, 70, 71, 63, 73, 108, 66, 44, 169, 170, 171, 163, 165, 146, 201),
new Array("hunchBack", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29, 25, 26, 27, 16, 18, 19, 20, 31, 32, 33, 58, 59, 66, 37, 47, 112, 113, 64, 65, 114, 115, 55, 42, 116, 120, 105, 108, 172, 130, 132, 177),
new Array("hydrocele", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 33, 130, 132, 105, 108, 44, 67, 66, 146, 163, 165, 166, 167, 168, 169, 170, 201, 202),
new Array("impotency", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 67, 20, 58, 44, 116, 119, 165, 168, 169, 146, 172, 177, 205, 201),
new Array("indigestion", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 105, 106, 35, 36, 58, 25, 27, 67, 146, 114, 116, 119, 122, 41, 201, 202, 206, 205),
new Array("insomnia", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 67, 20, 206, 205, 204, 200, 46),
new Array("kidneys", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 32, 33, 25, 27, 59, 60, 67, 68, 44, 66, 105, 36, 114, 116, 120, 121, 119, 122, 31, 189, 165, 168, 169, 146, 172, 177, 181, 175, 190, 182, 183, 191, 195, 196, 197, 198, 199, 205, 201),
new Array("knees", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 59, 60, 61, 62, 63, 64, 65, 114, 115, 73, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 40, 41, 42, 37, 39, 44, 112, 113, 116, 117, 118, 119, 133, 134, 146, 163, 43, 164, 165, 166, 167, 168, 169, 192, 193),
new Array("laborPain", 40, 44, 66, 201, 203, 200),
new Array("legs", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 25, 27, 31, 189, 29, 32, 33, 35, 36, 67, 70, 71, 73, 66, 105, 108, 63, 74, 87, 91, 130, 132, 109, 82, 149, 169, 170, 171),
new Array("lumbago", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 25, 27, 31, 72, 117, 118, 112, 113, 114, 116, 119, 71, 105, 47, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 172, 173, 177, 181),
new Array("lungs", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 40, 41, 42, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 172, 177, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216),
new Array("ovaries", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 67, 20, 33, 55, 56, 47, 51, 133, 134, 40, 41, 42, 44, 66, 70, 71, 146, 114, 116, 119, 172, 177, 200, 205, 201),
new Array("migraine", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 67, 20, 205, 209, 46, 40, 39, 45, 200, 44),
new Array("nasalCatarrha", 67, 20, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 203, 206, 204, 205, 33),
new Array("nervousDebility", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 20, 67, 205, 206, 200),
new Array("palpitation", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 67, 20, 91, 33, 177, 40, 41, 203, 205, 200),
new Array("piles", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 108, 51, 50, 25, 27, 172, 177, 203, 205, 200),
new Array("pneumonia", 74, 87, 91, 67, 20, 40, 47, 51, 203, 205, 200),
new Array("prostate", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 20, 25, 27, 33, 35, 36, 59, 40, 41, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 133, 134, 82, 146, 116, 120, 119, 122, 165, 168, 169, 170, 172, 173, 177, 181, 201, 205, 203),
new Array("sciatica", 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 108, 109, 110, 111, 67, 25, 27, 31, 32, 33, 70, 71, 72, 133, 165, 112, 113, 114, 116, 117, 118, 119, 169, 171, 16, 177, 122),
new Array("sterility", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 130, 132, 67, 44, 165, 168, 203, 205),
new Array("thrombosisOfLegs", 91, 87, 40, 39, 44, 203, 205, 200),
new Array("tonsillitus", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 40, 42, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 16, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 27, 32, 114, 116, 119, 122, 67, 146, 172, 177, 203, 205, 206, 201),
new Array("stomachCancer", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20, 58, 59, 41, 51, 47, 67, 201, 203, 205),
new Array("DuodenalUlcer", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 58, 59, 67, 133, 134, 146, 114, 116, 119, 177, 201, 203, 205),
new Array("urineStream", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 41, 51, 50, 58, 44, 201, 205, 204),
new Array("varicoseVeins", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 40, 41, 42, 43)
);

var poseGroups = new Array(
new Array("Warms", 218),
new Array("All Sun Sals", 217),
new Array("standingPoses A", 7, 8),
new Array("standingPoses B", 3, 4, 5, 6, 11, 12, 13, 14, 15),
new Array("standingPoses C", 9, 10),
new Array("sunSals", 20, 29, 32, 33),
new Array("coreWork", 30, 17, 34, 35, 36, 38, 72, 105, 106),
new Array("balancingPoses", 23, 123, 124, 125, 126, 127, 128, 129, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162),
new Array("backBends", 16, 25, 26, 27, 28, 31, 41, 42, 110, 111, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199),
new Array("meditative", 37, 39, 40, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 133, 134, 163, 164, 165, 166, 167, 168, 200),
new Array("hipOpeners", 24, 39, 73, 117, 109, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 169, 170, 171),
new Array ("twists", 64, 65, 116, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122),
new Array("forwardBends", 18, 19, 21, 22, 58, 59, 60, 61, 62, 63, 66, 67, 68, 69, 70, 71, 108, 146, 147),
new Array ("inversions", 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 107, 130, 131, 132),
new Array("breathing", 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216),
new Array("Savasana", 200)
);
var asanList = [];
var output = document.getElementById("uuu");
function randomize(nothList){
	var nork;
	if (nothList.length > 1) {
	var randomNumber = Math.random();
    var len = nothList.length;
    var asanaNumb = (randomNumber * len) + 1;
    var finishedNumb = Math.floor(asanaNumb);
    nork = nothList[finishedNumb];
	  }
	  else{
			  nork = nothList[0]
	  }
	  return nork;
	}
function matchList(asanaList, poseTypee) {
	var notherList = [];
	var notherPose;
  for (var ttt = 0; ttt < poseTypee.length; ttt++) {
    notherPose = poseTypee[ttt];
	//this goes through each pose Type of the class order
    for (var ooo = 0; ooo < asanaList.length; ooo++) {
        if (asanaList[ooo] === notherPose) {
          notherList.push(notherPose);
		  //this attempts to match each posetype to any of the values on the list then pushing it to the new list
        }
    }
  }
  if (notherList.length !== 0) {
	  return notherList;
  }
  else{
	  return false;
  }
}
function classSections(theSection) {
  var standing = [];
  var newNumb;
  for (var bb = 0; bb < poseGroups[theSection].length; bb++) {
    newNumb = poseGroups[theSection][bb];
    newPose = poses[newNumb];
    standing.push(newPose);
}
return standing;
}
function classSectionHandles(theSection) {
  var standing = [];
  var newNumb;
  for (var bb = 0; bb < poseGroups[theSection].length; bb++) {
    newNumb = poseGroups[theSection][bb];
    newPose = handles[newNumb];
    standing.push(newPose);
}
return standing;
}

function getConditionPoses(idName){
  var dd = document.getElementById(idName);
  var rr = dd.value;
  var poseNumber;
  var poseNames;
    for (var i = 0; i < gastric.length; i++) {
      if (gastric[i][0] === rr) {
        for (var u = 1; u < gastric[i].length; u++) {
            poseNumber = gastric[i][u];
            poseNames = poses[poseNumber];
            asanList.push(poseNames);
      }
    }
  }
return asanList;
}

function gastric1(classOrder) {
getConditionPoses("conditionsList");
var o = document.getElementById("conditionsList");
var firstValue;
firstValue = o.value;
var oo = document.getElementById("second");
var ooo = oo.value;
var oo2 = document.getElementById("third");
var ooo2 = oo2.value;
if (firstValue !== "random"){
oo.style.display="block";
}
if (ooo !== "none") {
	getConditionPoses("second");
	oo2.style.display="block";
}
if (ooo2 !== "none") {
	getConditionPoses("third");
}
//these getConditionPoses functions make one big list of all the yoga poses which are eligible to treat the specified conditions from the user's drop down lists
var standing = [];
standing = 0;
standing = classSections(classOrder);
// this for loop makes a list of all the poses for the pose types
var notherPoseList = [];
notherPoseList = 0;
notherPoseList = matchList(asanList, standing);
// this nested for loop cycles through the list created of eligible poses and looks for a match with the pose types
var bork;
if (notherPoseList) {
	bork = randomize(notherPoseList);
    return bork;
}
else{
	return false;
}
}
function getPoseNumb(asana) {
	var asanaDigit;
  for(var i = 0; i < poses.length; i++) {
    if(asana === poses[i]) {
      asanaDigit = i;
	  return asanaDigit;
      break;
    }
  }
}
function getHandleNumb(handle) {
	var asanaDigit;
  for(var i = 0; i < handles.length; i++) {
    if(handle === handles[i]) {
      asanaDigit = i;
	  return asanaDigit;
      break;
    }
  }
}

function randomClass() {
	var notherList = [];
	var wtf = [];
	var standing = [];
	var nork;
		for (var i = 0; i < poseGroups.length; i++) {
			standing.length = 0;
			standing = classSections(i);
			//this returns var standing = a list of the types of poses for the section numb
					  notherList.length = 0;
					  notherList = matchList(poses, standing);
					  nork = randomize(notherList);
					  if (typeof(nork) !== "undefined") {
					  wtf.push(nork);
					  }
				  //this makes a random pose based on standing
	}
	return wtf;
}
function randomHandles() {
	var notherList = [];
	var wtf = [];
	var standing = [];
	var nork;
		for (var i = 0; i < poseGroups.length; i++) {
			standing.length = 0;
			standing = classSectionHandles(i);
			//this returns var standing = a list of the types of poses for the section numb
					  notherList.length = 0;
					  notherList = matchList(handles, standing);
					  nork = randomize(notherList);
					  if (typeof(nork) !== "undefined") {
					  wtf.push(nork);
					  }
				  //this makes a random pose based on standing
	}
	return wtf;
}
function getCreatedList() {
	var createdList = [];
	var yogaClass = [];
	yogaClass = output.getElementsByTagName("li");
	var ok;
	if (yogaClass.length !== 0) {
	for (var t = 0; t < yogaClass.length; t++) {
		ok = yogaClass[t].innerHTML;
		createdList.push(ok);
	}
	return createdList;
	}
	else {
		return false;
	}
}
function poseBelongsTo(pose) {
	var poseNumber;
	poseNumber = getPoseNumb(pose);
	var answer;
	for (var i = 0; i < poseGroups.length; i++) {
		for (var k = 0; k < poseGroups[i].length; k++) {
			if (poseGroups[i][k] === poseNumber) {
				answer = i;
			}
		}
	}
	return answer;
}
function handleBelongsTo(pose) {
	var poseNumber;
	poseNumber = getHandleNumb(pose);
	var answer;
	for (var i = 0; i < poseGroups.length; i++) {
		for (var k = 0; k < poseGroups[i].length; k++) {
			if (poseGroups[i][k] === poseNumber) {
				answer = i;
			}
		}
	}
	return answer;
}
function openInUTube(poseName) {
	var youTub;
	youTub = window.open("https://www.youtube.com/results?search_query=" + poseName, "videos", "width=780,height=450,left=300,top=270");
}
function makeButtons(list){
	var asanaDigit
	var currentItem;
	var buttons = [];
    var video;
	var part;
	var part1;
	var part2;
	var part3;
	var end;
	var digit;
	var checkBox;
	var checkId;
	var checkValue;
	for(var i = 0; i < list.length; i++) {
	   currentItem = list[i];
	   digit = getHandleNumb(currentItem);
	   video = poses[digit];
	   asanaDigit = getHandleNumb(currentItem);
	   checkId = "chkPoseList" + i;
	   checkValue = "poseList" + i;
	   checkValue =
	   checkBox =  "<input type ='checkbox'" + " id=\"" + checkId + "\"" + "value =\"" + checkValue + "\"" + "/>";
	   part = "<li onClick='openInUTube(";
	   part1 = "\"" + video + "\"";
	   part2 = ");'>";
	   part3 = "</li>";
	   end =(part + part1 + part2 + currentItem + part3);
       buttons.push(end);
	}
	output.innerHTML = buttons;
}

function fillList() {
	var listToFix = [];
	listToFix = 0;
	var substituteValues = [];
	substituteValues = 0;
	substituteValues = randomHandles();
	var currentPose;
	var poseToSpliceType;
	if (listToFix) {
	for (var i = 0; i < listToFix.length; i++) {
	  currentPose = listToFix[i];
	  poseToSpliceType = handleBelongsTo(currentPose);
	  substituteValues.splice(poseToSpliceType, 1, currentPose);
      }
	}
  makeButtons(substituteValues);
  }

function makeHandles(listToSwitch) {
	var sanscrit;
	var asanaNumb;
	var newName;
	var handleList = [];
	for (var i = 0; i < listToSwitch.length; i++) {
		sanscrit = listToSwitch[i];
		asanaNumb = getPoseNumb(sanscrit);
		newName = handles[asanaNumb];
		handleList.push(newName);
	}
	makeButtons(handleList);
}
function makingFunctions() {
var ork;
var asanaDigit;
var orkList = [];
  for (var i = 0; i < poseGroups.length; i++) {
      ork = gastric1(i);
	  if (ork) {
      orkList.push(ork);
	  }
}
for (var p = asanList.length; p > 0; p--) {
	asanList.pop();
}
makeHandles(orkList);
fillList();
}
