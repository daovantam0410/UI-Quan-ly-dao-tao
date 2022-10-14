import teacherAPI from "API/TeacherAPI";
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
import {Link,NavLink} from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';


function ManagerTeacher() {

  const [listTeachers, setListTeachers] = useState([]);

  useEffect(() => {
      getListTeachers()
  }, []);

  const getListTeachers = () => {
    teacherAPI.getAll().then((response) => {
      setListTeachers(response.data)
    });
  }

  const deleteTeacher = (teacherId) => {
    teacherAPI.delete(teacherId).then((response) => {
      getListTeachers();
    })
  }

  const remove = (teacherId) => {
    confirmAlert({
      message: 'Bạn chắc chắn muốn xóa?',
      buttons: [
        {
          label: 'Xóa',
          onClick: () => deleteTeacher(teacherId),
        },
        {
          label: 'Hủy',
          onClick: () => getListTeachers()
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
                    <Label>Tìm kiếm giáo viên: </Label>
                  </Col>
                  <Col md="3">
                    <Form.Control placeholder="Nhập mã giáo viên..." type="text"></Form.Control>
                  </Col>
                  <Button className="btn-fill btn-info nc-icon nc-zoom-split"></Button>
              </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Button className="btn btn-fill btn-primary btn-sm btn-add">
              <NavLink to="/admin/add-teacher" className="add-item">Thêm mới giáo viên</NavLink>
            </Button>
            <i className="bi bi-file-pdf-fill icon-export"></i>
            <i className="bi bi-file-earmark-excel-fill icon-export"></i>
            <i className="fas fa-file-csv icon-export"></i>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Danh sách giáo viên</Card.Title>
                <p className="card-category">
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">STT</th>
                      <th className="border-0">Mã giáo viên</th>
                      <th className="border-0">Họ và tên</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">SĐT</th>
                      <th className="border-0">Địa chỉ</th>
                      <th className="border-0">Ngày sinh</th>
                      {/* <th className="border-0">Giới tính</th> */}
                      <th className="border-0">Khoa</th>
                      <th className="border-0">Xử lý</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listTeachers.map(
                        teacher =>
                        <tr>
                          <td>{teacher.id}</td>
                          <td>{teacher.code}</td>
                          <td>{teacher.fullName}</td>
                          <td>{teacher.email}</td>
                          <td>{teacher.phone}</td>
                          <td>{teacher.address}</td>
                          <td>{teacher.dateOfBirth}</td>
                          <td>{teacher.branchName}</td>
                          <td>
                              <button type="button" className="btn btn-fill btn-success btn-sm"><i className="bi bi-search"></i></button>
                              <Link className="btn btn-fill btn-primary btn-sm bi bi-pen" to={`/admin/edit-teacher/${teacher.id}`}></Link>
                              <button type="button" onClick={() => remove(teacher.id)} className="btn btn-fill btn-danger btn-sm"><i className="bi bi-trash"></i></button>
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

export default ManagerTeacher;
