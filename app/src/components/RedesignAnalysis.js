import React from 'react'
import MITBefore from '../assets/MITBefore.png'
import MITDesktopMockup from '../assets/MITDesktopMockup.jpg'
import MITTabletMockup from '../assets/MITTabletMockup.jpg'
import MITPhoneMockup from '../assets/MITPhoneMockup.jpg'
import StyleGuide from '../assets/StyleGuide.png'
import WAVE from '../assets/WAVEResults.png'


 export const Intro = () => {
  return (
    <div>
        <h1>Re-Designing MIT's EECS PhD Application Log In Page</h1>
        <div class="action">
            <p>In this design project, I chose to update MIT's EECS PhD Application Log In Page due websie issues around accessibility, learnability, memorability, and usability.

            </p>
        </div>

    </div>
  )
}

export const DesignMotivation = () => {
    return (
      <div class="section">
        <h2>Why I Chose to Redesign This 🤭 </h2>
        <ol>
        <li><strong> Lots of disorganized text </strong><br/>
        The large mass of disorganized text is overwhelming and confusing, encouraging users not to read it before logging in which risk missing important application related information. 
        </li>

        <li><strong>Distrustful design</strong><br/>
        The design doesn’t match existing MIT webpages, so it is confusing to users who don’t know if they can trust it or if they are applying in the right place.</li>

        <li><strong>Lack of context aware design</strong><br/>
        Stress, nerves, and time-crunches are a regular part of the application process. The lack of visual flow compounds these challenges rather than alleviating them, forcing users to choose between reading all of the disorganized text or risk missing important information. Designing for users who are under stress or who may be trying to access the log in page in a hurry requires special design consideration that this interface lacks.</li>
        </ol>
      </div>
    )
  }

  export const DesignAnalysis = () => {
    return (
     <div>
      <div class="section">
        <h2>Analyzing Problems with the Efficiency, Learnability, and Memorability 🤔 </h2>
        <ul>
        <li><strong>Efficiency</strong> is difficult because...<br/>
        Disorganized text impairs visual flow and navigation. 
        </li>

        <li><strong>Learnability</strong> is hindered...<br/>
        Since this webpage has differences from the rest of MIT’s web interfaces, users' mental models of what MIT  content looks like is confused when they look at this. Users may struggle to trust the webpage or adjust their mental model. </li>

        <li><strong>Memorability</strong> is challenged since...<br/>
        The application page content doesn't have a clear call to action, and the log-in section is not explicit</li>
        </ul>
      </div>

      <div class="section">

      
      <h2>Design Goals 🌱 </h2>
      <p>To improve this, I sought to create a design that:</p>
        <ol>
            <li>
            Allows users quickly find relevant sections by adding clear headings to text sections
            </li>
            <li>Improve usability by making the log-in process intuitive with a clearly labeled section </li>
            <li> Builds trust by matching the aesthetic of other MIT websites</li>
            <li>Improves accessiblity by being  responsive to different layouts</li>
            <li>Is accessible by design, as measured by strong performance on the WAVE accessibilty checker</li>
        </ol>

        </div>


      </div>

    )
  }
  



  export const MockUps = () => {
    return (
        <div>
            <div class="action">
            <p>
            To address, these design issues, I created this visual style design guide and mock ups for desktop, tablet, and phone layouts.
            </p>
            </div>

            
            <div class="style-guide section">
            <h2>Style Guide</h2>
                <img src={StyleGuide} alt="MIT re-design style guide"/>
            </div>

            
            <div class="mockups section">
            <h2>Annotated Mock Ups</h2>
                <img class='img mockup-item-1' src={MITDesktopMockup} alt='MIT Mockup Desktop Layout'/>
                <img class='img mockup-item-2' src={MITTabletMockup} alt='MIT Mockup Tablet Layout'/>
                <img class='img mockup-item-3' src={MITPhoneMockup} alt='MIT Mockup Phone Layout'/>
            </div>
        </div>
    )
  }


export const Redesign = () => {
return (
    <div class="section">
    <h2><a href="https://selenajwilliams.github.io/mit-ui-makeover/">Re-Designed MIT EECS Log In Page</a></h2>
   <p class="action">
    You can view the website and test layout responsiveness <a href="https://selenajwilliams.github.io/mit-ui-makeover/"><u>here</u></a>
   </p>
    <embed class="redesigned-website"src="https://selenajwilliams.github.io/mit-ui-makeover/"></embed>
    </div>
)
}


export const WAVEResults = () => {
    return (
        <div class="section">
        <h2>WAVE Accessibilty Results</h2>
        <p class="action">I'd like to note that adding additional aria labels is an important step that is ideally done as the development process occurs, and would be the next thing I work on. 
        </p>
        <img class="img" src={WAVE} alt="WAVE accessibility results"/>
        </div>
    )
    }


export default function RedesignAnalysis() {
  return (
    <div class="RedesignAnalysis">
    <Intro/>
    
    {/* <h2><a href="https://selenajwilliams.github.io/mit-ui-makeover/">Re-Designed MIT EECS Log In Page</a></h2>
    <div class="overlay">
        <embed class="redesigned-website"src="https://selenajwilliams.github.io/mit-ui-makeover/"></embed>
    </div> */}
    <div class="section">
    <h2><a href="https://gradapply.mit.edu/eecs/apply/login/?next=/eecs/">Original MIT EECS Log In Page</a></h2>
    <div class="MIT-website-before">
        <img class='img' src={MITBefore} alt='MIT EECS Application Log In Desktop View'/>
    </div>

    </div>

    <DesignMotivation/>
    <DesignAnalysis/>
    <MockUps/>
    <Redesign/>
    <WAVEResults/>
    

    
    
    
    

    </div>
  )
}
