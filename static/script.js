// Consts





// Functions -------------

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



// Calling the Functions ------------------
