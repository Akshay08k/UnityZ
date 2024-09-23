import React from 'react';
import Navbar from '../components/navbar';
import '../navStyle.css';
import hero_img from './hero_img.png';

const Home = () => {
  return (
    <div>
      <Navbar />

      <section className='container'>
        <div className='row hero'>

          <div className='col-12 col-md-6 hero-text'>
            <div>
              <h1>Collaboration Starts</h1>
              <h1 className='hero-here'>Here.</h1>
              <p>We are team of talented designers making websites with Bootstrap. We are team of talented designers making websites with Bootstrap designers making websites with Bootstrap with Bootstrap </p>
              <div className='d-flex'>
                <button className='rounded border-0 py-2 px-4 hero-button'>Find Work</button>
                <button className='rounded border-0 py-2 px-4 mx-4 hero-button'>Create Job</button>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 hero-image'>
            <img src={hero_img} className='hero-image-responsive' />
          </div>

        </div>
      </section>

      <section className='container services'>
        <div className='row'>
          <div className='myc-wrapper'>
            <div className='col-12'>
              <div class="card myc-item myc-item1">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div class="card myc-item myc-item2">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div class="card myc-item myc-item3">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div class="card myc-item myc-item4">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div class="card myc-item myc-item5">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div class="card myc-item myc-item6">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div class="card myc-item myc-item7">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div className='col-12'>
              <div class="card myc-item myc-item8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div className='col-12'>
              <div class="card myc-item myc-item9">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div className='col-12'>
              <div class="card myc-item myc-item10">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <div class="card mt-5">
        <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>

    </div >
  )
}

export default Home;