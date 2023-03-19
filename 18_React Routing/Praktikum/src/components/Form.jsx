import { useState } from "react";
import Input from "../element/Input";
import Title from "../element/Title";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [frehsness, setFrehsness] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState("");

    const validateName = (event) => {
        const value = event.target.value;
        if (value.length <= 10) {
            setName(value);
        } else {
            alert("Product Name Maksimal 10 karakter")
        }
    };

    const valueName = (event) => {
        setName(event.target.value)
    }

    const valueCategory = (event) => {
        setCategory(event.target.value)
    }

    const valueFrehsness = (event) => {
        setFrehsness(event.target.value)
    }

    const valuePrice = (event) => {
        setPrice(event.target.value)
    }

    const btnSubmit = () => {
        const addProduct = {
            id: uuidv4(),
            name: name,
            category: category,
            frehsness: frehsness,
            price: price
        };
        setProduct([...product, addProduct])
    }

    const btnDelete = (productId) => {
        const deleteProduct = product.find((product) => product.id === productId);
        const confirmDelete = window.confirm(`Apakah Anda yakin ingin menghapus produk "${deleteProduct.name}"?`);

        if (confirmDelete) {
            const filteredProducts = product.filter((product) => product.id !== productId);
            setProduct(filteredProducts);
        }
    };

    return (
        <div className="row form-create-account">
            <div className="col-3" />
            <div className="col-6">
                <form>
                    <Title size={23} text="Detail Product" />
                    <Input
                        text="Product Name"
                        type="text"
                        classInput="Name"
                        id="Name"
                        value={name}
                        name="productName"
                        onChange={valueName}
                        placeholder="Maksimal 10 Karakter"
                    />
                    <div className="">
                        <label htmlFor="category">
                            Product Category
                        </label><br />
                        <select
                            id="category"
                            className="category"
                            aria-label="Default select example"
                            onChange={valueCategory}
                            required
                        >
                            <option selected hidden></option>
                            <option value="Formal">Formal</option>
                            <option value="Non Formal">Non Formal</option>
                            <option value="Casual">Casual</option>
                        </select>
                    </div>
                    <Input
                        text="Image of Product"
                        type="file"
                        classInput="image"
                        id="image"
                    />

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
                            htmlFor="exampleFormControlTextarea1"
                            className="mb-2 form-label"
                        >
                            Additional Description
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={5}
                            required
                            defaultValue={""}
                        />
                    </div>
                    <Input
                        text="Product Price"
                        type="text"
                        classInput="price"
                        id="price"
                        onChange={valuePrice}
                        placeholder="$"
                    />
                    <div className="text-center">
                        <button className="btn btn-primary text-center" type="submit" onClick={btnSubmit}>Submit</button>
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
                            <th>Product Freshness</th>
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product && product.map((product) => (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.frehsness}</td>
                                <td>{product.price}</td>
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