var canPlaceFlowers = function(flowerbed, n) {
    var a = flowerbed;
    var prev;
    var emptySlots = 0;
    for (var i = 0; i < a.length; i++) {
        var curr = a[i];
        var next = a[i+1];
        
        if (!prev && !curr && !next) {
            emptySlots++;
            prev = 1;
        } else {
            prev = curr; 
        }
    }
    return emptySlots >= n;
};