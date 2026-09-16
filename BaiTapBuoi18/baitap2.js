// Hàm 1: createCalculator(): viết một hàm function expresion trả về một object chứa 4 hàm tính toán, mỗi hàm là arrow function

function createCalculator() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => {
            if (b===0) {
                return "Lỗi: chia cho 0";
            }
            return a / b;
        }
    }
}

const calculator = createCalculator();
console.log(calculator.add(2, 3));       
console.log(calculator.subtract(10, 4)); 
console.log(calculator.multiply(3, 5));  
console.log(calculator.divide(10, 2));
console.log(calculator.divide(10, 0));

// Hàm 2: average(..numbers): dùng rest parameter, tính trung bình cộng của số lượng tham số bất kỳ. Nếu không truyền tham số thì trả về 0.

function average(...numbers) {
    if (numbers.length === 0) {
        return 0;   
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

console.log(average(10, 20, 30));
console.log(average(5));
console.log(average());
console.log(average(1, 2, 3, 4, 5));

// Hàm 3: applyDiscount(price, discountPercent = 10): tính giá sau khi giảm giá, discountPercent có giá trị mặc định là 10%
// - Nếu price không phải số hợp lệ -> trả về "Giá không hợp lệ"
// - Kết quả làm tròn đến số nguyên

function applyDiscount(price, discountPercent = 10) {
    if (typeof price != "number" || price < 0 || isNaN(price)) {
        return "Giá không hợp lệ";
    }
    const total = price * (1 - discountPercent / 100);
    return Math.round(total);
}

console.log(applyDiscount(100000));
console.log(applyDiscount(100000, 20));
console.log(applyDiscount(100000, 0));
console.log(applyDiscount("abc", 10));
console.log(applyDiscount(NaN, 10));