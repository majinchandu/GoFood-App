import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import Modal from '../Models';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
export default function Navbar() {
    let data = useCart()
const [cartView, setcartView] = useState(false)
    const navigate =  useNavigate()

    function handleLogout() {
        localStorage.removeItem("authToken")
        navigate("/loginuser")
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                <Link class="navbar-brand fs-1 " to="/" >GoFooD</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2">
                        <li class="nav-item active ">
                            <Link class="nav-link active fs-5 " to="/">Home </Link>
                        </li>
                        {
                            (localStorage.getItem("authToken")) ? //agar localstorage me authToken namak koi variable pada hai matlab login hai tab hi My orders show karo
                                <li class="nav-item  ">
                                    <Link class="nav-link active fs-5 " to="/">My Orders</Link>
                                </li>
                                : ""
                        }
                    </ul>
                    {
                        (!localStorage.getItem("authToken")) ?
                            <div className='d-flex'>
                                <Link class="btn bg-white text-success mx-1" to="/loginuser">Login</Link>
                                <Link class="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
                            </div>
                            : 
                            <div>
                                <div className='btn bg-white text-success mx-2' onClick={()=> {setcartView(true)}}>
                                    My Cart  <span class="badge text-bg-dark rounded mx-1"  >  {data.length}  </span>
                                </div>
                                {cartView?<Modal onClose={()=>setcartView(false)}><Cart /></Modal> :null}
                                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>
                    }
                </div>
            </nav>
        </>
    )
}
