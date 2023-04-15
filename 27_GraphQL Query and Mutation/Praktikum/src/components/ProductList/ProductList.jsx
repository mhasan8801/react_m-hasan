import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react";
import images from './hero.png'

const GetProductList = gql`
query MyProduct {
    Product {
      id
      productCategory
      productFreshness
      productName
      productPrice
      additionalDescription
    }
  }
`

const ProductList = () => {

    const { data, loading, error } = useQuery(GetProductList);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('loading: ', loading);
        console.log('data gql: ', data);
        console.log('error: ', error);
    })

    if (!loading && error !== undefined) {
        setProducts(data.Product)
    }

    return (
        <>
            <div className="container pt-4 pb-4" style={{ textAlign: 'center' }}>
                <h1 >Product List</h1>
                <div className="row">

                    {
                        loading ?
                            <p>Get Data masih Loading....</p> :
                            data?.Product.map(item =>
                                <div className="col-sm-3 ms-5">
                                    <div className="card mb-4" style={{ width: "18rem" }}>
                                        <img src={images} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.productName}</h5>
                                            <p className="card-text">
                                                {item.additionalDescription}
                                            </p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{item.productCategory}</li>
                                            <li className="list-group-item">{item.productFreshness}</li>
                                            <li className="list-group-item">{item.productPrice}</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                    }

                </div>
                <button type="button" class="btn btn-primary">Load More</button>
            </div>

        </>
    )
}

export default ProductList;