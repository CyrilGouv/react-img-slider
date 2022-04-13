import { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { img } from '../data'


const Slider = () => {

    const [image, setImage] = useState(img)
    const [index, setIndex] = useState(0)

    // Detect when index change if we are in the first or last slide
    useEffect(() => {

      const lastIdx = image.length - 1

      if (index < 0) {
        setIndex(lastIdx)
      }

      if (index > lastIdx) {
        setIndex(0)
      }

    }, [index, image])


    // Handle autoplay
    useEffect(() => {
      const slider = setInterval(() => {
        setIndex(index + 1)
      }, 3000)

      return () => clearInterval(slider)
    }, [index])

    return (
        <div className="Slider">
          <ul className="slider__img">
            {
              image.map((item, idx) => {

                let position = 'next'

                if (idx === index) {
                  position = 'current'
                }

                if ((idx === image.length - 1 && index === 0) || idx === index - 1) {
                  position = 'prev'
                }

                return (
                  <li key={ item.id } className={ position }>
                    <img src={ item.target } alt="visit us" />
                  </li>
                )
              })
            }
          </ul>
          <div className="slider__controllers">
            <button className='slider__controllers--left' onClick={ () => setIndex(index - 1) }><FaAngleLeft /></button>    
            <button className='slider__controllers--right' onClick={ () => setIndex(index + 1) }><FaAngleRight /></button> 
          </div>
        </div>
    )
}

export default Slider