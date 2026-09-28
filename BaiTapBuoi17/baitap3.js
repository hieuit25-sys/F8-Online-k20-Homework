const players = [
  { id: 1, name: "DragonSlayer", scores: [120, 85, 200, 95], level: 8, badge: "gold" },
  { id: 2, name: "NightWolf",    scores: [60, 75, 50],        level: 5, badge: null },
  { id: 3, name: "StarQueen",    scores: [300, 250, 180, 90, 120], level: 12, badge: "diamond" },
  { id: 4, name: "IronFist",     scores: [40, 30],             level: 2, badge: null },
  { id: 5, name: "ShadowBlade",  scores: [150, 200, 175],      level: 9, badge: "silver" },
];

// Hàm 1: tính tổng điểm người chơi
function getTotalScore(player) {
  const total = player.scores.reduce((total, score) => {
      return total += score;
  }, 0);
  return total;
}

console.log(getTotalScore(players[0]));
console.log(getTotalScore(players[3]));

// Hàm 2: trả về mảng sắp xếp rank theo tổng điểm giảm dần
function getRanking(players) {
  // B1: tính tổng điểm mỗi player, pread và dùng map()
  const playersWithScore = players.map(player => {
    return {
      ...player,
      totalScore: getTotalScore(player)
    };
  });

  // B2: sort 
  playersWithScore.sort((a, b) => {
    return b.totalScore - a.totalScore;
  });

  // B3: dùng map() để lấy player để log ra đẹp 
  const ranking = playersWithScore.map((player, index) => {
    return {
      rank: index + 1,
      name: player.name,
      totalScore: player.totalScore,
      badge: player.badge || "none"
    };
  });

  return ranking;
}

console.log(getRanking(players));

// Hàm 3: trả về mảng của 'n' là số người chơi có tổng điểm cao nhất
function getTopPlayers(players, n) {
  const ranking = getRanking(players);

  const topPlayers = ranking.slice(0, n);

  const names = topPlayers.map(player => {
    return player.name;
  });

  return names;
}

console.log(getTopPlayers(players, 3));
console.log(getTopPlayers(players, 1));

// Hàm 4: format thông tin dùng template literal
function formatPlayerCard(player) {
  const totalScore = getTotalScore(player);

  // tạo một Object badgeMap để ánh xa khi lấy badge
  const badgeMap = {
    diamond: "💎 DIAMOND",
    gold: "🏅 GOLD",
    silver: "🥈 SILVER"
  };

  // gán cho badgeTex
  const badgeText = badgeMap[player.badge];

  // dùng ternary operator để gọn, không dùng if
  return `${player.name} | Lv.${player.level} | ${totalScore} điểm ${badgeText ? `| ${badgeText}` : ""}`;
}

console.log(formatPlayerCard(players[0]));
console.log(formatPlayerCard(players[1]));
console.log(formatPlayerCard(players[2]));
console.log(formatPlayerCard(players[4]));