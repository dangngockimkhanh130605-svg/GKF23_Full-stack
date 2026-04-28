import { useState } from "react";
import { Container, Row, Col, Card, Accordion, Alert } from "react-bootstrap";
import '../App.css';

function Home() {
  const [showNotice, setShowNotice] = useState(false);

  const stats = [
    { title: "Tổng sản phẩm", value: "10", color: "text-primary" },
    { title: "Còn hàng", value: "5", color: "text-success" },
    { title: "Sắp hết", value: "4", color: "text-warning" },
    { title: "Hết hàng", value: "1", color: "text-danger" },
  ];

  const handleDevelopingFeature = () => {
    setShowNotice(true);

    setTimeout(() => {
      setShowNotice(false);
    }, 3000);
  };

  return (
    <Container fluid className="px-4 mt-4">
      {showNotice && (
        <Alert variant="warning" className="mb-3">
          Tính năng đang phát triển!
        </Alert>
      )}

      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0 me-2 fw-bold text-secondary">
          Tổng quan hệ thống
        </h5>
      </div>

      <Row>
        {stats.map((item, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <Card
              className="shadow-sm border-0 rounded-3 h-100 custom-card"
              onClick={handleDevelopingFeature}
              style={{ cursor: "pointer" }}
            >
              <Card.Body className="p-4">
                <Card.Subtitle className="mb-2 text-muted small fw-bold">
                  {item.title}
                </Card.Subtitle>

                <Card.Title
                  as="h1"
                  className={`display-4 fw-bold mb-1 ${item.color}`}
                >
                  {item.value}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h5 className="mt-4 m-3">Thông tin nhanh</h5>

      <Accordion
        defaultActiveKey="0"
        className="shadow-sm rounded-3 overflow-hidden mb-5"
      >
        <Accordion.Item eventKey="0" className="border-light">
          <Accordion.Header className="fw-bold">
            <span className="me-2"></span>
            Hướng dẫn sử dụng
          </Accordion.Header>

          <Accordion.Body className="text-secondary bg-white">
            Hệ thống cho phép bạn quản lý kho hàng thời gian thực. Nhấp vào
            "Thêm sản phẩm mới" để bắt đầu.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="border-light">
          <Accordion.Header className="fw-bold">
            <span className="me-2"></span>
            Lưu ý
          </Accordion.Header>

          <Accordion.Body className="text-secondary bg-white">
            Hãy chú ý các sản phẩm có màu đỏ, đó là những sản phẩm đã hết hàng.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="border-light">
          <Accordion.Header className="fw-bold">
            <span className="me-2"></span>
            Danh mục sản phẩm
          </Accordion.Header>

          <Accordion.Body className="text-secondary bg-white">
            Hiện ứng dụng có 4 loại danh mục sản phẩm: điện tử, thời trang, gia
            dụng và thực phẩm.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Home;