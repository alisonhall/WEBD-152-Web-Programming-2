
var filter = document.getElementById('filter');
var filteredItems = document.getElementById('filteredItems');

filter.addEventListener("change", filterOptions);

function filterOptions() {
	filteredItems.classList.remove("all");
	filteredItems.classList.remove("wordpress");
	filteredItems.classList.remove("photoshop");
	filteredItems.classList.remove("unbounce");
	filteredItems.classList.add(this.value);
}