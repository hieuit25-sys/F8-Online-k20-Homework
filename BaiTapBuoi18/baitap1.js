const examResults = [
    { student: "An", scores: [8.5, 7, 9, 6.5] },
    { student: "Bình", scores: [10, 9.5, 8, 10] },
    { student: "Chi", scores: [5, 4.5, 6, 5.5] },
    { student: "Duy", scores: [7, 7, 7, 7] },
]

// Hàm 1: getAverage: Tính điểm trung bình của một mảng, làm tròn đến 1 chữ số thập phân (dùng toFixed, sau đó chuyển lại về số bằng Number()). avg = sum/n

function getAverage(scores) {
    if (scores.length === 0) {
        return 0;
    }

    const total = scores.reduce((sum, score) => sum + score, 0);

    const avg = total / scores.length;

    return Number(avg.toFixed(1));
}

console.log(getAverage([8.5, 7, 9, 6.5])); // Output: 7.8
console.log(getAverage([10, 9.5, 8, 10])); // Output: 9.4

// Hàm 2: classifyStudent(average): phân loại học lực dựa vào điểm trung bình, trả về xếp loại tương ứng: Xuất sắc, Giỏi, Khá, Trung bình, Yếu

function classifyStudent(average) {
    switch (true) {
        case average >= 9 && average <= 10:
            return "Xuất sắc";
        case average >= 8 && average < 9:
            return "Giỏi";
        case average >= 6.5 && average < 8:
            return "Khá";
        case average >= 5 && average < 6.5:
            return "Trung bình";
        default:
            return "Yếu";
    }
}

console.log(classifyStudent(9.4));
console.log(classifyStudent(7.8));
console.log(classifyStudent(4.5));

// Hàm 3: isValidScore(score): kiểm tra điểm có hợp lệ không:
// - Phải là số hữu hạn(dùng Number.isFinite)
// - Phải nằm trong khoảng từ 0 đến 10

function isValidScore(score) {
    return Number.isFinite(score) && score >= 0 && score <= 10;
}

console.log(isValidScore(8.5)); 
console.log(isValidScore(-1));  
console.log(isValidScore(11));  
console.log(isValidScore(Infinity));  
console.log(isValidScore(NaN));  

function getReportCard(examResults) {
    return examResults.map(student => {
        const average = getAverage(student.scores);
        const classification = classifyStudent(average);
        return {
            student: student.student,
            average: average,
            classification: classification
        };
    });
}

console.log(getReportCard(examResults));