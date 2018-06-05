const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
// loadDatabase("HomeInventory")
let HomeInventoryDatabase = loadDatabase("HomeInventory")



const fragment = document.createDocumentFragment()

for (let table in HomeInventoryDatabase) {
   

    const invTable = HomeInventoryDatabase[table]

    for (i = 0; i < invTable.length; i++) {
            let arrayS = document.createElement('section')
            for (let key in invTable[i]) {
            const pElement = document.createElement('p')
            pElement.textContent = `${key}: ${invTable[i][key]}`
            arrayS.appendChild(pElement)
        }
    fragment.appendChild(arrayS)
    }
}

//     const populateDomForDataSet = (dataSet) => {
//         const invTable = HomeInventoryDatabase[dataSet]
//         invTable.forEach(item => {
//             const sectionElement = document.createElement("section")
//             for (let key in item) {
//                 const paragraphElement = document.createElement("p")
//                 paragraphElement.textContent = `${key} ${item[key]}`
//                 sectionElement.appendChild(paragraphElement)
//             }
//             fragment.appendChild(sectionElement)
//         })
//     }

// populateDomForDataSet("crafts")

document.querySelector("#myStuff").appendChild(fragment)

