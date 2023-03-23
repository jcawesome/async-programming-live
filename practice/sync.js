console.log("Start")

function longOperation(waitMs=2000){
    console.log("longOperation start")
    let waitUntil = new Date(new Date().getTime()+waitMs);
    while(new Date()< waitUntil){
        //do nothing
    }
}

longOperation(5000)


console.log("End")