let currentStage = 16;

function handleClick() {
    if (currentStage === 16) {
        draw(8);
    } else if (currentStage === 8) {
        draw(4);
    } else if (currentStage === 4) {
        draw(2);
    } else if (currentStage === 2) {
        drawWinner();
    }
}

function draw(nextStage) {
    const container = document.querySelector('.grid-container');
    const items = Array.from(container.children);
    const selectedItems = [];

    while (selectedItems.length < nextStage) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const item = items[randomIndex];
        
        if (!selectedItems.includes(item) && isValidSelection(selectedItems, item)) {
            selectedItems.push(item);
        }
    }


    container.innerHTML = '';
    selectedItems.forEach(item => {
        container.appendChild(item);
    });

    currentStage = nextStage;
}

function isValidSelection(selectedItems, newItem) {
    for (let item of selectedItems) {
        if (item.style.backgroundColor === newItem.style.backgroundColor || item.id.charAt(0) === newItem.id.charAt(0)) {
            return false;
        }
    }
    return true;
}

function drawWinner() {
    const container = document.querySelector('.grid-container');
    const items = Array.from(container.children);


    const winnerIndex = Math.floor(Math.random() * items.length);
    const winner = items[winnerIndex];

    container.innerHTML = '';
    container.appendChild(winner);

    alert(`The winner is ${winner.id}`);
}
