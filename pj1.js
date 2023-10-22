for (let i = 1; i < 9; i++) {




    const hello = async () => {

        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();


        return data;
    };

    hello()
        .then(data => {
            a = i;

            const jokeText = document.getElementById('p' + a);
            jokeText.innerHTML = data.setup + "<br><br>" + data.punchline;
        }
        )
        .catch(error => {
            console.error('Error fetching joke:', error);
        });

}

function flipCard(card) {
    card.classList.toggle('flip');
    
}

function playAudio() {
    var audio = document.getElementById("Audio");
    audio.play();
  };

  for (let i = 1; i < 9; i++) {




    const hello = async () => {

        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();


        return data;
    };
    jokes=[];
    quotes=[];
    

    hello()
        .then(data => {
            b = i;
          

            const quoteText = document.getElementById('pb' + b);
            quoteText.innerHTML = data.content + "<br><br>" + data.author;
            function likedq(){
                quotes.push(data.content);

            }
        }
        )
        .catch(error => {
            console.error('Error fetching quote:', error);
        });

}



