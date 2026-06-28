
function analyzeValue(value) {
    // Kiểm tra typeof
    const type = typeof value; // đúng
    
    // Kiểm tra có phải Truthy không
    const isTruthy = !!value; // đúng => C2: const isTruthy = boolean(value);

    // Kiểm tra là Null hoặc Underfined
    const isNullOrUndefined = (value === null || value === undefined); // đúng. Vì đã trả về true/false

    // Kiểm tra có phải là: Tham chiếu (Reference Type) or Nguyên thuỷ (Primative Type). Xem Bảng 1
    const isReferenceType = typeof value === "object" && value !== null || typeof value === "function" ? true : false;


    return {
        input: value,
        type,
        isTruthy,
        isNullOrUndefined,
        isReferenceType
    }
}

console.log(analyzeValue('@'));
