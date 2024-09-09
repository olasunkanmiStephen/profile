import React from 'react'
import "./css/right.css"

const Right = (isDayMode) => {
  return (
    <div className='right-container'> 
      <div className="card">
        <div className="bio">
            <h4>
                Bio
            </h4>
            <p>She currently lives in Sydney. She finsh her masters in business and has just been promoted to Sales Manager, She is currently single and like to go out with friends on holiday.</p>
        </div>
      </div>
      <div className="card">
        <div className="core-needs">
            <h4>Core needs</h4>
            <div className="needs">
                <div className="need">
                    <div className="bullet">

                    </div>
                    <p>Need to find people with similar skills that can her tackle company goals</p>
                </div>
                <div className="need">
                    <div className="bullet">

                    </div>
                    <p>View all the hirings in an overview</p>
                </div>
                <div className="need">
                    <div className="bullet">

                    </div>
                    <p>The price of the service is very important</p>
                </div>
            </div>
        </div>
      </div>
      <div className="card">
        <div className="core-needs">
            <h4>Frustrations</h4>
            <div className="needs">
                <div className="need">
                    <div className="bullet">
                    </div>
                    <p>Price is high related to quality they provide</p>
                </div>
                <div className="need">
                    <div className="bullet">
                    </div>
                    <p>Currently finds perect people from past work relations, family, friends and within my circle and online which is tedious</p>
                </div>
                <div className="need">
                    <div className="bullet">
                    </div>
                    <p>Not much choice and comparison not available</p>
                </div>
            </div>
        </div>
      </div>
      <div className="card">
        <div className="bio">
            <h4>
                Brands
            </h4>
            <div className="brands">
                <img src="./download.png" alt="" className='nasa'/>
                <img src="./huawei.png" alt="" className='huawei'/>
                <img src="./download.png" alt="" className='nasa'/>
                <img src="./huawei.png" alt="" className='huawei'/>
                <img src="./download.png" alt="" className='nasa'/>
            </div>
        </div>
      </div>
      <div className="cards">
        <div className="payment">
            <h4>Payment medium</h4>
            <div className="p-md">
                <img src="./DP.jfif" alt="" />
                <p>Digital Payment</p>
            </div>
        </div>
        <div className="payment">
        <h4>Payment medium</h4>
            <div className="p-md">
                <img src="./DP.jfif" alt="" />
                <p>Mobile App</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Right
