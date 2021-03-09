define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
			category1 : {
				name : 'Black people', //Will appear in the data and in the default feedback message.
				title : {
					media : {word : 'Black people'}, //Name of the category presented in the task.
					css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Tyron'},
					{word: 'Malik'},
					{word: 'Terrell'},
					{word: 'Jazmin'},
					{word: 'Tiara'},
					{word: 'Shanice'}
				],
				//Stimulus css (style)
				stimulusCss : {color:'#336600','font-size':'2.3em'}
			},
			category2 :	{
				name : 'White people', //Will appear in the data and in the default feedback message.
				title : {
					media : {word : 'White people'}, //Name of the category presented in the task.
					css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Jake'},
					{word: 'Connor'},
					{word: 'Bradley'},
					{word: 'Allison'},
					{word: 'Emma'},
					{word: 'Emily'}
				],
				//Stimulus css
				stimulusCss : {color:'#336600','font-size':'2.3em'}
			},
			attribute1 :
			{
				name : 'Bad words',
				title : {
					media : {word : 'Bad words'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'awful'},
					{word: 'failure'},
					{word: 'agony'},
					{word: 'hurt'},
					{word: 'horrible'},
					{word: 'terrible'},
					{word: 'nasty'},
					{word: 'evil'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Good words',
				title : {
					media : {word : 'Good words'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'laughter'},
					{word: 'happy'},
					{word: 'glorious'},
					{word: 'joy'},
					{word: 'wonderful'},
					{word: 'peace'},
					{word: 'pleasure'},
					{word: 'love'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
