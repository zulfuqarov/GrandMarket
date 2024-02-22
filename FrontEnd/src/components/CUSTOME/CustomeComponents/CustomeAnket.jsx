import React, { useState } from 'react'
import { TEInput, TERipple, TETextarea } from "tw-elements-react";
import axios from "axios"



const CustomeAnket = () => {

    const [input, setInput] = useState({
        Email: '',
        Name: '',
        Number: '+994 ',
        Text: ''
    })

    const [CheckInputs, setCheckInputs] = useState({
        CheckEmail: null,
        CheckName: null,
        CheckNumber: null,
        CheckText: null
    })

    const DisabledButton = () => {
        const CheckInputsArry = Object.values(CheckInputs)
        const CheckInputEvery = CheckInputsArry.every((oneEverey) => {
            return oneEverey === true
        })
        return (CheckInputEvery)
    }

    const InputRegular = (InputName, value) => {
        switch (InputName) {
            case "Name":
                if (value.length < 4) {
                    return (
                        setCheckInputs({
                            ...CheckInputs,
                            CheckName: false
                        })
                    )
                } else {
                    return (
                        setCheckInputs({
                            ...CheckInputs,
                            CheckName: true
                        })
                    )
                }
            case "Email":
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return (
                        setCheckInputs({
                            ...CheckInputs,
                            CheckEmail: true
                        })
                    )
                } else {
                    return (
                        setCheckInputs({
                            ...CheckInputs,
                            CheckEmail: false
                        })
                    )
                }
            case "Number":
                if (/^\+994\s?\d{2,3}(\s?\d{2,3}){2,3}$/.test(value)) {
                    return (
                        setCheckInputs({
                            ...CheckInputs,
                            CheckNumber: true
                        })
                    )
                } else {
                    return (
                        setCheckInputs({
                            ...CheckInputs,
                            CheckNumber: false
                        })
                    )
                }
            case "Text":
                if (value.length > 20) {
                    return (
                        setCheckInputs({
                            ...CheckInputs,
                            CheckText: true
                        })
                    )
                } else {
                    return (
                        setCheckInputs({
                            ...CheckInputs,
                            CheckText: false
                        })
                    )
                }
            default:
                alert('duzgun olunmadi')
                break;
        }
    }

    const handleChangeInput = (event) => {
        const { name, value } = event.target
        setInput({
            ...input,
            [name]: value
        })
        InputRegular(name, value)
    }

    const SendEmailSms = async (body) => {
        try {
            const Respons = axios.post("http://localhost:4444/api/Email", body)
            console.log((await Respons).data)
        } catch (error) {
            console.log(error)
        }
    }

    const FormOnSubmit = (event) => {
        event.preventDefault();
        if (DisabledButton()) {
            SendEmailSms(input)
            alert("Mesaj uğurla göndərildi geri dönüş olunacaq")
        } else {
            alert("Yerləri düzgün tammamlayın !!")
        }
    }

    return (
        <section className='pt-[80px]'>

            <header className='flex justify-center items-center '>
                <div>
                    <h1 className='text-[32px] font-bold text-gray-800 '>İrad və təkliflər</h1>
                </div>
            </header>

            <div className='flex flex-row pt-[60px] max-[911px]:items-center max-[911px]:flex-col'>
                <div className='basis-3/6  ml-[30px] max-[911px]:ml-[0px]'>
                    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <form onSubmit={FormOnSubmit}>
                            {/* <!--Name input--> */}
                            <TEInput
                                type="text"
                                label="*Ad,Soyad"
                                className="mb-6"
                                onChange={handleChangeInput}
                                value={input.Name}
                                name='Name'
                            ></TEInput>
                            <div className={`h-[0px]  overflow-y-hidden ${CheckInputs.CheckName !== false ? "" : 'h-[30px] text-red-500 overflow-y-visible mb-[20px] rounded-xl flex justify-center items-center'}  `}>
                                <h1 className='text-red-500 '>Adınız qısadır!</h1>
                            </div>
                            {/* <!--E-mail input--> */}
                            <TEInput
                                type="email"
                                label="*E-poçt"
                                className="mb-6 "
                                onChange={handleChangeInput}
                                value={input.Email}
                                name='Email'
                            ></TEInput>
                            <div className={`h-[0px]  overflow-y-hidden ${CheckInputs.CheckEmail !== false ? "" : 'h-[30px] text-red-500 overflow-y-visible mb-[20px] rounded-xl flex justify-center items-center'}  `}>
                                <h1 className='text-red-500 '>Email düzgün daxil ediniz !</h1>
                            </div>
                            {/* Contact nuber */}
                            <TEInput
                                type="nuber"
                                label="*Əlaqə nömrəsi"
                                className="mb-6"
                                onChange={handleChangeInput}
                                value={input.Number}
                                name='Number'
                            ></TEInput>
                            <div className={`h-[0px]  overflow-y-hidden ${CheckInputs.CheckNumber !== false ? "" : 'h-[30px] text-red-500 overflow-y-visible mb-[20px] rounded-xl flex justify-center items-center'}  `}>
                                <h1 className='text-red-500 '>Nömrəni düzgün daxil ediniz!</h1>
                            </div>
                            {/* <!--Message textarea--> */}
                            <div className="relative mb-6">
                                <TETextarea
                                    id="exampleFormControlTextarea13"
                                    label="Message"
                                    rows={3}
                                    onChange={handleChangeInput}
                                    value={input.Text}
                                    name='Text'
                                />
                                <div className={`h-[0px]  overflow-y-hidden ${CheckInputs.CheckText !== false ? "" : 'h-[30px] text-red-500 overflow-y-visible mb-[20px] mt-[20px] rounded-xl flex justify-center items-center'}  `}>
                                    <h1 className='text-red-500 '>İrad və Təkliflərinizi ətraflı yazın !</h1>
                                </div>
                            </div>

                            {/* <!--Checkbox--> */}
                            <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
                                <input
                                    className="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="exampleCheck10"
                                />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="exampleCheck10"
                                >
                                    Send me a copy of this message
                                </label>
                            </div>

                            {/* <!--Submit button--> */}
                            <TERipple rippleColor="light" className="w-full">
                                <button
                                    type="submit"
                                    className="inline-block rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                >
                                    Send
                                </button>
                            </TERipple>
                        </form>
                    </div>
                </div>
                <div className='basis-3/6 max-[911px]:pt-[30px] max-[911px]:w-[50%] max-[911px]:text-center'>

                    <div>
                        <h1 className='text-[20px]  text-red-700 font-semibold py-[20px]'>Hörmətli müştəri,</h1>
                    </div>
                    <span className='text-[18px] leading-[30px] max-[911px]:text-[17px] text-gray-700 inline-block py-[20px]'>Fəaliyyətimizlə bağlı har hansı irad və ya təklifiniz varsa, zəhmət olmazsa elektron formanı doldurun.</span>
                    <p className='text-[19px] max-[911px]:text-[18px] font-bold text-black py-[5px]'>Sizin sorğunuz 5 iş günü ərzində cavablandırılacaqdır.</p>
                    <span className='text-[18px] max-[911px]:text-[17px] text-gray-700 inline-block py-[20px]'>Məsul şəxs: Arzu Orduyeva, Kənan Şirinov.</span>
                    <span className='text-[18px] max-[911px]:text-[17px] text-gray-700 inline-block py-[20px]'>Əlaqə nömrəsi</span>
                    <span className='text-[18px] max-[911px]:text-[17px] text-gray-700 inline-block py-[20px]'>Tel.:   012 596 56 09</span>
                    <span className='text-[18px] max-[911px]:text-[17px] text-gray-700 inline-block py-[20px]'>Mob.: 055 355 13 34</span>

                </div>
            </div>

        </section>
    )
}

export default CustomeAnket