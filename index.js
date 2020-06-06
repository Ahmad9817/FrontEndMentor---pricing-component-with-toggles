var annualPrice = document.getElementsByClassName("annual-price");
var monthlyPrice = document.getElementsByClassName("monthly-price")
var checkBox = document.getElementById("checkbox");

var iterationLength = (annualPrice.length - 1);

console.log(annualPrice[1].classList);

checkBox.addEventListener("click", function () {
    for (i=0; iterationLength; i++) {

        if (checkBox.checked == true) {
            annualPrice[i].classList.add("hide");
            monthlyPrice[i].classList.add("show");
        } else {
            annualPrice[i].classList.remove("hide");
            monthlyPrice[i].classList.remove("show");
        }
        
    }
})
