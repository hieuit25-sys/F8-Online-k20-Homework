// Hàm 1
function createSlug(text) {
  let slug = text.toLowerCase();
  slug = slug.replace(/\s/g, "-"); // thay thế khoảng trắng bằng dấu -
  slug = slug.replace(/[^a-z0-9]/g, ""); // ở đây sẽ xoá chữ có dấu
  return slug;
}

// Hàm 2
function generateOrderId(productName, quantity) {
  // ORD-[3 ký tự đầu tên sản phẩm viết hoa]-[quantity]-[độ dài tên sản phẩm]
  const firstThreeCharacter = productName.substr(0, 3);
  const upperCharacter = firstThreeCharacter.toUpperCase();
  const productNameLength = productName.length;
  return `ORD-${firstThreeCharacter}-${quantity}-${productNameLength}`;
}

// Hàm 3
function formatPrice(price, currency) {
  if (currency === "VNĐ") {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  }

  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }
}

// Hàm 4 Tạo URL đầy đủ cho trang sản phẩm dùng template literal.
const baseUrl = "https://shop.vn";
const product = { name: "Macbook Pro 2024", id: 101, category: "laptop" };
// "https://shop.vn/laptop/macbook-pro-2024?id=101"

function buildProductUrl(baseUrl, product) {
  const slug = createSlug(product.name);
  return `${baseUrl}/${product.category}/${slug}?id${product.id}`;
}

console.log(createSlug("MacBook Pro 2024")); // "macbook-pro-2024"
console.log(createSlug("iPhone 15 Pro Max!!!")); // "iphone-15-pro-max"
console.log(createSlug("Hello   World")); // "hello---world"

console.log(generateOrderId("MacBook Pro", 2)); // "ORD-MAC-2-11"
console.log(generateOrderId("iPhone 15", 5)); // "ORD-IPH-5-9"

console.log(formatPrice(2000000, "VND")); // "2.000.000 ₫"
console.log(formatPrice(1500, "USD")); // "$1,500.00"
console.log(formatPrice(300000, "VND")); // "300.000 ₫"

buildProductUrl("https://shop.vn", {
  name: "MacBook Pro 2024",
  id: 101,
  category: "laptop",
});
// "https://shop.vn/laptop/macbook-pro-2024?id=101"

buildProductUrl("https://shop.vn", {
  name: "iPhone 15",
  id: 55,
  category: "phone",
});
// "https://shop.vn/phone/iphone-15?id=55"
