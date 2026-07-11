const text =
  "javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server";

// Tách chuỗi thành mảng các từ
const getWords = (text) => {
  return text.split(" ");
};

console.log(getWords(text));

// Đếm số lần xuất hiện của từng từ
const countWords = (text, word) => {
  const textLower = text.toLowerCase();
  const wordLower = word.toLowerCase();

  return textLower.split(" ").filter((w) => w === wordLower).length;
};
console.log(
  `Số lần xuất hiện của từ "javascript" là: `,
  countWords(text, "javascript"),
);
console.log(`Số lần xuất hiện của từ "chạy" là: `, countWords(text, "chạy"));
console.log(
  `Số lần xuất hiện của từ "python" là: `,
  countWords(text, "python"),
);

// Xuất mảng các từ duy nhất trong chuỗi và xếp theo alphabet
const getUniqueWords = (text) => {
  const changeWordToLowerCase = text.toLowerCase().split(" ");
  // Lọc bằng Set và sort
  return [...new Set(changeWordToLowerCase)].sort();
};

console.log(getUniqueWords(text));

// Trả về n từ xuất hiện nhiều nhất - dùng để làm bộ lọc trending
const getTopWords = (text, n) => {
  const cacTu = text.toLowerCase().split(" ");

  // Đếm số lần xuất hiện của từng từ bằng Object
  const demTu = {};
  cacTu.forEach((tu) => {
    // Nếu từ này đã có trong object thì cộng 1, chưa có thì gán bằng 1
    demTu[tu] = (demTu[tu] || 0) + 1;
  });

  // Lúc này Object demTu sẽ có dạng: { hoc: 3, js: 2, code: 1 }

  // Chuyển Object thành mảng các object con { word, count }
  const mangTuanSuat = Object.keys(demTu).map((tu) => {
    return { word: tu, count: demTu[tu] };
  });

  // Sắp xếp giảm dần theo count và lấy n từ đầu tiên
  // (b - a sẽ xếp giảm dần, dùng .slice(0, n) để lấy từ vị trí 0 đến n)
  return mangTuanSuat.sort((a, b) => b.count - a.count).slice(0, n);
};

console.log(getTopWords(text, 3));

// Highlight chữ trong dấu *
const highlight = (text, word) => {
  return text.replaceAll(word, `**${word}**`);
};

console.log(highlight(text, "javascript"));
