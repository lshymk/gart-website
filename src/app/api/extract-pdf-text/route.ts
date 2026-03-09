import { NextRequest, NextResponse } from 'next/server';
import { FetchClient, Config } from 'coze-coding-dev-sdk';

export async function GET(request: NextRequest) {
  try {
    const config = new Config();
    const client = new FetchClient(config);

    // 读取 PDF 文件（使用本地文件路径）
    const pdfUrl = 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2Fbrand-introduction.pdf&nonce=679e1aa5-c83c-4a23-896c-30df91f139dd&project_id=7615089984724074530&sign=a433baab78b5fc28baa1be616ffaac1b6dd701a1a3384f5007aeb15f1a1adc12';

    const response = await client.fetch(pdfUrl);

    if (response.status_code !== 0) {
      throw new Error(`Failed to fetch PDF: ${response.status_message}`);
    }

    // 提取纯文字内容
    const textContent = response.content
      .filter(item => item.type === 'text')
      .map(item => item.text)
      .join('\n');

    return NextResponse.json({
      success: true,
      title: response.title,
      content: textContent,
    });
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
