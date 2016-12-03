var elem = document.getElementById("myCat");
// console.log(elem);


// -----------------------------------------------


// The following code alternates the picture between a cat and a dog when it is clicked.

elem.addEventListener('click', function(){
	if (elem.src === "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg") {
		elem.src = "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg";
	}
	else {
	elem.src="https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg";
}
}, false);


// -----------------------------------------------


// The following code increments a counter every time a picture is clicked.

var counter = 0;
var counterElem = document.getElementById("count");
console.log(counterElem);

elem.addEventListener('click', function(){
	counter++;
	// console.log(counter);
	counterElem.textContent = counter;
});

// -------------------------------------------------