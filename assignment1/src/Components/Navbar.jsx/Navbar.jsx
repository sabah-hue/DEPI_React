import React, {useState} from "react";
// import { link } from "react-router-dom";
import logo from '../../assets/logo.png'

export default function Navbar() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  function addItem () {
    setNumberOfItems(numberOfItems => numberOfItems + 1);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-lg py-4">
        <div className="container-fluid">
          <img className="mx-3" src={logo} alt="" />
          <a className="navbar-brand fs-3" href="#">
            Finder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item px-3 ">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item px-3  dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Listings
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item  px-3 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  account
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item px-3  dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item px-3">
                <a className="nav-link" aria-current="page" href="#">
                  Docs
                </a>
              </li>

              <li className="nav-item px-3">
                <a className="nav-link" aria-current="page" href="#">
                  Components
                </a>
              </li>
            </ul>

            <div className="position-relative mx-3 m-auto">
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
              {numberOfItems > 0 ? 
              (
                <span className="position-absolute bottom-100 left-0 bg-success rounded-circle py-1 px-2">{numberOfItems}</span>

              )  :
              ""
            }
            </div>
            <button className="btn btn-danger mx-3 my-md-0 my-3 px-2" onClick={()=>addItem()}>+ Add Item</button>

          </div>
        </div>
      </nav>
    </>
  );
}
