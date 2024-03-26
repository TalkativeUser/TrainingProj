import React from 'react'
import ArtificialIntelligence from '../Components/ArtificialIntelligence/ArtificialIntelligence'
import 'bootstrap/dist/css/bootstrap.min.css'
import Ai_Image from '../../public/Allimages/ServicesImages/AIimage.png'
import borderCyrcle from '../../public/Allimages/ServicesImages/borderCyrcle.png'
import stars from '../../public/Allimages/ServicesImages/stars.png'
export default function Services() {
  return ( <>

<ArtificialIntelligence first_mainTitle='Artificial' 
                        first_mainTitle2='intelligence (AI)'
                                    
                        first_paragraph="Artificial intelligence (AI)
                                is a field of computer science that deals with the 
                                creation of intelligent ents, which are systems that
                                can reason, learn, and act autonomously. AI includes
                                a wide range of techniques, including machine learning,
                                  deep learning, natural language processing, and computer vision"
                        first_btnText='Contact Us'
                        first_image_1={{src:Ai_Image,alt:"Ai_Image"}}
                        first_image_2={{src:borderCyrcle,alt:"borderCyrcle"}}
                        first_image_3={{src:stars,alt:"stars"}}
                                      
                                                                        />


    
      </>
  )
}
