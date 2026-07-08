function calculateScore(level, kills, boosted) {
  if (
    typeof level !== "number" ||
    isNaN(level) ||
    level < 0 ||
    typeof kills !== "number" ||
    isNaN(kills) ||
    kills < 0
  ) {
    return "Dữ liệu không hợp lệ";
  }

  let baseScore = kills * 10;
  let bonusScore = level >= 5 ? baseScore * 0.5 : baseScore * 0.2;

  const isBoosted = boosted === true;

  let finalScore = isBoosted
    ? (baseScore + bonusScore) * 2
    : baseScore + bonusScore;

  return Math.floor(finalScore);
}
console.log(calculateScore(5, 20, true));
console.log(calculateScore(3, 10, false));
console.log(calculateScore(5, 15, false));
console.log(calculateScore(1, 50, true));

console.log(calculateScore(-1, 10, true));
console.log(calculateScore(2, -5, false));
console.log(calculateScore("abc", 10, true));
console.log(calculateScore(2, "abc", false));

console.log(calculateScore(5, 15, null));
console.log(calculateScore(5, 15, "yes"));
console.log(calculateScore(5, 15, undefined));
