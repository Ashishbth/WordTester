const btn = document.getElementById("btn");
const container = document.getElementById("container");
const text = document.getElementById("text");
let inputValue = document.getElementById("text-area");
let byColor = document.getElementById('with-color')
let byHurdle = document.getElementById('with-hurdle');


let result = "";
let textData = [];
let command1 = false;
let command2 = false;


inputValue.addEventListener('keyup' , ()=>{
  if(command1 === false && command2 === false){
    alert('Select Any One Option!');
  }
})


const checkWordByColor = (e) => {
  let inputlength = e.target.value;
  let inputArray = inputlength.split("");
  
  for (let i = 0; i < inputArray.length; i++) {
    document.getElementById(`word-${i}`).value = textArray[i];
    
    if (inputArray[i] === textArray[i]) {
      document.getElementById(`word-${i}`).style.color = "lightgreen";
    } else {
      document.getElementById(`word-${i}`).style.color = "red";
    }
  }
};

const checkWordByHurdle = (e)=>{
  let inputlength = e.target.value;
  let inputArray = inputlength.split("");
  for (let i = 0; i < inputArray.length; i++) {
    document.getElementById(`word-${i}`).value = textArray[i];

    if (inputArray[i] === textArray[i]) {
      console.log('Correct')
    }
    else{
      alert("Wrong Input");
    }
  };
}

byColor.addEventListener('click' , ()=>{
  command1 = true;
  command2 = false
  if(command1 == true){
    inputValue.addEventListener("keyup", checkWordByColor);
  };
  console.log("click");
});

byHurdle.addEventListener('click' , ()=>{
  command2 = true;
  command1 = false;
  if(command2 == true){
    inputValue.addEventListener("keyup", checkWordByHurdle);
  };
  console.log("click");
})



let textValue = "India, our country is a huge and beautiful land full of wonders. From the Himalayas to the Indian Ocean, the Desert of Thar in the snowy mountains of Sikkim, it is a country full of beautiful landscapes and beautiful people. India is a unique country with diversity. Unity is diversity is the main slogan of the country.";


// <<<<------------------------------------------------------------------------------------------------------>>>>>>>

// <<<<------------------------------------------------------------------------------------------------------>>>>>>>
let textArray = textValue.split("");

for (let i = 0; i < textArray.length; i++) {
  result = result + `<span id = 'word-${i}'>${textValue[i]}</span>`;
}

text.innerHTML = result;

