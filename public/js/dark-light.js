const themeBtnElem = document.querySelector('.theme-button')
const themeIcon = document.querySelector('.theme-button')
const htmlTag = document.querySelector('html')


let theme = 'light'


function changeTheme() {

    if (theme === 'light') {
        theme = 'dark'
        localStorage.setItem('theme', 'dark')
    } else {
        theme = 'light'
        localStorage.setItem('theme', 'light')
    }

    setTheme()
}
function detectTheme() {
    let localTheme = localStorage.getItem('theme')
    if (localTheme) {
        theme = localTheme
    }
    setTheme()
}
function setTheme() {
    if (theme === 'light') {
        htmlTag.classList.remove('dark')
        themeIcon.innerHTML = '<i class="fas fa-moon"></i>'

    }
    else {
        htmlTag.classList.add('dark')
        themeIcon.innerHTML = '<i class="fas fa-sun"></i>'
    }
}


themeBtnElem.addEventListener('click', changeTheme)