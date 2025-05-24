document.addEventListener('DOMContentLoaded', function() {
  // Находим все ссылки в блоке dowloundBlock
  const downloadLinks = document.querySelectorAll('.dowloundBlock a');
  
  // Перебираем все ссылки
  downloadLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Проверяем, содержит ли href ссылки 'pyPack.zip'
      if (this.getAttribute('href') === 'pyPack.zip') {
        // Отменяем стандартное поведение (чтобы сначала показать сообщение)
        e.preventDefault();
        
        // Показываем сообщение
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.textContent = 'Внимание! это пак функций которые подключают к main.cpp файлу.';
        alertMessage.style.display = 'block';
        
        // Через 5 секунд скрываем сообщение
        setTimeout(() => {
          alertMessage.style.display = 'none';
        }, 3000);
        
        // Продолжаем скачивание после показа сообщения
        setTimeout(() => {
          window.location.href = this.getAttribute('href');
        }, 1000);
      }
    });
  });
});