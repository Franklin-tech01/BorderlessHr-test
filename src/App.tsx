// import Navbar from "";
import brand from "./assets/brand.svg";
import searchIcon from "./assets/search.svg";
import cartIcon from "./assets/cart.svg";
import hamburgerIcon from "./assets/menu.svg";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import './App.css';

function App() {


  return (
    <>
      <div className='main__container'>
        <div className='nav__container'>
          <img src={brand} alt="" />
          <div className='links'>
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>Pricing</li>
              <li>Contact</li>
              <div className="icons">
                <img src={searchIcon} alt="" />
                <img src={cartIcon} alt="" />
              </div>
            </ul>
            <img src={hamburgerIcon} alt="" className="hamburger" />
          </div>

        </div>
        <div className='hero__section'>
          <div className="text__content">

            <h1>Drive More
              Customers
              Through Digital
            </h1>
            <p>We know how large objects will act, but things on a
              small scale.</p>
            <div className="button__container">
              <button className="button__one">Get Quote Now</button>
              <button className="button__two">Learn More</button>
            </div>
          </div>
          <div className='form__container'>
            <form action="">
              <h1>Book Appointment</h1>
              <Input label="Name*" placeholder="Full Name" type="text" />
              <Input label="Email*" placeholder="example@gmail.com" type="email" />

              <Dropdown
                label="Department*"
                className="dropinput"
                placeholder="choose an option"
                options={['Please Select', 'Option 2', 'Option 3']}
              />
              <Dropdown
                label="Time*"
                className="dropinput"
                placeholder="choose an option"
                options={['4:00 Available', 'Option 2', 'Option 3']}
              />
              <button className="button__three">Book Appointment</button>

            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
