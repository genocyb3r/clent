document.addEventListener("DOMContentLoaded", () => {
    const message = document.getElementById("message");
    const downloadLink = document.getElementById("download-link");


    setTimeout(() => {
        message.textContent = "Downloading your app...";
        downloadLink.style.display = "block"; 
        downloadLink.click(); 
    }, 3000);
});
