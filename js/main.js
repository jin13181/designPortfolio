/* ===== MIXITUP FILTER PORTFOLIO ===== */

let mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__card",
  },
  animation: {
    duration: 300,
  },
});

/* ===== Link Active Portfolio ===== */

// Portfolio
const $$portfolioItem = document.querySelectorAll(".portfolio__item");

function activePortfolio() {
  $$portfolioItem.forEach((l) => l.classList.remove("active-portfolio"));
  this.classList.add("active-portfolio");
}

$$portfolioItem.forEach((l) => l.addEventListener("click", activePortfolio));

/* ===== Portfolio Popup ===== */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
    document.querySelector(".upup").style.opacity = "0";
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio__popup-close")) {
    document.querySelector(".upup").style.opacity = "1";
  }
});
document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  // console.log(portfolioItem)
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".portfolio__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".portfolio__subtitle").innerHTML;
  document.querySelector(".portfolio__popup-title").innerHTML =
    portfolioItem.querySelector(".portfolio__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

// Email JS
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("xuhXe9rUs9kuLUVsk");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_f5bbudi", "template_ekttlil", this).then(
        function () {
          console.log("SUCCESS!");
          alert("전송이 완료되었습니다");
          location.reload();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
//
// document.querySelector(".portfolio__popup").getElementsByClassName(".open");
