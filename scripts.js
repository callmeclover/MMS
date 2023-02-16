const bar = document.getElementById('bar')
const movebox = document.getElementById('movebox')
const txt = document.getElementById('txt')

movebox.addEventListener('mousemove', () => {
    bar.setAttribute('value', parseFloat(bar.getAttribute('value')) + 1)
    if (parseFloat(bar.getAttribute('value')) >= bar.getAttribute('max')) {
        bar.setAttribute('value', 0)
        bar.setAttribute('max', parseInt(bar.getAttribute('max')) + 1)
        txt.textContent = parseFloat(txt.textContent) + 1
    }
})

function drk_lit() {
    var idl = document.getElementById('icon-drk-lit');
    var element = document.body;
    element.classList.toggle("dark-mode");
    movebox.classList.toggle("dark-mode-mvbx");
    if (idl.textContent == 'light_mode') {
        idl.textContent = 'dark_mode'
    } else {
        idl.textContent = 'light_mode'
    }
  }

  function save(level, value) {
    if (localStorage.getItem('value') == null || localStorage.getItem('level') == null) {
        if (localStorage.getItem('level') == null) {
            localStorage.setItem('level', level)
        } else {
            localStorage.setItem('value', value)
        }
    } else {
        localStorage.setItem('value', value)
        localStorage.setItem('level', level)
    }
  }

  const autosave = setInterval(() => {
    save(parseFloat(txt.textContent), parseFloat(bar.getAttribute('value')))
    console.log('Saved')
  }, 60000);