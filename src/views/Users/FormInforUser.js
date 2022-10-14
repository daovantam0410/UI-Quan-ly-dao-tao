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
    NavLink,
} from "react-bootstrap";
import { Label } from "reactstrap";
import { useHistory, Link, useParams } from "react-router-dom";
import userAPI from "API/UserAPI";
import roleAPI from "API/RoleAPI";
import { encode, decode, Base64 } from 'js-base64';
import {sha1} from 'js-sha1';

function FormInforUser() {

    const [listRoles, setListRoles] = useState([]);

    const [userName, setUserName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        findUserById(id);
        getListRoles();
    }, []);

    const getListRoles = () => {
        roleAPI.getAll().then((response) => {
            setListRoles(response.data);
        });
    }

    const findUserById = (id) => {
        userAPI.findById(id).then((response) => {
            setUserName(response.data.userName);
            setPassword(response.data.password);
        })
    }

    // const hash = (password) => {
    //     var data = password;
    //     var crypto = require('crypto');
    //     crypto.createHash('SHA-1').update(data)
    // }

    const saveChangePassword = () => {
        debugger;
        const user = { userName, password, oldPassword, newPassword };
        var pass = sha1(oldPassword.toString());
        // console.log(sha1(oldPassword));
        if (id) {
            userAPI.changePassword(id, user).then((response) => {
                if(password == null || password != sha1(oldPassword)){
                    alert('Mật khẩu cũ nhập sai, Chưa cập nhật thành công!');
                    history.push('/admin/manager-user/:id');
                }else{
                    alert('Cập nhật thành công!');
                    history.push('/admin/manager-user/:id');
                }
            })
        } else {
            userAPI.create(user).then((response) => {
                alert('Thêm thành công!');
                history.push('/admin/manager-user');
            });
        }
    }

    return (
        <>
            <div>
                <div className="card-body">
                    <div className="card-body pt-0">
                        <div className="table-responsive table_e2">
                            <fieldset className="border p-2">
                                <legend className="scheduler-border" id="formUser">Thông tin thành viên</legend>
                                <form id="formUpdateOrCreate">
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputCode" className="col-form-label">Username:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" value={userName} className="form-control" id="inputCode" placeholder="Nhập vào username..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item" >
                                        <div className="div-30">
                                            <label htmlFor="inputPassword" className="col-form-label" >Mật khẩu cũ:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="form-control" id="inputPassword" placeholder="Nhập vào mật khẩu cũ..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item" >
                                        <div className="div-30">
                                            <label htmlFor="inputPassword" className="col-form-label" >Mật khẩu mới:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" id="inputPassword" placeholder="Nhập vào mật khẩu mới..." />
                                        </div>
                                    </div>
                                    <ul className="nav justify-content-end">
                                        <div>
                                            <button type="button" onClick={(e) => saveChangePassword(e)} className="btn-sm btn-fill btn-info btn-save-student">Lưu thay đổi</button>
                                            <button className="btn-sm btn-fill btn-secondary" data-dismiss="modal"><Link to="/admin/manager-user">Hủy</Link></button>
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

export default FormInforUser;
