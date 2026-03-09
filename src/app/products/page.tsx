'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import { Monitor, Sun, Tv, ChevronRight, Check } from 'lucide-react';

const productCategories = [
  {
    id: 'indoor',
    name: '室内LED屏',
    icon: Monitor,
    description: '高清显示，色彩鲜艳',
    products: [
      {
        name: '室内P1.2全彩LED屏',
        description: '超高分辨率，适用于高端会议室、监控中心等场景',
        features: ['像素间距1.2mm', '高对比度', '低功耗', '长寿命'],
        applications: ['会议室', '监控中心', '展览展示', '舞台背景'],
      },
      {
        name: '室内P1.8全彩LED屏',
        description: '高清显示，广泛应用于各类室内显示需求',
        features: ['像素间距1.8mm', '色彩还原度高', '维护方便', '性价比高'],
        applications: ['商场', '酒店', '展厅', '广告投放'],
      },
      {
        name: '室内P2.5全彩LED屏',
        description: '经济实惠，适合中小型室内场景',
        features: ['像素间距2.5mm', '稳定可靠', '安装简便', '价格优势'],
        applications: ['会议室', '餐厅', '门店', '指示屏'],
      },
    ],
  },
  {
    id: 'outdoor',
    name: '室外LED屏',
    icon: Sun,
    description: '高亮度，适应各种户外环境',
    products: [
      {
        name: '户外P3全彩LED屏',
        description: '高亮度显示，防水防尘，适应各种户外环境',
        features: ['像素间距3mm', '防水防尘', '高亮度', '稳定可靠'],
        applications: ['户外广告', '体育场馆', '交通指引', '广场'],
      },
      {
        name: '户外P4全彩LED屏',
        description: '远距离观看清晰，适合大型户外显示',
        features: ['像素间距4mm', '超高亮度', '防水防尘', '节能环保'],
        applications: ['大型广告牌', '楼体外墙', '高速公路', '车站'],
      },
      {
        name: '户外P5全彩LED屏',
        description: '经济实用，适合各种户外广告需求',
        features: ['像素间距5mm', '高性价比', '易于维护', '耐用性强'],
        applications: ['路边广告', '商场外立面', '社区宣传', '活动展示'],
      },
    ],
  },
  {
    id: 'cob',
    name: '小间距LED屏',
    icon: Tv,
    description: '超高清画质，近距观看无颗粒感',
    products: [
      {
        name: 'COB P0.9小间距LED屏',
        description: '极致画质，近距观看无颗粒感，适合高端显示',
        features: ['像素间距0.9mm', 'COB封装', '超高分辨率', '近距观看'],
        applications: ['高端会议室', '指挥中心', '高端展厅', '科研机构'],
      },
      {
        name: 'COB P1.2小间距LED屏',
        description: '高清显示，广泛应用于各类高端显示场景',
        features: ['像素间距1.2mm', '高对比度', '色彩鲜艳', '低功耗'],
        applications: ['监控中心', '电视台', '酒店大堂', '企业展厅'],
      },
    ],
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('indoor');

  const currentCategory = productCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              产品中心
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              提供全方位的LED显示屏产品，满足不同场景的显示需求
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg inline-flex flex-wrap gap-1">
              {productCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Cards */}
          {currentCategory && (
            <div className="space-y-8">
              {currentCategory.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">
                    {/* Product Image */}
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                      <div className="text-8xl">📺</div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                          产品特性
                        </h4>
                        <div className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-gray-600">
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                          应用场景
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href="/contact"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                      >
                        咨询详情
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              需要定制化解决方案？
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              我们可以根据您的具体需求，提供定制化的LED显示屏解决方案
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg"
            >
              联系我们
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
