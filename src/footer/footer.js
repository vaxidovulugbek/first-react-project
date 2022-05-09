
import './footer.css'

function Footer() {
  return(
    <div className='footer'>
      <div className='container'>
       <div className='footer__content'>
        <div className='footer__info'>
            <a href='#'><img className='footer__logo' src="/img/logo.svg" alt="" /></a>
            <p className='footer__text'>Any feedback or questions? Contact us on our social media</p>
            <ul className='footer__iconlist'>
              <li className='footer__iconitem'><a href='#'><img className='footer__iconimg' src="/img/facebook.svg" alt="" /></a></li>
              <li className='footer__iconitem'><a href='#'><img className='footer__iconimg' src="/img/twitter.svg" alt="" /></a></li>
              <li className='footer__iconitem'><a href='#'><img className='footer__iconimg' src="/img/instagram.svg" alt="" /></a></li>
            </ul>
          </div>
          <ul className='footer__sublist'>
            <li className='footer__item'><a className='footer__itemlink activelink' href='#'>Menu</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Home</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Courses</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Webinar</a></li>
          </ul>
          <ul className='footer__sublist'>
            <li className='footer__item'><a className='footer__itemlink activelink' href='#'>Services</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Materials Update</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Trusted Mentor</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Free E-book</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Meeting</a></li>
          </ul>
          <ul className='footer__sublist'>
            <li className='footer__item'><a className='footer__itemlink activelink' href='#'>Further Information</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Terms & Conditions</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Privacy Policy</a></li>
          </ul>
          <ul className='footer__sublist'>
            <li className='footer__item'><a className='footer__itemlink activelink' href='#'>Apps Download</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>Google Play Store</a></li>
            <li className='footer__item'><a className='footer__itemlink' href='#'>App Store</a></li>
          </ul>
       </div>
       <p className='footer__endtext'>Copyright @ 2021 Sinauw. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

























