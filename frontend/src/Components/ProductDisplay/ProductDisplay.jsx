import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className='productdisplay_left'>
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdiplay-img">
                    <img className='productdiplay-main-img' src={product.image} alt="" />

                </div>
            </div>
            <div className='productdisplay_right'>
                <h1>{product.name}</h1>
                <div className="productdiplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay__right-prices">
                    <div className="productdisplay-right-price-old">
                        Rs. {product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        Rs. {product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos magnam harum fugit aliquam inventore
                    quibusdam nam! Ullam aliquid inventore quaerat perferendis doloremque reprehenderit assumenda, pariatur
                    molestiae amet voluptatum voluptatem.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                <p className='productdisplay-right-category'>
                    <span>
                        Category :
                    </span>
                    Women ,T-Shirt, Crop Top
                </p>
                <p className='productdisplay-right-category'>
                    <span>
                        Tags :
                    </span>
                    Modern,Latest
                </p>
            </div>

        </div>
    )
}

export default ProductDisplay