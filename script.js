const translations = {
  ru: {
    'about-link': 'О игре',
    'screenshots-link': 'Скриншоты',
    'trailer-link': 'Трейлер',
    'hero-title': 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
    'hero-tagline': 'Погрузись в Зону отчуждения. Скоро.',
    'hero-btn': 'Смотреть трейлер',
    'about-title': 'О игре',
    'about-text':
      'S.T.A.L.K.E.R. 2 — продолжение культовой серии от GSC Game World. Исследуй открытую Зону, полную аномалий, врагов и загадок. Уникальный геймплей, атмосферная графика и глубокий сюжет ждут тебя.',
    'screenshots-title': 'Скриншоты',
    'trailer-title': 'Официальные трейлеры',
  },
  uk: {
    'about-link': 'Про гру',
    'screenshots-link': 'Скріншоти',
    'trailer-link': 'Трейлер',
    'hero-title': 'S.T.A.L.K.E.R. 2: Серце Чорнобиля',
    'hero-tagline': 'Поринь у Зону відчуження. Скоро.',
    'hero-btn': 'Дивитись трейлер',
    'about-title': 'Про гру',
    'about-text':
      'S.T.A.L.K.E.R. 2 — продовження культової серії від GSC Game World. Досліджуй відкриту Зону, повну аномалій, ворогів та загадок. Унікальний геймплей, атмосферна графіка і глибокий сюжет чекають на тебе.',
    'screenshots-title': 'Скріншоти',
    'trailer-title': 'Офіційні трейлери',
  },
  en: {
    'about-link': 'About',
    'screenshots-link': 'Screenshots',
    'trailer-link': 'Trailer',
    'hero-title': 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
    'hero-tagline': 'Dive into the Exclusion Zone. Coming soon.',
    'hero-btn': 'Watch Trailer',
    'about-title': 'About the Game',
    'about-text':
      'S.T.A.L.K.E.R. 2 is the continuation of the cult series by GSC Game World. Explore the open Zone full of anomalies, enemies, and mysteries. Unique gameplay, atmospheric graphics, and a deep storyline await you.',
    'screenshots-title': 'Screenshots',
    'trailer-title': 'Official Trailers',
  },
};

document.querySelectorAll('.lang-switcher button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-switcher button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const lang = btn.getAttribute('data-lang');
    document.querySelectorAll('[data-lang-text]').forEach((el) => {
      const key = el.getAttribute('data-lang-text');
      el.textContent = translations[lang][key];
    });
  });
});

// Переключение видео
document.querySelectorAll('.video-select').forEach((button) => {
  button.addEventListener('click', () => {
    const video = document.getElementById('trailer-video');
    const source = video.querySelector('source');

    const newVideo = button.getAttribute('data-video');
    const newPoster = button.getAttribute('data-poster');
    const newText = button.getAttribute('data-text');

    source.src = newVideo;
    video.poster = newPoster;
    document.getElementById('video-text').textContent = newText;

    video.load();
    video.play();
  });
});

// Параллакс эффект
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const background = document.querySelector('.background-gif');
  background.style.transform = `translateY(${scrollY * 0.3}px)`;

  document.querySelectorAll('.parallax-section').forEach((section) => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const offset = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
      section.style.transform = `translateY(${(1 - offset) * 20}px)`;
      section.style.filter = `brightness(${0.8 + 0.2 * offset})`;
    } else {
      section.style.filter = 'brightness(0.8)';
      section.style.transform = 'translateY(20px)';
    }
  });
});

// Музыкальный фон
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

let musicPlaying = false;

musicToggle.addEventListener('click', () => {
  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
    musicToggle.textContent = '🔇';
  } else {
    music.pause();
    musicPlaying = false;
    musicToggle.textContent = '🎵';
  }
});

// Авто-запуск музыки — может блокироваться браузером, поэтому пользовательский клик предпочтителен
// Если хочешь, можешь раскомментировать чтобы попытаться запустить музыку сразу:
// window.addEventListener('load', () => {
//   music.play().then(() => {
//     musicPlaying = true;
//     musicToggle.textContent = '🔇';
//   }).catch(() => {
//     // Автостарт запрещен
//   });
// });
