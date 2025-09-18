const sun = document.querySelector('.sun');

sun.addEventListener('click', () => {
  // Переключаем тёмный режим для страницы
  document.body.classList.toggle('dark-mode');

  // Переключаем класс collapsed для анимации лучиков
  sun.classList.toggle('collapsed');
});
