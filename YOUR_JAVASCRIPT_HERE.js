let hero = {
    name: "",
    heroic : false,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2
    }
}
function rest(hero){
    
    if(hero.health===10){
        window.alert("Your health is already 10")
    }
hero.health=10
return hero
}
function createImage(imageId){
    const image = document.createElement('IMG')
    image.id=imageId
    document.body.appendChild(image)
    image.src="https://www.fallkniven.com/wp-content/uploads/2016/12/f1_vg10_2000px_compressed.png"
}
createImage("inn")
const inn=document.getElementById("inn")
inn.onclick = () => {
        rest(hero)
    }
createImage("dagger")
function pickUpItem(hero,weapon){
    hero.inventory.push(weapon)
}
const dagger=document.getElementById("dagger")
dagger.onclick = () => {
    const weapon = {
        type: "dagger",
        damage: 2
    }
    pickUpItem(hero,weapon)
}

function equipWeapon(hero){
    if(hero.inventory.length>0){
        hero.weapon=hero.inventory[0]
    }
    
}
createImage("bag")
const bag=document.getElementById("bag")
bag.onclick = () =>{
    equipWeapon(hero)
}
function displayStats(hero){
    let name=hero.name
    let health=hero.health
    let weaponType=hero.weapon.type
    let weaponDamage=hero.weapon.damage
    let statsMessage="Your stats are name: "+name+"health: "+health+" Weapon: a)Type: "+weaponType+" b)Damage: "+weaponDamage
    let stats=document.getElementById("stats")
    stats.innerHTML =statsMessage

}
displayStats(hero)
