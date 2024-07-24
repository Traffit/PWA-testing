importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAlgEDiuNWaPBhEWiij3Ho8OW-2f1wJnB0",
  authDomain: "pwa-push-c85c4.firebaseapp.com",
  projectId: "pwa-push-c85c4",
  storageBucket: "pwa-push-c85c4.appspot.com",
  messagingSenderId: "924760227755",
  appId: "1:924760227755:web:76ff2394c8ba28e3c19cee",
  measurementId: "G-RHG8WH8PXE"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
