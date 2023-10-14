const Banner = () => {
  return (
    <div className="bg-base-100">
      <div className="container mx-auto">
        <div className="carousel">
          <div id="slide1" className="carousel-item h-[50vh] md:h-auto relative w-full">
            <img
              src="https://cdn.shopify.com/s/files/1/0567/9503/7849/files/website-banner-desktop-landscape.jpg?v=1635135138"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item h-[50vh] md:h-auto relative w-full">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item h-[50vh] md:h-auto relative w-full">
            <img
              src="https://www.albertotorresi.com/cdn/shop/files/AT-New-Arrivals--banner_1000x.jpg?v=1694007944"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
