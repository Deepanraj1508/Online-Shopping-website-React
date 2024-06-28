import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox_navigator'>
                <div className='descriptionbox_nav-box'>
                    Description
                </div>
                <div className='descriptionbox_nav-box fade'>
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti distinctio iusto ipsum ratione cumque
                    facilis eos mollitia rerum at
                    tempora aspernatur libero temporibus, cum, nulla laboriosam quidem? Recusandae, sint expedita.
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti distinctio iusto ipsum ratione 
                    cumque facilis eos mollitia rerum at
                    tempora aspernatur libero temporibus, cum, nulla laboriosam quidem? Recusandae, sint expedita.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox