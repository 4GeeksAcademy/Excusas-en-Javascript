let who = ["The cat","The dog","My brother","The teacher"];
let action=["ate","peed","lost","crash"];
let what=["my homework","the keys","the car"];
let when=[
    "before the class", 
    "right on time", 
    "when I finished", 
    "during my lunch", 
    "while I was praying"
];
function excuseGenerator( who, action, what, when){
    let randomWho= Math.floor(Math.random() * who.length);
    let randomAction= Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);
    let excuse=
        who[randomWho] +
        " " +
        action[randomAction]+
        " " +
        what[randomWhat]+
        " " +
        when[randomWhen]+
        " ";
    return excuse;
}
console.log(excuseGenerator(who, action, what, when));