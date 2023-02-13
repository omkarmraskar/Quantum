function showHidePWD(): void {
    var x = <HTMLInputElement>document.getElementById("pwd");
    var y = <HTMLInputElement>document.getElementById("showpwd")
    if (x.type === "password") {
        x.type = "text";
        y.src = "icons/visibility_off.svg"

    } else {
        x.type = "password";
        y.src="icons/preview.svg"
        
    }
}

export{}