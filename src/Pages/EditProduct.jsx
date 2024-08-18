import React, { useContext, useEffect, useState } from 'react'
import { ProductDetailsContext } from '../Context/Context';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../Components/ProductForm';

function EditProduct() {

    const { id } = useParams()

    const [productsData, setProductsData] = useContext(ProductDetailsContext)

    const [newProductData, setNewProductData] = useState({
        image: "",
        title: "",
        category: "",
        price: "",
        description: "",
        rating: {
            rate: "",
            count: ""
        }
    })

    useEffect(() => {
        const product = productsData.find(el => (el.id).toString() === (id).toString());
        if (product) {
            setNewProductData(product);
        }
    }, [id, productsData]);

    const navigate = useNavigate()

    const handleInputData = (e) => {
        const { name, value } = e.target;

        if (name === "rate" || name === "count") {
            setNewProductData(prevData => ({
                ...prevData,
                rating: {
                    ...prevData.rating,
                    [name]: value
                }
            }));
        } else {
            setNewProductData(prevData => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const submitFormDataHandler = (e) => {
        e.preventDefault();
        setProductsData(prevData => (
            prevData.map(el => (
                (el.id).toString() === (id).toString() ? newProductData : el
            ))
        ))
        navigate(-1)
    }

    return (
        <ProductForm 
            submitFormDataHandler={submitFormDataHandler}
            newProductData={newProductData}
            handleInputData={handleInputData}
            title={"Edit Product"}
        />
    )
}

export default EditProduct
