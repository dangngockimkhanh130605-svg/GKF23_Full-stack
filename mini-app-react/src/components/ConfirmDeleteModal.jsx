import { Modal, Button } from "react-bootstrap";

function ConfirmDeleteModal({ show, product, onCancel, onConfirm }) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận xoá</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Bạn có chắc chắn muốn xoá sản phẩm{" "}
        <strong>{product?.name}</strong> không?
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Huỷ
        </Button>

        <Button variant="danger" onClick={onConfirm}>
          Xoá
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeleteModal;