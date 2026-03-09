import Link from 'next/link';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import Carousel from '@/components/carousel';
import { Suspense } from 'react';

export default function Home() {
  const carouselImages = [
    '/carousel-01.jpg',
    '/carousel-02.jpg',
    '/carousel-03.jpg',
    '/carousel-04.jpg',
    '/carousel-05.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section - 轮播图 */}
      <section>
        <Carousel images={carouselImages} interval={5000} />
      </section>

      {/* Brand Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img src="/logo.png" alt="G-ART Logo" className="h-24 mx-auto mb-8" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                G-ART 谷亚
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
              高端LED显示屏解决方案
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              专注于LED显示屏研发、生产与销售，致力于为客户提供高品质、高稳定性的显示产品
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                探索产品
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心优势
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              以技术创新为核心，以品质为生命线，打造行业领先的高端LED显示屏
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '✨',
                title: '卓越品质',
                description: '采用行业领先的LED芯片和封装技术，确保产品的高品质和长寿命',
              },
              {
                icon: '🎯',
                title: '精准定位',
                description: '专注于高端LED显示屏市场，为客户提供定制化的显示解决方案',
              },
              {
                icon: '🚀',
                title: '技术创新',
                description: '持续投入研发，拥有多项核心技术和专利，引领行业发展',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              产品中心
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              提供全方位的LED显示屏产品，满足不同场景的显示需求
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {[
              {
                title: '室内全彩LED屏',
                description: '高清显示，色彩鲜艳，适用于会议室、展览展示等室内场景',
              },
              {
                title: '室外LED屏',
                description: '高亮度，防水防尘，适应各种户外环境，清晰可视',
              },
              {
                title: '小间距LED屏',
                description: '超高清画质，近距观看无颗粒感，适合高端显示需求',
              },
            ].map((product, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-5xl">📺</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              查看更多产品
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              开启您的LED显示之旅
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              无论您需要什么样的LED显示屏解决方案，我们都能为您提供专业的产品和服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                联系我们
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                查看案例
                <Play className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="G-ART Logo" className="h-12 mb-4 opacity-80" />
              <p className="text-sm">高端LED显示屏解决方案</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="hover:text-white transition-colors">室内LED屏</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">室外LED屏</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">小间距LED屏</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">关于</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">品牌简介</Link></li>
                <li><Link href="/cases" className="hover:text-white transition-colors">案例展示</Link></li>
                <li><Link href="/videos" className="hover:text-white transition-colors">视频专区</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">联系方式</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">在线咨询</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 G-ART 谷亚. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
