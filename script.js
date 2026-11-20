let menuLinks = document.getElementById("menuLinks")
        let menuIcon = document.getElementById("menuIcon")

        menuLinks.style.maxHeight = "0px"

        menuIcon.addEventListener("click", () => {
            if(menuLinks.style.maxHeight === "0px")
            {
                menuLinks.style.maxHeight = "350px"
            }
            else{
                menuLinks.style.maxHeight = "0px"
            }
        })

let forma = document.getElementById("forma")
let poruka = document.getElementById("poruka")

forma.addEventListener("submit", function(e){

    e.preventDefault()

    let ime = document.getElementById("ime").value

    if(ime.length < 3)
    {
        poruka.innerText = "Ime mora imati minimum 3 slova"
        poruka.style.color = "red"
    }
    else
    {
        poruka.innerText = "Uspešno poslato: " + ime
        poruka.style.color = "green"
    }

})


let dugmici = document.querySelectorAll(".menu-item .btn")

for(let i = 0; i < dugmici.length; i++)
{
    dugmici[i].addEventListener("click", function(){

        if(dugmici[i].innerText === "Dodaj")
        {
            dugmici[i].innerText = "Dodato"
            dugmici[i].style.backgroundColor = "green"
        }
        else
        {
            dugmici[i].innerText = "Dodaj"
            dugmici[i].style.backgroundColor = "crimson"
        }

    })
}


function izracunajCenu(cena)
{
    return cena
}

let cenaDugmici = document.querySelectorAll(".cena-btn")

let cene = [650, 480, 720]

for(let i = 0; i < cenaDugmici.length; i++)
{
    cenaDugmici[i].addEventListener("click", function(){

        let ukupnaCena = izracunajCenu(cene[i])

        alert("Cena je: " + ukupnaCena + " din")

    })
}


let hrana = ["Hrana 1 ", "Hrana 2 ", "Hrana 3 ", "Hrana 4 ", "Hrana 5 ", "Hrana 6"]

let prikaziHranu = document.getElementById("prikaziHranu")

prikaziHranu.addEventListener("click", function(){

    let tekst = ""

    for(let i = 0; i < hrana.length; i++)
    {
        tekst += hrana[i].toUpperCase() + ""

    }

    alert(tekst)

})


let slike = document.querySelectorAll(".menu-item img")

for(let i = 0; i < slike.length; i++)
{
    slike[i].addEventListener("mouseover", function(){
        slike[i].style.transform = "scale(1.05)"
        slike[i].style.transition = "0.3s"
    })

    slike[i].addEventListener("mouseout", function(){
        slike[i].style.transform = "scale(1)"
    })
}