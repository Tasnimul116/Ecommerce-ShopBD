import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import "../styles/AddProduct.css";
import { toast } from "react-toastify";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDesc, setEnterDesc] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const AddProduct = async (e) => {
    e.preventDefault();

    setLoading(true)
    // const product = {
    //   title: enterTitle,
    //   shortDesc: enterShortDesc,
    //   description: enterDesc,
    //   category: enterCategory,
    //   price: enterPrice,
    //   imgUrl:enterProductImg
    // }

    //add product to the firebase
    try {
      const docRef = await collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        "state_changed",
        (snapshot)=>{},
        (error)=>{
          toast.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDesc,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            })
          });
          toast.success("Product Add Successfully");
        }
      );
      setLoading(false);
      
      navigate("/dashboard/all-products")
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            
         {
          loading ? (<h4 className="py-5">Loading..</h4>):(   
            
            <>
            <h4 className="mb-5">Add Product</h4>
            <Form onSubmit={AddProduct}>
            <FormGroup className="form_group">
              <span>Product Titile</span>
              <input
                type="text"
                placeholder="Double Sofa"
                value={enterTitle}
                onChange={(e) => setEnterTitle(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup className="form_group">
              <span>Short Description</span>
              <input
                type="text"
                placeholder="Short description"
                value={enterShortDesc}
                onChange={(e) => setEnterShortDesc(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup className="form_group">
              <span>Description</span>
              <input
                type="text"
                placeholder="Description"
                value={enterDesc}
                onChange={(e) => setEnterDesc(e.target.value)}
                required
              />
            </FormGroup>

            <div className="d-flex align-items-center justify-content-between gap-5">
              <FormGroup className="form_group w-50">
                <span>price</span>
                <input
                  type="number"
                  placeholder="Price"
                  value={enterPrice}
                  onChange={(e) => setEnterPrice(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup className="form_group w-50">
                <span>Category</span>
                <select
                  className="w-100 p-2"
                  value={enterCategory}
                  onChange={(e) => setEnterCategory(e.target.value)}
                  required
                >
                  <option value="">Select any category</option>
                  <option value="chair">Chair</option>
                  <option value="sofa">Sofa</option>
                  <option value="watch">Watch</option>
                  <option value="phone">Phone</option>
                  <option value="wireless">Wireless</option>
                  <option value="chair">Chair</option>
                </select>
              </FormGroup>
            </div>

            <div>
              <FormGroup className="form_group">
                <span>Product Image</span>
                <input
                  type="file"
                  onChange={(e) => setEnterProductImg(e.target.files[0])}
                  required
                />
              </FormGroup>
            </div>

            <button className="add_btn btn" type="submit">
              Add Product
            </button>
          </Form>
            </>
           )
         }
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
