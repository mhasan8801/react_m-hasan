

const Contact = () => {
    return (
        <section className="contact container" style={{ color: "black" }}>
            <div className="row">
                <div className="col left text-center">
                    <h3>Contact Us</h3>
                    <p>
                        Neet to get in touch with us? Either fill out the form <br /> with your
                        inquiry of find the <a href="#">department email</a> you'd <br /> like
                        to contact bellow
                    </p>
                </div>
                <div className="col right">
                    <form className="form-hasan row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputFirstName" className="form-label">
                                First Name
                            </label>
                            <input type="text" className="form-control" id="inputFirstName" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastName" className="form-label">
                                Last Name
                            </label>
                            <input type="text" className="form-control" id="inputLastName" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputEmail" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="inputEmail" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputHelp" className="form-label">
                                What can we help you with?
                            </label>
                            <input type="text" className="form-control" id="inputHelp" />
                        </div>
                        <div className="col-12">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                id="btnSubmit"
                                name="btnSubmit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact;