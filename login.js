function login() {
    const nameEL = document.querySelector("#name");
    localStorage.setItem("userName", nameEL.value);
    window.location.href = "play.html";
}