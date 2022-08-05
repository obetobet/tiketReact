

 const Error404 = () => {
    return (
        <>
        <section className="error overflow-hidden pb-10 pt-20">
        <div className="container">
          <div className="error-main">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7 mb-4">
                <div className="error-content w-100 text-lg-start text-center">
                  <h3 className="theme">Oops! Page not found</h3>
                  <h2 className="mb-0 navy">we are sorry, but the page you requested was not found</h2>
                  <div className="newsletter-form mt-3 w-75 rounded overflow-hidden">
                    <form>
                      <input type="email" placeholder="Enter your email" />
                      <input type="submit" className="nir-btn bordernone" defaultValue="Subscribe" />
                    </form>
                  </div>
                  <div className="error-btn mt-4">
                    <a href="/" className="nir-btn">GO TO HOMEPAGE</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="error-image">
                  <img src="images/404-1.svg" alt="" className="mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Error404;