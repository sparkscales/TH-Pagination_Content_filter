// "use strict";

// Variables
var $studentItems = $('.student-item');
var studentSearch ='<div class="student-search"><input id="search" placeholder="Search for students..."><button>Search</button></div>';
var pagination ='<div class="pagination"><ul></ul></div>';
var studentsPerPage = 10;
var studentList = breakUpStudents();

// Appends the search to the header
$('.page-header').append(studentSearch);

// grab the array and split up the students into groups inside array
function breakUpStudents() {
	// Create a new array to store the old list of students
  var list = $studentItems.slice();
	// Empty array to store the newly broken up students
  var newStudentsArray = [];
	// whiel loop that iterates through all the students and breaks them up into groups of 10 (based on the number assigned of studentsPerPage)
  while (list.length) {
		// breaks up the array into groups of 10
    newStudentsArray.push(list.splice(0,studentsPerPage));
  }
  // console.log(newStudentsArray);
	// return the new broken up array
  return newStudentsArray;
}
function showPages() {
	// Hides the list of students to reset the view
  $studentItems.hide();
 // loop that iterates through the student list
  $.each(studentList, function(index, page){
		// if the page number equals the index
      if ( 0 === index) {
				// loop through the items in the selected page
        $.each(page, function(i, listItem){
					// i equals the looping variable and listItem is the value associateted with i
					// fadeIn all the items within the selected array
          $(listItem).fadeIn('fast');
        });
      }
  });
}
// Appends the the pagination and also figures out how many pages it needs
function appendButtons(pageList) {
	// append the pagination list to the page
	$('.page').append(pagination);
	// get the amount of pages based onthe students
	var numPages = studentList.length;
	// loop through the number of pages and output the list items
	for (var i = 1; i <= numPages; i++) {
		// store the buttons in a variable
		var buttons = '<li><a href="#">' + i + '</a></li>';
		// appends button to pagination
		$('.pagination ul').append(buttons);
	}
	$('.pagination ul li a').first().addClass('active');

	  $(".pagination ul li a").on("click", function(e) {
	    var pageSelection = parseInt($(this)[0].text) - 1;
	    showPages(pageSelection, pageList);
	    $(".pagination ul li a").removeClass();
	    $(this).addClass("active");
	    e.preventDefault();
	  });
}


// function searchList() {
//     var searchTerm = $('#search').val().toLowerCase().trim();
//
//         var filteredStudents = studentItems.filter(function(i) {
//         	var studentEmail = $(this).find('.email').text();
//             var studentNames = $(this).find('h3').text();
//             if (studentNames.indexOf(searchTerm) > -1 || studentEmail.indexOf(searchTerm) > -1) {
//                 return true;
//             }
//             return false;
//         });
//         if (filteredStudents.length === 0 ) {
//         	$('.page-header h2').text('No Results');
//         } else {
//         	$('.page-header h2').text('STUDENTS');
//         }
//         var paginated_students = pages(filteredStudents);
//         $('.pagination').remove();
//         if (filteredStudents.length >= 10) {
//           appendButtons(paginated_students);
//         }
//         showPages(0, paginated_students);
// }

// appendButtons(studentList);
// showPages(0, studentList);

// $('.student-search').find('button').on('click', searchList);
// $('.student-search').find('input').keyup(searchList);
