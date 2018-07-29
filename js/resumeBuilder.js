var bio = {
	"name": "Gino Zambelli",
	"role": "Front-end Web Developer",
	"contact": {
		"mobile": 07960269303,
		"email": "gozambelli@hotmail.com",
		"github": "ginozambelli",
		"twitter": "MrGinoZambelli",
		"location": "Liverpool, L3 9SJ"
	},
	"biopic": "images/GinoZambe.jpg",
	"welcomeMessage": "Welcome To My Online Resume",
	"skills": ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Sublime Text", "Shopify", "Wordpress"]
};

var work = {
	"jobs": [
	{
		"employer": "Liverpool University",
		"title": "Freelance Web Developer",
		"location": "Liverpool, L3 5TR",
		"dates": "2015-present",
		"description": "Develop Varies Projects"
	},
	{
		"employer": "ZambeSites",
		"title": "Freelance Web Developer",
		"location": "Liverpool, L3 9SJ",
		"dates": "2017-2018",
		"description": "Develop Websites for local businesses."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Cool Image Animation",
		"dates": "2018",
		"description": "Created a small interactive image webpage",
		"images": ['images/coolanimation.png']
	},
	{
		"title": "Cool Text Animation",
		"dates": "2015",
		"description": "Created a small intereactive text webpage",
		"images": ['images/txtanimation.png']
	},
	{
		"title": "Udacity Portfolio",
		"dates": "2015",
		"description": "Portfolio to show off my amazing work while working on the Udacity Front-end Nanodegree.",
		"images": ['images/web-dev.jpg']
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Liverpool University",
		"location": "Liverpool, L3 5TR",
		"degree": "Artificial Intelligence",
		"majors": ["Artificial Intelligence BSC"],
		"years": "2015-2018",
		"url": "www.liverpool.ac.uk"
	}],
	"onlineCourses": [
	{
		"title": "Front-end Web Developer Nanodegree",
		"school": "Udacity",
		"date": "2018-Present",
		"url": "www.udacity.com"
	}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); */
	}
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
}

work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].years));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (onlineClass in education.onlineCourses){
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);