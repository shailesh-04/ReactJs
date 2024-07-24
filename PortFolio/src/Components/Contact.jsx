import React from 'react'

export default function Contact() {
  return (
    <section className='Contact'>
        <form action="" method="post" id='myFrom'>
            <h1>Contect <span>us</span></h1>
            <div className="txtBox">
                <input type="text" name="" id="" placeholder='Enter Name...'/>
                <input type="text" name="" id="" placeholder='Enter Email'/>
            </div>
            <div className="txtBox">
                <input type="text" name="" id="" placeholder='Enter Number..'/>
                <input type="text" name="" id="" placeholder='Enter Subject'/>
            </div>
            <div className="txtBox">
                <textarea  name="" id="" cols="43" rows="5" placeholder='Enter Your Massage..'></textarea>
            </div>
            <button className='btn'>Submit</button>
        </form>
    </section>
  )
}
