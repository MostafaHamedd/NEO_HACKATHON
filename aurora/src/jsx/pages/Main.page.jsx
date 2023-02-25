import React from 'react'
import HeaderImage from './../../resources/img/main/Header.png';

export default function MainPage() {
  return (
    <div>
      <div className="row align-items-center ">
        <div className="col-12 col-md-8">
          <img src={HeaderImage} className="img-fluid" alt="" srcset="" />
        </div>

        <div className="col-12 col-md-4">
          <div>
            <h1>
              <span className='text-info'>Register</span> for your classes.
            </h1>
            <button
              type="button"
              class="mt-5 d-flex-inline flex-center btn btn-lg btn-info rounded-pill px-5"
            >
              Get Started
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
