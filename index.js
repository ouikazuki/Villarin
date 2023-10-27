let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let history = [];

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    if (count === 0) {
        return;
    }

    history.push(count);
    updateHistory();
    countEl.textContent = 0;
    count = 0;
}

function updateHistory() {
    saveEl.textContent = "Previous entries: " + history.join(", ");
}

console.log("Let's count people on the subway!");
