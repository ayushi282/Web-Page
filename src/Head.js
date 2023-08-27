import React from 'react'
import unit from './images/unit.png';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';
import Home from './Home';

const Head = () => {
  return (
    <header className='.css'>
    <div className='headers'>
        <div className='img'>
            <img src={unit}/>
        </div>
        <div className='navv'>
            <nav>
            <Link className='ins'to={'Home'}>Home</Link>
                <Link className='ins' to={'Product'}>Product</Link>
                <Link className='ins'to={'Resources'}>Resources</Link>
                <Link className='ins' to={'Pricing'}>Pricing</Link>
                <div className='right'>
           <a className='ins' href='Login'>login</a> 
            <button className='button'>Sign up</button> 
        </div>
            </nav>
        </div>
       
    </div>
    </header>
  )
}

export default Head