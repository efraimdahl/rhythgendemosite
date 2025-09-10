// Example ABC files (easy to extend this list)
var abcFiles = [
	`X:1
%Achived     3 3 3 3 3 3 3 3 5 6 6 6 5 6 6 3 3 3 3 3 3 3 3 3 3 3 3 5 6
%syncopation 2 2 2 2 2 2 2 2 6 6 6 6 6 6 6 6 2 2 2 2 2 2 2 2 6 6 6 6 6 6 6 6
%%score 1 { ( 2 3 ) | ( 4 5 ) }
L:1/8
Q:1/4=95
M:4/4
K:A
V:1 treble nm="Voice"
V:2 treble nm="Piano
"V:3 treble
V:4 bass
V:5 bass
[V:1]"^Massig langsam" z8|[V:2]!mp! (C3 D/E/ DCB,A,|[V:4]!ped! [A,,,A,,]E,,C,D, E,F,D,E,!ped-up!|[V:5]x8|
[V:1]z8|[V:2]E3 F/G/ FE D2|[V:4]!ped! G,E,A,E,!ped-up! G,E,F,E,|[V:5]x8|
[V:1]z8|[V:2]C3 D/E/ DC B,>A,|[V:4]!ped! A,,,E,,C,D, E,F,D,E,!ped-up!|[V:5]x8|
[V:1]z8|[V:2]E3 F/G/ FE D2)|[V:4]!ped! G,E,A,E,!ped-up! G,E,F,E,|[V:5]x8|
[V:1]z2 A B c B A G|[V:2]!p! [E,C]E[CA][DB] [Ec][DB][CA][B,G]|[V:4]!ped! A,,,E,,C,E, A,E,A,E,!ped-up!|[V:5]x8|
[V:1]A3 F G4|[V:2][A,CA]C^DF [B,EG]A,B,G|[V:4]!ped! E,,B,,A,^D,!ped-up! E,,B,,G,B,,|[V:5]x8|
[V:1]z2 B c d c B A|[V:2][DB]B,[DB][Ec] [Fd][Ec][DB][CA]|[V:4]!ped! E,,B,,E,G, B,G,B,E,!ped-up!|[V:5]x8|
[V:1]G3 E E4|[V:2][B,G]3 E E4|[V:4]!ped! E,,B,,E,G, B,2 z2!ped-up!|[V:5]x8|
[V:1]E2 z E ^E2 E E|[V:2][A,E]4 [A,^E]4|[V:4][C,E,]4 [C,^E,]4|[V:5]x8|
[V:1]F2 F2 G3 G|[V:2][A,F]4 [DEG]4|[V:4][D,F,]4 [B,,G,]4|[V:5]x8|
[V:1]A4 ^A4|[V:2][EA]4 [E^A]4|[V:4][C,A,]4 [C,^A,]4|[V:5]x8|
[V:1]B3 B d3 G|[V:2][DB]4 [^EB]4|[V:4][D,B,]4 [C,B,]4|[V:5]x8|
[V:1]A3 G F2 c2|[V:2]A4 F4|[V:4][F,A,]4 [D,A,]4|[V:5]x8|
[V:1]c8|[V:2]F4 ^E4|[V:4][C,G,]8|[V:5]x8|
[V:1]F2 z2 z4|[V:2][A,F]4 [B,C^E]4|[V:4][F,,C,F,]4 [C,,C,]4|[V:5]x8|
[V:1]!p! c3 c c c B A|[V:2][A,CF]CFG ACGF|[V:4]!ped! F,,C,F,A, CA,CA,!ped-up!|[V:5]x8|
[V:1]G3 G G4|[V:2]^E^B,C^D EDC=B,|[V:4]!ped! C,,C,^E,F, G,F,E,C,!ped-up!|[V:5]x8|
[V:1]z2 A2 A3/2 A/ B c|[V:2][A,F]A,CF ACFA|[V:4]!ped! F,,C,F,A, CA,CA,!ped-up!|[V:5]x8|
[V:1]d3 d d4|[V:2]dFG^A BAGF|[V:4]!ped! F,,F,B,C DCB,F,!ped-up!|[V:5]x8|
[V:1]z2 d d d d c B|[V:2]dDFc BAGF|[V:4]!ped! B,,F,B,C DCB,F,!ped-up!|[V:5]x8|
[V:1]A3 A A4|[V:2]ACFG AGFC|[V:4]!ped! F,,C,F,G, A,G,F,C,!ped-up!|[V:5]x8|
[V:1]z2 G2 G G A B|[V:2]^E^B,C^D ECDE|[V:4]!ped! C,,C,^E,F, G,F,E,C,!ped-up!|[V:5]x8|
[V:1]c8|[V:2]FC^D^E FEFG|[V:4]!ped! F,,F,G,A, CB,A,G,!ped-up!|[V:5]x8|
[V:1]!mf! e3 e e3 d|[V:2][A,CA]CEA cAEC|[V:4]!ped! [E,,E,]8!ped-up!|[V:5]x8|
[V:1]c4 z2 z e|[V:2][A,CA]A,CE AECA,|[V:4]!ped! [A,,,A,,]8!ped-up!|[V:5]x8|
[V:1]e3 e e3 d|[V:2][A,CA]A,CE AECA,|[V:4]!ped! [E,,E,]8!ped-up!|[V:5]x8|
[V:1]c4 z2 z!mp! c|[V:2][A,CA]A,CE AECA,|[V:4]!ped! [A,,,A,,]8!ped-up!|[V:5]x8|
[V:1]"^dim." c3 B A2 G2|[V:2][CA]4 [B,G]4|[V:4]^D,4 =D,4|[V:5][F,,F,]4 [E,,E,]4|
[V:1]!pp! A8|][V:2][CA]8|][V:4][A,,E,]8|][V:5]x8|]`,

	`T: Random Jig
M: 6/8
Q: 1/4=100
L: 1/8
R: jig
K: D
|:DED F2A|d2A F2A|DED F2A|d3 d3:|
|:f2d f2a|g2e g2b|f2d f2a|d3 d3:|`
];

