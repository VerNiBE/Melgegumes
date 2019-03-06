document.addEventListener("DOMContentLoaded", function() {        

        // Selection des mois

        function dateFr()
        {
             // on recupere la date
             var date = new Date();

             // on construit le message
             var message = [date.getMonth()];   // mois [date.getMonth()]
                console.log(message);
                
            //  return message;


            if (message == 0) {
                document.getElementById("janvier").classList.toggle("invisible");
                document.getElementById("fevrier").classList.toggle("invisible");
                document.getElementById("fevrier").classList.toggle("monthLeg","borderLignRed");
                
            }
            if (message == 1) {
                document.getElementById("fevrier").classList.toggle("invisible");
                document.getElementById("mars").classList.toggle("invisible");
                document.getElementById("mars").classList.toggle("monthLeg","borderLignRed");
            }
            if (message == 2) {
                document.getElementById("mars").classList.toggle("invisible");
                document.getElementById("avril").classList.toggle("invisible");
                document.getElementById("avril").classList.toggle("monthLeg","borderLignRed");
                
            }
            if (message == 3) {
                document.getElementById("avril").classList.toggle("invisible");
                document.getElementById("mai").classList.toggle("invisible");
                document.getElementById("mai").classList.toggle("monthLeg","borderLignRed");
                
            }
            if (message == 4) {
                document.getElementById("mai").classList.toggle("invisible");
                document.getElementById("juin").classList.toggle("invisible");
                document.getElementById("juin").classList.toggle("monthLeg","borderLignRed");
            }
            if (message == 5) {
                document.getElementById("juin").classList.toggle("invisible");
                document.getElementById("juillet").classList.toggle("invisible");
                document.getElementById("juillet").classList.toggle("monthLeg","borderLignRed");
                
            }
            if (message == 6) {
                document.getElementById("juillet").classList.toggle("invisible");
                document.getElementById("aout").classList.toggle("invisible");
                document.getElementById("aout").classList.toggle("monthLeg","borderLignRed");
                
            }
            if (message == 7) {
                document.getElementById("aout").classList.toggle("invisible");
                document.getElementById("septembre").classList.toggle("invisible");
                document.getElementById("septembre").classList.toggle("monthLeg","borderLignRed");

                
            }
            if (message == 8) {
                document.getElementById("septembre").classList.toggle("invisible");
                document.getElementById("octobre").classList.toggle("invisible");
                document.getElementById("octobre").classList.toggle("monthLeg","borderLignRed");
                
            }
            if (message == 9) {
                document.getElementById("octobre").classList.toggle("invisible");
                document.getElementById("novembre").classList.toggle("invisible");
                document.getElementById("novembre").classList.toggle("monthLeg","borderLignRed");
                
            }
            
            if (message == 10) {
                document.getElementById("novembre").classList.toggle("invisible");
                document.getElementById("decembre").classList.toggle("invisible");
                document.getElementById("decembre").classList.toggle("monthLeg","borderLignRed");
                
            }
            
            if (message == 11) {
                document.getElementById("decembre").classList.toggle("invisible");
                document.getElementById("janvier02").classList.toggle("invisible");
                document.getElementById("janvier02").classList.toggle("monthLeg","borderLignRed");
                
            }
            
        }

        
    // Demarrage de la fonction du mini calendar

    if (document.getElementById("janvier") !== null) {
        dateFr();
    }

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

    if (document.getElementById("basket") !== null) {
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
            document.getElementById("commande").innerHTML = "Créer votre panier grace à la liste sous les paniers\n\nPour la date du :";
            
        });
    
        document.getElementById("big").addEventListener('click',function(){
    
            document.getElementById("containerLegumes").classList.add("invisible");
            document.getElementById("footer").classList.add("marginSpace");
            document.getElementById("commande").innerHTML = "Je souhaite un grand panier a 35€ \n\nPour la date du :";

        });
    
        document.getElementById("normal").addEventListener('click',function(){
    
            document.getElementById("containerLegumes").classList.add("invisible");
            document.getElementById("footer").classList.add("marginSpace");
            document.getElementById("commande").innerHTML = "Je souhaite un panier moyen a 25€ \n\nPour la date du :";

        });
    
        document.getElementById("small").addEventListener('click',function(){
    
            document.getElementById("containerLegumes").classList.add("invisible");
            document.getElementById("footer").classList.add("marginSpace");
            document.getElementById("commande").innerHTML = "Je souhaite un petit panier a 20€ \n\nPour la date du :";
            
        });
    }


});