import React from 'react'

const Collections = (props) => {

    const {title, image1, image2, image3, image4, image5, image6} = props.gentsData
  return (
    <div className='collectionSection'>
        <h2>{title}</h2>
        <div className='menImages'>
            <img src={image1} alt='Men1' />
            <img src={image2} alt='Men2' /> 
            <img src={image3} alt='Men3' />
            <img src={image4} alt='Men4' />
            <img src={image5} alt='Men5' />
            <img src={image6} alt='Men6' />
        </div>
    </div>
  )
}

export default Collections