import React from 'react'
import FormComp from '../Components/FormComp/FormComp'

export default function ContactUs() {
  return (
<div className='py-7' >

<FormComp sectionName="contactUs" />

<div className="container  ">

  <div className="row">

    <div className="col-lg-6 py-24 ">
      <div className="innerCol">

        <ul>

          <li className='my-3 text-white text-2xl' > <i class="text-[#e7267a] me-4 fa-solid fa-location-dot"></i> Nile Street - Giza - Egypt</li>
          <li className='my-3 text-white text-2xl' > <i class="text-[#e7267a] me-3 fa-solid fa-phone"></i> +20 01155856594</li>
          <li className='my-3 text-white text-2xl' > <i class="text-[#e7267a] me-3 fa-regular fa-envelope-open"></i> altc@info.com</li>
        </ul>
      </div>
    </div>
    <div className="col-lg-6 py-24 ">
      <div className="innerCol">

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d259853.20894013785!2d31.453150185272786!3d30.154366827915986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1712245326550!5m2!1sar!2seg" width="00" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>
  </div>
</div>


</div>
  )
}
