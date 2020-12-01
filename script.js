const tabuada = () => {
    let num = document.querySelector("#txtn")
    let tab = document.querySelector("#seltab")

    num.value.length == 0 ? alert('Por favor, digite o número') : n = Number(num.value) , tab.innerHTML = ''

    for (c = 0 ; c <= 10 ; c++) {
        let item = document.createElement("option")
        item.text = `${n} * ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}