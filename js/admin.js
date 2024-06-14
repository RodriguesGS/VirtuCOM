document.getElementById("item-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = document.getElementById('itemPrice').value;

    addItem(itemName, itemDescription, itemPrice);

    saveItemToLocalStorage(itemName, itemDescription, itemPrice);

    this.reset();
});

function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

function addItem(name, description, price) {
    const tableBody = document.querySelector("#itemsTable tbody");
    const row = document.createElement("tr");
    
    row.innerHTML = `
    <td>${name}</td>
    <td>${description}</td>
    <td>${formatCurrency(+price)}</td>
    <td class="actions">
        <button class="edit-btn" onclick="editItem(this)">Editar</button>
        <button class="delete-btn" onclick="deleteItem(this)">Deletar</button>
    </td>`;

    tableBody.appendChild(row);
}

function saveItemToLocalStorage(name, description, price) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({ name, description, price });
    localStorage.setItem('items', JSON.stringify(items));
}

function deleteItem(button) {
    const row = button.closest('tr');
    const name = row.cells[0].innerText;
    deleteItemFromLocalStorage(name);
    row.remove();
}

function deleteItemFromLocalStorage(name) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items = items.filter(item => item.name !== name);
    localStorage.setItem('items', JSON.stringify(items));
}

function editItem(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');

    document.getElementById('itemName').value = cells[0].innerText;
    document.getElementById('itemDescription').value = cells[1].innerText;
    document.getElementById('itemPrice').value = cells[2].innerText;

    deleteItem(button);
}

document.addEventListener('DOMContentLoaded', loadItemsFromLocalStorage);

function loadItemsFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(item => addItem(item.name, item.description, item.price));
}

window.deleteItem = deleteItem;
window.editItem = editItem;
window.addItem = addItem;
