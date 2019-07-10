
$('[data-fancybox="roadtrip"]').fancybox({
	// Options will go here
  infobar: false,
  smallBtn: false,
  transitionDuration: 500,
  toolbar: false
});

$('#search').keyup(function(){
  let input = $('#search').val().toLowerCase();
  let searchList = document.querySelectorAll("li");

  for(let i=0; i < searchList.length; i++){
    let keyword = searchList[i].childNodes[1].getAttribute("data-caption").toLowerCase();
    if(keyword.indexOf(input) == -1) {
      searchList[i].classList.add("hide");
    }
  }
});
