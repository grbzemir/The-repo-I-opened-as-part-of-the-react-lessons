import React from 'react'

// eslint-disable-next-line react/prop-types
function Product({ productName, price }) {

    // console.log(props)
    // const { productName, price } = props; //Destructuring
    return (
        <div>
            <div>Ürün Bilgileri</div>

            <div>
                <div>İsim : {productName}</div>
                <div>Fiyat: {price} TL</div>
            </div>
        </div>
    )
}

export default Product
