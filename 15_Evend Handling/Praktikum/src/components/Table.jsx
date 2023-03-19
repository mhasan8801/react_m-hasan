import Title from "../element/Title";


const Table = () => {
    return (
        <div className="mt-5">
            <div className="text-center">
                <Title
                    text="List Product" size="31px"
                />
            </div>
            <table className="table table-striped">
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
    )
}

export default Table;