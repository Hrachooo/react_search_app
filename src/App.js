import 'bulma/css/bulma.css';
import { Fragment } from "react";
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


export default function App(){



    return(

        <Fragment>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title' >
                        Personal Digital Assitents
                    </p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title='Alexa' 
                            handle='@Alexa99' color="red" 
                            image={AlexaImage} 
                            alt="Alexa image"
                            description="Alexa is Amazon's cloud-based voice service available on more than 100 million devices "
                            />         
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title='Cortana'
                             handle='@Cortana12' 
                             color="blue"
                              image={CortanaImage} 
                              alt="Cortana image"
                              description="Coranta helps you save time and focus attention on what matters most."  
                              />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title='Siri'
                             handle='@Siri101'
                              color="green" 
                              image={SiriImage}
                              alt="Siri image"
                              description="Siri is Apple's virtual assistant, that uses voice recognition"  
                              />         
                        </div>
                        
                    </div>
                </section>
            </div>
    
        </Fragment>
    )
}