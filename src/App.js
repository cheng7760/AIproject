import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>欢迎光临Cyrus的科技小站</h1>
      <div className="project">
        <h2>ChatGPT</h2>
        <p>ChatGPT是一个人工智能聊天机器人，由OpenAI开发和发布。它基于GPT-3.5语言模型，可以以对话的形式与用户交互。ChatGPT可以根据用户的意图，提供个性化和专业的回答，分享自己的知识，引导用户探索更多的话题，遵守道德和安全的原则。</p>
        <div className="button-group">
          <a href="https://chatgpt.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT%20Next%20Web.txt" className="button">查看教程</a>
        </div>
      </div>
      <div className="project">
        <h2>Bing AI</h2>
        <p>Bing AI是一个全新的人工智能搜索引擎，由微软开发和发布。它基于OpenAI的GPT-4语言模型，这是目前最强大的语言模型，可以理解和生成各种类型的文本，包括视觉输入。其可以为用户提供更好的搜索，更完整的答案，更互动的聊天和更有创意的内容。</p>
        <div className="button-group">
          <a href="https://bing.vcanbb.top" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/go-proxy-bing.txt" className="button">查看教程</a>
        </div>
      </div>
      <div className="project">
        <h2>DALL·E</h2>
        <p>DALL·E是一个人工智能系统，由OpenAI开发和发布,它基于一个12亿参数的GPT-3变换器模型。可以根据自然语言的描述生成逼真的图像和艺术作品。DALL·E可以将不相关的概念、属性和风格结合在一起，创造出富有想象力的图像。</p>
        <div className="button-group">
          <a href="https://dalle.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/chatgpt-vercel.txt" className="button">查看教程</a>
        </div>
      </div>
    </div>
  );
}

export default App;
