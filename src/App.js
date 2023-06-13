import React, { useState } from 'react';
import './App.css';

function App() {
  const [showTutorialOptions1, setShowTutorialOptions1] = useState(false);
  const [showTutorialOptions2, setShowTutorialOptions2] = useState(false);

  return (
    <div className="App">
      <h1>欢迎光临Cyrus的科技小站</h1>
      <div className="project">
        <h2>ChatGPT-Next-Web</h2>
        <p>这是一个ChatGPT网页用户界面。它的设计精美，用户体验优秀，支持Markdown格式，包括LaTex、mermaid、代码高亮等。它还支持响应式设计，深色模式和PWA，【测试密钥：3sX8rT6yU1vB7n】。</p>
        <div className="button-group">
          <a href="https://chatgpt.cyrus-reed.com" className="button">进入站点</a>
          <button onClick={() => setShowTutorialOptions1(!showTutorialOptions1)} className="button">查看教程</button>
        </div>
        {showTutorialOptions1 && (
          <div className="button-group">
            <a href="/gifs/chatgpt_ios.gif" className="button">苹果教程</a>
            <a href="/gifs/chatgpt_android.gif" className="button">安卓教程</a>
            <a href="/gifs/chatgpt_pc.gif" className="button">电脑教程</a>
          </div>
        )}
      </div>
      <div className="project">
        <h2>go-proxy-bingai</h2>
        <p>这是一个微软New Bing演示站点，拥有一致的UI体验，支持ChatGPT提示词，国内可用。它基本兼容微软Bing AI的所有功能，无需登录即可畅聊。</p>
        <div className="button-group">
          <a href="https://bing.cyrus-reed.com" className="button">进入站点</a>
          <button onClick={() => setShowTutorialOptions2(!showTutorialOptions2)} className="button">查看教程</button>
        </div>
        {showTutorialOptions2 && (
          <div className="button-group">
            <a href="/gifs/bing_ios.gif" className="button">苹果教程</a>
            <a href="/gifs/bing_android.gif" className="button">安卓教程</a>
            <a href="/gifs/bing_pc.gif" className="button">电脑教程</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
