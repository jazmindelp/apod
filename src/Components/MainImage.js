import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import LoadingImage from "./LoadingImage";

const MainImage = ({imageUrl, apod}) =>{

    const [open, setOpen] = useState(false);
  
    const [isLoaded, setIsLoaded] = useState(false);

    const isMounted = useRef(true);




  useEffect(() => {
    isMounted.current = true;
    return () => {
     isMounted.current =false;
     setIsLoaded(false)
    }
  }, [apod]);
  
    const handleLoadedImage = () =>{
        setIsLoaded(true);
        return
    }

    

    const imageStyle = !isLoaded ? {display: "none"} : {};
    const springProps = useSpring({
        
        scale: open ? 1.2 : 1})
 
return(

    <>
    {!isLoaded && <LoadingImage /> }
    <animated.div
            style ={{...springProps,
                        maxHeight: '70vh',
                        marginTop:'3.5em',
                        marginBottom:'1em',
                        zIndex:'10'
                    }}
            onMouseEnter={() => setOpen(true)}
            onMouseOut={() => setOpen(!open)}>

    <img src={imageUrl} alt="" className="image" onLoad={()=> handleLoadedImage()} style={imageStyle}/>
 </animated.div>
 </>
)  }

export default MainImage;