window.onload = function () {           
    document.getElementById("icon_burger").addEventListener('click',function(){

        

                var menu = document.getElementById("nav");
                menu.classList.toggle("visible");
                console.log(document.getElementById("icon_burger").display=="none");

    });
    
}