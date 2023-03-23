console.log("Start");

function longOperation(waitMs = 2000) {
  console.log("Waiting for", waitMs, "milliseconds");

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Async longOperation completed");
      return resolve(waitMs);
    }, waitMs);
  });
}

let resultPromise = longOperation(1000);

resultPromise
  .then((res) => {
    console.log("Result:", res);
    return res / 2;
  })
  .then((res2) => {
    console.log("Result2:", res2);
    return a;
  })
  .then((res3) => {
    console.log("Result3:", res3);
  })
  .catch((err) => {
    console.error("ERROR occurred:", err);
  })
  .finally((res) => {
    console.log("All operations finished.");
  });

console.log("End");