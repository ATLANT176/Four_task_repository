function calculateAverageGrade(grades) {
    const gradeArray = grades.split(',').map(item => parseInt(item));
    const sum = gradeArray.reduce((total, grade) => total + grade, 0);
    const averageGrade = sum / gradeArray.length;
    return averageGrade.toFixed(2);
}
    
const gradeList = '3, 4, 3, 5';
const averageGrade = calculateAverageGrade(gradeList);
console.log(averageGrade);
