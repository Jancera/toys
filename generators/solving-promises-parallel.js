const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third");
  }, 2000);
});

async function* foo(promisesArr, callb) {
  // const promisesStates = promisesArr.map(() => ({
  //   fulfilled: null,
  //   rejected: null,
  //   ready: false,
  // }));

  for (let i = 0; i < promisesArr.length; i++) {
    const promise = promisesArr[i];

    try {
      const promiseResponse = await promise;

      yield promiseResponse;
    } catch (error) {
      yield error;
    }

    // promise
    //   .then((res) => {
    //     promisesStates[i].fulfilled = res;
    //     promisesStates[i].ready = true;

    //     const resp = `Promise ${i} fulfilled`;

    //     yield resp
    //   })
    //   .catch((err) => {
    //     promisesStates[i].rejected = err;
    //     promisesStates[i].ready = true;

    //     const resp = `Promise ${i} rejected`;

    //     yield resp
    //   });
    // .finally(() => {
    //   if (promisesStates.every((state) => state.ready)) {
    //     callb(promisesStates);
    //   }
    // });
  }
}

const generator = foo([promise1, promise2, promise3], (states) => {
  console.log(states);
});

const response1 = generator.next();

console.log(response1);

// generator.next().then((res) => {
//   console.log("Last callback");
// });
