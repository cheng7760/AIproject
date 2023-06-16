import React, { useState } from 'react';
import './App.css';

function App() {
  const [showTutorialOptions1, setShowTutorialOptions1] = useState(false);
  const [showTutorialOptions2, setShowTutorialOptions2] = useState(false);

  return (
    <div className="App">
      <h1>欢迎光临Cyrus的科技小站</h1>
      <div className="project">
        <h2>ChatGPT</h2>
        <p>ChatGPT是一个人工智能聊天机器人，由OpenAI开发和发布。它基于GPT-3.5语言模型，可以以对话的形式与用户交互。ChatGPT可以根据用户的意图，提供个性化和专业的回答，分享自己的知识，引导用户探索更多的话题，遵守道德和安全的原则。【测试密码：3sX8rT6yU1vB7n】。</p>
<div className="button-group">
          <a href="https://chatgpt.cyrus-reed.com" className="button">进入站点</a>
          <div className="dropdown">
            <button onClick={() => setShowTutorialOptions1(!showTutorialOptions1)} className="button dropdown-button">
              查看教程 {showTutorialOptions1 ? '▲' : '▼'}
            </button>
            <div className={`dropdown-content ${showTutorialOptions1 ? 'show' : ''}`}>
                <a href="/gifs/chatgpt_ios.gif" className="button">苹果教程</a>
                <a href="/gifs/chatgpt_android.gif" className="button">安卓教程</a>
                <a href="/gifs/chatgpt_pc.gif" className="button">电脑教程</a>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <h2>Bing Ai</h2>
        <p>Bing AI是一个全新的人工智能搜索引擎，由微软开发和发布。它基于OpenAI的GPT-4语言模型，这是目前最强大的语言模型，可以理解和生成各种类型的文本，包括视觉输入。其可以为用户提供更好的搜索，更完整的答案，更互动的聊天和更有创意的内容。</p>
        <div className="button-group">
          <a href="https://bing.cyrus-reed.com" className="button">进入站点</a>
          <div className="dropdown">
            <button onClick={() => setShowTutorialOptions2(!showTutorialOptions2)} className="button dropdown-button">
              查看教程 {showTutorialOptions2 ? '▲' : '▼'}
            </button>
            <div className={`dropdown-content ${showTutorialOptions2 ? 'show' : ''}`}>
                <a href="/gifs/bing_ios.gif" className="button">苹果教程</a>
                <a href="/gifs/bing_android.gif" className="button">安卓教程</a>
                <a href="/gifs/bing_pc.gif" className="button">电脑教程</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
