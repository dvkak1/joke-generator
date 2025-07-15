const dadJokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("dad-joke-btn");


const generateDadJoke = () => {
   const xhr = new XMLHttpRequest();
   xhr.open("GET", "https://api.chucknorris.io/jokes/random");

      xhr.onreadystatechange = function() {
         if (this.readyState === 4 && this.status === 200) {
              dadJokeEl.innerHTML = JSON.parse(this.responseText).value;
         } else {
              dadJokeEl.innerHTML = "Chuck Joke brain not found. Am sorry!";
         }
    };

   xhr.send();
};

jokeBtn.addEventListener("click", generateDadJoke);
document.addEventListener("DOMContentLoaded", generateDadJoke);