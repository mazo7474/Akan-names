var dayNames = ["Sunday","Monday","Tueday","Wednesday","Thursday","Friday"]
var maleNames = ["Kwasi"]

const century = document.getElementsByName('century')
century.addEventListener(
    'change', (event) => {
        console.log('CLICKED CENTURY(!!', event.target.value)
    }
)