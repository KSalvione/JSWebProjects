// //Get quote from API, using asynchronous fetch function
// async function getQuote() {
//   //start with a proxy api
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
//   const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
//   //set up a try catch statemnt
//   try {
//     //this const wont be set until apiUrl is finished fetching
//     const response = await fetch(proxyUrl + apiUrl);
//     //this data wont be set until it finishes returning the response set above in json format
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     getQuote();
//     console.log('whoops, no quote', error);
//   }
// }


//On load
//you want this at the bottom bec you want the function to be declared before you call it
//getQuote();
//-------------------------------------------------------------------------------------------------------------------------------

//use let instead of const for this varible bec we're setting it as empty array and changing value below to pass in quotes
//use const if the value is never changing
let apiQuotes = [];

//'Show New Quote' function
function newQuote() {
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

//Get quotes from API using an asynchronous fetch request within a try catch statement
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try  {
    //this const will not be populated until it has data from our api
    const response = await fetch(apiUrl);
    //getting the json response from our api, turn that response into an object, pass it into global variable
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //catch error here
  }
}

//Onload. Run the function when the page loads
getQuotes();