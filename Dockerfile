FROM fusuf/whatsasena:latest

RUN git clone https://github.com/DARKCRIME1/8gh32jk565 /root/8gh32jk565
WORKDIR /root/8gh32jk565/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
