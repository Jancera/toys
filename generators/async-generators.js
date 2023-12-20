// Not in parallel
async function* foo() {
  yield await new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
  yield await new Promise((resolve) => setTimeout(() => resolve("Second"), 3000));
  yield await new Promise((resolve) => setTimeout(() => resolve("Third"), 2000));
}

// let str = "";

// async function generate() {
//   for await (const val of foo()) {
//     str = str + val;
//     console.log(str);
//   }
// }

// generate();
// Expected output: "abc"

const promises = [
  new Promise((resolve) => setTimeout(() => resolve("First"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Second"), 3000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Third"), 2000)),
];

const result = Promise.allSettled(promises);

// const now = Date.now();
// result.then((r) => {
//   console.log(r);
//   console.log(Date.now() - now);
// });

async function* foo() {
  const promises = [
    new Promise((resolve) => setTimeout(() => resolve("First"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Second"), 3000)),
    new Promise((resolve) => setTimeout(() => resolve("Third"), 2000)),
  ];

  const results = await Promise.allSettled(promises);

  for (const result of results) {
    if (result.status === "fulfilled") {
      yield result.value;
    }
  }
}

const generator = foo();

generator.next().then((res) => {
  console.log("First response", res);
});

generator.next().then((res) => {
  console.log("Second response", res);
});

generator.next().then((res) => {
  console.log("Third response", res);
});
