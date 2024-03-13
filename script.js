let heightInput = document.getElementById('heightSlider');
let weightInput = document.getElementById('weightSlider');
let heightInputDisplay = document.getElementById('heightDisplay');
let weightInputDisplay = document.getElementById('weightDisplay');
let bmi;
let btn = document.querySelector('.btn');
let bmiDisplay = document.querySelector('.bmiDisplay');
let healthClassification = document.querySelector('.healthClassification');


heightInput.addEventListener("input", function(){
    heightInputDisplay.innerHTML = heightInput.value;
    
});

weightInput.addEventListener("input", function(){
    weightInputDisplay.innerHTML = weightInput.value;
});

function calculateBMI(){
    let height = heightInput.value;
    let convertedHeight = height/100;

    let weight = weightInput.value;

     bmi = weight/(convertedHeight * convertedHeight);
     bmi = bmi.toFixed(2);
    console.log(bmi);
}

btn.addEventListener("click", function(){
    calculateBMI();
    bmiDisplay.innerHTML = "Your BMI : " + bmi + " kg/m²";

    if(bmi < 18.5)
    {
        healthClassification.innerHTML = "Your are Underweight"
        healthClassification.style.color ="red";
    }
    else if(bmi >= 18.5 && bmi <= 24.9)
    {
        healthClassification.innerHTML = "You have a Healthy weight"
        healthClassification.style.color = "green";
    }
    else if(bmi >= 25 && bmi <= 29.9)
    {
        healthClassification.innerHTML = "You are Overweight";
        healthClassification.style.color ="red";
    }
    else if(bmi >= 30)
    {
        healthClassification.innerHTML = "You are Obese";
        healthClassification.style.color = "darkred";
    }
});


