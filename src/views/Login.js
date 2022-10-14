import React from "react";

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


function Login() {

    return (
        <>
            <div className="container-fluid text-center">
                <form id="form-login" method="post" className="form-login">
                    <div>
                        <p className="text-danger"></p>
                    </div>
                    <div className="border border-secondary rounded p-3">
                        <p>Access to Manager Education Control Panel</p>
                        <p>
                            <input type="text" name="code" className="form-control" placeholder="Username or msv" required />
                        </p>
                        <p>
                            <input type="password" name="password" className="form-control" placeholder="Mật khẩu" required />
                        </p>
                        <p>
                            <input type="button"  value="Login" className="btn btn-primary" />
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;