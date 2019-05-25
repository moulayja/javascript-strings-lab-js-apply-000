/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})
function greeting(){
  return `Hello, everybody!`
}
function greetSpecialGuest(specialGuest){
  return `Hello, ${specialGuest}!`
}

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
function conversation(topic){
  return `Let's talk about ${topic}.`
}
conversation('space')
