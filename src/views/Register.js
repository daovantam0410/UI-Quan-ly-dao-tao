import React, { useState, useEffect, Component } from "react";
import Validator from "common/Validator";

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
import userAPI from "API/UserAPI";
import { isValid } from "date-and-time";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            fullName: "",
            email: "",
            phone: "",
            dateOfBirth: "",
            errors: {},
        };

        const requireWith = (value, field, state) => (!state[field] && !value) || !value;

        const rules = [
            {
                field: 'userName',
                method: 'isEmpty',
                validWhen: true,
                message: 'Username is required!',
            },
            {
                field: 'userName',
                method: 'isLength',
                args: [{ min: 5 }],
                validWhen: true,
                message: 'The name must be at least 5 characters!',
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: true,
                message: 'Email is required!',
            },
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'password is required!',
            },
            {
                field: 'password',
                method: 'isLength',
                args: [{ min: 6 }],
                validWhen: true,
                message: 'Password must be at least 6 characters!',
            },
            {
                field: 'fullName',
                method: 'isEmpty',
                validWhen: false,
                message: 'fullName is required!',
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'This email must be a valid email address!',
            },
            {
                field: 'phone',
                method: 'isEmpty',
                validWhen: false,
                message: 'Phone is required!',
            },
            {
                field: 'dateOfBirth',
                method: 'isEmpty',
                validWhen: false,
                message: 'dateOfBirth is required!',
            },
        ];
        this.validator = new Validator(rules);
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    saveUserRegister = () => {
        // debugger;
        // let errors = this.validator.validate({
        //     userName: this.state.userName,
        //     password: this.state.password,
        //     fullName: this.state.fullName,
        //     email: this.state.email,
        //     phone: this.state.phone,
        //     dateOfBirth: this.state.dateOfBirth
        // });
        // debugger;
        this.setState({
            errors: errors
        });
        if (Object.keys(errors).length === 0) {
            const userName = this.state.userName;
            const fullName = this.state.fullName;
            const password = this.state.password;
            const email = this.state.email;
            const phone = this.state.phone;
            const dateOfBirth = this.state.dateOfBirth;
            const userRegister = {userName, fullName, password, email, phone, dateOfBirth};
            userAPI.register(userRegister).then((response) => {
                alert('Register successfully!');
            });
        }else{
            this.setState({ errors: errors});
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <>
                <fieldset className="border p-2">
                    <legend className="scheduler-border" id="formUser">Nhập thông tin thành viên</legend>
                    <form id="formUpdateOrCreate">
                        <div className="form-group row row-item">
                            <div className="div-30">
                                <label htmlFor="inputCode" className="col-form-label">Username:</label>
                            </div>
                            <div className="div-70">
                                <input type="text" value={this.userName} onChange={this.handleInput} className="form-control" id="inputCode" placeholder="Nhập vào username..." />
                                {/* {errors.userName && <div className="validation" style={{display: 'block', color:'red'}}>{errors.userName}</div>} */}
                                {errors.userName}
                            </div>
                        </div>
                        <div className="form-group row row-item">
                            <div className="div-30">
                                <label htmlFor="inputFullName" className="col-form-label">Họ và tên:</label>
                            </div>
                            <div className="div-70">
                                <input type="text" value={this.fullName} onChange={this.handleInput} className="form-control" id="inputFullName" placeholder="Nhập vào họ và tên..." />
                                {/* {errors.fullName && <div className="validation" style={{display: 'block', color:'red'}}>{errors.fullName}</div>} */}
                                {errors.userName}
                            </div>
                        </div>
                        <div className="form-group row row-item" >
                            <div className="div-30">
                                <label htmlFor="inputPassword" className="col-form-label" >Mật khẩu:</label>
                            </div>
                            <div className="div-70">
                                <input type="password" value={this.password} onChange={this.handleInput} className="form-control" id="inputPassword" placeholder="Nhập vào mật khẩu..." />
                                {/* {errors.password && <div className="validation" style={{display: 'block', color:'red'}}>{errors.password}</div>} */}
                                {errors.password}
                            </div>
                        </div>
                        <div className="form-group row row-item">
                            <div className="div-30">
                                <label htmlFor="inputEmail" className="col-form-label">Email:</label>
                            </div>
                            <div className="div-70">
                                <input type="email" value={this.email} onChange={this.handleInput} className="form-control" id="inputEmail" placeholder="Nhập vào email..." />
                                {/* {errors.email && <div className="validation" style={{display: 'block', color:'red'}}>{errors.email}</div>} */}
                                {errors.email}
                            </div>
                        </div>
                        <div className="form-group row row-item">
                            <div className="div-30">
                                <label htmlFor="inputPhone" className="col-form-label">Số điện thoại:</label>
                            </div>
                            <div className="div-70">
                                <input type="number" value={this.phone} onChange={this.handleInput} className="form-control" id="inputPhone" placeholder="Nhập vào số điện thoại..." />
                                {/* {errors.phone && <div className="validation" style={{display: 'block', color:'red'}}>{errors.phone}</div>} */}
                                {errors.phone}
                            </div>
                        </div>
                        <div className="form-group row row-item">
                            <div className="div-30">
                                <label htmlFor="inputBirthday" className="col-form-label">Ngày sinh:</label>
                            </div>
                            <div className="div-70">
                                <input type="text" value={this.dateOfBirth} onChange={this.handleInput} className="form-control" id="inputBirthday" placeholder="Nhập vào ngày sinh..." />
                                {/* {errors.dateOfBirth && <div className="validation" style={{display: 'block', color:'red'}}>{errors.dateOfBirth}</div>} */}
                                {errors.dateOfBirth}
                            </div>
                        </div>
                        <ul className="nav justify-content-end">
                            <div>
                                <button type="button" onClick={this.saveUserRegister} className="btn-sm btn-fill btn-info btn-save-student">Đăng Ký</button>
                                {/* <button className="btn-sm btn-fill btn-secondary" data-dismiss="modal"><Link to="/admin/manager-user">Hủy</Link></button> */}
                            </div>
                        </ul>
                    </form>
                </fieldset>
            </>
        );
    }

}

export default Register;