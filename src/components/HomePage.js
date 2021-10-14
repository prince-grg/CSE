import react from 'react';
import HOD from '../images/hod_sangal.jpg'
const HomePage =()=>{
    return (
        <div class="mid-section">
        <img id="hod_image" src={HOD} alt="HOD" width="250"/>

        <h1 className="quote">“The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.”</h1>
        <h2>HOD</h2>
        <h2>Sangal</h2> 
        </div>
    )
}
export default HomePage;