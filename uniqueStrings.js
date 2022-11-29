async function findUniqueStrings(content) {
    const data = content.split('\r\n');
    const uniqueStrings= data.filter((value, index, array) => array.indexOf(value) === index);
    
    console.log(uniqueStrings);;
 }

 export default findUniqueStrings;