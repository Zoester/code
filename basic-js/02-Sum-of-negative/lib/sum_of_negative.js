sumOfNegative = (numbers) => {
//create a variable for numbers //
let sum=0;
for (let i=0; i<numbers; i++) {
//loop starting at 0 until final object in array//
  if (numbers[i]<0) {
    sum += numbers[i];
    //create the sum//
  }
  return sum
}


//return the sum//




  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.

}
