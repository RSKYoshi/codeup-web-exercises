

// github token  = 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


//
// fetch("https://api.github.com/users").then(function(response) {
//         //if response is not successful, force it to catch
//     if(response.status !== 200){
//         return Promise.reject("Status was " + response.status);
//     }
//     return response.json();
// }).then(function(data){
//     console.log("data");
// }).catch(function(error){
//     console.log("Error" + error);
// }).finally(function(){
//     //finally always does something, regardless of success or failure
//     console.log("This always executes.");
// });


(async function(){


    //examples
    // es6 version
    // function getGithubNames(){
    //     return fetch("https://api.github.com/users")
    //         .then(response => response.json())
    // }
    // const users = await getGithubNames()
    // console.log(users);


    // es5 version
    // function getGithubNames(){
    //     return fetch("https://api.github.com/users")
    //         .then(function(response) {
    //             return response.json()
    //         })
    // }
    // const users = await getGithubNames()
    // console.log(users);


    // this works to pull for example
    // function getGithubNames(){
    //     return fetch("https://api.github.com/users", {headers: {'Authorization': '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'}})
    //         .then(response => response.json())
    // }
    // const users = await getGithubNames()
    // console.log(users);


    const myUrl = "RSKYoshi"
    const url = `https://api.github.com/users/${myUrl}/events/public`
    const accessToken = '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'
    const options = {
        method: "GET",
        headers: {
            "Authorization": `token ${accessToken}`
        }
    }

        //resolve stored here
    function getGithubData(){
        return fetch(url, options)
            .then(response => response.json())
    }

    //this pulls data from github! use [] to specify which object to pull if object# is known. In the for loop, after the '[i].' specify what data is wanted
    const pullData = await getGithubData();
    console.log(pullData);

    for(let i=0;i<pullData.length;i++){
        console.log(pullData[i].created_at);
    }

    //this resolves a promise after a set amount of time
    function wait(ms){
       return new Promise( function(resolve, reject){
            setTimeout( function(){
                if (ms > 0.1) {
                    resolve();
                } else {
                    reject('Network Connection Error!');
                }
            }, ms);
            });
        }
    wait(1000).then(() => console.log('You\'ll see this after 1 second'))
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
})();
