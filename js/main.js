window.onload = function () {        

    //Script activation du menu burger.

    document.getElementById("icon_burger").addEventListener('click',function(){

        

                document.getElementById("nav").classList.toggle("visible");
                document.getElementById("backdrop").classList.toggle("visible");
    
    });
    
    document.getElementById("backdrop").addEventListener('click',function(){

        

        document.getElementById("nav").classList.toggle("visible");
        document.getElementById("backdrop").classList.toggle("visible");    
    });

    document.getElementsByClassName("linksMenu").addEventListener('click',function(){

        

        document.getElementById("nav").classList.toggle("visible");
        document.getElementById("backdrop").classList.toggle("visible");

});

    document.getElementById("basket").addEventListener('click',function(){

        document.getElementById("formulaire").classList.toggle("visible");
        document.getElementById("backdropForm").classList.toggle("visible");

    });

    document.getElementById("backdropForm").addEventListener('click',function(){

        document.getElementById("formulaire").classList.toggle("visible");
        document.getElementById("backdropForm").classList.toggle("visible");

    });


}