self.addEventListener('push', event => {
    const options = {
      body: event.data.text(),
      icon: 'clock.JPG', // 이미지 경로를 실제 이미지로 바꿔주세요.
    };
  
    event.waitUntil(
      self.registration.showNotification('웹 푸시 알림', options)
    );
  });
  