import studentAPI from "API/StudentAPI";
import React, { useState, useEffect } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { Label } from "reactstrap";
import { Link, NavLink} from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import date from 'date-and-time';

function ManagerStudent() {

  const [listStudents, setListStudents] = useState([]);

  useEffect(() => {
    getListStudents()
  }, []);

  const getListStudents = () => {
    studentAPI.getAll().then((response) => {
      setListStudents(response.data)
    });
  }

  const deleteStudent = (studentId) => {
    studentAPI.delete(studentId).then((response) => {
      getListStudents();
    })
  }

  const remove = (studentId) => {
    confirmAlert({
      message: 'Bạn chắc chắn muốn xóa?',
      buttons: [
        {
          label: 'Xóa',
          onClick: () => deleteStudent(studentId),
        },
        {
          label: 'Hủy',
          onClick: () => getListStudents()
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
                    <Label>Tìm kiếm sinh viên: </Label>
                  </Col>
                  <Col md="3">
                    <Form.Control placeholder="Nhập mã sinh viên..." type="text"></Form.Control>
                  </Col>
                  <Button className="btn-fill btn-info nc-icon nc-zoom-split"></Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Button className="btn btn-fill btn-primary btn-sm btn-add">
              <NavLink to="/admin/add-student" className="add-item">Thêm mới sinh viên</NavLink>
            </Button>
            <i className="bi bi-file-pdf-fill icon-export"></i>
            <i className="bi bi-file-earmark-excel-fill icon-export"></i>
            <i className="fas fa-file-csv icon-export"></i>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Danh sách sinh viên</Card.Title>
                <p className="card-category">
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">STT</th>
                      <th className="border-0">MSV</th>
                      <th className="border-0">Họ và tên</th>
                      <th className="border-0">email</th>
                      <th className="border-0">Số điện thoại</th>
                      <th className="border-0">Địa chỉ</th>
                      <th className="border-0">Năm sinh</th>
                      <th className="border-0">Thời gian</th>
                      <th className="border-0">Khoa</th>
                      {/* <th className="border-0">Giới tính</th> */}
                      <th className="border-0">Lớp</th>
                      <th className="border-0">Xử lý</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listStudents.map(
                        student =>
                          <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.code}</td>
                            <td>{student.fullName}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.address}</td>
                            <td>
                              {student.dateOfBirth}
                            </td>
                            <td>{student.time}</td>
                            <td>{student.branchName}</td>
                            <td>{student.roomName}</td>
                            <td>
                              <button className="btn btn-fill btn-success btn-sm bi bi-search"><Link to="/admin/add-student"></Link></button>
                              <Link className="btn btn-fill btn-primary btn-sm bi bi-pen" to={`/admin/edit-student/${student.id}`}></Link>
                              <button type="button" className="btn btn-fill btn-danger btn-sm" onClick={() => remove(student.id)}><i className="bi bi-trash"></i></button>
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

export default ManagerStudent;
