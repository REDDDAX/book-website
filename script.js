function contactPopUp(){
    document.querySelector('.pop').classList.toggle("active");
    const closebtn = document.querySelector('.fa-x');
if (closebtn.style.display === 'block'){
    closebtn.styles.display = 'none'
}
}