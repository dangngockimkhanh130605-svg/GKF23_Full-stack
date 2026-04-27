import { useState } from "react";
import { Container, Table, Badge, Button, Card } from "react-bootstrap";
import AppAlert from "./AppAlert";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import EditProductModal from "./EditProductModal";
import { useNavigate } from "react-router-dom";

function List({ products, setProducts }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();

  const [editFormData, setEditFormData] = useState({
    name: "",
    cat: "Điện tử",
    price: "",
    qty: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    variant: "success",
    message: "",
  });

  const getStatusDetail = (qty) => {
    const quantity = Number(qty);

    if (quantity === 0) {
      return { text: "Hết hàng", variant: "danger" };
    }

    if (quantity <= 5) {
      return { text: "Sắp hết", variant: "warning" };
    }

    return { text: "Còn hàng", variant: "success" };
  };

  const showAlert = (variant, message) => {
    setAlert({
      show: true,
      variant,
      message,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        variant: "success",
        message: "",
      });
    }, 5000);
  };

  const formatPrice = (value) => {
    const onlyNumbers = value.replace(/\D/g, "");
    return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleEdit = (product) => {
    setEditingProduct(product);

    setEditFormData({
      name: product.name,
      cat: product.cat,
      price: product.price,
      qty: product.qty,
    });

    setShowEditModal(true);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;

    setEditFormData({
      ...editFormData,
      [name]: name === "price" ? formatPrice(value) : value,
    });
  };

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    if (!editFormData.name || !editFormData.price || !editFormData.qty) {
      showAlert("danger", "Vui lòng nhập đầy đủ thông tin sản phẩm!");
      return;
    }

    setProducts(
      products.map((product) =>
        product.id === editingProduct.id
          ? { ...editFormData, id: editingProduct.id }
          : product
      )
    );

    setShowEditModal(false);
    setEditingProduct(null);
    showAlert("success", "Cập nhật sản phẩm thành công!");
  };

  const handleOpenDeleteModal = (product) => {
    setDeleteProduct(product);
  };

  const handleCloseDeleteModal = () => {
    setDeleteProduct(null);
  };

  const handleConfirmDelete = () => {
    setProducts(products.filter((product) => product.id !== deleteProduct.id));
    setDeleteProduct(null);
    showAlert("warning", "Đã xoá sản phẩm thành công!");
  };

  return (
    <Container fluid className="px-4 mt-4">
      <AppAlert
        show={alert.show}
        variant={alert.variant}
        message={alert.message}
        onClose={() => setAlert({ ...alert, show: false })}
      />

      <Card className="border-0 shadow-sm rounded-3">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">Danh sách sản phẩm</h4>

            <Button
              variant="outline-dark"
              className="px-4 py-2 fw-bold shadow-sm"
              onClick={() => navigate("/add")}
            >
              Thêm mới
            </Button>
          </div>

          <Table responsive hover className="align-middle">
            <thead className="bg-light">
              <tr className="text-secondary small text-uppercase fw-bold">
                <th className="py-3 border-0">STT</th>
                <th className="py-3 border-0">Tên sản phẩm</th>
                <th className="py-3 border-0">Danh mục</th>
                <th className="py-3 border-0">Đơn giá</th>
                <th className="py-3 border-0">Kho</th>
                <th className="py-3 border-0">Trạng thái</th>
                <th className="py-3 border-0">Thao tác</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p, index) => {
                const statusInfo = getStatusDetail(p.qty);

                return (
                  <tr key={p.id} className="border-bottom border-light">
                    <td className="text-muted">{index + 1}</td>

                    <td
                      className="fw-bold text-dark py-3"
                      style={{ width: "30%" }}
                    >
                      {p.name}
                    </td>

                    <td>
                      <Badge
                        bg="primary"
                        className="bg-opacity-10 text-primary px-3 py-2 fw-normal"
                      >
                        {p.cat}
                      </Badge>
                    </td>

                    <td className="fw-bold text-secondary">{p.price}</td>
                    <td className="fw-bold">{p.qty}</td>

                    <td className="text-center">
                      <Badge
                        bg={statusInfo.variant}
                        className={`bg-opacity-10 text-${statusInfo.variant} px-3 py-2 fw-normal`}
                        style={{ minWidth: "85px" }}
                      >
                        {statusInfo.text}
                      </Badge>
                    </td>

                    <td className="text-center">
                      <Button
                        variant="white"
                        className="border shadow-sm me-2 btn-sm px-3"
                        onClick={() => handleEdit(p)}
                      >
                        Sửa
                      </Button>

                      <Button
                        variant="white"
                        className="border shadow-sm btn-sm px-3"
                        onClick={() => handleOpenDeleteModal(p)}
                      >
                        Xoá
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <EditProductModal
        show={showEditModal}
        formData={editFormData}
        onChange={handleEditChange}
        onCancel={() => setShowEditModal(false)}
        onConfirm={handleUpdateProduct}
      />

      <ConfirmDeleteModal
        show={!!deleteProduct}
        product={deleteProduct}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </Container>
  );
}

export default List;