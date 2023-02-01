import { addDays, subDays } from "date-fns";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useSpring, animated } from '@react-spring/web'
import DatePicker from "react-datepicker";
const Intro = ({startDate, setStartDate}) =>{
    
const loading = useSpring({
    from: { opacity: 0.1,
            x: 0, },
    to: { opacity: 0.7,
         x: 3.5, },
    loop: true,
    config:{duration: 3000,
            mass: 5,
            tension: 180,
            friction: 12,
            precision: 0.01,
            velocity: 0,
           
            }
})
    return(
        
        <div className="apod-date">
           
      <div className="apod-title">Astronomy Picture of the Day</div>
         

<div className="picker-container">
<div className="pick-date">pick a date </div> 
<animated.div style={loading}>

<MdOutlineDoubleArrow color="white" style={{  marginRight: "1.5em", marginLeft:"0.2em", marginTop:'0.4em'}}/>
</animated.div>

<DatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)}
          maxDate={addDays(new Date(), 0)}
          minDate={subDays(new Date("1995/06/21"),0)}
          dateFormat="MM/dd/yyyy"
         popperPlacement="bottom"
          />
</div>

<div className="apod-description">
    <div className="discover">Discover the cosmos</div>
    <div className="intro">
      Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
    </div>
</div>
      </div>
      
    )
}

export default Intro;