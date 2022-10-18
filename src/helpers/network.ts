export let isOffline = !navigator.onLine;

window.addEventListener("offline", () => {
    isOffline = true
})
window.addEventListener("online" , ()=>{
   isOffline = false
})
