import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cyrus的科技小站</h1>
      <div className="project">
        <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT-Next-Web.png" alt="ChatGPT Icon" className="project-icon" /> ChatGPT</h2>
        <p>ChatGPT是一个人工智能聊天机器人，由OpenAI开发和发布。它基于GPT-3.5语言模型，可以以对话的形式与用户交互。ChatGPT可以根据用户的意图，提供个性化和专业的回答，分享自己的知识，引导用户探索更多的话题，遵守道德和安全的原则。</p>
        <div className="button-group">
          <a href="https://chatgpt.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT-Next-Web.txt" className="button">查看教程</a>
        </div>
        <p className="small-text">（首次使用建议观看）</p>
      </div>
      <div className="project">
        <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/go-proxy-bing.png" alt="Bing AI Icon" className="project-icon" /> Bing AI</h2>
        <p>Bing AI是一个全新的人工智能搜索引擎，由微软开发和发布。它基于OpenAI的GPT-4语言模型，这是目前最强大的语言模型，可以理解和生成各种类型的文本，包括视觉输入。其可以为用户提供更好的搜索，更完整的答案，更互动的聊天和更有创意的内容。</p>
        <div className="button-group">
          <a href="https://bing.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/go-proxy-bing.txt" className="button">查看教程</a>
        </div>
        <p className="small-text">（首次使用建议观看）</p>
      </div>
    </div>
  );
}

export default App;
