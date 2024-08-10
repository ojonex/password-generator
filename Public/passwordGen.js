console.log("client side running");


document.getElementById("gen-btn").addEventListener("click", generatePassword);


var length = 15;
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!£$%^&*()";
var emptyPass = "";
//password generation -- with a use case 
function generatePassword() {
    while (emptyPass.length < 15) {
        emptyPass += charset.charAt(Math.floor(Math.random() * 72));
    } if (emptyPass.length <= 15) {
        emptyPass = "";
        while (emptyPass.length < length) {
            emptyPass += charset.charAt(Math.floor(Math.random() * 72));
        }
    }
    console.log(emptyPass);
    document.getElementById("pass-box").value = emptyPass;
    return emptyPass;

}


