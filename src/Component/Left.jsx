import React from 'react'
import "./css/left.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Left = () => {
  return (
    <div className='left-container' >
      <div className="profile-card">
        <div className="card">
            <h2>Cameron Williamson</h2>
            <img src="./dp.jpg" alt="" />
            <div className="details">
                <div className="dt">
                    <p>Age</p>
                    <p>Education</p>
                    <p>Status</p>
                    <p>Occupation</p>
                    <p>Location</p>
                    <p>Tech Literate</p>
                </div>
                <div className="dt p">
                    <p>27</p>
                    <p>Masters in Business</p>
                    <p>Single</p>
                    <p>Sales Manager</p>
                    <p>Sydney</p>
                    <p>High</p>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="quotes">
                <FontAwesomeIcon icon={faQuoteLeft} className='q'/>
                <p>i am used to with online service and i usually do my online shopping from instagram</p>
            </div>
        </div>
        <div className="card">
            <div className="personality">
                <h4>Personality</h4>
                <div className="ply">
                    <p>Extrovert</p>
                    <p>Reader</p>
                    <p>Spender</p>
                    <p>Tech-savy</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Left
