import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from "@react-spring/web";
import { MdOutlineClose } from "react-icons/md";


export const Modal = ({ showModal, text, close }) => {

  const animation = useSpring({
    config: {
      mass:1,
      tension: 210,
      friction: 17
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });


  return (
    <>
      {showModal ? (
        <animated.div 
              style={{...animation,
                zIndex:'10',
                backgroundColor:'#9CDBFF',
                position:'fixed',
                width:'35%',
                padding:'2em',
                borderRadius:'4px',
                top:'3em',
                height:'auto',
                fontSize:'1.15em',
                textAlign:'justify',
                minHeight:'68%',
                paddingTop:'1.5em',
                maxHeight:'70%',
                minWidth:'40%',
                overflow:'auto',
                overflowX:'hidden',
                lineHeight:'1.6'
               
              }} >
                        <div className="icon-container">
                <MdOutlineClose 
                    onClick={() =>{close()}}
                    style={{
                      cursor:'pointer',
                    }}
                />
                        </div>
          <div>
          {text}
       
          </div>
          </animated.div>
      ) : ''}
    </>
  );
};