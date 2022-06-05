document.querySelectorAll('.accordion_button').forEach((el) => {
    el.addEventListener('click',() => {

        let content_acc = el.nextElementSibling;

        if (content_acc.style.maxHeight){
            document.querySelectorAll('.accordion_content').forEach((el) => el.style.maxHeight = null)
        }else{
            document.querySelectorAll('.accordion_content').forEach((el) => el.style.maxHeight = null)
            content_acc.style.maxHeight = content_acc.scrollHeight + 'px';
        }
    })
})