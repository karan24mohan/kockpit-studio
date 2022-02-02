const windowstab = document.querySelector(".windows-tab");
const linuxtab = document.querySelector(".linux-tab")

const windowsForm = document.querySelector("#windows-machine-form fieldset");

const linuxForm = document.querySelector("#linux-machine-form fieldset");

windowstab.addEventListener("click", () => {
    windowstab.classList.add("active");
    linuxtab.classList.remove("active");

    windowsForm.removeAttribute("disabled");
    linuxForm.setAttribute("disabled", "true")
});

linuxtab.addEventListener("click", () => {
    linuxtab.classList.add("active");
    windowstab.classList.remove("active");

    linuxForm.removeAttribute("disabled")
    windowsForm.setAttribute("disabled", "true");
});

