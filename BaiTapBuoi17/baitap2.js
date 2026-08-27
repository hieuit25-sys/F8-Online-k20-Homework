const comments = [
  { id: 1, user: "An", content: "Sản phẩm rất tốt!", rating: 5, verified: true, likes: 12 },
  { id: 2, user: "", content: "ok", rating: 3, verified: false, likes: 0 },
  { id: 3, user: "Bình", content: "Mua lần 2 rồi, vẫn chất lượng", rating: 4, verified: true, likes: 8 },
  { id: 4, user: "Chi", content: "   ", rating: null, verified: false, likes: 2 },
  { id: 5, user: "Duy", content: "Giao hàng nhanh, đóng gói cẩn thận, sẽ ủng hộ tiếp!", rating: 5, verified: true, likes: 20 },
  { id: 6, user: null, content: "Tệ quá", rating: 1, verified: false, likes: 0 },
  { id: 7, user: "Em", content: "Bình thường", rating: 3, verified: true, likes: 1 },
];

// hàm 1 kiểm tra bình luận hợp lệ
function isValidComment(comment) {
    // kiểm tra user
    if (typeof comment.user !== "string" || comment.user.trim() === "") {
        return false;
    }
    // kiểm tra content
    if (typeof comment.content !== "string" || comment.content.trim() === "" || comment.content.trim().length < 5) {
        return false;
    }
    // kiểm tra rating
    if (typeof comment.rating !== "number" || comment.rating < 1 || comment.rating > 5) {
        return false;
    }
    return true;
}

// hàm 2 Trả về mảng chỉ gồm các bình luận hợp lệ (dùng isValidComment)
function filterValidComments(comments) {
    return comments.filter(comment => isValidComment(comment));
}

// hàm 3 Tính thống kê từ mảng bình luận hợp lệ, trả về object
function getCommentStats(validComments){
// total — tổng số bình luận hợp lệ
// avgRating — rating trung bình (làm tròn 1 chữ số thập phân), avgRating = ratingTotal / total
// totalLikes — tổng lượt thích
// verifiedCount — số bình luận từ người dùng đã xác thực
// topComment — bình luận có likes cao nhất    
    let total = validComments.length;

    let totalLikes = validComments.reduce((sum, comment) => sum + comment.likes, 0);

    let ratingTotal = validComments.reduce((sum, comment) => sum + comment.rating, 0);

    let avgRating = ratingTotal / total;

    avgRating = Math.round(avgRating * 10) / 10;

    let verifiedCount = validComments.filter(comment => comment.verified === true).length;

    let topComment = validComments.reduce((top, comment) => {
        if(comment.likes > top.likes) {
            return comment;
        }
        return top;
    });

    return {
        total: total,
        avgRating: avgRating,
        totalLikes: totalLikes,
        verifiedCount: verifiedCount,
        topComment: topComment
    }
}

// hàm 4 Trả về chuỗi hiển thị bình luận dùng template literal
function formatComment(comment){
    let stars = "⭐".repeat(comment.rating);

    let user = comment.user ?? "Ẩn danh";

    let verified = comment.verified === true ? "✓" : "";

    return `${stars} | ${user} ${verified} |  ${comment.content} |  👍 ${comment.likes}`
}

console.log(isValidComment(comments[0]));
console.log(isValidComment(comments[1]));
console.log(isValidComment(comments[3]));
console.log(isValidComment(comments[5]));

console.log(filterValidComments(comments));

console.log(getCommentStats(filterValidComments(comments)))

console.log(formatComment(comments[0]))
console.log(formatComment(comments[2]))
console.log(formatComment(comments[6]))
console.log(formatComment(comments[5]))