import React from 'react'
import { useState } from 'react'

function Basket(props) {



    const {b, tBasket } = props

    function callBasket() {
        if (b === true) {
            return (
                <div style={{ height: '100%', boxShadow: '0 0 5px 1px rgb(0,0,0, .4)', width: '250px', position: 'fixed', right: '0', top: '0', animation: 'slideIn .4s ease-in-out' }} className="basket">
                    <div style={{ height: '100%', width: '100%'}}>
                        {details()}
                    </div>
                </div>
            )
        } else if (b === false) {
            // return (
            //     <div style={{ height: '100vh', width: '250px', position: 'fixed', right: '-250px', top: '0', backgroundColor: 'gray', transition: '.4s ease-in-out'}} className="basket">b</div>
            // )
        }
    }

    function details() {
        return (
            <div className='basketI'>
                <h3>Sepet
                    <h4>Ürün: {tBasket.basketInfo.totalCount}</h4>
                </h3>
                <h4 className='b'>Tutar: {tBasket.basketInfo.totalPrice} TL</h4>
                <div className='c'>
                    {
                        tBasket.basketItems.map(item => (

                        <div className='pro' key={item.id}>
                           <h5>{item.name}</h5>
                           <h5>{item.price} TL</h5>
                       </div>

                        ))
                    }
                </div>
            </div>
        )


    }



    return (
        <div>
            {callBasket()}
        </div>
    )
}

export default Basket