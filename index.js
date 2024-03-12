const upravProgresBar = (vstupniElement, jmenoTridyCss, hodnota) => {
    const bar = vstupniElement.querySelector(jmenoTridyCss)
    bar.style.width = hodnota + "%"
}

const upravTextovouHodnotu = (vstupniElement, jmenoTridyCss, hodnota) => {
    const text = vstupniElement.querySelector(jmenoTridyCss)
    text.innerHTML = hodnota + " / 100"
}

// function updateSkill(vstupniId, vstupniHodnota) {
//   Telo funkce
// }

const updateSkill = (vstupniId, vstupniHodnota) => {
    // if (vstupniHodnota < 0 || vstupniHodnota > 100) {
    //     console.log("hodnota mimo rozsah")
    //     return
    // }

    // const nalezenyElement = document.querySelector(id)
    // if (nalezenyElement) {
    //     const bar = nalezenyElement.querySelector(".skill__progress")
    //     bar.style.width = value + "%"

    //     const text = nalezenyElement.querySelector(".skill__value")
    //     text.innerHTML = value + " / 100"
    // } else {
    //     console.log("Element se nenasel", id)
    // }

    const nalezenyElement = document.querySelector(vstupniId)
    // const bar = nalezenyElement.querySelector(".skill__progress")
    // bar.style.width = vstupniHodnota + "%"
    upravProgresBar(nalezenyElement, ".skill__progress", vstupniHodnota)

    // const text = nalezenyElement.querySelector(".skill__value")
    // text.innerHTML = vstupniHodnota + " / 100"
    upravTextovouHodnotu(nalezenyElement, ".skill__value", vstupniHodnota)
}

const HTML = Number(prompt("Vyjadrete svoji uroven v dovednosti HTML jako cislo o hodnote od 0 do 100"))
const CSSv = Number(prompt("Vyjadrete svoji uroven v dovednosti CSS jako cislo o hodnote od 0 do 100"))
const JavaScript = Number(prompt("Vyjadrete svoji uroven v dovednosti JavaScript jako cislo o hodnote od 0 do 100"))

updateSkill("#skill1", HTML)
updateSkill("#skill2", CSSv)
updateSkill("#skill3", JavaScript)

// updateSkill("#skillNeexistuje", JavaScript)
