import { Container, Table, Badge, Button, Card } from "react-bootstrap";

function List(){
    const products = [
        {id: 1, name: "Airpods 4", cat:"Điện tử", price: "6.500.000", qty: "0"},
        {id: 2, name: "Đầm công chúa", cat:"Thời trang", price: "500.000", qty: "5"},
        {id: 3, name: "Airpods 4", cat:"Điện tử", price: "6.500.000", qty: "12"},
        {id: 4, name: "iPhone 15", cat: "Điện tử", price: "18.990.000", qty: "8"},
        {id: 5, name: "Samsung Galaxy S24", cat: "Điện tử", price: "20.990.000", qty: "10"},
        {id: 6, name: "Áo hoodie unisex", cat: "Thời trang", price: "350.000", qty: "25"},
        {id: 7, name: "Quần jean nam", cat: "Thời trang", price: "420.000", qty: "18"},
        {id: 8, name: "Sữa tươi Vinamilk 1L", cat: "Thực phẩm", price: "32.000", qty: "50"},
        {id: 9, name: "Mì gói Hảo Hảo", cat: "Thực phẩm", price: "4.000", qty: "200"},
        {id: 10, name: "Nồi cơm điện Sharp", cat: "Gia dụng", price: "890.000", qty: "12"},
    ];

    const getStatusDetail = (qty) => {
        if(qty==0){
            return {text: "Hết hàng", variant: "danger"};
        }else if(qty<=5){
            return {text: "Sắp hết", variant: "warning"};
        }else{
            return {text: "Còn hàng", variant: "success"};
        }
    };

    return (
        <Container fluid className="px-4 mt-4">
            <Card className="border-0 shadow-sm rouded-3">
                <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="fw-bold mb-0">
                            Danh sách sản phẩm
                        </h4>

                        <Button variant="outline-dark" className="px-4 py-2 fw-bold shadow-sm">
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

                                return(
                                    <tr key={p.id} className="border-bottom border-light">
                                        <td className="text-muted">{index + 1}</td>
                                        <td className="fw-bold text-dark py-3" style={{width: '30%'}}>{p.name}</td>
                                        <td>
                                            <Badge
                                                bg="primary" className="bg-opacity-10 text-primary px-3 py-2 fw-normal"
                                            > 
                                                {p.cat}
                                            </Badge>
                                        </td>
                                        <td className="fw-bold text-secondary">{p.price}</td>
                                        <td className="fw-bold">{p.qty}</td>
                                        <td className="text-center">
                                            <Badge bg={statusInfo.variant} className={`bg-opacity-10 text-${statusInfo.variant} px-3 py-2 fw-normal`} style={{minWidth: '85px'}}>
                                                {statusInfo.text}
                                            </Badge>
                                        </td>
                                        <td className="text-center">
                                            <Button variant="white" className="border shadow-sm me-2 btn-sm px-3 hover-effect">
                                                Sửa
                                            </Button>
                                            <Button variant="white" className="border shadow-sm btn-sm px-3 hover-effect">
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
        </Container>
    );
}

export default List;