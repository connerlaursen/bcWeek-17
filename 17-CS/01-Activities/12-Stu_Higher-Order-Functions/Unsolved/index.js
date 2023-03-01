const grades = [56, 78, 99, 85];

//  sumOfAll/grades.length

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    if(array.length - 1  === index){
        return (accumulator + currentValue) / array.length
    }
    return accumulator + currentValue
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce((acc, val)=> acc+val)/grades.length;
// let gradeAverage = grades.reduce(findAverage);
console.log(gradeAverage);
