button = document.getElementById("click");

// const changeLinkColor = () => {
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.getElementById("myLink-first").style.color = "#" + randomColor;
//     document.getElementById("myLink-second").style.color = "#" + randomColor;
//     document.getElementById("myLink-third").style.color = "#" + randomColor;
// }

const changeLinkColor = () => {
    let yellowColor = "#FFD700"; // Жовтий колір
    document.getElementById("myLink-first").style.color = yellowColor;
    document.getElementById("myLink-second").style.color = yellowColor;
    document.getElementById("myLink-third").style.color = yellowColor;
};
button.addEventListener("click", changeLinkColor);

///////Just for the practice of jquery.
$(document).ready(function () {
    $("#click").on("click", function () {

        $(".navbar-brand img").animate({ marginTop: "-10px" }, 200)
            .animate({ marginTop: "0px" }, 200);

                $(".navbar").addClass("active");
                setTimeout(function () {
            $(".navbar").removeClass("active");
        }, 1000);
    });
});