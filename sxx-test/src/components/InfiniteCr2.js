import React from 'react'

const InfiniteCr2 = () => {
    const componentsArray = Array.from({ length: 100 }, (_, index) => index);
    return (
        <div className="shinnex-carousel-container2">
            <div className="shinnex-carousel2 ">
            <div className="shinnex-carousel ">
        {componentsArray.map((_, index) => {
            return(
                <>
                <div className="shinnex-carousel-item2">
                    <img src="img/wInfLoop/1.webp" />
                </div>
                <div className="shinnex-carousel-item2">
                    <img src="img/wInfLoop/2.webp" />
                </div>
                <div className="shinnex-carousel-item2">
                    <img src="img/wInfLoop/3.webp" />
                </div>
                <div className="shinnex-carousel-item2">
                    <img src="img/wInfLoop/4.webp" />
                </div>
                <div className="shinnex-carousel-item2">
                    <img src="img/wInfLoop/5.webp" />
                </div>
                <div className="shinnex-carousel-item2">
                    <img src="img/wInfLoop/6.webp" />
                </div>
                <div className="shinnex-carousel-item2">
                    <img src="img/wInfLoop/7.webp" />
                </div>
                </>
            )
        })}
      </div>
            </div>
        </div>
    )
}

export default InfiniteCr2