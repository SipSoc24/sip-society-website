import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { ChevronRight, ChevronLeft, Instagram } from 'lucide-react';

const instagramPosts = [
  {
    imageUrl: "https://static.wixstatic.com/media/c73eb8_83f70b2257dc4e54996b1b5d63b0633d~mv2.jpg",
    caption: "Crafting moments, one cocktail at a time 🍸✨",
    likes: 124,
  },
  {
    imageUrl: "https://static.wixstatic.com/media/c73eb8_9cf6ed05513c4191ac867e2f09a604bd~mv2.jpg",
    caption: "When the night calls for something special 🌙",
    likes: 98,
  },
  {
    imageUrl: "https://static.wixstatic.com/media/c73eb8_0d60b0b0ec714a70a977a9c3c8a9dbd7~mv2.jpg",
    caption: "Your event deserves the best. Let us handle the drinks! 🎉",
    likes: 156,
  },
  {
    imageUrl: "https://static.wixstatic.com/media/c73eb8_19ca302ac5444fea96040bf0a6c5b2ef~mv2.png",
    caption: "Elevating your experience with premium service 🥂",
    likes: 203,
  }
];

export function Portfolio() {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="portfolio" className="py-20 bg-dark text-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl">Latest from Instagram</h2>
          <a 
            href="https://www.instagram.com/sipsociety24/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-light/80 hover:text-light transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span>@sipsociety24</span>
          </a>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="!overflow-visible"
          >
            {instagramPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden rounded-xl aspect-square">
                  <img 
                    src={post.imageUrl} 
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-light mb-4">{post.caption}</p>
                      <span className="text-light/80 text-sm">❤️ {post.likes} likes</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button 
            onClick={() => swiper?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-light/10 hover:bg-light/20 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-8 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-light" />
          </button>

          <button 
            onClick={() => swiper?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-light/10 hover:bg-light/20 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-8 z-10"
          >
            <ChevronRight className="w-6 h-6 text-light" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.instagram.com/sipsociety24/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-light/80 hover:text-light transition-colors duration-300"
          >
            <span>View More on Instagram</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}