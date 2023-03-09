

export default function TitleProduct() {
    return (
        <div className="row judul" style={{ color: '#212529' }}>
            <div className="col-1"></div>
            <div className="col-10">
                <section className="main-create-product text-center">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                        alt="Logo Bootstrap"
                        style={{ width: '100px' }}
                    />
                    <h1 >Create Product</h1>
                    <p>
                        Below is an example form built entirely with Bootstrap’s form controls.
                        Each required form group has a
                        <br />
                        validation state that can be triggered by attempting to submit the form
                        without completing it.
                    </p>
                </section>
            </div>
            <div className="col-1"></div>
        </div>
    )
}