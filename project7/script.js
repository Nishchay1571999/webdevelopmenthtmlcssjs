// new line in js
//  baptics '\' , `` are baptics
// promisis and fetch

// fetch api

const promiseObject = fetch("/data.json");
/**fetch api in the browser always returns a promise that has t be delevired the promise will contain the another promise on the records present in the file and 
 * we can use 'then' to use the data
 */

/**Promise : promise is a object which promisis that it will be returning an object in the future  */

/**How do we know that the data is arived  */

promiseObject.then(data =>{
    const promisejson = data.json()
    //this response will return a promise 
    
    promisejson.then(responsedata =>{
        console.log(responsedata);
    })
})

// promises can be chained no mater what we return 
