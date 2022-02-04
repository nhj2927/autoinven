let map;
let warehouses = 3;
let markers = {};
let i = 0;
let today = new Date();
let locale;
let center;
today.setHours(0, 0, 0, 0);

$('#searchBtn').click(() => {
  document.querySelector('#pac-input').focus();
  document.querySelector('#pac-input').dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'Enter',
      keyCode: 13,
    })
  );
});

const setWarehouses = (_warehouses, _locale) => {
  warehouses = _warehouses;
  locale = _locale;
};

/*
$(clearSearchBox).click(function () {
  let input = document.getElementById('pac-input');
  input.value = null;
});
*/

const listing = (lists) => {
  $('.marker_list').text('');
  for (l in lists) {
    let index = lists[l].index;
    let name;
    let address;
    let addressDetail;
    let dedicated_area;
    let type;
    let price;
    if (locale === 'ko') {
      name = warehouses[index].name_ko;
      address = warehouses[index].address1_ko;
      addressDetail = warehouses[index].address2_ko;
      dedicated_area = warehouses[index].dedicated_area + ' m<sup>2</sup>';
      price = `m<sup>2</sup>당 &#8361;${warehouses[index].rent}/일`;
      if (warehouses[index].is_verified) {
        type = '인증';
      } else {
        type = '미인증';
      }
    } else if (locale === 'en') {
      name = warehouses[index].name_en;
      address = warehouses[index].address1_en;
      addressDetail = warehouses[index].address2_en;
      dedicated_area = warehouses[index].dedicated_area + ' m<sup>2</sup>';
      price = `per m<sup>2</sup> $${warehouses[index].rent}/per`;
      if (warehouses[index].is_verified) {
        type = 'verified';
      } else {
        type = 'not verified';
      }
    }
    console.log(name, address, addressDetail, dedicated_area);
    console.log(warehouses[index].WarehouseImages[0].url);
    $('.marker_list').append(
      ` 
          <div class="marker_item frow" id="marker${l}">
            <div class="frow warehouseImage" style>
              <img src="${warehouses[index].WarehouseImages[0].url}">
            </div>
            <div class="fcol">
              <div class="frow">
                  <div class="marker_title">${name}</div>
                  <div class="marker_type autoinven">${type}</div>
              </div>
              <div class="makrer_address">${address} / ${addressDetail}</div>
              <div class="frow">
                  <div class="marker_price">${price}</div>
              </div>
            </div>
          </div>
          <hr class="marker_hr">
          `
    );
    let id = '#marker' + l;
    const m = lists[l].marker;
    $(id).click(function () {
      google.maps.event.trigger(m, 'click');
    });
  }
};

