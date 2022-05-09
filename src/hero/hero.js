
import './hero.css';

function Hero() {
  return(
    <div className='hero-content'>
    <div className='container'>
      <div className='hero'>
       <div>
          <img className='hero__studentimg' src="/img/hero-student.png" alt="" />
          <img className='hero__bookimg' src="/img/herobook.png" alt="" />
          <img className='hero__lampimg' src="/img/herolamp.png" alt="" />
          <div className='hero__join-student'>
            <img className='hero__students-imgs1 hero__student-activ' src="/img/hero-students1.png" alt="" />
            <img className='hero__students-imgs2 hero__student-activ' src="/img/hero-students2.png" alt="" />
            <img className='hero__students-imgs3 hero__student-activ' src="/img/hero-students3.png" alt="" />
            <img className='hero__students-imgs4 hero__student-activ' src="/img/hero-students4.png" alt="" />
            <button className='hero__joinbtn'>+</button>
            <p className='hero__join-text'>More than 80k+ Students <span className='hero__join-text-actic'>joined!</span></p>
          </div>
       </div>
       <div>
         <h1 className='hero__title'>Grow Your Skills To Advance Your Career Path.</h1>
         <p className='hero__text'>We have something big for you who want to level up!</p>
         <form className='hero__form'>
            <input className='hero__search' type="text" placeholder='What do you want to learn...'/>
            <img className='hero-searchimg' src="/img/herosearch.png" alt="" />
        </form>
        <span className='hero__sugges'>Suggestions</span>
        <ul className='hero__list'>
          <li><button className='hero__item-btn'>UI UX Design</button></li>
          <li><button className='hero__item-btn'>CSS Fundamental</button></li>
          <li><button className='hero__item-btn'>3D Design Illustration</button></li>
          <li><button className='hero__item-btn'>Website Development</button></li>
          <li><button className='hero__item-btn'>Logo Design</button></li>
          <li><button className='hero__item-btn'>Icon Design</button></li>
        </ul>
       </div>
      </div>
    </div>
  </div>
  )
}

export default Hero;



























