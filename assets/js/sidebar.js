document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.getElementById("toggle-sidebar");
    const content = document.querySelector(".content");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("closed");

        // Ensure content has proper margin when sidebar is hidden
        if (sidebar.classList.contains("closed")) {
            content.style.marginLeft = "40px"; /* Moves text away from the left edge */
        } else {
            content.style.marginLeft = "270px"; /* Restores default spacing */
        }
    });
});
