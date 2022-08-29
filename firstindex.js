window.onload = function() {
    var div = document.getElementsByClassName('con_ul_li_div')
    console.log(div)
    var divList = div.children
    var divListLength = divList.length
    console.log(divListLength)
    var count = 0
    setInterval(() => {
        if (count + 1 == divListLength) {
            div.scrollTop = 0
        } else {
            count ++
            let top = count * 200
            var coutBanner = 0
            for (let i = ((count - 1) * 200) + 10; i <= top; i += 10) {
                coutBanner ++
                setTimeout(() => {
                    div.scrollTop = i
                }, coutBanner * 10)
            }
        }        
    }, 3000)
}