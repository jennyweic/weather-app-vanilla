// 2)return results by updating city text
function search (event) {
    event.preventDefault();
    
    let searchInput = document.querySelector("#formInput");
    console.log(searchInput.value);

    let h1 = document.querySelector("h1");
    h1.innerHTML =`${searchInput.value}`;

}
// 1)search engine behaviour for cities by creating a form 
let formElement = document.querySelector("#search-function");
formElement.addEventListener("click", search);






// add the weather API axios and check console
// make sure the date is updated aswell according to city information
// display the weather icon