'use client';

import Navbar from '@/components/navbar';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: '某大型商业广场LED幕墙项目',
    category: '户外LED屏',
    image: '🏢',
    description: '为某大型商业广场打造1000平方米的户外LED幕墙，成为城市的地标性建筑',
    location: '上海',
    date: '2025年',
    product: '户外P4全彩LED屏',
    details: {
      area: '1000㎡',
      resolution: '250K x 62.5K',
      brightness: '≥6500 nits',
      features: ['防水防尘', '高亮度显示', '节能环保', '远程控制'],
    },
  },
  {
    id: 2,
    title: '国际会议中心显示系统',
    category: '室内LED屏',
    image: '🏛️',
    description: '为国际会议中心提供完整的LED显示系统解决方案，包括主屏、侧屏和背景屏',
    location: '北京',
    date: '2025年',
    product: '室内P1.2全彩LED屏',
    details: {
      area: '200㎡',
      resolution: '4K超高清',
      refreshRate: '≥3840Hz',
      features: ['超高分辨率', '色彩还原', '低功耗', '易维护'],
    },
  },
  {
    id: 3,
    title: '体育场LED显示屏系统',
    category: '户外LED屏',
    image: '🏟️',
    description: '为大型体育场安装高清LED显示屏，满足现场观众和转播需求',
    location: '广州',
    date: '2024年',
    product: '户外P3全彩LED屏',
    details: {
      area: '300㎡',
      type: '双面显示',
      viewingAngle: '160°',
      features: ['高刷新率', '快速响应', '防水防尘', '稳定可靠'],
    },
  },
  {
    id: 4,
    title: '高端酒店宴会厅LED背景',
    category: '室内LED屏',
    image: '🏨',
    description: '为五星级酒店宴会厅打造精美的LED背景墙，提升宴会氛围',
    location: '深圳',
    date: '2024年',
    product: '室内P1.8全彩LED屏',
    details: {
      area: '50㎡',
      shape: '弧形设计',
      colorDepth: '16bit',
      features: ['色彩鲜艳', '轻薄美观', '安装便捷', '节能静音'],
    },
  },
  {
    id: 5,
    title: '智能交通指挥中心',
    category: '小间距LED屏',
    image: '🚦',
    description: '为智能交通指挥中心建设小间距LED显示系统，实时监控交通状况',
    location: '成都',
    date: '2024年',
    product: 'COB P0.9小间距LED屏',
    details: {
      area: '80㎡',
      resolution: '8K超高清',
      uptime: '7×24小时',
      features: ['极致画质', '长时间运行', '低功耗', '易维护'],
    },
  },
  {
    id: 6,
    title: '品牌旗舰店LED广告屏',
    category: '户外LED屏',
    image: '🏬',
    description: '为国际品牌旗舰店定制户外LED广告屏，吸引路人目光',
    location: '杭州',
    date: '2023年',
    product: '户外P5全彩LED屏',
    details: {
      area: '60㎡',
      shape: '曲面屏',
      control: '智能定时',
      features: ['高性价比', '易维护', '防水防尘', '远程控制'],
    },
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              案例展示
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              见证G-ART谷亚的优秀案例，探索LED显示的无限可能
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Case Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                    {caseStudy.image}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>

                {/* Case Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {caseStudy.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {caseStudy.date}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">使用产品</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {caseStudy.product}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Case */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">典型案例详情</h2>
                <p className="text-blue-100 text-lg mb-6">
                  深入了解我们的优秀案例，了解项目实施过程和成果
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold"
                >
                  联系我们获取案例详情
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">项目特点</h3>
                <div className="space-y-3">
                  {caseStudies[0].details.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: '成功案例' },
              { value: '50+', label: '城市覆盖' },
              { value: '10万+', label: '平方米安装' },
              { value: '99%', label: '客户满意度' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