async function initMap() {
  center = { lat: 35.95, lng: 128.25 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7.5,
    center: center,
    mapTypeContorl: false,
  });
  const myIcon = new google.maps.MarkerImage('/image/warehouse_pin.png');
  const notAvailableIcon = new google.maps.MarkerImage(
    '/image/warehouse_pin_not_available.png'
  );
  let lists;
  for (index in warehouses) {
    markers[warehouses[index].warehouse_id] = new google.maps.Marker({
      position: {
        lat: warehouses[index].Address.latitude,
        lng: warehouses[index].Address.longitude,
      },
      map: map,
      icon: notAvailableIcon,
    });
    markers[warehouses[index].warehouse_id].index = index;
    markers[warehouses[index].warehouse_id].addListener('click', () => {});
  }
  // 초기 리스팅
  listing(markers);

  const card = document.getElementById('pac-card');
  const input = document.getElementById('pac-input');

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
  //const autocomplete = new google.maps.places.Autocomplete(input, options);
  const searchBox = new google.maps.places.SearchBox(input);
  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  //autocomplete.bindTo("bounds", map);
  map.addListener('bounds_changed', () => {
    searchBox.setBounds(map.getBounds());
  });
  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);

  // 검색 결과를 표시할 마커
  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
  });

  // 검색 엔터 쳤을 때
  searchBox.addListener('places_changed', async () => {
    const startDate = $('#startDate')[0].value;
    const endDate = $('#endDate')[0].value;
    let whType = [$('#whType option:selected').val()];
    let leaseArea = $('#leaseArea')[0].value;
    // 시작, 종료일 면적 모두 입력하거나 입력하지 않은 경우
    if (
      (startDate === '' && endDate === '' && leaseArea === '') ||
      (startDate !== '' && endDate !== '' && leaseArea !== '')
    ) {
      // 검색한 위치로 이동하는 작업
      const places = searchBox.getPlaces();
      if (places.length == 0) {
        return;
      }
      const place = places[0]; // 검색 후보 중 가장 첫번째 것을 가져옴
      input.value = place.name;
      // 지도 이동
      if (!place.geometry || !place.geometry.location) {
        console.log('Returned place contains no geometry');
        return;
      }
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(false);
      map.setZoom(15);
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent =
        place.formatted_address;
      infowindow.open(map, marker);

      if (startDate === '' && endDate === '' && leaseArea === '') {
        // 그냥 검색한 곳에서 가까운대로 리스팅
        lists = [];
        $('.marker_list').text('');
        for (m in markers) {
          const d = calcDistance(
            new google.maps.LatLng(markers[m].position),
            new google.maps.LatLng(marker.position)
          );
          if (d < 50) {
            lists.push({ marker: markers[m], distance: d });
          }
        }
        lists.sort(function (a, b) {
          if (a.distance > b.distance) return 1;
          if (a.distance === b.distance) return 0;
          if (a.distance < b.distance) return -1;
        });
        for (l in lists) {
          let index = lists[l].marker.index;
          let name;
          let address;
          let addressDetail;
          let dedicated_area;
          let type;
          let price;
          if (locale === 'ko') {
            name = warehouses[index].name_ko;
            address = warehouses[index].address1_ko;
            addressDetail = warehouses[index].address2_ko;
            dedicated_area =
              warehouses[index].dedicated_area + ' m<sup>2</sup>';
            price = `m<sup>2</sup>당 &#8361;${warehouses[index].rent}/일`;
            if (warehouses[index].is_verified) {
              type = '인증';
            } else {
              type = '미인증';
            }
          } else if (locale === 'en') {
            name = warehouses[index].name_en;
            address = warehouses[index].address1_en;
            addressDetail = warehouses[index].address2_en;
            dedicated_area =
              warehouses[index].dedicated_area + ' m<sup>2</sup>';
            price = `per m<sup>2</sup> $${warehouses[index].rent}/per`;
            if (warehouses[index].is_verified) {
              type = 'verified';
            } else {
              type = 'not verified';
            }
          }
          console.log(name, address, addressDetail, dedicated_area);
          console.log(warehouses[index].WarehouseImages[0].url);
          $('.marker_list').append(
            ` 
                <div class="marker_item frow" id="marker${l}">
                  <div class="frow warehouseImage" style>
                    <img src="${warehouses[index].WarehouseImages[0].url}">
                  </div>
                  <div class="fcol">
                    <div class="frow">
                        <div class="marker_title">${name}</div>
                        <div class="marker_type autoinven">${type}</div>
                    </div>
                    <div class="makrer_address">${address} / ${addressDetail}</div>
                    <div class="frow">
                        <div class="marker_price">${price}</div>
                        <div class="marker_distance">${lists[l].distance}km</div>
                    </div>
                  </div>
                </div>
                <hr class="marker_hr">
                `
          );
          let id = '#marker' + l;
          const m = lists[l].marker;
          $(id).click(function () {
            google.maps.event.trigger(m, 'click');
          });
        }
      } else {
        // 검색해서 주위 이용가능 한 창고만 리스팅
        // 입력 안했을 경우, 서버에서 인식 가능하도로 null로 변경
        if (whType[0] == '창고종류') {
          whType = null;
        }
        if (leaseArea == '') {
          leaseArea = null;
        }
        const searchResult = await $.get('api/warehouse/search', {
          startDate,
          endDate,
          type: whType,
          area: leaseArea,
          // 전송할 데이터
        });
        console.log(JSON.stringify(searchResult[0]));

        for (index in searchResult) {
          markers[searchResult[index].warehouse_id].setIcon(myIcon);
          console.log(markers[searchResult[index].warehouse_id].index);
        }
      }
    } else if (startDate !== '' && endDate !== '' && leaseArea !== '') {
    } else {
      // 시작일, 종료일, 면적 중 1개 또는 2개 빼먹은 경우
      // 경고창만 뜨게
      alert(
        '사용 가능한 면적 계산을 위해 시작일, 종료일, 면적 모두 입력해주세요'
      );
    }

    let data = {};
  });
}

function calcDistance(p1, p2) {
  var d = (
    google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000
  ).toFixed(2);
  //console.log(d);
  return d;
}
