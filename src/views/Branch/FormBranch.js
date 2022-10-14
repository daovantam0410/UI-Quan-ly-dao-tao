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
    NavLink,
} from "react-bootstrap";
import { Label } from "reactstrap";
import { useHistory, Link, useParams } from "react-router-dom";
import branchAPI from "API/BranchAPI";

function FormBranch() {

    const [code, setCode] = useState('');
    const [name, setName] = useState('');

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        findBranchById(id);
    }, []);

    const saveOrUpdateBranch = () => {
        const branch = { code, name };

        if (id) {
            branchAPI.update(id, branch).then((response) => {
                alert('Cập nhật thành công!')
                history.push('/admin/edit-branch/:id')
            })
        } else {
            branchAPI.create(branch).then((response) => {
                alert('Thêm thành công!')
                history.push('/admin/manager-branch');
            })
        }
    }

    const findBranchById = (id) => {
        branchAPI.findById(id).then((response) => {
            setCode(response.data.code)
            setName(response.data.name)
        })
    }

    return (
        <>
            <div>
                <div className="card-body">
                    <div className="card-body pt-0">
                        <div className="table-responsive table_e2">
                            <fieldset className="border p-2">
                                <legend className="scheduler-border" id="formUser">Thông tin khoa</legend>
                                <form id="formUpdateOrCreate">
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputUserName" className="col-form-label">Mã khoa:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" className="form-control" value={code} onChange={(e) => setCode(e.target.value)} id="inputCode" placeholder="Nhập vào mã khoa..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputUserName" className="col-form-label">Tên khoa:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="inputName" placeholder="Nhập vào tên khoa..." />
                                        </div>
                                    </div>
                                    <ul className="nav justify-content-end">
                                        <div>
                                            <button type="button" onClick={(e) => saveOrUpdateBranch(e)} className="btn-sm btn-fill btn-info btn-save-student">Lưu thay đổi</button>
                                            <button className="btn-sm btn-fill btn-secondary" data-dismiss="modal"><Link to="/admin/manager-branch">Hủy</Link></button>
                                        </div>
                                    </ul>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormBranch;
