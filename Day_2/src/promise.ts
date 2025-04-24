// const myPromise = new Promise((resolve, reject) => {
//     // let success = true;
//     // if (success) {
//     //     resolve("Success");
//     // } else {
//     //     reject("Failed");
//     // }

//     setTimeout(() => {
//         resolve("Success");
//     }, 3000);
// });

// myPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// });

async function ngambil() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
            method: "GET",
          });
          const data = await response.json();
          console.log(data);
    } catch (error) {

    }
}

ngambil();