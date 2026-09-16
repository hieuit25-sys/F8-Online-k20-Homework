const orders = [
  { id: 1, customer: "An",   product: "Áo thun",                     category: "fashion",     amount: 300000, status: "completed" },
  { id: 2, customer: "Bình", product: "iPhone 15",                    category: "electronics", amount: 25000000, status: "completed" },
  { id: 3, customer: "An",   product: "Quần jean",                    category: "fashion",     amount: 450000, status: "canceled" },
  { id: 4, customer: "Chi",  product: "Tai nghe",                     category: "electronics", amount: 1200000, status: "completed" },
  { id: 5, customer: "Bình", product: "Giày",                         category: "fashion",     amount: 900000, status: "pending" },
  { id: 6, customer: "An",   product: "Sạc dự phòng",                 category: "electronics", amount: 350000, status: "completed" },
  { id: 7, customer: "Duy",  product: "Áo khoác",                     category: "fashion",     amount: 600000, status: "completed" },
];

// Hàm 1: getRevenueByCategory(orders): tính tổng doanh thu theo từng category, chỉ tính các đơn hàng có status là "completed".

function getRevenueByCategory(orders) {
  return orders.reduce((acc, order) => {
    if (order.status !== "completed") {
        return acc; // Bỏ qua các đơn hàng không hoàn thành
    }

    const category = order.category;

    if (acc[category] === undefined) {
        acc[category] = 0; // Khởi tạo giá trị nếu chưa có
    }

    acc[category] += order.amount; // Cộng dồn doanh thu theo category

    return acc;
  }, {});
}

const result = getRevenueByCategory(orders);
console.log(result);

// acc[category] là cách truy cập vào giá trị của thuộc tính category trong object acc. Nếu acc là một object, và category là một chuỗi (ví dụ: "fashion" hoặc "electronics"), thì acc[category] sẽ trả về giá trị tương ứng với key đó trong object acc. Nếu key đó chưa tồn tại, nó sẽ trả về undefined.

// Hàm 2: getSpendingByCustomer(orders): tính tổng số tiền mà mỗi khách hàng đã chi tiêu, chỉ tính các đơn hàng có status là "completed".

function getSpendingByCustomer(orders) {
    return orders.reduce((acc, order) => {
        if (order.status !== "completed") {
            return acc;
        }

        const customer = order.customer;

        if (acc[customer] === undefined) {
            acc[customer] = 0;
        }

        acc[customer] += order.amount;
        return acc;
    }, {});
}

const spendingResult = getSpendingByCustomer(orders);
console.log(spendingResult);

// Hàm 3: getOrderCountByStatus(orders): đếm số lượng đơn hàng theo từng status(không lọc gì cả, đếm tất cả các đơn hàng).

function getOrderCountByStatus(orders) {
    return orders.reduce((acc, order) => {
        const status = order.status;

        if (acc[status] === undefined) {
            acc[status] = 0;
        }

        acc[status] += 1;
        return acc;
    }, {});
}

const orderCountResult = getOrderCountByStatus(orders);
console.log(orderCountResult);

// Hàm 4: getTopCustomer(orders): tìm khách hàng có tổng số tiền chi tiêu cao nhất, chỉ tính các đơn hàng có status là "completed". Phải tự viết reduce() riêng để vừa cộng dồn vừa theo dõi ai đang dẫn đầu trong cùng một lần duyệt. Trả về object có 2 thuộc tính là customer và total.

function getTopCustomer(orders) {
    const spendingByCustomer = orders.reduce((acc, order) => {
        if (order.status !== "completed") {
            return acc;
        }

        const customer = order.customer;

        if (acc[customer] === undefined) {
            acc[customer] = 0;
        }

        acc[customer] += order.amount;
        return acc;
    }, {});

    // Tìm khách hàng có tổng số tiền chi tiêu cao nhất
    let topCustomer = null;
    let maxSpending = 0;

    for (const [customer, spending] of Object.entries(spendingByCustomer)) {
        if (spending > maxSpending) {
            maxSpending = spending;
            topCustomer = customer;
        }
    }

    return {
        customer: topCustomer,
        total: maxSpending
    };
}

const topCustomerResult = getTopCustomer(orders);
console.log(topCustomerResult);

// Hàm 5: getFullReport(orders): dùng một lần reduce() để tính tất cả các thông tin trên, trả về object có 4 thuộc tính: revenueByCategory, spendingByCustomer, spendingByCustomer, statusCount, totalRevenue.

function getFullReport(orders) {
  const initialValue = {
    revenueByCategory: {},
    spendingByCustomer: {},
    statusCount: {},
    totalRevenue: 0
  };

  return orders.reduce((acc, order) => {
    // 1. Đếm tất cả đơn hàng theo status
    const status = order.status;

    if (acc.statusCount[status] === undefined) {
      acc.statusCount[status] = 0;
    }

    acc.statusCount[status] += 1;

    // 2. Các phần tính tiền chỉ áp dụng cho đơn completed
    if (order.status !== "completed") {
      return acc;
    }

    // 3. Tính doanh thu theo category
    const category = order.category;

    if (acc.revenueByCategory[category] === undefined) {
      acc.revenueByCategory[category] = 0;
    }

    acc.revenueByCategory[category] += order.amount;

    // 4. Tính chi tiêu theo khách hàng
    const customer = order.customer;

    if (acc.spendingByCustomer[customer] === undefined) {
      acc.spendingByCustomer[customer] = 0;
    }

    acc.spendingByCustomer[customer] += order.amount;

    // 5. Tính tổng doanh thu
    acc.totalRevenue += order.amount;

    return acc;
  }, initialValue);
}

const fullReport = getFullReport(orders);

console.log(fullReport);