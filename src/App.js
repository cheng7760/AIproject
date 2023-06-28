import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>先驱者科学前哨站</h1>
      <div className="quote-container">
       <div className="quote">
        <p><em>人工智能是人类最伟大的发明，也是最危险的挑战。</em></p>
        <p className="author">——斯蒂芬·霍金</p>
       </div>
      </div>
      <div className="project">
        <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT.png" alt="ChatGPT Icon" className="project-icon" /> ChatGPT</h2>
        <p>本站点基于 ChatGPT 原生网站进行了定制，提供了一致的用户界面体验。同时，它的后端经过优化，使得聊天速度更快。本站点需要OpenAI账号或Access Token进行登录，Plus账号同步支持GPT-4、Web Browsing 和 Plugins 等模型。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加顺畅。</p>
        <div className="button-group">
          <a href="https://openai.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT.txt" className="button">查看教程</a>
        </div>
        <p className="small-text">（首次使用建议观看）</p>
      </div>
      <div className="project">
        <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/Bing AI.png" alt="Bing AI Icon" className="project-icon" /> Bing AI</h2>
        <p>本站点基于微软 New Bing 原生网站并进行了定制。这个平台提供了一致的用户界面体验，让您无需登录就可以开始聊天。它支持 ChatGPT 提示词，让您的聊天体验更加流畅。同时，您还可以使用画图等高级功能，为您的聊天添加更多的趣味和创造力。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的体验更加丰富和有趣。</p>
        <div className="button-group">
          <a href="https://bing.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/Bing AI.txt" className="button">查看教程</a>
        </div>
        <p className="small-text">（首次使用建议观看）</p>
           </div>
      <div className="project">
        <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT-Midjourney.png" alt="ChatGPT-Midjourney Icon" className="project-icon" /> ChatGPT-Midjourney</h2>
        <p>本站点基于 ChatGPT-Next-Web 开发，这个平台不仅支持原有的功能，还整合了 Midjourney 的各项功能，包括“想象”、“放大”、“变幻”、“识图”和“混图”等。此外，它还提供了实时的绘图进度显示和百分比，让您可以更直观地了解绘图的进度。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您体验到创作的乐趣。</p>
        <div className="button-group">
          <a href="https://chatgpt.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT-Midjourney.txt" className="button">查看教程</a>
        </div>
        <p className="small-text">（首次使用建议观看）</p>
      </div>
      <p className="disclaimer">请注意：本站仅供学习交流，禁止产生任何敏感对话或图像等内容，否则将撤销使用权限，并自行承担任何后果。</p>
    </div>
  );
}

export default App;
