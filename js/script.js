const lis = document.querySelectorAll('li');
const button = document.querySelector('button');
const sections = document.querySelectorAll('section');
const ratedSpan = document.getElementById('rating')

let current = 0;

lis.forEach(li => {
    li.addEventListener('click', () => {
        li.classList.toggle('bg-white');
        li.classList.toggle('text-black');
        lis.forEach((otherLi) => {
            if (otherLi !== li) {
                otherLi.classList.remove('bg-white');
                otherLi.classList.remove('text-black');
            }
        });
        current = li.value;
    });
});

button.addEventListener('click', () => {
    if(current < 1) return;
    sections[0].classList.add('hidden');
    sections[1].classList.toggle('hidden');
    ratedSpan.innerHTML = current;
});