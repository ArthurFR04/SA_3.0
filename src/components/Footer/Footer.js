import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';

import { AiFillHome } from "react-icons/ai";
import {
        FaUserAlt
        // , FaSearch 
} from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { ImCheckmark } from "react-icons/im";

import { validation_EditProfile } from "../../pages/ProfileEdit/ProfileEdit"


let Login = JSON.parse(localStorage.getItem('Login'))

const Footer = (props) => {
        if (Login.permissao) {
                if (props.component === "EditProfile") {
                        return (
                                <div className={styles.footerEditProfile} onClick={validation_EditProfile} >
                                        <div className={styles.EditProfileDiv} >
                                                Salvar
                                                <ImCheckmark className={styles.check} />
                                        </div>
                                </div>
                        )
                }


                else if (Login.permissao === 1 || Login.permissao === 2) {
                        return (
                                <div className={styles.footer}>

                                        <NavLink to="/" className={styles.footerHome} style={{ backgroundColor: props.component === "Home" ? '#252525' : '' }} >
                                                <AiFillHome />
                                        </NavLink>

                                        <NavLink
                                                to="/Adm"
                                                className={styles.footerProfile}
                                                style={{
                                                        backgroundColor: props.component === "Adm" ? '#252525' : '',
                                                        display: props.component === "Adm" ? 'none' : 'flex'
                                                }}
                                        >
                                                <FaUserAlt />
                                        </NavLink>


                                        <NavLink
                                                to="/EditProfile"
                                                className={styles.footerProfile}
                                                style={{
                                                        display: props.component === "Adm" ? 'flex' : 'none',
                                                        backgroundColor: props.component === "Adm" ? '#252525' : ''
                                                }}
                                        >
                                                <RiPencilFill style={{ fontSize: 40 }} />
                                        </NavLink>
                                        {/* 
                                <NavLink to="/Search" className={styles.footerSearch} style={{ backgroundColor: props.component === "Search" ? '#252525' : '' }} >
                                        <FaSearch />
                                </NavLink> */}
                                </div>
                        )
                } else {

                        return (
                                <div className={styles.footer}>

                                        <NavLink to="/" className={styles.footerHome} style={{ backgroundColor: props.component === "Home" ? '#252525' : '' }} >
                                                <AiFillHome />
                                        </NavLink>

                                        <NavLink NavLink
                                                to="/Profile"
                                                className={styles.footerProfile}
                                                style={{
                                                        backgroundColor: props.component === "Profile" ? '#252525' : '',
                                                        display: props.component === "Profile" ? 'none' : 'flex'
                                                }
                                                }
                                        >
                                                <FaUserAlt />
                                        </NavLink>


                                        <NavLink
                                                to="/EditProfile"
                                                className={styles.footerProfile}
                                                style={{
                                                        display: props.component === "Profile" ? 'flex' : 'none',
                                                        backgroundColor: props.component === "Profile" ? '#252525' : ''
                                                }}
                                        >
                                                <RiPencilFill style={{ fontSize: 40 }} />
                                        </NavLink>
                                        {/* 
                                <NavLink to="/Search" className={styles.footerSearch} style={{ backgroundColor: props.component === "Search" ? '#252525' : '' }} >
                                        <FaSearch />
                                </NavLink> */}
                                </div>
                        )

                }
        }
        else {
                return (
                        <div className={styles.footer}>

                                <NavLink to="/" className={styles.footerHome} style={{ backgroundColor: props.component === "Home" ? '#252525' : '' }} >
                                        <AiFillHome />
                                </NavLink>

                                <NavLink NavLink
                                        to="/Profile"
                                        className={styles.footerProfile}
                                        style={{
                                                backgroundColor: props.component === "Profile" ? '#252525' : '',
                                                display: props.component === "Profile" ? 'none' : 'flex'
                                        }
                                        }
                                >
                                        <FaUserAlt />
                                </NavLink>


                                <NavLink
                                        to="/EditProfile"
                                        className={styles.footerProfile}
                                        style={{
                                                display: props.component === "Profile" ? 'flex' : 'none',
                                                backgroundColor: props.component === "Profile" ? '#252525' : ''
                                        }}
                                >
                                        <RiPencilFill style={{ fontSize: 40 }} />
                                </NavLink>
                                {/* 
                        <NavLink to="/Search" className={styles.footerSearch} style={{ backgroundColor: props.component === "Search" ? '#252525' : '' }} >
                                <FaSearch />
                        </NavLink> */}
                        </div>
                )
        }
}


export default Footer