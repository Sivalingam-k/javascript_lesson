function checkData() {
    let uid = document.getElementById("userid").value;
    if (uid.trim() === "") {
        document.getElementById("uiderror").innerHTML = "user is required";
        document.getElementById("uiderror").style.color = "red";
    } else if (!uid.trim().match('^[a-zA-Z]{3-20}$')) {
        document.getElementById("uiderror").innerHTML = "Must be in proper format";
        document.getElementById("uiderror").style.color = "red";
    } else {
        document.getElementById("uiderror").innerHTML = "";

    }
}