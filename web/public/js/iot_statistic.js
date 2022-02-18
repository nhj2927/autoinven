async function getSensorData(type, IpAdd, locale) {
  String.prototype.format = function () {
    var formatted = this;
    for (var arg in arguments) {
      formatted = formatted.replace('{' + arg + '}', arguments[arg]);
    }
    return formatted;
  };
  let getDate = document.querySelector('#currentDate').value;
  //"http://192.168.22.47:9000"; //임시 주소
  let options = undefined;
  if (type == 1) {
    options = {
      uri: IpAdd + '/api/stat/day',
      qs: {
        datetime: getDate,
      },
    };
  } else if (type == 2) {
    options = {
      uri: IpAdd + '/api/stat/month',
      qs: {
        datetime: getDate,
      },
    };
  } else if (type == 3) {
    options = {
      uri: IpAdd + '/api/stat/year',
      qs: {
        datetime: $('.datepicker').val(),
      },
    };
  }
  let returnValue = undefined;
  await $.ajax({
    url: options.uri,
    type: 'GET',
    data: {
      datetime: options.qs.datetime,
    },
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .done(function (response) {
      returnValue = response;
    })
    .fail(function (error) {
      if (locale === 'ko') {
        Swal.fire({
          title: '500 연결 실패',
          html: `Iot 서버 연결 실패<br>`,
          icon: 'error',
        });
      } else if (locale === 'en') {
        Swal.fire({
          title: '500 Connect Error',
          html: `Iot Server connection failed<br>`,
          icon: 'error',
        });
      }
    });
  var ctx1 = $('#chart_temp');
  var ctx2 = $('#chart_humi');
  var ctx3 = $('#chart_co');
  var ctx4 = $('#chart_lpg');
  //const body = '{"value":[{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15},{"temperature" : 32,"humidity" : 31,"co" : 12,"lpg" : 15}]}';
  //let returnValue = JSON.parse(body);
  let step = 0;
  let temp = new Array();
  let humi = new Array();
  let co = new Array();
  let lpg = new Array();
  let labels = new Array();
  let date = undefined;
  if (returnValue.length != 0) {
    // canvas

    for (step = 0; step < returnValue.length; step++) {
      //console.log(returnValue[step]['temperature'], returnValue[step]['humidity'], returnValue[step]['co'], returnValue[step]['lpg']);
      temp.push(returnValue[step]['temperature']);
      humi.push(returnValue[step]['humidity']);
      co.push(returnValue[step]['co']);
      lpg.push(returnValue[step]['lpg']);
      if (type === 1) {
        date = new Date(returnValue[step]['datetime']);
        let hours = ('0' + date.getHours()).slice(-2);
        let minutes = ('0' + date.getMinutes()).slice(-2);
        let timeString = hours + ':' + minutes;
        labels.push('{0}'.format(timeString));
      } else if (type === 2) {
        date = new Date(returnValue[step]['datetime']);
        labels.push('{0}'.format(date.getDate()));
      } else if (type === 3) {
        date = new Date(returnValue[step]['datetime']);
        labels.push('{0}'.format(date.getMonth() + 1));
      }
    }
    const no_data_in_that_date = () => {
      if (locale === 'ko') {
        return `해당 날짜에는 데이터가 없습니다<br>`;
      } else if (locale === 'en') {
        return 'There is no data for that date<br>';
      }
    };
    const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
    //temp 최대, 최소, 평균
    maxTemp = Math.max(...temp).toFixed(2);
    minTemp = Math.min(...temp).toFixed(2);
    document.getElementById('maxTemp').innerHTML = maxTemp + '°C';
    document.getElementById('minTemp').innerHTML = minTemp + '°C';
    document.getElementById('avgTemp').innerHTML =
      average(temp).toFixed(2) + '°C';
    chartMaxTemp = Math.max(...temp) + 5;
    if (Math.min(...temp) <= 0) {
      chartMinTemp = Math.min(...temp) - 5;
    } else {
      chartMinTemp = 0;
    }
    //humi 최대, 최소, 평균
    maxHumi = Math.max(...humi).toFixed(2);
    minHumi = Math.min(...humi).toFixed(2);
    document.getElementById('maxHumi').innerHTML = maxHumi + '%';
    document.getElementById('minHumi').innerHTML = minHumi + '%';
    document.getElementById('avgHumi').innerHTML =
      average(humi).toFixed(2) + '%';
    chartMaxHumi = Math.max(...humi) + 5;
    if (Math.min(...temp) <= 0) {
      chartMinHumi = Math.min(...humi) - 5;
    } else {
      chartMinHumi = 0;
    }
    //Co 최대, 최소, 평균
    maxCo = Math.round(Math.max(...co));
    minCo = Math.round(Math.min(...co));
    document.getElementById('maxCo').innerHTML = maxCo + 'ppm';
    document.getElementById('minCo').innerHTML = minCo + 'ppm';
    document.getElementById('avgCo').innerHTML =
      Math.round(average(co)) + 'ppm';
    chartMaxCo = Math.max(...co) + 20;
    if (Math.min(...temp) <= 0) {
      chartMinCo = Math.min(...co) - 20;
    } else {
      chartMinCo = 0;
    }
    //lpg 최대, 최소, 평균
    maxLpg = Math.round(Math.max(...lpg));
    minLpg = Math.round(Math.min(...lpg));
    document.getElementById('maxLpg').innerHTML = maxLpg + 'ppm';
    document.getElementById('minLpg').innerHTML = minLpg + 'ppm';
    document.getElementById('avgLpg').innerHTML =
      Math.round(average(lpg)) + 'ppm';
    chartMaxLpg = Math.max(...lpg) + 20;
    if (Math.min(...temp) <= 0) {
      chartMinLpg = Math.min(...lpg) - 20;
    } else {
      chartMinLpg = 0;
    }
  } else {
    Swal.fire({
      title: 'Not Exists',
      html: `${no_data_in_that_date}`,
      icon: 'error',
    });
    chartMaxTemp = 100;
    chartMinTemp = -50;
    chartMaxHumi = 100;
    chartMinHumi = 0;
    chartMaxCo = 1000;
    chartMinCo = -500;
    chartMaxLpg = 1000;
    chartMinLpg = -500;
  }
  // 차트 데이터
  var config1 = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: () => {
            if (locale === 'en') {
              return `Temperature`;
            } else if (locale === 'ko') {
              return '온도';
            }
          },
          data: temp,
          fill: false,
          borderColor: '#36a2eb',
          tension: 0.1,
          //backgroundColor: '#36a2eb',
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: chartMinTemp,
          max: chartMaxTemp,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: () => {
            if (locale === 'en') {
              return `Temperature`;
            } else if (locale === 'ko') {
              return '온도';
            }
          },
          font: {
            size: 25,
          },
        },
      },
    },
  };

  var config2 = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: () => {
            if (locale === 'en') {
              return `Humidity`;
            } else if (locale === 'ko') {
              return '습도';
            }
          },
          data: humi,
          fill: false,
          borderColor: '#8fbe96',
          tension: 0.1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: chartMinHumi,
          max: chartMaxHumi,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: () => {
            if (locale === 'en') {
              return `Humidity`;
            } else if (locale === 'ko') {
              return '습도';
            }
          },
          font: {
            size: 25,
          },
        },
      },
    },
  };

  var config3 = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: () => {
            if (locale === 'en') {
              return `CO`;
            } else if (locale === 'ko') {
              return '일산화탄소';
            }
          },
          data: co,
          fill: false,
          borderColor: '#e04006',
          tension: 0.1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: chartMinCo,
          max: chartMaxCo,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: () => {
            if (locale === 'en') {
              return `CO`;
            } else if (locale === 'ko') {
              return '일산화탄소';
            }
          },
          font: {
            size: 25,
          },
        },
      },
    },
  };

  var config4 = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'LPG',
          data: lpg,
          fill: false,
          borderColor: '#f29d00',
          tension: 0.1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: chartMinLpg,
          max: chartMaxLpg,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'LPG',
          font: {
            size: 25,
          },
        },
      },
    },
  };

  // 차트 생성
  var chart1 = new Chart(ctx1, config1);
  var chart2 = new Chart(ctx2, config2);
  var chart3 = new Chart(ctx3, config3);
  var chart4 = new Chart(ctx4, config4);

  // (function wait() {
  //     setTimeout(wait, 1000000);
  // })();
  return { charts: [chart1, chart2, chart3, chart4] };
}
