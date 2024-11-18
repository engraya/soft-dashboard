import React from 'react'

function PagesWrapper({children} : React.PropsWithChildren) {
  return (
    <div className='h-[900px] px-20 pt-24'>
      {children}
    </div>
  )
}

export default PagesWrapper