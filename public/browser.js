console.log('====================================');
console.log("Front-end JS is running");
console.log('====================================');


function itemTemplate(item) {
    // console.log("html func")
    // console.log("id", item._id)
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                    <span class="item-text">
                        ${item.reja}
                    </span>
                    <div>
                        <button data-id="${item._id}" class="edit-me btn btn-secondery btn-sm mr-1">Change</button>
                        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
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


document.addEventListener("click", function (e) {
    //delete oper

    console.log("button id", e.target);


    if (e.target.classList.contains("delete-me")) {
        if (confirm("Are you sure to DELETE?")) {
            axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err) => {
                    console.log("Please Try Again!!!")
                });

            // alert("You pressed YES")
        }
        // else {
        //     alert("You pressed NO")
        // }
    }
    //edit oper



    if (e.target.classList.contains("edit-me")) {
        // console.log(1);
        // let userInput = prompt("You can edit now...", "edit please...");
        let userInput = prompt(
            "You can edit now...",
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        // console.log(2)

        if (userInput) {
            axios.post("/edit-item", { id: e.target.getAttribute("data-id"), new_input: userInput })
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
                })
                .catch((err) => {
                    console.log("Please try again...");
                })
            // console.log(userInput);
        }

        // alert("You are going to EDIT")
    }

    // console.log('====================================');
    // console.log(e);
    // console.log('====================================');
})

document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", { delete_all: true }).then((response) => {
        alert(response.data.state);
        document.location.reload();
    })
})