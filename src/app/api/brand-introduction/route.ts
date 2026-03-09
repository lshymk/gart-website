import { NextRequest, NextResponse } from 'next/server';
import { FetchClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function GET(request: NextRequest) {
  try {
    // 提取请求头信息
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);

    // 初始化配置和客户端
    const config = new Config();
    const client = new FetchClient(config, customHeaders);

    // 获取PDF URL
    const pdfUrl = 'https://coze-coding-project.tos.coze.site/create_attachment/2026-03-09/3692635158231819_19942715a8d14bdd4aee955ef7f919f3_0521%E5%BC%BA%E5%8A%9B%E5%B7%A8%E5%BD%A9&%E8%B0%B7%E4%BA%9AG-ART%E5%93%81%E7%89%8C%E6%8E%A8%E4%BB%8BPPT-%E7%A1%AE%E8%AE%A4.pdf?sign=4895091024-ee11d96c37-0-30a9cb0d52d5fc01a68062a455e56dac83e35f93e3753a6d8a82535dda02dcb2';

    // 调用SDK获取PDF内容
    const response = await client.fetch(pdfUrl);

    // 检查响应状态
    if (response.status_code !== 0) {
      return NextResponse.json(
        { error: 'Failed to fetch PDF content', message: response.status_message },
        { status: 500 }
      );
    }

    // 提取文本内容
    const textContent = response.content
      .filter(item => item.type === 'text')
      .map(item => item.text)
      .join('\n');

    // 提取图片信息
    const images = response.content
      .filter(item => item.type === 'image')
      .map(item => ({
        url: item.image?.display_url,
        thumbnail: item.image?.thumbnail_display_url,
      }));

    return NextResponse.json({
      title: response.title || 'G-ART 谷亚品牌介绍',
      content: textContent,
      images: images,
      url: response.url,
    });
  } catch (error) {
    console.error('Error fetching PDF content:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
