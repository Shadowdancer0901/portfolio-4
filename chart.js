//chart nr 1
const genreCanvas = document.getElementById("chart1").getContext("2d");
let genreChart = new Chart(genreCanvas, {
    type: "bar",
    data: {
        labels: ["Rock", "Latin", "Metal", "Jazz"],
        datasets: [{
            label: "Top 4 Genres",
            data: [31, 20, 7, 7],
            backgroundColor: '#EE7452'
        }]
    },
    options: {
        scales: {
            x: { //here we set the colour of the x-axis text to white (for better vissability)
                ticks: {
                    color: '#FFF'
                }
            },
            y: { //here we set the color of the y-axis text to white
                ticks: {
                    color: '#FFF'
                }
            }
        },

        plugins: {
            legend: {
                labels: {
                    color: '#FFF'
                }
            }
        }
    }
});

//chart 2
const topBands = document.getElementById("chart2").getContext("2d");
const bandChart = new Chart(topBands, {
    type: "bar",
    data: {
        labels: ["Various Artists", "Deep Purple", "Faith No More"],
        datasets: [{
            label: "Top 3 bands",
            data: [ 4, 11, 4],
            backgroundColor: '#EE7452'
        }]
    },options: {
        scales: {
            x: { //here we set the colour of the x-axis text to white (for better vissability)
                ticks: {
                    color: '#FFF'
                }
            },
            y: { //here we set the color of the y-axis text to white
                ticks: {
                    color: '#FFF'
                }
            }
        },

        plugins: {
            legend: {
                labels: {
                    color: '#FFF'
                }
            }
        }
    }
});

//chart 3
const highestPlaytime = document.getElementById("chart3").getContext("2d");
const playtimeInMin = new Chart(highestPlaytime, {
    type: "bar",
    data: {
        labels: ["Unplugged", "Minha Historia", "International Superhits", "The Dream of Clapton", "The Essential Miles Davis"],
        datasets: [{
            label: "Top 5 Albums with most playtime",
            data: [45, 45.5, 78.5, 81, 45],
            backgroundColor: "#EE7452",
        }]
    },options: {
        scales: {
            x: { //here we set the colour of the x-axis text to white (for better vissability)
                ticks: {
                    color: '#FFF'
                }
            },
            y: { //here we set the color of the y-axis text to white
                ticks: {
                    color: '#FFF'
                }
            }
        },

        plugins: {
            legend: {
                labels: {
                    color: '#FFF'
                }
            }
        }
    }
});

//3
const mostSongs = document.getElementById("chart4").getContext("2d");
    const songQuantity = new Chart(mostSongs, {
        type: "bar",
        data: {
            labels:["kiss", "Audioslave", "Deep Purple", "Credence Clearwater Revival", "Led Zeppelin"],
            datasets: [{
                label: "Top 5 artists with the most songs",
                data: [20, 26, 90, 40, 20],
                backgroundColor:'#EE7452'
            }]
        },options: {
            scales: {
                x: { //here we set the colour of the x-axis text to white (for better vissability)
                    ticks: {
                        color: '#FFF'
                    }
                },
                y: { //here we set the color of the y-axis text to white
                    ticks: {
                        color: '#FFF'
                    }
                }
            },

            plugins: {
                legend: {
                    labels: {
                        color: '#FFF'
                    }
                }
            }
        }
    });


const addSong = document.querySelector("#songButton")
const textElement = document.querySelector("#textHere")
addSong.addEventListener("click", function(){

    const songSelector =["Inject The Venom by AC/DC", "Evil Walks by AC/DC", "Enter Sandman by Apocalyptica","Master Of Puppets by Apocalyptica",
        "Harvester Of Sorrow by Apocalyptica","Tomorrow's Dream by Black Sabbath", "Cornucopia by Black Sabbath", "First Time I Met The Blues by Buddy Guy",
        "Leave My Girl Alone by Buddy Guy", "Talkin' 'Bout Women Obviously by Buddy Guy", "A Sombra Da Maldade by Cidade Negra", "Pensamento by Cidade Negra",
        "Daniela by Various Artists", "My Love by Various Artists","Hammer To Fall by Queen", "The Show Must Go On by Queen",
        "I Was Made For Loving You by Kiss", "God Of Thunder by Kiss", "Shout It Out Loud by Kiss", "Hitchin' A Ride by Green Day",
        "Nice Guys Finish Last by Green Day", "Um Love by Ed Motta", "Samba Da Volta by Toquinho & Vinícius", "Deixa by Toquinho & Vinícius",
        "Lady Luck by Deep Purple", "Love Child by Deep Purple", "Child In Time by Deep Purple", "Fireball by Deep Purple", "Anyone's Daughter by Deep Purple",
        "No One Came by Deep Purple"];

    const randomSong = Math.floor(Math.random() * songSelector.length);
    let songText = songSelector[randomSong];

    textElement.innerText = songText;
});

/*   Jeg lavede en div hvor  jeg har smidt knappen ind.
div clas "container"
<p> id "textHere"
knap id "songButton"

<div class = "container">
    <p id="textHere">Where magic happens</p>
    <button id="songButton" class="RandomSong" onclick="randomSong">Click me</button>
</div>
 */