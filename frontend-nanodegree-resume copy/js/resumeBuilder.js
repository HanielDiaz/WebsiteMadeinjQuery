/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Haniel Diaz",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(111) 111 1111",
    "email": "Gilastomper@gmail.com",
    "github": "HanielDiaz",
    "location": "Orlando"
  },
  "welcomeMessage": "Welcome to my Domain! I've been programming for many years now and I can say with certainty that I am very passionate about learning and programming!",
  "skills": [
    "C-Programming",
    "Java-Programming",
    "Front End web development",
    "JQuery",
    "Swift-Programming"
  ],
  "biopic": "images/fry.jpg",
  "display": function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").prepend(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

var education = {
  "schools": [{
    "name": "University of Central Florida",
    "location": "Orlando, FL, US",
    "degree": "Bachelor of Science",
    "majors": ["Computer Science"],
    "dates": "2015 - 2019"
  }],
  "onlineCourses": [{
    "title": "Front end Web Developer",
    "school": "Udacity",
    "dates": "July 2017 - September 2017",
    "url": "www.udacity.com"
  }, {
    "title": "iOS app Developer",
    "school": "Udemy",
    "dates": "Nov 2016 - September 2017",
    "url": "www.udemy.com"
  }],
  "display": function() {
    for (var schools = 0; schools < education.schools.length; schools++) {

      $("#education").append(HTMLschoolStart);

      var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
      $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
      $(".education-entry:last").append(formattedschoolDates);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
      $(".education-entry:last").append(formattedschoolLocation);
      for(var majors = 0; majors < education.schools[schools].majors.length; majors++){
        var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[schools].majors[0]);
        $(".education-entry:last").append(formattedschoolMajors);
      }
    }

    $("#education").append(HTMLonlineClasses);
    for (schools = 0; schools < education.onlineCourses.length; schools++) {
      $("#education").append(HTMLschoolStart);
      var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[schools].title);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[schools].school);
      $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
      var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[schools].dates);
      $(".education-entry:last").append(formattedonlineDates);
      var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[schools].url);
      $(".education-entry:last").append(formattedonlineURL);

    }
  }
};


var work = {
  jobs: [{
    "employer": "Campus Apartments",
    "title": "Leasing Specialist",
    "location": "Orlando, FL, US",
    "dates": " Dec 15 - Jan 17",
    "description": "I worked in a team to facilitate the moving in and life of prospects."
  }],
  "display": function() {
    for (var job = 0; job < work.jobs.length; job++) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedCity);
      var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedworkDescription);

    }
  }
};

var projects = {
  "projects": [{
    "title": "Sample Project",
    "dates": "Sample Date",
    "description": "Sample description",
    "images" : ["http://via.placeholder.com/350x150"]
  }, {
    "title": "Sample Project",
    "dates": "Sample Date",
    "description": "Sample description",
    "images" : ["http://via.placeholder.com/350x150"]
  }],
  "display": function() {
    for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(formattedDate);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(formattedDescription);
      for(var images = 0; images < projects.projects[i].images.length; images++){
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[images]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  }
};
$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();
