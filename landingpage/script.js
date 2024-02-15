document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    
    var email = document.getElementById('email').value;

    console.log('Email:', email);

    window.location.href = 'https://drive.google.com';   
});
