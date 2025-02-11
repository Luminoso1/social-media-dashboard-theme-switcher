const queryTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
const btnToggle = document.querySelector('label input[type="checkbox"]')
const bodyClass = document.body.classList

function initializeTheme() {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark' || (theme === null && queryTheme)) {
    bodyClass.add('dark')
    btnToggle.checked = true
  } else {
    bodyClass.remove('dark')
    btnToggle.checked = false
  }
}

function toggleTheme() {
  const isDark = bodyClass.contains('dark')
  bodyClass.toggle('dark', !isDark)
  localStorage.setItem('theme', isDark ? 'light' : 'dark')
}

btnToggle.addEventListener('click', toggleTheme)

initializeTheme()
