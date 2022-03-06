import React from 'react'
import './_product.scss'

const Product = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <img
          src={require('../../assets/img/shop/shop-1.jpg')}
          alt="product-1"
          className="img-fluid"
        />
        <div>
          <h6>
            <a href="#">Furry Hooded</a>
          </h6>
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <div className="peoduct__price">
                $590.00
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product
