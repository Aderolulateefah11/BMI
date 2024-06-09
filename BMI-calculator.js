function calculateBMI(){
    var height= parseFloat(document.getElementById('height').value);
    var weight= parseFloat(document.getElementById('weight').value);

    
    if (weight> 0 && height > 0){
        var bmi = weight/ (height * height);
        document.getElementById('result').innerHTML ="Your BMI is " + bmi.toFixed(2);
    }else{
        document.getElementById('result').innerHTML='Please enter valid values for weight and height'
    }

}