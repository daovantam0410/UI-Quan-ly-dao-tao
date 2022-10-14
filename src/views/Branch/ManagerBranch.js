import branchAPI from "API/BranchAPI";
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
  Row,
  Form,
  Col,
} from "react-bootstrap";
import { Label } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';


function ManagerBranch() {

  const [listBranchs, setListBranchs] = useState([]);

  useEffect(() => {
    getListBranchs()
  }, []);

  const getListBranchs = () => {
    branchAPI.getAll().then((response) => {
      setListBranchs(response.data)
    });
  }

  const deleteBranch = (branchId) => {
    branchAPI.delete(branchId).then((response) => {
      getListBranchs();
    })
  }

  const filter = () => {
    branchAPI.filter().then((response) => {
      setListBranchs(response.data);
    });
  }

  const remove = (branchId) => {
    confirmAlert({
      message: 'Bạn chắc chắn muốn xóa?',
      buttons: [
        {
          label: 'Xóa',
          onClick: () => deleteBranch(branchId),
        },
        {
          label: 'Hủy',
          onClick: () => getListBranchs()
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
                      <Label>Tìm kiếm khoa: </Label>
                    </Col>
                    <Col md="3">
                      <Form.Control placeholder="Nhập mã khoa ..." type="text"></Form.Control>
                    </Col>
                    <Button className="btn btn-fill btn-info nc-icon nc-zoom-split"></Button>
                  </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Button className="btn btn-fill btn-primary btn-sm btn-add">
              <NavLink to="/admin/add-branch" className="add-item">Thêm mới khoa</NavLink>
            </Button>
            <i className="bi bi-file-pdf-fill icon-export"></i>
            <i className="bi bi-file-earmark-excel-fill icon-export"></i>
            <i className="fas fa-file-csv icon-export"></i>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Danh sách khoa</Card.Title>
                <p className="card-category">
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">STT</th>
                      <th className="border-0">Mã khoa</th>
                      <th className="border-0">Tên khoa</th>
                      <th className="border-0">Xử lý</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listBranchs.map(
                        branch =>
                          <tr key={branch.id}>
                            <td>{branch.id}</td>
                            <td>{branch.code}</td>
                            <td>{branch.name}</td>
                            <td>
                              <Link className="btn btn-fill btn-primary btn-sm bi bi-pen" to={`/admin/edit-branch/${branch.id}`}></Link>
                              <button type="button" onClick={(e) => remove(branch.id)} className="btn btn-fill btn-danger btn-sm"><i className="bi bi-trash"></i></button>
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

export default ManagerBranch;
