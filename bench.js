function cas1(n) {
    n_chaine = ''+n;
    if(n_chaine.length > 1) {
        return n_chaine;
    } else {
        return '0'+n_chaine;
    }
}

function cas1_2(n) {
    if(n < 10) {
        return '0'+n;
    } else {
        return ''+n;
    }
}

function cas2(n) {
    dizaines = Math.floor(n / 10);
    unites = n - (10 * dizaines);
    return [dizaines,unites];
}

d = new Date();
for(var i = 0; i < 10000000; i++) {
    cas1(i % 100);
}
d2 = new Date();
console.log('Différence pour le cas1 : '+(d2-d)+' millisecondes.');

d = new Date();
for(var i = 0; i < 10000000; i++) {
    cas1_2(i % 100);
}
d2 = new Date();
console.log('Différence pour le cas1_2 : '+(d2-d)+' millisecondes.');

d = new Date();
for(var i = 0; i < 10000000; i++) {
    cas2(i % 100);
}
d2 = new Date();
console.log('Différence pour le cas2 : '+(d2-d)+' millisecondes.');
