FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Dark-Knight-Hiruwa/T-REX /root/T-REX
WORKDIR /root//
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
