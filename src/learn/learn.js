
import './learn.css'

function Learn() {
  return(
    <div className='learn'>
      <div className='container'>
        <h2 className='learn-context'>What Do You Want to Learn?</h2>
        <p className='learn-subcontext'>Choose the right class as you need. Then enjoy studying.</p>
        <ul className='learn__list'>
          <li className='learn__item'>
             <img className='learn__img' src="/img/technology.png" alt="" />
             <span className='learn__company'>Technology</span>
             <h3 className='learn__title'>Digital Marketing Strategy</h3>
             <p className='learn__text'>This course aims to give you deeper understanding of core processes ...</p>
             <span className='learn__span'></span>
             <div className='learn__info'>
              <img className='learn__person-img' src="/img/joe.png" alt="" />
              <div>
                <h3 className='learn__subtitle'>Joey Piere</h3>
                <p className='learn__subtext'>Mentor</p>
              </div>
             </div>
             <button className='learn__btn'>Access Class</button>
          </li>
          <li className='learn__item'>
             <img className='learn__img' src="/img/design.png" alt="" />
             <span className='learn__company'>Design</span>
             <h3 className='learn__title'>Figma Fundamental</h3>
             <p className='learn__text'>These lessons and exercises will help you start designing with Figma ...</p>
             <span className='learn__span'></span>
             <div className='learn__info'>
              <img className='learn__person-img' src="/img/araya.png" alt="" />
              <div>
                <h3 className='learn__subtitle'>Araya Sheila</h3>
                <p className='learn__subtext'>Mentor</p>
              </div>
             </div>
             <button className='learn__btn'>Access Class</button>
          </li>
          <li className='learn__item'>
             <img className='learn__img' src="/img/coding.png" alt="" />
             <span className='learn__company'>Coding</span>
             <h3 className='learn__title'>HTML Fundamental</h3>
             <p className='learn__text'>Well organized and easy to make you understand tutorials with lots of ...</p>
             <span className='learn__span'></span>
             <div className='learn__info'>
              <img className='learn__person-img' src="/img/elisa.png" alt="" />
              <div>
                <h3 className='learn__subtitle'>Ellisa Ruth</h3>
                <p className='learn__subtext'>Mentor</p>
              </div>
             </div>
             <button className='learn__btn'>Access Class</button>
          </li>
          <li className='learn__item'>
             <img className='learn__img' src="/img/coding2.png" alt="" />
             <span className='learn__company'>Coding</span>
             <h3 className='learn__title'>Android App Development</h3>
             <p className='learn__text'>Take your Android coding skills to the next level, advanced Android app ...</p>
             <span className='learn__span'></span>
             <div className='learn__info'>
              <img className='learn__person-img' src="/img/wendy.png" alt="" />
              <div>
                <h3 className='learn__subtitle'>Joey Piere</h3>
                <p className='learn__subtext'>Mentor</p>
              </div>
             </div>
             <button className='learn__btn'>Access Class</button>
          </li>
        </ul>
        <button className='learn-showbtn'>Show All Classes</button>
      </div>
    </div>
  )
}

export default Learn


























