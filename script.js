document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('input[type="text"]');
  const weightInput = inputs[0];
  const heightInput = inputs[1];
  const calculateBtn = document.querySelector("button");
  const resultDiv = document.querySelector(".result");

  const calculateBMI = () => {
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
      resultDiv.textContent =
        "Please enter valid positive numbers for both weight and height.";
      return;
    }

    const heightM = heightCm / 100;

    const bmi = weight / (heightM * heightM);

    const bmiRounded = bmi.toFixed(2);

    let gradeMessage = "";
    if (bmi < 18.5) {
      gradeMessage = "You are underweight.";
    } else if (bmi < 25) {
      gradeMessage = "You have a healthy weight.";
    } else {
      gradeMessage = "You are overweight.";
    }

    resultDiv.textContent = `Your BMI is ${bmiRounded}. ${gradeMessage}`;
  };

  calculateBtn.addEventListener("click", calculateBMI);
});
