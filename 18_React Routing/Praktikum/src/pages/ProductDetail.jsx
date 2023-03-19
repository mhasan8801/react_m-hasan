function ProductDetail({ match, products }) {
    const { params: { productId } } = match;
    const product = products[productId];
    return (
        <div>
            <h2>Product Detail</h2>
            <ul>
                <li>Name: {product.name}</li>
                <li>Category: {product.category}</li>
                <li>Freshness: {product.freshness}</li>
                <li>Price: {product.price}</li>
            </ul>
        </div>
    );
}

export default ProductDetail;