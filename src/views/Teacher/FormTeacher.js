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
    NavLink,
} from "react-bootstrap";
import { Label } from "reactstrap";
import { useHistory, Link, useParams } from "react-router-dom";
import teacherAPI from "API/TeacherAPI";
import branchAPI from "API/BranchAPI";
import roleAPI from "API/RoleAPI";

function FormTeacher() {

    const [listRoles, setListRoles] = useState([]);
    const [listBranchs, setListBranchs] = useState([]);

    const [code, setCode] = useState('')
    const [fullName, setFullName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [branchId, setBranchId] = useState('')
    const [roleId, setRoleId] = useState('')

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        findTeacherById(id);
        getListBranchs();
        getListRoles();
    }, []);

    const getListRoles = () => {
        roleAPI.getAll().then((response) => {
            setListRoles(response.data);
        });
    }

    const getListBranchs = () => {
        branchAPI.getAll().then((response) => {
            setListBranchs(response.data);
        });
    }

    const findTeacherById = (id) => {
        teacherAPI.findById(id).then((response) => {
            setCode(response.data.code);
            setFullName(response.data.fullName);
            setPassword(response.data.password);
            setEmail(response.data.email);
            setAddress(response.data.address);
            setPhone(response.data.phone);
            setGender(response.data.gender.toString());
            setDateOfBirth(response.data.dateOfBirth);
            setBranchId(response.data.branchId);
            setRoleId(response.data.roleId);
        })
    }

    const saveOrUpdateTeacher = () => {
        const teacher = { code, fullName, password, email, address, phone, gender, dateOfBirth, branchId, roleId };
        if (id) {
            teacherAPI.update(id, teacher).then((response) => {
                alert('C???p nh???t th??nh c??ng!');
                history.push('/admin/edit-teacher/:id');
            })
        } else {
            teacherAPI.create(teacher).then((response) => {
                alert('Th??m th??nh c??ng!');
                history.push('/admin/manager-teacher');
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
                                <legend className="scheduler-border" id="formUser">Nh???p th??ng tin gi??o vi??n</legend>
                                <form id="formUpdateOrCreate">
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputCode" className="col-form-label">M?? gi??o vi??n:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} className="form-control" id="inputCode" placeholder="Nh???p v??o m?? gi??o vi??n..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputFullName" className="col-form-label">H??? v?? t??n:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} id="inputFullName" placeholder="Nh???p v??o h??? v?? t??n..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputPassword" className="col-form-label">M???t kh???u:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type={id ? "hidden" : "password" } value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword" placeholder="Nh???p v??o m???t kh???u..." />
                                        </div>
                                    </div>
                                    {/* <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputPassword" className="col-form-label">X??c nh???n l???i m???t kh???u:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="password" className="form-control" id="inputPassword" placeholder="Nh???p l???i m???t kh???u..." />
                                        </div>
                                    </div> */}
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputEmail" className="col-form-label">Email:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmail" placeholder="Nh???p v??o email..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputAddress" className="col-form-label">?????a ch???:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="inputAddress" placeholder="Nh???p v??o ?????a ch???..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputPhone" className="col-form-label">S??? ??i???n tho???i:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="inputPhone" placeholder="Nh???p v??o s??? ??i???n tho???i..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputGender" className="col-form-label">Gi???i t??nh:</label>
                                        </div>
                                        <div className="div-70">
                                            <div classname="radio-inline">
                                                <input className="form-check-input" value="1" checked={gender === "1"} onChange={(e) => setGender(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                                                <label >Nam</label>
                                            </div>
                                            <div classname="radio-inline">
                                                <input className="form-check-input" value="0" checked={gender === "0"} onChange={(e) => setGender(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                                                <label className="form-check-label" htmlFor="inlineRadio2">N???</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label className="col-form-label">Ch???c v???:</label>
                                        </div>
                                        <div className="div-70">
                                            <select className="form-control" value={roleId} onChange={(e) => setRoleId(e.target.value)}>
                                                <option value="">---Ch???n ch???c v???---</option>
                                                {
                                                    listRoles.map(role => <option value={role.id}>{role.description}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label className="col-form-label">Khoa:</label>
                                        </div>
                                        <div className="div-70">
                                            <select className="form-control" value={branchId} onChange={(e) => setBranchId(e.target.value)}>
                                                <option>---Ch???n Khoa---</option>
                                                {
                                                    listBranchs.map(branch => <option value={branch.id}>{branch.name}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputBirthday" className="col-form-label">Ng??y sinh:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="form-control" id="inputBirthday" placeholder="Nh???p v??o ng??y sinh..." />
                                        </div>
                                    </div>
                                    {/* <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputBirthday" className="col-form-label">???nh ?????i di???n:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="hidden" />
                                            <input type="file" className="image" id="fileImage" accept="image/png, image/jpeg, image/jpg, image/PNG, image/JPEG, image/JPG" />
                                        </div>
                                    </div> */}
                                    <ul className="nav justify-content-end">
                                        <div>
                                            <button type="button" onClick={(e) => saveOrUpdateTeacher(e)} className="btn-sm btn-fill btn-info btn-save-student">L??u thay ?????i</button>
                                            <button className="btn-sm btn-fill btn-secondary" data-dismiss="modal"><Link to="/admin/manager-teacher">H???y</Link></button>
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

export default FormTeacher;
