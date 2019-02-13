window.onload = function () {        

    //Script activation du menu burger.

    document.getElementById("icon_burger").addEventListener('click',function(){

        

                document.getElementById("nav").classList.toggle("visible");
                document.getElementById("backdrop").classList.toggle("visible");

                console.log(document.getElementById("icon_burger").display=="none");
    
    });
    
    document.getElementById("backdrop").addEventListener('click',function(){

        

        document.getElementById("nav").classList.toggle("visible");
        document.getElementById("backdrop").classList.toggle("visible");
        console.log(document.getElementById("icon_burger").display=="none");

});

}