# FROM mcr.microsoft.com/devcontainers/javascript-node:0-18
# RUN apt-get update && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
# # RUN npm install cypress --save-dev
FROM gitpod/workspace-full-vnc:latest
RUN npx install cypress --save-dev
ENTRYPOINT ["npx", "cypress", "open"]
