const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      checkoutButton = document.querySelector(".checkoutButton"),
      body = document.querySelector("body"),
      list = document.querySelector(".list"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the close button for the checkout form
    const closeBtn = document.querySelector("#checkoutForm .close");

    // Add event listener to the close button
    closeBtn.addEventListener("click", function () {
        // Hide the checkout form
        document.getElementById("checkoutForm").style.display = "none";
    });

    // Get the checkout button
    const checkoutBtn = document.getElementById("checkoutBtn");

    // Add event listener to the checkout button
    checkoutBtn.addEventListener("click", function () {
        // Check if the card is not empty
        if (parseInt(quantity.textContent) > 0) {
            // Display the checkout form
            document.getElementById("checkoutForm").style.display = "block";
            
            // Close the card by removing the 'active' class from the body
            document.body.classList.remove("active");
        } else {
            // Alert the user that the card is empty
            alert("Your shopping cart is empty. Please add items before proceeding to checkout.");
        }
    });

    // Optional: You can also listen for form submission and handle it accordingly
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your parcel will be delivered.");
        document.getElementById("checkoutForm").style.display = "none";
        
        // Reset the quantity to zero after the alert is closed
        quantity.textContent = "0";


        listCards = [];
        reloadCart();
    });
});










let products = [
    {
        id: 1,
        name: "ZephyrDreams Pillow",
        image: "ZEPHYR.jpg",
        price: 2000
    },
    {
        id: 2,
        name: "Elysian Slumber",
        image: "ELYSIAN.jpg",
        price: 2200
    },
    {
        id: 3,
        name: "Hypnos Haven",
        image: "HYPNOS.jpg",
        price: 2400
    },
    {
        id: 4,
        name: "Olympian Comfort",
        image: "OLYMPIAN.jpg",
        price: 2600
    },
    {
        id: 5,
        name: "Morpheus Rest",
        image: "MORPHEEUS.jpg",
        price: 1400
    },
    {
        id: 6,
        name: "Athenian Bliss",
        image: "ATHENIAN.jpg",
        price: 1800
    },
    {
        id: 7,
        name: "Selene's Cushion",
        image: "SELENE_.png",
        price: 2000
    },
    {
        id: 8,
        name: "Orpheus Ease",
        image: "ORPHEUS.jpg",
        price: 2200
    },
    {
        id: 9,
        name: "Hermes Cloud",
        image: "HERMES.jpg",
        price: 2400
    },
    {
        id: 10,
        name: "Gaia's Embrace",
        image: "GAIA.jpg",
        price: 2600
    },
    {
        id: 11,
        name: "Poseidon's Pillow",
        image: "POSIEDON.jpg",
        price: 1400
    },
    {
        id: 12,
        name: "Apollo's Rest",
        image: "APOLLO.jpg",
        price: 1800
    },
    {
        id: 13,
        name: "Ambrosia Cushion",
        image: "AMBROSIA.jpg",
        price: 2000
    },
    {
        id: 14,
        name: "Nyx Serenity",
        image: "NYX.jpg",
        price: 2200
    },
    {
        id: 15,
        name: "Icarus Down",
        image: "ICARUS.jpg",
        price: 2400
    },
    {
        id: 16,
        name: "Hestia Harmony",
        image: "HESTIA.jpg",
        price: 2600
    },
    {
        id: 17,
        name: "Dionysian Dreams",
        image: "DIONYSUS.jpg",
        price: 1400
    },
    {
        id: 18,
        name: "Titania's Touch",
        image: "TITANIA_.png",
        price: 1800
    },
    {
        id: 19,
        name: "Arcadian Repose",
        image: "ARCADIAN.jpg",
        price: 2000
    },
    {
        id: 20,
        name: "Celestial",
        image: "CELESTIAL.jpg",
        price: 2200
    }
];


let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src="home_img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="star">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
            </div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
};

initApp();

const addToCart = key => {
    if (listCards[key] == null) {
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity += 1;
    }
    reloadCart();
};

const reloadCart = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value != null) {
            count += value.quantity;
            totalPrice += value.price;

            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="home_img/${value.image}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${value.price.toLocaleString()}</div>
                <div>
                    <button style="background-color:  rgb(72, 144, 183);" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button style="background-color:  rgb(72, 144, 183);" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
};

const changeQuantity = (key, qty) => {
    if (qty === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = qty;
        listCards[key].price = qty * products[key].price;
    }
    reloadCart();
};




