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


// var map = L.map('mapid').setView([50.47011,3.95655], 19);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([50.47011,3.95655]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
}