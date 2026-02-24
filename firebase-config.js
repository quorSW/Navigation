import { initializeApp } from "https://www.gstatic.com";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com";

const firebaseConfig = {
  apiKey: "AIzaSyBvPOFlJsnO5BNYLdRdA-Db4uvXT8QIwXQ",
  authDomain: "navigation-a08ba.firebaseapp.com",
  projectId: "navigation-a08ba",
  storageBucket: "navigation-a08ba.firebasestorage.app",
  messagingSenderId: "988049632333",
  appId: "1:988049632333:web:c1049f11704842a3d68004",
  measurementId: "G-TS21Y81VVF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const tg = window.Telegram.WebApp;

tg.ready();

// Находим все кнопки "Выбрать"
document.querySelectorAll('.select-button').forEach(button => {
    button.addEventListener('click', async () => {
        const user = tg.initDataUnsafe?.user;
        
        if (user) {
            try {
                // Записываем в коллекцию "users" документ с ID пользователя
                await setDoc(doc(db, "users", user.id.toString()), {
                    first_name: user.first_name,
                    username: user.username || "hidden",
                    last_click: new Date().toISOString()
                }, { merge: true }); // merge: true чтобы не затирать старые данные
                
                tg.showAlert("Готово! Ты в базе.");
            } catch (e) {
                console.error(e);
                tg.showAlert("Ошибка доступа! Проверь Rules в Firebase.");
            }
        } else {
            alert("Запусти приложение через Telegram");
        }
    });
});
