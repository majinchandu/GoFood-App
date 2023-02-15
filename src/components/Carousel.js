import React from 'react'

export default function Carousel() {
    return (
        <div>
            
            <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel" >
                {/* <ol className="carousel-Fade">
                    <li data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleFade" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleFade" data-bs-slide-to="2"></li>
                </ol> */}
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" id='carouselimage' src="https://source.unsplash.com/random/900x900/?burger

" alt="First slide" style={{ filter: "brightness(30%)",objectFit:"contain !important"}} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" id='carouselimage' src="https://source.unsplash.com/random/900x900/?momos" alt="Second slide" style={{ filter: "brightness(30%)" ,objectFit:"contain !important"}} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" id='carouselimage'src="https://source.unsplash.com/random/900x900/?pizza" alt="Third slide" style={{ filter: "brightness(30%)",objectFit:"contain !important" }} />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
