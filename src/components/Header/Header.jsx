import React,{useRef, useEffect} from "react";
import "./Header.css";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { NavLink,useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth"
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from "../../firebase.config";
import {toast} from "react-toastify"

const nav_links = [
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  }
]

const Header = () => {

  const totalQuantity= useSelector(state=> state.cart.totalQuantity)
const headerRef = useRef(null);
const menuRef = useRef(null);
const profileActionRef = useRef(null)



const navigate = useNavigate();
const {currentUser} = useAuth();

const logout=()=>{

  signOut(auth).then(()=>{
    toast.success("Logged Out")
    navigate('/home')
  }).catch(error=>{
    toast.error(error.message)
  })
}

const stickyHeaderFunc =()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
      headerRef.current.classList.add("sticky_header")
    }
    else{
      headerRef.current.classList.remove("sticky_header")
    }
  })
}

useEffect(()=>{
  stickyHeaderFunc();
  return ()=> window.removeEventListener('scroll', stickyHeaderFunc);
})

const menuToggle =()=> menuRef.current.classList.toggle("active_menu")
const navigateToCart=()=>{
  navigate("/cart");
}

const toggleProfileActions= ()=> profileActionRef.current.classList.toggle("show_profileActions")

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>ShopBD</h1>
               
              </div>
            </div>

            <div className="navigator" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">

                {
                  nav_links.map((item,index) =>(
                    <li  className="nav_item" key={index}>
                      <NavLink to={item.path} className={(navClass)=>navClass.isActive?'nav_active':''}>{item.display}</NavLink>
                    </li>
                  ))
                }

              </ul>
            </div>

            <div className="nav_icons">
              <span className="fav_icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img whileTap={{scale:1.2}}  src={currentUser && currentUser.photoURL ? currentUser.photoURL : userIcon} alt="" onClick={toggleProfileActions}/>
                <div className="profile_actions" ref={profileActionRef} onClick={toggleProfileActions}>
                {currentUser ?(<span onClick={logout}>Logout</span>) : (<div className="sign_option">
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">DashBoard</Link>
                </div>)}
                </div>
              </div>
            </div>

            <div className="mobile_menu">
              <span onClick={menuToggle}>
                <i class="ri-menu-line"></i>
               
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
