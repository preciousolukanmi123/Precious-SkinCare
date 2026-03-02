const showOptions = () => {
   menu.style.display = 'block'
   show.innerHTML =`<div onclick="closeOptions()"><img src="line-md--close-small.svg" alt=""></div>`
}
const closeOptions = () => {
   menu.style.display = 'none'
   show.innerHTML =`<div onclick="showOptions()"><img src="jam--menu.svg" alt=""></div>`
}