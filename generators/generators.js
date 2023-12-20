/**
 * The first time the generator is called, the value passed to the next() method is ignored.
 * It happens because there is no yield to receive the value passed as parameter to the next() method, it only creates the nextParam variable and stores a value in it.
 */
function* foo(param) {
  console.log(param);

  let nextParam = yield "1";

  console.log(nextParam);
  nextParam = yield "2";

  console.log(nextParam);
  nextParam = yield "3";

  console.log(nextParam);
  nextParam = yield "4";
}

const generator = foo("Hello"); // Wnen the generator is created, it does not execute the code inside the function, it only returns an iterator object.

const firstResponse = generator.next("From"); // When the next() method is called, the code inside the function is executed until the first yield is found.

console.log(firstResponse);

const secondResponse = generator.next("Brazil"); // Now it keeps executing storing the value passed to the next() method in the nextParam variable.

console.log(secondResponse);

const thirdResponse = generator.next("I'm");

console.log(thirdResponse);

const fourthResponse = generator.next("Jancera");

console.log(fourthResponse);

const fifthResponse = generator.next();

console.log(fifthResponse);
