import React, { useState } from 'react'
import { TEInput, TERipple, TETextarea, TESelect } from "tw-elements-react";
import axios from 'axios'
const env = import.meta.env



const AdminAddProduct = () => {

  const data = [
    { text: "İçki", value: '1' },
    { text: "Süd,Səhər Yeməyi", value: 3 },
    { text: "Deterjan,Təmizlik", value: 4 },
    { text: "Dəftərxana Ləvazımatları", value: 5 },
    { text: "Elektronika", value: 6 },
    { text: "Atişdırmalıq", value: 7 },
    { text: "Tort,Bişmələr,Çörək", value: 8 },
    { text: "Təmal Qida", value: 9 },
    { text: "Meyvə,Tərəvəz", value: 10 },
    { text: "Ət,Toyuq,Balıq", value: 11 },
  ];

  const [statusError, setstatusError] = useState(null)
  const [Image, setImage] = useState(null)
  const [Input, setInput] = useState({
    Category: '',
    Name: ''
  })

  const handleChangeInputs = (e) => {
    const { name, value } = e.target
    setInput({
      ...Input,
      [name]: value
    })
  }


  const handleSelection = (e) => {
    setInput({
      ...Input,
      Category: e.text
    })
  };

  const AddDiscountProduct = async () => {
    try {
      const fileUpload = new FormData()
      fileUpload.append('image', Image)
      fileUpload.append('Name', Input.Name)
      fileUpload.append('Category', Input.Category)
      const res = await axios.post(`${env.REACT_APP_BACKEND_HOST}/Discount/DiscountPost`, fileUpload)
      console.log(res.data)
    } catch (error) {
      setstatusError(`${error.response.data.message}`)
    }
  }


  return (
    <div className='w-[85%]'>
      <h1 className='text-center text-[26px] text-blue-600 font-bold'>Endirimli Məhsulun Əlavəsi</h1>
      <div className='flex justify-center pt-[60px] items-center w-[100%]'>
        <form encType="multipart/form-data" action="#">
          <h1 className='text-center text-[18px] text-red-500 font-bold pb-[10px]'>{statusError}</h1>
          <TEInput
            type="text"
            label="*Məhsulun Adı"
            className="mb-6"
            onChange={handleChangeInputs}
            value={Input.Name}
            size="lg"
            name='Name'
          ></TEInput>
          <TESelect
            size="lg"
            data={data}
            onValueChange={handleSelection}
            name="Category"
            label="Kateqoriya"
          />
          <div className="mb-3 w-96 pt-[20px]">
            <label
              htmlFor="formFileLg"
              className="mb-2 font-bold inline-block text-red-700 dark:text-red-200"
            >
              Məhsulun Şəklini Seçin
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              id="formFileLg"
              type="file"
            />
          </div>

          <div className='w-full flex justify-end items-end'>
            <TERipple rippleColor="light">
              <button
                onClick={AddDiscountProduct}
                type="button"
                className="inline-block rounded mt-[20px]   bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Əlavə Et
              </button>
            </TERipple>
          </div>
        </form>
      </div>
    </div>

  )
}

export default AdminAddProduct