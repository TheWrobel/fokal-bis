function initMap() {

    let narutowicza = {lat: 51.770765, lng: 19.456504};

    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: narutowicza});

    let marker = new google.maps.Marker({position: narutowicza, map: map});
}
