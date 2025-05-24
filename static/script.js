// Consts





// Functions and Listeners -------------

function getdef() {
    const inputBox = document.getElementById('inputBox');
    const sendBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '<i class="wait" >🔍 Wait...</i>';
    const word = inputBox.value;

    inputBox.disabled = true;
    sendBtn.disabled = true;

    fetch(`/getdef?word=${encodeURIComponent(word)}`)
        .then(response => response.text())
        .then(definition => {
            resultContainer.innerHTML = definition;
        })
        .catch(error => {
            console.error('Error fetching definition:', error);
            resultContainer.innerHTML = 'Error fetching definition. Please try again.';
        })
        .finally(() => {
            inputBox.disabled = false;
            sendBtn.disabled = false;
        });
}

document.getElementById('sidebar-btn').addEventListener('click', function() {
  this.classList.toggle('show-label');
  document.getElementById('drawer').classList.toggle('open');
  const icon = this.querySelector('i');
  if (this.classList.contains('show-label')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

document.getElementById('profile-btn').addEventListener('click', function() {
    this.classList.toggle('show-label');
    document.getElementById('profile').classList.toggle('open');
    
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const submitBtn = document.getElementById('submit-btn');
        if (!submitBtn.disabled) {
            submitBtn.click();
        }
    }
});

// Calling the Functions ------------------
