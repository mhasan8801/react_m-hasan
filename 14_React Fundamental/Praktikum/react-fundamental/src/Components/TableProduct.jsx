export default function TableProduct() {
    return (
        <div className="list-product ps-4 pe-4 mb-4 mt-4" style={{ color: '#212529' }}>
            <h3 className="mb-3 mt-3" style={{ textAlign: "center" }}>
                List Product
            </h3>
            <table className="table table-striped" style={{ width: "65%" }}>
                <tbody>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Image of Product</th>
                        <th>Product Freshness</th>
                        <th>Additional Desciption</th>
                        <th>Product Price</th>
                    </tr>
                    <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>Ipsum</td>
                        <td>Dolor</td>
                        <td>Brand New</td>
                        <td>adipiscing</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1,002</td>
                        <td>Lorem</td>
                        <td>Ipsum</td>
                        <td>Dolor</td>
                        <td>Second Hand</td>
                        <td>adipiscing</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>1,003</td>
                        <td>Lorem</td>
                        <td>Ipsum</td>
                        <td>Dolor</td>
                        <td>Brand New</td>
                        <td>adipiscing</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>Ipsum</td>
                        <td>Dolor</td>
                        <td>Refushed</td>
                        <td>adipiscing</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>
            <section className="blast pe-4">
                <div className="mt-4 col-2">
                    <input
                        className="form-control col-5"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Search by Product Name"
                    />
                </div>
                <div className="btn-last mb-5 ms-1">
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
            </section>
        </div>

    )
}