
let strVal = document.getElementById("str-val")
const elements = new Map();
const costs = new Map();
const totalPoints = 27
const pointsLeftEl = document.getElementById("points-left")

elements.set("str", [8, 0, -1])
elements.set("dex", [8, 0, -1])
elements.set("con", [8, 0, -1])
elements.set("int", [8, 0, -1])
elements.set("wis", [8, 0, -1])
elements.set("cha", [8, 0, -1])


costs.set(8, 0)
costs.set(9, 1)
costs.set(10, 2)
costs.set(11, 3)
costs.set(12, 4)
costs.set(13, 5)
costs.set(14, 7)
costs.set(15, 9)

let pointsSpent = 0

function increment(ability, val) {
    v = elements.get(ability)[0] + val
    if (v <= 15 && v >= 8) {
        elements.set(ability, [v, costs.get(v)])
        document.getElementById(ability + "-val").textContent = elements.get(ability)[0]
        pointBuyUpdate(ability, val)
    }

}

function pointBuyUpdate(ability, val) {
     let oldscore = elements.get(ability)[0] - val
     let newscore = elements.get(ability)[0]
     let diff = costs.get(newscore) - costs.get(oldscore)
     pointsSpent += diff
     pointsLeftEl.textContent = totalPoints - pointsSpent

     if (pointsSpent > 27) {
        document.getElementById("points-left").style.color = "red";
     } else {
        document.getElementById("points-left").style.color = "black";
     }
     modifierUpdate(ability)
}

function modifierUpdate(ability) {
    let abilityScore = elements.get(ability)[0]
    let modifier = Math.floor((abilityScore - 10) / 2)
    elements.get(ability)[2] = modifier
    if (modifier > 0) {
        modifier = "+" + modifier
    }
    document.getElementById(ability+"-mod").textContent = modifier
}