import React from 'react';
import Cards from '../Cards/Cards';
import './HomeSection.css';

export default function HomeSection() {
  return (
    <>
    <div className="row my-5 border rounded-3 my-5 mx-md-3 mx-1">

      <div className="col  text-center border border-top-0 border-bottom-0 border-start-0 my-5">
        <a className='card-title fs-4 text-decoration-none'>Houses</a>
        <p className='text-muted mt-2'><i class="fa-regular fa-bookmark mx-2"></i>6.4K offers</p>
      </div>

      <div className="col  text-center border border-top-0 border-bottom-0 border-start-0 my-5">
        <a className='card-title fs-4 text-decoration-none'>Apartment</a>
        <p className='text-muted mt-2'><i class="fa-regular fa-bookmark mx-2"></i>6.4K offers</p>
      </div>

      <div className="col  text-center border border-top-0 border-bottom-0 border-start-0 my-5">
        <a className='card-title fs-4 text-decoration-none'>Commercial</a>
        <p className='text-muted mt-2'><i class="fa-regular fa-bookmark mx-2"></i>6.4K offers</p>
      </div>

      <div className="col  text-center border border-top-0 border-bottom-0 border-start-0 my-5">
        <a className='card-title fs-4 text-decoration-none'>Daily rental
        </a>
        <p className='text-muted mt-2'><i class="fa-regular fa-bookmark mx-2"></i>6.4K offers</p>
      </div>

      <div className="col  text-center border border-top-0 border-bottom-0 border-start-0 my-5">
        <a className='card-title fs-4 text-decoration-none'>New buildings
        </a>
        <p className='text-muted mt-2'><i class="fa-regular fa-bookmark mx-2"></i>6.4K offers</p>
      </div>

      <div className="col text-center my-5">
        <a className='card-title fs-4 text-decoration-none'>more
      
        </a>
        <ul className="dropdown-menu text-dark">
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
      </div>

      
    </div>
    <Cards />
  </>
  )
}
