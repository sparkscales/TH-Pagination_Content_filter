// var items = document.getElementsByClassName("student-item");
//
// var itemsPerPage = 10;
//
// // var pageContainers =

// Create and add a search bar
// Add pagination to the page based on the amount of students being displayed on search results

// Get Students
var $students = $('.student-item');

// Set the number of students per page
var studentsPerPage = 10;

var currentPage = 0;
// Get the number of pages
var pages = Math.ceil($students.length / studentsPerPage);
var studentlist = breakUpStudents();
var studentListContiner = $('.student-list');

  $students.hide();
// breakup students
function breakUpStudents() {
  var list = $students.slice();
  var newStudentsArray = [];
  while (list.length) {
    newStudentsArray.push(list.splice(0,studentsPerPage));
  }
  console.log(newStudentsArray);
  return newStudentsArray;

}


// access and print the html in an array

function outputPages() {

// loop over the items in the array containing the 5 arrays of html
  for(var i = 0; i < studentlist.length; i++ ) {
    console.log(i);
    studentListContiner.append (studentlist[0][0]);


    // display only the array with the matching current page
    if( currentPage === i ) {
        studentlist.show();
    }
  }
}
