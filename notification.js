
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging.js";

const firebaseConfig = {
    apiKey: "AIzaSyAETpT7RzfSU9nhRTsX3dQDxTUOb-1cNV4",
    authDomain: "test-f8ca0.firebaseapp.com",
    projectId: "test-f8ca0",
    storageBucket: "test-f8ca0.appspot.com",
    messagingSenderId: "244259946058",
    appId: "1:244259946058:web:5748847d9a796463da70b3",
    measurementId: "G-BGR4SND4RN"
};

// Initialize Firebase
const currentToken = ""
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Get the device's registration token
        getToken(messaging, { vapidKey: 'BBJCmyIoUKSzJ7HkWPMNdhNQzpzvICzNZjRPng1QkFwanjRp8QHdrWZU272wK812anA5Y5jaTMWmA-gC1mvNKig' }).then((currentToken) => {
            if (currentToken) {
                console.log('FCM Token:', currentToken);
                const fcmtoken = currentToken;
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer ya29.c.c0ASRK0GZhgL9LA5Rx37U0hAglnskXwd4_hjtybRVNt-5rE3E0qOJ_34XnLcJEFtheXc2y3mQFjyOgwxz9ct0ygWpbQ7Zh8FXjfKl9ZwWgMKDheW877Jxi6SizvXYDBarmkNuRW3CA3qyp_lg9bZAC5sk_hEOOIkrO2rwWMCiXxkiiJHxKSKE64gzZdmr-SiUXnhnwbjMD5M5kvFKqYb3s2NNMz0HKKJb6GKvvORYISEU4JogkY5lq-NTenDLqiewmzEvJg2trChLt8qie678iri_gaLYul2vwocHDnBNzBSACjgbFLipCJ9VDyt4uu7jR56O5rl5E-SXTV5nVjayTVVDA8QOUglgI6yb3gZuzf6__VdOn2Bv1-Pj8P1rlQ1rYQwL395AqqI1WkoJphQhX0X5X3ltRecje-w2UwYOa3dSIkQZS3_9Be7VpJ1OmQ3MSnyO4iF67rXe_1IkbllBUn1yjVQV9I6lt7uIrwgw_M_7hx00ZUI0bWsvwk_mfQ2vh3Xox32j9RQ1h5d_YxZS-vu3zX2wUS2Bbh6Q-lpp2hYigf638yx18de0l763yqddR4aF1Uiol4vZ1pvmjQxpyUnhhnwJziouRBe2OcphkZqz8eOYbJqk9QORbsxo6ogfZVM6VRsvztJm3daBV2-bawtdBV8qw6eb26XS-fl6uq3pvVWYhkbrdhl_pJcxMgvWcncnU8iqbJJZVj6s23_b5ew7oMM42SlX-JZgnUUjRby31hMucUsOc8-fbRV2con9fhFoaujnkpZQpQJpYWazgg0gcVVf9Je6rYoxdXO_ifg_Z-UBj26wQ_s7cbiVzk9mt3t5JXUd2-R6MgVWc66pSQolmzwliabVooQkJMuV-bqtn7yMOJc_pBOy-SwlxR_kvBymRVcgnumOxZgWFohZYJw2JZ69jashJlrYpF_dxfhJ8BsU13O0_bRn8lqpwIez7u9btZ3B1Y1-pZR_tj6QZqb1_3FOvJnl7_-Rpwl_pcm8M0u9JbotU_Iy");

                const raw = JSON.stringify({
                    "message": {
                        "token": "f8_Ydi1z4fPcUOh9iMWCCE:APA91bFD6cmz92TlB4Mg7VPZiCzYDLk112CpC9rDILpj990iQ80rM8lUt1rnTfHkX7odRXVFG1Z4YEMtjSa8W5FHG9b-apePrMLjEf78MylHDWunclHTZW1aZbL35oyPlULk5ZDTZaaX",
                        "notification": {
                            "title": "Your Title",
                            "body": "Your Notification Body",
                            "image": "https://thumbs.dreamstime.com/z/closeup-felidae-magenta-spacesuit-helmet-taking-selfie-carnivore-cat-space-suit-showcasing-its-whiskers-snout-fur-312266503.jpg"
                        }
                    }
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"
                };


                fetch("https://fcm.googleapis.com/v1/projects/test-f8ca0/messages:send", requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));

                console.log(JSON.parse(raw));

                // Send this token to your backend server for push notifications
            } else {
                console.log('No registration token available.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token.', err);
        });
    } else {
        console.log('Unable to get permission to notify.');
    }
});





// onMessage(messaging, (payload) => {
//   console.log('Message received: ', payload);
//   // Customize the notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.icon
//   };

//   new Notification(notificationTitle, notificationOptions);
// });



