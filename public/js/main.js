// input Value with passeword
let inputPasseword = document.querySelector(".inputCopy")

// Button copy
let buttonCopy = document.querySelector(".buttonCopy")

// Lenght password
let lenghtPassword  = document.querySelector("#lenght")

// UpperCase (1)
let uppercase = document.querySelector("#uppercase")

// LowerCase (2)
let lowercase = document.querySelector("#lowercase")

// Numbers (3)
let numbers = document.querySelector("#numbers")

// Symbols (4)
let symbols = document.querySelector("#symbols")

// Button generate
let buttonGenerate = document.querySelector(".btnGenerate")


// arrays  //! Creation des tableaux
let upperCharacter = ["A","B","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCharacter = ["a","b","c","d","e","f","g","h","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
let numbersCharacter = ["0","1","2","3","4","5","6","7","8","9"];
let symbolsCharacter = ["!","#","$","%","&","*","+","-","?","@","§,","_",")","^","µ","£","/"];



let password = ""  //! variable vide pour stocker le mot de passe
let arrayCharacter = [] //! Le tableau qui va servir a concat les tableaux

function getRandomPassword() {
    if (uppercase.checked) { //! Si la condition est vraie => le tableau va concat
        arrayCharacter = arrayCharacter.concat(upperCharacter)
    }
    if (lowercase.checked) {
        arrayCharacter = arrayCharacter.concat(lowerCharacter)
    }
    if (numbers.checked) {
        arrayCharacter = arrayCharacter.concat(numbersCharacter)

    }
    if (symbols.checked) {
        arrayCharacter = arrayCharacter.concat(symbolsCharacter)

    }
    if (lenghtPassword.value > 1) { //! la longueur ne peut pas être inférieur à 1
        for (let index = 0; index < lenghtPassword.value; index++) {
            let randomIndex = Math.floor(Math.random() * arrayCharacter.length)
            password = password + arrayCharacter[randomIndex]
        }
    } 
    return password
}



buttonGenerate.addEventListener("click", function () {
    password = ""
    if (lenghtPassword.value <= 0) { //! si la longueur est == 0, il y aura un message d'erreur
        document.querySelector(".lenght0").style.display = "block"  //! Block pour afficher
        setTimeout(() => {
            document.querySelector(".lenght0").style.display = "none" //! none pour le cacher et avec un timer de 1 seconde
        }, 1000);
    }
    inputPasseword.value = getRandomPassword()
})

buttonCopy.addEventListener("click", () => {
    buttonCopy.value = inputPasseword.value
    if (inputPasseword.value == "") { //! Si l'input est vide, un message s'affiche 
        document.querySelector(".messageError").style.display = "block"
        setTimeout(() => {
            document.querySelector(".messageError").style.display = "none"
        }, 1500);
        return
    }
    navigator.clipboard.writeText(inputPasseword.value).then(() => { //! Une fois copier, un message s'affiche 
        document.querySelector(".message").style.display = "block";

        setTimeout(() => {
          document.querySelector(".message").style.display = "none";
        }, 2000); //! Pour copier dans le ClipBoard 
})})

