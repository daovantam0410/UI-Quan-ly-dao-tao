import subjectAPI from "API/SubjectAPI";
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

function RegisterSubject() {

  const [listSubject, setListSubject] = useState([]);

  useEffect(() => {
    getListSubject();
  }, []);

  const getListSubject = () => {
    subjectAPI.getAll().then((response) => {
      setListSubject(response.data);
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
                    <Label>Lọc theo môn học: </Label>
                  </Col>
                  <Col md="3">
                    <Form.Control placeholder="Nhập môn học..." type="text"></Form.Control>
                  </Col>
                  <Button className="btn-fill btn-info nc-icon nc-zoom-split"></Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Danh sách môn học</Card.Title>
                <p className="card-category">
                  {/* Here is a subtitle for this table */}
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0"></th>
                      <th className="border-0">STT</th>
                      <th className="border-0">Tên môn học</th>
                      <th className="border-0">Mã học phần</th>
                      <th className="border-0">Mã giảng viên</th>
                      {/* <th className="border-0">Lớp</th> */}
                      {/* <th className="border-0">Tuần</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listSubject.map(
                        subject => <tr key={subject.id}>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultValue=""
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>{subject.id}</td>
                          <td>{subject.code}</td>
                          <td>{subject.name}</td>
                          <td>{subject.teacherCode}</td>
                        </tr>
                      )
                    }


                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <button type="button" className="btn-sm btn-fill btn-primary btn-save-subjects">Lưu các môn đã chọn</button>
            <button type="button" className="btn-sm btn-fill btn-secondary">Hủy</button>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Danh sách các môn đã đăng ký</Card.Title>
                <p className="card-category">
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0"></th>
                      <th className="border-0">STT</th>
                      <th className="border-0">Tên môn học</th>
                      <th className="border-0">Mã học phần</th>
                      <th className="border-0">Mã giảng viên</th>
                      {/* <th className="border-0">Lớp</th> */}
                      {/* <th className="border-0">Thời gian</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Form.Check className="mb-1 pl-0">
                          <Form.Check.Label>
                            <Form.Check.Input
                              defaultValue=""
                              type="checkbox"
                            ></Form.Check.Input>
                            <span className="form-check-sign"></span>
                          </Form.Check.Label>
                        </Form.Check>
                      </td>
                      <td>1</td>
                      <td>Quản trị mạng</td>
                      <td>TH03216</td>
                      <td>SN05</td>
                    </tr>
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

export default RegisterSubject;
