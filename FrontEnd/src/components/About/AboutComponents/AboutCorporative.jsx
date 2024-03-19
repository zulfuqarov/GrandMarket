import React from 'react'

const AboutCorporative = () => {
    return (
        <section className='pt-[80px]'>
            <h2 className='text-[42px] text-center text-blue-500 font-semibold max-[991px]:text-[32px] max-[768px]:text-[26px]'>Korporativ dəyərlərimiz</h2>
            <div className='container mx-auto'>
                <div className='grid grid-cols-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 pt-[50px] gap-4'>
                    <div className='max-[768px]:pt-[30px]'>
                        <img src="https://bravosupermarket.az/site/assets/files/1049/1000.png" alt="" />
                        <div className='pt-[20px]'>
                            <p className='py-[15px] text-[22px] font-semibold'>Dürüstlük</p>
                            <span className='inline-block w-[350px] text-[18px] max-[1080px]:w-full text-gray-600 leading-relaxed'>Biznesimizin təməlində dürüstlüyə tam sadiqlik dayanır. Bizim üçün bu, həmişə və hər zaman, hətta heç kəsin müşahidə etmədiyi halda belə yalnız düzgün olan addımı atmaq deməkdir</span>
                        </div>
                    </div>
                    <div className='max-[768px]:pt-[30px]'>
                        <img src="https://bravosupermarket.az/site/assets/files/1052/1001.png" alt="" />
                        <div className='pt-[20px]'>
                            <p className='py-[15px] text-[22px] font-semibold'>Gəlirlilik</p>
                            <span className='inline-block w-[350px] max-[1080px]:w-full text-[18px] text-gray-600 leading-relaxed'>Biz öz səhmdarlarımızın və yekun etibarilə cəmiyyətin xeyrinə mənfəət və fayda yaradırıq. Əslində, bu gün qazanılan mənfəət gələcəkdə biznesin dayanıqlı və rəqabətədavamlı olmasına təminat verir</span>
                        </div>
                    </div>
                    <div className='max-[768px]:pt-[30px]'>
                        <img src="https://bravosupermarket.az/site/assets/files/1051/1003.png" alt="" />
                        <div className='pt-[20px]'>
                            <p className='py-[15px] text-[22px] font-semibold'>Sahibkarlıq ruhu</p>
                            <span className='inline-block w-[350px] max-[1080px]:w-full text-[18px] text-gray-600 leading-relaxed'>Ətrafımızdakı dünya daima dəyişməkdədir və buna görə də biz çox vaxt qeyri-müəyyənliklə işləməli oluruq.</span>
                        </div>
                    </div>
                    <div className='pt-[30px]'>
                        <img src="https://bravosupermarket.az/site/assets/files/1051/1003.png" alt="" />
                        <div className='pt-[20px]'>
                            <p className='py-[15px] text-[22px] font-semibold'>Keyfiyyət</p>
                            <span className='inline-block w-[350px] max-[1080px]:w-full text-[18px] text-gray-600 leading-relaxed'>Ətrafdakılar həmişə verdiyimiz məhsulun və ya göstərdiyimiz xidmətin keyfiyyətinə əsasən bizə qiymət verəcək. İşimizin keyfiyyəti heyətimizin fədakarlığı və peşəkarlığı ilə düz mütənasibdir.</span>
                        </div>
                    </div>
                    <div className='pt-[30px]'>
                        <img src="https://bravosupermarket.az/site/assets/files/1053/1004.png" alt="" />
                        <div className='pt-[20px]'>
                            <p className='py-[15px] text-[22px] font-semibold'>Əməkdaşlıq</p>
                            <span className='inline-block w-[350px] max-[1080px]:w-full text-[18px] text-gray-600 leading-relaxed'>Biz departamentlər, biznes bölmələri və ölkələr boyunca vahid komanda şəklində işləyərkən fenomenal nəticələrə nail oluruq.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCorporative
