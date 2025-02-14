const arr = [1, 2, 3, 4, 2, 5, 3, 6, 7, 8, 8, 8, 7, 5];
const result = findDuplicates(arr);
console.log(result); 


function findDuplicates(arr) {
    const seen = new Set(); 
    const duplicates = [];   
  
    for (const item of arr) {
      if (seen.has(item) && !duplicates.includes(item)) {
        duplicates.push(item); 
      } else {
        seen.add(item);
      }
    }

    return duplicates; 
  }
  