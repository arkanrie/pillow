var attempt = 0;


function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    if (email === "mark" && password === "mark") {
        window.location.href = "Pillows.html";
        return true;
    } else {
        attempt++;
        alert("Invalid username or password. Please try again.");

        if (attempt >= 3) {
            document.getElementById("email").disabled = true;
            document.getElementById("pass").disabled = true;
            alert("Cannot login. Attempts exceeded!!");
        }
    }
}


document.getElementById("btnlogin").addEventListener("click", login);
