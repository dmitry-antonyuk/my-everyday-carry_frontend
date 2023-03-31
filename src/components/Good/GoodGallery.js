import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const GallerySlider = (props) => {
    return (
    <div className="clinic-section__gallery">
        <div className="gallery-slider">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                  {props.gallery.data.map(({id, attributes}) => (
                                <SwiperSlide key={id}>
                <img src={attributes.url} alt={`gallery image ${id}`} />
                                    </SwiperSlide>
            ))}
                {props.gallery.data.map(({id, attributes}) => (
                                <SwiperSlide key2={id}>
                <img src={attributes.url} alt={`gallery image ${id}`} />
                                    </SwiperSlide>
            ))}
            </Swiper>
            </div>
        </div>
    );
};
export default GallerySlider;