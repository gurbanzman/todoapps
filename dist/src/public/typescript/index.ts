let form = document.getElementById("form") as HTMLFormElement;

// first function : get input values
type Task = {
  task: string;
  isActive: boolean;
};


let task: Task = {
  task: "",
  isActive: false,
};  

form.task.addEventListener("input", (e: Event) => {
  let { name, value } = e.target as HTMLInputElement;
  task[name] = value.trim();
});

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
});
