
import './vebinar.css'

function Vebinar() {
  return(
   <div className='vebinar'>
     <div className='container'>
        <h2 className='vebinar-title'>Live Online Webinar</h2>
        <p className='vebinar-text'>You can stream Webinar live on our apps. Stay update on our Webinar, its Free!</p>
        <div className='vebinar-info'>
          <img className='vebinar-imgleft' src="/img/imac1.png" alt="" />
          <iframe className='vebinar-video' src="https://www.youtube.com/embed/OPaLnMw2i_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <img className='vebinar-imgright' src="/img/imac2.png" alt="" />
        </div>
     </div>
   </div>
  )
}

export default Vebinar



















