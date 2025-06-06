// Тут будет ваш JS
// Переключение видео
document.querySelectorAll('.video-select').forEach(button => {
  button.addEventListener('click', () => {
    const video = document.getElementById('trailer-video');
    const source = video.querySelector('source');

    const newVideo = button.getAttribute('data-video');
    const newPoster = button.getAttribute('data-poster');
    const newText = button.getAttribute('data-text');

    // Обновляем атрибуты
    source.src = newVideo;
    video.poster = newPoster;
    document.getElementById('video-text').textContent = newText;

    video.load(); // Перезагрузка видео
    video.play(); // Автовоспроизведение (если разрешено)
  });
});