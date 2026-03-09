'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
  interval?: number;
}

export default function Carousel({ images, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 自动轮播
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [interval, isPaused, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-[800px] overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 图片轮播 */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* 图片容器 - 确保完整显示 800px 高度 */}
            <div className="w-full h-[800px] relative">
              <img
                src={image}
                alt={`Carousel ${index + 1}`}
                className="w-full h-full object-contain"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            {/* 渐变遮罩 - 确保文字清晰可见 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        ))}

        {/* 左右导航按钮 */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 指示点 */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* 轮播文字 - 调整位置确保不被裁切 */}
        <div className="absolute bottom-32 left-8 right-8 md:left-16 md:right-16 text-white z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            G-ART 谷亚
          </h2>
          <p className="text-xl md:text-3xl text-white/95 drop-shadow-md">
            高端LED显示屏解决方案
          </p>
        </div>
      </div>
    </div>
  );
}
