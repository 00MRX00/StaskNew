import React from 'react'
import classes from './Header.css'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

const Header = props => {
    return (
        <nav className={classes.Header + " navbar navbar-expand-lg navbar-dark bg-dark "}>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <NavLink className="navbar-brand" to={"/"}>$TA$K</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav my-2 my-lg-0">
                    {
                        !props.isAuthenticated
                            ? <React.Fragment>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/auth"}>Авторизация</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/registration"}>Регистрация</NavLink>
                                </li>
                            </React.Fragment>
                            : <React.Fragment>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/create_project"}>Создать проект</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/user_projects"}>Список проектов</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/logout"}>Выйти</NavLink>
                                </li>
                            </React.Fragment>
                    }
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.authReducer.token
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
