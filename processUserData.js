
import data from "./user_data.json";

const userData = [...data];

// Function to find the country with the highest income
function findCountryWithHighestIncome(userData) {
  const highestIncome = Math.max(...userData.map(user => user.income));
  const countryWithHighestIncome = userData.find(user => user.income === highestIncome).country;
  return countryWithHighestIncome;
}

// Function to find the country with the combined highest income
function findCountryWithCombinedHighestIncome(userData) {
  const combinedIncomes = userData.reduce((countries,user) => {
    countries[user.country] = (countries[user.country] || 0 ) + user.income;
    return countries;
    },{});
    
    const highestCombinedIncome = Math.max(...Object.values(combinedIncomes));
    const countryWithCombinedHighestIncome = Object.keys(combinedIncomes).find(country => combinedIncomes[country] === highestCombinedIncome);
  return countryWithCombinedHighestIncome;    
}

// Function to get all users with email ending in .gov
function getUsersWithEmailEndingInGov(userData) {
  const usersWithEmailEndingWithGov = userData.filter(user => user.email.endsWith('.gov'));
  return usersWithEmailEndingWithGov;
}

// Function to find the country with the maximum combined income for females
function findCountryWithMaxCombinedIncomeForFemales(userData) {
  const femaleIncome = userData.reduce((countries,user) => {
    if(user.gender.toLowerCase() === "Female"){
      countries[user.country] = (countries[user.country] || 0) + user.income;
    }
    return countries;
    },{})
    
    const highestFemaleIncome = Math.max(...Object.values(femaleIncome));
    const countryWithMaxCombinedIncomeForFemales = Object.keys(femaleIncome).find(country => femaleIncome[country] === highestFemaleIncome);
    return countryWithMaxCombinedIncomeForFemales;
    }



  function processUserData(userData){

  if (!Array.isArray(userData)){
      console.error("It's not a Array format");
      return false;
    }
    
    if(!userData.every((user)=> typeof user.id === "number" && typeof user.first_name === "string" && user.first_name !== ''   && typeof user.last_name === "string" && user.last_name !== '' && typeof user.country === "string" && user.country !== '' && typeof user.income === "number" && !(user.income < 0) && typeof user.email === "string" && typeof user.gender === "string"))
    {
      console.log("Invalid Input");
      return false;
    }
    const validRegex = "/^(([^&lt;&gt;()\[\]\\.,;:\s@&quot;]+(\.[^&lt;&gt;()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
    if(userData.every((user) => validRegex.match(user.email.toLowerCase()))){
      console.log("Invalid Email Input");
      return false;
    };

  console.log('Country with highest income:', findCountryWithHighestIncome(userData));
  console.log('Country with combined highest income:', findCountryWithCombinedHighestIncome(userData));
  console.log('Users with email ending in .gov:', getUsersWithEmailEndingInGov(userData));
  console.log('Country with max combined income for females:', findCountryWithMaxCombinedIncomeForFemales(userData));
}

processUserData(userData);