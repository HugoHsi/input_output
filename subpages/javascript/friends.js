var randomStrings = [
    "anything is possible when you have the right people there to support you.",
    "friendship is the golden thread that ties the heart of all the world.",
    "a good friend is like a four-leaf clover; hard to find and lucky to have.",
    "a strong friendship doesn't need daily conversation and doesn't always need togetherness. as long as the relationship lives in the heart, true friends will never part.",
    "your worst enemy could be your best friend and your best friend could be your worst enemy.",
];



var randomDiv = document.getElementById("myRandomDiv");

document.getElementById("myButton").addEventListener("click", function() {
      randomIndex = Math.abs(Math.round((Math.random()*randomStrings.length-1)));
      newText = randomStrings[randomIndex];
      randomDiv.innerHTML = newText;
});

