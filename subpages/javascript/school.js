var randomStrings = [
    "education is the key to unlocking the world, a passport to freedom.",
    "teachers open the door, but you must enter by yourself.",
    "the capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    "excellence is not being the best; it is doing your best.",
    "the roots of education are bitter, but the fruit is sweet.",
 ];
 
 
 
 var randomDiv = document.getElementById("myRandomDiv");
 
 document.getElementById("myButton").addEventListener("click", function() {
       randomIndex = Math.abs(Math.round((Math.random()*randomStrings.length-1)));
       newText = randomStrings[randomIndex];
       randomDiv.innerHTML = newText;
 });
 
 