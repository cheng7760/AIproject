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
        <p>ChatGPT是一个人工智能聊天机器人，由OpenAI开发和发布。它基于GPT-3.5/GPT-4语言模型，可以以对话的形式与用户交互。ChatGPT可以根据用户的意图，提供个性化和专业的回答，分享自己的知识，引导用户探索更多的话题，遵守道德和安全的原则。</p>
        <div className="button-group">
          <a href="https://openai.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/ChatGPT.txt" className="button">查看教程</a>
        </div>
        <p className="small-text">（首次使用建议观看）</p>
      </div>
      <div className="project">
        <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/Bing AI.png" alt="Bing AI Icon" className="project-icon" /> Bing AI</h2>
        <p>Bing AI是一个全新的人工智能搜索引擎，由微软开发和发布。它基于OpenAI的GPT-4语言模型，这是目前最强大的语言模型，可以理解和生成各种类型的文本，包括视觉输入。其可以为用户提供更好的搜索，更完整的答案，更互动的聊天和更有创意的内容。</p>
        <div className="button-group">
          <a href="https://bing.cyrus-reed.com" className="button">进入站点</a>
          <a href="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/faqs/Bing AI.txt" className="button">查看教程</a>
        </div>
        <p className="small-text">（首次使用建议观看）</p>
           </div>
      <div className="project">
        <h2><img src="https://raw.gitmirror.com/Cyrus-Reed/Cyrus-website/main/public/icons/ChatGPT-Midjourney.png" alt="ChatGPT-Midjourney Icon" className="project-icon" /> ChatGPT-Midjourney</h2>
        <p>Midjourney是一个由位于旧金山的独立研究实验开发和发布的生成性人工智能程序和服务。它能够根据自然语言描述，生成图像。Midjourney可以根据用户的需求，生成个性化和独特的艺术作品，分享其人工智能的创新成果，引导用户探索更多的艺术领域。</p>
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
