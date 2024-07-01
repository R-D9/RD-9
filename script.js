function initMap() {
    // 天白キャンパスの位置
    var locations = [
        {lat: 35.134969, lng: 136.969415, title: '天白カフェ'},
        {lat: 35.135969, lng: 136.969415, title: 'ラーメン天白'},
        {lat: 35.136969, lng: 136.969415, title: '天白寿司'}
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 35.134969, lng: 136.969415}
    });

    locations.forEach(function(location) {
        var marker = new google.maps.Marker({
            position: {lat: location.lat, lng: location.lng},
            map: map,
            title: location.title
        });
    });
    
    var tenpaku = { lat: 35.1420, lng: 136.9674 };
    var map1 = new google.maps.Map(document.getElementById('map1'), {
        zoom: 15,
        center: tenpaku
    });
    var marker1 = new google.maps.Marker({
        position: tenpaku,
        map: map1
    });

    // 八事キャンパスの位置
    var yagoto = { lat: 35.1484, lng: 136.9551 };
    var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 15,
        center: yagoto
    });
    var marker2 = new google.maps.Marker({
        position: yagoto,
        map: map2
    });
}

// Google Maps APIのスクリプトを非同期で読み込み
function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.defer = true;
    document.head.appendChild(script);
}

window.onload = loadScript;
