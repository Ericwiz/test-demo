
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      console.log(data)
  document.getElementById('ele').innerHTML = `<img src="${data.message} />`

    })
    
    fetch(' https://apis.scrimba.com/bored/api/activity'


