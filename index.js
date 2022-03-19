const ratingSolos = document.querySelectorAll(".rating-solo");
const ratingStart = document.querySelector(".rating-start");
const ratingDone = document.querySelector(".rating-done");
const ratingByUser = document.querySelector("#rating-selected");
const ratingSubmitBtn = document.querySelector("#submit-btn"); 
var ratingSelected;

function removeActive(){
	ratingSolos.forEach(rsolo => {
		rsolo.classList.remove("rating-active");
	});
}

ratingSolos.forEach(ratingSolo => {
	ratingSolo.addEventListener("click", function(e){
		removeActive();
		const element = e.target.closest("[data-id]");
		element.classList.toggle("rating-active");
		ratingSelected = e.target.closest("[data-id]").dataset.id;

	});
});

ratingSubmitBtn.addEventListener("click", function(){
	
	ratingStart.style.display = "none";
	ratingDone.style.display = "block";

	ratingByUser.innerText = ratingSelected;
});