// Cursor control class
function CursorControl(paperId) {
	var self = this;
	self.onStart = function() {
		var svg = document.querySelector(`#${paperId} svg`);
		var cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
		cursor.setAttribute("class", "abcjs-cursor");
		cursor.setAttributeNS(null, 'x1', 0);
		cursor.setAttributeNS(null, 'y1', 0);
		cursor.setAttributeNS(null, 'x2', 0);
		cursor.setAttributeNS(null, 'y2', 0);
		svg.appendChild(cursor);
	};
	self.onEvent = function(ev) {
		var lastSelection = document.querySelectorAll(`#${paperId} svg .highlight`);
		for (var k = 0; k < lastSelection.length; k++)
			lastSelection[k].classList.remove("highlight");

		for (var i = 0; i < ev.elements.length; i++) {
			var note = ev.elements[i];
			for (var j = 0; j < note.length; j++) {
				note[j].classList.add("highlight");
			}
		}

		var cursor = document.querySelector(`#${paperId} svg .abcjs-cursor`);
		if (cursor) {
			cursor.setAttribute("x1", ev.left - 2);
			cursor.setAttribute("x2", ev.left - 2);
			cursor.setAttribute("y1", ev.top);
			cursor.setAttribute("y2", ev.top + ev.height);
		}
	};
	self.onFinished = function() {
		var els = document.querySelectorAll(`#${paperId} svg .highlight`);
		for (var i = 0; i < els.length; i++)
			els[i].classList.remove("highlight");

		var cursor = document.querySelector(`#${paperId} svg .abcjs-cursor`);
		if (cursor) {
			cursor.setAttribute("x1", 0);
			cursor.setAttribute("x2", 0);
			cursor.setAttribute("y1", 0);
			cursor.setAttribute("y2", 0);
		}
	};
}

// Load all ABC files
function load() {
	if (!ABCJS.synth.supportsAudio()) {
		document.querySelector("#main-container").innerHTML =
			"<div class='audio-error'>Audio is not supported in this browser.</div>";
		return;
	}

	abcFiles.forEach((abc, index) => {
		var paperId = `paper${index}`;
		var audioId = `audio${index}`;
		var downloadId = `download${index}`;

		var cursorControl = new CursorControl(paperId);

		var synthControl = new ABCJS.synth.SynthController();
		synthControl.load(`#${audioId}`, cursorControl, {
			displayLoop: true,
			displayRestart: true,
			displayPlay: true,
			displayProgress: true,
			displayWarp: true
		});

		var visualObj = ABCJS.renderAbc(paperId, abc, { add_classes: true, responsive: "resize", wrap: {
          minSpacing: 0.5,
          maxSpacing: 0.5,
          preferredMeasuresPerLine: 5
        },staffwidth:900})[0];

		var midiBuffer = new ABCJS.synth.CreateSynth();
		midiBuffer.init({ visualObj: visualObj }).then(function () {
			synthControl.setTune(visualObj, false).then(function () {
				console.log(`Audio for tune ${index} loaded.`);
			});
		});

		// Add download function
		document.getElementById(downloadId).addEventListener("click", function () {
			// Placeholder: use provided audio.download()
			console.log(`Downloading audio for tune ${index}`);
			audio.download();
		});
	});
}
