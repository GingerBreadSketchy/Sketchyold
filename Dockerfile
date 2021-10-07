FROM fusuf/whatsasena:latest

RUN git clone https://github.com/DARKCRIME1/ng19 /root/ng19
WORKDIR /root/ng19/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
