 import React from 'react'
 import '../../styles/ProductDispaly/ProductDisplay.scss'
 import ReactImageMagnify from 'react-image-magnify';
 import images from '../../images/black-friday-online-shopping-banner-online-shopping-mobile-phone-website-banner_42705-121.avif'
 const ImgZoom = () => {
   return (
     <>
      <div className='zoom_images' >
        <div className='zoom_container'>

        </div>
      </div>
      <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: images,
        height:500,
        
    },
    largeImage: {
        src: images,
        width: 1200,
        height: 1200
    },
enlargedImagePosition:'over',
imageClassName:'images-zoom',

}} />
     </>
   )
 }
 
 export default ImgZoom