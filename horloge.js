window.onload = function() {

    function format_int(n) {
        if(n < 10) {
            return '0'+n;
        } else {
            return ''+n;
        }
    }

    function get_date() {
        var ma_date = new Date();
        var h = format_int(ma_date.getHours());
        var m = format_int(ma_date.getMinutes());
        var s = format_int(ma_date.getSeconds());
        return [h,m,s];
    }

    function etape1() {
        var div = document.getElementById('etape-1');
        div.textContent = get_date().join(':');
    }
    setInterval(etape1, 1000);

    // étape 2

    function conversion_segments(chiffre) {
        var segments = [[0,1,2,4,5,6],
                        [2,5],
                        [0,2,3,4,6],
                        [0,2,3,5,6],
                        [1,2,3,5],
                        [0,1,3,5,6],
                        [0,1,3,4,5,6],
                        [0,2,5],
                        [0,1,2,3,4,5,6],
                        [0,1,2,3,5,6]
                        ];
        return segments[chiffre];
    }

    function etape2() {
        var heure_entiere = get_date().join('');
        var chiffres_div = document.getElementsByClassName('chiffre');
        for(var i = 0; i < chiffres_div.length; i++) {
            var chiffre_div = chiffres_div.item(i);
            var chiffre_heure = heure_entiere[i];
            var segments_chiffre = conversion_segments(chiffre_heure);
            var segments_div = chiffre_div.getElementsByClassName('segment');
            for(var j = 0; j < segments_div.length; j++) {
                segments_div.item(j).classList.remove('allume');
            }
            for(var j in segments_chiffre) {
                var segment = chiffre_div.getElementsByClassName('segment-'+segments_chiffre[j]);
                segment[0].classList.add('allume');
            }
        }
    }
    setInterval(etape2, 1000);

}
