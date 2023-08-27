import React from 'react'

const Pricing = () => {
  return (
    <div className='price'>
        <div className='pricy'>Pricing</div>
    <h1>
        Simple,transparent pricing
    </h1>
    <p className='para'>
        We believe Untitled should be accessible to all comapnies, no matter the size 
    </p>
    <div className='box'>
    <div className='box-1'>
        <h1>$10/mth</h1>
        <h4 className='basic'>Basic Plan</h4>
        <p className='billed'> Billed annually</p>
        <p className='list'>
            <ul>
                <li className='ll'>Access to all basic features</li>
                <li className='ll'>Basic reporting and analytics</li>
                <li className='ll'>Up to 10 individual users</li>
                <li className='ll'>20GB individual data each user</li>
                <li >Basic chat and email support</li>
            </ul>
        </p>
        <button className='get'>Get Started</button>
    </div>
    <div className='box-2'>
        <h1>$20/mth</h1>
        <h4 className='basic'>Business Plan</h4>
        <p className='billed'> Billed annually</p>
        <p className='list'>
            <ul>
                <li className='ll'>200+ integrations</li>
                <li className='ll'>Advanced reporting and analyt</li>
                <li className='ll'>Up to 20 individual users</li>
                <li className='ll'>40GB individual data each user</li>
                <li >Priority chat and email support</li>
            </ul>
        </p>
        <button className='get'>Get Started</button>
    </div>
    <div className='box-1'>
        <h1>$30/mth</h1>
        <h4 className='basic'>Enterprise Plan</h4>
        <p className='billed'> Billed annually</p>
        <p className='list'>
            <ul>
                <li className='ll'>Advanced custom fields</li>
                <li className='ll'>Audit logs and data history</li>
                <li className='ll'>Unlimited individual users</li>
                <li className='ll'>Unlimited individual data </li>
                <li >Personalised+priority service</li>
            </ul>
        </p>
        <button className='get'>Get Started</button>
    </div>
    </div>
    
    </div>
  )
}

export default Pricing