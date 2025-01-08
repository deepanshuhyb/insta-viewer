import React from 'react'
// data = Array.from(props);
// list.has
function GetRez ({ links }) {
  return (
    <div className='grid grid-cols-1  md:grid-cols-4 gap-4 py-10 h-fit md:gap-16'>
      {links.map(link => {
        return !link['video']? (
          <>
              <video src={link?.video} key={link.video} controls className='rounded-lg w-48'></video>
            {/* {link['video'].map((video, index) => {
              console.log(video.url);
              return index === 0 ? (
              ) : null
            })} */}
          </>
        ) : link['image'] ? (
          <>
          {
            <img src={link.image} alt='' key={link.image} className='rounded-lg h-80 w-48 md:h-96' />
          //   link['image']['candidates'].map((image,index) => {
          //     console.log(image.url);
          //       return index === 0 ? (
          //       ): null
          //   })
          }
          </>
        ) : null
      })}
    </div>
  )
}

export default GetRez
