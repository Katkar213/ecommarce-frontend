
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Crousal(){
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("https://ecommerce-backend-new.onrender.com/api/finddata")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err, "error"));
    }, []);
    return(
        <div>
        <Carousel className="slider" 
        
         className="slider"
  infiniteLoop={true}
  useKeyboardArrows
  stopOnHover={false}
  showStatus={false}
  showIndicators={false}
  showThumbs={false}
  interval={3000}
  autoPlay={true}   >
           {
            data.filter((item)=>item.category==="crousal").map((images,index)=>
              {
              return(<div key={index}>
                <img src={images.download_url} alt="not found"/>
                </div>
              )
             
            })
           }


        </Carousel>
        </div>
    )
}
