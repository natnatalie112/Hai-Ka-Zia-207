const waxSeal = document.getElementById("waxSeal");
const mail = document.getElementById("mail");
const instruction = document.getElementById("instruction");

const quiz = document.getElementById("quiz");


// =========================
// BUKA AMPLOP
// =========================

waxSeal.addEventListener("click", function () {

    waxSeal.classList.add("clicked");

    setTimeout(function () {

    mail.classList.add("open");

    instruction.textContent =
        "Jawab dulu yah MUEHEHEHEH ✌︎㋡";

    quiz.style.display = "block";

    setTimeout(function () {
        quiz.classList.add("quiz-coming-out");
    }, 100);

}, 450);

});


// =========================
// QUESTION 1
// =========================

function checkBirthday() {

    const answer =
        document.getElementById("birthdayInput")
        .value
        .trim();

    const message =
        document.getElementById("message1");


    if (answer === "27/06/26") {

        message.textContent = "";

        document
            .getElementById("question1")
            .classList.remove("active");

        document
            .getElementById("question2")
            .classList.add("active");

    } else {

        message.textContent =
            "SALAH (._.) ";
    }
}


// =========================
// QUESTION 2
// =========================

function checkDay(answer) {

    const message =
        document.getElementById("message2");


    if (answer === "Friday") {

        message.textContent = "";

        document
            .getElementById("question2")
            .classList.remove("active");

        document
            .getElementById("question3")
            .classList.add("active");

    } else {

        message.textContent =
            "Nope, Try again (ෆ˙ᵕ˙ෆ)♡";
    }
}


// =========================
// QUESTION 3
// =========================

function checkWhy(answer) {

    const message =
        document.getElementById("message3");


    if (answer === "C") {

        message.textContent = "";

        document
            .getElementById("question3")
            .classList.remove("active");

        document
            .getElementById("congratulations")
            .style.display = "block";

        instruction.textContent =
            "You made it! ♡";

    } else {

        message.textContent =
            "MASA SALAH SI <(ꐦㅍ _ㅍ)>";
    }
}


// =========================
// LANJUT KE PILIHAN
// =========================

function continueToChoices() {

    document
        .getElementById("congratulations")
        .style.display = "none";

    document
        .getElementById("quiz")
        .style.display = "none";

    mail.style.display = "none";

    document
        .getElementById("choices")
        .style.display = "block";

    instruction.textContent =
        "Choose one ♡";
}


// =========================
// LETTER
// =========================

function openLetter() {

    document
        .getElementById("choices")
        .style.display = "none";

    document
        .getElementById("letterView")
        .style.display = "block";

    instruction.textContent =
        "Letter for you 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
}


function backToChoices() {

    document
        .getElementById("letterView")
        .style.display = "none";

    document
        .getElementById("choices")
        .style.display = "block";

    instruction.textContent =
        "Choose one ♡";
}


// =========================
// POSTCARD
// =========================

function openPostcard() {

    // Sembunyikan pilihan
    document
        .getElementById("choices")
        .style.display = "none";


    // Tampilkan kembali AMPLOP AWAL
    mail.style.display = "block";

    // Pastikan amplop dalam keadaan terbuka
    mail.classList.add("open");


    // Ambil postcard yang berada di dalam amplop
    const postcard =
        document.getElementById("postcardInEnvelope");


    // Reset posisi postcard
    mail.classList.remove("postcard-active");
    

    instruction.textContent =
        "A little postcard for you ♡";


    // Mulai animasi postcard keluar
    setTimeout(function () {

        mail.classList.add("postcard-active");

    }, 200);


    // Setelah animasi selesai,
    // tampilkan postcard dalam ukuran besar
    setTimeout(function () {

        mail.style.display = "none";

        document
            .getElementById("postcardView")
            .style.display = "block";

    }, 1400);
}


// =========================
// KEMBALI DARI POSTCARD
// =========================

function backFromPostcard() {

    document
        .getElementById("postcardView")
        .style.display = "none";

    document
        .getElementById("choices")
        .style.display = "block";

    document
        .getElementById("postcardFlip")
        .classList.remove("flipped");

    instruction.textContent =
        "Choose one ♡";
}

function flipPostcard() {
    document.getElementById("postcardFlip").classList.toggle("flipped");
}
