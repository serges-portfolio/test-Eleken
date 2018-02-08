document.addEventListener("DOMContentLoaded", function(event) {

    var gridContainers = document.querySelectorAll(".general-info__company-item-grid");

    document.getElementById("grid").onclick = function () {
        document.getElementById("row-view").style.display = "none";
        document.querySelector(".general-info__data-name").classList.add("general-info__grid-enable");
        document.getElementById("grid-view").style.display = "flex";

        gridContainers.forEach(function(gridContainers) {
            gridContainers.classList.add("general-info__company-item-grid-active");
        });
    };

    document.getElementById("row").onclick = function () {
        document.getElementById("row-view").style.display = "block";
        document.querySelector(".general-info__data-name").classList.remove("general-info__grid-enable");
        document.getElementById("grid-view").style.display = "none";
    };
});