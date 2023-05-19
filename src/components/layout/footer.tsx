const Footer = () => {
  return (
    <>
      <footer className=" py-4 top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-left">
                <h3>Footer Heading</h3>
                <p>Footer Description</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-right">
                <form>
                  <div className="mb-3 d-flex align-content-center ">
                    <input type="text" className="p-2" placeholder="Your Name" />
                    <input type="email" className="p-2 mx-2" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                  </div>
                  <button type="submit" className="btn btn-light">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>submit  an  application</h2>
              <h5>Data:51-15-1515151545-5451</h5>
              <p>we will coll back and advise and advise on all ques
tions about obtaining a licen </p>
            </div>
            <div className="col-md-6">
              <div>
                <h5>Phone</h5>
                <p>123-456-7890</p>
              </div>
              <div>
                <h5>Email</h5>
                <p>example@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
