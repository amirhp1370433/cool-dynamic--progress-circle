const circle = document.querySelector('.progress-circle')

const loading = document.querySelector('.loading')

let i = 0

const fakeUploadperc = [0 , 10 , 20 , 30 , 35 , 50 , 60 , 65 , 66 , 70 , 86 , 90 , 100]

const circumference = circle.getTotalLength()

const interval = setInterval(()=>{
    circle.style.strokeDashoffset = circumference - (fakeUploadperc[i] / 100) * circumference
    loading.innerHTML = fakeUploadperc[i]+'%'
    i++
    if (fakeUploadperc.length === i) {
        clearInterval(interval)
    }
},1000)