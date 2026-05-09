# Mini App React — Quản Lý Kho Hàng

Ứng dụng web quản lý kho hàng đơn giản được xây dựng bằng **React** và **React Bootstrap**, hỗ trợ các thao tác thêm, sửa, xoá sản phẩm với giao diện thân thiện.

---

## Links

| | |
|---|---|
| **GitHub Repository** | [🔗 Xem source code](https://github.com/dangngockimkhanh130605-svg/GKF23_Full-stack.git) |
| **Video Demo** | [▶️ Xem demo](https://youtu.be/uzeyNqOXAZA) |

---

## Tính năng

- **Tổng quan hệ thống** — Dashboard hiển thị số lượng sản phẩm theo trạng thái (còn hàng, sắp hết, hết hàng)
- **Danh sách sản phẩm** — Bảng quản lý đầy đủ thông tin: tên, danh mục, đơn giá, số lượng, trạng thái kho
- **Thêm sản phẩm** — Form nhập liệu với tự động cộng dồn số lượng nếu sản phẩm đã tồn tại
- **Sửa sản phẩm** — Chỉnh sửa thông tin qua modal popup
- **Xoá sản phẩm** — Xác nhận xoá qua modal để tránh thao tác nhầm
- **Thông báo trạng thái** — Alert tự động ẩn sau vài giây cho mọi thao tác
- **Format giá tự động** — Số tiền được định dạng theo kiểu Việt Nam (dấu chấm phân cách hàng nghìn)

---

## Danh mục sản phẩm hỗ trợ

| Danh mục | |
|---|---|
| Điện tử 
| Thời trang 
| Thực phẩm 
| Gia dụng 

---

## Công nghệ sử dụng

| Công nghệ | Phiên bản |
|---|---|
| React | ^19.2.5 |
| React Bootstrap | ^2.10.10 |
| Bootstrap | ^5.3.8 |
| React Router DOM | ^7.14.2 |
| Vite | ^8.0.10 |

---

## Cấu trúc thư mục

```
mini-app-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Add.jsx               # Trang thêm sản phẩm mới
│   │   ├── AppAlert.jsx          # Component hiển thị thông báo
│   │   ├── ConfirmDeleteModal.jsx # Modal xác nhận xoá
│   │   ├── EditProductModal.jsx  # Modal chỉnh sửa sản phẩm
│   │   ├── Home.jsx              # Trang tổng quan (Dashboard)
│   │   ├── List.jsx              # Trang danh sách sản phẩm
│   │   ├── MyNavBar.jsx          # Thanh điều hướng
│   │   └── ProductForm.jsx       # Form dùng chung
│   ├── App.jsx                   # Component gốc, định nghĩa Routes
│   ├── App.css
│   └── index.jsx
├── package.json
└── vite.config.js
```

---

## Hướng dẫn cài đặt & chạy

### Yêu cầu
- Node.js >= 18
- npm >= 9

### Các bước

```bash
# 1. Clone repository
git clone https://github.com/dangngockimkhanh130605-svg/GKF23_Full-stack.git

# 2. Di chuyển vào thư mục dự án
cd mini-app-react

# 3. Cài đặt dependencies
npm install

# 4. Chạy ứng dụng ở chế độ development
npm run dev
```

Mở trình duyệt và truy cập: **http://localhost:5173**

### Build cho production

```bash
npm run build
npm run preview
```

---

## Giao diện

| Trang | Mô tả |
|---|---|
| `/` | Dashboard tổng quan kho hàng |
| `/list` | Danh sách toàn bộ sản phẩm |
| `/add` | Form thêm sản phẩm mới |

---