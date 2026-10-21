const mypromise = new Promise((resolve, reject) => {
    let age = 19;
    if (age >= 18) {
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }
});

const checkVoteEligibility = () => {
    mypromise
        .then(msg => console.log(msg))   // Handles success
        .catch(err => console.log(err)); // Handles failure
};

checkVoteEligibility();

// myPromise
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err))