console.log("Start");

function longOperation(waitMs = 2000) {
  console.log("Waiting for", waitMs, "milliseconds");
  return setTimeout(function () {
    console.log("Async longOperation completed");
    return waitMs;
  }, waitMs);
}

let result = longOperation(4000);
// console.log("Result:", result);

console.log("End");