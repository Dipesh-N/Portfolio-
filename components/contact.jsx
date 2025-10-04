'use client'
import React, {use, useState} from 'react'

const contact = () => {

     const [result, setResult] = useState(" ");

   const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "913312ca-7a22-4f50-81bc-fb67ea585cbf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
    
    <div>
        <h1 className='text-center text-5xl font-sans '>Contact</h1>

        <h3 className=' text-blue-700 text-left mx-100 text-2xl mt-10 mb-6'>Connect with me </h3>

    </div>

    <form onSubmit = {onSubmit} className='max-w-xl mx-auto'>
        <div className=' flex flex-col gap-4 '>
            <input 
            type="text" 
            placeholder='Enter your name' 
            required 
            name = "name"
            className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white'/>

            <input 
            type="email" 
            placeholder='Enter your email' 
            required
            name = "email"
            className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white '/>

        </div>

        <textarea name="message " rows={6} placeholder='Enter your message' required 
        className='w-full flex-1 p-5 border-[0.5px] border-grey-400 bg-white mt-5 rounded-md'></textarea>

        <button type='submit' className='py-2 px-4 text-white bg-black/80 border-[0.5] rounded-md   mt-5   hover:bg-black duration-500 '>Submit</button>

    </form>

    <p className='mt-9 mx-100 font-semibold '>
        {result}
    </p>



    </>
  )
}

export default contact
