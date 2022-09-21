window.addEventListener("load", () => {
    let sound = new Audio();


    const form = document.querySelector(".task-form");
    const input = document.querySelector(".input-task");
    const screen = document.getElementById("result");
    const display = document.querySelector(".display");
    let count = 0;
    let min = 1000;
    let max = 5000;
    let i = Math.floor(Math.random() * (max - min) + min);


    const nextDev = document.createElement("div");
    nextDev.classList = "nextDev";
    const click = document.createElement("button");
    click.type = "submit";
    click.classList = "nextLevel";
    click.innerHTML = "<a href='game9.html' style='text-decoration:none; color: green';>Next Level</a>"


    const previous = document.createElement("button");
    previous.type = "submit";
    previous.classList = "nextLevel";
    previous.innerHTML = "<a href='game7.html' style='text-decoration:none; color: green';>Prev. Level</a>"
    previous.style.float = "left"

    const cup = document.createElement("div");
    const logo = document.createElement("div");
    cup.classList.add("cup");
    logo.classList.add("cup");
    const img = document.createElement("img")
    const img1 = document.createElement("img")
    const img2 = document.createElement("img")
    const logo1 = document.createElement("img")
    const logo2 = document.createElement("img")
    const logo3 = document.createElement("img")
    img.classList.add("img");
    img1.classList.add("img");
    img2.classList.add("img");
    logo1.classList.add("logo")
    logo2.classList.add("logo")
    logo3.classList.add("logo")
    logo1.src = "a.png"
    logo2.src = "a.jpg"
    logo3.src = "aa.jpg"
    logo1.style.marginLeft = "40%"
    logo.appendChild(logo1)
    logo.appendChild(logo2)
    logo.appendChild(logo3)
    congratulation.appendChild(logo)






    // display()
    form.addEventListener("submit", (e) => {
        e.preventDefault();



        nextDev.appendChild(click)
        // console.log(display)

        screen.style.fontSize = "2em"

        const inputNum = input.value
        if (inputNum < i && inputNum != "") {
            screen.value = `${inputNum} is less than the Random Number`;
            screen.style.color = "rgb(8, 255, 8)"
            count++;
            sound.src = 'crowd-laughing.WAV';
            sound.play();
        }
        if (inputNum > i && inputNum != "") {
            screen.value = `${inputNum} is greater than the Random Number`;
            sound.src = 'laughing-teenagers.WAV';
            sound.play();
            screen.style.color = "red"
            count++;
        }
        if (inputNum == i && inputNum != "") {
            display.appendChild(previous);
            display.appendChild(click);
            sound.src = 'small-clapping.WAV';
            sound.play();
            screen.style.background = "green";
            screen.style.fontSize = "2em"
            screen.value = `YOU TRY ${count} TIMES, BEFOR GETTING THR RIGHT ANSWER: ${i}`;
            if (count !== 0) {
                screen.style.color = " white"
                img.src = "aa.jpg"
                img1.src = "a.jpg"
                img2.src = "aa.jpg"
                img.style.marginLeft = "33%"
                img1.style.marginLeft = "10px"
                img2.style.marginLeft = "10px"
                cup.appendChild(img)
                cup.appendChild(img1)
                // cup.appendChild(img2)
                congratulation.appendChild(cup)
            } else {
                screen.style.color = "yellow"
                img.src = "aa.jpg"
                img1.src = "a.jpg"
                img2.src = "aa.jpg"
                img.style.marginLeft = "33%"
                img1.style.marginLeft = "10px"
                img2.style.marginLeft = "10px"
                cup.appendChild(img)
                // cup.appendChild(img1)
                cup.appendChild(img2)
                congratulation.appendChild(cup)
                sound.src = 'clapping-strongly.WAV';
                sound.play();

            }
        }
    });

})