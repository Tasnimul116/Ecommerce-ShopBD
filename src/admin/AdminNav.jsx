import React from "react";
import { Container, Row} from "reactstrap";
import useAuth from "../custom-hooks/useAuth";
import "../styles/AdminNav.css";
import { NavLink } from "react-router-dom";



const admin_nav = [
  {
    display: "Deshboard",
    path: "/dashboard",
  },
  {
    display: "All- Products",
    path: "/dashboard/all-products",
  },

  {
    display: "orders",
    path: "/dashboard/orders",
  },

  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <header className="admin-header">
        <div className="admin_nav-top">
          <Container>
            <div className="admin_nav-wrapper-top">
              <div className="logo">
                <div>
                  <h2>ShopBD</h2>
                </div>
              </div>

              <div className="search_box">
                <input type="text" placeholder="search"></input>
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>

              <div className="admin_nav-top-right">
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={currentUser.photoURL} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin_menu p-0">
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu-list">
              
              {
                admin_nav.map((item,index)=>(
                  <li className="admin_menu-item" key={index}>
                  <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active_admin-menu' :'' }>{item.display}</NavLink>
                  </li>
                ))

              }

              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default AdminNav;
