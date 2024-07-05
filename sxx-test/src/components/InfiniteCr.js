import React from 'react'
import InfiniteCr1Comp from './InfiniteCr1Comp'

const InfiniteCr = () => {
  const componentsArray = Array.from({ length: 300 }, (_, index) => index);
  return (
    <div className="shinnex-carousel-container">
      <div className="shinnex-carousel ">
        {componentsArray.map((_, index) => (
          <InfiniteCr1Comp key={index} />
        ))}
      </div>
    </div>
  )
}

export default InfiniteCr