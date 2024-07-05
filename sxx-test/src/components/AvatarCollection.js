const AvatarCollection = () => {
  const TopCharacters = [
    "Ereh","Armin","Hange","Levi"
  ];
  const BottomCharacters = [
    "Mikasa","Riner","Erwin","Annie"
  ];
  return (
    <section id="avatars">
      <div data-aos="fade-up" className="container">
        <h3
          className="maintitle big"
          data-text="OUR AVATARS"
          data-align="center"
          style={{ fontFamily: "font1", margin: "4rem 0" }}
        >
          OUR AVATARS
        </h3>
        <div className="avatar_collection">
          <div className="collection_top">
            {TopCharacters.map((item, index)=>{
              return(
                <div key={index} className="item">
                <div className="item_in">
                  <div className="img">
                    <div
                      className="abs_img"
                      data-bg-img={`"/img/wavatar/${item}.webp"`}
                    />
                    <img src="/img/1x1.jpg" alt="" />
                  </div>
                </div>
              </div>
              )
            })}
          </div>
          <div className="collection_bottom">

            {BottomCharacters.map((item, index)=>{
              return(
                <div key={index} className="item">
                <div className="item_in">
                  <div className="img">
                    <div
                      className="abs_img"
                      data-bg-img={`"/img/wavatar/${item}.webp"`}
                    />
                    <img src="/img/1x1.jpg" alt="" />
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
export default AvatarCollection;
