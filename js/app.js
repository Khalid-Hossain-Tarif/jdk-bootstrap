
window.addEventListener("scroll", function () {
    const header = document.querySelector(".site-header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  


  //Translator
  // function translateBtn() {
  //   const countryFlags = document.getElementById("flags");
  //   countryFlags.classList.toggle("activeFlags");
  // }