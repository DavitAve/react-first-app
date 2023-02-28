import { useEffect, useState } from 'react'
import dots from '../../../../assets/icons/menu-dots.png'
import './style.css'


const BulletMenu = ({items}) => {
      const [show, setShow] = useState(false) 

      return (
            <div className='relative'>
                  <div className='w-[20px] h-[20px] relative cursor-pointer'>
                        <img src={dots} alt="" className='ibg' onClick={() => {setShow(prev => !prev)}}/>
                  </div>
                  <div className={`menu ${show? '_active ' : ''}`}>
                        <ul className='menu__list'>
                              <li className='menu__item'>Item</li>
                              <li className='menu__item'>Item</li>
                              <li className='menu__item'>Item</li>
                        </ul>
                  </div>
            </div>
      )
}

export default BulletMenu