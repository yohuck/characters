const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']

const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling']

const things = ['Dresses in drag at every opportunity', 'Has a terrible gambling problem', 'Can never remember names', 'Believes they are a teenager from the Earth year 2022 trapped in their Dungeons & Dragons game', 'is constantly hungry', "Has a hard time pronuncing locations correctly", 'is terrified of magic', 'tries to befriend every horse they encounter', 'Is always offering terrible financial advice', 'Loves to sleep in', 'Loves to cook but is terrible at it']

const character = {
    classes : classes,
    races : races,
    things : things,
}

let generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
}



let runGenerator = () => {

}

let choosing = (object) => {
    let currentIdea = [];
    for(let property in object){
        let chooser = generateRandomNumber(object[property].length)
        switch (property) {
            case 'classes': 
                currentIdea.push(object[property][chooser]);
                break;
            case 'races': 
                currentIdea.push(object[property][chooser]);
                break;
            case 'things':
                currentIdea.push(object[property][chooser]);
        }
    } return currentIdea;
}

console.log(choosing(character));

let button = document.getElementById('button');
let state = true;
button.addEventListener('click', function(event) {
    
    let thisCharacter = choosing(character);
    if (state === true ) {
        const raceUpdate = document.getElementById('raceTag');
        raceUpdate.textContent = thisCharacter[1];
        const classUpdate = document.getElementById('classTag');
        classUpdate.textContent = thisCharacter[0];
        const thingUpdate = document.getElementById('thingTag');
        thingUpdate.textContent = thisCharacter[2];

        const raceSlide = document.getElementById('race');
        raceSlide.setAttribute('style', 'transform: translate(-50%,0');
        const classSlide = document.getElementById('class');
        classSlide.setAttribute('style', 'transform: translate(0%,0');
        const thingSlide = document.getElementById('thing');
        thingSlide.setAttribute('style', 'transform: translate(-50%,0');
        const body = document.getElementById('body')
        body.setAttribute('style', "background-position: 125%;")
        const wrapper = document.getElementById('wrapper')
        wrapper.setAttribute('style', "background-color: var(--dnd-orange); color: var(--dnd-yellow);")

        state = false;
        } else {
            const raceUpdate = document.getElementById('raceTag-2');
        raceUpdate.textContent = thisCharacter[1];
        const classUpdate = document.getElementById('classTag-2');
        classUpdate.textContent = thisCharacter[0];
        const thingUpdate = document.getElementById('thingTag-2');
        thingUpdate.outerHTML = `<p id='thingTag-2'>${thisCharacter[2]}</p>`;


            const raceSlide = document.getElementById('race');
        raceSlide.setAttribute('style', 'transform: translate(0%,0');
        const classSlide = document.getElementById('class');
        classSlide.setAttribute('style', 'transform: translate(-50%,0');
        const thingSlide = document.getElementById('thing');
        thingSlide.style.transform = 'translate(0%,0)';
        const body = document.getElementById('body')
        body.setAttribute('style', "background-position: 220%;")
        const wrapper = document.getElementById('wrapper')
        wrapper.setAttribute('style', "background-color: var(--dnd-blue);")
        state = true;
        }
    }
)
// let raceUpdate = document.getElementById("raceTag");
// raceUpdate.innerHTML = "Test";

