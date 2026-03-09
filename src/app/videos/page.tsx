'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import { Play, Clock, Eye, Calendar } from 'lucide-react';

const videoCategories = [
  { id: 'all', name: '全部视频' },
  { id: 'product', name: '产品展示' },
  { id: 'case', name: '案例实拍' },
  { id: 'tech', name: '技术讲解' },
];

const videos = [
  {
    id: 1,
    title: 'G-ART谷亚品牌宣传片',
    category: 'product',
    thumbnail: '📺',
    duration: '3:45',
    views: '12.5K',
    date: '2025-01-15',
    description: '全面展示G-ART谷亚品牌形象、产品实力和服务理念',
  },
  {
    id: 2,
    title: '室内P1.2全彩LED屏产品演示',
    category: 'product',
    thumbnail: '🖥️',
    duration: '2:30',
    views: '8.2K',
    date: '2025-01-10',
    description: '展示室内P1.2全彩LED屏的高清画质和优异性能',
  },
  {
    id: 3,
    title: '商业广场LED幕墙案例实拍',
    category: 'case',
    thumbnail: '🏢',
    duration: '4:15',
    views: '15.3K',
    date: '2024-12-28',
    description: '上海商业广场LED幕墙项目现场实拍，震撼视觉效果',
  },
  {
    id: 4,
    title: 'COB小间距LED屏技术讲解',
    category: 'tech',
    thumbnail: '🔬',
    duration: '5:20',
    views: '6.7K',
    date: '2024-12-20',
    description: '深入讲解COB封装技术和小间距LED屏的优势',
  },
  {
    id: 5,
    title: '体育场LED显示屏安装过程',
    category: 'case',
    thumbnail: '🏟️',
    duration: '6:00',
    views: '9.1K',
    date: '2024-12-15',
    description: '记录大型体育场LED显示屏的完整安装过程',
  },
  {
    id: 6,
    title: '户外LED屏防水防尘测试',
    category: 'tech',
    thumbnail: '🌧️',
    duration: '3:50',
    views: '7.8K',
    date: '2024-12-10',
    description: '户外LED屏在极端天气条件下的防水防尘性能测试',
  },
  {
    id: 7,
    title: '智能控制系统操作演示',
    category: 'tech',
    thumbnail: '🎛️',
    duration: '4:30',
    views: '5.4K',
    date: '2024-12-05',
    description: '展示LED显示屏智能控制系统的便捷操作',
  },
  {
    id: 8,
    title: '高端酒店宴会厅LED案例',
    category: 'case',
    thumbnail: '🏨',
    duration: '3:20',
    views: '6.2K',
    date: '2024-11-28',
    description: '五星级酒店宴会厅LED背景墙精美效果展示',
  },
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const filteredVideos =
    selectedCategory === 'all'
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              视频专区
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              通过视频了解G-ART谷亚的产品、案例和技术
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg inline-flex flex-wrap gap-1">
              {videoCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                {/* Video Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl">{video.thumbnail}</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Play className="w-6 h-6 text-blue-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {video.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {video.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Player Modal */}
          {selectedVideo && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <div
                className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-9xl">
                    {videos.find((v) => v.id === selectedVideo)?.thumbnail}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {videos.find((v) => v.id === selectedVideo)?.title}
                  </h2>
                  <p className="text-gray-600">
                    {videos.find((v) => v.id === selectedVideo)?.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              想要了解更多？
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              联系我们，获取更多产品信息和定制化解决方案
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg"
            >
              联系我们
              <Play className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
