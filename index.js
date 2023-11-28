const inputs = document.getElementById("inp");
const licontainer = document.getElementById("licontainers");


function Add(params) {
    if (inputs.value == "") {
        alert("Please Write Some Tasks!!!!!")
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputs.value;
        licontainer.appendChild(li);
            }
    inputs.value = ""
}
