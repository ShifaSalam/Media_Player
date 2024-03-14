import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
        <div className='row p-5 shadow'>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Media Player 2024</h1>
            <p>Explore media player for youtube video upload and management. You can add and manage youtube videos, categories and even check</p>
            <div>
              <Link to={'/dash'} className='btn btn-success'>Explore</Link>
            </div>
          </div>
          <div className='col'>
            <img src="https://www.business2community.com/wp-content/uploads/2016/09/social-media-background1-150x150.jpg-900x514.jpg" className='img-fluid shadow' alt="img" />
          </div>
        </div>
      </div>
      <div className='mt-3 p-5'>
        <h2 className='text-center'>Features</h2>
        <div className='d-flex mt-2 flex-row justify-content-between'>
          <div class="card" style={{ width: '18rem' }}>
            <img src="https://cdn.dribbble.com/users/1585453/screenshots/6732255/comp_1.gif" style={{ height: '250px' }} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Upload Videos</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card" style={{ width: '18rem' }}>
            <img src="https://cdn.dribbble.com/users/34556/screenshots/1680799/play.gif" style={{ height: '250px' }} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Watch Videos</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card" style={{ width: '18rem' }}>
            <img src="https://tse2.mm.bing.net/th?id=OIP._AWHKSeD6IsFkDPkY2S5wgHaHa&pid=Api&P=0&h=180" style={{ height: '250px' }} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Watch History</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 d-flex justify-content-between flex-row align-items-center p-5'>
        <div className='col'>
          <h2>Simple, Fast & Secured</h2>
          <p style={{ textAlign: 'justify' }}>Media player 2024 is a platform for simple and faster youtube video uploading and management
            video watch history too where you get a simple video player interface with the app itself!!
          </p>
        </div>
        <div className="col">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/l2EqVahDON4?si=FWIwMjJY90XzQ4ay" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Landing