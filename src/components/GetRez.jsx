import React from 'react'
// data = Array.from(props);

function GetRez ({ links }) {
  return (
    <div className='grid grid-cols-1  md:grid-cols-4 gap-4 py-10 h-fit md:gap-16'>
      {links.map(link => {
        return link['video_versions'] ? (
          <>
            {link['video_versions'].map((video, index) => {
              console.log(video.url);
              return index === 0 ? (
                <video src={video?.url} key={video.url} controls className='rounded-lg h-80 w-48 md:h-96'></video>
              ) : null
            })}
          </>
        ) : link['image_versions2'] && link['image_versions2']['candidates'] ? (
          <>
          {
            link['image_versions2']['candidates'].map((image,index) => {
              console.log(image.url);
                return index === 0 ? (
                    <img src={image.url} alt='' key={image.url} className='rounded-lg h-80 w-48 md:h-96' />
                ): null
            })
          }
          </>
        ) : null
      })}
    </div>
  )
}

export default GetRez
