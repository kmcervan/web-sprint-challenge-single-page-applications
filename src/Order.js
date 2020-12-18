import React from 'react';

function Order({ details }){
    if(!details){
        return <h3>We are fetching your order details...</h3>
    }
    return (
        <div className='order-container'>
            <h2>{details.name}</h2>
            <p>{details.size}</p>
            <p>{details.toppings}</p>
            <p>{details.special}</p>
        </div>
    )
}

export default Order;