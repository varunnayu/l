document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxo2zhKEupC7ZZUhXx7LxJDwHS4ZWKQkX2OGCClBLHCFfjDu4-fKkXousPG27bt24SaxA/exec';
    const form = document.forms['google-sheet'];

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    if (response.ok) {
                        alert("Thanks for contacting us! We will contact you soon.");
                        form.reset(); // Optional: Reset the form after successful submission
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                })
                .catch(error => console.error('Error!', error.message));
        });
    } else {
        console.error('Form with name "google-sheet" not found');
    }
});
