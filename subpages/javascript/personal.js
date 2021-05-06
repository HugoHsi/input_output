var randomStrings = [
   "if your dreams don't scare you, they are too small.",
   "two things you are in total control of in your life are your attitude and your effort.",
   "sometimes you will never know the value of a moment until it becomes a memory.",
   "just don't give up trying to do what you really want to do. where there is love and inspiration, I don't think you can go wrong.",
   "success is not final; failure is not fatal; it is the courage to contine that counts.",
];



var randomDiv = document.getElementById("myRandomDiv");

document.getElementById("myButton").addEventListener("click", function() {
      randomIndex = Math.abs(Math.round((Math.random()*randomStrings.length-1)));
      newText = randomStrings[randomIndex];
      randomDiv.innerHTML = newText;
});

