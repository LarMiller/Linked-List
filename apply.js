var userTitle = document.querySelector('.website-title');
var userUrl = document.querySelector('.website-url');
var enterUserInput= document.querySelector('.enter-button');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('#delete-button');
var bookMarkList = document.querySelector('#listed-bookmarks');



enterUserInput.addEventListener('click', captureUserInput);



function captureUserInput() {
  var newBookmark = document.createElement ('article');

  newBookmark.innerHTML = 
    `<h2>${userTitle.value}</h2>
     <hr>
     <link>${userUrl.value}</link>
     <hr>
     <button id = "read-button"></button>
     <button id = "delete-button"></button>
    `;
  console.log('We are so good');
  bookMarkList.prepend(newBookmark);
}












