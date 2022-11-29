async function sumOfNumbers(content) {
    const data = content.split('\r\n');
    const nums = data.map((str) => parseInt(str));
    let sum = 0;

    for(const num of nums){
        sum += num;
    }
    console.log(sum);
 }

 export default sumOfNumbers;
