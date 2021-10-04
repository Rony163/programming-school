import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div>
                <i className="m-2 fab fa-facebook-square "></i>
                <i className="m-2 fab fa-instagram-square"></i>
                <i className="m-2 fab fa-twitter-square"></i>
                <i className="m-2 fab fa-youtube-square"></i>
            </div>
            <div>
                <p>Copyright&copy; by <small className="text-white">Minhajul Islam Rony</small></p>
            </div>
        </div>
    );
};

export default Footer;