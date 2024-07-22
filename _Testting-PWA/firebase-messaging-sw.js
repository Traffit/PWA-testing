importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

fetch('firebase-config.json')
  .then(response => response.json())
  .then(firebaseConfig => {
    // Инициализация Firebase
    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      const notificationTitle = 'Background Message Title';
      const notificationOptions = {
        body: 'Background Message body.',
        // icon: '/firebase-logo.png'
      };

      self.registration.showNotification(notificationTitle, notificationOptions);
    });
  })
  .catch(error => console.error('Error loading Firebase config:', error));
