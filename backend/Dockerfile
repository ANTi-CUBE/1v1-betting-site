# استخدم صورة رسمية لبيئة node
FROM node:18

# إعداد مجلد التطبيق
WORKDIR /app

# نسخ ملفات المشروع
COPY package*.json ./
RUN npm install

COPY . .

# فتح البورت المستخدم في التطبيق
EXPOSE 3000

# الأمر الذي يشغل السيرفر
CMD ["npm", "start"]