import Img from '../../../../assets/images/circle-loading.png'
import './style.css'

const CircleLoader = () => {
      return (
            <div>
                  <div className='loader relative w-[240px] h-[240px]'>
                        <img src={Img} className="ibg" alt="" />
                  </div>
            </div>
      )
}

export default CircleLoader