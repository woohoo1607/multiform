var countStep = 0;
var steps = document.getElementsByClassName('steps')[0];
var stepsLi = steps.querySelectorAll("li");
stepsLi[countStep].style.backgroundColor = "yellow";


var coursesForm = document.getElementById("coursesForm");
var inputForm = coursesForm.querySelectorAll("form")[0];
var stepForm = inputForm.querySelectorAll("div");
var buttonForm = document.getElementById('buttonForm');

var nextStep1 = function () {
    var err = 0;
    if (stepForm[countStep].querySelectorAll("input").length) {
        var data = stepForm[countStep].querySelectorAll("input");
        for (var i = 0; i < data.length; i++) {
            if (requiredName(data[i]) === "false") {
                err++;
            }
        }
        if (!err) {
            stepForm[countStep].classList.remove("show");
            stepsLi[countStep].style.backgroundColor = "green";
            countStep++;
            stepForm[countStep].classList.add("show");
            stepsLi[countStep].style.backgroundColor = "yellow";
            buttonForm.removeEventListener("click", nextStep1);
            buttonForm.addEventListener("click", nextStep2);
        }
    }
};

var nextStep2 = function () {
    var cours = document.getElementById('courses');
    var selectCourses = cours.options[cours.selectedIndex].value;
    stepForm[countStep].classList.remove("show");
    stepsLi[countStep].style.backgroundColor = "green";
    countStep++;
    stepForm[countStep].classList.add("show");
    stepsLi[countStep].style.backgroundColor = "yellow";
    buttonForm.text = "Отправить форму";
    buttonForm.removeEventListener("click", nextStep2);
    buttonForm.addEventListener("click", nextStep3);
};

var nextStep3 = function () {
    var err = 0;
    if (stepForm[countStep].querySelectorAll("input").length) {
        var data = stepForm[countStep].querySelectorAll("input");
        for (var i = 0; i < data.length; i++) {
            if (requiredStep3(data[i]) === "false") {
                err++;
            }
        }
        if (!err) {
            stepForm[countStep].classList.remove("show");
            stepsLi[countStep].style.backgroundColor = "green";
            countStep++;
            stepForm[countStep].classList.add("show");
            buttonForm.style.display = "none";
        }
    }
};
var requiredName = function (data) {
    if (data.value) {
        if (testName(data) === "false") {
            return("false");
        } else {
            return("true");
        }
    } else {
        data.style.border = "2px solid red";
        return("false");
    }
};

var requiredStep3 = function (data) {
    if (data.value) {
        if (data.name === "telNumber") {
            if (testNumber(data) === "false") {
                return("false");
            } else {
                return("true");
            }
        }
        if (data.name === "email") {
            if (testEmail(data) === "false") {
                return("false");
            } else {
                return("true");
            }
        }
    } else {
        data.style.border = "2px solid red";
        return("false");
    }
};

var testName = function (data) {
    if (data.value.match(/[^A-zА-яіІїЇёЁ\'\-]/)) {
        data.style.border = "2px solid red";
        return("false");
    } else {
        data.style.border = "2px inset white";
    }
};

var testNumber = function (data) {
    if (data.value.match(/\D/)) {
        data.style.border = "2px solid red";
        return("false");
    } else {
        data.style.border = "2px inset white";
    }
};

var testEmail = function (data) {
    if (!data.value.match(/^[a-z\d\.\-\_]+@[a-z]+\.[a-z]{2,5}$/i)) {
        data.style.border = "2px solid red";
        return("false");
    } else {
        data.style.border = "2px inset white";
    }
};

buttonForm.addEventListener("click", nextStep1);