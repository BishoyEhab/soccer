function add() {
    let index ;
    for (let i = 0; i < 8; i++) {
        let image = document.getElementById("pic-container").children.item(i)
        if (image.classList.contains("active")){
            index =i
        }
        if (index = null) {
            document.getElementById("pic-container").children.item(0).classList.add("active")
        }
        // document.getElementById("pic-container").children.item(index + 1).classList.add("active")
        // document.getElementById("pic-container").children.item(index - 3 ).classList.remove("active")
    }
}
function remove() {
    let index ;
    for (let i = 0; i < 8; i++) {
        let image = document.getElementById("pic-container").children.item(i)
        if (image.classList.contains("active")){
            index =i
        }
        // document.getElementById("pic-container").children.item(index).classList.add("active")
        // document.getElementById("pic-container").children.item(index - 4 ).classList.remove("active")
    }
}
