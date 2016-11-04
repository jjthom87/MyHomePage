$(document).ready(function(){
	$('#top-image').on('click', function(e){
		e.preventDefault();
		$('#aboutMeModal').modal();

		var storyHeaders = ['Early Years', 'Post College', 'Current']
		var storyArray = [
		'I was born and grew up in Manalapan, New Jersey. After graduating from Manalapan High School, I earned my BS in Finance at Towson University.',
		'After college, I worked as a Custody Associate at Pershing LLC. After 5 years at that position, I moved internally to the International Settlements Department, where I currently work.',
		'In May 2016, I enrolled in Rutgers Coding Bootcamp and learned the fine art of programming. In October 2016, I graduated from the bootcamp. I am looking forward to the switch from Finance to Programming.'
		];

		var storyNumber = 0;

		function createStory(index){
				var storyDiv = $('<div>', {
					id: 'story'
				});

				var storyHeadersP = $('<p>');
				storyHeadersP.append(storyHeaders[index]);
				storyDiv.append(storyHeadersP);

				var storyP = $('<p>');
				storyP.append(storyArray[index]);
				storyDiv.append(storyP);

				return storyDiv;
		};

		function displayStory(){
			$('#story').remove();
			console.log(storyNumber);
			$('.modal-body').append(createStory(storyNumber));
		}


		displayStory();

		$('#rightAboutButton').on('click', function(){
			storyNumber++;
			displayStory();
		});

		$('#leftAboutButton').on('click', function(){
			if (storyNumber === 2){
				$('#rightAboutButton').hide();
			}
			storyNumber--;
			displayStory();
		});

	});
});