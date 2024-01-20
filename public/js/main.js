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


// arrays 
let upperCharacter = ["A","B","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCharacter = ["a","b","c","d","e","f","g","h","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
let numbersCharacter = ["0","1","2","3","4","5","6","7","8","9"];
let symbolsCharacter = ["!","#","$","%","&","*","+","-","?","@","§,","_",")","^","µ","£","/"];



let password = ""
let arrayCharacter = []

function getRandomPassword() {
    if (uppercase.checked) {
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
    if (lenghtPassword.value > 1) {
        for (let index = 0; index < lenghtPassword.value; index++) {
            let randomIndex = Math.floor(Math.random() * arrayCharacter.length)
            password = password + arrayCharacter[randomIndex]
        }
    } 
    return password
}



buttonGenerate.addEventListener("click", function () {
    password = ""
    if (lenghtPassword.value <= 0) {
        document.querySelector(".lenght0").style.display = "block"
        setTimeout(() => {
            document.querySelector(".lenght0").style.display = "none"
        }, 1000);
    }
    inputPasseword.value = getRandomPassword()
})

buttonCopy.addEventListener("click", () => {
    buttonCopy.value = inputPasseword.value
    if (inputPasseword.value == "") {
        document.querySelector(".messageError").style.display = "block"
        setTimeout(() => {
            document.querySelector(".messageError").style.display = "none"
        }, 1500);
        return
    }
    navigator.clipboard.writeText(inputPasseword.value).then(() => {
        document.querySelector(".message").style.display = "block";

        setTimeout(() => {
          document.querySelector(".message").style.display = "none";
        }, 2000); //! Pour copier dans le ClipBoard 
})})

