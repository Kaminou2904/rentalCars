import React from 'react';
import './Privacy.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

function Privacy() {
  return (
    <div className='mainTerms'>
            <Helmet>
                <title>Privacy Policy | Caronrent</title>
            </Helmet>
            <div className="privacyHeader container-fluid bg-light p-3">
                <div className="d-flex align-items-center">
                    <Link to='/' className="backBtnTerms d-block pe-3">
                        <i className="fas fa-chevron-left"></i>
                    </Link>
                    <h1 className="fs-5 outfit-semibold mb-0">Privacy <span className="brand-color outfit-semibold">Policy</span></h1>
                </div>
            </div>
            <div className="container mt-3">
                <h1 className="fs-3 outfit-bold">Our Privacy <span className="outfit-bold brand-color">Policy</span></h1>

                <div className="termsNconditions my-4">
                    <div className="row align-items-center mb-3">
                        <div className="term-one">
                            {/* <h2 className="outfit-bold fs-5">Acceptance of Terms</h2> */}
                            <p className="mb-0 outfit-medium">Welcome to CarOnRent, your trusted partner in car rental services. At CarOnRent, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website or services.</p>
                        </div>
                    </div>
                    <div className="row align-items-center flex-wrap-reverse mb-3">
                        <div className="col-md-6">
                            <img src="./images/information.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Information We Collect</h2>
                            <div>
                                <p className="outfit-medium mb-0">Explanation of the types of personal information we collect, including but not limited to, name, contact details, payment information, and preferences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">How We Use Your Information</h2>
                            <div>
                                <p className="outfit-medium mb-0">Clarification on the purposes for which we use your data, such as processing reservations, providing customer support, and improving our services.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/infouse.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row align-items-center flex-wrap-reverse mb-3">
                        <div className="col-md-6">
                            <img src="./images/shareinfo.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Information Sharing</h2>
                            <div>
                                <p className="outfit-medium mb-0">We respect your privacy. Our Privacy Policy outlines how we collect, use, and safeguard your personal information.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Security Measures</h2>
                            <div>
                                <p className="outfit-medium mb-0">Information on the security measures we have in place to protect your data from unauthorized access, disclosure, alteration, and destruction.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/security.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row align-items-center flex-wrap-reverse mb-3">
                        <div className="col-md-6">
                            <img src="./images/choises.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Your Choices and Rights</h2>
                            <div>
                                <p className="outfit-medium">Explanation of the choices you have regarding the collection and use of your information, as well as your rights to access, update, or delete your personal data.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-md-6">
                            <h2 className="outfit-bold fs-5">Updates to the Privacy Policy</h2>
                            <div>
                                <p className="outfit-medium mb-0">Notification of how and when we may update this Privacy Policy, and how we will communicate any changes to you.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="./images/priupdate.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row align-items-center flex-wrap-reverse mb-3">
                        <p className="mb-0 fs-5 outfit-bold mt-3">
                            By using CarOnRent's services, you agree to the terms outlined in this Privacy Policy. We encourage you to read this document carefully and contact us with any questions or concerns. <br />
                            Last updated: 18 March 2023
                        </p>
                    </div>
                </div>
            </div>

            <Footer disp='flex' />
        </div>
  )
}

export default Privacy;