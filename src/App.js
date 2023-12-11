import React from 'react';
import './App.css';
function App() {
              
  return (
    <div className="App">
      <h1>先驱者科学前沿站</h1>
      <p className="intro-text">本站供各位先驱者体验各类AI前沿技术</p>
      <div className="quote-container">
        <div className="quote">
          <p><em>人工智能是人类最伟大的发明，也是最危险的挑战。</em></p>
          <p className="author">——斯蒂芬·霍金</p>
        </div>
        <div className="version-container">
          <p><span>站点版本：v2.0.0</span> <span><a href="https://raw.gitmirror.com/cyrusreed/Cyrus-website/main/public/logs/Cyrus-website.txt" className="version-link">查看更新日志</a></span></p>
      </div>
     </div>
      <div className="category editor-recommend">
        <div className="category-line">
          <span>🏅 编辑推荐 🏅</span>
        </div>
        <div className="project" id="chatgpt-next-web">
          <h2><img src="https://raw.gitmirror.com/cyrusreed/Cyrus-website/main/public/icons/ChatGPT by Cyrus.png" alt="ChatGPT Next Web Icon" className="project-icon" /> ChatGPT by Cyrus</h2>
          <p className="project-description">本站点基于 ChatGPT Web 开发，采用加密数据库实现了用户登录、注册和管理等功能，同时支持多端数据同步，对话记录与账号绑定，保护您的数据安全。普通访问可使用 GPT-3.5-Turbo 模型，资深访问可使用最先进的 GPT-4 模型。系统使用加密传输，后台无法获取您的任何消息记录，从而最大程度的保护了您的隐私安全。</p>
          <p className="project-description-mobile">本站点基于 ChatGPT Web 开发，采用加密数据库实现了用户登录、注册和管理等功能，同时支持多端数据同步，对话记录与账号绑定，保护您的数据安全。普通访问可使用 GPT-3.5-Turbo 模型，资深访问可使用最先进的 GPT-4 模型。</p>
          <div className="button-group">
            <a href="https://chatgpt-web.cyrus-reed.com" className="button">进入站点</a>
            <a href="https://raw.gitmirror.com/cyrusreed/Cyrus-website/main/public/faqs/ChatGPT by Cyrus.txt" className="button">查看教程</a>
          </div>
          <p className="small-text2">（首次使用建议观看）</p>
        </div>
        <p className="recommendation">推荐理由：功能丰富，拥有用户登录、注册和管理等多端数据同步功能，最高支持 GPT-4 模型，隐私安全。</p>
      </div>
        <div className="category">
          <div className="category-line">
          <span>原生类工具</span>
        </div>
        <div className="project" id="bing">
            <h2><img src="https://raw.gitmirror.com/cyrusreed/Cyrus-website/main/public/icons/Bing AI.png" alt="Bing AI Icon" className="project-icon" /> Bing AI</h2>
            <p>本站点基于 Next.js 重写，高度还原 New Bing Web 版 UI，提供了一致的用户界面体验，内置了 API 让您无需登录就可以开始聊天。同时，它的后端经过深度优化，响应速度与对话质量大幅提升。现已支持识图功能，Bing 可以根据用户上传的图片进行对话，无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加丰富。</p>
            <div className="button-group">
              <a href="https://bing.github1s.tk/" className="button">进入站点</a>
              <a href="https://raw.gitmirror.com/cyrusreed/Cyrus-website/main/public/faqs/Bing AI.txt" className="button">查看教程</a>
            </div>
            <p className="small-text">（首次使用建议观看）</p>
          </div>
        </div>
      <div className="category">
        <div className="category-line">
          <span>第三方工具</span>
        </div>
        <div className="project">
          <h2><img src="https://raw.gitmirror.com/cyrusreed/Cyrus-website/main/public/icons/ChatGPT by Cyrus.png" alt="ChatGPT Next Web Icon" className="project-icon" /> ChatGPT by Cyrus</h2>
          <p>本站点基于 ChatGPT Web 开发，采用加密数据库实现了用户登录、注册和管理等功能，同时支持多端数据同步，对话记录与账号绑定，保护您的数据安全。普通访问可使用 GPT-3.5-Turbo 模型，资深访问可使用最先进的 GPT-4 模型。系统使用加密传输，后台无法获取您的任何消息记录，从而最大程度的保护了您的隐私安全。</p>
          <div className="button-group">
            <a href="https://chatgpt-web.cyrus-reed.com" className="button">进入站点</a>
            <a href="https://raw.gitmirror.com/cyrusreed/Cyrus-website/main/public/faqs/ChatGPT by Cyrus.txt" className="button">查看教程</a>
          </div>
          <p className="small-text">（首次使用建议观看）</p>
        </div>
      </div>
      <p className="disclaimer">请注意：本站仅供学习交流，禁止产生任何敏感对话或图像等内容，否则将撤销使用权限，并自行承担任何后果。</p>
    </div>
  );
}
export default App;
