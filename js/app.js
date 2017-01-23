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

var currentPage = 1;
// Get the number of pages
var pages = Math.ceil($students.length / studentsPerPage);
var studentlist = breakUpStudents();
var studentListContainer = $('.student-list');

  $students.remove();
  outputPages(0);

// Create a new array of students and split them up based on the number of students per page
function breakUpStudents() {
  var list = $students.slice();
  var newStudentsArray = [];
  while (list.length) {
    newStudentsArray.push(list.splice(0,studentsPerPage));
  }
  // console.log(newStudentsArray);
  return newStudentsArray;
}
// Append pagination to the page

$('.page').append($("<div class='pagination'><ul></ul></div>"));
generatePagination();

function generatePagination() {
  $(".pagination li").remove();
  for (var i = 1; i <= pages; i++) {
    $(".pagination").append($("<li><a >" + i + "</a></li>"));
  }
// assign pagination to the array
}

// Toggle class and select differetn array of students based on pagination
$('.pagination li a').on("click", function() {
  $('.pagination li a').removeClass("active");
  $(this).addClass("active");
  for(var index = 0; index <= studentlist.length; index++ ) {
    if(parseInt($(this).text()) == index + 1 ) {
      outputPages(index);
      console.log('output-fired');
    }
  }
});


// Create and append search
$(".page-header").append($("<div class='student-search'><input placeholder='Search for students...'><button>Search</button></div>"));

// On click of the submit button grab the value of the search field and filter out the content based on the value

$('button').on("click", search);



function search() {
  var search = $('.student-search input');
  var searchContent = search.val().toLowerCase();
    $students.remove();
  // grab the value of the search field and compare it against the array of students

  // Append the students that match the earch string
  //
  // for(var i = 0; i < studentlist.length; i++) {
  //   var details = $('.student-details h3').text();
  //   if(details.indexOf(searchContent) != -1 ) {
  //     studentListContainer.append(studentlist[i]);
  //   }
  //   // if(details.indexOf())
  // }

  for(var i = 0; i < studentlist.length; i++) {
    var index = 0;
      if(searchContent) {
        index = 
      }
  }

}

// access and print the html in an array

function outputPages(lpage) {
  // remove the content before outputting more students
  $students.remove();
  // Loop through the studentslist array
  for(var i = 0; i < studentlist.length; i++ ) {
    console.log(i);
    // conditional if the number equals the index loop and append the contents
    if(lpage === i ) {
      studentListContainer.append(studentlist[i]);
    }
  }
}
