// calcular el dato bmi
function bmiCalculator(height, weight) {
  console.log(height, weight);
  const bmiForm = weight / height ** 2; //27.7252715131
  console.log("bmiForm", bmiForm);
  return bmiForm.toFixed(0); // 27
}

/* 
< menor que
> mayor que
>= mayor igual 
<= menor igual
a == b  ?  a es igual b (compara el valor)
a === b ?  a es igual b (compara el valor y el tipo)
&& retorna true (las expresiones deben de ser verdaderas)
|| retorna true (solo basta con que una sea true)



*/

// indicar al usuario si está con sobrepeso, peso normal, o bajo su peso normal
const resultBmi = (bmiFunc) => {
  if (bmiFunc < 18) {
    alert("the user is underweight normal");
  } else if (bmiFunc >= 18 && bmiFunc <= 25) {
    alert("YEIIH! your weight is normal! :D");
  } else {
    alert("your weight is in overweight");
  }

  // switch (bmiFunc) {
  //   case "bmiFunc < 18":
  //     console.log(typeof bmiFunc);
  //     alert("the user is underweight normal");
  //     break;
  //   case bmiFunc >= 18 && bmiFunc <= 25:
  //     console.log(typeof bmiFunc);
  //     alert("YEIIH! your weight is normal! :D");
  //     break;
  //   default:
  //     console.log(typeof bmiFunc);
  //     alert("your weight is in overweight");
  //     break;
  // }
};

// console.log(bmiCalculator(1.72, 80));
const heightUser = prompt("User give me your height: "); // "1.71"
const weightUSer = prompt("User give me your weight: ");
resultBmi(bmiCalculator(Number(heightUser), parseInt(weightUSer)));

/*  
BMI = 	
mass (kg) /
height2 (m)
 = 	
72.57
1.782
 = 	22.90	
kg
m2


*/
