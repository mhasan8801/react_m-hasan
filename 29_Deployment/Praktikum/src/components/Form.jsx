import { useEffect, useState } from "react";
import Input from "../element/Input";
import Title from "../element/Title";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductRed, fetchProductList, setProduct, postProductList } from "../features/product/productSlice";
import axios from "axios";

const Form = () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [frehsness, setFrehsness] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    // const [product, setProduct] = useState([]);
    const product = useSelector(state => state.product.products)
    const dispatch = useDispatch()
    console.log(product)
    useEffect(() => {
        dispatch(fetchProductList());
    }, [])
    

    const regexName = /^[a-zA-Z0-9 ]{1,10}$/;
    const regexCategory = /^(Formal|Non Formal|Casual)$/
    const regexFreshness = /^(Brand New|Second Hand|Refurbished)$/
    const regexPrice = /^[0-9]+$/;

    const valueName = (event) => {
        setName(event.target.value)
    }

    const valueCategory = (event) => {
        setCategory(event.target.value)
    }

    const valueImage = (event) => {
        setImage(event.target.files[0])
    }

    const valueFrehsness = (event) => {
        setFrehsness(event.target.value)
    }

    const valueDesc = (event) => {
        setDesc(event.target.value)
    }

    const valuePrice = (event) => {
        setPrice(event.target.value)
    }

    const btnSubmit = (event) => {
        event.preventDefault();

        if (!regexName.test(name)) {
            alert("Product name harus diisi berupa huruf dan angka serta maksimal 10 karakter!");
            return;
        }

        if (!regexCategory.test(category)) {
            alert("Product category harus dipilih!");
            return;
        }

        if (!regexFreshness.test(frehsness)) {
            alert("Product frehsness harus dipilih!");
            return;
        }

        if (!regexPrice.test(price)) {
            alert("Product price harus diisi berupa angka!");
            return;
        }

        const addProduct = {
            id: uuidv4(),
            productName: name,
            productCategory: category,
            image: URL.createObjectURL(image),
            productFreshness: frehsness,
            additionalDescription: desc,
            productPrice: price
        };

        // setProduct([...product, addProduct])
        setName('');
        setCategory('');
        setImage(null);
        setFrehsness('');
        setDesc('');
        setPrice('');

        dispatch(postProductList({
            id : addProduct.id,
            productName : addProduct.productName,
            productCategory : addProduct.productCategory,
            productFreshness : addProduct.productFreshness,
            additionalDescription : addProduct.additionalDescription,
            productPrice : addProduct.productPrice
            }))


    }

    const btnDelete = async (productId) => {
        const deleteProduct = product.find((product) => product.id === productId);
        const confirmDelete = window.confirm(`Apakah Anda yakin ingin menghapus produk "${deleteProduct.productName}"?`);

        if (confirmDelete) {
            // const filteredProducts = product.filter((product) => product.id !== productId);
            // setProduct(filteredProducts);
            dispatch(deleteProductRed(productId))
            await axios.delete("https://642e1dab2b883abc640747d3.mockapi.io/products" + `/${productId}`)
            dispatch(fetchProductList());

        }
    };

    return (
        <div className="row form-create-account">
            <div className="col-3" />
            <div className="col-6">
                <form >
                    <Title size={23} text="Detail Product" />
                    <Input
                        text="Product Name"
                        type="text"
                        classInput="Name"
                        id="Name"
                        value={name}
                        name="productName"
                        onChange={valueName}
                    />
                    <div className="">
                        <label htmlFor="category">
                            Product Category
                        </label><br />
                        <select
                            id="category"
                            className="category"
                            aria-label="Default select example"
                            value={category}
                            onChange={valueCategory}
                        >
                            <option selected hidden></option>
                            <option value="Formal" defaultValue>Formal</option>
                            <option value="Non Formal">Non Formal</option>
                            <option value="Casual">Casual</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="image">Image Of Product</label><br />
                        <input
                            type="file"
                            className="image"
                            onChange={valueImage}
                            required />
                    </div>
                    <div>
                        <label>Product Freshness:</label>
                        <div>
                            <input type="radio" id="brandnew" name="productFreshness" onChange={valueFrehsness} value="Brand New" />
                            <label htmlFor="brandnew">Brand New</label>
                        </div>
                        <div>
                            <input type="radio" id="secondhand" name="productFreshness" onChange={valueFrehsness} value="Second Hand" />
                            <label htmlFor="secondhand">Second Hand</label>
                        </div>
                        <div>
                            <input type="radio" id="refurbished" name="productFreshness" onChange={valueFrehsness} value="Refurbished" />
                            <label htmlFor="refurbished">Refurbished</label>
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="desc"
                            className="desc mb-2 form-label"
                        >
                            Additional Description
                        </label> <br />
                        <textarea
                            className="desc"
                            id="desc"
                            cols={45}
                            onChange={valueDesc}
                            value={desc}
                            required
                        />
                    </div>
                    <Input
                        text="Product Price"
                        type="text"
                        classInput="price"
                        id="price"
                        onChange={valuePrice}
                        placeholder="$"
                        value={price}
                    />
                    <div className="text-center">
                        <button className="btn btn-primary text-center" type="submit" onClick={btnSubmit} >Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-3" />

            <div className="mt-5">
                <div className="text-center">
                    <Title
                        text="List Product" size="31px"
                    />
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Image Of Product</th>
                            <th>Product Freshness</th>
                            <th>Additional Product</th>
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product && product.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <Link to={`/product/${product.id}`}>{product.id}</Link>
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.productCategory}</td>
                                <td>
                                    <img style={{ width: "100px" }} src={product.image} alt={product.name} />
                                </td>
                                <td>{product.productFreshness}</td>
                                <td>{product.additionalDescription}</td>
                                <td>{product.productPrice}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => btnDelete(product.id)}>Delete</button>
                                    <button className="btn btn-success">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="btn-search my-5 ms-3">
                    <input
                        className="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Search by Product Name"
                        style={{ width: "20%" }}
                    />
                    <button type="button" className="btn btn-primary">
                        Deletion
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        style={{ marginLeft: "-8px" }}
                    >
                        Search
                    </button>
                </div>
            </div>

        </div>


    )
}

export default Form;