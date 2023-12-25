import HoverCarousel from "hover-carousel";
import './css/header.css'

const Carousel = () => {
  const images = [
    "https://www.boat-lifestyle.com/cdn/shop/files/Without_Personalization_WEB_Banner_1440x.jpg?v=1703225496",
    "https://www.boat-lifestyle.com/cdn/shop/files/Ion_Banner_WEB_5fa902ce-7c71-4c80-873d-61c77012f7b5_1440x.gif?v=1702972067",
    "https://www.boat-lifestyle.com/cdn/shop/files/Crest-banner-dark-desktop_1600x.png?v=1699269025",
    "https://www.boat-lifestyle.com/cdn/shop/files/Lunar_TIgon_WEB_Banner_1440x.jpg?v=1701333079",
    "https://www.boat-lifestyle.com/cdn/shop/files/121v2plus_WEB_1440x.jpg?v=1702876556"
    // Add more image URLs here
  ];

  return (
    <div className="carousal">
      <HoverCarousel images={images} />
    </div>
  );
};

export default Carousel;