var friends = ['John', 'Jack', 'Mark', 'Tom', 'Jimmy'];
var locations = ['copy room', 'stairwell', 'foyer', 'bedroom', 'office', 'closet', 'basement', 'screened-in porch', 'pool room', 'kitchen'];
var weapons = ['pistol', 'butter knife', 'nunchucks', 'balloon', 'pillow', 'coke bottle', 'swiss army knife', 'baseball bat', 'tommy gun', 'chainsaw', 'keyboard', 'car tire', 'telephone', 'briefcase', 'purse', 'axe', 'hatchet', 'flamethrower', 'machete', 'rifle'];

// adds all accusation headings and event listeners
for (var i = 0; i < 100; i++) {
    var h3 = $('<h3 id="'+ (i + 1) + '">Accusation ' + (i + 1) + '</h3>');
    $('body').append(h3);
    var text = "Accusation " + (i + 1) + ": I accuse " + friends[(i % friends.length)] + ", with the " + weapons[(i % weapons.length)] + " in the " + locations[(i % locations.length)] + "!";
    var showAllegation = displayText(text);
    h3.click(showAllegation);  
}

// displays alert when an accusation is clicked
function displayText(text) {
    return function() {
        alert(text);
    }
}





