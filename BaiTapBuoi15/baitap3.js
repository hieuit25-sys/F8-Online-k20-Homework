function analyzeClass(scores) {
  let invalidCount = 0;
  let validCount = 0;
  let totalScore = 0;

  let xuatSac = 0;
  let gioi = 0;
  let kha = 0;
  let trungBinh = 0;
  let yeu = 0;

  // Khởi tạo max, min bằng null để dễ xử lý trường hợp mảng không có điểm hợp lệ
  let maxScore = null;
  let minScore = null;

  // lặp duy nhất để duyệt qua danh sách điểm
  for (let i = 0; i < scores.length; i++) {
    let score = scores[i];

    // Kiểm tra điểm không hợp lệ
    if (score < 0 || score > 10 || typeof score !== "number" || isNaN(score)) {
      invalidCount++;
      continue; // Bỏ qua phần còn lại của vòng lặp để xét số tiếp theo
    }

    // Điểm hợp lệ: tăng biến đếm và cộng dồn tổng điểm
    validCount++;
    totalScore += score;

    if (score >= 9 && score <= 10) {
      xuatSac++;
    } else if (score >= 8 && score < 9) {
      gioi++;
    } else if (score >= 6.5 && score < 8) {
      kha++;
    } else if (score >= 5 && score < 6.5) {
      trungBinh++;
    } else {
      yeu++;
    }

    // Tìm max, min
    if (maxScore === null || score > maxScore) {
      maxScore = score;
    }
    if (minScore === null || score < minScore) {
      minScore = score;
    }
  }

  // Không có học sinh hợp lệ
  if (validCount === 0) {
    return {
      invalidCount: invalidCount,
      validCount: 0,
      categories: { xuatSac: 0, gioi: 0, kha: 0, trungBinh: 0, yeu: 0 },
      maxScore: null,
      minScore: null,
      averageScore: 0,
      remark: "Không có dữ liệu hợp lệ",
    };
  }

  // Công thức làm tròn x đến 2 chữ số thập phân: Math.round(x * 100) / 100
  //  viết logic Math.round bằng cách cộng 0.5 rồi lấy phần nguyên (ép kiểu về số nguyên bằng Math.floor)
  let rawAverage = totalScore / validCount;
  let averageScore = Math.floor(rawAverage * 100 + 0.5) / 100;

  let remark = "";
  let goodOrAbove = xuatSac + gioi + kha; // Số học sinh từ Khá trở lên

  if (goodOrAbove > validCount / 2) {
    remark = "Lớp học tốt";
  } else if (yeu > validCount / 2) {
    remark = "Cần cải thiện";
  } else {
    remark = "Lớp học ở mức ổn";
  }

  return {
    invalidCount: invalidCount,
    validCount: validCount,
    categories: {
      xuatSac: xuatSac,
      gioi: gioi,
      kha: kha,
      trungBinh: trungBinh,
      yeu: yeu,
    },
    maxScore: maxScore,
    minScore: minScore,
    averageScore: averageScore,
    remark: remark,
  };
}

console.log("--- Test 1: Cơ bản ---");
console.log(analyzeClass([9, 7, -2, 5.5, 10, 4, 11, 6.5, 8]));

console.log("\n--- Test 2: Phần lớn học sinh yếu ---");
console.log(analyzeClass([3, 2, 4.5, 1, 0]));

console.log("\n--- Test 3: Mức ổn ---");
console.log(analyzeClass([9, 1, 7, 6, 5.5]));

console.log("\n--- Test 4: Toàn bộ điểm không hợp lệ ---");
console.log(analyzeClass([-5, 15, 100, -1]));

console.log("\n--- Test 5: Mảng rỗng ---");
console.log(analyzeClass([]));
