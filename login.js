document.getElementById("login-btn").addEventListener("click", function () {
    const userId = document.getElementById("user-id").value;
    const userPassword = document.getElementById("user-password").value;

    if (userId == "borochele@baaperbank.com" && userPassword == "secret") {
        window.location.href = "bankingsite.html";
    }
})