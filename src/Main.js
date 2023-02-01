
// 2YoLDcyjKt5JnsTm3MrZSyCjOHdPdCht671Bsffg


import "react-datepicker/dist/react-datepicker.css";


import { useEffect, useState } from "react";
import MainImage from "./Components/MainImage";
import { Modal } from "./Components/Modal";
import Intro from "./Components/Intro";



const Main = () =>{

  const [startDate, setStartDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const [apod, setApod] = useState({ imageUrl:'', title:'', hdUrl:'', text:""})

    const year = startDate.getFullYear();
    const month = startDate.getMonth() + 1;
    const day = startDate.getDate();



    const dateFormat = [year, month, day].join('-');


    const getImageRequest = async () =>{

        const url =`https://api.nasa.gov/planetary/apod?api_key=2YoLDcyjKt5JnsTm3MrZSyCjOHdPdCht671Bsffg&date=${dateFormat}`
    
        const response = await fetch(url);
        const responseJson = await response.json();
        setApod({ 
          imageUrl: responseJson.url,
          title: responseJson.title,
          hdUrl: responseJson.hdurl,
          text: responseJson.explanation

        })
      

        if(apod.imageUrl === false){
          return
        }
    }

    useEffect(() => {
      getImageRequest();
    }, [startDate])

   const closeModal = () =>{
    setShowModal(false)
   }


    if(apod.imageUrl){
        return(
          <div className="main" >
         <Intro startDate={startDate} setStartDate={setStartDate}/>
            <div className="page-container">
                
     
         <MainImage imageUrl ={apod.imageUrl} apod ={apod.imageUrl}/>
         <Modal showModal={showModal} close={closeModal} text={apod.text}/>
 <div className="static-text">
         <div className="title" style={{display:"block"}}>
            {apod.title}
         </div>

         <div className="options">
            <button 
                className="option-button"
                onClick={() => setShowModal(!showModal)}>
                Description
            </button>
           
            <button className="option-button">
              <a href={apod.hdUrl} target="_blank" rel="noopener noreferrer">HD Image</a>
            </button>
            
         </div>
  </div>

            </div>
            </div>
        )

    }

   
}

export default Main;

