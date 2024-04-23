document.addEventListener("DOMContentLoaded", () => {
    const question = document.querySelector(".question");
    const img = document.querySelector(".img");
    const yesBtnL = document.querySelector(".yes-btn-left");
    const yesBtnR = document.querySelector(".yes-btn-right");
    const fingerBtn = document.querySelector(".finger-button");
    const backBtn = document.querySelector(".back-btn");
    let holdTimer;

    yesBtnL.addEventListener("click", () => {
        question.innerHTML = " ";
        img.src = "../Assets/Game3Assets/left-yes.png";
        backBtn.style.display = "inline-block"; // Show the Back button
        setTimeout(() => {
            img.src = "../Assets/Game3Assets/FingerPrint.png";
        }, 2000);
        setTimeout(() => {
            question.innerHTML= "Move finger higher or lower if shit dont work 😓"
        }, 10000);
    });

    fingerBtn.addEventListener("mousedown", startHoldTimer);
    fingerBtn.addEventListener("touchstart", startHoldTimer);

    fingerBtn.addEventListener("mouseup", cancelHoldTimer);
    fingerBtn.addEventListener("mouseleave", cancelHoldTimer);
    fingerBtn.addEventListener("touchend", cancelHoldTimer);
    fingerBtn.addEventListener("touchcancel", cancelHoldTimer);

    yesBtnR.addEventListener("click", () => {
        question.innerHTML = " ";
        img.src = "../Assets/Game3Assets/right-yes.png";
        backBtn.style.display = "inline-block"; // Show the Back button
        setTimeout(() => {
            img.src = "../Assets/Game3Assets/FingerPrint.png";
        }, 2000);
        setTimeout(() => {
            question.innerHTML= "Move finger higher or lower if shit dont work 😓"
        }, 10000);
    });

    function startHoldTimer(event) {
        event.preventDefault(); // Prevent default browser behavior
        holdTimer = setTimeout(() => {
            img.src = "../Assets/Game3Assets/Marriage.png";
        }, 3000);
    }

    function cancelHoldTimer(event) {
        event.preventDefault(); // Prevent default browser behavior
        clearTimeout(holdTimer);
    }
});
