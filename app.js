const wrapper = document.querySelector(".sliderWrapper");
const navLink = document.querySelectorAll(".navlink");

const productItems = [
  {
    id: 1,
    title: "air force",
    price: "Rs.3000",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "air jordan",
    price: "Rs.3500",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "blazer",
    price: "Rs.3200",
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "carter",
    price: "Rs.2600",
    colors: [
      {
        code: "lightgray",
        img: "./img/crater.png",
      },
      {
        code: "darkgray",
        img: "./img/melvin.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "hippie",
    price: "Rs.2799",
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let chosenProduct = productItems[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductTitle = document.querySelector(".productTitle");
const currentProducColors1 = document.querySelector(".color1");
const currentProducColors2 = document.querySelector(".color2");
const currentProductSize = document.querySelectorAll(".size");

navLink.forEach((items, index) => {
  items.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the product
    chosenProduct = productItems[index];

    //change the text content
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;

    currentProducColors1.style.backgroundColor = chosenProduct.colors[0].code;
    currentProducColors2.style.backgroundColor = chosenProduct.colors[1].code;

    currentProducColors1.addEventListener("click", () => {
      currentProductImg.src = chosenProduct.colors[0].img;
    });

    currentProducColors2.addEventListener("click", () => {
      currentProductImg.src = chosenProduct.colors[1].img;
    });
    console.log(currentProductImg, "img");
  });
});

currentProductSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".crossBtn");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

console.log(chosenProduct, "outer");
console.log(productButton);
