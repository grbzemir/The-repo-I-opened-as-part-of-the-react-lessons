import React from 'react'

export const users = [

    {
        username: "enes",
        password: "1"

    },

    {
        username: "aysenur",
        password: "2"


    },

]


function Login() {
    return (

        <>

            <div>

                <div>
                    <p>Kullanici Adiniz</p>
                    <input type="text" />
                </div>

                <div>
                    <p>Sifreniz</p>
                    <input type="text" />
                </div>

                <button>Giris Yap</button>

            </div>

        </>
    )
}

export default Login
/*Disari cikartilanlar*/
