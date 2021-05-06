var randomStrings = [
    "being a family means you are a part of something very wonderful. it means you will love and be loved for the rest of your life.",
    "family isn't defined only by last names or by blood; it's defined by commitment and by love. it means showing up when they need it most. it means having each other's backs. it means choosing to love each other even on those days when you struggle to like each other. it means never giving up on each other!",
    "families are the compass that guides us. they are the inspiration to reach great heights. and our comfort when we occasionally falter.", 
    "wealth would leave, sometimes even your health, your network, everything would disappear and you would be left with just family. family is all you've got, so treat them right.",
    "no family is perfect... we argue, we fight. we even stop talking to each other at times, but in the end, family is family... the love will always be there.",
];



var randomDiv = document.getElementById("myRandomDiv");

document.getElementById("myButton").addEventListener("click", function() {
      randomIndex = Math.abs(Math.round((Math.random()*randomStrings.length-1)));
      newText = randomStrings[randomIndex];
      randomDiv.innerHTML = newText;
});

