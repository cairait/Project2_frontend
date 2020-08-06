

// WHAT NEEDS TO WORK
// create a new book suggestion
// create a comment for existing books
// read all books and the comments
// update book info
// delete comments

const deployedURL = "https://cairaproject2.herokuapp.com";
const URL = deployedURL ? deployedURL : "http://localhost:3000/books"; //this is a ternary operator, without a deployedURL we use local host

    ///////////////////////
//GLOBAL VARIABLES
//////////////////////
const $bookInput = $("input");
const $submitButton = $("#submitbutton");
// const $editInput = $("#editinput");
// const $pizzaEditSelect = $("#editselect");
// const $editButton = $("#editbutton");
const $ul = $("ul");


//////////////////////////////
//FUNCTIONS
/////////////////////////////
//DEFINE FUNCTIONS HERE
//GET PIZZA FROM API AND POPULATE SELECTOR INPUT
const getBooks = async () => {
  //API CALL USING ASYNC/AWAIT
  const response = await fetch(`${URL}/books`);
  const data = await response.json(); 
  
  console.log(data)
  //POPULATE SELECTOR WITH RETRIEVED DATA
  // create an option tag for each pizza we collect
  data.forEach((book) => {
      const $list = $('<li>').attr('value', book._id).text(book)
      //$ul.append($list);
    $('#bookslist').append($list)
    
console.log(getBooks)});
};

getBooks()


