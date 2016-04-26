
function Checker( keywordArr ) {

    var result;

    this.check = function( postText ) {
        var stringLowerCased = postText.toLowerCase();
        var keywordArrLength = keywordArr.length;
        var keywordCount = 0;
        for ( var i = 0; i < keywordArrLength; i++ ) {
            var keyword = keywordArr[i];
            if ( postText.indexOf( keyword ) > -1 ) {
                keywordCount++;
            }
        }

        if ( keywordCount >= keywordArrLength / 4  ) {
            result = "It's a scam.";
        } else if ( keywordCount >= keywordArrLength / 8 ) {
            result = "It's possibly a scam.";
        } else {
            result = "It might not be a scam or it can be a new one. Please do more research.";
        }

        console.log(keywordCount);
    }

    this.getResult = function() {
        return result;
    };
}

var scamKeywords = ["wire", "post", "uk", "keys", "id", "country", "mail", "out", "deposit", "transfer", "00", "number", "large kitchen", "available", "united kingdom", "family", "honest", "back", "job"];

var button = document.getElementById("button");
var resultText = document.getElementById("result");

button.addEventListener("click", function( event ) {
    event.preventDefault() 
    var postText = document.getElementById("postText").value;
    var checker = new Checker( scamKeywords );
    checker.check( postText );
    resultText.textContent = checker.getResult();
});






