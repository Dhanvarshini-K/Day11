
import data from "./user_data.json";

const jsonData = [...data];
  
  function getPaginatedResult(pageNumber, pageSize) {
   
    if (!jsonData || !Array.isArray(jsonData) || pageNumber < 1 || pageSize < 1) {
      return [];
    }
  
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
  
    const paginatedResults = jsonData.map((item, index) => (index >= startIndex && index < endIndex) ? item : null).filter(item => item !== null);
  
    return paginatedResults;
  }
    
  const paginatedResult = getPaginatedResult(3, 99);
  console.log(paginatedResult);
  
