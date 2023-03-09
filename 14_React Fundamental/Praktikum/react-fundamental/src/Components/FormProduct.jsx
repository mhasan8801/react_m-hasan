

export default function FormProduct() {
    return (
        <div className="row form-create-account">
            <div className="col-3" />
            <div className="col-6">
                <form style={{ color: '#212529' }}>
                    <h3 className="mt-5">Detail Product</h3>
                    <div className="mt-4 mb-4 mb-3 col-5">
                        <label htmlFor="productName" className="mb-2 form-label">
                            Product Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="productName"
                            required
                        />
                    </div>
                    <div className="mt-4 mb-4 mb-3 col-4">
                        <label htmlFor="form-select" className="mb-2 form-label">
                            Product Category
                        </label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            required
                        >
                            <option selected hidden></option>
                            <option value={1}>Product One</option>
                            <option value={2}>Product Two</option>
                            <option value={3}>Product Three</option>
                        </select>
                    </div>
                    <div className="mt-4 mb-4 mb-3 col-4">
                        <label htmlFor="formFile" className="mb-2 form-label">
                            Image of Product
                        </label>
                        <input className="form-control" type="file" id="formFile" required />
                    </div>
                    <div className="mt-4 mb-4 mb-3 col-5">
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
                    <div className="mt-4 mb-4 mb-3 col-10">
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
                    <div className="mt-4 mb-4 mb-5 col-10">
                        <label htmlFor="productPrice" className="mb-2 form-label">
                            Product Price
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="productPrice"
                            placeholder="$ 1"
                            required
                        />
                    </div>
                    <div className="btn-succes pt-3">
                        <button type="submit" className="btn btn-primary col-9 ms-4 ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-3" />
        </div>

    )
}