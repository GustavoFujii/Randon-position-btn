let movel = document.getElementById("movel")
let fixo = document.getElementById("fixo")


movel.addEventListener("mouseenter", () =>{
  let randomlf = Math.floor(Math.random() * 1100)
  let randomhv = Math.floor(Math.random() * 510)
  movel.style.left = `${randomlf}px`
  movel.style.top = `${randomhv}px`
})

fixo.addEventListener("click", () =>{
  document.getElementById("img").classList.add("active")
  document.getElementById("overlay-active").classList.add("overlay-active")
  movel.style.display = "none"
})
