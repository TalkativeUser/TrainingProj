import React from 'react'
import Image from 'next/image'

import styles from './ArtificialIntelligence.module.css'


export default function ArtificialIntelligence({first_mainTitle,first_mainTitle2,first_paragraph,first_btnText,first_image_1,first_image_2,first_image_3}) {
  return (
    <div className= {` container text-white ${styles.Artificial_Intelligence} `} >

    <div className="row">
  
          <div className={`${styles.child1} col-lg-6 col-md-12 col-sm-12   `}>
  
  
                  <h2 className={styles.Artificial_Intelligence_h2} >{first_mainTitle} <span className={`${styles.Artificial_Intelligence_h2}` } style={{color:"#e7267a!important"}} >{first_mainTitle2}</span> </h2>
                  <p className={styles.Artificial_Intelligence_p}  >{first_paragraph} </p>
                  <button className={`${styles.Artificial_Intelligence_button} px-5 py-3 rounded-md mt-3`} >{first_btnText}</button>
  
  
        </div>
  
        <div className={`${styles.child2} col-lg-6 col-md-12 col-sm-12    `} >
  
                <div className={`${styles.roundedBorder} relative `}>
  
                <Image src={first_image_1.src} alt={first_image_1.alt} className={`m-auto `  } />
                <Image src={first_image_2.src} alt={first_image_2.alt} className={` ${styles.cyrcleImage}`} style={{position:"absolute", left:"52%", top:"43%", translate:"-50% -50%"}}/>
                <Image src={first_image_3.src} alt={first_image_3.alt} className={` ${styles.stars}`} />
  
                </div>
  
        </div>
  
    </div>
      
      </div>
  )
}
