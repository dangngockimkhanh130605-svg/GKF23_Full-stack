import { useState } from "react";
import { Container, Card, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Add({ products, setProducts }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  const showAlert = (variant, message) => {
    setAlert({ show: true, variant, message });

    setTimeout(() => {
      setAlert({ show: false, variant: "success", message: "" });
    }, 3000);
  };

  const formatPrice = (value) => {
    const onlyNumbers = value.replace(/\D/g, "");
    return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "price" ? formatPrice(value) : value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      cat: "Điện tử",
      price: "",
      qty: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.qty) {
      showAlert("danger", "Vui lòng nhập đầy đủ tên sản phẩm, giá và số lượng!");
      return;
    }

    const existedProduct = products.find(
      (product) =>
        product.name.toLowerCase().trim() === formData.name.toLowerCase().trim()
    );

    if (existedProduct) {
      setProducts(
        products.map((product) =>
          product.id === existedProduct.id
            ? {
                ...product,
                qty: String(Number(product.qty) + Number(formData.qty)),
              }
            : product
        )
      );

      showAlert(
        "success",
        `Sản phẩm đã tồn tại. Đã cộng thêm ${formData.qty} vào kho!`
      );
    } else {
      const newProduct = {
        ...formData,
        id: Date.now(),
      };

      setProducts([...products, newProduct]);
      showAlert("success", "Thêm sản phẩm mới thành công!");
    }

    resetForm();
  };

  return (
    <Container fluid className="px-4 mt-4">
      <Card className="border-0 shadow-sm rounded-3">
        <Card.Body className="p-4">
          <h4 className="fw-bold mb-3">Thêm sản phẩm mới</h4>

          {alert.show && (
            <Alert variant={alert.variant}>{alert.message}</Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Tên sản phẩm</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Nhập tên sản phẩm"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Danh mục</Form.Label>
                  <Form.Select
                    name="cat"
                    value={formData.cat}
                    onChange={handleChange}
                  >
                    <option value="Điện tử">Điện tử</option>
                    <option value="Thời trang">Thời trang</option>
                    <option value="Thực phẩm">Thực phẩm</option>
                    <option value="Gia dụng">Gia dụng</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Đơn giá</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    placeholder="VD: 6.500.000"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Số lượng</Form.Label>
                  <Form.Control
                    type="number"
                    name="qty"
                    placeholder="Nhập số lượng"
                    value={formData.qty}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" variant="dark" className="me-2">
              Thêm sản phẩm
            </Button>

            <Button variant="secondary" onClick={() => navigate("/list")}>
              Quay lại danh sách
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Add;