function deepEqual(obj1, obj2) {  
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {  
      return obj1 === obj2;  
    }  
    const keys1 = Object.keys(obj1);  
    const keys2 = Object.keys(obj2);  
    if (keys1.length !== keys2.length) return false;  
    return keys1.every(key => deepEqual(obj1[key], obj2[key]));  
  }  

console.log(deepEqual());