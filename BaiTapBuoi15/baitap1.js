function classifyTriangle(a, b, c) {
  // Nếu một trong ba cạnh có giá trị nhỏ hơn hoặc bằng 0, trả về "Cạnh không hợp lệ".
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Cạnh không hợp lệ";
  }

  // Nếu ba cạnh không thỏa bất đẳng thức tam giác (tổng hai cạnh phải lớn hơn cạnh còn lại), trả về "Không tạo thành tam giác".
  if (a + b < c && a + c < b && b + c < a) {
    return "Không tạo thành tam giác";
  }

  // Nếu ba cạnh bằng nhau, trả về "Tam giác đều".
  if (a == b && a == c && b == c) {
    return "Tam giác đều";
  }

  // Nếu có đúng hai cạnh bằng nhau, trả về "Tam giác cân".
  if (a === b || b === c || a === c) {
    return "Tam giác cân";
  }

  // Nếu tam giác có một góc vuông (kiểm tra bằng định lý Pythagoras), trả về "Tam giác vuông".
  const sides = [a, b, c].sort((x, y) => x - y);
  const [side1, side2, hypotenuse] = sides;

  if (side1 ** 2 + side2 ** 2 === hypotenuse ** 2) {
    return "Tam giác vuông";
  } else {
    return "Không phải tam giác vuông";
  }

  return "Tam giác thường";
}

console.log(classifyTriangle(3, 4, 5));
console.log(classifyTriangle(2, 2, 2));
console.log(classifyTriangle(1, 2, 10));
