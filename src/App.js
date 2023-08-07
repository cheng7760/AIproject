import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState('');
  const tokens = ['fk-I1-MvtrMRYbgWd2wW7ngwAbpclICiM3DD5__CYQpRlA', 'fk-nZguxVLvOOY_UpqW1KnctGx5z-7OP1spyTI7joKUKHo', 'fk-l_CYgFdgc1Y5xrP0YPUs1DvMhPEVY2yr99-LpUL3LTM'];
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
      <p className="intro-text">本站供各位先驱者体验各类AI前沿技术</p>
      <div className="quote-container">
        <div className="quote">
          <p><em>人工智能是人类最伟大的发明，也是最危险的挑战。</em></p>
          <p className="author">——斯蒂芬·霍金</p>
        </div>
        <div className="version-container">
          <p><span>站点版本：v1.0.3</span> <span><a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/logs/Cyrus-website.txt" className="version-link">查看更新日志</a></span></p>
        </div>
        <div className="assistant-container">
          <img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/YueXi.png" alt="乐熙头像" className="assistant-icon" />
          <div className="assistant-name">哨站AI助理 ⌈乐熙⌋ </div>
          <a href="https://cyrus-reed.com/#yuexi" className="assistant-link">查看简介</a>
        </div>
      </div>
      <div className="category user-favorite">
        <div className="category-line">
          <span>🔥 用户最多 🔥</span>
        </div>
        <div className="project">
          <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/YueXi.png" alt="YueXi Icon" className="project-icon" /> 乐·熙</h2>
          <p className="project-description">本项目基于 OPENAI API 开发，内置了 KEY 让您只需微信添加 乐·熙 即可开始聊天，它使用 GPT-3.5-Turbo 模型，可以提供高质量的对话体验，支持私聊和群聊的智能回复。同时，它拥有多轮会话上下文记忆，能够理解记住对话的上下文，提供连贯相关的回复。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加沉浸。</p>
          <p className="project-description-mobile">本项目基于 OPENAI API 开发，内置了 KEY 让您只需微信添加 乐·熙 即可开始聊天，它使用 GPT-3.5-Turbo 模型，可以提供高质量的对话体验，拥有多轮会话上下文记忆，支持私聊和群聊的智能回复。</p>
          <div className="button-group">
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/tokens/YueXi tokens.txt" className="button">获取微信</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/YueXi.txt" className="button">查看教程</a>
          </div>
          <p className="small-text2">（首次使用建议观看）</p>
        </div>
        <p className="recommendation">用户评价：科技与现实的结合，桥梁般连接智能生活，让 AI 的使用融入日常中。</p>
      </div>
      <div className="category editor-recommend">
        <div className="category-line">
          <span>🏅 编辑推荐 🏅</span>
        </div>
        <div className="project" id="chatgpt-next-web">
          <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT Next Web.png" alt="ChatGPT Next Web Icon" className="project-icon" /> ChatGPT Next Web</h2>
          <p className="project-description">本站点基于 OPENAI API 开发，内置了 KEY 让您无需登录就可以开始聊天，现已支持联网模式，选择 GPT-3.5-Turbo-0613 模型即可体验。特点包括完整的 Markdown 支持，以及精心设计的 UI，响应式设计等。此外，它还提供了预制角色功能，方便您进行个性化对话。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加流畅。</p>
          <p className="project-description-mobile">本站点基于 OPENAI API 开发，内置了 KEY 让您无需登录就可以开始聊天，现已支持联网模式，选择 GPT-3.5-Turbo-0613 模型即可体验。特点包括完整的 Markdown 支持，以及精心设计的 UI，响应式设计等。</p>
          <div className="button-group">
            <a href="https://chatgpt-next-web.cyrus-reed.com" className="button">进入站点</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT Next Web.txt" className="button">查看教程</a>
          </div>
          <p className="small-text2">（首次使用建议观看）</p>
        </div>
        <p className="recommendation">推荐理由：功能丰富，无需登录点击即用，已支持选择 GPT-4 模型，适合新手使用。</p>
      </div>
        <div className="category">
          <div className="category-line">
          <span>原生类工具</span>
        </div>
        <div className="project" id="midjourney">
            <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/Midjourney.png" alt="Midjourney Icon" className="project-icon" /> Midjourney</h2>
            <p>本站点基于 Midjourney 原生 Discord 进行了定制，提供了追求极致的创作体验，内置了 API 让您无需登录就可以开始创作。同时，它的后端经过优化，使得图像生成和处理更快。它支持高清图像生成、图像变化、重新生成图像、根据描述绘制、图像融合等功能。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的创作体验更加愉悦。</p>
            <div className="button-group">
              <a href="https://midjourney.cyrus-reed.com" className="button">进入站点<a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/Midjourney.txt" className="button">查看教程</a>
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
          <p>本站点基于 OPENAI API 开发，内置了 KEY 让您无需登录就可以开始聊天，现已支持联网模式，选择 GPT-3.5-Turbo-0613 模型即可体验。特点包括完整的 Markdown 支持，以及精心设计的 UI，响应式设计等。此外，它还提供了预制角色功能，方便您进行个性化对话。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加流畅。</p>
          <div className="button-group">
            <a href="https://chatgpt-next-web.cyrus-reed.com" className="button">进入站点</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT Next Web.txt" className="button">查看教程</a>
          </div>
          <p className="small-text">（首次使用建议观看）</p>
        </div>
        <div className="project" id="yuexi">
          <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/YueXi.png" alt="YueXi Icon" className="project-icon" /> 乐·熙</h2>
          <p>本项目基于 OPENAI API 开发，内置了 KEY 让您只需微信添加 乐·熙 即可开始聊天，它使用 GPT-3.5-Turbo 模型，可以提供高质量的对话体验，支持私聊和群聊的智能回复。同时，它拥有多轮会话上下文记忆，能够理解记住对话的上下文，提供连贯相关的回复。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加沉浸。</p>
          <div className="button-group">
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/tokens/YueXi tokens.txt" className="button">获取微信</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/YueXi.txt" className="button">查看教程</a>
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
