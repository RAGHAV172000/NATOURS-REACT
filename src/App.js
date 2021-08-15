import logo from './logo.svg';
import './App.css';
import Stripe from './stripe'
import Stripe1 from './stripe29'
import Stripe2 from './Stripe99';
import data from './data';
const image1="./img/nat-9.jpg";
const image2="./img/nat-8.jpg";
function App() {
  return (
    <>
    <div className="top">
        <div className="heading">
            <h1 id="typed">Our Tours</h1>
            <h2 className="type">Where Life Begins</h2>
            <a>Click Here</a>
        </div>
        <div className="nav">
            <button className="toggle-button">
                <span className="toggle-button__bar"></span>
                <span className="toggle-button__bar"></span>
                <span className="toggle-button__bar"></span>
            </button>
           
        </div>
    </div>
      <section className="row" data-aos="fade-up-right">
        
      <div className="row-heading">
            <h2 className="heading-secondary">
                Exciting tours for adventurous people
            </h2>
        </div>
        <div className="row-content"><div className="row-text">
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui.
                </p>

                <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                </p>
            </div>
            </div>
            
            <div className="row-images">
            <img src="./img/nat-1.jpg"></img>
            </div>
                
            
            
        
  
      </section>
      
   <section className="section-features"  data-aos="fade-up-right">
                
    <div className="row1 ">
        {
            data.map((item)=>{
                return(
                    <div className="col">
            <div className="feature-box " data-aos="fade-up-right">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">{item.heading}</h3>
                <p className="feature-box__text">
                    {item.detais}
                </p>
            </div>
        </div>
                );
               
            })
        }
        </div>
</section>

<section id="plans">
    <h1 className="section-title">Choose Your Plan</h1>
    <div className="plan__list">
        <article className="plan" data-aos="flip-up">
            <h1 className="plan__title">FREE</h1>
            <h2 className="plan__price">$0/month</h2>
            <h3>For hobby projects or small teams.</h3>
            <ul className="plan__features">
                <li className="plan__feature">1 Workspace</li>
                <li className="plan__feature">Unlimited Traffic</li>
                <li className="plan__feature">10GB Storage</li>
                <li className="plan__feature">Basic Support</li>
            </ul>
            <div>
            
            <Stripe/>

            
                {/* <button className="button">CHOOSE PLAN</button> */}
            </div>
        </article>
        <article className="plan plan--highlighted" data-aos="flip-up">
            <h1 className="plan__annotation">RECOMMENDED</h1>
            <h1 className="plan__title">PLUS</h1>
            <h2 className="plan__price">$29</h2>
            <h3>For difficult tours.</h3>
            <ul className="plan__features">
                <li className="plan__feature">Living</li>
                <li className="plan__feature">Safety Guarantee</li>
                <li className="plan__feature">EXPLORE NATURE</li>
                <li className="plan__feature">Plus Support</li>
            </ul>
            <div>
                {/* <button className="button">CHOOSE PLAN</button> */}
                <Stripe2></Stripe2>
            </div>
        </article>
        <article className="plan plan3"data-aos="flip-up">
            <h1 className="plan__title">PREMIUM</h1>
            <h2 className="plan__price">$99/month</h2>
            <h3>Your enterprise solution.</h3>
            <ul className="plan__features">
                <li className="plan__feature">10 Workspaces</li>
                <li className="plan__feature">Unlimited Traffic</li>
                <li className="plan__feature">Unlimited Storage</li>
                <li className="plan__feature">Priority Support</li>
            </ul>
            <div>
                <Stripe1></Stripe1>
            </div>
        </article>
    </div>
  </section>
    <div className="slider">
        <h1>OUR REVIEWS</h1>
        <div className="image1" data-aos="fade-up-left">
        <img className="img-slider" src={image1} alt="" srcset=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae odit, quis ipsum neque ullam a?</p>
          
        </div>
            
                
        <div className="image2" data-aos="fade-up-left">
            <img  className="img-slider" src={image2} alt="" srcset=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae odit, quis ipsum neque ullam a?</p>
        </div>
    </div>
    <div className="footer">
        <img src="./img/logo-green-2x.png"/>
       
    </div>
    </>
  );
}

export default App;
