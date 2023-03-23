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

async function main() {
  let resultPromise = longOperation(1000);

  try {
    let result = await resultPromise;
    console.log("Result:", result);
    let result2 = result / 2;
    console.log("Result2:", result2);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("All operations finished.");
  }
}

main();

console.log("End");