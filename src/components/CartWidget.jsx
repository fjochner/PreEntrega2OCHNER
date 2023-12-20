import React from 'react'

const CartWidget = () => {
  const itemsInCart = 7

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="badge bg-primary text-wrap">{itemsInCart}</span>
    </div>
  )
}

export default CartWidget