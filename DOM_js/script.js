const divConatainer = document.querySelector('#div1');
divConatainer.style.backgroundColor = '#00FF00';

let h3Element = document.createElement('h3');
h3Element.textContent = 'Pedro';
divConatainer.appendChild(h3Element);