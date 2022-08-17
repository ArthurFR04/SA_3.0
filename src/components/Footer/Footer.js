import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';
import styles2 from '../../pages/Home/HomeStyle.module.css';

import { AiFillHome } from "react-icons/ai";
import { FaUserAlt , FaSearch } from "react-icons/fa";

const Footer = (props) => {

        return (
                <footer>
 

                        <NavLink to="/" className={styles.footerHome} style={{backgroundColor: props.component == "Home" ? '#252525' : '' }} >
                                <AiFillHome />
                        </NavLink>



                        <NavLink to="/Profile" className={styles.footerProfile} style={{backgroundColor: props.component == "Profile" ? '#252525' : '' }} >
                                <FaUserAlt />
                        </NavLink>



                        <NavLink to="/Favorites" className={styles.footerSearch} style={{backgroundColor: props.component == "Favorites" ? '#252525' : '' }} >
                                <FaSearch />
                        </NavLink>




                </footer>
        )
}

export default Footer