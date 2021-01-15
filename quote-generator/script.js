//Get quote from API, using asynchronous fetch function
async function getQuote() {
  //start with a proxy api
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  //set up a try catch statemnt
  try {
    //this const wont be set until apiUrl is finished fetching
    const response = await fetch(proxyUrl + apiUrl);
    //this data wont be set until it finishes returning the response set above in json format
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote();
    console.log('whoops, no quote', error);
  }
}


//On load
//you want this at the bottom bec you want the function to be declared before you call it
getQuote();