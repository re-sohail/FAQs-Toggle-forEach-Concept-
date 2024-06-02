let faqs = document.querySelectorAll('.faq')

faqs.forEach((data)=>{
    let icon = document.querySelector('.question i')
    data.addEventListener('click',()=>{
        data.classList.toggle('active')
        icon.style.transform = "rotate(180deg)"
    })
})