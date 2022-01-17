const themeToggler = document.querySelector('.checkbox')
const root = document.documentElement

themeToggler.addEventListener('click', toggleTheme)

function toggleTheme() {
  return themeToggler.checked
    ? changeTheme('#202020', '#9aa5aa')
    : changeTheme('#fff', '#111')
}

function changeTheme(background, color) {
  root.style.setProperty('--main-bg', background)
  root.style.setProperty('--main-color', color)
}
