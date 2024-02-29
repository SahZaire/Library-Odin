const library = [];
var j = 0;

function Book(bookname, bookauthor, bookpages) {
    this.info = [bookname, bookauthor, bookpages];
    library.push(this.info); // Push the book info into the library array #############
    AppendList();
}

function AppendList() {
    var originalList1 = document.querySelector('.list-1');
    var clonedList2 = originalList1.cloneNode(true);
    var originalbtn1 = document.querySelector('.read-btn-1');
    var clonedbtn2 = originalbtn1.cloneNode(true);

    var lastBook = library[library.length - 1]; 

    clonedList2.querySelector('.title').innerText = lastBook[0];
    clonedList2.querySelector('.author').innerText = lastBook[1]; 
    clonedList2.querySelector('.pages').innerText = lastBook[2]; 

    var list_block = document.querySelector('.list-block');
    list_block.appendChild(clonedList2);
    var read_block = document.querySelector('.read-section');
    read_block.appendChild(clonedbtn2);
} 


function AppendButton(clickedButton) {
    clickedButton.innerText = '✔️';
}
var buttons = document.querySelectorAll('.read-btn-1');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        AppendButton(button);
    });
});


// function AppendButton() {
//     document.querySelector('.read-btn-1').innerText = '✔️';
//     var readbtn_block = document.querySelector('.read-btn-1');
//     readbtn_block.appendChild(readbtn_block);
// }


var i = parseInt(prompt("1 to Start 0 to End"));

while (i === 1) {
    var name = prompt('Enter the book\'s Name:');
    var author = prompt('Enter the Author\'s Name:');
    var pages = prompt('How many Pages does it have? ');
    
    var NewBook = new Book(name, author, pages);

    i = parseInt(prompt("1 to Start 0 to End"));
}

