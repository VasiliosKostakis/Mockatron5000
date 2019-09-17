$(document).ready(function () {

        $("#btnid")[0].onclick = function () {
            var userInput = document.getElementById('cashmoney').value;
            document.getElementById('PLSBOSS').innerHTML = chrome.extension.getBackgroundPage().spongeBob(userInput);
        };
});