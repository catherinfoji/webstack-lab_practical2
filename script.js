window.onload=()=>{
    const jokesApi = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    var jokeButton=document.getElementById("joke");
    
    

    jokeButton.addEventListener('click',async()=>{
        console.log("joke button is pressed")
        await fetch(jokesApi).then((result)=>{
            result.json().then((data)=>{
                var newJoke = document.createElement('div')
                newJoke.className = "single-item"
                if(data.type === "single"){
                    newJoke.innerHTML = data.joke
                }
                else if(data.type === "twopart"){
                    newJoke.innerHTML = `${data.setup} . ${data.delivery}`
                }

                if(data.flags.nsfw===true){
                    newJoke.style.border="2px solid red"
                    newJoke.style.backgroundColor="#ffb1b1"
                }

                document.getElementById("jokes-container").appendChild(newJoke)

            })
        }).catch((err)=>{
            console.log(err);
        })
    })
}

