function darkmode() {
    let bodyElement = document.body;
    bodyElement.classList.toggle("darkmode");

    let button = document.querySelector('.darkmode button');
    if (bodyElement.classList.contains("darkmode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}
