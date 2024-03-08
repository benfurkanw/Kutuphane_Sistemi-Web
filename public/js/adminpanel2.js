// script.js
function openInfoBox(boxNumber) {
    const infobox = document.getElementById("infobox");
    infobox.style.display = "block";
    infobox.innerHTML = `Bu, Kutu ${boxNumber} için infobox içeriğidir.`;
}

document.addEventListener("click", function(event) {
    const infobox = document.getElementById("infobox");
    if (!infobox.contains(event.target)) {
        infobox.style.display = "none";
    }
});



