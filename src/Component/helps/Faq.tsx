
import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
export const Faq = () => {
    const { language } = useSelector((state: RootState) => state.lang);
    return (
        <>
            <section className="faq-main pb-6 pt-6">
            <div className="container">
                <div className="section-title mb-6 text-center w-75 mx-auto">
                <h2 className="mb-1">{translate('faq', language)}</h2>
                </div>
                <div className="faq-accordian">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                    <div className="accrodion-grp faq-accrodion" data-grp-name="faq-accrodion1">
                        <div className="accrodion active">
                        <div className="accrodion-title">
                            <h5>Who We Are?</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'block'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                        <div className="accrodion">
                        <div className="accrodion-title">
                            <h5>Wanna know our Special Features?</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'none'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                        <div className="accrodion">
                        <div className="accrodion-title">
                            <h5>Check Your Status</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'none'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                        <div className="accrodion ">
                        <div className="accrodion-title">
                            <h5>Why choose us?</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'none'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                        <div className="accrodion ">
                        <div className="accrodion-title">
                            <h5>How do I post my listing</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'none'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4">
                    <div className="accrodion-grp faq-accrodion" data-grp-name="faq-accrodion2">
                        <div className="accrodion active">
                        <div className="accrodion-title">
                            <h5>Why my card payment is failing?</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'block'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                        <div className="accrodion ">
                        <div className="accrodion-title">
                            <h5>Can I upload attachments</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'none'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                        <div className="accrodion">
                        <div className="accrodion-title">
                            <h5>Can I create a profile page for business</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'none'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                        <div className="accrodion ">
                        <div className="accrodion-title">
                            <h5>What is the price of posting</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'none'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                        <div className="accrodion ">
                        <div className="accrodion-title">
                            <h5>How do I post my listing</h5>
                        </div>
                        <div className="accrodion-content" style={{display: 'none'}}>
                            <div className="inner">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="call-to-action pb-0 bg-lgrey border-t">
            <div className="container">
                <div className="section-title text-center w-75 mx-auto mb-5 px-5">
                <h2 className="mb-2">{translate('dyhaq', language)}</h2>
                
                </div>
                <div className="reservation-main">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4">
                    <img src="images/trending/trending4.jpg" alt="" className="rounded" />
                    </div>
                    <div className="col-lg-6 mb-4">
                    <form method="post" action="#" className=''>
                        <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-2">
                            <label>Full Name</label>
                            <input type="text" id="full-name" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-2">
                            <label>Phone No.</label>
                            <input type="text" id="phone-no" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-2">
                            <label>Email Address</label>
                            <input type="email" id="email-name" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-2">
                            <label>Destionation</label>
                            <div className="input-box">
                                <select className="niceSelect">
                                <option value={1}>Albania</option>
                                <option value={2}>Belgium</option>
                                <option value={3}>Canada</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group mb-2">
                            <label>Message</label>
                            <textarea name="message" placeholder="Type your message here..." defaultValue={""} />
                            </div>
                        </div>
                        </div>
                        <div className="comment-btn text-center">
                        <input type="submit" className="nir-btn" id="submit2" defaultValue="Send Message" />
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </section>
    
        </>
    )
}