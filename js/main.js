window.onload = function () {
    console.log(document.getElementById("icon_burger").display=="block");
                    
    document.getElementById("icon_burger").addEventListener('click',function(){
        // document.getElementById("icon_burger").style.display="block";
        console.log(1);
        

                var menu = document.getElementById("nav");
                menu.classList.toggle("visible");
                console.log(document.getElementById("icon_burger").display=="none");




        console.log(2);
        

        

    });
    if(document.window.innerWidth >= 768){
        menu.classList.remove("visible");

        console.log(document.getElementById("icon_burger").display=="block");
        
    }
    for (var i = 0; i < 20; i++) {
        console.log(i);
    }
    console.log(i);
    
    
}