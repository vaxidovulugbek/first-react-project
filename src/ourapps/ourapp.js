
import './ourapp.css'

function Ourapps() {
  return(
   <div className='ourapp'>
     <div className='container'>
        <div className='ourapp__content'>
          <div>
            <h2 className='ourapp__title'>Get Our Apps, Now!</h2>
            <p className='ourapp__text'>Reach out our apps everywhere and everytime with Sinauw Mobile Application.</p>
            <div className='ourapp__company'>
              <a href='#'><img className='ourapp__google' src="/img/googleplay.png" alt="" /></a>
              <a href='#'><img className='ourapp__app' src="/img/appstore.png" alt="" /></a>
            </div>
          </div>

          <div className='ourapp__info'>
            <div className='ourapp__subinfo'>
              <div className='ourapp__infos'>
                <img className='ourapp__icon' src="/img/zipimg/user.png" alt="" />
                <div>
                  <h3 className='ourapp__name'>Hello, Alexander</h3>
                  <p className='ourapp__member'>Premium Member</p>
               </div>
              </div>
            <img className='ourapp__crown' src="/img/crown.png" alt="" />
            </div>

            <div className='ourapp__join'>
              <img className='ourapp_lampimg' src="/img/ziplamp/lamp.png" alt="" />
              <div>
                <p className='ourapp__jointext1'>Grow Your Skill, Join Now!</p>
                <p className='ourapp__jointext2'>We have something big for you who want to level up!</p>
              </div>
            </div>

           <div className='ourapp__pc'>
            <div className='ourapp__progres'>
                <img className='ourapp__progresimg' src="/img/progres.png" alt="" />
                <p className='ourapp__progrestext'>Courses Progress</p>
              </div>
              <div className='ourapp__collection'>
                <img className='ourapp__collectimg' src="/img/collection.png" alt="" />
                <p className='ourapp__collecttext'>Courses Progress</p>
              </div>
           <img className='ourapp__person1' src="/img/person1.png" alt="" />
           <img className='ourapp__person2' src="/img/person2.png" alt="" />
           <img className='ourapp__person3' src="/img/person3.png" alt="" />
           </div>

          </div>
        </div>
     </div>
   </div>
  )
}

export default Ourapps