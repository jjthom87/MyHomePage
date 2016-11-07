$(document).ready(function(){
	//about me section for modal when you click on my picture
	//---------------------------------------------------------------------------------------------------------------------------
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

				var storyHeadersP = $('<p>', {
					id: 'storyHeaderText'
				});
				storyHeadersP.append(storyHeaders[index]);
				storyDiv.append(storyHeadersP);

				var storyP = $('<p>', {
					id: 'storyText'
				});
				storyP.append(storyArray[index]);
				storyDiv.append(storyP);

				return storyDiv;
		};

		function displayStory(){
			$('#story').remove();
			if (storyNumber == 0){
				$('#leftAboutButton').hide();
			} else if (storyNumber == 2){
				$('#rightAboutButton').hide();
			} else {
				$('#leftAboutButton').show();
				$('#rightAboutButton').show();
			}
			$('.modal-body').append(createStory(storyNumber));
		}

		displayStory();

		$('#rightAboutButton').on('click', function(){
			storyNumber++;
			displayStory();
		});

		$('#leftAboutButton').on('click', function(){
			storyNumber--;
			displayStory();
		});
	});

	$('#buboCarousel').hide();
	$('#jobTrollCarousel').hide();
	$('#friendFinderCarousel').hide();
	$('#closeBuboCarousel').hide();
	$('#closeTrollCarousel').hide();
	$('#closeFriendCarousel').hide();

	$('#buboButton').on('click', function(){
		$('#buboButton').hide();
		$('#closeBuboCarousel').show();

		$('#buboCarousel').show();

		$('#jobTrollCarousel').hide();
		$('#friendFinderCarousel').hide();

		$('#buboCarousel').carousel();
		$('.item1').click(function(){
			$('#buboCarousel').carousel(1);
		});
		$('.item2').click(function(){
			$('#buboCarousel').carousel(2);
		});
		$('.item3').click(function(){
			$('#buboCarousel').carousel(3);
		});
		$('.right').click(function(){
			$('#buboCarousel').carousel('prev');
		});
		$('.left').click(function(){
			$('#buboCarousel').carousel('next');
		});
	});

	$('#closeBuboCarousel').on('click', function(){
		$('#closeBuboCarousel').hide();
		$('#buboCarousel').hide();
		$('#buboButton').show();
	});

	$('#jobTrollButton').on('click', function(){
		$('#jobTrollButton').hide();
		$('#closeTrollCarousel').show();

		$('#jobTrollCarousel').show();

		$('#buboCarousel').hide();
		$('#friendFinderCarousel').hide();

		$('#jobTrollCarousel').carousel();
		$('.item1').click(function(){
			$('#jobTrollCarousel').carousel(1);
		});
		$('.item2').click(function(){
			$('#jobTrollCarousel').carousel(2);
		});
		$('.item3').click(function(){
			$('#jobTrollCarousel').carousel(3);
		});
		$('.right').click(function(){
			$('#jobTrollCarousel').carousel('prev');
		});
		$('.left').click(function(){
			$('#jobTrollCarousel').carousel('next');
		});
	});

	$('#closeTrollCarousel').on('click', function(){
		$('#closeTrollCarousel').hide();
		$('#jobTrollCarousel').hide();
		$('#jobTrollButton').show();
	})

	$('#friendFinderButton').on('click', function(){
		$('#friendFinderButton').hide();
		$('#closeFriendCarousel').show();

		$('#friendFinderCarousel').show();

		$('#buboCarousel').hide();
		$('#jobTrollCarousel').hide();

		$('#friendFinderCarousel').carousel();
		$('.item1').click(function(){
			$('#friendFinderCarousel').carousel(1);
		});
		$('.item2').click(function(){
			$('#friendFinderCarousel').carousel(2);
		});
		$('.item3').click(function(){
			$('#friendFinderCarousel').carousel(3);
		});
		$('.right').click(function(){
			$('#friendFinderCarousel').carousel('prev');
		});
		$('.left').click(function(){
			$('#friendFinderCarousel').carousel('next');
		});
	});

	$('#closeFriendCarousel').on('click', function(){
		$('#closeFriendCarousel').hide();
		$('#friendFinderCarousel').hide();
		$('#friendFinderButton').show();
	})

	$('#contactMe').on('submit', function(e){
		e.preventDefault();

		var data = {
		}

		fetch("/sendemail", {
			method: "post",
			body: JSON.stringify({
				name: $('#nameInput').val(),
				email: $('#emailInput').val(),
				message: $('#messageInput').val()
			}),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
			.then((results) => {
				console.log(results)
		})

		$('#nameInput').val('');
		$('#emailInput').val('');
		$('#messageInput').val('');
	});

});