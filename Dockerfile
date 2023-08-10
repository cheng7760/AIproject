# 使用 Node.js v16.x 作为基础镜像
FROM node:16

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json（如果存在）到容器中
COPY package*.json ./

# 安装项目依赖项
RUN npm install

# 复制其他项目文件到容器中
COPY . .

# 暴露 3000 端口 (如果你的应用运行在其他端口，请进行调整)
EXPOSE 3000

# 定义容器启动时的命令
CMD [ "npm", "start" ]
