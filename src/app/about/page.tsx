'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import { Loader2, Download } from 'lucide-react';

interface BrandContent {
  title: string;
  content: string;
  images: { url?: string; thumbnail?: string }[];
}

export default function AboutPage() {
  const [brandData, setBrandData] = useState<BrandContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/brand-introduction')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.message);
        }
        setBrandData(data);
      })
      .catch(err => {
        console.error('Failed to fetch brand introduction:', err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              品牌简介
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              了解G-ART谷亚的品牌故事与发展历程
            </p>
          </div>

          {/* Content */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              <span className="ml-3 text-gray-600">加载中...</span>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600">加载失败：{error}</p>
              <a
                href="/brand-introduction.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
              >
                <Download className="w-4 h-4 mr-2" />
                下载PDF文档
              </a>
            </div>
          )}

          {brandData && (
            <div className="space-y-12">
              {/* Brand Title */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{brandData.title}</h2>

                {/* Content Sections */}
                <div className="prose prose-lg max-w-none">
                  {brandData.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.trim()) {
                      return (
                        <p key={index} className="text-gray-700 leading-relaxed mb-6">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Images */}
                {brandData.images && brandData.images.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">品牌形象</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {brandData.images.map((image, index) => (
                        image.url && (
                          <img
                            key={index}
                            src={image.url}
                            alt={`品牌形象 ${index + 1}`}
                            className="rounded-lg shadow-md w-full h-auto object-cover"
                          />
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Download Link */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <a
                    href="/brand-introduction.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    下载完整品牌介绍PDF
                  </a>
                </div>
              </div>

              {/* Brand Story Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">品牌理念</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: '创新',
                      description: '持续技术创新，引领行业发展',
                      icon: '💡',
                    },
                    {
                      title: '品质',
                      description: '严控产品质量，打造行业标杆',
                      icon: '✨',
                    },
                    {
                      title: '服务',
                      description: '以客户为中心，提供优质服务',
                      icon: '🤝',
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
