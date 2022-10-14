import roomAPI from "API/RoomAPI";
import React, {useState, useEffect} from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Form,
  Col,
} from "react-bootstrap";
import { Label } from "reactstrap";
import { Link , NavLink } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';

function ManagerRoom() {

  const [listRooms, setListRooms] = useState([]);

  useEffect(() => {
    getListRooms()
  }, []);

  const getListRooms = () => {
    roomAPI.getAll().then((response) => {
      setListRooms(response.data)
    });
  }

  const deleteRoom = (roomId) => {
    roomAPI.delete(roomId).then((response) => {
      getListRooms();
    })
  }

  const remove = (roomId) => {
    confirmAlert({
      message: 'Bạn chắc chắn muốn xóa?',
      buttons: [
        {
          label: 'Xóa',
          onClick: () => deleteRoom(roomId),
        },
        {
          label: 'Hủy',
          onClick: () => getListRooms()
        }
      ]
    })
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Body className="table-full-width table-responsive px-0">
              <Row>
                  <Col md="2">
                    <Label>Tìm kiếm lớp học: </Label>
                  </Col>
                  <Col md="3">
                    <Form.Control placeholder="Nhập mã ..." type="text"></Form.Control>
                  </Col>
                  <Button className="btn-fill btn-info nc-icon nc-zoom-split"></Button>
              </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Button className="btn btn-fill btn-primary btn-sm btn-add">
              <NavLink to="/admin/add-room" className="add-item">Thêm mới lớp học</NavLink>
            </Button>
            <i className="bi bi-file-pdf-fill icon-export"></i>
            <i className="bi bi-file-earmark-excel-fill icon-export"></i>
            <i className="fas fa-file-csv icon-export"></i>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Danh sách lớp học</Card.Title>
                <p className="card-category">
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">STT</th>
                      <th className="border-0">Mã lớp học</th>
                      <th className="border-0">Tên Lớp học</th>
                      <th className="border-0">Tên khoa</th>
                      <th className="border-0">Xử lý</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listRooms.map(
                        room =>
                        <tr>
                          <td>{room.id}</td>
                          <td>{room.code}</td>
                          <td>{room.name}</td>
                          <td>{room.branchName}</td>
                          <td>
                              {/* <button type="button" className="btn btn-success btn-sm"><i className="bi bi-search"></i></button> */}
                              <Link className="btn btn-fill btn-primary btn-sm bi bi-pen" to={`/admin/edit-room/${room.id}`}></Link>
                              <button onClick={(e) => remove(room.id)} className="btn btn-fill btn-danger btn-sm bi bi-trash"></button>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ManagerRoom;
