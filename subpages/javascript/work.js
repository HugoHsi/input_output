var randomStrings = [
    "a little progress each day adds up to big results.",
    "don't judge each day by the harvest you reap but by the seeds that you plant",
    "quality means doing it right when no one is looking.",
    "the best preparation for good work tomorrow is to do good work today.",
    "choose a job you love and you will never have to work a day in your life.",
 ];
 
 
 
 var randomDiv = document.getElementById("myRandomDiv");
 
 document.getElementById("myButton").addEventListener("click", function() {
       randomIndex = Math.abs(Math.round((Math.random()*randomStrings.length-1)));
       newText = randomStrings[randomIndex];
       randomDiv.innerHTML = newText;
 });
 
 