
const age = 19;
const isOldEnough = age>=18;

//example1:
//boolean in (): if () is false, {} will not be executed.
if(isOldEnough){
  console.log('Sarah can start driving license')
}

//example2:
if(isOldEnough){
  const yearsLeft = 18-age;
  console.log('Sarah is too young. Wait another ${yearsLeft} years.')
}

//example3:
const birthYear = 1990;

let century;
if (birthday <= 2000){
  century = 20;
} else {
  century = 21;
}

console.log(century)
