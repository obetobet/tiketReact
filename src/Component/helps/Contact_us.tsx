
 const Contact_us = () => {
    return (
        <>
        <section className="contact-main pt-6 pb-60">
        <div className="container">
          <div className="contact-info-main mt-0">
            <div className="row">
              <div className="col-lg-10 col-offset-lg-1 mx-auto">
                <div className="contact-info bg-white">
                  <div className="contact-info-title text-center mb-4 px-5">
                    <h3 className="mb-1">INFORMATION ABOUT US</h3>
                    <p className="mb-0">Sagittis posuere id nam quis vestibulum vestibulum a facilisi at elit hendrerit scelerisque sodales nam dis orci.</p>
                  </div>
                  <div className="contact-info-content row mb-1">
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="info-item bg-lgrey px-4 py-5 border-all text-center rounded">
                        <div className="info-icon mb-2">
                          <i className="fa fa-map-marker-alt theme" />
                        </div>
                        <div className="info-content">
                          <h3>Office Location</h3>
                          <p className="m-0">445 Mount Eden Road, Mt Eden Basundhara Chakrapath</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="info-item bg-lgrey px-4 py-5 border-all text-center rounded">
                        <div className="info-icon mb-2">
                          <i className="fa fa-phone theme" />
                        </div>
                        <div className="info-content">
                          <h3>Phone Number</h3>
                          <p className="m-0">977-444-666-888</p>
                          <p className="m-0">977-444-222-000</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4">
                      <div className="info-item bg-lgrey px-4 py-5 border-all text-center rounded">
                        <div className="info-icon mb-2">
                          <i className="fa fa-envelope theme" />
                        </div>
                        <div className="info-content ps-4">
                          <h3>Email Address</h3>
                          <p className="m-0"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e0898e868fa09285818c938889858c84ce838f8d">[email&nbsp;protected]</a></p>
                          <p className="m-0"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b3dbd6dfc3f3c1d6d2dfc0dbdad6dfd79dd0dcde">[email&nbsp;protected]</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="contact-form1" className="contact-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="map rounded overflow-hiddenb rounded mb-md-4">
                          <div style={{width: '100%'}}>
                            <iframe height={500} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(mangal%20bazar)&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div id="contactform-error-msg" />
                        <form method="post" action="#" name="contactform2" id="contactform2">
                          <div className="form-group mb-2">
                            <input type="text" name="first_name" className="form-control" id="fullname" placeholder="First Name" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="text" name="last_name" className="form-control" id="llastname" placeholder="Last Name" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="email" name="email" className="form-control" id="email" placeholder="Email" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="text" name="phone" className="form-control" id="phnumber" placeholder="Phone" />
                          </div>
                          <div className="textarea mb-2">
                            <textarea name="comments" placeholder="Enter a message" defaultValue={""} />
                          </div>
                          <div className="comment-btn text-center">
                            <input type="submit" className="nir-btn" id="submit2" defaultValue="Send Message" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Contact_us;