//--------------------------------------------
//FANCYBOX
//--------------------------------------------

function fancybox() {
    $('[data-fancybox="roadtrip"]').fancybox({
    // Options will go here
    infobar: true,
    smallBtn: true,
    transitionDuration: 500,
    preventCaptionOverlap: false,
    toolbar: false
  });
}

//call it on page load in case user doesn't use the search bar
fancybox();

//--------------------------------------------
//SEARCH FILTER
//--------------------------------------------

//stores search input
let input = document.getElementById("search");
//listen for any changes in the input field
input.addEventListener("input", function() {

  //stores value input from user
  let inputValue = input.value.toLowerCase();
  //stores all 'li' elements in the gallery
  let searchList = document.getElementById("photo-gallery").children;
  //stores 'p' element with 'no results' msg
  let noResultMsg = document.getElementById('no-results');
  //counts how many elements are being hidden
  let k = 0;


  for(let i=0; i < searchList.length; i++) {
    //stores the img caption value that we need to compare against the user input
    let keyword = searchList[i].childNodes[1].getAttribute("data-caption").toLowerCase();

    //compares caption against user input
    if(keyword.indexOf(inputValue) == -1) {
      //if there's no match, hides the element
      searchList[i].classList.add("hide");
      //also, removes 'data-fancybox' attribute so the img is removed from the lightbox gallery
      searchList[i].childNodes[1].removeAttribute("data-fancybox");
      //adds 1 to the counter
      k++;
    } else {
      //removes the 'hide' class so the element shows
      searchList[i].classList.remove("hide");
      //set attribute 'data-fancybox' to show again in the lightbox gallery
      searchList[i].childNodes[1].setAttribute("data-fancybox", "roadtrip");
    }
  }

  //if all the elements are hidden, the 'no results' msg shows
  if(k == searchList.length) {
    noResultMsg.classList.remove("hide");
  } else { noResultMsg.classList.add("hide"); }

  //I call the fancybox so it builds the gallery again based only on the filtered results
  fancybox();

});
