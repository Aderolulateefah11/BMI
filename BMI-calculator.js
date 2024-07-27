function calculateBMI(){
    var height= parseFloat(document.getElementById('height').value);
    var weight= parseFloat(document.getElementById('weight').value);

    
if (isNaN(height) || isNaN(weight)  || height<=0 || weight<=0 ){
    document.getElementById('result').innerHTML="please enter valid height and weight";
    return;


}

var bmi = weight/((height/ 100) * (height/ 100));
var result="Your BMI is " + bmi.toFixed(2);
document.getElementById('result').innerHTML=result;
}


