// WHAT NEEDS TO WORK
// create a new book suggestion
// create a comment for existing books
// read all books and the comments
// update book info
// delete comments

const deployedURL = "https://cairaproject2.herokuapp.com";
const URL = deployedURL ? deployedURL : "http://localhost:3000";

const $ul = $("ul");
const $bookName = $("#bookname");
const $bookDes = $("#bookdescription");
const $submitButton = $("#submitbutton");
// const $editInput = $("#editinput");
// const $pizzaEditSelect = $("#editselect");
// const $editButton = $("#editbutton");


//shows all books ***** SHOWING THAT FOREACH IS NOT A FUNCTION

const getAllBooks = async () => {
    const response = await fetch(`${URL}/books`);
    const data = await response.json();
    console.log(data);
    $ul.empty()
    data.book.forEach((request) => {
        const $li = $("<li>").text(`${request.name}.`);
        const $deletebutton = $("<button>").text(`Delete`).on("click", () => deleteBook(request._id));
        
        const $editbutton = $("<button>").text(`Edit`).on("click", () =>
        editBook(request._id))

        $li.append($deletebutton, $editbutton);
        $ul.append($li);
        
    })
};

//creates a new book suggestion
const createBook = async () => {
    // create new rat object from form data
    const newBook = {
      "name": $bookName.val(),
      "description": $bookDes.val()
      }
      console.log(newBook)
    // send request to API to create book
    const response = await fetch(`${URL}/books/newbook`, {
      method: 'POST',
      // let server know to parse body as JSON data
        // Postman makes headers for the user; next to "body"
      headers: {
        "Content-Type": "application/json"
      }, 
      // pass in a JS object and turn into a JSON string
      body: JSON.stringify(newBook)
    })
    const data = response.json();

    // update the DOM with new Book
      //empty the <ul>
    $ul.empty();
    getAllBooks()
  }

  //Deletes a book
  const deleteBook = async (bookid) => {
      const response = await fetch(`${URL}/books/${bookid}`, {
          method: 'delete'
      })
      console.log(response)
      getAllBooks()
  }

  //edits a book
  const editBook = async (bookid) => {
      const response = await fetch(`${URL}/books/${bookid}`, {
          method: 'update'
      })
      console.log(response)
      getAllBooks()
  }

// //updates comment
// const update = async (req, res) => {
//     try {
//       const updatedComments = await Comment.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//       });
//       res.status(200).json(updatedRat);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   };


//   //deletes a comment
//   const destroy = async (req, res) => {
//     try {
//       const deletedRat = await Rat.findByIdAndDelete(req.params.id);
//       res.status(200).json(deletedRat);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   };


////////////////////////////////
// Main Application Logic
////////////////////////////////
// Start executing below


// initial getting of books
getAllBooks();
// add create function to button click event listener
$submitButton.on('click', createBook)
// add update function to edit submit button
// $editButton.on('click', updateRat)
