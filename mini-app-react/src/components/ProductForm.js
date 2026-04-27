import { Card, Form, Row, Col, Button } from "react-bootstrap";

function ProductForm({
  formData,
  editingProduct,
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <Card className="border-0 shadow-sm rounded-3 mb-4">
      <Card.Body className="p-4">
        <h4 className="fw-bold mb-3">
          {editingProduct ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}
        </h4>

        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Nhập tên sản phẩm"
                  value={formData.name}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Danh mục</Form.Label>
                <Form.Select
                  name="cat"
                  value={formData.cat}
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="dark" className="me-2">
            {editingProduct ? "Cập nhật" : "Thêm sản phẩm"}
          </Button>

          <Button variant="secondary" onClick={onCancel}>
            Huỷ
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ProductForm;