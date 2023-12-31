import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import '../css/card.css'
import { BsCart3 } from 'react-icons/bs'
import { getApi } from "../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/slice/CartSlice";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

const Product = () => {
    const [products, setProducts] = useState([])
   
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        productsData()
        Aos.init({ duration: 500 })
    }, [])

    const productsData = async () => {
        let response = await getApi();
        const data = response.data
        setProducts(data)

    }




    const hundleAdd = (product) => {
        dispatch(add(product))
        addToast()
    }
    const addToast = () => {
        toast.success("Add Cart Item")
    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="w-full h-full ">
                {/* first div  */}
                <div className="text-center text-4xl">
                    <h1>Products</h1>
                </div>
                {/* second div  */}
                <div className="card-div w-80 mx-auto sm:w-full sm:mx-auto md:mx-auto md:max-w-7xl md:w-full lg:mx-auto lg:max-w-7xl lg:w-full gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                    {
                        products.slice(0, 4).map((product) => (
                            <div className="card my-10" data-aos="zoom-in-down" key={product.id}>
                                <div className="card-img"><img src={product.image} className="img" alt="" onClick={() => navigate("/productdetails", { state: product })} /></div>
                                <div className="cardcontent">
                                    <div className="card-title">{product.title.slice(0, 25)}</div>
                                    <div className="card-subtitle">{product.category}</div>
                                    <hr className="card-divider" />
                                    <div className="card-footer">
                                        <div className="card-price">{product.price}</div>
                                        <button className="card-btn">
                                            <BsCart3 className="icon" onClick={() => hundleAdd(product)} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* 3rd div  */}
                <div className="mx-auto max-w-7xl md:flex md:justify-between md:items-center">
                    <h1 className="text-[5vw] text-gray-600 font-bold py-10 px-2 md:text-[3vw] lg:text-[2.5vw]"> Click to View All Products</h1>
                    <button onClick={() => navigate("allproduct")} className="text-[5vw] md:text-[2vw] text-gray-600 border border-gray-600 px-4 py-2 rounded-lg">Products </button>
                </div>

            </div>

        </>
    );
};

export default Product;