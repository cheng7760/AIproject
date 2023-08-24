import React, { useState } from 'react';
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
          <p><span>站点版本：v1.0.3</span> <span><a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/logs/Cyrus-website.txt" className="version-link">查看更新日志</a></span></p>
        </div>
        <div className="assistant-container">
          <img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT-wechat.png" alt="ChatGPT头像" className="assistant-icon" />
          <div className="assistant-name">哨站AI助理 ⌈ChatGPT⌋ </div>
          <a href="https://cyrus-reed.com/#ChatGPT-wechat" className="assistant-link">查看简介</a>
        </div>
      </div>
      <div className="category user-favorite">
        <div className="category-line">
          <span>🔥 用户最多 🔥</span>
        </div>
        <div className="project">
          <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT-wechat.png" alt="ChatGPT-wechat Icon" className="project-icon" /> ChatGPT-wechat</h2>
          <p className="project-description">本项目基于 OPENAI API 开发，内置了 KEY 让您只需微信添加 ChatGPT 即可开始聊天，它使用 GPT-4 模型，可以提供高质量的对话体验，支持私聊和群聊的智能回复。同时，它拥有多轮会话上下文记忆，能够理解记住对话的上下文，提供连贯相关的回复。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加沉浸。</p>
          <p className="project-description-mobile">本项目基于 OPENAI API 开发，内置了 KEY 让您只需微信添加 ChatGPT 即可开始聊天，它使用 GPT-4 模型，可以提供高质量的对话体验，拥有多轮会话上下文记忆，支持私聊和群聊的智能回复。</p>
          <div className="button-group">
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/tokens/ChatGPT-wechat tokens.txt" className="button">获取微信</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT-wechat.txt" className="button">查看教程</a>
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
          <p className="project-description">本站点基于 OPENAI API 开发，内置了 KEY 让您无需登录就可以开始聊天，现已支持最先进的 GPT-4-32k 模型，特点包括完整的 Markdown 支持，以及精心设计的 UI，响应式设计，支持深色模式，支持 PWA。此外，它还提供了预制角色功能，方便您进行个性化对话。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加流畅。</p>
          <p className="project-description-mobile">本站点基于 OPENAI API 开发，内置了 KEY 让您无需登录就可以开始聊天，现已支持最先进的 GPT-4-32k 模型，特点包括完整的 Markdown 支持，以及精心设计的 UI，响应式设计，支持深色模式，支持 PWA。</p>
          <div className="button-group">
            <a href="https://chatgpt-next-web-langchain.cyrus-reed.com" className="button">进入站点</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT Next Web.txt" className="button">查看教程</a>
          </div>
          <p className="small-text2">（首次使用建议观看）</p>
        </div>
        <p className="recommendation">推荐理由：功能丰富，无需登录点击即用，支持最先进的 GPT-4-32k 模型，适合新手使用。</p>
      </div>
        <div className="category">
          <div className="category-line">
          <span>原生类工具</span>
        </div>
        <div className="project" id="bing">
            <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/Bing AI.png" alt="Bing AI Icon" className="project-icon" /> Bing AI</h2>
            <p>本站点基于 Next.js 重写，高度还原 New Bing Web 版 UI，提供了一致的用户界面体验，内置了 API 让您无需登录就可以开始聊天。同时，它的后端经过深度优化，响应速度与对话质量大幅提升。现已支持识图功能，Bing 可以根据用户上传的图片进行对话，无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加丰富。</p>
            <div className="button-group">
              <a href="https://bingo.cyrus-reed.com" className="button">进入站点</a>
              <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/Bing AI.txt" className="button">查看教程</a>
            </div>
            <p className="small-text">（首次使用建议观看）</p>
          </div>
        <div className="project" id="midjourney">
            <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/Midjourney.png" alt="Midjourney Icon" className="project-icon" /> Midjourney</h2>
            <p>本站点基于 Midjourney 原生 Discord 进行了定制，提供了追求极致的创作体验，内置了 API 让您无需登录就可以开始创作。同时，它的后端经过优化，使得图像生成和处理更快。它支持高清图像生成、图像变化、重新生成图像、根据描述绘制、图像融合等功能。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的创作体验更加愉悦。</p>
            <div className="button-group">
              <a href="https://midjourney-web.cyrus-reed.com" className="button">进入站点</a>
              <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/Midjourney.txt" className="button">查看教程</a>
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
          <p>本站点基于 OPENAI API 开发，内置了 KEY 让您无需登录就可以开始聊天，现已支持最先进的 GPT-4-32k 模型，特点包括完整的 Markdown 支持，以及精心设计的 UI，响应式设计，支持深色模式，支持 PWA。此外，它还提供了预制角色功能，方便您进行个性化对话。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加流畅。</p>
          <div className="button-group">
            <a href="chatgpt-next-web-langchain.cyrus-reed.com" className="button">进入站点</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT Next Web.txt" className="button">查看教程</a>
          </div>
          <p className="small-text">（首次使用建议观看）</p>
        </div>
        <div className="project" id="ChatGPT-wechat">
          <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT-wechat.png" alt="ChatGPT-wechat Icon" className="project-icon" /> ChatGPT-wechat</h2>
          <p>本项目基于 OPENAI API 开发，内置了 KEY 让您只需微信添加 ChatGPT 即可开始聊天，它使用 GPT-4 模型，可以提供高质量的对话体验，支持私聊和群聊的智能回复。同时，它拥有多轮会话上下文记忆，能够理解记住对话的上下文，提供连贯相关的回复。无论您是在电脑端还是手机端，都可以享受到这个平台的便利，让您的聊天体验更加沉浸。</p>
          <div className="button-group">
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/tokens/ChatGPT-wechat tokens.txt" className="button">获取微信</a>
            <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT-wechat.txt" className="button">查看教程</a>
          </div>
          <p className="small-text">（首次使用建议观看）</p>
        </div>
      </div>
      <p className="disclaimer">请注意：本站仅供学习交流，禁止产生任何敏感对话或图像等内容，否则将撤销使用权限，并自行承担任何后果。</p>
      
    </div>
  );
}

export default App;
