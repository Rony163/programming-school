import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white mb-3 mt-5 pt-2">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <p>Programming School</p>
                    <p>Official: Web@programmingschool.com</p>
                    <p>Helpline: 01796805000</p>
                </div>
                <div className="col-lg-4 col-md-4 mt-5">
                    <i className="m-2 fab fa-facebook-square "></i>
                    <i className="m-2 fab fa-instagram-square"></i>
                    <i className="m-2 fab fa-twitter-square"></i>
                    <i className="m-2 fab fa-youtube-square"></i>
                    <p>Copyright&copy; by <small className="text-white">Minhajul Islam Rony</small></p>
                </div>
                <div className="col-lg-4 col-md-4">
                    <p>About Us</p>
                    <p>Success</p>
                    <p>Terms and Condition</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;