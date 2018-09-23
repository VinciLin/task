function auth () {
  const userName = document.getElementById('userName').value
  const passWord = document.getElementById('passWord').value

  setTimeout(() => {
    if (userName.length < 4 && passWord.length < 8) {
      document.getElementById('login').innerHTML = "<span style='color: #ff0051 ;'>password must be 8 and 24 characters</span>"
      setTimeout(() => {
        document.getElementById('login').innerHTML = 'Login'
      }, 2000)
    } else {
      document.getElementById('SvgIconLoading').style.display = 'block'
      document.getElementById('login').innerHTML = ''
      setTimeout(() => {
        document.getElementById('SvgIconLoading').style.display = 'none'
        document.getElementById('login').innerHTML = 'Login'
      }, 2000)
    }
  }, 2000)
}
