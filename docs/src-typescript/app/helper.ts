export function buttonForTest(text: string, parent?:HTMLElement) {
    let button = document.createElement('button');
    button.innerText = text;
    button.style.height = '80px';

    let p = parent ? parent : document.body; 
    p.appendChild(button);

    return button;
}

export function inputForTest(label: string, parent?:HTMLElement) {
    let labelEl = document.createElement('label');
    labelEl.innerText = label;
    let inputEl = document.createElement('input');
    labelEl.appendChild(inputEl);

    let p = parent ? parent : document.body; 
    p.appendChild(labelEl);

    return inputEl;
}
