document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.getElementById("toggle-sidebar");
    const content = document.querySelector(".content");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("open");

        // Adjust content margin dynamically
        if (sidebar.classList.contains("open")) {
            content.style.marginLeft = "250px";
        } else {
            content.style.marginLeft = "0";
        }
    });
});
