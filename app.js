document.querySelector(".expand").addEventListener("click", (e)=>{
    e.stopPropagation();
    document.querySelector(".google-apps").classList.toggle("active");
})

document.body.addEventListener("click", ()=>{
    document.querySelector(".google-apps").classList.remove("active");
})

let query = document.querySelector(".query");
let searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", ()=>{
    if(query.value.trim() !== ''){
        let url = `https://www.google.com/search?q=${query.value}`;
        window.open(url, '_self');
    }
})

query.addEventListener("keyup", (e)=>{
if(query.value.trim() !== ''){
        if(e.key === 'Enter'){
            let url = `https://www.google.com/search?q=${query.value}`;
            window.open(url, '_self')
        }
    }
})

let notification = document.querySelector(".notification");

function save_preference() {
    localStorage.setItem("hideNotification", 'true');
    notification.style.display = "none";
}

let isHide = localStorage.getItem("hideNotification");

if (isHide) {
  notification.style.display = "none";
}