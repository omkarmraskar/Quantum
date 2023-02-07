function myFunction() {
    var x = document.getElementById("pwd");
    var y = document.getElementById("showpwd")
    if (x.type === "password") {
        x.type = "text";
        y.src = "icons/visibility_off.svg"

    } else {
        x.type = "password";
        y.src="icons/preview.svg"
        
    }
}