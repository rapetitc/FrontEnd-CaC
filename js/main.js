// Encabezado
const $header = document.getElementById("header")
document.addEventListener("scroll", () => {
    const div = $header.firstElementChild
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 500) {
        div.classList.add("fixed")
    } else {
        div.classList.remove("fixed")
    }
})

// Manejador del Menu
const $menuToggle = document.getElementById("menu-toggle")
const $menu = document.getElementById("menu")

$menuToggle.addEventListener("click", (e) => {
    $menu.classList.toggle("active")
})


// Formulario
const $form = document.getElementById("contact-form")
$form.addEventListener("submit", (e) => {
    e.preventDefault()
    const required = { portrait: true, title: true }

    const elements = $form.querySelectorAll("input, select, textarea");
    elements.forEach(element => {
        if (element.type = "file" && required[element.name] == true && element.files?.length < 1) {
            console.log(element, "requerido");
        }
        if (element.type = "text" && required[element.name] == true && element.value?.length < 1) {
            console.log(element, "requerido");
        }
    });

    // TODO Terminar

    e.target.reset()
})