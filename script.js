var friends = ['John', 'Jack', 'Mark', 'Tom', 'Jimmy'];
var locations = ['copy room', 'stairwell', 'foyer', 'bedroom', 'office', 'closet', 'basement', 'screened-in porch', 'pool room', 'kitchen'];
var weapons = ['pistol', 'butter knife', 'nunchucks', 'balloon', 'pillow', 'coke bottle', 'swiss army knife', 'baseball bat', 'tommy gun', 'chainsaw', 'keyboard', 'car tire', 'telephone', 'briefcase', 'purse', 'axe', 'hatchet', 'flamethrower', 'machete', 'rifle'];



for (var i = 0; i < 100; i++) {
    $('body').append('<h3 id="' + (i + 1) + '">Accusation ' + (i + 1) + '</h3>');
    // var text = "Accusation " + (i + 1) + ": I accuse " + friends[(i % friends.length)] + ", with the " + weapons[(i % weapons.length)] + " in the " + locations[(i % locations.length)] + "!";
}


$('h3').click(function() {
    var n = parseInt(this.id) - 1;
    var text = "Accusation " + (n + 1) + ": I accuse " + friends[(n % friends.length)] + ", with the " + weapons[(n % weapons.length)] + " in the " + locations[(n % locations.length)] + "!";
    alert(text);
});


// function clickDisplay(i) {
//     return function() {
//         var text = "Accusation " + (i + 1) + ": I accuse " + friends[(i % friends.length)] + ", with the " + weapons[(i % weapons.length)] + " in the " + locations[(i % locations.length)] + "!";
//         console.log(text);
//     }  
// }
 




