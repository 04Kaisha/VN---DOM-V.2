const all_links = document.querySelectorAll('a[href*="#"]')
all_links.forEach(link => {
    link.addEventListener("click", event => {
        const id = event.target.hash.slice(1)
        const page = document.getElementById(id)
        window.scrollTo({
            top: page.offsetTop,
            left: 0,
            behavior: "smooth",
        })
        event.preventDefault()
    })
})