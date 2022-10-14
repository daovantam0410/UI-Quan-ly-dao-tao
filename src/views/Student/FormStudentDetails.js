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
    // Label,
    Row,
    Col,
} from "react-bootstrap";
import { Label } from "reactstrap";
import { useHistory, Link } from "react-router-dom";
import branchAPI from "API/BranchAPI";
import Select from 'react-select';
import ManagerBranch from "views/Branch/ManagerBranch";

function FormStudentDetails() {

    return (
        <>
            <div>
                <div className="card-body">
                    <div className="card-body pt-0">
                        <div className="table-responsive table_e2">
                            <fieldset className="border p-2">
                                <form id="formStudentDetails">
                                    
                                </form>
                            </fieldset>
                            <Col md="12">
                                <Card className="strpied-tabled-with-hover">
                                    <Card.Header>
                                        <Card.Title as="h4">Danh sách môn học</Card.Title>
                                        <p className="card-category">
                                        </p>
                                    </Card.Header>
                                    <Card.Body className="table-full-width table-responsive px-0">
                                        <Table className="table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th className="border-0">STT</th>
                                                    <th className="border-0">Tên môn học</th>
                                                    <th className="border-0">Mã học phần</th>
                                                    <th className="border-0">Mã giảng viên</th>
                                                    <th className="border-0">Lớp</th>
                                                    <th className="border-0">Tuần</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Giải tích 1</td>
                                                    <td>TH02015</td>
                                                    <td>SN01</td>
                                                    <td>K60THA</td>
                                                    <td>12345678</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Cấu trúc dữ liệu và giải thuật</td>
                                                    <td>TH02016</td>
                                                    <td>SN02</td>
                                                    <td>K61MMT</td>
                                                    <td>123456789</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormStudentDetails;
