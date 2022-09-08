import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';

import { AiFillHome } from "react-icons/ai";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

const Footer = (props) => {

        return (
                <div className={styles.footer}>


                        <NavLink to="/" className={styles.footerHome} style={{ backgroundColor: props.component === "Home" ? '#252525' : '' }} >
                                <AiFillHome />
                        </NavLink>



                        <NavLink
                                to="/Profile"
                                className={styles.footerProfile}
                                style={{ 
                                        backgroundColor: props.component === "Profile" ? '#252525' : '',
                                        display: props.component === ("Profile" || "EditProfile") ? 'none' : 'flex' 
                                }}
                        >
                                <FaUserAlt/>
                                
                        </NavLink>
                        <NavLink
                                to="/EditProfile"
                                className={styles.footerProfile}
                                style={{
                                        display: props.component === "Profile" ? 'flex' : 'none',
                                        backgroundColor: props.component === "Profile" ? '#252525' : '' 
                                }}
                        >
                                <RiPencilFill style={{ fontSize:40 }}/>
                        </NavLink>



                        <NavLink to="/Search" className={styles.footerSearch} style={{ backgroundColor: props.component === "Search" ? '#252525' : '' }} >
                                <FaSearch />
                        </NavLink>




                </div>
        )
}

export default Footer