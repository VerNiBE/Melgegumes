document.addEventListener("DOMContentLoaded", function() {        

    //Script activation du menu burger.
    
    document.getElementById("icon_burger").addEventListener('click',function(){

        

                document.getElementById("nav").classList.toggle("visible");
                document.getElementById("backdrop").classList.toggle("visible");
    
    });
    
    //Activation de la zone sombre du menu

    document.getElementById("backdrop").addEventListener('click',function(){

        

        document.getElementById("nav").classList.toggle("visible");
        document.getElementById("backdrop").classList.toggle("visible");    
    });

    // Fermeture du menu avec les liens

    var x = document.getElementsByClassName("linksMenu");
    for (let i = 0; i < x.length; i++) {
        
        x[i].addEventListener('click',function(){

            document.getElementById("nav").classList.toggle("visible");
            document.getElementById("backdrop").classList.toggle("visible");
        });
        
    }
    
    //Activation du panier

    document.getElementById("basket").addEventListener('click',function(){

        document.getElementById("formulaire").classList.toggle("visible");
        document.getElementById("backdropForm").classList.toggle("visible");

    });

    //Activation de la zone sombre du formulaire

    document.getElementById("backdropForm").addEventListener('click',function(){

        document.getElementById("formulaire").classList.toggle("visible");
        document.getElementById("backdropForm").classList.toggle("visible");

    });

    // Liste de choix des paniers

    document.getElementById("random").addEventListener('click',function(){

        document.getElementById("containerLegumes").classList.remove("invisible");
        document.getElementById("footer").classList.remove("marginSpace");
        document.getElementById("commande").innerHTML = "Créer votre panier à partir de la liste sous les paniers";
        console.log("checked-random");
        
    });

    document.getElementById("big").addEventListener('click',function(){

        document.getElementById("containerLegumes").classList.add("invisible");
        document.getElementById("footer").classList.add("marginSpace");
        document.getElementById("commande").innerHTML = "Je souhaite un grand panier a 35€ \n\nPour la date du :";
        console.log("checked-big");
    });

    document.getElementById("normal").addEventListener('click',function(){

        document.getElementById("containerLegumes").classList.add("invisible");
        document.getElementById("footer").classList.add("marginSpace");
        document.getElementById("commande").innerHTML = "Je souhaite un panier moyen a 25€ \n\nPour la date du :";
        console.log("checked-normal");
    });

    document.getElementById("small").addEventListener('click',function(){

        document.getElementById("containerLegumes").classList.add("invisible");
        document.getElementById("footer").classList.add("marginSpace");
        document.getElementById("commande").innerHTML = "Je souhaite un petit panier a 20€ \n\nPour la date du :";
        console.log("checked-small");
    });



});