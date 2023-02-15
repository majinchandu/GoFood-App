import React, { useRef , useEffect} from 'react'
import { useDispatchCart} from './ContextReducer';
import { useState } from 'react';

export default function Card(props) {

    // let data = useCart();
    let dispatch = useDispatchCart();
    let priceRef = useRef()
    let options = props.options;
    let priceOptions = Object.keys(options) // getting the keys of the object named option
    const [qty, setqty] = useState(1);
    const [size, setsize] = useState("")

    async function handleAddtocart() {
        await dispatch({type:"ADD" , id:props.foodItem._id , name:props.foodItem.name , price:finalPrice , qty:qty , size:size , description:props.foodItem.description})
    }

    let finalPrice = qty* parseInt(options[size]); 
    
    useEffect(() => { // pehli load pe save kardoo
        setsize(priceRef.current.value)
    }, [])
    return (
        <div>
            <div class="card mt-3" style={{ "width": "18rem", "maxHeight": "450px" }}>
                <img src={props.foodItem.img} class="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}} />
                <div class="card-body">
                    <h5 class="card-title">{props.foodItem.name}</h5>
                    <p class="card-text">{props.foodItem.description}</p>
                    <div class="container w-100">
                        <select className='m-2 h-100  bg-success rounded' onChange={(e)=>setqty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100  bg-success rounded' ref = {priceRef} onChange={(e)=>setsize(e.target.value)}>
                            {
                                priceOptions.map((data)=>{
                                    return(
                                        <option key={data} value={data} >{data}</option>
                                    )
                                })
                            }
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Rs:{finalPrice}/
                        </div>
                        <hr />
                        <button className='btn btn-success justify-center ms-2' onClick={handleAddtocart}>Add to Cart </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
