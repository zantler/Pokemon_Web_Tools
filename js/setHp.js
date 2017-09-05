function setHp() {
    var level = document.getElementById("level");
    var levelValue = parseFloat(level.value);
    var hp = document.getElementById("baseHp");
    var hpValue = parseFloat(hp.value);
    var name = document.getElementById("poke").value;
    var answer = (name === "Shedinja")? 1:((2*hpValue)*levelValue/100)+levelValue+10;
    document.getElementById("maxHp").value = parseInt(answer|0).toString();
}