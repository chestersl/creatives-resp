window.onload = function () {

    // --------------------------------------------------
    // -------------------------------SHOW HIDDEN MENU BUTTON 
    // --------------------------------------------------
    var button = document.querySelector('#buttonToggle');
    
    button.addEventListener('click', function (elem) {
        elem.preventDefault();
        
        var hiddenFolder = document.querySelector('#hiddenMenu');

        if(hiddenFolder.style.display == "block"){
            hiddenFolder.style = "display: none;";
        } else {
            hiddenFolder.style = "display: block;";
        }
    });
    
    // --------------------------------------------------
    // -------------------------------SCROLL TO TOP BUTTON
    // --------------------------------------------------

    var topButton = document.querySelector('#onTop');

    window.addEventListener("scroll", function (event) {
        var scrollHeight = this.scrollY;
        var monitorHeight = window.innerHeight / 2;
        if(scrollHeight > monitorHeight){
            topButton.style = "visibility: visible; opacity: 1";
        } else {
            topButton.style = "visibility: hidden";            
        }
    });
    
    
}