var form = document.getElementById("form");
var task = {
    task: "",
    isActive: false,
};
form.task.addEventListener("input", function (e) {
    var _a = e.target, name = _a.name, value = _a.value;
    task[name] = value.trim();
});
form.addEventListener("submit", function (e) {
    e.preventDefault();
});
