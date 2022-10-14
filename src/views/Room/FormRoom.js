import roomAPI from "API/RoomAPI";

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
import teacherAPI from "API/TeacherAPI";
import branchAPI from "API/BranchAPI";
import React, { useState, useEffect } from "react";

function FormRoom() {

    const [teachers, setTeachers] = useState([]);
    const [branchs, setBranchs] = useState([]);

    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [branchId, setBranchID] = useState('');
    const [teacherId, setTeacherID] = useState('');

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        getListTeachers();
        getListBranchs();
        findRoomById(id);
        // setBranchId();
        // getListTeachersByBranchID(branchID)
    }, []);

    const saveOrUpdateRoom = () => {
        const room = { code, name, branchId, teacherId };
        if (id) {
            roomAPI.update(id, room).then((response) => {
                alert('Cập nhật thành công!')
                history.push('/admin/edit-room/:id');
            })
        } else {
            roomAPI.create(room).then((response) => {
                alert('Thêm thành công!');
                history.push('/admin/manager-class');
            });
        }
    }

    const findRoomById = (id) => {
        roomAPI.findById(id).then((response) => {
            setCode(response.data.code)
            setName(response.data.name)
            setBranchID(response.data.branchId)
            setTeacherID(response.data.teacherId)
        });
    }

    const getListBranchs = () => {
        branchAPI.getAll().then((response) => {
            setBranchs(response.data)
        })
    }

    const getListTeachers = () => {
        teacherAPI.getAll().then((response) => {
            setTeachers(response.data)
        })
    }
    
    // const setBranchId = () => {
    //     // 1. call api lấy list gv theo khoa
    //     teacherAPI.findAllByBranchID().then((response) => {
    //         // 2. set state chứa list giáo viên
    //         setTeachers(response.data);
    //     });
    //     // 3. set state branchID
    //     setBranchID(branchId);
    // }

    return (
        <>
            <div>
                <div className="card-body">
                    <div className="card-body pt-0">
                        <div className="table-responsive table_e2">
                            <fieldset className="border p-2">
                                <legend className="scheduler-border" id="formUser">Thông tin lớp học</legend>
                                <form id="formUpdateOrCreate">
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputUserName" className="col-form-label">Mã lớp:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} className="form-control" id="inputCode" placeholder="Nhập vào mã lớp..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label htmlFor="inputUserName" className="col-form-label">Tên lớp:</label>
                                        </div>
                                        <div className="div-70">
                                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="inputName" placeholder="Nhập vào tên lớp..." />
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label className="col-form-label">Khoa:</label>
                                        </div>
                                        <div className="div-70">
                                            <select className="form-control" value={branchId} onChange={(e) => setBranchID(e.target.value)} >
                                                <option>---Chọn Khoa---</option>
                                                {
                                                    branchs.map(branch => <option value={branch.id}>{branch.name}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row row-item">
                                        <div className="div-30">
                                            <label className="col-form-label">Thuộc Giảng Viên:</label>
                                        </div>
                                        <div className="div-70">
                                            <select className="form-control" value={teacherId} onChange={(e) => setTeacherID(e.target.value)}>
                                                <option>---Chọn Giảng viên---</option>
                                                {
                                                    teachers.map(teacher => <option value={teacher.id}>{teacher.fullName}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <ul className="nav justify-content-end">
                                        <div>
                                            <button type="button" onClick={(e) => saveOrUpdateRoom(e)} className="btn-sm btn-fill btn-info btn-save-student">Lưu thay đổi</button>
                                            <button className="btn-sm btn-fill btn-secondary" data-dismiss="modal"><Link to="/admin/manager-class">Hủy</Link></button>
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

export default FormRoom;
