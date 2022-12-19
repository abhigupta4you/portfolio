import React from 'react'

function Footer() {
    return (
        <div className=' p-2 sm:text-3xl bg-slate-500 sm:p-5 text-center text-white '>

            <div className=' m-10 p-16 sm:text-end sm:text-xl flex justify-between '>
                <div>
                    <p> @{new Date().getFullYear()}.Copyright <br /> All Rights Reserved </p>

                </div>
                <div>
                    <p>PRIVACY POLICY. <br /> TERMS & CONDITIONS
                    </p>


                </div>
            </div>

        </div>
    )
}

export default Footer