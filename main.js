function login(){
  localStorage.setItem("p1n",document.getElementById("p1").value)
  localStorage.setItem("p2n",document.getElementById("p2").value)
    window.location="index2.html"
}
function send(){
  localStorage.setItem("mp",document.getElementById("Q").value)
    window.location="index3.html"
}