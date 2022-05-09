
import './info.css'

function Info() {
 return (
  <div className='users'>
    <div className='container'>
    <ul className='users__list'>
      <li className='users__item'>
      <img className='user-img' src="/img/userone.svg" alt="" />
      <div className='users__info'>
        <h3 className='users__title'>Get New Friends</h3>
        <p className='users__text'>You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!</p>
      </div>
      </li>
      <li className='users__item'>
      <img className='user-img' src="/img/usertwo.svg" alt="" />
      <div className='users__info'>
        <h3 className='users__title'>Expert and Fun Mentor</h3>
        <p className='users__text'>Learn with earnest and don't forget to get relax too. Learn and enjoy the materials or classes with our expert mentors.</p>
      </div>
      </li>
      <li className='users__item'>
      <img className='user-img' src="/img/userthree.svg" alt="" />
      <div className='users__info'>
        <h3 className='users__title'>Flexible Access</h3>
        <p className='users__text'>You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!</p>
      </div>
      </li>
    </ul>
    </div>
  </div>
 )
}

export default Info























