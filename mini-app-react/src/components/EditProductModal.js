import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function EditProductModal({
  show,
  formData,
  onChange,
  onCancel,
  onConfirm,
}) {
  return (
    <Modal show={show} onHide={onCancel} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật sản phẩm</Modal.Title>
      </Modal.Header>

      <Form onSubmit={onConfirm}>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
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

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Đơn giá</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Số lượng</Form.Label>
                <Form.Control
                  type="number"
                  name="qty"
                  value={formData.qty}
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Huỷ
          </Button>

          <Button type="submit" variant="dark">
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditProductModal;