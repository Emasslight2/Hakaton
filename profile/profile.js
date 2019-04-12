for(let i = 0; i < 11;i++){
    (function() {
        var elem = document.createElement("div");
            elem.innerHTML = "nice";
        var wrappedP = document.getElementById("wrapped");

        
            wrappedP.appendChild(elem);
        console.log(elem);
    })();
}