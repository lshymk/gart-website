'use client';

import Navbar from '@/components/navbar';

export default function AboutPage() {
  const brandData = {
    title: 'G-ART 谷亚：高端LED显示屏解决方案提供商',
    content: `G-ART谷亚是一家专注于高端LED显示屏研发、生产与销售的现代化高新技术企业。公司成立于2010年，总部位于中国深圳，在北京、上海、广州、成都等城市设有分支机构。

经过十多年的发展，G-ART谷亚已成为LED显示行业的领军企业之一，拥有完整的产品研发、生产、销售和服务体系。公司产品涵盖室内全彩LED屏、室外LED屏、小间距LED屏等多个系列，广泛应用于广告媒体、舞台演出、体育赛事、交通指挥、监控中心、会议显示、展览展示等领域。

G-ART谷亚坚持以技术创新为核心竞争力，每年投入大量资金用于产品研发和技术创新。公司拥有一支由资深工程师和技术专家组成的研发团队，在LED显示技术、图像处理技术、节能环保技术等方面取得了多项突破性进展。公司拥有多项自主知识产权和专利技术，产品性能指标达到国际先进水平。

在产品质量方面，G-ART谷亚建立了严格的质量管理体系，从原材料采购到生产过程控制，再到成品检测，每一个环节都严格按照国际标准执行。公司通过了ISO9001质量管理体系认证、ISO14001环境管理体系认证、CE认证、ROHS认证等多项权威认证，确保产品质量的稳定性和可靠性。

G-ART谷亚秉承"以客户为中心"的服务理念，建立了完善的售前、售中、售后服务体系。公司拥有专业的技术支持团队，为客户提供从方案设计、产品选型、安装调试到维护保养的全流程服务。凭借优质的产品和服务，G-ART谷亚赢得了广大客户的信赖和好评，产品远销全球100多个国家和地区。

展望未来，G-ART谷亚将继续致力于LED显示技术的创新和发展，不断提升产品品质和服务水平，为客户创造更大的价值，为LED显示行业的发展做出更大的贡献。G-ART谷亚，与您共创美好视觉未来！`,
  };

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
        </div>
      </div>
    </div>
  );
}
