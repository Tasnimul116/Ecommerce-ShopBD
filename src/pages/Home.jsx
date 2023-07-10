import React from "react";
import { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/Ui/ProductList";

import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/Ui/Clock";
import useGetData from "../custom-hooks/useGetData";

function Home() {

  const{data: products,loading} = useGetData('products')

  const [treandingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filterdTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filterdBestSaleProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filterdMobileProducts = products.filter(
      (item) => item.category === "phone"
    );

    const filterdWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filterdPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filterdTrendingProducts);
    setBestSaleProducts(filterdBestSaleProducts);
    setMobileProducts(filterdMobileProducts);
    setWirelessProducts(filterdWirelessProducts);
    setPopularProducts(filterdPopularProducts);
  }, [products]);
  return (
    <Helmet title={"Home"}>
      <section className="Hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending Products in {year}</p>
                <h2>Make Your Interior More Minimalistic and Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  voluptates earum vero! Optio accusamus vero ipsum in delectus
                  autem inventore tempora doloremque qui? Dolor porro voluptates
                  odit labore eveniet sint.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="treanding_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            {
              loading?(<h5 className="fw-bold ">Loading...</h5>):(<ProductList data={treandingProducts} />)
            }

            
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            {
              loading?(<h5 className="fw-bold ">Loading...</h5>):(<ProductList data={bestSaleProducts} />)
            }
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Arm Chair</h3>
              </div>

              <Clock />
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6"  className="text-end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="section_title">New Arrival</h2>
          </Col>
          {
            loading?(<h5 className="fw-bold ">Loading...</h5>):(<ProductList data={mobileProducts} />)
          }
          {
            loading?(<h5 className="fw-bold ">Loading...</h5>):(<ProductList data={wirelessProducts} />)
          }
        </Row>
      </section>

      <section className="popular_category">
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="section_title">Popular in Category</h2>
          </Col>
          {
            loading?(<h5 className="fw-bold ">Loading...</h5>):(<ProductList data={popularProducts} />)
          }
        </Row>
      </section>
    </Helmet>
  );
}

export default Home;
