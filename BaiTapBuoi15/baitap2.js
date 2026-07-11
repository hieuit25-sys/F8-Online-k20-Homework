function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printTriangleTable(n) {
  for (let i = 1; i <= n; i++) {
    let rowResult = []; // Mảng chứa các phần tử của dòng hiện tại

    for (let j = 1; j <= i; j++) {
      // 1: Chia hết cho cả 3 và 5 (Ưu tiên cao nhất)
      if (j % 3 === 0 && j % 5 === 0) {
        rowResult.push("#");
      }
      // 2: Là số nguyên tố
      else if (isPrime(j)) {
        rowResult.push("*");
      }
      // 3: Giữ nguyên số
      else {
        rowResult.push(j);
      }
    }

    console.log(rowResult.join(" "));

    if (i % 2 === 0) {
      console.log("-".repeat(i));
    }
  }
}

console.log("--- ooo ---");
printTriangleTable(5);

console.log("\n--- ooo ---");
printTriangleTable(15);
