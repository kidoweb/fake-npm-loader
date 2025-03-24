
# 🔄 Fake NPM Install Simulator

![NPM Install Simulation](https://i.imgur.com/3VXIBGe.gif)

Имитатор процесса установки npm зависимостей с реалистичной анимацией и динамическими событиями

## Основные возможности 🚀
- Бесконечный процесс установки
- Анимированный прогресс-бар
- Динамические события:
  - Добавление новых пакетов `` `+ react@17.0.2` ``
  - Обновление версий `` `↑ lodash@4.17.21` ``
  - Удаление пакетов `` `- jquery@3.6.0` ``
- Случайные предупреждения о deprecated пакетах
- Имитация популярных библиотек (React, Vue, Webpack, TypeScript и др.)
- Цветовая индикация событий
- Настраиваемая скорость анимации

## Бейджи статуса 📊
![GitHub package.json version](https://img.shields.io/github/package-json/v/yourname/fake-npm-loader)
![GitHub last commit](https://img.shields.io/github/last-commit/yourname/fake-npm-loader)
![GitHub issues](https://img.shields.io/github/issues/yourname/fake-npm-loader)

## Требования 📋
- Node.js v14+
- npm v6+
- Терминал с поддержкой цветов

## Установка 💻
```bash
# Клонирование репозитория
git clone https://github.com/yourname/fake-npm-loader.git
cd fake-npm-loader

# Установка зависимостей
npm install
```

## Использование ▶️
```bash
node fake-npm.js
```

## Пример вывода 🖥️
```bash
npm install v6.14.15
Installing dependencies...
[===========              ] 45%  + react@17.0.2
⚠️  WARN deprecated package: webpack@4.44.2
↑ typescript@4.4.3
- jquery@3.6.0
```

## Roadmap 🗺️
- [x] Базовая имитация установки
- [x] Динамические события добавления/удаления
- [ ] Поддержка Yarn/PNPM
- [ ] Режим "медленного интернета" с сетевыми задержками
- [ ] Веб-версия с GUI
- [ ] Генерация отчетов о "установленных" пакетах
- [ ] Поддержка тем оформления (dark/light mode)

## Предупреждения ⚠️
- Скрипт работает бесконечно - используйте `Ctrl + C` для остановки
- Не используйте в production-средах
- Может вызывать ностальгию у frontend-разработчиков

## Лицензия 📜
Этот проект распространяется под лицензией MIT - см. [LICENSE](LICENSE) для подробностей

## Contributing 🤝
Pull requests приветствуются! Для крупных изменений:
1. Создайте issue для обсуждения
2. Создайте feature-бранч
3. Следуйте [Conventional Commits](https://www.conventionalcommits.org/)

## Автор ✍️
Ваше имя - Вдохновлено бесконечными часами ожидания `npm install`

