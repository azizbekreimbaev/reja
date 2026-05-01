console.log('====================================');
console.log("Front-end JS is running");
console.log('====================================');


function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                    <span class="item-text">
                        ${item.reja}
                    </span>
                    <div>
                        <button data-id="${item.id}" class="edit-me btn btn-secondery btn-sm mr-1">Change</button>
                        <button data-id="${item.id}" class="delete-me btn btn-danger btn-sm">Delete</button>
                    </div>
                </li>`
}

let createField = document.getElementById("create-field");
    console.log('====================================');
    console.log(createField.name);
    console.log(createField.tabIndex);
    console.log('====================================');
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();
    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            document
                .getElementById("item-list")
                .insertAdjacentHTML("beforeend", itemTemplate(response.data))
            createField.value = "";
            createField.focus();
        })

        .catch((err) => {
            console.log("Try again");
        })
});