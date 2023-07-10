import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/Dashboard.css";
import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {

  const{data: products} =useGetData('products')
  const{data: users} =useGetData('users')

  return (
    <>
      <section>
        <Container>
          <Row>
       
              <Col lg='6'>
              <div className="Products_box">
                <h5>Total Products</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col lg="6">
             
              <div className="user_box">
                <h5>Total Users</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
