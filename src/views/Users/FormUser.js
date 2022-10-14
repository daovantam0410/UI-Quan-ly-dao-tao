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

function FormUser() {

    const [listRoles, setListRoles] = useState([]);

    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [roleId, setRoleId] = useState('');

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
            setFullName(response.data.fullName);
            setPassword(response.data.password);
            setEmail(response.data.email);
            setAddress(response.data.address);
            setPhone(response.data.phone);
            setGender(response.data.gender.toString());
            setDateOfBirth(response.data.dateOfBirth);
            setRoleId(response.data.roleId);
        })
    }

    const saveOrUpdateUser = () => {
        const user = { userName, fullName, password, email, address, phone, gender, dateOfBirth, roleId };
        if (id) {
            userAPI.update(id, user).then((response) => {
                alert('Cập nhật thành công!');
                history.push('/admin/edit-user/:id');
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
                                <legend className="scheduler-border" id="formUser">Nhập thông tin thành viên</legend>
                                <form id="formUpdateOrCreate">
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputCode" className="col-form-label">Username:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" id="inputCode" placeholder="Nhập vào username..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputFullName" className="col-form-label">Họ và tên:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} id="inputFullName" placeholder="Nhập vào họ và tên..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item" >
                                        <div className="div-30">
                                            <label htmlFor="inputPassword" className="col-form-label" >Mật khẩu:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type={id ? "hidden" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword" placeholder="Nhập vào mật khẩu..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputEmail" className="col-form-label">Email:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmail" placeholder="Nhập vào email..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputAddress" className="col-form-label">Địa chỉ:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="inputAddress" placeholder="Nhập vào địa chỉ..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputPhone" className="col-form-label">Số điện thoại:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="inputPhone" placeholder="Nhập vào số điện thoại..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputGender" className="col-form-label">Giới tính:</label>
                                        </div>
                                        <div className="div-70">
                                            <div classname="radio-inline">
                                                <input className="form-check-input" value="1" checked={gender === "1"} onChange={(e) => setGender(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                                                <label >Nam</label>
                                            </div>
                                            <div classname="radio-inline">
                                                <input className="form-check-input" value="0" checked={gender === "0"} onChange={(e) => setGender(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label className="col-form-label">Chức vụ:</label>
                                        </div>
                                        <div className="div-70">
                                            <select className="form-control" value={roleId} onChange={(e) => setRoleId(e.target.value)}>
                                                <option value="">---Chọn chức vụ---</option>
                                                {
                                                    listRoles.map(role => <option value={role.id}>{role.description}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputBirthday" className="col-form-label">Ngày sinh:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="form-control" id="inputBirthday" placeholder="Nhập vào ngày sinh..." />
                                        </div>
                                    </div>
                                    {/* <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputBirthday" className="col-form-label">Ảnh đại diện:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="hidden" />
                                            <input type="file" className="image" id="fileImage" accept="image/png, image/jpeg, image/jpg, image/PNG, image/JPEG, image/JPG" />
                                        </div>
                                    </div> */}
                                    <ul className="nav justify-content-end">
                                        <div>
                                            <button type="button" onClick={(e) => saveOrUpdateUser(e)} className="btn-sm btn-fill btn-info btn-save-student">Lưu thay đổi</button>
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

export default FormUser;
