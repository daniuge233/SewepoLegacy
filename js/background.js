var token = 0;

var bg_style = document.createElement("style");

function SetBackground() {
    bg_style.innerHTML = '.body_custom::before { background:transparent url("http://localhost:8080/api/getImage?r= ' + token++ + '") center center no-repeat; background-size: cover; }' 
    document.head.appendChild(bg_style);
}

function DefBackground() {
    let input_panel = document.getElementById("input_panel");

    input_panel.classList.remove("input_panel_hidden");
    input_panel.classList.add("input_panel_display");
}

function DefBackground_confirm() {
    let input_panel = document.getElementById("input_panel");
    let input = $("#input");

    if (input.val() == "") {
        input_panel.classList.remove("input_panel_display");
        input_panel.classList.add("input_panel_hidden");
        return;
    }

    bg_style.innerHTML = '.body_custom::before { background:transparent url("' + input.val() + '") center center no-repeat; background-size: cover; }' 
    document.head.appendChild(bg_style);

    input_panel.classList.remove("input_panel_display");
    input_panel.classList.add("input_panel_hidden");
}

function CacheImage() {
    $.get("http://localhost:8080/api/cacheImage", function(res) {
        if (res == "error") {
            alert("图片存储出错！");
        }
    });
}

SetBackground();