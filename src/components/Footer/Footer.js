import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';
import styles2 from '../../pages/Home/HomeStyle.module.css';

import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const Footer = (props) => {

        if (props.component == "home") {
                console.log('home');
        }

        return (
                <footer>
 

                        <NavLink to="/" className={styles.footerHome} >
                                <AiFillHome />
                        </NavLink>



                        <NavLink to="/Profile" className={styles.footerProfile} >
                                <FaUserAlt />
                        </NavLink>



                        <NavLink to="/" className={styles.footerFavorites} >
                                <AiFillHeart />
                        </NavLink>




                </footer>
        )
}

export default Footer