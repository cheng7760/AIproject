import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
Modal.setAppElement('#root')
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState('');
  const tokens = ['fk-zxCNKBlN43ol28b-IaVSoknefze6E_fr0gwAW_OVI4w', 'fk-AtgLkErUojnEuYJLsva2JqgpBPNPD2DsBnn_ByfkJ-s', 'fk-aEimRxCjEBvacibdpSFZ-a9W4j2yhcmmlTLMMmgtVaI'];
  const handleOpenModal = () => {
    const randomToken = tokens[Math.floor(Math.random() * tokens.length)];
    setToken(randomToken);
    setIsOpen(true);
  }
  const handleCloseModal = () => {
    setIsOpen(false);
  }
  return (
  <div className="App">
    <h1>先驱者科学前沿站</h1>
    <div className="quote-container">
        <div className="quote">
          <p><em>人工智能是人类最伟大的发明，也是最危险的挑战。</em></p>
          <p className="author">——斯蒂芬·霍金</p>
        </div>
    <div className="version-container">
      <p>站点版本：v1.0.0</p>
      <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/logs/Cyrus-website.txt" className="version-link">查看更新日志</a>
    </div>
      <div className="category editor-recommend">
  <div className="category-line">
    <span>🏅 编辑推荐 🏅</span>
  </div>
  <div className="project">
  <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT Next Web.png" alt="ChatGPT Next Web Icon" className="project-icon" /> ChatGPT Next Web</h2>
  <p className="project-description">本站点基于 OPENAI API 开发，内置了 KEY 让您无需登录就可以开始聊天，现已支持并默认启用 GPT-4 模型，特点包括完整的 Markdown 支持，以及精心设计的 UI，响应式设计，支持深色模式，支持 PWA。此外，它还提供了预制角色功能，方便您进行个性化对话。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加流畅。</p>
  <p className="project-description-mobile">本站点基于 OPENAI API 开发，内置了 KEY 让您无需登录就可以开始聊天，现已支持并默认启用 GPT-4 模型，特点包括完整的 Markdown 支持，以及精心设计的 UI，响应式设计，支持深色模式，支持 PWA。</p>
    <div className="button-group">
      <a href="https://chatgpt-next-web.cyrus-reed.com" className="button">进入站点</a>
      <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT Next Web.txt" className="button">查看教程</a>
    </div>
    <p className="small-text2">（首次使用建议观看）</p>
  </div>
  <p className="recommendation">推荐理由：功能丰富，无需登录点击即用，已默认启用GPT-4模型，适合新手使用。</p>
</div>
      <div className="category">
        <div className="category-line">
          <span>原生类工具</span>
        </div>
        <div className="project">
          <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT.png" alt="ChatGPT Icon" className="project-icon" /> ChatGPT</h2>
          <p>本站点基于 ChatGPT 原生网站进行了定制，提供了一致的用户界面体验。同时，它的后端经过优化，使得聊天速度更快。本站点需要 OpenAI 账号或 Access Token 进行登录（点击下方可按钮获取密钥）， Plus 账号支持 GPT-4、Web Browsing 和 Plugins 等模型。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加顺畅。</p>
          <div className="button-group chatgpt-buttons">
            <a href="https://chatgpt.cyrus-reed.com" className="button">进入站点</a>
            <button onClick={handleOpenModal} className="button">获取密钥</button>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT.txt" className="button">查看教程</a>
          </div>
          <p className="small-text-chatgpt">（首次使用建议观看）</p>
        </div>
        <div className="project">
          <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/Bing AI.png" alt="Bing AI Icon" className="project-icon" /> Bing AI</h2>
          <p>本站点基于微软 New Bing 原生网站并进行了定制，提供了一致的用户界面体验，内置了 API 让您无需登录就可以开始聊天。它支持 ChatGPT 提示词，让您的聊天体验更加流畅。同时，您还可以使用画图等高级功能，为您的聊天添加更多的趣味和创造力。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的体验更加丰富和有趣。</p>
          <div className="button-group">
            <a href="https://bing.cyrus-reed.com" className="button">进入站点</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/Bing AI.txt" className="button">查看教程</a>
          </div>
          <p className="small-text">（首次使用建议观看）</p>
        </div>
      </div>
      <div className="category">
        <div className="category-line">
          <span>第三方工具</span>
        </div>
        <div className="project">
          <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT Next Web.png" alt="ChatGPT Next Web Icon" className="project-icon" /> ChatGPT Next Web</h2>
          <p>本站点基于 OPENAI API 开发，内置了 KEY 让您无需登录就可以开始聊天，现已支持并默认启用 GPT-4 模型，特点包括完整的 Markdown 支持，以及精心设计的 UI，响应式设计，支持深色模式，支持 PWA。此外，它还提供了预制角色功能，方便您进行个性化对话。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加流畅。</p>
          <div className="button-group">
            <a href="https://chatgpt-next-web.cyrus-reed.com" className="button">进入站点</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT Next Web.txt" className="button">查看教程</a>
          </div>
          <p className="small-text">（首次使用建议观看）</p>
        </div>
      </div>
      <p className="disclaimer">请注意：本站仅供学习交流，禁止产生任何敏感对话或图像等内容，否则将撤销使用权限，并自行承担任何后果。</p>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Token Modal"
        className="ReactModal__Content"
      >
        <h2>您的Access Token：</h2>
        <input type="text" value={token} readOnly className="token-input" />
        <p>注意：本处获取的密钥为公用密钥，请在使用后在左侧边栏中删除自己的聊天历史，保护自己的隐私安全，如需个人密钥可联系管理员获取。</p>
        <button onClick={handleCloseModal} className="close-modal-button">×</button>
      </Modal>
    </div>
  );
}
export default App;
