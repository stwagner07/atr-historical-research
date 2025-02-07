document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.getElementById("toggle-sidebar");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("closed");
    });
});
