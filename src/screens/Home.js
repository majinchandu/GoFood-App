import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
    const [search, setsearch] = useState('');
    const [foodcat, setfoodcat] = useState([]);
    const [fooditem, setfooditem] = useState([]);

    async function loadData() {
        let response = await fetch('http://localhost:5000/api/foodData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        response = await response.json();
        // console.log(response[0],response[1]);
        setfooditem(response[0]);
        setfoodcat(response[1]);
    }
    useEffect(() => {
        loadData()//jase hi oehli baar page load hoga tab loaddata chal jaayega kyunki empty bracket hai 
    }, [])

    return (
        <>
            <div><Navbar /></div>
            <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel" >
                {/* <ol className="carousel-Fade">
                    <li data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleFade" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleFade" data-bs-slide-to="2"></li>
                </ol> */}
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <div class="d-flex justify-content-senter">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
                            {/* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" id='carouselimage' src="https://source.unsplash.com/random/900x900/?burger

" alt="First slide" style={{ filter: "brightness(30%)", objectFit: "contain !important" }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" id='carouselimage' src="https://source.unsplash.com/random/900x900/?momos" alt="Second slide" style={{ filter: "brightness(30%)", objectFit: "contain !important" }} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" id='carouselimage' src="https://source.unsplash.com/random/900x900/?pizza" alt="Third slide" style={{ filter: "brightness(30%)", objectFit: "contain !important" }} />
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
            <div className='container'>
                {
                    foodcat !== []
                        ? foodcat.map((data) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className="fs-3 m-3">
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {
                                        fooditem !== []
                                            ?
                                            fooditem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())) )//(item.name.toLowerCase().includes(search.toLocaleLowerCase()) is used to operate search field
                                                .map(filteritems => {
                                                    return (
                                                        <div key={filteritems._id} className='col-12 col-md-6 col-lg-3 '>
                                                            <Card foodItem = {filteritems} options={filteritems.options[0]}  />
                                                            <br />
                                                        </div>
                                                    )
                                                })
                                            :
                                            <div>No such Data</div>
                                    }
                                </div>
                            )
                        }) : <div>""""""""""""""</div>
                }

            </div>
            <div><Footer /></div>
        </>
    )
}
