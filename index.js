
    // alert("JavaScript working properly");

    

    // This is the one way of doing this 
    /*

    let allButtons =  document.querySelectorAll(".drum")

    console.log(allButtons)
    let allButtonsArr = Array.from(allButtons)
    console.log(allButtonsArr)

    function clickHandle(btn)
    {
        // return function () {
            alert("I got Clicked");
            let clickedButton = btn.textContent;
            console.log(`the button is ${clickedButton}`);
        //   };
    }

    
    allButtonsArr.forEach(function(btn)
    {
        btn.addEventListener("click", clickHandle)
    })

    */ 

    

    // The more compact and looped method 

    let noOfButtons = document.querySelectorAll(".drum").length;

    for (let i = 0; i < noOfButtons; i++)
    {
        let btn = document.querySelectorAll(".drum")[i]
        // console.log("first time", btn)

        //  Ye ek tarika hai event listener add krne ka
        /*
        btn.addEventListener("click", function(btn){
            alert("I got Clicked");
            // console.log("function time ", btn)
            let targetedButton = btn.target
            console.log(targetedButton)
            console.log(`the button is ${targetedButton.textContent}`);

            targetedButton.style.color = "white";

            // it is a annonumus function.
        });
        */

        // ye me apan button click se kam lere
        btn.addEventListener("click",function(evnt){
            // alert("I got Clicked");
            // console.log(this);
            // console.log("the buttunnnnnnnn is", btn)
            console.log(`the button is ${this.textContent}`);

            let clickedButton = this.textContent

            makesound(btn.innerHTML)
            // this.style.color = "white";
            pressKeyEffect(btn.innerHTML)
        })

        //  ye apan keypress se kam lere
        document.addEventListener("keypress", function(event){
            // console.log("by key prss", event)
            // console.log("by key prs and", event.key)
            makesound(event.key)
            pressKeyEffect(event.key)
        })

        function makesound(key)
        {
            console.log("the pressed button is", key)
            switch (key) {
                case "w":
                    let tom1= new Audio("sounds/tom-1.mp3")
                    tom1.play();
                    break;
                case "a":
                    let tom2 = new Audio("sounds/tom-2.mp3")
                    tom2.play();
                    break;
                case "s":
                    let tom3 = new Audio("sounds/tom-3.mp3")
                    tom3.play();
                    break;
                case "d":
                    let tom4 = new Audio("sounds/tom-4.mp3")
                    tom4.play();
                    break;
                case "j":
                    let snare = new Audio("sounds/snare.mp3")
                    snare.play();
                    break;
                case "k":
                    let crash = new Audio("sounds/crash.mp3")
                    crash.play();
                    break;
                case "l":
                    let kickBass = new Audio("sounds/kick-bass.mp3")
                    kickBass.play();
                    break;
                default:
                    break;
            }

        }

        function pressKeyEffect(key)
        {
            // console.log("Bhaishab", key)
            let activeKey = document.querySelector("."+key)
            // console.log("Bhaiiiiiiishab", activeKey)
            activeKey.classList.add("pressed")

            setTimeout(function(){
                activeKey.classList.remove("pressed")
            }, 100)
        }


    }