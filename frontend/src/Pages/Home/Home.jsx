import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
// import Bannercard from '../../Components/Bannercard/Bannercard';
import Basiccard from '../../Components/Basiccard/Basiccard';
import Footer from '../../Components/Footer/Footer';
import Data from '../../Data/Cars.json';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
function Home() {

    // const navigate = useNavigate();
    // const formData = {};
    // const [dropTxt, setdropTxt] = useState('Luxury');

    const basicCars = Data.basic;
    const luxuryCars = Data.luxury;
    const sportCars = Data.sports;

    // const searchFunc = () => {
    //     formData.category = document.querySelector('.DropBtn').innerText.toLowerCase();
    //     const StringData = JSON.stringify(formData)
    //     localStorage.setItem('form', StringData);
    //     navigate(`${formData.category}`);
    // }

    const caroOptions = {
        items: 5,
        loop: true,
        margin: 10,
    };
    const caroOptions1 = {
        items: 5,
        loop: true,
        margin: 10,
    };
    const caroOptions2 = {
        items: 5,
        loop: true,
        margin: 10,
    };
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        900: {
            items: 3,
        },
    };

    return (
        <div className='main' id='home'>
            <div className="whatIcon rounded-circle bg-white">
                <a href="https://wa.me/+918928060714" className="nav-link"><i className="fab fa-whatsapp fs-1" style={{ color: '#25D366' }}></i></a>
            </div>
            <div className="mainHead py-2 pt-3">
                <div className="mainHeadWrap">
                    <div className="logoWrap mx-auto my-3">
                        <img src="./images/CARONRENT LOGO.png" className='img-fluid' alt="" />
                    </div>
                </div>
            </div>

            <div className="half-circleWra bg-brand2 pb-3">
                <div className="half-circleTxt bg-brand2 p-4 pb-0">
                    <h1 className="fs-2 outfit-bold container text-white mb-0">Are you ready <br /> for a Smooth Drive?</h1>
                </div>
                <div className="bg-brand2">
                    <div className="carCategory container">
                        <div className=" p-0 m-0 br2 mt-3 row justify-content-between align-items-center">
                            <div className="col-md-4">
                                <Link to="/basic" className="carCateCard nav-link mb-3 shadow bg-white br2 d-flex justify-content-between align-items-center p-0">
                                    <div className="carcatecardimg">
                                        <img src="./images/Basic.png" className='img-fluid mb-0' alt="basic car" />
                                    </div>
                                    <p className="carcatecardtxt mb-0 text-captalize text-dark fs-1 outfit-bold lh-sm">Basic<br />Cars</p>
                                    <p className="carcatecardarr mb-0 me-3 rounded-pill border"><i className="fas fa-arrow-right brand-color fs-5 rounded-pill"></i></p>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/luxury" className="carCateCard nav-link mb-3 shadow bg-white br2 d-flex justify-content-between align-items-center p-0">
                                    <div className="carcatecardimg">
                                        <img src="./images/Luxury.png" className='img-fluid mb-0' alt="basic car" />
                                    </div>
                                    <p className="carcatecardtxt mb-0 text-captalize text-dark fs-1 outfit-bold lh-sm">Luxury<br />Cars</p>
                                    <p className="carcatecardarr mb-0 me-3 rounded-pill border"><i className="fas fa-arrow-right brand-color fs-5 rounded-pill"></i></p>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/sports" className="carCateCard nav-link mb-3 shadow bg-white br2 d-flex justify-content-between align-items-center p-0">
                                    <div className="carcatecardimg">
                                        <img src="./images/Sports.png" className='img-fluid mb-0' alt="basic car" />
                                    </div>
                                    <p className="carcatecardtxt mb-0 text-captalize text-dark fs-1 outfit-bold lh-sm">Sports<br />Cars</p>
                                    <p className="carcatecardarr mb-0 me-3 rounded-pill border"><i className="fas fa-arrow-right brand-color fs-5 rounded-pill"></i></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutDiv container mt-5" id="about">
                <p className="aboutHead mb-0 brand-color fs-4 outfit-bold mb-0 pt-2">
                    Welcome to Car On Rent
                </p>
                <p className="aboutTxt mt-2 text-muted mb-0 outfit-regular">
                    Welcome to CarOnRent.co - Your Premier Luxury Car Rental Service in Mumbai. We specialize in providing top-notch luxury and sports cars for rent, allowing you to elevate your driving experience and make a statement wherever you go.
                </p>
            </div>

            <div id='cars' className="basicCars container">
                <p className="basicCarHead mb-0 text-secondary fs-4 outfit-bold mb-1 mt-5">
                    Our Luxury Cars
                </p>
                <div className="basicCardWraper">
                    <div className="basicCardWrap">
                        <OwlCarousel margin={10} dots nav options={caroOptions} navText={['<i class="fas fa-arrow-left fs-5"></i>', '<i class="fas fa-arrow-right fs-5"></i>']} responsive={responsiveOptions} className='owl-theme'>
                            {
                                luxuryCars.map((car) => (
                                    <div className='item' key={car.id}>
                                        <Basiccard category={car.category} img={car.mainimg} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price} />
                                    </div>
                                ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>

            <div className="basicCars container">
                <p className="basicCarHead mb-0 fs-4 outfit-bold mb-1 mt-5">
                    Our Sport Cars
                </p>
                <div className="basicCardWraper">
                    <div className="basicCardWrap">
                        <OwlCarousel margin={10} dots nav options={caroOptions1} navText={['<i class="fas fa-arrow-left fs-5"></i>', '<i class="fas fa-arrow-right fs-5"></i>']} responsive={responsiveOptions} className='owl-theme'>
                            {
                                sportCars.map((car) => (
                                    <Basiccard key={car.id} category={car.category} img={car.img} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price} />
                                ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>

            <div className="listings container">
                <p className="listingHead mb-0 text-secondary fs-4 outfit-bold mb-1 mt-5">
                    Our Basic Cars
                </p>
                <div className="listingWraper">
                    <OwlCarousel margin={10} dots nav options={caroOptions2} navText={['<i class="fas fa-arrow-left fs-5"></i>', '<i class="fas fa-arrow-right fs-5"></i>']} responsive={responsiveOptions} className='owl-theme'>
                        {
                            basicCars.map((car) => (
                                <Basiccard category={car.category} key={car.id} img={car.mainimg} name={car.name} rating={car.rating} trips={car.trips} features={car.features} price={car.price} />
                            ))
                        }
                    </OwlCarousel>
                </div>
            </div>



            {/* <div className="banner container">
                <p className="bannerHead mb-0 text-secondary fs-4 outfit-bold mb-1 mt-5">
                    Our Loved Ones
                </p>
                <div className="bannerWraper">
                    <div className="bannerWrap">
                        <Bannercard />
                        <Bannercard />
                        <Bannercard />
                    </div>
                </div>
            </div> */}

            <div className="mainBody pt-1 mt-5 pb-3">


                <div className="ourServiceDiv container">
                    <p className="servicesHead mb-5 text-secondary fs-4 outfit-bold mb-1 mt-3 text-center">
                        Discover Our Services
                    </p>
                    <div className="row align-items-center">
                        <div className="serviceCard text-center mb-4 col-md-6">
                            <div className="serviceImg mx-auto">
                                <img src="./images/Luxury Car Icon.png" className='img-fluid' alt="car icon" />
                            </div>
                            <div className="serviceCardTxt">
                                <p className="serviceCardHead mb-0 fs-5 brand-color outfit-bold mt-2">Luxury Car Rentals</p>
                                <p className="serviceCardPara text-muted mb-0 outfit-regular px-4 mt-2">Cruise the city in style with our exquisite selection of luxury vehicles.</p>
                            </div>
                        </div>
                        <div className="serviceCard text-center mb-4 col-md-6">
                            <div className="serviceImg mx-auto">
                                <img src="./images/Sports Car.png" className='img-fluid' alt="car icon" />
                            </div>
                            <div className="serviceCardTxt">
                                <p className="serviceCardHead mb-0 fs-5 brand-color outfit-bold mt-2">Sports Cars on Rent</p>
                                <p className="serviceCardPara text-muted mb-0 outfit-regular px-4 mt-2">Feel the thrill of high-performance driving with our range of sports cars.</p>
                            </div>
                        </div>
                        <div className="serviceCard text-center mb-4 col-md-6">
                            <div className="serviceImg mx-auto">
                                <img src="./images/Covertible Car Icon.png" className='img-fluid invertedImg' alt="car icon" />
                            </div>
                            <div className="serviceCardTxt">
                                <p className="serviceCardHead mb-0 fs-5 brand-color outfit-bold mt-2">Convertible Car Rentals</p>
                                <p className="serviceCardPara text-muted mb-0 outfit-regular px-4 mt-2">Experience open-top driving and enjoy the beauty of Mumbai.</p>
                            </div>
                        </div>
                        <div className="serviceCard text-center mb-4 col-md-6">
                            <div className="serviceImg mx-auto">
                                <img src="./images/Luxury with driver.png" className='img-fluid p-3 pt-2 pb-0' alt="car icon" />
                            </div>
                            <div className="serviceCardTxt">
                                <p className="serviceCardHead mb-0 fs-5 brand-color outfit-bold mt-2">Luxury Car Rentals with Driver</p>
                                <p className="serviceCardPara text-muted mb-0 outfit-regular px-4 mt-2">Sit back and relax while our professional drivers take the wheel.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why container">
                    <div className="d-flex align-items-center">
                        <p className="whyHead mb-1 text-secondary fs-4 lh-sm outfit-bold mb-1 mt-5">
                            Why Choose <span className="brand-color outfit-bold">Caronrent.co</span>
                        </p>
                        {/* <div className="whyLogo ms-2">
                            <img src="./images/CARONRENT LOGO.png" className='img-fluid' alt="logo" />
                        </div> */}
                    </div>
                    <div className="whyCardWrap">
                        <div className="whyCard mt-2">
                            <p className="whyCardHead mb-0 outfit-medium fs-5 text-secondary">Extensive Fleet :</p>
                            <p className="whyCardPara">Choose from a wide variety of luxury and sports cars.
                                Seamless Booking: Our user-friendly platform ensures a hassle-free booking experience</p>
                        </div>
                        <div className="whyCard mt-2">
                            <p className="whyCardHead mb-0 outfit-medium fs-5 text-secondary">Competitive Prices :</p>
                            <p className="whyCardPara">Enjoy luxury at affordable rates.
                                Professional Drivers: Experience convenience with our skilled and courteous drivers</p>
                        </div>
                        <div className="whyCard mt-2">
                            <p className="whyCardHead mb-0 outfit-medium fs-5 text-secondary">Flexible Rental Options :</p>
                            <p className="whyCardPara">From hourly to monthly rentals, we cater to your needs.</p>
                        </div>
                    </div>
                </div>

                {/* <div className="faq container">
                    <p className="happyHead mb-0 text-secondary fs-4 outfit-bold mb-1 mt-5 pt-2">
                        FAQs
                    </p>
                    <div className="faqWraper">
                        <div className="faqWrap">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed outfit-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Is there a speed limit?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Revv allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits.</div>
                                    </div>
                                </div>
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed outfit-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Can I extend/ cancle/ modify?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item br1 mb-1">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed outfit-bold br1 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Booking criteria and documents?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>

            {/* <div className="blogDiv container">
                <p className="happyHead mb-0 text-dark fs-4 outfit-bold mb-1 mt-5">
                    Blog Section :
                </p>
                <p className="blogTxt text-muted outfit-medium mb-0">Check out our latest blog posts for insights into luxury driving, the best driving routes in Mumbai, and tips for choosing the perfect luxury car for your needs.</p>
                <div className="blogWrap">
                    <div className="blogCard mt-4 px-3">
                        <div className="blogImg">
                            <img src="https://cdn.needacar.co.nz/mc-listing/blog/be27a1c0/tipd%20to%20save%20fuel.png?sv=2016-05-31&sr=b&si=default&sig=ijccmat1SKxYuZodFtIZ0BBDiYPghBQ2IwTrAHBPHiI%3D&se=2030-12-04T22%3A24%3A59Z" alt="" className="img-fluid br1" />
                        </div>
                        <div className="blogCardTxt px-2">
                            <p className="blogCardTxtPara outfit-medium mt-2 brand-color">
                                Tips to save fuel:
                                <span className="text-muted outfit-light ms-2">8 Tips to save fuel while Driving...</span>
                            </p>
                        </div>
                    </div>
                    <div className="blogCard mt-4 px-3">
                        <div className="blogImg">
                            <img src="https://cdn.needacar.co.nz/mc-listing/blog/be27a1c0/tipd%20to%20save%20fuel.png?sv=2016-05-31&sr=b&si=default&sig=ijccmat1SKxYuZodFtIZ0BBDiYPghBQ2IwTrAHBPHiI%3D&se=2030-12-04T22%3A24%3A59Z" alt="" className="img-fluid br1" />
                        </div>
                        <div className="blogCardTxt px-2">
                            <p className="blogCardTxtPara outfit-medium mt-2 brand-color">
                                Tips to save fuel:
                                <span className="text-muted outfit-light ms-2">8 Tips to save fuel while Driving...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="contactDiv container mt-5 px-4 mb-5 pt-2">
                <p className="contactHead mb-0 text-center fs-4 outfit-bold">Get In <span className="brand-color outfit-bold">Touch</span></p>
                <p className="contactTxt text-center">
                    For bookings, inquiries, or assistance, don't hesitate to reach out to our dedicated team. You can email us at <a href="mailto:contact@caronrent.co" className="nav-link brand-color outfit-medium d-inline">contact@caronrent.co</a> or call us at <a href="tel:+919876543210" className="nav-link brand-color outfit-medium d-inline">89280 60714</a>.
                </p>
            </div>

            <Footer disp="flex" />
        </div>
    )
}

export default Home