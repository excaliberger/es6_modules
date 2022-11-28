import WishList from "./wishlist.js"
import Car from "./car.js";

let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
let makeDisplay = document.querySelector("#car-make");
let modelDisplay = document.querySelector("#car-model");
let yearDisplay = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");
let wishlistUl = document.querySelector("#wishListContainer > ul");

let newWishlist = new WishList();

form.addEventListener('submit', addCar);
removeBtn.addEventListener("click", removeCar);


function updateDOMList() {
    wishlistUl.innerHTML = "";
    WishList.list.forEach((car) =>{
        console.log(car);
        const li = document.createElement("li");
        li.textContent = `${car.make}${car.model}`;
        wishlistUl.appendChild(li);
        li.onclick = () => showCarDetails(car);
    })  
}

function showCarDetails(car) {
    makeDisplay.textContent = car.make;
    modelDisplay.textContent = car.model;
    yearDisplay.textContent = car.model;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}


function addCar (click) {
    click.preventDefault();
    
    let make = document.getElementById("makeInput");
    let model = document.getElementById("modelInput");
    let year = document.getElementById("yearInput");
    let newCar = new Car (make.value, model.value, year.value);
    
    newWishlist.add(newCar);
    console.log(newCar);

    updateDOMList();
}

function removeCar() {
    this.id--
    const removeFromArrayOnClick = this.list.filter((car) => {
        return car !== bookToRemove;
    })
    this.books = removeFromArrayOnClick;
    console.log(this.books);
    console.log(this.bookCount);    
}
