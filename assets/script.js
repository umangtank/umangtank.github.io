// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBG8oZqERMtKP_SXGfyf6mgehKWF1fRAUs",
    authDomain: "portfolio-data2023.firebaseapp.com",
    databaseURL: "https://portfolio-data2023-default-rtdb.firebaseio.com",
    projectId: "portfolio-data2023",
    storageBucket: "portfolio-data2023.appspot.com",
    messagingSenderId: "284311841773",
    appId: "1:284311841773:web:a735d41fc97b52f37c55e4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let formMessage = firebase.database().ref('contect_me');

document.getElementById('registrationForm').addEventListener('submit', submitDetails);

function submitDetails(e) {
    // e.preventDefault();
    name = document.getElementById("user_name").value;
    email = document.getElementById("user_email").value;
    message = document.getElementById("user_message").value;
    // console.log(name, email, message);

    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    let newFormMessage = formMessage.push();
    newFormMessage.set({
        name: name,
        email: email,
        message: message,
        dateTime: dateTime,
        starMessage: false,
        lastUpdate: 'Yet to reply'
    });

    document.getElementById('successMessage').innerHTML = "Thanks, I've received your message. I'll get back to you soon";
    // console.log("message sent")

    //Hide Alert Message After Five Seconds(6)
    setTimeout(function () {
        document.getElementById('successMessage').innerHTML = '';
    }, 4000);

    //Form Reset After Submission(7)
    document.getElementById('registrationForm').reset();



}