document.addEventListener('DOMContentLoaded', function() {
  const downloadLinks = document.querySelectorAll('.dowloundBlock a');
  const aboutMe = document.querySelector('.aboutMe'); // Используем querySelector для одного элемента
  const infoIcon = document.getElementById('infoIcon');
  const languageMessage = document.getElementById('languageMessage');
  
  // Обработчики для ссылок скачивания
  downloadLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      if (this.classList.contains('py')) {
        languageMessage.textContent = 'python';
        languageMessage.style.backgroundColor = '#b3a920';
        languageMessage.classList.add('show');
      }
      else if (this.classList.contains('cxx')) {
        languageMessage.textContent = 'c++';
        languageMessage.style.backgroundColor = '#4ca9d4';
        languageMessage.classList.add('show');
      }
      else if (this.classList.contains('jva')) {
        languageMessage.textContent = 'java';
        languageMessage.style.backgroundColor = '#d96e26';
        languageMessage.classList.add('show');
      }
    });
    
    link.addEventListener('mouseout', function() {
      languageMessage.classList.remove('show');
    });
  });

  // Обработчики для infoIcon
  infoIcon.addEventListener('mouseover', function() {
    aboutMe.classList.add('show'); // Добавляем класс show
  });
  
  infoIcon.addEventListener('mouseout', function() {
    aboutMe.classList.remove('show'); // Удаляем класс show
  });
});