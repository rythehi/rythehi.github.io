const scrollableElement = document.getElementById('bookmarksdiv');
scrollableElement.addEventListener('wheel', function (event) {
  // Check if the user is scrolling vertically
  if (event.deltaY !== 0) {
    // Prevent the default vertical scrolling behavior
    event.preventDefault();

    // Calculate the amount of horizontal scrolling
    const scrollAmount = event.deltaY;

    // Scroll the element horizontally
    scrollableElement.scrollLeft += scrollAmount;
  }
});

function bookmark(id) {
  const bookmarkArr = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const element = document.getElementById(id);
  const parent = document.getElementById('bookicon');
  const star = element.querySelector('.bookmark-icon');
  star.style.display = "none";
  const clonedElement = element.cloneNode(true);
  clonedElement.setAttribute("class", "bookmarkicon");
  parent.appendChild(clonedElement);
  bookmarkArr.push(id);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkArr));
}
function bookmark2(id) {
  const bookmarkArr = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const element = document.getElementById(id);
  const parent = document.getElementById('bookicon');
  const star = element.querySelector('.bookmark-icon');
  star.style.display = "none";
  const clonedElement = element.cloneNode(true);
  clonedElement.setAttribute("class", "bookmarkicon");
  parent.appendChild(clonedElement);
}
window.onload = function () {
  const bookmarkArr = JSON.parse(localStorage.getItem('bookmarks')) || [];
  for (let i = 0; i < bookmarkArr.length; i++) {
    const currentItem = bookmarkArr[i];
    bookmark2(currentItem);
  }
};