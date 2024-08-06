 
 function enroll(buttonId) {
   
  
    // home page courses 
   
    if (buttonId === "frontEndBtn") {
       	var frontEnd = document.getElementById("frontEnd").innerHTML ;
  	  document.getElementById("courseName").innerHTML = frontEnd ;

       	var frontEndValue = document.getElementById("frontEndValue").innerHTML ;
  	  document.getElementById("courseValue").innerHTML = frontEndValue ;
    } else if (buttonId === "backEndBtn") {
        var backEnd = document.getElementById("backEnd").innerHTML ;
 	  document.getElementById("courseName").innerHTML = backEnd ; 

        var backEnd = document.getElementById("backEndValue").innerHTML ;
 	  document.getElementById("courseValue").innerHTML = backEnd ;
 	  
    } else if (buttonId === "fullstackBtn") {
          var fullStack = document.getElementById("fullStack").innerHTML ;
 	  document.getElementById("courseName").innerHTML = fullStack ;

        var backEnd = document.getElementById("fullStackValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ; 

    }else if (buttonId === "WordPressBtn") {
          var WordPressCourse = document.getElementById("WordPress").innerHTML ;
 	  document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("WordPressValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }
}

 

//  all couses enrollment 

function cooseCourse(buttonId) {
  
    if (buttonId === "frontEndCouseBtn") {
        var frontEnd = document.getElementById("frontEndCourse").innerHTML ;
      document.getElementById("courseName").innerHTML = frontEnd ;

        var frontEndValue = document.getElementById("frontEndCourseValue").innerHTML ;
      document.getElementById("courseValue").innerHTML = frontEndValue ;
    } else if (buttonId === "javaBtn") {
        var backEnd = document.getElementById("javaCourse").innerHTML ;
    document.getElementById("courseName").innerHTML = backEnd ; 

        var backEnd = document.getElementById("javaCourseValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;
    
    } else if (buttonId === "softSkillBtn") {
          var fullStack = document.getElementById("softSkillCourse").innerHTML ;
    document.getElementById("courseName").innerHTML = fullStack ;

        var backEnd = document.getElementById("softSkillCourseValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ; 

    }else if (buttonId === "phpBtn") {
          var WordPressCourse = document.getElementById("phpCourse").innerHTML ;
    document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("phpCourseValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }else if (buttonId === "pythonBtn") {
          var WordPressCourse = document.getElementById("pythonCourse").innerHTML ;
    document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("pythonCourseValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }else if (buttonId === "devopsBtn") {
          var WordPressCourse = document.getElementById("devopsCourse").innerHTML ;
    document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("devopsCourseValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }else if (buttonId === "mearnStackBtn") {
          var WordPressCourse = document.getElementById("mearnStack").innerHTML ;
    document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("mearnStackValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }else if (buttonId === "mySqlBtn") {
          var WordPressCourse = document.getElementById("mySql").innerHTML ;
    document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("mySqlValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }else if (buttonId === "testingBtn") {
          var WordPressCourse = document.getElementById("softwereTesting").innerHTML ;
    document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("softwereTestingValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }else if (buttonId === "hostingBtn") {
          var WordPressCourse = document.getElementById("websiteHosting").innerHTML ;
    document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("websiteHostingeValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }else if (buttonId === "templateBtn") {
          var WordPressCourse = document.getElementById("templeteModification").innerHTML ;
    document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("templeteModificationValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }else if (buttonId === "automationBtn") {
          var WordPressCourse = document.getElementById("automation").innerHTML ;
    document.getElementById("courseName").innerHTML = WordPressCourse ; 

        var backEnd = document.getElementById("automationValue").innerHTML ;
    document.getElementById("courseValue").innerHTML = backEnd ;

    }
}



function messageToUser() {
   
             const phoneNumber = document.getElementById("mobileNumber").value; 
             let firstName = document.getElementById('firstName').value;
             let lastName = document.getElementById('lastName').value;
             let courseName = document.getElementById('courseName').innerHTML;
            const message = encodeURIComponent(`Hi , This is ${firstName} ${lastName} . I Want to more information about ${courseName} .`); // Replace with your actual message
            const url = `https://wa.me/+918788396162?text=${message}`;
            
            window.open(url, '_blank');

};

// form required data filling
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      // Custom validation logic
      var firstName = document.getElementById('firstName').value.trim();
      var lastName = document.getElementById('lastName').value.trim();
      var email = document.querySelector('input[name="email"]').value.trim();
      var mobile = document.getElementById('mobileNumber').value.trim();
      // var course = document.getElementById('course').value;

      if (!firstName || !lastName || !email || !mobile) {
        alert('Please fill in all required fields.');
        event.preventDefault(); // Prevent form submission
        return false;
      }
       if (firstName || lastName || email || mobile) {
       messageToUser();
      }

      if (!/^[0-9]{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault(); // Prevent form submission
        return false;
      }

      // Optional: Add more custom validations as needed
    });
  });



   















