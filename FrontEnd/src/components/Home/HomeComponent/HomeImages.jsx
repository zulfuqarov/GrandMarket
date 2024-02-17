import React from 'react'

const HomeImages = () => {
    return (
        <div className='container mx-auto'>
            <section className='pt-[80px]'>
                <div className='flex flex-row max-[768px]:flex-col space-x-10 max-[768px]:space-x-0 justify-center items-center'>
                    <div className='basis-1/2 flex justify-center items-center'>
                        <img className='max-[768px]:w-[315px]' src="https://static.wixstatic.com/media/ae716c_73eb7f00d9634befb9e194070590922d~mv2.png/v1/fill/w_532,h_596,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ae716c_73eb7f00d9634befb9e194070590922d~mv2.png" alt="" />
                    </div>
                    <div className='basis-1/2 flex justify-center items-center max-[768px]:mt-[20px]'>
                        <img className='max-[768px]:w-[315px] max-[]:' src="https://static.wixstatic.com/media/ae716c_a5d7dffbda76452db4a003466148e240~mv2.png/v1/fill/w_532,h_596,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ae716c_a5d7dffbda76452db4a003466148e240~mv2.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeImages
