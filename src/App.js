import Assets from "./components/Assets";

function App() {
    const {
        Logo,
        Customer1,
        Customer2,
        Customer3,
        Customer4,
        Customer5,
        Customer6,
        HeroImg,
    } = Assets;

    return (
        <>
            <header className="header">
                <a href="#/">
                    <img className="logo" src={Logo} alt="Omnifood logo" />
                </a>
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li>
                            <a className="main-nav-link" href="#/">
                                How it works
                            </a>
                        </li>
                        <li>
                            <a className="main-nav-link" href="#/">
                                Meals
                            </a>
                        </li>
                        <li>
                            <a className="main-nav-link" href="#/">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a className="main-nav-link" href="#/">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a className="main-nav-link nav-cta" href="#/">
                                Try for free
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* HERO SECTION */}
                <section className="section-hero">
                    <div className="hero">
                        <div className="hero-text-box">
                            <h1 className="heading-primary">
                                A healthy meal delivered to your door, every
                                single day
                            </h1>
                            <p className="hero-description">
                                The smart 365-days-per-year food subscription
                                that will make you eat healthy again. Tailored
                                to your personal tastes and nutritional needs.
                            </p>

                            <a
                                href="#/"
                                className="btn btn--full  margin-right-sm"
                            >
                                Start eating well
                            </a>
                            <a href="#/" className="btn btn--outline ">
                                Learn more &darr;
                            </a>

                            <div className="delivered-meals">
                                <div className="delivered-imgs">
                                    <img src={Customer1} alt="Customer1" />
                                    <img src={Customer2} alt="Customer2" />
                                    <img src={Customer3} alt="Customer3" />
                                    <img src={Customer4} alt="Customer4" />
                                    <img src={Customer5} alt="Customer5" />
                                    <img src={Customer6} alt="Customer6" />
                                </div>
                                <p className="delivered-text">
                                    <span>250,000+</span> meals delivered last
                                    year!
                                </p>
                            </div>
                        </div>
                        <div className="hero-img-box">
                            <img
                                className="hero-img"
                                src={HeroImg}
                                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                            />
                        </div>
                    </div>
                </section>

                {/* FEATURED IN SECTION */}
                <section className="section-featured"></section>
            </main>
        </>
    );
}

export default App;
