// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("capitalizerArr",() => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }]
      it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized",() => {
    expect(capitalizeArr(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

// Create a function capitalizeArr 
//  Map through array 
// Split array and capitalize (toUpperCase) 
// return split and capitalized array as a sentence using string interpolation

const capitalizeArr = (arr) => {
  return arr.map(value => {
    let splitArray = value.name.split(' ')
    let capitalArr = splitArray[0][0].toUpperCase() +splitArray[0].substring(1) + " " + splitArray[1][0].toUpperCase() + splitArray[1].substring(1)
    return `${capitalArr} is a ${value.occupation}`
  })
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]


describe("remainderFind", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
  expect(remainderFind(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(remainderFind(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})



// b) Create the function that makes the test pass.



//function called remainderFind
//array.filter to filter data type - we want to return only numbers
//iterate through the numbers
//use modulo  to find remainder
//return new array

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]


  const remainderFind = arr.filter(value(num){
    return num % 3 === 0
  })

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.


// // a) Create a test with an expect statement using the variables provided.

describe("cubeAlicious", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
  it("akes in an array of numbers and returns the sum of all the numbers cubed", () => {
  expect(cubeAlicious(cubeAndSum1)).toEqual(99)
  expect(cubeAlicious(cubeAndSum2)).toEqual(99)
  })
})

// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125


// b) Create the function that makes the test pass.

//convert array to string using .toString
//math.hypot will return square root of sum
//raise sum to power of 2

const cubeAlicious = () => {
  return arr.toString
}
  const thisVariable = Math.hypot(...cubeAlicious().split`,`)
  return thisVariable**2
