import fsp from 'fs/promises';
import sumOfNumbers from './sumOfNumbers.js';
import findUniqueStrings from './uniqueStrings.js';

try {
    const content = await fsp.readFile('./data.csv', 'utf-8');

    //here we check if the content contains whitespace and digits
    if(/(\s)*(\d)/g.test(content)) {
        await sumOfNumbers(content);
    }
    else{
        await findUniqueStrings(content); 
    } 
}
catch (error) {
    console.log(error.message); 
}
