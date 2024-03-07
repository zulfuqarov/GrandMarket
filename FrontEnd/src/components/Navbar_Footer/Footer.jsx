import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

  return (

    <div className='bg-black w-full rounded-md'>
      <div className='container mx-auto'>
        <section className='mt-[80px] py-[50px]'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-[34px] font-semibold text-white max-[768px]:text-[20px]'>
              © 2013-23 | Grandmart supermarketlər şəbəkəsi
            </h1>
            <div>

              <img src="https://static.wixstatic.com/media/ae716c_3c71723485e14966bc32032bfd7b8db6~mv2.png/v1/crop/x_127,y_8,w_787,h_429/fill/w_210,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/grand_logo-2.png" alt="" />
            </div>
          </div>
          <div className='w-[100%] flex flex-row justify-center'>
            <div className='flex flex-row justify-between w-[90%] max-[991px]:pt-[30px] max-[1024px]:w-[100%] items-center max-[991px]:w-[80%] max-[991px]:flex-col'>
              <div className='flex w-[60%] max-[991px]:w-[100%] max-[768px]:flex-col max-[768px]:items-center justify-between'>

                <div className='py-[15px]'>
                  <p className='text-gray-400 font-light text-[17px] pb-[7px] max-[768px]:text-center'>Ünvan (baş ofis):                 <i className="ml-[5px] text-white fa-solid fa-location-dot fa-fade"></i>
                  </p>
                  <span className='text-[20px] text-white font-semibold'>Bəşir Bünyadov küçəsi 134,<br />
                    Bakı şəhəri, Azerbaycan</span>
                </div>

                <div className='py-[15px] '>
                  <p className='text-gray-400 font-light text-[17px] pb-[7px] max-[768px]:text-center'>Qaynar xətt: <i className="text-white ml-[5px] fa-solid fa-phone fa-shake"></i></p>
                  <span className='text-[20px] text-white font-semibold'>(051) 255 51 55 <br />
                    info@grandmart.az</span>
                </div>

              </div>

              <div className='flex flex-row justify-between items-center w-[300px]  max-[991px]:pt-[30px]'>
                <Link><i className="fa-brands fa-instagram text-red-300 text-[32px] max-[768px]:text-[20px]"></i></Link>
                <Link><i className="fa-brands fa-facebook text-blue-700 text-[32px] max-[768px]:text-[20px]"></i></Link>
                <Link><i className="fa-brands fa-linkedin text-blue-400 text-[32px] max-[768px]:text-[20px]"></i></Link>
                <Link><i className="fa-brands fa-twitter text-blue-500 text-[32px] max-[768px]:text-[20px]"></i></Link>
              </div>
            </div>
          </div>
          <div className='flex  flex-row justify-center max-[768px]:flex-col items-center  pt-[20px]'>
            <div className='flex flex-row justify-around items-center w-[60%] max-[768px]:w-[95%]'>
              <div>
                <Link className='text-gray-500 text-[18px]  max-[768px]:text-[17px] hover:text-white transition-all'>Haqqımızda <i className="ml-[10px] text-[15px] fa-solid fa-info"></i></Link>
              </div>
              <div>
                <Link className='text-gray-500 text-[18px]  max-[768px]:text-[17px] hover:text-white transition-all'>Endirimlər  <i className="ml-[10px] text-[15px] fa-regular fa-circle-check"></i></Link>

              </div>
              <div>
                <Link className='text-gray-500 text-[18px]  max-[768px]:text-[17px] hover:text-white transition-all'>Mağazalar <i className="ml-[10px] text-[15px] fa-solid fa-shop"></i></Link>
              </div>
            </div>
            <div className='flex flex-row justify-around items-center w-[40%] max-[768px]:w-[60%] max-[768px]:pt-[20px]'>
              <div>
                <Link className='text-gray-500 text-[18px] max-[768px]:text-[17px] hover:text-white transition-all'>Xəbərlər <i className="ml-[10px] text-[15px] fa-regular fa-newspaper"></i></Link>
              </div>
              <div>
                <Link className='text-gray-500 text-[18px] max-[768px]:text-[17px] hover:text-white transition-all'>Ana Səhifə <i className="ml-[10px] text-[15px] fa-solid fa-house"></i></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer