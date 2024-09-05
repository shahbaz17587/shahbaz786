

                                                              //navbar icon content start//
    var navbarIcon = document.querySelector("#icon-navbar");
var navbarItems = document.querySelector(".accordain");
var main = document.querySelector(".accordain-main");
navbarIcon.addEventListener("click",()=>{
    main.classList.toggle("icon-block");
});
                                                                 //navbar icon content end//
                                            //titile plus and minus and block or none start//
var accordainItems = document.querySelectorAll(".accordain-main-item");
var currentlyExpandedItem = null;

accordainItems.forEach(item => {
    var title = item.querySelector(".accordain-title");
    var content = item.querySelector(".accordain-content");

    title.addEventListener("click", () => {
        var plusIcon = title.querySelector(".plus-icon");

        // If there is a currently expanded item, collapse it
        if (currentlyExpandedItem && currentlyExpandedItem !== item) {
            var currentTitle = currentlyExpandedItem.querySelector(".accordain-title");
            var currentContent = currentlyExpandedItem.querySelector(".accordain-content");
            var currentPlusIcon = currentTitle.querySelector(".plus-icon");
            currentPlusIcon.innerText = "+";
            currentContent.style.display = "none";
        }

        // Toggle the clicked item
        if (plusIcon.innerText === "+") {
            plusIcon.innerText = "-";
            content.style.display = "block";
            currentlyExpandedItem = item; 
        } else {
            plusIcon.innerText = "+";
            content.style.display = "none";
            currentlyExpandedItem = null; 
        }
    });
});
                                            //titile plus and minus and block or none end//
                                                     
                                            //subtitile plus and minus and block or none start//
                                            
var accordain = document.querySelectorAll(".accordain-main-item");

accordain.forEach(item => {
    var accordainContent = item.querySelectorAll(".accordain-content");
    accordainContent.forEach(content => {
        var subtitle = content.querySelectorAll(".sub-title");
        subtitle.forEach(subtitle => {
            var subplusIcon = subtitle.querySelector(".sub-plus-icon");
            var subcontent = subtitle.nextElementSibling; // Assumes subcontent is the next sibling element

            subtitle.addEventListener("click", () => {
                // Hide all other subcontents and reset icons
                content.querySelectorAll(".sub-title").forEach(s => {
                    var icon = s.querySelector(".sub-plus-icon");
                    var sContent = s.nextElementSibling;

                    if (s !== subtitle) {
                        icon.innerText = "+";
                        sContent.style.display = "none";
                    }
                });

                // Toggle the current subcontent and icon
                if (subplusIcon.innerText === "+") {
                    subplusIcon.innerText = "-";
                    subcontent.style.display = "block";
                } else {
                    subplusIcon.innerText = "+";
                    subcontent.style.display = "none";
                }
            });
        });
    });
});
                                            //titile plus and minus and block or none end//
                                            //animation code/



function mainAnimation() {

        function firstAnim() {
            // Code for firstAnim
            function applyAnimation(element, animationName, duration, delay) {
                element.style.animationName = animationName;
                element.style.animationDuration = duration;
                element.style.animationFillMode = "forwards";
                element.style.animationDelay = delay;
                element.style.animationTimingFunction = "ease";
            }
        
            const firstImg = document.querySelector(".animFirst");
            const headingText = document.querySelector(".first-heading-text");
            const secondText = document.querySelector(".second-text");
            const thirdText = document.querySelector(".third-text");
            const forthText = document.querySelector(".forth-text");
            const startedText = document.querySelector(".a-started");
        
            if (firstImg) applyAnimation(firstImg, "animfirstImg", "1.5s", "1s");
            if (headingText) applyAnimation(headingText, "animfirstheadingtext", "1.5s", "2.5s");
            if (secondText) applyAnimation(secondText, "animfirstheadingtext", "1.5s", "4s");
            if (thirdText) applyAnimation(thirdText, "animfirstheadingtext", "1.5s", "5.5s");
            if (forthText) applyAnimation(forthText, "animfirstheadingtext", "1.5s", "7s");
            if (startedText) applyAnimation(startedText, "animfirstImg", "1.5s", "8.5s");
        }

        
function secondAnim() {
    // Code for secondAnim
    function applyAnimation(element, animationName, duration, delay) {
        element.style.animationName = animationName;
        element.style.animationDuration = duration;
        element.style.animationFillMode = "forwards";
        element.style.animationDelay = delay;
        element.style.animationTimingFunction = "ease";
    }

    const sFirstText = document.querySelector(".s-first-text");
    const sSecondText = document.querySelector(".s-second-text");
    const sThirdText = document.querySelector(".s-third-text");
    const sForthText = document.querySelector(".s-forth-text");
    const secondImg = document.querySelector(".second-img");

    if (sFirstText) applyAnimation(sFirstText, "animsecondtext", "1.5s", "1.5s");
    if (sSecondText) applyAnimation(sSecondText, "animsecondtext", "1.5s", "4s");
    if (sThirdText) applyAnimation(sThirdText, "animsecondtext", "1.5s", "5.5s");
    if (sForthText) applyAnimation(sForthText, "animsecondtext", "1.5s", "7s");
    if (secondImg) applyAnimation(secondImg, "secondimg", "1.5s", "8.5s");
}
    function thirdAnim() {
        // Code for thirdAnim
        function applyAnimation(element, animationName, duration, delay) {
            element.style.animationName = animationName;
            element.style.animationDuration = duration;
            element.style.animationFillMode = "forwards";
            element.style.animationDelay = delay;
            element.style.animationTimingFunction = "ease";
        }
    
        const thirdImg = document.querySelector(".thirdimg");
        const tfirstText = document.querySelector(".third-first-Text");
        const tsecondText = document.querySelector(".third-second-Text");
        const tforthText = document.querySelector(".third-third-Text");
    
        if (thirdImg) applyAnimation(thirdImg, "animfirstheadingtext", "2s", "1s");
        if (tfirstText) applyAnimation(tfirstText, "animfirstImg", "2s", "3s");
        if (tsecondText) applyAnimation(tsecondText, "animsecondtext", "2s", "5s");
        if (tforthText) applyAnimation(tforthText, "secondimg", "2s", "7s");
    }


    // var slides = document.querySelector(".slides");
    // var slidecount = document.querySelectorAll(".slide").length;
    // var prev = document.querySelector(".prev");
    // var next = document.querySelector(".next");

    // var currentIndex = 0;
    // function newslidePosition(){
    //     const slideposition = -currentIndex * 100;
    //     console.log(slideposition);
    //     slides.style.transform = `translateX(${slideposition}%)`
    // }
    
    // next.addEventListener("click",()=>{
    //     currentIndex = (currentIndex + 1) % slidecount;
    //     console.log(currentIndex);
    //     newslidePosition();
    // })
    // }

 

}
mainAnimation();


