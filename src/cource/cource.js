
import './cource.css'

function Cource() {
  return(
    <div className='cource'>
      <div className='container'>
        <h2 className='cource__title'>Course Pricing</h2>
        <p className='cource__text'>Choose pricing that suits to your need.</p>
        <ul className='cource__list'>
          <li className='cource__item'>
           <div className='cource__info'>
              <img className='cource__img' src="/img/star.png" alt="" />
                <div>
                  <h3 className='cource-item-title'>Free</h3>
                  <div>
                    <span className='cource__d'>$</span>
                    <span className='cource__price'>0</span>
                    <span className='cource__data'>/ month</span>
                  </div>
                </div>
           </div>
            <span className='cource__hr'></span>
            <ul className='cource__item-list'>
              <li className='cource__subitem'>Free e-book for every class</li>
              <li className='cource__subitem'>Materials update every day</li>
              <li className='cource__subitem'>Free download material videos</li>
              <li className='cource__subitem'>Unlock 5 material videos</li>
            </ul>
            <button className='cource__btn cource__btn1'>Your Current Package</button>
          </li>

          <li className='cource__item'>
           <div className='cource__info'>
              <img className='cource__img2' src="/img/key.png" alt="" />
                <div>
                  <h3 className='cource-item-title'>Express</h3>
                  <div>
                    <span className='cource__d'>$</span>
                    <span className='cource__price'>75</span>
                    <span className='cource__data'>/ month</span>
                  </div>
                </div>
           </div>
            <span className='cource__hr'></span>
            <ul className='cource__item-list'>
              <li className='cource__subitem'>Free e-book for every class</li>
              <li className='cource__subitem'>Materials update every day</li>
              <li className='cource__subitem'>Free download material videos</li>
              <li className='cource__subitem'>Meeting 2 times a week</li>
              <li className='cource__subitem'>Unlock 15 material videos</li>
            </ul>
            <button className='cource__btn cource__btn2'>Buy Express</button>
          </li>

          <li className='cource__item'>
           <div className='cource__info'>
              <img className='cource__img3' src="/img/crown.png" alt="" />
                <div>
                  <h3 className='cource-item-title'>Premium</h3>
                  <div>
                    <span className='cource__d'>$</span>
                    <span className='cource__price'>115</span>
                    <span className='cource__data'>/ month</span>
                  </div>
                </div>
           </div>
            <span className='cource__hr'></span>
            <ul className='cource__item-list'>
              <li className='cource__subitem'>Free e-book for every class</li>
              <li className='cource__subitem'>Materials update every day</li>
              <li className='cource__subitem'>Free download material videos</li>
              <li className='cource__subitem'>Private chat with mentor</li>
              <li className='cource__subitem'>Meeting 3 times a week</li>
              <li className='cource__subitem'>Unlock up to 30 material videos</li>
              <li className='cource__subitem'>Unlimited saved class</li>
            </ul>
            <button className='cource__btn'>Your Current Package</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Cource


















