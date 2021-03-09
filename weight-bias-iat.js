define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
			category1 : {
				name : 'Overweight people', //Will appear in the data and in the default feedback message.
				title : {
					media : {word : 'Overweight people'}, //Name of the category presented in the task.
					css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Fat'},
					{word: 'Large'},
					{word: 'Obese'},
					{word: 'Jazmin'},
					{word: 'Tiara'},
					{word: 'Shanice'}
				],
				//Stimulus css (style)
				stimulusCss : {color:'#336600','font-size':'2.3em'}
			},
			category2 :	{
				name : 'Thin people', //Will appear in the data and in the default feedback message.
				title : {
					media : {word : 'Thin people'}, //Name of the category presented in the task.
					css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Skinny'},
					{word: 'Slim'},
					{word: 'Thin'},
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
					{word: 'lazy'},
					{word: 'slow'},
					{word: 'sluggish'},
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
					{word: 'determined'},
					{word: 'eager'},
					{word: 'motivated'},
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
