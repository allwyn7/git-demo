demo = document.getElementById('demo');
details = document.querySelector('.details');

demo.addEventListener('click', function () {
  details.classList.remove('hidden');
});

document.getElementById('clear').addEventListener('click', function () {
  details.classList.add('hidden');
});
