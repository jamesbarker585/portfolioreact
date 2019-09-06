const projects = [
	{
		title: 'Day-Planner',
		url: 'https://thawing-mesa-88891.herokuapp.com/',
		image: 'day-planner.png',
		description: 'This is a day planner app that has the functionality of a todolist. Made with react and redux. ',
		tags: {
			types: ['Web App'],
			languages: ['React', 'java',],
			libraries: ['Reactstrap'],
			others: ['redux']

		}
	},
	{
		title: 'Recipe Search',
		url: 'https://young-lake-37944.herokuapp.com/',
		image: 'recipe search.jpg',
		description: 'This app is used to search for recipies. When you initially load, it shows the 30 most popular food items.',
		tags: {
			types: ['web app'],
			languages: ['javascript'],
			libraries: ['react', 'nodejs'],
			others: ['food2fork API']

		}
	},
	{
		title: 'TrafficMon',
		url: 'https://www.trafficmon.org/',
		image: 'trafficmon.png',
		description: 'TrafficMon is a reporting application to post and review “reported” traffic conditions by users in your area',
		prize: '',
		tags: {
			types: ['web app'],
			languages: ['javascript'],
			libraries: ['react', 'reactstrap'],
			others: ['MySQL', 'traffic API']

		}
	},
	{
		title: 'Mongo Scraper',
		url: 'https://serene-springs-15474.herokuapp.com',
		image: 'scraper.jpg',
		description: 'Scraper is a a web app that lets users view and leave comments on the latest news from the New York Times.',
		tags: {
			types: ['web app'],
			languages: ['javascript'],
			libraries: [''],
			others: ['MongoDB', 'NYT API']

		}
	},
	{
		title: 'Clicky Game',
		url: 'https://afternoon-woodland-78903.herokuapp.com',
		image: 'clicky.jpg',
		description: 'This app is a memory game with React. This project required me to break up my application UI into components, manage component state, and respond to user events.',
		tags: {
			types: ['web app'],
			languages: ['javascript'],
			libraries: ['react', 'reactstrap'],
			others: []

		}
	},
	{
		title: 'NYT Book Search',
		url: 'https://vast-wave-33762.herokuapp.com',
		image: 'booksearch.jpg',
		description: 'Full stack react app that uses google books api to search for books and saves them to a mongo database.',
		tags: {
			types: ['web app'],
			languages: ['javascript'],
			libraries: ['React', 'nodejs'],
			others: ['MongoDB']

		}
	},

];

export default projects;
