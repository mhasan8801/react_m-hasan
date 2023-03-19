import { useState } from "react";
import Input from "../element/Input";
import Title from "../element/Title";

const Form = () => {

    const [name, setName] = useState("");

    const validateName = (event) => {
        const { value } = event.target;
        if (value.length <= 10) {
            setName(value);
        }
    };

    return (
        <div className="row form-create-account">
            <div className="col-3" />
            <div className="col-6">
                <form action="">
                    <Title size={23} text="Detail Product" />
                    <Input
                        text="Product Name"
                        type="text"
                        classInput="Name"
                        id="Name"
                        value={name}
                        onChange={validateName}
                        max={10}
                        placeholder="Maksimal 10 Karakter"
                    />
                    <div className="">
                        <label htmlFor="category">
                            Product Category
                        </label><br />
                        <select
                            className="category"
                            aria-label="Default select example"
                            required
                        >
                            <option selected hidden></option>
                            <option value={1}>Jacket</option>
                            <option value={2}>Dress</option>
                            <option value={3}>Pants</option>
                        </select>
                    </div>
                    <Input
                        text="Image of Product"
                        type="file"
                        classInput="image"
                        id="image"
                    />
                    <div className="">
                        <label htmlFor="form-check" className="mb-2 form-label">
                            Product Freshness
                        </label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                required
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Brand New
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                defaultChecked=""
                                required
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Second Hand
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                                defaultChecked=""
                                required
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Refurbished
                            </label>
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
                        placeholder="$"
                    />
                    <div className="text-center">
                        <button className="btn btn-primary text-center" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-3" />
        </div>
    )
}

export default Form;