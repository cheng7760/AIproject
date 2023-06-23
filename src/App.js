import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cyrus的科技小站</h1>
      <div className="project">
        <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT-Next-Web.png" alt="ChatGPT Icon" className="project-icon" /> ChatGPT</h2>
        <p>ChatGPT是一个由OpenAI开发和发布的人工智能聊天机器人，基于GPT-3.5语言模型。现已接入业界最先进的AI绘图技术Midjourney。用户用/mj为前缀输入绘画描述，例如：/mj a cat，即可生成绘画，速度较慢，生成中请勿重复提交或刷新页面，目前只支持英文描述。【请避免产生任何敏感对话或图像，否则可能导致使用权限被撤销，且需自行承担后果。】</p>
        <div className="button-group">
          <a href="https://chatgpt.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT-Next-Web.txt" className="button">查看教程</a>
        </div>
        <p className="small-text">（首次使用建议观看）</p>
      </div>
      <div className="project">
        <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/go-proxy-bing.png" alt="Bing AI Icon" className="project-icon" /> Bing AI</h2>
        <p>Bing AI是一个全新的人工智能搜索引擎，由微软开发和发布，基于GPT-4语言模型。现已接入OpenAI自研的AI绘图技术DALL·E2。用户需要选择更有创造力对话样式，输入绘画描述，例如：请帮我画一个小猪，即可生成绘画，速度较快，支持中文提示词。【请避免产生任何敏感对话或图像，否则可能导致使用权限被撤销，且需自行承担后果。】</p>
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
