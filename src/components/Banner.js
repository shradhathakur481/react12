import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'; // Importing the separate CSS file

const Banner = () => {
    return (
        <div id="realEstateCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#realEstateCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#realEstateCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#realEstateCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/banner2.jpg" className="d-block w-100" alt="Luxury Homes" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Luxury Homes for Sale</h3>
                        <p>Explore our premium property listings today! <br /> Address: 123 Beverly Hills, Los Angeles, CA</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="images/banner1.jpg" className="d-block w-100" alt="Modern Apartments" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Modern Apartments in the City</h3>
                        <p>Find the perfect city apartment with great amenities. <br /> Address: 456 Downtown St, New York, NY</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="images/banner.jpg" className="d-block w-100" alt="Cozy Homes" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Cozy Homes for Everyone</h3>
                        <p>Your new home is waiting for you! <br /> Address: 789 Oak Lane, San Francisco, CA</p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#realEstateCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#realEstateCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;
