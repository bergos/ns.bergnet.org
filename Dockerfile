FROM node:12-slim

RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm ci

ENTRYPOINT ["npm", "run"]
CMD ["start"]
