// Welcome, its up to you to make this better :)

const files = [
  "gym"
];

function turnOnTv(img){
    var container = document.getElementsByClassName("container")
    var tvContainer = document.getElementsByClassName("tv-container")[0];
    var tvScreen = document.getElementsByClassName("tv-screen")[0];
    var tvImage = document.getElementsByClassName("tvImage")[0];

    tvImage.src = img
    // display the image now
    tvImage.style.display = "block"

    // Apply the scaling animation to the TV screen
    tvScreen.style.transform = "translate(-50%, -50%) scale(1)";
    // Adjust the height of the TV container
    tvContainer.style.height = "76vh"; // Adjust the final height as needed
}

function findRoom(event) {
  if (event.keyCode === 13) {
    let inputValue = event.target.value;  // Assuming this is your input string

    // Step 1: Convert the string to lowercase
    inputValue = inputValue.toLowerCase();

    // Step 2: Trim leading and trailing spaces
    inputValue = inputValue.trim();

    // Step 3: Replace multiple spaces with a single space
    inputValue = inputValue.replace(/\s+/g, ' ');

    // Now inputValue holds the filtered string
    console.log(inputValue);

    var fileName = "Floors/" + inputValue + ".png";
    if (files.includes(inputValue)) {
      turnOnTv(fileName);
    } else  {
      document.getElementById("whereToBoss").value = "Sorry, Try again :(";
    }
  }
}
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#f0c333"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "svh.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 30,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 100,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