//water animation//

function mainslidefun(){
    var slidesSecond = document.querySelector(".slides-second");
    var slidecount = document.querySelectorAll(".s-slider").length;
    var slidesec = document.querySelectorAll(".s-slider");
    var currentIndex = 0;
    
    function newanim(){
       newposition = -currentIndex * 100;
       slidesec.forEach(slide =>{
       slide.style.transform = `translateX(${newposition}%)`;
       })
    }
    setTimeout(()=>{
        currentIndex = (currentIndex + 1) % slidecount;
        newanim();
    },2000);
    setTimeout(()=>{
        currentIndex = (currentIndex - 1 + slidecount) % slidecount;
        newanim();
    },5000)
}
mainslidefun();
setInterval(mainslidefun,9000);

//slide animation start//
let slideIndex = 0;
const slideanim = document.querySelectorAll(".animation");
const slideanimCount = slideanim.length;
const displaytime = 14500;
let cleartime;
function slideanimation(newIndex) {
    clearTimeout(cleartime);

    const currentSlide = slideanim[slideIndex];
    const newSlide = slideanim[newIndex];

    if (currentSlide) {
        currentSlide.querySelector(".first-heading-text")?.classList.remove("headingText");
        currentSlide.querySelector(".animation-first-img .animFirst")?.classList.remove("firstImg");
        currentSlide.querySelector(".second-text")?.classList.remove("secondText");
        currentSlide.querySelector(".third-text")?.classList.remove("thirdText");
        currentSlide.querySelector(".forth-text")?.classList.remove("forthText");
        currentSlide.querySelector(".a-started")?.classList.remove("startedText");
    }

    slideIndex = newIndex;

    if (newSlide) {
        newSlide.querySelector(".animation-first-img .animFirst")?.classList.add("firstImg");
        newSlide.querySelector(".animation-first-text .first-heading-text")?.classList.add("headingText");
        newSlide.querySelector(".second-text")?.classList.add("secondText");
        newSlide.querySelector(".third-text")?.classList.add("thirdText");
        newSlide.querySelector(".forth-text")?.classList.add("forthText");
        newSlide.querySelector(".a-started")?.classList.add("startedText");

        // Move the current slide out and the new slide in
        slideanim.forEach((animate, index) => {
            animate.style.transform = `translateX(${-newIndex * 100}%)`;
        });
    }

    // Second animation

   

    if (currentSlide) {
        currentSlide.querySelector(".s-first-text")?.classList.remove("sFirstText");
        currentSlide.querySelector(".s-second-text")?.classList.remove("sSecondText");
        currentSlide.querySelector(".s-third-text")?.classList.remove("sThirdText");
        currentSlide.querySelector(".s-forth-text")?.classList.remove("sForthText");
        currentSlide.querySelector(".second-img")?.classList.remove("secondImg");
    }
    

    if (newSlide) {
        newSlide.querySelector(".s-first-text")?.classList.add("sFirstText");
        newSlide.querySelector(".s-second-text")?.classList.add("sSecondText");
        newSlide.querySelector(".s-third-text")?.classList.add("sThirdText");
        newSlide.querySelector(".s-forth-text")?.classList.add("sForthText");
        newSlide.querySelector(".second-img")?.classList.add("secondImg");

    }
    //third animation//
  
    if (currentSlide) {
        currentSlide.querySelector(".thirdimg")?.classList.remove("thirdImg");
        currentSlide.querySelector(".third-first-Text")?.classList.remove("tfirstText");
        currentSlide.querySelector(".third-second-Text")?.classList.remove("tsecondText");
        currentSlide.querySelector(".third-third-Text")?.classList.remove("tforthText");
    }

    if (newSlide) {
        newSlide.querySelector(".thirdimg")?.classList.add("thirdImg");
        newSlide.querySelector(".third-first-Text")?.classList.add("tfirstText");
        newSlide.querySelector(".third-second-Text")?.classList.add("tsecondText");
        newSlide.querySelector(".third-third-Text")?.classList.add("tforthText");
    }

    cleartime = setTimeout(() => {
        const nextIndex = (slideIndex + 1) % slideanimCount;
        slideanimation(nextIndex);
    }, 11000);
}

slideanimation(slideIndex);

var Prev = document.querySelector(".prev");
var Next = document.querySelector(".next");
Next.addEventListener("click",()=>{
    console.log("yes");
    const nextIndex = (slideIndex + 1) % slideanimCount;
    slideanimation(nextIndex);  
});
Prev.addEventListener("click",()=>{
    console.log("no");
    const nextIndex = (slideIndex - 1 + slideanimCount) % slideanimCount;
    slideanimation(nextIndex); 
})



//slide animation end//



