const pushButton = document.getElementById('pushButton');
let swRegistration = null;

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('sw.js').then(swReg => {
    swRegistration = swReg;
    initializePushNotification();
  }).catch(error => {
    console.error('서비스 워커 등록 실패:', error);
  });
} else {
  console.error('서비스 워커 및 푸시 알림 미지원');
}

function initializePushNotification() {
  pushButton.addEventListener('click', () => {
    setTimeout(() => {
      const options = {
        body: '10초 후에 온 웹 푸시 알림입니다!',
        icon: 'clock.JPG', // 이미지 경로를 실제 이미지로 바꿔주세요.
      };

      if (swRegistration) {
        swRegistration.showNotification('웹 푸시 알림', options);
      } else {
        console.error('서비스 워커 등록 객체가 설정되지 않았습니다.');
      }
    }, 10000); // 10초(10000 밀리초) 후에 실행
  });
}