'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Addresses',
      [
        {
          address: '강원도 원주시 문막읍 원문로 2298',
          latitude: 37.2921548,
          longitude: 127.7882361,
        },
        {
          address:
            '세종특별자치시 부강면 연청로 745-46, (중부복합물류터미널 5동 배송센터)',
          latitude: 36.5448046,
          longitude: 127.3565168,
        },
        {
          address: '강원도 원주시 흥업면 원문로 898',
          latitude: 37.3434879,
          longitude: 127.8824656,
        },
        {
          address: '강원도 원주시 문막읍 동건길 61',
          latitude: 37.3161593,
          longitude: 127.8384508,
        },
        {
          address: '충청북도 음성군 대소면 대소산단로 39-5',
          latitude: 36.9812968,
          longitude: 127.4600621,
        },
        {
          address: '강원도 원주시 호저면 호매곡1길 97',
          latitude: 37.397218,
          longitude: 127.9259266,
        },
        {
          address:
            '세종특별자치시 부강면 연청로 745-46, (중부복합물류터미널 6동 배송센터)',
          latitude: 36.5448046,
          longitude: 127.3565168,
        },
        {
          address: '강원도 원주시 문막읍 원문로 2057',
          latitude: 37.3014218,
          longitude: 127.8033424,
        },
        {
          address: '강원도 강릉시 연곡면 동해대로 4100-36',
          latitude: 37.8497411,
          longitude: 128.845702,
        },
        {
          address: '강원도 강릉시 구정면 범일로 50-34',
          latitude: 37.7144361,
          longitude: 128.9117754,
        },
        {
          address: '강원도 강릉시 구정면 금평로 52-3',
          latitude: 37.711457,
          longitude: 128.8876096,
        },
        {
          address: '강원도 고성군 간성읍 동호길 88',
          latitude: 38.3914487,
          longitude: 128.4835219,
        },
        {
          address: '강원도 철원군 동송읍 상노로 189-38, 대일산업사',
          latitude: 38.1533725,
          longitude: 127.221054,
        },
        {
          address: '강원도 양구군 남면 구암리 556-18',
          latitude: 38.0835124,
          longitude: 128.001645,
        },
        {
          address: '강원도 춘천시 퇴계공단1길 34 (퇴계동)',
          latitude: 37.8459284,
          longitude: 127.7370435,
        },
        {
          address: '세종특별자치시 부강면 금호안골길 20',
          latitude: 36.5018019,
          longitude: 127.3668246,
        },
        {
          address: '강원도 원주시 서원대로 308-6 (명륜동)',
          latitude: 37.3402354,
          longitude: 127.9393382,
        },
        {
          address: '강원도 원주시 흥업면 승안동길 93-17',
          latitude: 37.3128821,
          longitude: 127.8903676,
        },
        {
          address: '강원도 강릉시 구정면 구정중앙로 192',
          latitude: 37.7148645,
          longitude: 128.8767969,
        },
        {
          address: '경기도 김포시 승가로 18-2 (풍무동)',
          latitude: 37.6078783,
          longitude: 126.7210712,
        },
        {
          address: '충청남도 서천군 장항읍 신창서로 33',
          latitude: 36.0117658,
          longitude: 126.6852858,
        },
        {
          address: '충청남도 서천군 장항읍 장산로 149',
          latitude: 36.0111368,
          longitude: 126.680035,
        },
        {
          address: '충청남도 서천군 장항읍 장산로 300-1, 한솔제지물류창고',
          latitude: 36.0078125,
          longitude: 126.6912602,
        },
        {
          address:
            '전라북도 군산시 외항로 839 (소룡동, 외 오식도동 813-2(야적장))',
          latitude: 35.9547785,
          longitude: 126.5805359,
        },
        {
          address: '전라북도 군산시 외항안길 174, 대한통운  (소룡동)',
          latitude: 35.9686891,
          longitude: 126.6189211,
        },
        {
          address: '전라북도 군산시 무역로 87 (오식도동)',
          latitude: 35.9518074,
          longitude: 126.5525674,
        },
        {
          address: '전라북도 군산시 자유무역로 273 (오식도동)',
          latitude: 35.9689096,
          longitude: 126.5464903,
        },
        {
          address: '전라북도 군산시 외항로 928 (소룡동)',
          latitude: 35.9623613,
          longitude: 126.5984206,
        },
        {
          address: '전라북도 군산시 옥산면 산성로 222',
          latitude: 35.9411477,
          longitude: 126.7493437,
        },
        {
          address: '충청북도 청주시 서원구 남이면 연청로 1263-16',
          latitude: 36.560304,
          longitude: 127.4338049,
        },
        {
          address:
            '충청북도 청주시 서원구 남이면 연청로 1365 (유한회사광복농산)',
          latitude: 36.567331,
          longitude: 127.4276205,
        },
        {
          address: '충청북도 청주시 흥덕구 강내면 저산태성로 268-24',
          latitude: 36.5769151,
          longitude: 127.3553086,
        },
        {
          address: '충청북도 청주시 흥덕구 옥산면 오송가락로 834',
          latitude: 36.6623972,
          longitude: 127.3755109,
        },
        {
          address: '충청북도 청주시 서원구 남이면 척산5길 17-41',
          latitude: 36.5596967,
          longitude: 127.4256659,
        },
        {
          address: '충청북도 청주시 서원구 남이면 청남로 898',
          latitude: 36.560304,
          longitude: 127.4338049,
        },
        {
          address: '충청북도 청주시 흥덕구 오송읍 쌍청길 5',
          latitude: 36.6370179,
          longitude: 127.4696705,
        },
        {
          address: '충청남도 천안시 동남구 광덕면 세종로 4186',
          latitude: 36.6910629,
          longitude: 127.15939470000001,
        },
        {
          address: '경상북도 칠곡군 지천면 금호로 272 (화물취급장)',
          latitude: 35.9584669,
          longitude: 128.4496262,
        },
        {
          address: '경상북도 칠곡군 왜관읍 삼청5길 50-7',
          latitude: 35.9795177,
          longitude: 128.4332608,
        },
        {
          address: '경상북도 칠곡군 가산면 다부거문1길 14',
          latitude: 36.0440604,
          longitude: 128.5204046,
        },
        {
          address: '경상북도 칠곡군 왜관읍 공단로6길 10 (외 1필지)',
          latitude: 35.9642486,
          longitude: 128.4117688,
        },
        {
          address: '경상북도 칠곡군 지천면 금호로 272, 사동 (영남복합물류)',
          latitude: 35.9572561,
          longitude: 128.4498455,
        },
        {
          address:
            '경기도 파주시 적성면 적성산단3로 10, 한국출판협동조합 적성물류센터',
          latitude: 37.954696,
          longitude: 126.9192185,
        },
        {
          address: '경기도 파주시 평화로342번길 120 (검산동)',
          latitude: 37.77440480000001,
          longitude: 126.7466195,
        },
        {
          address: '경기도 파주시 파주읍 정문로 637',
          latitude: 37.8135844,
          longitude: 126.816152,
        },
        {
          address: '경기도 파주시 파주읍 파주리 309번지',
          latitude: 37.8388033,
          longitude: 126.8144777,
        },
        {
          address: '경기도 파주시 문발로 77, 북센 (문발동)',
          latitude: 37.7023741,
          longitude: 126.6853832,
        },
        {
          address: '경기도 파주시 소라지로 321 (송촌동)',
          latitude: 37.750168,
          longitude: 126.6883189,
        },
        {
          address: '경기도 파주시 탄현면 오금리 202번지',
          latitude: 37.8171834,
          longitude: 126.7160827,
        },
        {
          address: '경기도 파주시 파주읍 윗가마울길 77',
          latitude: 37.8185262,
          longitude: 126.831565,
        },
        {
          address: '경기도 파주시 탄현면 웅지로 44-78',
          latitude: 37.8101398,
          longitude: 126.7353379,
        },
        {
          address: '경기도 파주시 탄현면 축현리 316번지 2호',
          latitude: 37.8025271,
          longitude: 126.7332966,
        },
        {
          address: '경기도 파주시 조리읍 봉천로 28 (조리농협)',
          latitude: 37.7447004,
          longitude: 126.8088594,
        },
        {
          address: '경기도 파주시 파주읍 아랫도장길 386-8',
          latitude: 37.8109616,
          longitude: 126.8037504,
        },
        {
          address: '경기도 파주시 탄현면 헤이리로133번길 73',
          latitude: 37.7955962,
          longitude: 126.6914581,
        },
        {
          address: '경기도 파주시 교하로 1249 (오도동)',
          latitude: 37.7492023,
          longitude: 126.7234907,
        },
        {
          address: '경기도 파주시 월롱면 통일로644번길 35',
          latitude: 37.7688548,
          longitude: 126.7942095,
        },
        {
          address: '경기도 파주시 파주읍 백석리 453번지 1호',
          latitude: 37.8030272,
          longitude: 126.7977034,
        },
        {
          address: '경기도 파주시 탄현면 월롱산로 296 (하이마트경인물류센터)',
          latitude: 37.8016687,
          longitude: 126.7549847,
        },
        {
          address: '경기도 파주시 적성면 객현리 515번지 1호',
          latitude: 37.9728772,
          longitude: 126.9380372,
        },
        {
          address: '경기도 파주시 탄현면 오금리 151번지',
          latitude: 37.8179534,
          longitude: 126.717622,
        },
        {
          address: '경기도 양주시 백석읍 양주산성로 572',
          latitude: 37.7878042,
          longitude: 126.9910802,
        },
        {
          address: '경기도 양주시 장흥면 가마골로 70-67',
          latitude: 37.72519,
          longitude: 126.9795248,
        },
        {
          address: '경기도 용인시 처인구 백암면 죽양대로 808-18',
          latitude: 37.1432915,
          longitude: 127.3955684,
        },
        {
          address: '경기도 화성시 송산면 이봉산동길 10-5',
          latitude: 37.2292876,
          longitude: 126.6961625,
        },
        {
          address: '경기도 용인시 기흥구 구갈로 71-25 (신갈동)',
          latitude: 37.2812182,
          longitude: 127.1087805,
        },
        {
          address: '경상남도 창원시 진해구 천자로 278 (장천동)',
          latitude: 35.1434946,
          longitude: 128.6984933,
        },
        {
          address: '경상남도 창원시 마산회원구 무역로 95 (봉암동)',
          latitude: 35.2117034,
          longitude: 128.5990417,
        },
        {
          address: '경상남도 창원시 마산합포구 해안대로 234-56 (신포동1가)',
          latitude: 35.1949992,
          longitude: 128.569579,
        },
        {
          address: '경상남도 창원시 마산회원구 내서읍 중리공단로 211',
          latitude: 35.2482414,
          longitude: 128.5164991,
        },
        {
          address: '경상남도 창원시 의창구 차상로106번길 4 (팔용동)',
          latitude: 35.2335945,
          longitude: 128.6354473,
        },
        {
          address: '경상남도 창원시 진해구 행암로92번안길 28 (장천동)',
          latitude: 35.1302184,
          longitude: 128.6981616,
        },
        {
          address: '경상남도 창원시 의창구 대산면 대산북로 677',
          latitude: 35.361748,
          longitude: 128.7085921,
        },
        {
          address: '경상남도 창원시 의창구 동읍 신방로 62',
          latitude: 35.2702899,
          longitude: 128.7031816,
        },
        {
          address: '경상남도 창원시 성산구 창원대로 480 (대원동)',
          latitude: 35.2259709,
          longitude: 128.6467634,
        },
        {
          address: '경기도 여주시 가남읍 여주남로 782',
          latitude: 37.2279081,
          longitude: 127.5721212,
        },
        {
          address: '충청북도 괴산군 괴산읍 문무로 401',
          latitude: 36.8369204,
          longitude: 127.8191141,
        },
        {
          address: '충청북도 괴산군 괴산읍 대덕길 88',
          latitude: 36.8179807,
          longitude: 127.8101939,
        },
        {
          address: '경기도 용인시 처인구 백암면 석실로 28',
          latitude: 37.1765597,
          longitude: 127.3426203,
        },
        {
          address: '경기도 용인시 처인구 원삼면 죽양대로1650번길 36',
          latitude: 37.1875886,
          longitude: 127.3333569,
        },
        {
          address: '경상남도 양산시 어곡공단2길 28 (어곡동, BJ로지스틱(주))',
          latitude: 35.3716664,
          longitude: 129.0135177,
        },
        {
          address: '대구광역시 달서구 호산동로 94 (호산동)',
          latitude: 35.84365349999999,
          longitude: 128.4868389,
        },
        {
          address: '대구광역시 달서구 월배로5길 19 (유천동)',
          latitude: 35.8125186,
          longitude: 128.5154516,
        },
        {
          address: '대구광역시 달서구 성서공단로 235 (장동)',
          latitude: 35.8365372,
          longitude: 128.5080435,
        },
        {
          address: '경기도 이천시 호법면 덕평로581번길 10 (CJ물류센터)',
          latitude: 37.2304161,
          longitude: 127.3654691,
        },
        {
          address: '경기도 이천시 마장면 덕이로 22-18',
          latitude: 37.2303893,
          longitude: 127.3695122,
        },
        {
          address: '경기도 이천시 모가면 공원로218번길 158-48',
          latitude: 37.17694110000001,
          longitude: 127.4577552,
        },
        {
          address: '경기도 이천시 마장면 서이천로 675',
          latitude: 37.2802877,
          longitude: 127.3978317,
        },
        {
          address: '경기도 이천시 마장면 중부대로533번길 8',
          latitude: 37.2558218,
          longitude: 127.3958857,
        },
        {
          address: '대구광역시 달성군 하빈면 달구벌대로8길 22',
          latitude: 35.8757424,
          longitude: 128.3996201,
        },
        {
          address: '경기도 이천시 대월면 대월로821번길 71',
          latitude: 37.2272013,
          longitude: 127.4875659,
        },
        {
          address: '경기도 이천시 설성면 진상미로264번길 21-19',
          latitude: 37.1079533,
          longitude: 127.5374574,
        },
        {
          address: '경기도 이천시 설성면 진상미로531번길 14',
          latitude: 37.1225588,
          longitude: 127.5197603,
        },
        {
          address: '경기도 이천시 마장면 서이천로 201 (물류창고)',
          latitude: 37.2796108,
          longitude: 127.3923722,
        },
        {
          address: '대구광역시 달성군 구지면 달성2차로 200',
          latitude: 35.6391531,
          longitude: 128.4291592,
        },
        {
          address: '경기도 이천시 백사면 지읍로 91',
          latitude: 37.3168256,
          longitude: 127.480657,
        },
        {
          address: '경기도 광주시 순암로 535 (삼동)',
          latitude: 37.4108797,
          longitude: 127.1953446,
        },
        {
          address: '전라북도 김제시 백구면 학동로 113',
          latitude: 35.8705963,
          longitude: 126.97958,
        },
        {
          address: '전라북도 김제시 만경읍 몽포길 52-6',
          latitude: 35.8707695,
          longitude: 126.8059533,
        },
        {
          address: '전라북도 김제시 백구면 번영로 2513',
          latitude: 35.8932318,
          longitude: 126.9683906,
        },
        {
          address: '경기도 이천시 마장면 서이천로 91',
          latitude: 37.2604475,
          longitude: 127.3837892,
        },
        {
          address: '경기도 이천시 마장면 서이천로 383',
          latitude: 37.2593961,
          longitude: 127.393165,
        },
        {
          address: '경기도 안양시 동안구 안양천동로 60 (호계동)',
          latitude: 37.3850373,
          longitude: 126.9416741,
        },
        {
          address: '경기도 이천시 호법면 안평로 96',
          latitude: 37.2325592,
          longitude: 127.4251168,
        },
        {
          address: '경기도 이천시 대월면 대월로932번길 94',
          latitude: 37.2361558,
          longitude: 127.5017476,
        },
        {
          address: '경기도 이천시 대월면 대월로932번길 63',
          latitude: 37.2369915,
          longitude: 127.500553,
        },
        {
          address: '경기도 이천시 마장면 덕평로 626',
          latitude: 37.2193376,
          longitude: 127.3789834,
        },
        {
          address:
            '경기도 이천시 마장면 덕평로 831-59 (현대로지스틱스덕평물류센터)',
          latitude: 37.2169179,
          longitude: 127.3723577,
        },
        {
          address: '대구광역시 달성군 옥포면 비슬로453길 15',
          latitude: 35.7909566,
          longitude: 128.4679387,
        },
        {
          address: '경기도 평택시 포승읍 남양만로 48',
          latitude: 37.0085985,
          longitude: 126.8144917,
        },
        {
          address: '경기도 평택시 포승읍 홍원농깨길 89',
          latitude: 37.0252499,
          longitude: 126.8696086,
        },
        {
          address: '경기도 평택시 산단로64번길 82 (모곡동)',
          latitude: 37.0312091,
          longitude: 127.0742024,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 86-31',
          latitude: 36.961817,
          longitude: 126.8479505,
        },
        {
          address: '경기도 수원시 영통구 삼성로 318 (원천동)',
          latitude: 37.2665661,
          longitude: 127.0688125,
        },
        {
          address:
            '경기도 평택시 안중읍 서동대로 1743 ((주)한라홀딩스 안중센터)',
          latitude: 36.990133,
          longitude: 126.930554,
        },
        {
          address: '경기도 평택시 진위면 서탄로 33',
          latitude: 37.1035721,
          longitude: 127.0583226,
        },
        {
          address: '경기도 평택시 도일유통길 98 (도일동)',
          latitude: 37.0400686,
          longitude: 127.1070691,
        },
        {
          address: '경기도 광주시 도척면 국사봉로 35',
          latitude: 37.3237168,
          longitude: 127.3399813,
        },
        {
          address: '경기도 광주시 오포읍 오포로 614',
          latitude: 37.3514244,
          longitude: 127.21501,
        },
        {
          address: '경기도 평택시 진위면 동부대로 50',
          latitude: 37.1082693,
          longitude: 127.0809486,
        },
        {
          address: '경기도 광주시 오포읍 회안대로71번길 24',
          latitude: 37.359663,
          longitude: 127.2440589,
        },
        {
          address: '경기도 광주시 경충대로 2056 (중대동)',
          latitude: 37.4066786,
          longitude: 127.2173377,
        },
        {
          address: '경기도 평택시 도일유통길 69 (도일동)',
          latitude: 37.0382691,
          longitude: 127.1039742,
        },
        {
          address: '경기도 평택시 도일유통길 64 (도일동)',
          latitude: 37.0390312,
          longitude: 127.1020618,
        },
        {
          address: '경기도 광주시 도척면 도척로 401-65',
          latitude: 37.3151113,
          longitude: 127.3415999,
        },
        {
          address: '경기도 광주시 경충대로 1802 (장지동)',
          latitude: 37.4008376,
          longitude: 127.2363785,
        },
        {
          address: '경기도 평택시 서탄면 사리길 53',
          latitude: 37.1092616,
          longitude: 127.0458375,
        },
        {
          address: '경기도 용인시 처인구 백암면 백암로 49',
          latitude: 37.1530776,
          longitude: 127.3839905,
        },
        {
          address: '경기도 평택시 서탄면 서탄로 363',
          latitude: 37.1146572,
          longitude: 127.0293825,
        },
        {
          address: '경기도 평택시 도일유통길 87 (도일동)',
          latitude: 37.0397829,
          longitude: 127.1039565,
        },
        {
          address: '경기도 평택시 포승읍 불당길 128-17',
          latitude: 36.98970449999999,
          longitude: 126.8661841,
        },
        {
          address: '경기도 평택시 진위면 동부대로 56',
          latitude: 37.1086365,
          longitude: 127.0827567,
        },
        {
          address: '충청남도 천안시 서북구 성거읍 망향로 903-11',
          latitude: 36.8951567,
          longitude: 127.2117167,
        },
        {
          address: '충청남도 천안시 서북구 성거읍 삼곡2길 6',
          latitude: 36.8929932,
          longitude: 127.1866018,
        },
        {
          address: '경상북도 김천시 대항면 이로리길 69',
          latitude: 36.1262822,
          longitude: 128.0641827,
        },
        {
          address: '충청남도 천안시 동남구 성남면 5산단로 242',
          latitude: 36.7492652,
          longitude: 127.2696958,
        },
        {
          address: '충청남도 천안시 동남구 삼룡3길 39, 천안농협창고 (삼룡동)',
          latitude: 36.7803006,
          longitude: 127.1687507,
        },
        {
          address: '충청남도 천안시 서북구 성거읍 석문길 47',
          latitude: 36.8497391,
          longitude: 127.1760535,
        },
        {
          address: '경기도 평택시 포승읍 평택항로 306',
          latitude: 36.9851712,
          longitude: 126.8364983,
        },
        {
          address: '경기도 평택시 신평로 41 (유천동)',
          latitude: 36.9716238,
          longitude: 127.1076177,
        },
        {
          address: '경상북도 김천시 이로리길 93 (다수동)',
          latitude: 36.1253944,
          longitude: 128.0626766,
        },
        {
          address: '경기도 김포시 월곶면 고정로 79-34',
          latitude: 37.7252973,
          longitude: 126.5790431,
        },
        {
          address: '경기도 평택시 포승읍 포승향남로537번길 40',
          latitude: 37.0012477,
          longitude: 126.8309713,
        },
        {
          address: '경상북도 김천시 대덕면 남김천대로 826 (대산농협협동조합)',
          latitude: 35.9174037,
          longitude: 127.9693673,
        },
        {
          address: '경기도 평택시 포승읍 포승공단로117번길 135',
          latitude: 36.990345,
          longitude: 126.8372856,
        },
        {
          address: '경기도 평택시 진위면 경기대로 2038',
          latitude: 37.1261931,
          longitude: 127.0677756,
        },
        {
          address: '대구광역시 북구 매천로2길 58-50 (팔달동)',
          latitude: 35.8951721,
          longitude: 128.5429851,
        },
        {
          address: '경기도 안산시 단원구 번영1로 35 (성곡동)',
          latitude: 37.3215937,
          longitude: 126.7353665,
        },
        {
          address: '대구광역시 북구 노원로 125 (노원동3가)',
          latitude: 35.8971328,
          longitude: 128.5739276,
        },
        {
          address: '전라남도 해남군 문내면 명량로 837',
          latitude: 34.5824542,
          longitude: 126.3693467,
        },
        {
          address: '경상북도 김천시 덕곡동 1021 외',
          latitude: 36.1167573,
          longitude: 128.1549364,
        },
        {
          address: '경기도 용인시 기흥구 원고매로2번길 29 (고매동)',
          latitude: 37.220206,
          longitude: 127.1049433,
        },
        {
          address: '경기도 여주시 능서면 마장로 132',
          latitude: 37.29812769999999,
          longitude: 127.5802575,
        },
        {
          address: '경기도 여주시 하거3길 61-42',
          latitude: 37.2236561,
          longitude: 127.636685,
        },
        {
          address: '경기도 여주시 명품로 360 (상거동)',
          latitude: 37.248017,
          longitude: 127.629581,
        },
        {
          address: '경기도 여주시 점동면 장여로 545',
          latitude: 37.1650803,
          longitude: 127.6346505,
        },
        {
          address: '경기도 안산시 단원구 성곡로134번길 14 (성곡동)',
          latitude: 37.3205534,
          longitude: 126.7594964,
        },
        {
          address: '경기도 안산시 단원구 번영1로 19, 대경티엘에스(주) (성곡동)',
          latitude: 37.3230325,
          longitude: 126.7340557,
        },
        {
          address:
            '충청북도 청주시 흥덕구 공단로 142, 농수산물유통공사충북지사 (송정동)',
          latitude: 36.6431024,
          longitude: 127.4363827,
        },
        {
          address: '경기도 광주시 오포읍 오포로520번길 24-20',
          latitude: 37.3437329,
          longitude: 127.2162503,
        },
        {
          address: '경기도 의왕시 가나무로 179 (이동, 남부철도화물기지 21동)',
          latitude: 37.3398781,
          longitude: 126.9503105,
        },
        {
          address: '경기도 광주시 곤지암읍 새재길 164-42',
          latitude: 37.3366434,
          longitude: 127.4035337,
        },
        {
          address: '경기도 광주시 곤지암읍 구수동길 26-20',
          latitude: 37.3314723,
          longitude: 127.3730818,
        },
        {
          address: '경기도 의왕시 왕송못동로 79 (삼동)',
          latitude: 37.3196181,
          longitude: 126.9459986,
        },
        {
          address: '경기도 군포시 번영로 82, K동 1층 (부곡동)',
          latitude: 37.3305869,
          longitude: 126.9361227,
        },
        {
          address: '경기도 의왕시 벌모루앞길 27 (포일동)',
          latitude: 37.3910508,
          longitude: 126.9877623,
        },
        {
          address: '대구광역시 동구 화랑로 584 (용계동)',
          latitude: 35.873631,
          longitude: 128.6826758,
        },
        {
          address: '대구광역시 서구 국채보상로23길 13 (이현동)',
          latitude: 35.8699466,
          longitude: 128.5438972,
        },
        {
          address: '대구광역시 동구 팔공로45길 11 (봉무동)',
          latitude: 35.9181586,
          longitude: 128.6397278,
        },
        {
          address: '경기도 군포시 부곡동 451번지',
          latitude: 37.3308523,
          longitude: 126.9375047,
        },
        {
          address:
            '경기도 군포시 번영로 82, 한국복합물류(주) A, B, E, J, I, Q동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '대구광역시 서구 와룡로90길 64 (이현동)',
          latitude: 35.8705472,
          longitude: 128.5453706,
        },
        {
          address: '경기도 군포시 번영로 82 (부곡동)',
          latitude: 37.331702,
          longitude: 126.9307064,
        },
        {
          address: '대구광역시 서구 국채보상로5길 28 (이현동)',
          latitude: 35.8700502,
          longitude: 128.5340566,
        },
        {
          address: '대구광역시 동구 안심로102길 9 (괴전동)',
          latitude: 35.8707753,
          longitude: 128.7398785,
        },
        {
          address: '경기도 군포시 번영로 82, 한국복합물류(주) (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경기도 군포시 번영로 82 (부곡동, 한국복합물류(주))',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '대구광역시 동구 금호강변로 57 (용계동)',
          latitude: 35.8753165,
          longitude: 128.6946139,
        },
        {
          address: '경기도 군포시 번영로 82, H,N동 (부곡동, 한국복합물류(주))',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경기도 안성시 일죽면 고은리 507번지 21호',
          latitude: 37.1189226,
          longitude: 127.437733,
        },
        {
          address: '경기도 안성시 원곡면 뱀골길 9-32',
          latitude: 37.0531824,
          longitude: 127.1315622,
        },
        {
          address: '경기도 남양주시 수동면 비룡로 940',
          latitude: 37.7184484,
          longitude: 127.316965,
        },
        {
          address: '경기도 남양주시 진접읍 양진로 962',
          latitude: 37.7051091,
          longitude: 127.1814858,
        },
        {
          address: '경기도 남양주시 진건읍 진건오남로 414',
          latitude: 37.6732032,
          longitude: 127.2031297,
        },
        {
          address: '경기도 남양주시 화도읍 경춘로2247번길 8',
          latitude: 37.6573099,
          longitude: 127.3380856,
        },
        {
          address: '경기도 남양주시 수동면 비룡로 958',
          latitude: 37.7191863,
          longitude: 127.315715,
        },
        {
          address: '경기도 광주시 곤지암읍 독고개길86번길 23',
          latitude: 37.3516879,
          longitude: 127.3104975,
        },
        {
          address: '경기도 의왕시 가나무로 179 (이동, 남부철도화물기지 20동)',
          latitude: 37.3398781,
          longitude: 126.9503105,
        },
        {
          address: '경기도 의왕시 고산로 86 (고천동, 롯데제과 의왕물류창고)',
          latitude: 37.3521163,
          longitude: 126.962116,
        },
        {
          address: '경기도 광주시 곤지암읍 경충대로 135-26',
          latitude: 37.3271167,
          longitude: 127.3836017,
        },
        {
          address: '경기도 광주시 도척면 국사봉로 97-25',
          latitude: 37.3196233,
          longitude: 127.3443835,
        },
        {
          address: '경기도 광주시 진토길 69 (목동)',
          latitude: 37.3820614,
          longitude: 127.2073352,
        },
        {
          address: '경기도 안성시 미양면 보체리 348번지 1호',
          latitude: 36.9646724,
          longitude: 127.2342107,
        },
        {
          address: '경기도 안성시 공도읍 기업단지로 208',
          latitude: 37.0121139,
          longitude: 127.1597781,
        },
        {
          address: '경상북도 경산시 압량면 압량길 11',
          latitude: 35.847597,
          longitude: 128.7663139,
        },
        {
          address: '경기도 안성시 죽산면 걸미로 145-29',
          latitude: 37.019198,
          longitude: 127.435232,
        },
        {
          address: '경상북도 경산시 진량읍 대구대로 529',
          latitude: 35.8804898,
          longitude: 128.8525185,
        },
        {
          address: '경상북도 경산시 진량읍 공단8로 238',
          latitude: 35.877038,
          longitude: 128.8346628,
        },
        {
          address: '경상북도 구미시 1공단로10길 5 (공단동)',
          latitude: 36.1016239,
          longitude: 128.382378,
        },
        {
          address: '경상북도 구미시 화신로8길 4-59 (광평동)',
          latitude: 36.1117836,
          longitude: 128.361053,
        },
        {
          address: '전라남도 나주시 영산포로 22 (이창동)',
          latitude: 34.98397680000001,
          longitude: 126.7062551,
        },
        {
          address: '전라남도 나주시 동수농공단지길 62-237 (운곡동)',
          latitude: 34.9900212,
          longitude: 126.6864249,
        },
        {
          address: '전라남도 나주시 왕곡면 영산포로 22',
          latitude: 34.9837174,
          longitude: 126.7052604,
        },
        {
          address: '경기도 시흥시 희망공원로 117 (정왕동)',
          latitude: 37.3348758,
          longitude: 126.7140251,
        },
        {
          address: '경기도 시흥시 오이도로 22-12 (정왕동)',
          latitude: 37.3472117,
          longitude: 126.7026075,
        },
        {
          address: '경기도 양주시 은현면 화합로 1187',
          latitude: 37.8495427,
          longitude: 127.0470223,
        },
        {
          address: '경기도 양주시 평화로1597번길 41-1 (회정동)',
          latitude: 37.8314342,
          longitude: 127.050686,
        },
        {
          address: '경기도 양주시 평화로1599번길 37-7 (회정동)',
          latitude: 37.8328865,
          longitude: 127.0519011,
        },
        {
          address: '경상남도 사천시 정동면 진삼로 1314',
          latitude: 35.0696973,
          longitude: 128.0799933,
        },
        {
          address: '경기도 수원시 영통구 중부대로 480 (원천동)',
          latitude: 37.2678945,
          longitude: 127.0668873,
        },
        {
          address: '경기도 안성시 죽산면 두메호수로 60',
          latitude: 37.0093732,
          longitude: 127.4311505,
        },
        {
          address: '경기도 안성시 양성면 양성로 325',
          latitude: 37.0828186,
          longitude: 127.2058998,
        },
        {
          address: '경기도 안성시 양성면 양성로 453',
          latitude: 37.09362369999999,
          longitude: 127.211533,
        },
        {
          address: '경기도 군포시 부곡동 451번지 복합물류터미널 L동',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address:
            '경기도 군포시 번영로 82, 한국복합물류(주) 가,다,라동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경기도 군포시 부곡동 451번지 복합물류터미널 A동',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경기도 군포시 부곡동 451번지 복합물류터미널 사동',
          latitude: 37.3299578,
          longitude: 126.9410063,
        },
        {
          address:
            '경기도 군포시 번영로 82, 한국복합물류(주) O동 5,6층 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경기도 군포시 엘에스로45번길 46 (금정동)',
          latitude: 37.365596,
          longitude: 126.9509763,
        },
        {
          address: '경기도 군포시 번영로 82, 카동 (부곡동, 한국복합물류(주))',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경기도 연천군 장남면 장백로 20-32',
          latitude: 37.9876492,
          longitude: 126.8635788,
        },
        {
          address: '경기도 포천시 영중면 양문공단로 36',
          latitude: 38.0092754,
          longitude: 127.2520189,
        },
        {
          address: '경기도 포천시 가산면 부흥로 679',
          latitude: 37.8109569,
          longitude: 127.1882334,
        },
        {
          address: '경기도 연천군 미산면 광동리 산 51번지',
          latitude: 38.0411916,
          longitude: 126.9351784,
        },
        {
          address: '경기도 연천군 군남면 황지리 106번지 2호',
          latitude: 38.02886830000001,
          longitude: 127.0478939,
        },
        {
          address: '경기도 안성시 공도읍 기업단지로 264',
          latitude: 37.0140913,
          longitude: 127.165058,
        },
        {
          address: '경기도 용인시 처인구 남사면 봉명리 574번지',
          latitude: 37.1122676,
          longitude: 127.120164,
        },
        {
          address: '경기도 용인시 처인구 이동면 화산로 228',
          latitude: 37.1479713,
          longitude: 127.2260558,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 97-49, 자유무역지역 AMB항공화물창고 F1-2,4 (운서동)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '경기도 용인시 기흥구 기흥단지로121번길 30 (고매동)',
          latitude: 37.2285411,
          longitude: 127.1086402,
        },
        {
          address: '경기도 용인시 기흥구 하갈로15번길 34 (보라동)',
          latitude: 37.2497785,
          longitude: 127.1026109,
        },
        {
          address: '경기도 용인시 처인구 남사면 통삼리 산 100번지 1호',
          latitude: 37.122363,
          longitude: 127.1331649,
        },
        {
          address: '경기도 용인시 기흥구 동백죽전대로 321 (중동)',
          latitude: 37.2691844,
          longitude: 127.1584387,
        },
        {
          address: '경기도 용인시 기흥구 하갈로15번길 54 (보라동)',
          latitude: 37.2483646,
          longitude: 127.1030785,
        },
        {
          address: '경기도 용인시 처인구 남사면 봉명리 208번지 1호',
          latitude: 37.1161743,
          longitude: 127.1271559,
        },
        {
          address: '경기도 용인시 처인구 원삼면 맹리로2번길 1',
          latitude: 37.1933152,
          longitude: 127.3268288,
        },
        {
          address: '경기도 용인시 처인구 양지면 남평로199번길 5',
          latitude: 37.2302614,
          longitude: 127.3034164,
        },
        {
          address: '경기도 용인시 처인구 백암면 백암로 17',
          latitude: 37.1504992,
          longitude: 127.3860164,
        },
        {
          address: '경기도 용인시 기흥구 동탄기흥로 776 (고매동)',
          latitude: 37.2271258,
          longitude: 127.102707,
        },
        {
          address: '경기도 용인시 처인구 양지면 중부대로2401번길 6',
          latitude: 37.2377815,
          longitude: 127.3067036,
        },
        {
          address: '경기도 용인시 처인구 양지면 양주로 227',
          latitude: 37.245322,
          longitude: 127.2596683,
        },
        {
          address: '경기도 용인시 수지구 죽전로 228 (죽전동)',
          latitude: 37.329937,
          longitude: 127.1288518,
        },
        {
          address: '충청북도 청주시 서원구 남이면 부강외천로 382',
          latitude: 36.560304,
          longitude: 127.4338049,
        },
        {
          address: '경기도 용인시 처인구 양지면 죽양대로2071번길 7',
          latitude: 37.2183197,
          longitude: 127.3155994,
        },
        {
          address: '경기도 용인시 기흥구 중부대로 745 (상하동)',
          latitude: 37.257145,
          longitude: 127.1463124,
        },
        {
          address: '경기도 용인시 처인구 백암면 청계로 124',
          latitude: 37.1551281,
          longitude: 127.3981097,
        },
        {
          address: '경기도 용인시 수지구 수지로 422 (동천동)',
          latitude: 37.33400839999999,
          longitude: 127.0986985,
        },
        {
          address: '경기도 용인시 처인구 원삼면 미평로81번길 2',
          latitude: 37.1830288,
          longitude: 127.3274336,
        },
        {
          address: '경기도 용인시 처인구 원삼면 미평로 84',
          latitude: 37.183693,
          longitude: 127.3271349,
        },
        {
          address: '경기도 용인시 처인구 백암면 고안로51번길 136-11',
          latitude: 37.1409566,
          longitude: 127.412945,
        },
        {
          address: '경기도 용인시 기흥구 기곡로 32 (하갈동)',
          latitude: 37.2495917,
          longitude: 127.0971236,
        },
        {
          address: '전라남도 광양시 태인4길 33 (태인동)',
          latitude: 34.9428637,
          longitude: 127.7618192,
        },
        {
          address: '전라남도 광양시 백운1로 79 (태인동)',
          latitude: 34.9398096,
          longitude: 127.7514906,
        },
        {
          address: '인천광역시 중구 제물량로 215 (항동4가)',
          latitude: 37.4713561,
          longitude: 126.6204919,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 98-30 (운서동, (주)범한판토스)',
          latitude: 37.48627159999999,
          longitude: 126.5078237,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 171 (운서동, 에이엠비물류센터 F4-3,4호)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '충청남도 서산시 성연면 명천1길 175',
          latitude: 36.8336734,
          longitude: 126.4985524,
        },
        {
          address:
            '인천광역시 중구 운서동 2091번지 95호 자유무역지역 AMB항공화물창고 F3-8, F3-9',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address: '인천광역시 중구 인항로 39 (신흥동3가)',
          latitude: 37.4585627,
          longitude: 126.6352537,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 146 (운서동, 아이벡스로지텍)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 171, 에이엠비 에프4-1,2동 (운서동)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 97-49 (운서동, 자유무역지역 공항물류단지 G3블럭)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 98-114, 인천국제공항자유무역지역 B1블럭동 B201,B202호 (운서동)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '전라남도 광양시 태인4길 45 (태인동)',
          latitude: 34.9429067,
          longitude: 127.7630376,
        },
        {
          address: '전라남도 광양시 태인4길 9 (태인동)',
          latitude: 34.942204,
          longitude: 127.7587077,
        },
        {
          address: '전라남도 광양시 태인4길 30 (태인동)',
          latitude: 34.9409839,
          longitude: 127.7621619,
        },
        {
          address: '인천광역시 중구 공항동로295번길 124 (운서동)',
          latitude: 37.46934419999999,
          longitude: 126.4602675,
        },
        {
          address:
            '인천광역시 중구 운서동 2091번지 95호 자유무역지역 공항물류단지 B1블럭 C214, D214',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address: '전라남도 광양시 옥곡면 신금로 215',
          latitude: 34.9783654,
          longitude: 127.7115952,
        },
        {
          address: '전라남도 광양시 담안길 115 (태인동)',
          latitude: 34.9408678,
          longitude: 127.7545527,
        },
        {
          address: '전라남도 광양시 제철로 1706 (금호동)',
          latitude: 34.930972,
          longitude: 127.7225069,
        },
        {
          address:
            '인천광역시 중구 운서동 2091번지 95호 자유무역지역 AMB항공화물창고 F3-4,5',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address: '인천광역시 중구 월미로 206 (북성동1가)',
          latitude: 37.4783809,
          longitude: 126.6002286,
        },
        {
          address: '전라남도 광양시 담안길 34 (태인동)',
          latitude: 34.9379083,
          longitude: 127.7488187,
        },
        {
          address: '전라남도 광양시 항만10로 23 (중동)',
          latitude: 34.9232823,
          longitude: 127.6914248,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 98-114, C동 202, 203호 (운서동, 공항물류단지-인천국제물류센터)',
          latitude: 37.4776629,
          longitude: 126.4816234,
        },
        {
          address: '전라남도 광양시 백운1로 136 (태인동)',
          latitude: 34.9405811,
          longitude: 127.757645,
        },
        {
          address:
            '인천광역시 중구 운서동 2091번지 95호 자유무역지역 공항물류단지 B3',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 98-114 (운서동, 삼성전자로지텍 B2)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '인천광역시 서구 백범로910번길 27 (가좌동)',
          latitude: 37.4892956,
          longitude: 126.6575867,
        },
        {
          address: '인천광역시 중구 서해대로 306 (신흥동3가)',
          latitude: 37.4539243,
          longitude: 126.6287986,
        },
        {
          address: '인천광역시 중구 서해대로209번길 13 (항동7가)',
          latitude: 37.4466966,
          longitude: 126.6213848,
        },
        {
          address: '인천광역시 중구 서해대로 135 (항동7가)',
          latitude: 37.4412174,
          longitude: 126.6179077,
        },
        {
          address:
            '인천광역시 중구 축항대로165번길 15 (항동7가, KCTC인천물류센터)',
          latitude: 37.4553878,
          longitude: 126.6146835,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 98-114 (운서동, 자유무역지역 공항물류단지 B1블럭 D203호)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '인천광역시 중구 운서동 2091번지 95호 자유무역지역 G4',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address: '인천광역시 중구 서해대로293번길 117 (항동7가)',
          latitude: 37.4572025,
          longitude: 126.6145313,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 146-2 (운서동, 현대로지스틱스)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '인천광역시 중구 축항대로69번길 29 (항동7가)',
          latitude: 37.4591056,
          longitude: 126.6085633,
        },
        {
          address:
            '인천광역시 중구 공항동로296번길 98-114, B1블럭동 A209호 (운서동, 자유무역지역 공항물류단지 )',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '충청남도 서산시 성연면 왕정리 서산테크로밸리 I9-5',
          latitude: 36.82289710000001,
          longitude: 126.451483,
        },
        {
          address: '충청남도 서산시 지곡면 한새지1길 42',
          latitude: 36.8898686,
          longitude: 126.4436837,
        },
        {
          address: '경기도 용인시 처인구 양지면 남평로 167-5',
          latitude: 37.2292282,
          longitude: 127.2990546,
        },
        {
          address: '경기도 용인시 처인구 남사읍 경기동로 386-12',
          latitude: 37.1380249,
          longitude: 127.1664016,
        },
        {
          address: '경기도 용인시 기흥구 기곡로 1 (하갈동)',
          latitude: 37.2529028,
          longitude: 127.1021545,
        },
        {
          address: '경기도 용인시 처인구 남사면 북리 868번지 1호',
          latitude: 37.153641,
          longitude: 127.1301523,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 225',
          latitude: 35.3113072,
          longitude: 129.0163436,
        },
        {
          address: '경상남도 창원시 의창구 동읍 동읍로 1063',
          latitude: 35.3448768,
          longitude: 128.6587031,
        },
        {
          address: '경상남도 창원시 마산회원구 자유무역1길 20 (양덕동, 기관실)',
          latitude: 35.2324298,
          longitude: 128.5865209,
        },
        {
          address: '경상남도 창원시 의창구 북면 단내로 703',
          latitude: 35.3405494,
          longitude: 128.5930205,
        },
        {
          address: '경상남도 창원시 성산구 완암로 84 (성산동)',
          latitude: 35.2069711,
          longitude: 128.6633755,
        },
        {
          address: '충청남도 아산시 염치읍 충무로358번길 11',
          latitude: 36.8128068,
          longitude: 127.0112695,
        },
        {
          address: '경상남도 창원시 의창구 동읍 석산길51번길 16',
          latitude: 35.3178181,
          longitude: 128.6589917,
        },
        {
          address: '경상남도 창원시 진해구 제덕동 498번지 4호',
          latitude: 35.1043371,
          longitude: 128.7388791,
        },
        {
          address:
            '경상남도 창원시 마산회원구 자유무역5길 7 (봉암동, (주)동방)',
          latitude: 35.2156205,
          longitude: 128.6060613,
        },
        {
          address: '경상남도 창원시 의창구 차룡로48번길 49 (팔용동)',
          latitude: 35.2420988,
          longitude: 128.6336457,
        },
        {
          address: '경상남도 창원시 진해구 행암로92번안길 30 (장천동)',
          latitude: 35.1302184,
          longitude: 128.6981616,
        },
        {
          address: '경상남도 창원시 성산구 적현로 319 (신촌동)',
          latitude: 35.19860560000001,
          longitude: 128.5919827,
        },
        {
          address: '충청남도 계룡시 두마면 사계로 206',
          latitude: 36.2595037,
          longitude: 127.2772002,
        },
        {
          address: '인천광역시 동구 보세로 74 (만석동)',
          latitude: 37.4866309,
          longitude: 126.614931,
        },
        {
          address:
            '경기도 오산시 황새로 109 (누읍동, 드림포워드킴스클럽물류센타)',
          latitude: 37.1366165,
          longitude: 127.0590848,
        },
        {
          address: '전라남도 목포시 달동 1330번지 30호 외',
          latitude: 34.7736319,
          longitude: 126.3168894,
        },
        {
          address: '전라남도 장흥군 장흥읍 장흥대로 3703',
          latitude: 34.6931134,
          longitude: 126.9020874,
        },
        {
          address: '경상남도 김해시 상동면 동북로 463',
          latitude: 35.3132589,
          longitude: 128.9677555,
        },
        {
          address: '경상남도 김해시 상동면 장척로 721-1',
          latitude: 35.3044373,
          longitude: 128.9301707,
        },
        {
          address:
            '경상남도 김해시 진영읍 진산대로 127 ((진영리 1014, 1015, 1016))',
          latitude: 35.31715,
          longitude: 128.7265293,
        },
        {
          address:
            '경상남도 김해시 진례면 진례로 33 ((신안리 101-2,-3, 102-1,-2))',
          latitude: 35.2330027,
          longitude: 128.7571362,
        },
        {
          address: '광주광역시 광산구 하남산단2번로 22 (하남동)',
          latitude: 35.1868443,
          longitude: 126.7974212,
        },
        {
          address: '충청남도 천안시 동남구 목천읍 도장로 75-13',
          latitude: 36.7486824,
          longitude: 127.1781252,
        },
        {
          address: '경상남도 진주시 정촌면 화개천로 50',
          latitude: 35.13048,
          longitude: 128.105738,
        },
        {
          address: '경상북도 군위군 우보면 동부로 1521',
          latitude: 36.1884079,
          longitude: 128.6711215,
        },
        {
          address: '경기도 평택시 포승읍 포승공단순환로 537',
          latitude: 36.9886597,
          longitude: 126.839659,
        },
        {
          address: '전라북도 완주군 봉동읍 완주산단2로 282-22',
          latitude: 35.9597466,
          longitude: 127.1311116,
        },
        {
          address: '경기도 안성시 일죽면 사실로 147',
          latitude: 37.1256165,
          longitude: 127.433829,
        },
        {
          address: '경기도 용인시 처인구 백암면 백봉로 37',
          latitude: 37.151885,
          longitude: 127.3792689,
        },
        {
          address:
            '경상북도 경주시 외동읍 문산2산단3로 79, (주)금오엠에스 공장',
          latitude: 35.7173433,
          longitude: 129.3282906,
        },
        {
          address: '경상남도 양산시 어곡공단1길 10 (어곡동)',
          latitude: 35.3722887,
          longitude: 129.0191622,
        },
        {
          address: '경기도 오산시 경기동로 186-15 (부산동)',
          latitude: 37.1571734,
          longitude: 127.0938365,
        },
        {
          address: '대구광역시 서구 국채보상로 51 (이현동)',
          latitude: 35.8777475,
          longitude: 128.546441,
        },
        {
          address: '경기도 오산시 경기대로 78-26 (갈곶동)',
          latitude: 37.1313986,
          longitude: 127.0656915,
        },
        {
          address: '전라북도 익산시 왕궁면 제석사지로 310',
          latitude: 35.9676804,
          longitude: 127.0771198,
        },
        {
          address: '서울특별시 강서구 방화대로 303 (방화동)',
          latitude: 37.5677915,
          longitude: 126.8159986,
        },
        {
          address: '경상북도 경주시 천북면 서평길 27-27',
          latitude: 35.9358716,
          longitude: 129.2518899,
        },
        {
          address: '경기도 용인시 처인구 원삼면 죽양대로 1566',
          latitude: 37.179762,
          longitude: 127.3376331,
        },
        {
          address: '서울특별시 영등포구 국회대로22길 20 (양평동3가)',
          latitude: 37.5289537,
          longitude: 126.8901326,
        },
        {
          address: '서울특별시 영등포구 영등포로 154 (당산동1가)',
          latitude: 37.5218932,
          longitude: 126.8997625,
        },
        {
          address: '서울특별시 영등포구 버드나루로6길 10 (영등포동2가)',
          latitude: 37.51837,
          longitude: 126.9157203,
        },
        {
          address: '울산광역시 남구 장생포로376번길 11 (매암동)',
          latitude: 35.5062472,
          longitude: 129.3800917,
        },
        {
          address: '울산광역시 북구 산성로 19 (효문동)',
          latitude: 35.5688413,
          longitude: 129.366803,
        },
        {
          address: '경기도 고양시 일산동구 경의로 235 (백석동)',
          latitude: 37.6403518,
          longitude: 126.7888593,
        },
        {
          address: '울산광역시 남구 여천로163번길 35 (여천동)',
          latitude: 35.528962,
          longitude: 129.3514169,
        },
        {
          address: '서울특별시 금천구 가산디지털1로 91 (가산동)',
          latitude: 37.4736845,
          longitude: 126.883871,
        },
        {
          address: '경기도 화성시 양감면 초록로 103',
          latitude: 37.095142,
          longitude: 126.9713791,
        },
        {
          address: '경상북도 예천군 예천읍 경서로 2452',
          latitude: 36.6393762,
          longitude: 128.4211624,
        },
        {
          address: '경상북도 예천군 지보면 예지로 667',
          latitude: 36.5722803,
          longitude: 128.4128325,
        },
        {
          address: '경상북도 예천군 풍양면 괴당1길 207-7',
          latitude: 36.4884171,
          longitude: 128.299494,
        },
        {
          address: '경상북도 예천군 풍양면 낙상1길 97',
          latitude: 36.5074646,
          longitude: 128.2977209,
        },
        {
          address: '전라북도 익산시 석암로17길 54 (팔봉동)',
          latitude: 35.9582467,
          longitude: 127.0185104,
        },
        {
          address: '전라북도 익산시 금마면 제석사지로 21 (삼성물류센타)',
          latitude: 35.983617,
          longitude: 127.0570328,
        },
        {
          address: '전라북도 익산시 옛둑2길 84 (동산동, 동익산역)',
          latitude: 35.9212016,
          longitude: 126.9570275,
        },
        {
          address: '전라남도 화순군 이양면 이양로 85',
          latitude: 34.8869894,
          longitude: 126.9883796,
        },
        {
          address: '충청북도 보은군 삼승면 탄금리 21번지',
          latitude: 36.4118341,
          longitude: 127.729949,
        },
        {
          address:
            '전라북도 남원시 사매면 대사로 1375, 전북 지리산 낙농농협 사매 물류사업소',
          latitude: 35.4973364,
          longitude: 127.356027,
        },
        {
          address: '전라북도 남원시 주생면 주생부동길 7',
          latitude: 35.3998521,
          longitude: 127.3470574,
        },
        {
          address: '전라북도 정읍시 서부산업도로 265 (연지동)',
          latitude: 35.5708878,
          longitude: 126.8427866,
        },
        {
          address: '전라북도 정읍시 서부산업도로 528 (수성동)',
          latitude: 35.5687968,
          longitude: 126.8501438,
        },
        {
          address: '전라북도 남원시 사매면 대사로 1264',
          latitude: 35.4933305,
          longitude: 127.3442824,
        },
        {
          address: '전라남도 담양군 수북면 추성1로 725',
          latitude: 35.3020887,
          longitude: 126.9310441,
        },
        {
          address: '전라남도 담양군 봉산면 연산길 77',
          latitude: 35.2725925,
          longitude: 126.9685459,
        },
        {
          address: '전라남도 담양군 대덕면 남대덕로 1109',
          latitude: 35.2476646,
          longitude: 127.0392406,
        },
        {
          address: '전라남도 담양군 대전면 추성1로 208',
          latitude: 35.2765761,
          longitude: 126.8890888,
        },
        {
          address: '전라북도 전주시 완산구 콩쥐팥쥐로 1705-124 (효자동3가)',
          latitude: 35.8255857,
          longitude: 127.0884824,
        },
        {
          address:
            '전라북도 전주시 덕진구 신복로 167 (팔복동4가, 농수산물유통공사)',
          latitude: 35.86333,
          longitude: 127.0995535,
        },
        {
          address: '전라북도 전주시 덕진구 번영로 200 (원동)',
          latitude: 35.8742686,
          longitude: 127.030703,
        },
        {
          address: '전라북도 전주시 덕진구 정암길 23 (장동)',
          latitude: 35.8616843,
          longitude: 127.0593326,
        },
        {
          address: '전라북도 전주시 덕진구 상리1길 14 (팔복동2가)',
          latitude: 35.8541096,
          longitude: 127.1014657,
        },
        {
          address: '전라북도 완주군 봉동읍 완주산단7로 55',
          latitude: 35.9561624,
          longitude: 127.1238334,
        },
        {
          address: '전라북도 완주군 봉동읍 테크노밸리3로 75',
          latitude: 35.9381046,
          longitude: 127.1680948,
        },
        {
          address: '전라북도 완주군 봉동읍 완주산단2로 282-10, (유)진로지스틱',
          latitude: 35.9595656,
          longitude: 127.1308319,
        },
        {
          address: '전라북도 완주군 봉동읍 완주산단2로 276',
          latitude: 35.9592764,
          longitude: 127.1300281,
        },
        {
          address: '전라남도 담양군 월산면 도개안길 69-15',
          latitude: 35.3403844,
          longitude: 126.9560576,
        },
        {
          address: '전라북도 완주군 봉동읍 완주산단2로 282-21',
          latitude: 35.96104810000001,
          longitude: 127.1306173,
        },
        {
          address: '전라북도 완주군 봉동읍 둔산1로 62',
          latitude: 35.9571032,
          longitude: 127.1224572,
        },
        {
          address: '인천광역시 부평구 부평북로 295 (갈산동)',
          latitude: 37.5232024,
          longitude: 126.7261213,
        },
        {
          address: '인천광역시 계양구 마장로 537 (효성동)',
          latitude: 37.5261056,
          longitude: 126.7039423,
        },
        {
          address:
            '인천광역시 계양구 아나지로 529-1, 계양1SUB, 계양2SUB (서운동)',
          latitude: 37.5257902,
          longitude: 126.7513598,
        },
        {
          address: '인천광역시 계양구 아나지로 88 (효성동)',
          latitude: 37.5246991,
          longitude: 126.701075,
        },
        {
          address: '인천광역시 계양구 아나지로 538-15, 부천집배센터 (서운동)',
          latitude: 37.5244927,
          longitude: 126.7527209,
        },
        {
          address: '인천광역시 동구 보세로 22 (만석동)',
          latitude: 37.4881483,
          longitude: 126.6207986,
        },
        {
          address: '인천광역시 서구 길무로 202 (오류동)',
          latitude: 37.5825697,
          longitude: 126.6238145,
        },
        {
          address: '경기도 화성시 동탄면 동탄산단3길 19-22',
          latitude: 37.1769687,
          longitude: 127.0924892,
        },
        {
          address: '경기도 화성시 팔탄면 시청로721번길 25 (중부로지스(주))',
          latitude: 37.1752752,
          longitude: 126.8746572,
        },
        {
          address: '경기도 화성시 장안면 황골길 63-17',
          latitude: 37.0948473,
          longitude: 126.8648769,
        },
        {
          address: '경기도 화성시 비봉면 주석로 466',
          latitude: 37.1988037,
          longitude: 126.8718998,
        },
        {
          address: '경기도 화성시 송산면 당성로510번길 11-2',
          latitude: 37.2054111,
          longitude: 126.7196961,
        },
        {
          address: '인천광역시 서구 북항로363번길 27 (원창동)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '인천광역시 서구 백범로698번길 16 (가좌동)',
          latitude: 37.4825976,
          longitude: 126.6820054,
        },
        {
          address: '경기도 고양시 일산동구 성현로 615 (사리현동)',
          latitude: 37.6920093,
          longitude: 126.8337607,
        },
        {
          address: '경기도 고양시 일산동구 장항로 155-21 (장항동)',
          latitude: 37.6357913,
          longitude: 126.7800074,
        },
        {
          address: '경기도 고양시 덕양구 대주로 499 (주교동)',
          latitude: 37.6582172,
          longitude: 126.8256116,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '울산광역시 울주군 청량면 화창6길 24',
          latitude: 35.4905367,
          longitude: 129.3095687,
        },
        {
          address: '경기도 군포시 번영로 82, P동 (부곡동, 한국복합물류(주))',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경상북도 구미시 구미대로 261-9 (광평동)',
          latitude: 36.109734,
          longitude: 128.3625675,
        },
        {
          address: '경기도 평택시 팽성읍 노와길 365',
          latitude: 36.9539595,
          longitude: 127.0888879,
        },
        {
          address: '경기도 안성시 일죽면 고목남길 95-31',
          latitude: 37.1218332,
          longitude: 127.4409715,
        },
        {
          address: '경기도 용인시 수지구 손곡로 29, 4층 (동천동)',
          latitude: 37.3355904,
          longitude: 127.1000744,
        },
        {
          address: '서울특별시 구로구 경인로 110 (오류동)',
          latitude: 37.491255,
          longitude: 126.8312569,
        },
        {
          address: '경기도 용인시 처인구 남사면 봉명리 67번지 2호',
          latitude: 37.1077898,
          longitude: 127.1348409,
        },
        {
          address: '전라남도 장성군 황룡면 뱃나드리로 12',
          latitude: 35.2922429,
          longitude: 126.7564068,
        },
        {
          address: '경기도 평택시 월곡길 77 (월곡동)',
          latitude: 37.022288,
          longitude: 127.1368397,
        },
        {
          address: '경기도 안성시 죽산면 송문주로 219, 지상 2층',
          latitude: 37.0785148,
          longitude: 127.4224058,
        },
        {
          address: '경상남도 사천시 축동면 인절미고갯길 2-34',
          latitude: 35.0974417,
          longitude: 128.0448826,
        },
        {
          address: '경상남도 사천시 축동면 서삼로 1386',
          latitude: 35.096609,
          longitude: 128.0619725,
        },
        {
          address: '경상남도 사천시 사천읍 두량로 290',
          latitude: 35.1042119,
          longitude: 128.112984,
        },
        {
          address: '전라남도 장성군 서삼면 물류로 335',
          latitude: 35.3194545,
          longitude: 126.7547443,
        },
        {
          address: '경상남도 김해시 금관대로731번길 19 (내덕동)',
          latitude: 35.2073971,
          longitude: 128.8277007,
        },
        {
          address: '경기도 광주시 오포읍 봉골길 153-3',
          latitude: 37.3557733,
          longitude: 127.200243,
        },
        {
          address: '경상북도 포항시 남구 철강로 348 (장흥동)',
          latitude: 35.9781631,
          longitude: 129.3772979,
        },
        {
          address: '경기도 광주시 포은대로 635 (장지동)',
          latitude: 37.3836041,
          longitude: 127.2412846,
        },
        {
          address: '전라남도 광양시 담안길 108 (태인동)',
          latitude: 34.9414003,
          longitude: 127.7526167,
        },
        {
          address: '경기도 용인시 처인구 원삼면 원양로 507-1',
          latitude: 37.1945257,
          longitude: 127.316026,
        },
        {
          address: '전라남도 순천시 해룡면 용전길 27',
          latitude: 34.8971893,
          longitude: 127.5452144,
        },
        {
          address: '전라남도 순천시 승주읍 중대길 15',
          latitude: 35.0194209,
          longitude: 127.3717357,
        },
        {
          address: '전라남도 순천시 별량면 녹색로 743',
          latitude: 34.8626075,
          longitude: 127.4405507,
        },
        {
          address: '전라남도 순천시 서면 청소길 2-28',
          latitude: 35.0355741,
          longitude: 127.5052978,
        },
        {
          address: '전라남도 순천시 서면 매천로 75-16',
          latitude: 34.9892986,
          longitude: 127.516996,
        },
        {
          address: '경상남도 함안군 칠원면 용산리 901번지 4호',
          latitude: 35.3088465,
          longitude: 128.5041576,
        },
        {
          address: '경상남도 함안군 법수면 법수로 546',
          latitude: 35.3162327,
          longitude: 128.3815488,
        },
        {
          address: '경상남도 함안군 칠북면 이령1길 30',
          latitude: 35.3667318,
          longitude: 128.5388313,
        },
        {
          address: '경상남도 함안군 법수면 강주1길 19',
          latitude: 35.3047104,
          longitude: 128.331238,
        },
        {
          address: '경상남도 함안군 칠서면 공단안길 66-92',
          latitude: 35.3586401,
          longitude: 128.4880829,
        },
        {
          address: '광주광역시 광산구 평동산단외로64번길 12 (용동)',
          latitude: 35.1317615,
          longitude: 126.7510859,
        },
        {
          address: '전라남도 광양시 산업로 231 (태인동)',
          latitude: 34.9393156,
          longitude: 127.7650907,
        },
        {
          address: '경기도 이천시 마장면 프리미엄아울렛로 33-48',
          latitude: 37.252952,
          longitude: 127.389535,
        },
        {
          address: '세종특별자치시 연기면 공단로 6',
          latitude: 36.5457143,
          longitude: 127.2697811,
        },
        {
          address: '세종특별자치시 연기면 공단로 49',
          latitude: 36.5477803,
          longitude: 127.2654537,
        },
        {
          address: '경기도 이천시 마장면 프리미엄아울렛로 113-37',
          latitude: 37.252952,
          longitude: 127.389535,
        },
        {
          address: '경상남도 양산시 북정공단1길 72 (북정동)',
          latitude: 35.3667725,
          longitude: 129.0459338,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 21',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address:
            '경상남도 양산시 상북면 양산대로 1248, 외 1필지 (주)동양양산창고',
          latitude: 35.4292749,
          longitude: 129.0708295,
        },
        {
          address: '경상남도 양산시 어실로 466 (어곡동)',
          latitude: 35.3955876,
          longitude: 129.008127,
        },
        {
          address: '경상남도 양산시 하북면 양산대로 2215',
          latitude: 35.4617081,
          longitude: 129.0792249,
        },
        {
          address: '경상남도 양산시 어실로 320-81, 모락스보세장치장 (어곡동)',
          latitude: 35.3888142,
          longitude: 129.0219368,
        },
        {
          address:
            '경상남도 양산시 산막공단북1길 80 (산막동, 쌍용자동차(주)양산정비사업소)',
          latitude: 35.3765031,
          longitude: 129.0540825,
        },
        {
          address: '경상남도 양산시 어곡공단2길 40 (어곡동)',
          latitude: 35.3709352,
          longitude: 129.0147312,
        },
        {
          address: '경상남도 양산시 산막공단북2길 34-49 (산막동)',
          latitude: 35.3714607,
          longitude: 129.0537988,
        },
        {
          address: '충청북도 음성군 생극면 생삼로 277',
          latitude: 37.0236756,
          longitude: 127.5714797,
        },
        {
          address: '서울특별시 강서구 발산로 24 (외발산동)',
          latitude: 37.553324,
          longitude: 126.8189946,
        },
        {
          address: '경상남도 김해시 생림면 인제로 661',
          latitude: 35.2836817,
          longitude: 128.8864113,
        },
        {
          address: '경상남도 김해시 진례면 진례로 323',
          latitude: 35.2558939,
          longitude: 128.7462157,
        },
        {
          address: '경상남도 밀양시 상남면 기산리 819번지',
          latitude: 35.4497768,
          longitude: 128.7574251,
        },
        {
          address: '경상남도 밀양시 산외면 남기동길 111',
          latitude: 35.5096199,
          longitude: 128.7981604,
        },
        {
          address: '경상남도 밀양시 가곡5길 9 (가곡동)',
          latitude: 35.4741462,
          longitude: 128.7681083,
        },
        {
          address: '경상남도 밀양시 무안면 덕암길 51-10',
          latitude: 35.4666587,
          longitude: 128.637771,
        },
        {
          address: '경상남도 밀양시 상남면 이연1길 7',
          latitude: 35.4388336,
          longitude: 128.7507284,
        },
        {
          address: '경상남도 진주시 문산읍 동부로 605',
          latitude: 35.1688812,
          longitude: 128.1663161,
        },
        {
          address: '경상남도 진주시 문산읍 동부로 339',
          latitude: 35.1606215,
          longitude: 128.1412711,
        },
        {
          address: '경상남도 진주시 문산읍 동부로 526',
          latitude: 35.1633473,
          longitude: 128.159544,
        },
        {
          address: '경상남도 진주시 진성면 동부로 1574-7',
          latitude: 35.1882636,
          longitude: 128.2476956,
        },
        {
          address: '경상남도 진주시 이반성면 오봉산로 547',
          latitude: 35.1576732,
          longitude: 128.3166769,
        },
        {
          address: '경상남도 진주시 금산면 중장로 87',
          latitude: 35.2196554,
          longitude: 128.1428793,
        },
        {
          address: '경상남도 남해군 남해읍 화전로122번가길 20',
          latitude: 34.8433911,
          longitude: 127.8965226,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리길 196',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address: '경상남도 김해시 한림면 용덕로 10',
          latitude: 35.2785781,
          longitude: 128.8343128,
        },
        {
          address: '경상남도 김해시 진영읍 한림로 1114',
          latitude: 35.3269917,
          longitude: 128.7460073,
        },
        {
          address: '경상남도 김해시 진영읍 여래로 23',
          latitude: 35.3040913,
          longitude: 128.7356589,
        },
        {
          address: '경상남도 김해시 진례면 고모로341번길 5',
          latitude: 35.2577916,
          longitude: 128.7669363,
        },
        {
          address: '인천광역시 서구 갑문로 33 (오류동)',
          latitude: 37.6021064,
          longitude: 126.6425026,
        },
        {
          address: '인천광역시 서구 갑문1로 10 (오류동)',
          latitude: 37.600459,
          longitude: 126.6456071,
        },
        {
          address: '경기도 이천시 마장면 프리미엄아울렛로 113-49',
          latitude: 37.252952,
          longitude: 127.389535,
        },
        {
          address: '경상북도 포항시 남구 대송면 송덕로 125-15',
          latitude: 35.95863569999999,
          longitude: 129.3809702,
        },
        {
          address: '경기도 이천시 마장면 덕평로 787',
          latitude: 37.2284134,
          longitude: 127.3665119,
        },
        {
          address: '전라남도 해남군 삼산면 해남화산로 526',
          latitude: 34.5201947,
          longitude: 126.5533055,
        },
        {
          address: '전라남도 해남군 해남읍 땅끝대로 141',
          latitude: 34.5583009,
          longitude: 126.5875664,
        },
        {
          address: '경상남도 사천시 신항만1길 86 (향촌동)',
          latitude: 34.9277565,
          longitude: 128.0864657,
        },
        {
          address:
            '인천광역시 남동구 논현고잔로 117 (고잔동, LG전자 인천물류센터)',
          latitude: 37.3935512,
          longitude: 126.7124725,
        },
        {
          address: '경기도 오산시 동부대로 468-31 (원동)',
          latitude: 37.1441712,
          longitude: 127.0795464,
        },
        {
          address: '인천광역시 서구 건지로 100 (가좌동)',
          latitude: 37.4987771,
          longitude: 126.6532395,
        },
        {
          address: '세종특별자치시 전의면 산단길 22-50',
          latitude: 36.6987767,
          longitude: 127.2142875,
        },
        {
          address: '전라남도 무안군 삼향읍 삼일로 138',
          latitude: 34.8369777,
          longitude: 126.4694566,
        },
        {
          address: '충청남도 천안시 서북구 성환읍 신방1길 22',
          latitude: 36.9276417,
          longitude: 127.1109345,
        },
        {
          address: '전라남도 영암군 삼호읍 난전리 1712-3 ,1712-4',
          latitude: 34.7602205,
          longitude: 126.4394491,
        },
        {
          address: '충청남도 아산시 음봉면 월산로 157',
          latitude: 36.849716,
          longitude: 127.0884551,
        },
        {
          address: '충청남도 아산시 염치읍 염치로95번길 2',
          latitude: 36.8156712,
          longitude: 126.9837401,
        },
        {
          address: '충청남도 아산시 선장면 서부남로 101',
          latitude: 36.789408,
          longitude: 126.8724129,
        },
        {
          address: '충청남도 아산시 배방읍 고불로 539',
          latitude: 36.7477817,
          longitude: 127.043246,
        },
        {
          address: '전라남도 장흥군 장흥읍 동교로 27',
          latitude: 34.6826285,
          longitude: 126.9040744,
        },
        {
          address: '전라남도 장흥군 용산면 용안로 10',
          latitude: 34.6155049,
          longitude: 126.9157489,
        },
        {
          address: '전라남도 영광군 홍농읍 연우로6길 56',
          latitude: 35.3901603,
          longitude: 126.4414724,
        },
        {
          address: '충청남도 아산시 영인면 아산호로 352',
          latitude: 36.8927305,
          longitude: 126.9559517,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로57번길 108, 1동 1층',
          latitude: 37.6149265,
          longitude: 126.7250269,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로 78',
          latitude: 37.5912601,
          longitude: 126.7903483,
        },
        {
          address: '인천광역시 중구 축항대로296번길 145 (신흥동3가)',
          latitude: 37.4383779,
          longitude: 126.6264059,
        },
        {
          address: '전라북도 완주군 봉동읍 우동로 77',
          latitude: 35.9613032,
          longitude: 127.1269028,
        },
        {
          address:
            '경상북도 포항시 남구 오천읍 광명산단로 15, 천일정기화물자동차',
          latitude: 35.9550937,
          longitude: 129.4267069,
        },
        {
          address: '충청남도 공주시 반포면 송곡로 333',
          latitude: 36.4047708,
          longitude: 127.2647963,
        },
        {
          address: '경기도 용인시 처인구 백암면 근곡로107번길 4',
          latitude: 37.1798769,
          longitude: 127.351978,
        },
        {
          address: '전라남도 장성군 황룡면 황룡로 221',
          latitude: 35.2777812,
          longitude: 126.7538284,
        },
        {
          address: '인천광역시 미추홀구 학익동 587-158',
          latitude: 37.4384671,
          longitude: 126.6465265,
        },
        {
          address: '경기도 이천시 백사면 원적로 332',
          latitude: 37.3389397,
          longitude: 127.4722661,
        },
        {
          address: '경상남도 거창군 북상면 송계로 717',
          latitude: 35.7779168,
          longitude: 127.8183656,
        },
        {
          address: '대구광역시 달서구 선원로 7 (신당동)',
          latitude: 35.8601519,
          longitude: 128.4937703,
        },
        {
          address: '경상북도 포항시 남구 섬안로 59 (괴동동)',
          latitude: 35.9972687,
          longitude: 129.3654404,
        },
        {
          address: '세종특별자치시 부강면 부강외천로 340',
          latitude: 36.5260468,
          longitude: 127.3898493,
        },
        {
          address: '경상북도 안동시 풍산읍 유통단지길 32',
          latitude: 36.5914926,
          longitude: 128.6048873,
        },
        {
          address: '경상북도 안동시 북후면 물한길 16-13',
          latitude: 36.657873,
          longitude: 128.7037275,
        },
        {
          address: '경상북도 경주시 강동면 오금낙산길 6',
          latitude: 35.98026060000001,
          longitude: 129.2601839,
        },
        {
          address: '전라남도 무안군 삼향읍 영산로 990',
          latitude: 34.8504244,
          longitude: 126.4282351,
        },
        {
          address: '경상남도 양산시 산막공단북5길 7 (산막동)',
          latitude: 35.3678002,
          longitude: 129.0582464,
        },
        {
          address: '경상북도 포항시 남구 오천읍 냉천로 508',
          latitude: 35.9499132,
          longitude: 129.4051067,
        },
        {
          address: '강원도 강릉시 구정면 범일로 56',
          latitude: 37.71167,
          longitude: 128.9101424,
        },
        {
          address: '인천광역시 중구 축항대로 100 (항동7가)',
          latitude: 37.4556053,
          longitude: 126.6079636,
        },
        {
          address: '경기도 군포시 번영로 82, P동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '충청북도 음성군 생극면 음성로 1550',
          latitude: 37.0259372,
          longitude: 127.6057218,
        },
        {
          address: '인천광역시 서구 갑문3로 26 (오류동)',
          latitude: 37.6018513,
          longitude: 126.6481457,
        },
        {
          address: '경기도 안산시 상록구 해안로 1196 (본오동)',
          latitude: 37.2893906,
          longitude: 126.8741723,
        },
        {
          address: '경기도 안성시 미양면 구수길 72',
          latitude: 36.9689759,
          longitude: 127.2584291,
        },
        {
          address: '경기도 양주시 화합로1402번길 54 (덕정동)',
          latitude: 37.8390686,
          longitude: 127.0649054,
        },
        {
          address: '경기도 이천시 대월면 대장로 187',
          latitude: 37.2200577,
          longitude: 127.4819737,
        },
        {
          address: '충청남도 당진시 송산면 가곡로 21 (현대글로비스)',
          latitude: 36.9768313,
          longitude: 126.6870453,
        },
        {
          address: '인천광역시 중구 축항대로 202 (항동7가)',
          latitude: 37.4509779,
          longitude: 126.6181169,
        },
        {
          address: '경기도 안성시 원곡면 원곡물류단지로 140',
          latitude: 37.039271,
          longitude: 127.1292377,
        },
        {
          address: '경기도 용인시 처인구 원삼면 원양로442번길 58',
          latitude: 37.1878986,
          longitude: 127.3111503,
        },
        {
          address: '경기도 용인시 처인구 원삼면 맹리로 39',
          latitude: 37.195909,
          longitude: 127.3292884,
        },
        {
          address: '경상남도 함양군 수동면 하교내백로 250-108',
          latitude: 35.5638327,
          longitude: 127.8200435,
        },
        {
          address:
            '경상남도 거창군 거창읍 거함대로 3372 (서북부 경남거점 산지유통센터(APC))',
          latitude: 35.6759288,
          longitude: 127.9267718,
        },
        {
          address: '경상남도 거창군 거창읍 수남로 2035-97 (대림농산)',
          latitude: 35.6539491,
          longitude: 127.9047665,
        },
        {
          address: '경상남도 거창군 거창읍 정장길 28 (남산창고)',
          latitude: 35.6770503,
          longitude: 127.9119264,
        },
        {
          address: '경상남도 거창군 웅양면 웅양로 1325 (웅양사과포도영농조합)',
          latitude: 35.7960129,
          longitude: 127.9136573,
        },
        {
          address:
            '경상남도 거창군 거창읍 밤티재로 1291-10 (거창농협미곡종합처리장)',
          latitude: 35.6703797,
          longitude: 127.9304294,
        },
        {
          address:
            '경상남도 산청군 신안면 지리산대로 3650, 산청군농협농산물산지유통센타',
          latitude: 35.2955393,
          longitude: 127.9574771,
        },
        {
          address: '경기도 이천시 대월면 대평로 131 (조달청이천물류기지)',
          latitude: 37.2246758,
          longitude: 127.4897409,
        },
        {
          address: '경기도 광주시 초월읍 산수로 642-50',
          latitude: 37.3842189,
          longitude: 127.3135318,
        },
        {
          address: '경기도 광주시 도척면 도척로 401-88',
          latitude: 37.3154211,
          longitude: 127.3397842,
        },
        {
          address: '경상남도 진주시 사봉면 동부로 1715',
          latitude: 35.180909,
          longitude: 128.2658272,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로58번길 186',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '경상남도 창원시 의창구 차룡로48번길 24, 304호 (팔용동)',
          latitude: 35.2425303,
          longitude: 128.6300693,
        },
        {
          address: '경기도 이천시 마장면 덕평로 816-38 (SLX물류센터)',
          latitude: 37.2308874,
          longitude: 127.3679472,
        },
        {
          address: '광주광역시 북구 첨단연신로 279 (연제동)',
          latitude: 35.2014475,
          longitude: 126.8636426,
        },
        {
          address: '세종특별자치시 연서면 아홉거리길 92',
          latitude: 36.5937681,
          longitude: 127.2831075,
        },
        {
          address: '경기도 광주시 오포읍 수렁개들길32번길 8-4',
          latitude: 37.337364,
          longitude: 127.2030214,
        },
        {
          address: '전라북도 김제시 공덕면 황상3길 463',
          latitude: 35.8733242,
          longitude: 126.9286364,
        },
        {
          address: '충청남도 아산시 인주면 아산호로 23 ((주)타카즈코리아)',
          latitude: 36.88963,
          longitude: 126.9200862,
        },
        {
          address: '경상남도 김해시 진례면 고모로180번길 61',
          latitude: 35.24127980000001,
          longitude: 128.7745851,
        },
        {
          address: '전라남도 광양시 삼봉산로 10 (태인동, (주)광양기업)',
          latitude: 34.945253,
          longitude: 127.759271,
        },
        {
          address: '인천광역시 서구 경인항대로 7 (오류동, (주)선진오토텍)',
          latitude: 37.5584727,
          longitude: 126.6060332,
        },
        {
          address: '충청남도 천안시 서북구 입장면 용정도하길 215-20',
          latitude: 36.93039,
          longitude: 127.1855515,
        },
        {
          address: '경기도 이천시 호법면 중부대로866번길 85',
          latitude: 37.2403218,
          longitude: 127.4302413,
        },
        {
          address: '경기도 이천시 호법면 이섭대천로 38-2',
          latitude: 37.2285878,
          longitude: 127.4182922,
        },
        {
          address: '경기도 이천시 마장면 억만리로 130',
          latitude: 37.259195,
          longitude: 127.37015,
        },
        {
          address: '경기도 구리시 동구릉로460번길 29 (사노동)',
          latitude: 37.6383146,
          longitude: 127.1430329,
        },
        {
          address: '경상북도 칠곡군 석적읍 호국로 608',
          latitude: 36.0335787,
          longitude: 128.4394644,
        },
        {
          address: '전라북도 군산시 내흥동 439번지',
          latitude: 35.9993966,
          longitude: 126.7613489,
        },
        {
          address: '인천광역시 중구 축항대로296번길 172 (신흥동3가, 신대륙)',
          latitude: 37.4333435,
          longitude: 126.6235285,
        },
        {
          address: '경상남도 양산시 어곡공단2길 48 (어곡동, (주)경일)',
          latitude: 35.3700586,
          longitude: 129.0168254,
        },
        {
          address: '경기도 용인시 처인구 유림로 209 (유방동, 외 2필지)',
          latitude: 37.2594113,
          longitude: 127.195972,
        },
        {
          address: '인천광역시 서구 원창동 393번지 54호',
          latitude: 37.5019127,
          longitude: 126.6243171,
        },
        {
          address: '경기도 화성시 서신면 염전길 30-6',
          latitude: 37.1625321,
          longitude: 126.6935874,
        },
        {
          address:
            '경상북도 칠곡군 지천면 금호로 272 (영남컨복합화물터미널및내륙컨테이너기지민)',
          latitude: 35.9584669,
          longitude: 128.4496262,
        },
        {
          address: '경기도 용인시 처인구 백암면 원설로 445',
          latitude: 37.141949,
          longitude: 127.3894415,
        },
        {
          address: '경기도 용인시 처인구 양지면 죽양대로2071번길 10-8',
          latitude: 37.2194253,
          longitude: 127.314484,
        },
        {
          address: '경기도 평택시 포승읍 포승산단로 14',
          latitude: 36.9703049,
          longitude: 126.8622795,
        },
        {
          address: '대구광역시 달성군 하빈면 하빈남로 448',
          latitude: 35.8658718,
          longitude: 128.3942211,
        },
        {
          address: '경기도 이천시 마장면 덕평로 816-59',
          latitude: 37.2313471,
          longitude: 127.3667961,
        },
        {
          address: '충청북도 옥천군 옥천읍 옥천농공길 99 (공장)',
          latitude: 36.3090994,
          longitude: 127.5839514,
        },
        {
          address: '충청북도 진천군 초평면 초평로 1163 (LG전자 진천물류센터)',
          latitude: 36.8021653,
          longitude: 127.5171609,
        },
        {
          address: '경기도 이천시 대월면 대월로 627-61 (주식회사부국물산)',
          latitude: 37.2114181,
          longitude: 127.4944732,
        },
        {
          address:
            '충청북도 청주시 흥덕구 사운로 391, 정부양곡도정공장 (신봉동)',
          latitude: 36.6543643,
          longitude: 127.4678976,
        },
        {
          address: '광주광역시 광산구 하남산단4번로 19 (장덕동)',
          latitude: 35.192948,
          longitude: 126.7961124,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로58번길 35-26',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '경기도 이천시 마장면 서이천로320번길 169-13, 2층',
          latitude: 37.2478312,
          longitude: 127.3851172,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로 91',
          latitude: 37.5904672,
          longitude: 126.7887403,
        },
        {
          address: '경상남도 합천군 쌍백면 청정로 60 (농산물산지유통센타)',
          latitude: 35.4398245,
          longitude: 128.1524611,
        },
        {
          address: '경상남도 합천군 덕곡면 오광대로 1095',
          latitude: 35.6162854,
          longitude: 128.3573899,
        },
        {
          address: '경상남도 합천군 초계면 동부로 1099',
          latitude: 35.5607246,
          longitude: 128.2579512,
        },
        {
          address: '경상남도 합천군 용주면 고품용덕길 4-5',
          latitude: 35.5441779,
          longitude: 128.1024024,
        },
        {
          address:
            '경상남도 합천군 가야면 가야시장로 53 (농협하나로마트,가야농협)',
          latitude: 35.7591613,
          longitude: 128.1384863,
        },
        {
          address: '경상남도 합천군 야로면 미숭산로 17',
          latitude: 35.7093897,
          longitude: 128.171968,
        },
        {
          address: '경상남도 합천군 야로면 가야산로 678',
          latitude: 35.7297375,
          longitude: 128.156958,
        },
        {
          address: '경상남도 합천군 적중면 동부로 1420-2',
          latitude: 35.550684,
          longitude: 128.2893954,
        },
        {
          address: '인천광역시 서구 정서진1로 7 (오류동)',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address: '인천광역시 서구 정서진로 47 (오류동)',
          latitude: 37.5711136,
          longitude: 126.6704459,
        },
        {
          address: '경기도 용인시 처인구 백암면 죽양대로912번길 54',
          latitude: 37.1448514,
          longitude: 127.3936367,
        },
        {
          address: '경기도 광주시 경충대로 1801 (장지동)',
          latitude: 37.4008376,
          longitude: 127.2363785,
        },
        {
          address: '경기도 안성시 일죽면 노성로 166',
          latitude: 37.1140703,
          longitude: 127.4846882,
        },
        {
          address: '충청남도 아산시 선장면 서부남로 101 (합동물류(주))',
          latitude: 36.789408,
          longitude: 126.8724129,
        },
        {
          address: '충청남도 아산시 영인면 영인로 180',
          latitude: 36.8640647,
          longitude: 126.9495366,
        },
        {
          address:
            '충청남도 아산시 인주면 아산만로 1396 (하나종합물류(주)아산)',
          latitude: 36.8528717,
          longitude: 126.8594844,
        },
        {
          address: '충청남도 아산시 둔포면 관대안길 45 (동성제약(주))',
          latitude: 36.9061522,
          longitude: 127.0404002,
        },
        {
          address: '충청남도 아산시 환경공원로 109 (실옥동)',
          latitude: 36.7981256,
          longitude: 126.9817848,
        },
        {
          address: '경기도 평택시 포승읍 포승공단로118번길 26',
          latitude: 36.9777852,
          longitude: 126.8483624,
        },
        {
          address: '경기도 포천시 군내면 용정경제로2길 63',
          latitude: 37.8919712,
          longitude: 127.2017439,
        },
        {
          address: '인천광역시 중구 축항대로118번길 114 (항동7가)',
          latitude: 37.4458561,
          longitude: 126.6030634,
        },
        {
          address:
            '충청북도 청주시 청원구 공항로150번길 73, KT충북본부 (율량동)',
          latitude: 36.6708157,
          longitude: 127.4886042,
        },
        {
          address:
            '인천광역시 서구 정서진8로 13 (오류동, (주)세인티앤엘인천아라뱃길물류센터)',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address: '경기도 이천시 호법면 이섭대천로 38-40 (상우로지스)',
          latitude: 37.2285878,
          longitude: 127.4182922,
        },
        {
          address: '경기도 화성시 봉담읍 왕림2길 42-25',
          latitude: 37.1905581,
          longitude: 126.9334084,
        },
        {
          address:
            '경기도 용인시 처인구 백암면 죽양대로 956-8 ((주)에이블로지스물류센터)',
          latitude: 37.1501376,
          longitude: 127.3871834,
        },
        {
          address: '경기도 이천시 마장면 이장로 115-21',
          latitude: 37.2634475,
          longitude: 127.3770441,
        },
        {
          address: '경기도 포천시 군내면 용정경제로2길 27',
          latitude: 37.3313865,
          longitude: 126.716805,
        },
        {
          address: '대구광역시 동구 팔공로53길 96 (봉무동)',
          latitude: 35.9184609,
          longitude: 128.6370882,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로 37',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '경기도 용인시 처인구 백암면 석실로34번길 17-3',
          latitude: 37.1775688,
          longitude: 127.3434711,
        },
        {
          address: '경기도 용인시 처인구 백암면 죽양대로801번길 6',
          latitude: 37.1321861,
          longitude: 127.3916583,
        },
        {
          address: '광주광역시 광산구 평동산단1번로 76 (옥동)',
          latitude: 35.1358181,
          longitude: 126.764225,
        },
        {
          address: '경상남도 양산시 상북면 수서로 223-40',
          latitude: 35.4360856,
          longitude: 129.0454242,
        },
        {
          address: '경기도 평택시 진위면 엘지로 222 (엘지전자(주))',
          latitude: 37.125368,
          longitude: 127.090749,
        },
        {
          address: '경상북도 포항시 남구 오천읍 광명산단로 94',
          latitude: 35.9238336,
          longitude: 129.4012845,
        },
        {
          address: '경기도 용인시 처인구 양지면 양지로 271',
          latitude: 37.2325918,
          longitude: 127.2806845,
        },
        {
          address:
            '경상북도 칠곡군 지천면 금호로 272, 영남권 내륙물류기지 내 2,3동',
          latitude: 35.9584669,
          longitude: 128.4496262,
        },
        {
          address: '인천광역시 서구 정서진4로 28 (오류동)',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로182번길 23 (롯데마트몰물류센터)',
          latitude: 37.5962874,
          longitude: 126.7806494,
        },
        {
          address: '경상북도 구미시 1공단로6길 32 (공단동)',
          latitude: 36.0991532,
          longitude: 128.3756259,
        },
        {
          address: '경상북도 구미시 산호대로 77 (공단동, LG전자구미3공장)',
          latitude: 36.0899524,
          longitude: 128.3846016,
        },
        {
          address:
            '충청북도 청주시 흥덕구 2순환로971번길 93, LG전자청주공장 (향정동)',
          latitude: 36.6488694,
          longitude: 127.4301839,
        },
        {
          address: '경기도 용인시 처인구 백암면 근곡로107번길 4-1',
          latitude: 37.1798769,
          longitude: 127.351978,
        },
        {
          address: '경기도 고양시 일산동구 고봉로819번길 60 (설문동)',
          latitude: 37.7290062,
          longitude: 126.7991156,
        },
        {
          address: '경기도 광주시 도척면 국사봉로 185-36',
          latitude: 37.3143666,
          longitude: 127.3513178,
        },
        {
          address:
            '인천광역시 서구 갑문1로 20, 스카이박스1 물류센터동 3층 (오류동)',
          latitude: 37.5634818,
          longitude: 126.6020275,
        },
        {
          address: '경기도 이천시 마장면 억만리로 140-27',
          latitude: 37.259195,
          longitude: 127.37015,
        },
        {
          address:
            '경상남도 창원시 의창구 무역로581번길 14 (차용동, (주)판토스)',
          latitude: 35.2303601,
          longitude: 128.6399131,
        },
        {
          address: '경상북도 포항시 남구 오천읍 광명산단로 30',
          latitude: 35.9238336,
          longitude: 129.4012845,
        },
        {
          address: '충청남도 공주시 탄천면 금백로 1299',
          latitude: 36.3048265,
          longitude: 127.0403691,
        },
        {
          address: '충청남도 서산시 성연면 두치로 300-9',
          latitude: 36.8257908,
          longitude: 126.4779278,
        },
        {
          address: '전라남도 장성군 황룡면 신기길 41',
          latitude: 35.2886491,
          longitude: 126.7757482,
        },
        {
          address: '인천광역시 연수구 송도동 378번지',
          latitude: 37.3839118,
          longitude: 126.6438546,
        },
        {
          address: '경상남도 김해시 분성로583번길 32 (삼방동)',
          latitude: 35.2394881,
          longitude: 128.9108683,
        },
        {
          address: '경기도 용인시 기흥구 기흥단지로 2 (고매동)',
          latitude: 37.2216186,
          longitude: 127.1053717,
        },
        {
          address: '경기도 용인시 처인구 백암면 고안로51번길 136-14',
          latitude: 37.1409566,
          longitude: 127.412945,
        },
        {
          address: '인천광역시 연수구 송도동 378번지 외 1필지',
          latitude: 37.3839118,
          longitude: 126.6438546,
        },
        {
          address: '충청북도 청주시 청원구 2순환로 426 (사천동)',
          latitude: 36.6625834,
          longitude: 127.4747667,
        },
        {
          address: '충청북도 청주시 서원구 현도면 죽암도원로 12-40',
          latitude: 36.6424341,
          longitude: 127.4890319,
        },
        {
          address: '경기도 안성시 일죽면 사실로 358',
          latitude: 37.1438041,
          longitude: 127.4372607,
        },
        {
          address: '경기도 안성시 죽산면 걸미로 145-29, 2층',
          latitude: 37.019198,
          longitude: 127.435232,
        },
        {
          address: '경상남도 사천시 축동면 서삼로 1343, 경남물류센터',
          latitude: 35.0904131,
          longitude: 128.0413646,
        },
        {
          address: '강원도 강릉시 사천면 과학단지로 137-57',
          latitude: 37.8084166,
          longitude: 128.8561085,
        },
        {
          address: '경기도 이천시 설성면 진상미로 538-2 (이포컴주식회사)',
          latitude: 37.1225709,
          longitude: 127.5198183,
        },
        {
          address: '충청남도 서산시 지곡면 왕산이로 56-23',
          latitude: 36.86343069999999,
          longitude: 126.4297684,
        },
        {
          address:
            '경기도 군포시 번영로 82, N동 3층 (부곡동, 한국복합물류(주))',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '전라남도 순천시 해룡면 여순로 1371-9',
          latitude: 34.9052782,
          longitude: 127.5484625,
        },
        {
          address: '전라남도 여수시 주삼덕양로 170 (주삼동)',
          latitude: 34.7907647,
          longitude: 127.6477531,
        },
        {
          address: '경상북도 칠곡군 지천면 금호로 172-10',
          latitude: 35.9478447,
          longitude: 128.4444734,
        },
        {
          address: '인천광역시 서구 북항로363번길 58 (원창동)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '인천광역시 서구 북항로 335 (원창동)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '부산광역시 강서구 가달1로 26 (생곡동)',
          latitude: 35.1329575,
          longitude: 128.8941607,
        },
        {
          address: '인천광역시 서구 갑문1로 10 (오류동, 씨제이대한통운(주))',
          latitude: 37.600459,
          longitude: 126.6456071,
        },
        {
          address: '경기도 화성시 우정읍 띨뿌리1길 38',
          latitude: 37.0388476,
          longitude: 126.7703084,
        },
        {
          address: '경기도 화성시 우정읍 기아자동차로299번길 11-2',
          latitude: 37.0535442,
          longitude: 126.772982,
        },
        {
          address: '인천광역시 서구 중봉대로 244 (석남동)',
          latitude: 37.5009728,
          longitude: 126.6488143,
        },
        {
          address: '충청북도 음성군 대소면 대물로 69',
          latitude: 36.9708976,
          longitude: 127.4688632,
        },
        {
          address: '충청북도 음성군 대소면 대물로 67',
          latitude: 36.9706053,
          longitude: 127.4702152,
        },
        {
          address: '경상남도 고성군 고성읍 월평로 122-11',
          latitude: 34.961498,
          longitude: 128.3472894,
        },
        {
          address: '경상북도 구미시 산호대로 264-16 (공단동)',
          latitude: 36.1012532,
          longitude: 128.3838822,
        },
        {
          address: '경기도 광주시 순암로 395-7 (삼동)',
          latitude: 37.4157579,
          longitude: 127.1939955,
        },
        {
          address: '경기도 광주시 도척면 마도로 5',
          latitude: 37.2774187,
          longitude: 127.3478507,
        },
        {
          address: '경기도 이천시 마장면 억만리로 140-29 (대화물류(주))',
          latitude: 37.259195,
          longitude: 127.37015,
        },
        {
          address: '경기도 군포시 번영로 82, M동 (부곡동, 한국복합물류(주))',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경기도 용인시 처인구 지삼로 517 (삼가동)',
          latitude: 37.23832609999999,
          longitude: 127.1610529,
        },
        {
          address:
            '경기도 용인시 처인구 한터로275번길 29 (고림동, OTTOSLS물류창고)',
          latitude: 37.2558044,
          longitude: 127.2356939,
        },
        {
          address:
            '경기도 용인시 처인구 백암면 죽양대로904번길 46, 3층 (대화물류(주))',
          latitude: 37.149314,
          longitude: 127.3919271,
        },
        {
          address: '경기도 용인시 처인구 백암면 원설로 606',
          latitude: 37.141949,
          longitude: 127.3894415,
        },
        {
          address: '경기도 평택시 청북읍 원한산길 143',
          latitude: 37.0442001,
          longitude: 126.9688025,
        },
        {
          address: '경기도 남양주시 진접읍 남가로131번길 7-1',
          latitude: 37.6940829,
          longitude: 127.1780749,
        },
        {
          address: '인천광역시 서구 건지로 84, 한성 1창고 (가좌동)',
          latitude: 37.498325,
          longitude: 126.6508105,
        },
        {
          address: '경기도 화성시 남양읍 현대연구소로 31-8',
          latitude: 37.1691748,
          longitude: 126.8154457,
        },
        {
          address: '경기도 평택시 포승읍 하만호길 243',
          latitude: 36.9570617,
          longitude: 126.850352,
        },
        {
          address:
            '경기도 용인시 기흥구 기흥단지로121번길 24 (고매동, 네티션닷컴물류센타)',
          latitude: 37.228193,
          longitude: 127.1087198,
        },
        {
          address: '인천광역시 중구 축항대로296번길 172 (신흥동3가)',
          latitude: 37.4333845,
          longitude: 126.6228222,
        },
        {
          address: '대구광역시 달성군 가창면 용계리 452번지',
          latitude: 35.7946389,
          longitude: 128.6284023,
        },
        {
          address: '경기도 이천시 신둔면 황무로338번길 409',
          latitude: 37.2964603,
          longitude: 127.377954,
        },
        {
          address: '광주광역시 광산구 진곡산단5번로 69, 1동 (진곡동)',
          latitude: 35.210749,
          longitude: 126.781454,
        },
        {
          address: '경기도 광주시 초월읍 산수로 302',
          latitude: 37.3883908,
          longitude: 127.3162179,
        },
        {
          address: '강원도 원주시 소초면 수래울길 5',
          latitude: 37.3991206,
          longitude: 127.969441,
        },
        {
          address: '충청남도 당진시 송산면 석문방조제로 532-9',
          latitude: 36.9815245,
          longitude: 126.6744863,
        },
        {
          address:
            '경상남도 양산시 물금읍 제방로 225,  양산물류센터(증산리, ICD 6단지)',
          latitude: 35.3113072,
          longitude: 129.0163436,
        },
        {
          address: '경상북도 포항시 남구 청림로 37-3 (청림동)',
          latitude: 35.9974548,
          longitude: 129.4159299,
        },
        {
          address: '충청남도 당진시 신평면 지무골길 145 (협신물류)',
          latitude: 36.8745744,
          longitude: 126.8013379,
        },
        {
          address: '경기도 광주시 도척면 마도로 178-13',
          latitude: 37.2880964,
          longitude: 127.3346716,
        },
        {
          address: '경기도 광주시 곤지암읍 건업길 92',
          latitude: 37.4024986,
          longitude: 127.4049872,
        },
        {
          address: '경기도 평택시 포승읍 평택항로156번길 43',
          latitude: 36.9755417,
          longitude: 126.8483984,
        },
        {
          address: '경기도 광주시 고불로279번길 17-23 (태전동)',
          latitude: 37.3967874,
          longitude: 127.2048807,
        },
        {
          address: '경상남도 함안군 가야읍 춘곡리 523번지',
          latitude: 35.2556588,
          longitude: 128.3774888,
        },
        {
          address: '강원도 강릉시 사천면 과학단지로 137-49',
          latitude: 37.8084166,
          longitude: 128.8561085,
        },
        {
          address: '울산광역시 울주군 삼남면 하방로 77',
          latitude: 35.5086805,
          longitude: 129.0920349,
        },
        {
          address: '경상남도 창녕군 창녕읍 창녕장마로 829',
          latitude: 35.5178252,
          longitude: 128.493771,
        },
        {
          address: '경상남도 창녕군 장마면 남지장마로 623',
          latitude: 35.4566708,
          longitude: 128.4659787,
        },
        {
          address: '경상남도 창녕군 장마면 창녕장마로 375',
          latitude: 35.4857019,
          longitude: 128.471921,
        },
        {
          address: '경상남도 창녕군 계성면 계산우천길 35',
          latitude: 35.476015,
          longitude: 128.4895284,
        },
        {
          address: '경상남도 창녕군 유어면 유어장마로 304',
          latitude: 35.4834331,
          longitude: 128.4463548,
        },
        {
          address: '경상남도 창녕군 영산면 영산도천로 476-10',
          latitude: 35.4455749,
          longitude: 128.5237654,
        },
        {
          address: '경상남도 창녕군 부곡면 온정청암로 405',
          latitude: 35.4303289,
          longitude: 128.6065841,
        },
        {
          address: '경상남도 창녕군 창녕읍 창녕장마로 813',
          latitude: 35.5168156,
          longitude: 128.4922434,
        },
        {
          address: '경상남도 창녕군 계성면 영산계성로 397-14',
          latitude: 35.4810233,
          longitude: 128.5092846,
        },
        {
          address: '경상남도 창녕군 창녕읍 창녕장마로 857',
          latitude: 35.5193894,
          longitude: 128.4950198,
        },
        {
          address: '경상남도 창녕군 창녕읍 탐하로 132-5',
          latitude: 35.5292015,
          longitude: 128.4844195,
        },
        {
          address: '경상남도 창녕군 도천면 낙동로 823',
          latitude: 35.405361,
          longitude: 128.5054349,
        },
        {
          address: '울산광역시 남구 장생포로254번길 23 (매암동)',
          latitude: 35.5130847,
          longitude: 129.3674123,
        },
        {
          address: '경기도 이천시 마장면 덕평로 647',
          latitude: 37.2188448,
          longitude: 127.3760804,
        },
        {
          address: '충청북도 음성군 생극면 음성로 1780',
          latitude: 37.044662,
          longitude: 127.6024142,
        },
        {
          address: '경기도 파주시 적성면 적성산단로 36-14',
          latitude: 37.954696,
          longitude: 126.9192185,
        },
        {
          address: '전라남도 장성군 남면 나노산단3로 11',
          latitude: 35.2306281,
          longitude: 126.8345682,
        },
        {
          address: '충청남도 금산군 추부면 서대산로 555',
          latitude: 36.2279277,
          longitude: 127.5048159,
        },
        {
          address: '경기도 여주시 대신면 여양로 763, A동, D동',
          latitude: 37.3735142,
          longitude: 127.5893231,
        },
        {
          address: '경기도 평택시 진위면 삼남로 745-24',
          latitude: 37.0879854,
          longitude: 127.089615,
        },
        {
          address: '경기도 평택시 서탄면 발안로 1198-8',
          latitude: 37.1337124,
          longitude: 127.0330659,
        },
        {
          address:
            '인천광역시 동구 방축로62번길 11, 송림동 하이마트 물류센터 (송림동)',
          latitude: 37.4841563,
          longitude: 126.6525274,
        },
        {
          address: '광주광역시 광산구 하남산단6번로 76 (오선동)',
          latitude: 35.2020984,
          longitude: 126.803368,
        },
        {
          address: '경기도 이천시 마장면 프리미엄아울렛로 33-20',
          latitude: 37.252952,
          longitude: 127.389535,
        },
        {
          address: '세종특별자치시 부강면 연청로 745-46, 2동 화물취급장(B)',
          latitude: 36.5439377,
          longitude: 127.3567475,
        },
        {
          address: '충청남도 당진시 송악읍 고대공단2길 181',
          latitude: 36.9766212,
          longitude: 126.7587374,
        },
        {
          address: '울산광역시 울주군 두서면 활천산업로 131, (주)에이앤씨 1층',
          latitude: 35.5076099,
          longitude: 129.3208477,
        },
        {
          address: '경기도 이천시 마장면 덕평로891번길 30-19',
          latitude: 37.2372345,
          longitude: 127.3606654,
        },
        {
          address: '충청남도 당진시 송산면 참샘물길 19',
          latitude: 36.9773035,
          longitude: 126.6842424,
        },
        {
          address: '경상남도 함양군 안의면 성동로 167-69',
          latitude: 35.6454281,
          longitude: 127.7913972,
        },
        {
          address: '경상남도 함양군 안의면 안의도장골길 130',
          latitude: 35.6370385,
          longitude: 127.8268523,
        },
        {
          address: '부산광역시 남구 신선로356번길 9 (용당동)',
          latitude: 35.1175179,
          longitude: 129.0965137,
        },
        {
          address: '경기도 용인시 처인구 백암면 고안로51번길 151',
          latitude: 37.1396056,
          longitude: 127.4109092,
        },
        {
          address: '충청북도 옥천군 이원면 건진2길 65',
          latitude: 36.2523327,
          longitude: 127.6240318,
        },
        {
          address:
            '경기도 오산시 경기대로 78-26,  한국알프스물류주식회사 c동 (갈곶동)',
          latitude: 37.1295828,
          longitude: 127.0720117,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로57번길 46, 뉴신팜물류센터',
          latitude: 37.5900864,
          longitude: 126.7937929,
        },
        {
          address: '경기도 광주시 곤지암읍 광여로 624',
          latitude: 37.3679957,
          longitude: 127.4041696,
        },
        {
          address: '경기도 용인시 처인구 원삼면 죽양대로1763번길 45',
          latitude: 37.1925897,
          longitude: 127.3209657,
        },
        {
          address:
            '충청북도 괴산군 괴산읍 자연식품길 36, (주)아이쿱청과 농산물산지유통센터',
          latitude: 36.8117117,
          longitude: 127.7908552,
        },
        {
          address: '경기도 용인시 처인구 백암면 덕평로 120',
          latitude: 37.1802787,
          longitude: 127.3731351,
        },
        {
          address: '경상북도 경산시 하양읍 남하새마을길 5',
          latitude: 35.8838438,
          longitude: 128.7721209,
        },
        {
          address: '경기도 이천시 모가면 사실로 419-20',
          latitude: 37.1503399,
          longitude: 127.4372562,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리로 100',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address: '경기도 이천시 마장면 서이천로 201, 물류창고',
          latitude: 37.2796108,
          longitude: 127.3923722,
        },
        {
          address: '경상북도 포항시 남구 대송로 167 (괴동동)',
          latitude: 35.9949452,
          longitude: 129.3715288,
        },
        {
          address: '경기도 안성시 일죽면 사실로 161-57',
          latitude: 37.1275444,
          longitude: 127.4312769,
        },
        {
          address: '충청남도 홍성군 갈산면 갈산로 227-67',
          latitude: 36.6042437,
          longitude: 126.5662518,
        },
        {
          address: '전라북도 익산시 왕궁면 왕궁로 707',
          latitude: 35.9417955,
          longitude: 127.082843,
        },
        {
          address: '충청북도 괴산군 괴산읍 자연식품2길 51, 괴산아이쿱 상온창고',
          latitude: 36.8117117,
          longitude: 127.7908552,
        },
        {
          address: '경기도 화성시 향남읍 서봉로 485-25',
          latitude: 37.122061,
          longitude: 126.9436202,
        },
        {
          address: '경상남도 산청군 단성면 사직단로 428',
          latitude: 35.2940159,
          longitude: 127.9417233,
        },
        {
          address: '경상남도 김해시 한림면 용덕로199번길 32-86',
          latitude: 35.2964349,
          longitude: 128.8237509,
        },
        {
          address: '경상북도 포항시 남구 연일읍 철강로 127',
          latitude: 35.9894013,
          longitude: 129.3570709,
        },
        {
          address: '충청북도 충주시 중앙탑면 탄금대로 835',
          latitude: 36.9810491,
          longitude: 127.9110618,
        },
        {
          address: '충청북도 옥천군 옥천읍 옥천농공길 100-17, 택배',
          latitude: 36.3050484,
          longitude: 127.583473,
        },
        {
          address: '충청북도 옥천군 옥천읍 서대구일로 279-5, 택배물류창고',
          latitude: 36.2944781,
          longitude: 127.5999448,
        },
        {
          address: '충청북도 충주시 목수1길 13-2 (목행동)',
          latitude: 37.0174498,
          longitude: 127.9311133,
        },
        {
          address: '경기도 이천시 모가면 사실로 786',
          latitude: 37.1814766,
          longitude: 127.4401494,
        },
        {
          address: '경기도 안성시 미양면 당골길 12, A동 3층',
          latitude: 36.9860631,
          longitude: 127.2432484,
        },
        {
          address: '경기도 고양시 일산동구 사리현로 101-11 (식사동)',
          latitude: 37.688539,
          longitude: 126.821915,
        },
        {
          address: '인천광역시 중구 자유무역로 67 (운서동)',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address: '인천광역시 동구 보세로 105, (주)삼미물류창고 B동 (만석동)',
          latitude: 37.4853605,
          longitude: 126.6111791,
        },
        {
          address: '경상북도 칠곡군 지천면 금호로 272',
          latitude: 35.9584669,
          longitude: 128.4496262,
        },
        {
          address: '경기도 용인시 처인구 이동읍 덕성산단1로 37',
          latitude: 37.184974,
          longitude: 127.204097,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리1로 43',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address: '인천광역시 중구 서해대로179번길 60 (항동7가)',
          latitude: 37.4460615,
          longitude: 126.6168905,
        },
        {
          address: '광주광역시 광산구 진곡산단중앙로 105 (오선동)',
          latitude: 35.210749,
          longitude: 126.781454,
        },
        {
          address: '인천광역시 중구 항동7가 36번지 2호',
          latitude: 37.4574712,
          longitude: 126.6143128,
        },
        {
          address: '광주광역시 광산구 진곡산단1번로 50 (오선동)',
          latitude: 35.2036906,
          longitude: 126.8031498,
        },
        {
          address: '경상남도 거제시 사등면 지석로 238, (주)세송',
          latitude: 34.8927189,
          longitude: 128.5322105,
        },
        {
          address: '경상남도 거제시 사등면 지석로 274',
          latitude: 34.8907667,
          longitude: 128.5354166,
        },
        {
          address: '경기도 화성시 양감면 은행나무로62번길 18-81',
          latitude: 37.0659964,
          longitude: 126.9377247,
        },
        {
          address: '경상남도 거제시 아주로9길 22 (아주동)',
          latitude: 34.8656115,
          longitude: 128.6771202,
        },
        {
          address: '경기도 성남시 분당구 동원로1번길 21 (동원동)',
          latitude: 37.3437219,
          longitude: 127.0993882,
        },
        {
          address: '경기도 성남시 중원구 사기막골로45번길 15 (상대원동)',
          latitude: 37.4363586,
          longitude: 127.1693247,
        },
        {
          address: '경기도 안양시 만안구 박달로 319 (박달동)',
          latitude: 37.4062339,
          longitude: 126.8896131,
        },
        {
          address: '충청남도 천안시 서북구 입장면 용정도하길 215-19, 3층',
          latitude: 36.93039,
          longitude: 127.1855515,
        },
        {
          address: '충청남도 천안시 서북구 입장면 용정리2길 22, 물류창고',
          latitude: 36.9287272,
          longitude: 127.1863267,
        },
        {
          address: '세종특별자치시 부강면 시목부강로 608-7',
          latitude: 36.5191683,
          longitude: 127.3798102,
        },
        {
          address: '경기도 광명시 남부순환로 1092, 롯데물류센터 1층 (철산동)',
          latitude: 37.4872926,
          longitude: 126.8743152,
        },
        {
          address: '경기도 이천시 마장면 프리미엄아울렛로 113-60',
          latitude: 37.252952,
          longitude: 127.389535,
        },
        {
          address: '경기도 이천시 마장면 덕평로 831-59, 롯데글로벌 로지스(주)',
          latitude: 37.2317415,
          longitude: 127.3605383,
        },
        {
          address: '경기도 이천시 대월면 대월로 916',
          latitude: 37.2365246,
          longitude: 127.4973215,
        },
        {
          address: '경기도 이천시 마장면 둔터로 42',
          latitude: 37.2838172,
          longitude: 127.3981509,
        },
        {
          address: '경기도 군포시 번영로 82, 한국복합물류(주) Q동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '대구광역시 달성군 하빈면 하빈로171길 28-23',
          latitude: 35.9367465,
          longitude: 128.4628282,
        },
        {
          address: '경기도 용인시 기흥구 동백죽전대로 289 (중동)',
          latitude: 37.264605,
          longitude: 127.159953,
        },
        {
          address: '경기도 용인시 처인구 원삼면 보개원삼로 2160, 화인물류',
          latitude: 37.1787595,
          longitude: 127.3357837,
        },
        {
          address:
            '경기도 용인시 기흥구 하갈로86번길 46, 롯데슈퍼물류센타 (하갈동)',
          latitude: 37.2551913,
          longitude: 127.1014059,
        },
        {
          address: '광주광역시 광산구 하남산단5번로 46 (장덕동)',
          latitude: 35.190283,
          longitude: 126.8091479,
        },
        {
          address: '경기도 화성시 장안면 황골길 63-17, 아래층',
          latitude: 37.0948473,
          longitude: 126.8648769,
        },
        {
          address: '강원도 원주시 소초면 북원로 3062-6',
          latitude: 37.4145988,
          longitude: 127.9631558,
        },
        {
          address: '경기도 이천시 부발읍 중부대로2000번길 35',
          latitude: 37.29073169999999,
          longitude: 127.5299953,
        },
        {
          address: '대구광역시 북구 노원로 106 (노원동3가)',
          latitude: 35.8954218,
          longitude: 128.5734245,
        },
        {
          address: '울산광역시 북구 진장유통1로 15 (진장동)',
          latitude: 35.5670275,
          longitude: 129.3543845,
        },
        {
          address: '경상남도 김해시 김해대로2635번길 52 (안동)',
          latitude: 35.2336731,
          longitude: 128.9153098,
        },
        {
          address: '경상북도 칠곡군 왜관읍 현대로 50-1',
          latitude: 35.9844323,
          longitude: 128.4298233,
        },
        {
          address: '경기도 용인시 처인구 백암면 원설로 606, 1층',
          latitude: 37.141949,
          longitude: 127.3894415,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리길 188-8',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address:
            '경기도 부천시 신흥로511번길 80, 켄달스퀘어 부천 로지스틱스파크 창고 B동 1층 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address: '경기도 광주시 곤지암읍 신만로 11-4',
          latitude: 37.3440935,
          longitude: 127.39445,
        },
        {
          address: '경기도 안성시 미양면 당골길 12',
          latitude: 36.9860631,
          longitude: 127.2432484,
        },
        {
          address: '충청남도 논산시 계백로 1082-1 (취암동)',
          latitude: 36.201286,
          longitude: 127.0955353,
        },
        {
          address: '경상남도 함양군 수동면 수동길 37',
          latitude: 35.52154300000001,
          longitude: 127.7896421,
        },
        {
          address: '경기도 평택시 포승읍 포승산단로40번길 30',
          latitude: 36.9703049,
          longitude: 126.8622795,
        },
        {
          address: '경기도 용인시 처인구 백암면 덕평로 120, 지하1층',
          latitude: 37.1802787,
          longitude: 127.3731351,
        },
        {
          address: '충청북도 진천군 진천읍 덕금로 183-13, 태평선식',
          latitude: 36.8719944,
          longitude: 127.4668781,
        },
        {
          address: '인천광역시 서구 북항로245번길 13-22 (원창동)',
          latitude: 37.5019127,
          longitude: 126.6243171,
        },
        {
          address:
            '경기도 부천시 신흥로511번길 80, 켄달스퀘어 부천 로지스틱스파크 창고B동 1층 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address: '광주광역시 광산구 하남산단9번로 77 (안청동)',
          latitude: 35.2139426,
          longitude: 126.8036676,
        },
        {
          address: '충청북도 음성군 대소면 대물로 46',
          latitude: 36.9718925,
          longitude: 127.4704826,
        },
        {
          address: '전라남도 보성군 벌교읍 조정래길 222-11',
          latitude: 34.8598223,
          longitude: 127.3402648,
        },
        {
          address: '전라남도 보성군 벌교읍 조정래길 249',
          latitude: 34.8612947,
          longitude: 127.3386629,
        },
        {
          address: '경기도 남양주시 오남읍 양지로대대울1길 15-45',
          latitude: 37.7013916,
          longitude: 127.1873668,
        },
        {
          address:
            '경기도 이천시 호법면 덕평로 472-96, (주)정안로지스 물류센터',
          latitude: 37.2425133,
          longitude: 127.4121781,
        },
        {
          address: '경기도 광주시 초월읍 산수로645번길 49',
          latitude: 37.4217556,
          longitude: 127.3040959,
        },
        {
          address: '경기도 군포시 번영로 82, 한국복합물류(주) N동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '충청남도 부여군 은산면 충절로 2783',
          latitude: 36.3078744,
          longitude: 126.8544823,
        },
        {
          address: '충청남도 부여군 구룡면 흥수로 12',
          latitude: 36.2510093,
          longitude: 126.8191081,
        },
        {
          address: '충청남도 부여군 임천면 성흥로 112',
          latitude: 36.1887061,
          longitude: 126.8925922,
        },
        {
          address: '충청남도 예산군 신암면 오신로 814',
          latitude: 36.7383521,
          longitude: 126.8113317,
        },
        {
          address: '경상북도 경산시 하양읍 지식산업2로1길 63',
          latitude: 35.8428733,
          longitude: 128.7636976,
        },
        {
          address: '전라남도 장성군 남면 나노산단로 55',
          latitude: 35.2306281,
          longitude: 126.8345682,
        },
        {
          address: '경기도 군포시 번영로 82, 한국복합물류(주) H,I,N동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '대전광역시 대덕구 대화로52번안길 55, 넥센타이어 (대화동)',
          latitude: 36.3729374,
          longitude: 127.4082388,
        },
        {
          address:
            '경기도 이천시 호법면 이섭대천로309번길 56-22 ((주)씨엔에이치홀딩스)',
          latitude: 37.2260822,
          longitude: 127.4124909,
        },
        {
          address: '경기도 군포시 번영로 82, 한국복합물류(주) D동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경상남도 양산시 산막공단북8길 9 (호계동)',
          latitude: 35.3683997,
          longitude: 129.0618229,
        },
        {
          address: '경기도 용인시 처인구 원삼면 미평로 10, 넥센타이어',
          latitude: 37.1888371,
          longitude: 127.3261408,
        },
        {
          address: '서울특별시 금천구 가산디지털2로 156 (가산동)',
          latitude: 37.4818691,
          longitude: 126.8788716,
        },
        {
          address: '경기도 안성시 양성면 양성로 311',
          latitude: 37.081445,
          longitude: 127.2073358,
        },
        {
          address: '전라남도 나주시 산포면 영산로 6187-8',
          latitude: 35.0410546,
          longitude: 126.8032659,
        },
        {
          address: '경기도 화성시 남양읍 주석로175번길 20-12',
          latitude: 37.2165926,
          longitude: 126.8535764,
        },
        {
          address: '경기도 광주시 초월읍 산수로 642-70, 초월물류단지',
          latitude: 37.3662385,
          longitude: 127.3188711,
        },
        {
          address: '경기도 이천시 마장면 덕평로 831-35',
          latitude: 37.2169179,
          longitude: 127.3723577,
        },
        {
          address: '경기도 이천시 마장면 억만리로 140-27, 1층',
          latitude: 37.259195,
          longitude: 127.37015,
        },
        {
          address: '경기도 이천시 호법면 덕평로 257-21',
          latitude: 37.1905096,
          longitude: 127.3785449,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27, D(10)동',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '경기도 이천시 마장면 마도로 70-77, (주)에스시로지스틱스',
          latitude: 37.2624107,
          longitude: 127.3567187,
        },
        {
          address: '경기도 화성시 장안면 3.1만세로281번길 5-9',
          latitude: 37.0976734,
          longitude: 126.8355384,
        },
        {
          address:
            '인천광역시 미추홀구 염전로144번길 25, 도화물류센터 (도화동)',
          latitude: 37.477932,
          longitude: 126.657348,
        },
        {
          address: '경기도 이천시 호법면 덕평로 217-57, 지구물류',
          latitude: 37.1870968,
          longitude: 127.3749022,
        },
        {
          address: '강원도 강릉시 구정면 회산로 171-117',
          latitude: 37.7245573,
          longitude: 128.8477246,
        },
        {
          address: '경기도 평택시 서탄면 발안로 1198-5, 일양물류 1센터 2동 1층',
          latitude: 37.1335169,
          longitude: 127.0343987,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로58번길 35-28, 동원아이팜 창고 3층',
          latitude: 37.6033543,
          longitude: 126.7709573,
        },
        {
          address:
            '경기도 이천시 마장면 마도로 175, 제이케이로지스(주) 물류창고',
          latitude: 37.2708088,
          longitude: 127.3514019,
        },
        {
          address: '부산광역시 강서구 범방3로 10 (범방동)',
          latitude: 35.1554534,
          longitude: 128.8861212,
        },
        {
          address: '경상남도 창원시 의창구 북면 월계길 1',
          latitude: 35.3477601,
          longitude: 128.6070605,
        },
        {
          address: '인천광역시 강화군 길상면 길상로 197, BGF로지스강화점',
          latitude: 37.6348099,
          longitude: 126.5029376,
        },
        {
          address: '인천광역시 강화군 하점면 강화서로 579, ES강화농산',
          latitude: 37.7461135,
          longitude: 126.3871335,
        },
        {
          address: '전라남도 장성군 진원면 영신2길 63',
          latitude: 35.268038,
          longitude: 126.805332,
        },
        {
          address: '경기도 용인시 처인구 원삼면 죽양대로 1566, 원진물류 2층',
          latitude: 37.1802696,
          longitude: 127.3375172,
        },
        {
          address: '인천광역시 중구 축항대로212번길 28 (항동7가)',
          latitude: 37.4493826,
          longitude: 126.6176931,
        },
        {
          address: '경기도 광주시 곤지암읍 만삼로 357-1',
          latitude: 37.3818166,
          longitude: 127.442802,
        },
        {
          address: '경기도 광주시 곤지암읍 경충대로 124',
          latitude: 37.3290245,
          longitude: 127.3858971,
        },
        {
          address: '경기도 평택시 청북읍 청오로 405-10',
          latitude: 37.0335522,
          longitude: 126.9580156,
        },
        {
          address: '경기도 이천시 호법면 덕평로 257-34',
          latitude: 37.1905096,
          longitude: 127.3785449,
        },
        {
          address: '경기도 안산시 단원구 엠티브이6로18번길 23 (성곡동)',
          latitude: 37.298915,
          longitude: 126.763348,
        },
        {
          address: '경상북도 경주시 외동읍 석계평리길 28-104, 1동 2층',
          latitude: 35.6811752,
          longitude: 129.3099427,
        },
        {
          address: '경기도 화성시 동탄물류로 48, B동 1~B2층 (신동)',
          latitude: 37.169032,
          longitude: 127.131495,
        },
        {
          address: '부산광역시 동구 성남로 66, 대양산업 (좌천동)',
          latitude: 35.1304692,
          longitude: 129.0564088,
        },
        {
          address: '경기도 광주시 오포읍 새말길 195',
          latitude: 37.3752194,
          longitude: 127.1628636,
        },
        {
          address: '제주특별자치도 서귀포시 대정읍 일주서로3000번길 155-28',
          latitude: 33.2606999,
          longitude: 126.229402,
        },
        {
          address: '경기도 이천시 마장면 청강가창로 309, B동 2층',
          latitude: 37.2082361,
          longitude: 127.3587663,
        },
        {
          address: '경상북도 군위군 효령면 하평길 115',
          latitude: 36.1064743,
          longitude: 128.5803456,
        },
        {
          address: '충청북도 청주시 청원구 북이면 장재2길 35',
          latitude: 36.7456634,
          longitude: 127.5525792,
        },
        {
          address:
            '경상남도 함안군 법수면 법수로 498, 농협창고, 씨제이대한통운',
          latitude: 35.3149715,
          longitude: 128.3784603,
        },
        {
          address:
            '경기도 화성시 동탄물류로 48, 화성동탄물류단지 B동 3,4층 (신동)',
          latitude: 37.199327,
          longitude: 127.0970177,
        },
        {
          address: '경기도 이천시 마장면 청강가창로 288',
          latitude: 37.2082361,
          longitude: 127.3587663,
        },
        {
          address: '경상남도 사천시 사천읍 두량로 272',
          latitude: 35.1048572,
          longitude: 128.1184509,
        },
        {
          address: '경기도 여주시 능서면 양화로 714',
          latitude: 37.2812056,
          longitude: 127.5652234,
        },
        {
          address: '경기도 화성시 동탄산단3길 20-31, 5층 (방교동)',
          latitude: 37.1769687,
          longitude: 127.0924892,
        },
        {
          address: '경기도 이천시 호법면 덕평로 257-21, 4층',
          latitude: 37.1905096,
          longitude: 127.3785449,
        },
        {
          address: '경기도 이천시 부발읍 황무로 2037-57',
          latitude: 37.2432879,
          longitude: 127.5136223,
        },
        {
          address:
            '전라북도 군산시 동장산로 267, 주식회사 대우로지스틱스 (소룡동)',
          latitude: 35.9725129,
          longitude: 126.5843451,
        },
        {
          address: '충청남도 당진시 송악읍 부곡공단4길 28-83',
          latitude: 36.9567729,
          longitude: 126.7781206,
        },
        {
          address: '광주광역시 광산구 소촌로123번길 24 (소촌동)',
          latitude: 35.1553195,
          longitude: 126.7901478,
        },
        {
          address: '광주광역시 광산구 진곡산단중앙로 97 (오선동)',
          latitude: 35.2036906,
          longitude: 126.8031498,
        },
        {
          address: '경기도 안성시 공도읍 원승두길 135, 1동 1층',
          latitude: 36.986777,
          longitude: 127.1584089,
        },
        {
          address: '경기도 평택시 진위면 진위2산단로 45, (주)서브원',
          latitude: 37.1229413,
          longitude: 127.0707186,
        },
        {
          address: '충청남도 천안시 동남구 목천읍 성남로 77, (주)YL',
          latitude: 36.765898,
          longitude: 127.2117581,
        },
        {
          address: '충청남도 천안시 동남구 목천읍 성남로 59, (주)YL',
          latitude: 36.7670267,
          longitude: 127.2099208,
        },
        {
          address: '충청북도 청주시 흥덕구 직지대로474번길 39 (송정동)',
          latitude: 36.64251369999999,
          longitude: 127.445952,
        },
        {
          address: '인천광역시 중구 월미로 94, 한진 (북성동1가)',
          latitude: 37.4786165,
          longitude: 126.6144843,
        },
        {
          address: '경상남도 창원시 성산구 창원대로 474 (대원동)',
          latitude: 35.2259709,
          longitude: 128.6467634,
        },
        {
          address: '전라남도 장성군 북이면 백양로 22',
          latitude: 35.4289593,
          longitude: 126.8087685,
        },
        {
          address: '인천광역시 중구 축항대로290번길 23 (신흥동3가)',
          latitude: 37.4460457,
          longitude: 126.6264675,
        },
        {
          address: '경기도 안성시 양성면 남북대로 2066',
          latitude: 37.0845669,
          longitude: 127.2053692,
        },
        {
          address: '경기도 용인시 처인구 양지면 남평로 111-73',
          latitude: 37.2298035,
          longitude: 127.2960753,
        },
        {
          address: '경기도 파주시 신촌로 59 (신촌동)',
          latitude: 37.7313045,
          longitude: 126.6968854,
        },
        {
          address: '경상북도 구미시 1공단로6길 37, (주)서브원 (공단동)',
          latitude: 36.0969637,
          longitude: 128.3774146,
        },
        {
          address: '경기도 안성시 양성면 양성로 376-106',
          latitude: 37.08593820000001,
          longitude: 127.2120963,
        },
        {
          address: '경상남도 김해시 김해대로2662번길 19 (지내동)',
          latitude: 35.22756529999999,
          longitude: 128.9186368,
        },
        {
          address: '경기도 안성시 일죽면 사실로 161-41, A-2동',
          latitude: 37.1268337,
          longitude: 127.4300273,
        },
        {
          address:
            '경기도 안산시 단원구 해안로 201, 롯데알미늄(주) 안산공장 (원시동)',
          latitude: 37.2985362,
          longitude: 126.778802,
        },
        {
          address: '경기도 안산시 단원구 원시로 239-13 (원시동)',
          latitude: 37.3192713,
          longitude: 126.7825736,
        },
        {
          address: '경기도 이천시 마장면 이장로311번길 91',
          latitude: 37.2802944,
          longitude: 127.3851137,
        },
        {
          address:
            '경기도 화성시 동탄산단3길 20-5, (주)채과연, 이그린하나물류(주) A동 2,3층 (방교동)',
          latitude: 37.1769687,
          longitude: 127.0924892,
        },
        {
          address: '울산광역시 북구 효자로 112 (효문동)',
          latitude: 35.5637333,
          longitude: 129.3680483,
        },
        {
          address: '광주광역시 북구 양일로 111 (양산동)',
          latitude: 35.1990143,
          longitude: 126.8775757,
        },
        {
          address: '충청북도 진천군 이월면 월촌1길 146, (주)유앤아이로직스',
          latitude: 36.9200002,
          longitude: 127.472569,
        },
        {
          address: '충청북도 진천군 덕산읍 초금로 318-51',
          latitude: 36.8726818,
          longitude: 127.5185753,
        },
        {
          address: '대전광역시 대덕구 문평동로18번길 21, 롯데제과(주) (문평동)',
          latitude: 36.4483614,
          longitude: 127.4030517,
        },
        {
          address: '광주광역시 광산구 용아로 807 (안청동)',
          latitude: 35.2137332,
          longitude: 126.8032354,
        },
        {
          address: '제주특별자치도 제주시 조천읍 와흘로 241',
          latitude: 33.4853128,
          longitude: 126.6405547,
        },
        {
          address: '경기도 평택시 진위면 경기대로 1952, 롯데제과(주)평택공장',
          latitude: 37.1174245,
          longitude: 127.0658902,
        },
        {
          address: '경상남도 밀양시 부북면 사포산단중앙로 123',
          latitude: 35.4666947,
          longitude: 128.7339261,
        },
        {
          address:
            '경상남도 양산시 산막공단북3길 9, 롯데쇼핑물류센타(주) (산막동)',
          latitude: 35.3700164,
          longitude: 129.054251,
        },
        {
          address: '경기도 오산시 오산로 149 (오산동)',
          latitude: 37.1393116,
          longitude: 127.0737052,
        },
        {
          address: '대전광역시 대덕구 신일서로126번길 60 (신일동)',
          latitude: 36.4324035,
          longitude: 127.4061595,
        },
        {
          address: '대전광역시 대덕구 평촌동 24번지 3호 ',
          latitude: 36.4297459,
          longitude: 127.4343935,
        },
        {
          address: '대전광역시 대덕구 신일서로68번길 50 (신일동)',
          latitude: 36.4369924,
          longitude: 127.4005389,
        },
        {
          address: '경기도 화성시 남양읍 주석로325번길 19',
          latitude: 37.2078645,
          longitude: 126.8637394,
        },
        {
          address: '서울특별시 성동구 성수이로 62 (성수동2가)',
          latitude: 37.540343,
          longitude: 127.0558113,
        },
        {
          address: '인천광역시 동구 제물량로 357, 동일방직 (만석동)',
          latitude: 37.4831847,
          longitude: 126.622042,
        },
        {
          address: '부산광역시 사하구 감천항로291번길 18 (구평동)',
          latitude: 35.0658213,
          longitude: 128.992566,
        },
        {
          address: '서울특별시 강서구 양천로 373 (가양동)',
          latitude: 37.562902,
          longitude: 126.8378873,
        },
        {
          address: '인천광역시 중구 자유무역로 25, C6블럭 창고동 2층 (운서동)',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address: '경기도 이천시 호법면 덕평로 472-35',
          latitude: 37.2070003,
          longitude: 127.3914454,
        },
        {
          address:
            '부산광역시 강서구 녹산산업북로 119, 부산물류터미널(주)내화물창고 1동 (송정동)',
          latitude: 35.0985723,
          longitude: 128.8376332,
        },
        {
          address: '경기도 양주시 광적면 광적로155번길 12',
          latitude: 37.8318287,
          longitude: 126.9759266,
        },
        {
          address: '경기도 용인시 처인구 원삼면 맹리로2번길 29, 정호물류',
          latitude: 37.19191199999999,
          longitude: 127.3280757,
        },
        {
          address: '전라남도 광양시 항만11로 49, 1동 (중동)',
          latitude: 34.9268497,
          longitude: 127.6945791,
        },
        {
          address: '경기도 화성시 동탄물류로 48, B동 2층 (신동)',
          latitude: 37.169032,
          longitude: 127.131495,
        },
        {
          address: '서울특별시 강서구 오정로 602 (외발산동)',
          latitude: 37.5486526,
          longitude: 126.8161588,
        },
        {
          address: '대전광역시 대덕구 대전로1331번길 205 (대화동)',
          latitude: 36.3701714,
          longitude: 127.4103594,
        },
        {
          address: '서울특별시 금천구 가산디지털2로 83 (가산동)',
          latitude: 37.4751739,
          longitude: 126.8804459,
        },
        {
          address:
            '서울특별시 송파구 송파대로 55, B동 2층 (장지동,서울복합물류)',
          latitude: 37.4746178,
          longitude: 127.1260071,
        },
        {
          address:
            '경상북도 포항시 남구 대송로253번길 71, (주)한진포항자동차중기정비공장 (송내동)',
          latitude: 36.0041012,
          longitude: 129.3710906,
        },
        {
          address: '제주특별자치도 제주시 조천읍 함덕남4길 49',
          latitude: 33.5330333,
          longitude: 126.6681359,
        },
        {
          address: '제주특별자치도 서귀포시 성산읍 일주동로 4505',
          latitude: 33.4264924,
          longitude: 126.9086898,
        },
        {
          address: '부산광역시 강서구 미음국제2로 35 (미음동)',
          latitude: 35.1446786,
          longitude: 128.871243,
        },
        {
          address: '경기도 광주시 도척면 도척로 401-98, 유유물류센터',
          latitude: 37.3154211,
          longitude: 127.3397842,
        },
        {
          address: '경기도 안성시 원곡면 갈월길 23-1',
          latitude: 37.05299309999999,
          longitude: 127.1626431,
        },
        {
          address: '경기도 용인시 처인구 백암면 죽양대로904번길 63',
          latitude: 37.1484536,
          longitude: 127.3909062,
        },
        {
          address: '경기도 용인시 기흥구 고매로43번길 1 (공세동)',
          latitude: 37.2319245,
          longitude: 127.1132929,
        },
        {
          address: '강원도 강릉시 율곡로 3214 (죽헌동)',
          latitude: 37.7813425,
          longitude: 128.8562267,
        },
        {
          address: '광주광역시 북구 첨단연신로77번길 20 (연제동)',
          latitude: 35.2017905,
          longitude: 126.8717568,
        },
        {
          address: '서울특별시 강서구 하늘길 251 (공항동)',
          latitude: 37.555525,
          longitude: 126.8067017,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로57번길 45, 성광로지스틱스 물류센터 창고동',
          latitude: 37.5932559,
          longitude: 126.7882842,
        },
        {
          address: '서울특별시 마포구 구룡길 36 (상암동)',
          latitude: 37.5893621,
          longitude: 126.8828399,
        },
        {
          address: '경기도 광주시 도척면 도척로 376-68',
          latitude: 37.3193326,
          longitude: 127.3333211,
        },
        {
          address: '경기도 이천시 부발읍 중부대로2000번길 37, 4층',
          latitude: 37.29073169999999,
          longitude: 127.5299953,
        },
        {
          address: '경기도 이천시 호법면 안평로 59-35',
          latitude: 37.2282571,
          longitude: 127.4232326,
        },
        {
          address: '경기도 파주시 탄현면 한록산길 7',
          latitude: 37.7935447,
          longitude: 126.6945462,
        },
        {
          address: '경상북도 칠곡군 석적읍 중지3길 132, 가동',
          latitude: 36.0241089,
          longitude: 128.4236252,
        },
        {
          address: '경기도 화성시 양감면 두머리길 37-10',
          latitude: 37.0987377,
          longitude: 126.9428347,
        },
        {
          address: '인천광역시 서구 북항로120번길 99 (원창동)',
          latitude: 37.5136205,
          longitude: 126.633737,
        },
        {
          address: '경기도 이천시 장호원읍 경충대로597번길 66',
          latitude: 37.1539759,
          longitude: 127.575743,
        },
        {
          address: '부산광역시 강서구 과학산단로333번길 77-69 (지사동)',
          latitude: 35.1461873,
          longitude: 128.8318086,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리로 220',
          latitude: 35.2710625,
          longitude: 128.7758125,
        },
        {
          address: '충청북도 음성군 맹동면 덕금로 56, 가동',
          latitude: 36.9188592,
          longitude: 127.5293167,
        },
        {
          address: '경기도 이천시 마장면 이장로157번길 135',
          latitude: 37.2736762,
          longitude: 127.3829126,
        },
        {
          address: '제주특별자치도 제주시 구좌읍 상도로 256',
          latitude: 33.4951069,
          longitude: 126.8526775,
        },
        {
          address: '경기도 화성시 서신면 전곡산단로 31',
          latitude: 37.1930326,
          longitude: 126.6734956,
        },
        {
          address: '경기도 안성시 일죽면 고목남길 95-31, A동 1층',
          latitude: 37.1218332,
          longitude: 127.4409715,
        },
        {
          address: '경기도 남양주시 화도읍 폭포로 137-45, 화도물류센터',
          latitude: 37.6383838,
          longitude: 127.310149,
        },
        {
          address: '경기도 군포시 번영로 82, 한국복합물류(주) O동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '충청북도 청주시 서원구 남이면 저산척북로 263-33',
          latitude: 36.5659013,
          longitude: 127.3847805,
        },
        {
          address: '충청북도 청주시 서원구 남이면 저산척북로 263-37',
          latitude: 36.5659013,
          longitude: 127.3847805,
        },
        {
          address: '경기도 광주시 광남안로 101 (태전동)',
          latitude: 37.3869476,
          longitude: 127.2159407,
        },
        {
          address:
            '충청북도 괴산군 괴산읍 자연식품길 26, 주식회사 쿱서비스 냉동보관창고',
          latitude: 36.8117117,
          longitude: 127.7908552,
        },
        {
          address: '경상남도 사천시 사천읍 두량로 272-4',
          latitude: 35.1048572,
          longitude: 128.1184509,
        },
        {
          address: '제주특별자치도 서귀포시 대정읍 노을해안로 23',
          latitude: 33.241835,
          longitude: 126.2270616,
        },
        {
          address: '경기도 군포시 공단로140번길 28 (당정동)',
          latitude: 37.36078759999999,
          longitude: 126.9477431,
        },
        {
          address: '경기도 용인시 처인구 양지면 죽양대로2071번길 7, 양지물류',
          latitude: 37.2189999,
          longitude: 127.3144466,
        },
        {
          address:
            '인천광역시 중구 자유무역로 95, D4블럭 CIC 로지스틱 내 (운서동)',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address: '경상북도 칠곡군 지천면 산단터널로 234',
          latitude: 35.9561419,
          longitude: 128.4911029,
        },
        {
          address: '인천광역시 서구 가좌로 59 (가좌동)',
          latitude: 37.4940651,
          longitude: 126.6811224,
        },
        {
          address: '경기도 화성시 우정읍 석천길 10',
          latitude: 37.057415,
          longitude: 126.7919129,
        },
        {
          address: '경기도 용인시 처인구 백암면 백봉로295번길 60',
          latitude: 37.1391375,
          longitude: 127.3887065,
        },
        {
          address: '강원도 원주시 문막읍 문막공단길 215, 주식회사대지수출포장',
          latitude: 37.2899933,
          longitude: 127.7992352,
        },
        {
          address: '경기도 이천시 대월면 대월로932번길 94, A동',
          latitude: 37.2361558,
          longitude: 127.5017476,
        },
        {
          address: '충청남도 서산시 음암면 석동로 455',
          latitude: 36.831362,
          longitude: 126.5132463,
        },
        {
          address: '경기도 이천시 호법면 중부대로 797-37',
          latitude: 37.247257,
          longitude: 127.4215492,
        },
        {
          address: '울산광역시 남구 장생포로 20 (여천동)',
          latitude: 35.5183097,
          longitude: 129.3453558,
        },
        {
          address: '충청남도 천안시 동남구 수신면 장산동길 72, 한국통운(주)',
          latitude: 36.7380409,
          longitude: 127.3001122,
        },
        {
          address: '경기도 안성시 일죽면 일생로 238-7',
          latitude: 37.0687283,
          longitude: 127.4966745,
        },
        {
          address: '경기도 용인시 처인구 백암면 덕평로 140',
          latitude: 37.1813182,
          longitude: 127.3735781,
        },
        {
          address: '경기도 용인시 처인구 포곡읍 한금로 162-5, 신성물류센터',
          latitude: 37.2678268,
          longitude: 127.2327548,
        },
        {
          address: '경기도 이천시 마장면 덕평로 965',
          latitude: 37.234124,
          longitude: 127.3681152,
        },
        {
          address: '세종특별자치시 연서면 공단로 92',
          latitude: 36.55084000000001,
          longitude: 127.2670901,
        },
        {
          address: '제주특별자치도 제주시 우정로8길 16 (외도일동)',
          latitude: 33.4895711,
          longitude: 126.429257,
        },
        {
          address: '강원도 원주시 호저면 호매곡1길 121',
          latitude: 37.397218,
          longitude: 127.9259266,
        },
        {
          address: '제주특별자치도 서귀포시 토평공단로155번길 45 (토평동)',
          latitude: 33.2931783,
          longitude: 126.5797581,
        },
        {
          address: '충청북도 음성군 생극면 병암길 161-12',
          latitude: 37.0323789,
          longitude: 127.5932512,
        },
        {
          address: '충청남도 예산군 신암면 용궁신택길 1-21',
          latitude: 36.7544103,
          longitude: 126.8107671,
        },
        {
          address: '경기도 여주시 대신면 여양로 1305',
          latitude: 37.3433426,
          longitude: 127.6363583,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27, 나동 3호',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '충청북도 청주시 서원구 현도면 우록길 15-34, 남신테크㈜',
          latitude: 36.6424341,
          longitude: 127.4890319,
        },
        {
          address:
            '경상북도 포항시 남구 철강로 405, 현대종합특수강(주)포항2공장 (호동)',
          latitude: 35.9829233,
          longitude: 129.3667434,
        },
        {
          address:
            '경기도 부천시 신흥로511번길 80, 켄달스퀘어 부천 로지스틱스파크 1동 1층 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address: '경기도 광주시 곤지암읍 광여로 644',
          latitude: 37.3697999,
          longitude: 127.4038742,
        },
        {
          address: '경기도 화성시 우정읍 포승향남로 2015-26',
          latitude: 37.0856464,
          longitude: 126.8235636,
        },
        {
          address: '경기도 안성시 미양면 안성맞춤대로 394',
          latitude: 36.9571042,
          longitude: 127.2442746,
        },
        {
          address: '경기도 이천시 설성면 원설로 241',
          latitude: 37.1405605,
          longitude: 127.4591566,
        },
        {
          address: '전라북도 전주시 완산구 호동길 28 (삼천동3가)',
          latitude: 35.7901757,
          longitude: 127.0820346,
        },
        {
          address: '경기도 남양주시 오남읍 양지로46번길 145',
          latitude: 37.6891365,
          longitude: 127.2077317,
        },
        {
          address: '경기도 고양시 일산동구 장항로 179 (장항동)',
          latitude: 37.6378679,
          longitude: 126.7785957,
        },
        {
          address: '경기도 파주시 탑삭골길 330-66 (상지석동)',
          latitude: 37.7294275,
          longitude: 126.7928196,
        },
        {
          address: '경기도 용인시 처인구 양지면 중부대로 2465',
          latitude: 37.2407107,
          longitude: 127.3039894,
        },
        {
          address: '경기도 안성시 원곡면 관산길 34',
          latitude: 37.0347416,
          longitude: 127.1477179,
        },
        {
          address: '경기도 여주시 대신면 여양로 763',
          latitude: 37.3735142,
          longitude: 127.5893231,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리1로93번길 23',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address: '인천광역시 서구 북항로 28-29 (원창동)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '인천광역시 서구 북항로245번길 77 (원창동)',
          latitude: 37.5019127,
          longitude: 126.6243171,
        },
        {
          address: '경상북도 포항시 북구 흥해읍 성곡길182번길 6',
          latitude: 36.0875125,
          longitude: 129.3562509,
        },
        {
          address:
            '세종특별자치시 부강면 연청로 745-46, 3동 화물취급장A(나동), 1동 화물취급장B(라동)',
          latitude: 36.5439377,
          longitude: 127.3567475,
        },
        {
          address: '경기도 평택시 포승읍 남양만로 88',
          latitude: 37.0084263,
          longitude: 126.8096191,
        },
        {
          address: '경상남도 양산시 어곡공단1길 31 (어곡동)',
          latitude: 35.3740926,
          longitude: 129.0181614,
        },
        {
          address: '경기도 안성시 죽산면 송문주로 219',
          latitude: 37.0785148,
          longitude: 127.4224058,
        },
        {
          address: '경기도 용인시 처인구 백암면 죽양대로904번길 46',
          latitude: 37.1484536,
          longitude: 127.3909062,
        },
        {
          address: '충청북도 청주시 서원구 현도면 시목부강로 205',
          latitude: 36.6424341,
          longitude: 127.4890319,
        },
        {
          address: '경기도 이천시 호법면 중부대로763번길 141-27',
          latitude: 37.249452,
          longitude: 127.4241194,
        },
        {
          address:
            '경기도 군포시 번영로 82, 한국복합물류(주) J동 7,8층 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '제주특별자치도 제주시 조천읍 신와로 92',
          latitude: 33.5202567,
          longitude: 126.617752,
        },
        {
          address: '울산광역시 울주군 언양읍 반구대로 1305-73, 광일물류 1동',
          latitude: 35.6088573,
          longitude: 129.1362005,
        },
        {
          address: '세종특별자치시 연서면 공단로 91',
          latitude: 36.5619984,
          longitude: 127.2824371,
        },
        {
          address: '경기도 화성시 동탄산단10길 74 (방교동)',
          latitude: 37.1769687,
          longitude: 127.0924892,
        },
        {
          address: '경상북도 경산시 하양읍 지식산업2로 95',
          latitude: 35.9132087,
          longitude: 128.8189471,
        },
        {
          address: '경기도 여주시 대신면 여양로 1303',
          latitude: 37.3735142,
          longitude: 127.5893231,
        },
        {
          address: '경상남도 창원시 진해구 두동로 32 (두동)',
          latitude: 35.1213758,
          longitude: 128.7945799,
        },
        {
          address: '충청북도 옥천군 옥천읍 옥천동이로 387-54',
          latitude: 36.2965981,
          longitude: 127.6079697,
        },
        {
          address: '충청북도 진천군 덕산읍 산수산단3로 66',
          latitude: 36.89151950000001,
          longitude: 127.4847618,
        },
        {
          address: '경기도 화성시 우정읍 포승향남로 967',
          latitude: 37.0544543,
          longitude: 126.8010602,
        },
        {
          address: '울산광역시 남구 처용로 621, 남선로지스틱스 1동 (황성동)',
          latitude: 35.4665656,
          longitude: 129.3584388,
        },
        {
          address: '충청남도 서산시 성연면 성연4로 197-40',
          latitude: 36.83744799999999,
          longitude: 126.4622064,
        },
        {
          address: '충청북도 영동군 황간면 영동황간로 1452-129',
          latitude: 36.2157875,
          longitude: 127.8978763,
        },
        {
          address: '강원도 원주시 지정면 하차면길 19-36',
          latitude: 37.3604337,
          longitude: 127.895505,
        },
        {
          address: '충청남도 천안시 서북구 성환읍 연암로 411',
          latitude: 36.9504792,
          longitude: 127.1681331,
        },
        {
          address: '경기도 파주시 송학1길 35 (야당동)',
          latitude: 37.71128,
          longitude: 126.7620117,
        },
        {
          address: '경기도 파주시 탄현면 오금로 30',
          latitude: 37.8249711,
          longitude: 126.7058105,
        },
        {
          address: '경상북도 칠곡군 지천면 산단터널로 240',
          latitude: 35.9561419,
          longitude: 128.4911029,
        },
        {
          address: '경기도 이천시 신둔면 서이천로 774, 지하1층',
          latitude: 37.2962912,
          longitude: 127.399649,
        },
        {
          address: '울산광역시 남구 사평로 227-50 (선암동)',
          latitude: 35.5091101,
          longitude: 129.3326846,
        },
        {
          address: '전라북도 익산시 왕궁면 국가식품로3길 55',
          latitude: 35.9663437,
          longitude: 127.0878737,
        },
        {
          address: '울산광역시 울주군 삼남면 신안길 35-15',
          latitude: 35.5269152,
          longitude: 129.1021511,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로 75, 제일모직 수도권 통합물류센터 3층 B307호',
          latitude: 37.6033543,
          longitude: 126.7709573,
        },
        {
          address: '광주광역시 광산구 진곡산단1번로 42 (오선동)',
          latitude: 35.2036906,
          longitude: 126.8031498,
        },
        {
          address: '경기도 용인시 처인구 백암면 죽양대로904번길 46, 2층',
          latitude: 37.1484536,
          longitude: 127.3909062,
        },
        {
          address:
            '부산광역시 강서구 송정길 26, 0동 (송정동,조선기자재공동물류센터)',
          latitude: 35.0990725,
          longitude: 128.840005,
        },
        {
          address: '제주특별자치도 제주시 다호길 121 (용담이동)',
          latitude: 33.4992272,
          longitude: 126.4915691,
        },
        {
          address: '제주특별자치도 제주시 임항로 201 (건입동)',
          latitude: 33.5183479,
          longitude: 126.5387193,
        },
        {
          address: '충청남도 서산시 대산읍 충의로 2785',
          latitude: 36.9619674,
          longitude: 126.4324229,
        },
        {
          address: '경기도 용인시 처인구 양지면 죽양대로 2097',
          latitude: 37.2205841,
          longitude: 127.3132352,
        },
        {
          address: '경기도 용인시 처인구 백암면 백봉로295번길 60, 지하2층',
          latitude: 37.1391375,
          longitude: 127.3887065,
        },
        {
          address: '부산광역시 사상구 낙동대로882번길 17 (감전동)',
          latitude: 35.1397523,
          longitude: 128.9717878,
        },
        {
          address: '광주광역시 광산구 손재로 366-55 (오선동)',
          latitude: 35.1991684,
          longitude: 126.787899,
        },
        {
          address: '충청북도 청주시 청원구 오창읍 두릉유리로 688, 일산방직(주)',
          latitude: 36.7292573,
          longitude: 127.4101099,
        },
        {
          address:
            '경기도 평택시 산단로 263, 사조시스템즈 물류센터 지하 3,4층 (칠괴동)',
          latitude: 37.0416309,
          longitude: 127.097987,
        },
        {
          address: '광주광역시 광산구 비아중앙로 104 (비아동)',
          latitude: 35.2277557,
          longitude: 126.8250735,
        },
        {
          address: '경기도 안성시 원곡면 천덕산로 531-8',
          latitude: 37.088111,
          longitude: 127.1512619,
        },
        {
          address: '경기도 의왕시 오봉산단3로 60, 의왕 물류센터 6층 (삼동)',
          latitude: 37.3203343,
          longitude: 126.9662086,
        },
        {
          address: '인천광역시 서구 갑문로 12 (오류동)',
          latitude: 37.6015293,
          longitude: 126.6425425,
        },
        {
          address: '경기도 시흥시 군자천로 227, 시화공단2나 502호 (정왕동)',
          latitude: 37.3396779,
          longitude: 126.7268038,
        },
        {
          address:
            '인천광역시 서구 북항로32번길 29-16, (주)태신글로벌 (원창동)',
          latitude: 37.5049961,
          longitude: 126.6411337,
        },
        {
          address: '경기도 광주시 도척면 도척로 376-86',
          latitude: 37.3185693,
          longitude: 127.3322019,
        },
        {
          address: '경기도 시흥시 매화산단로 16-15 (도창동)',
          latitude: 37.4098684,
          longitude: 126.8267018,
        },
        {
          address:
            '경기도 부천시 신흥로511번길 80, 켄달스퀘어 부천 로지스틱스파크 A동 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address: '경기도 이천시 호법면 이섭대천로 599',
          latitude: 37.2285878,
          longitude: 127.4182922,
        },
        {
          address: '충청북도 음성군 금왕읍 리노산단1길 5',
          latitude: 36.5822827,
          longitude: 127.3577054,
        },
        {
          address: '경기도 화성시 동탄산단1길 4, 3-2층 (방교동)',
          latitude: 37.1769687,
          longitude: 127.0924892,
        },
        {
          address: '경기도 안성시 일죽면 조목동길 28',
          latitude: 37.1036362,
          longitude: 127.5106893,
        },
        {
          address: '전라남도 광양시 명당2길 58 (태인동)',
          latitude: 34.94401130000001,
          longitude: 127.7563541,
        },
        {
          address: '충청북도 청주시 청원구 내수읍 청암로 244-23',
          latitude: 36.7167994,
          longitude: 127.5502761,
        },
        {
          address: '경기도 안성시 원곡면 지문로 393',
          latitude: 37.0637653,
          longitude: 127.1456783,
        },
        {
          address: '경기도 용인시 처인구 원삼면 미평로 14',
          latitude: 37.1759103,
          longitude: 127.293321,
        },
        {
          address: '충청북도 옥천군 옥천읍 성왕로 1489, 공장',
          latitude: 36.3101363,
          longitude: 127.5613752,
        },
        {
          address:
            '경기도 이천시 마장면 청강가창로 309, 캔달스퀘어LP마장센터  a동 4층',
          latitude: 37.2082361,
          longitude: 127.3587663,
        },
        {
          address: '경기도 이천시 마장면 덕평로 649, 켄달스퀘어 마장DC2',
          latitude: 37.2370158,
          longitude: 127.3642332,
        },
        {
          address: '경기도 이천시 마장면 마도로 177',
          latitude: 37.2658283,
          longitude: 127.351872,
        },
        {
          address: '충청남도 공주시 월미농공단지길 55 (월미동)',
          latitude: 36.4888799,
          longitude: 127.1024667,
        },
        {
          address: '충청남도 공주시 월미농공단지길 63 (월미동)',
          latitude: 36.4888799,
          longitude: 127.1024667,
        },
        {
          address: '경기도 용인시 처인구 남사면 완장리 73-5',
          latitude: 37.1762833,
          longitude: 127.1790545,
        },
        {
          address: '경기도 용인시 처인구 남사읍 처인성로 1027',
          latitude: 37.176268,
          longitude: 127.1809693,
        },
        {
          address: '충청북도 옥천군 옥천읍 옥천동이로 100-55, 소매점',
          latitude: 36.2994219,
          longitude: 127.5900141,
        },
        {
          address: '경기도 이천시 마장면 덕평로661번길 87',
          latitude: 37.2160798,
          longitude: 127.3719196,
        },
        {
          address: '제주특별자치도 제주시 첨단로 355 (영평동)',
          latitude: 33.4408297,
          longitude: 126.5736353,
        },
        {
          address: '제주특별자치도 서귀포시 남원읍 서성로 684-17',
          latitude: 33.3249337,
          longitude: 126.6689156,
        },
        {
          address: '경기도 이천시 마장면 마도로 173, 제이케이에프(주)',
          latitude: 37.2708088,
          longitude: 127.3514019,
        },
        {
          address: '경기도 안성시 양성면 양성로 173-11, (주)건화지기',
          latitude: 37.0697965,
          longitude: 127.2045624,
        },
        {
          address:
            '경상남도 사천시 용현면 종포산단로 142, 항공우주산업물류센터',
          latitude: 35.0301104,
          longitude: 128.0434598,
        },
        {
          address: '경기도 광주시 경충대로 1939 (장지동)',
          latitude: 37.4008376,
          longitude: 127.2363785,
        },
        {
          address: '경기도 광주시 초월읍 산수로622번길 46',
          latitude: 37.4134122,
          longitude: 127.3080377,
        },
        {
          address: '대구광역시 서구 문화로 77 (이현동)',
          latitude: 35.8756215,
          longitude: 128.5412082,
        },
        {
          address: '경기도 광주시 초월읍 경충대로 1337-21',
          latitude: 37.392847,
          longitude: 127.2795433,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로230번길 16, 씨비알이지아이 김포 물류센터 5층',
          latitude: 37.6033543,
          longitude: 126.7709573,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로57번길 108, 3층',
          latitude: 37.6149265,
          longitude: 126.7250269,
        },
        {
          address: '충청북도 청주시 상당구 가덕면 상장인차로 188',
          latitude: 36.5292518,
          longitude: 127.5250405,
        },
        {
          address: '충청북도 청주시 서원구 남이면 저산척북로 203-44',
          latitude: 36.5669817,
          longitude: 127.4056244,
        },
        {
          address: '충청북도 청주시 서원구 현도면 청남로 801, ㈜코스모',
          latitude: 36.6424341,
          longitude: 127.4890319,
        },
        {
          address: '경기도 이천시 호법면 덕평로 566',
          latitude: 37.1971392,
          longitude: 127.3798917,
        },
        {
          address: '경기도 이천시 마장면 이장로 339',
          latitude: 37.2802583,
          longitude: 127.3922578,
        },
        {
          address: '경기도 이천시 마장면 억만리로 140-29, 대화물류(주) 2층',
          latitude: 37.259195,
          longitude: 127.37015,
        },
        {
          address: '경기도 이천시 호법면 덕평로 217-42',
          latitude: 37.1888445,
          longitude: 127.3736185,
        },
        {
          address: '경기도 이천시 마장면 덕평로 771-10',
          latitude: 37.2272059,
          longitude: 127.3663462,
        },
        {
          address: '경기도 용인시 처인구 포곡읍 포곡로 100',
          latitude: 37.2680394,
          longitude: 127.2175936,
        },
        {
          address: '경기도 이천시 호법면 안평로 59-31',
          latitude: 37.2285931,
          longitude: 127.4246781,
        },
        {
          address: '제주특별자치도 제주시 선반로6길 9 (화북일동)',
          latitude: 33.5139604,
          longitude: 126.5624977,
        },
        {
          address: '제주특별자치도 제주시 선반남1길 53 (화북일동)',
          latitude: 33.5137831,
          longitude: 126.5641991,
        },
        {
          address: '충청북도 옥천군 옥천읍 옥천동이로 100-40, 해윤물류(주)',
          latitude: 36.2993433,
          longitude: 127.5886439,
        },
        {
          address: '광주광역시 광산구 평동산단외로 56 (용동)',
          latitude: 35.136752,
          longitude: 126.7619762,
        },
        {
          address: '경상남도 김해시 상동면 상동로 680-77',
          latitude: 35.3102781,
          longitude: 128.9441403,
        },
        {
          address:
            '서울특별시 송파구 송파대로 55, 서울복합물류 C동 5층 (장지동)',
          latitude: 37.4746178,
          longitude: 127.1260071,
        },
        {
          address: '경상북도 경산시 진량읍 일연로 689',
          latitude: 35.8629447,
          longitude: 128.8048461,
        },
        {
          address: '경상남도 양산시 칠산길 11, GS리테일물류센타 (다방동)',
          latitude: 35.3324804,
          longitude: 129.044918,
        },
        {
          address:
            '대전광역시 대덕구 대전로1331번길 205, 롯데택배 5층 (대화동)',
          latitude: 36.37081999999999,
          longitude: 127.410284,
        },
        {
          address: '경기도 오산시 오산로 149, 오산물류센터 (오산동)',
          latitude: 37.1401583,
          longitude: 127.0674129,
        },
        {
          address: '경상남도 진주시 정촌면 화개천로 40',
          latitude: 35.13048,
          longitude: 128.105738,
        },
        {
          address: '인천광역시 부평구 평천로 187 (청천동)',
          latitude: 37.5177889,
          longitude: 126.7110791,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로152번길 115, 케이로지스필드 2, 4층',
          latitude: 37.5989061,
          longitude: 126.7843497,
        },
        {
          address: '경기도 이천시 마장면 서이천로 449-19',
          latitude: 37.2615382,
          longitude: 127.3970847,
        },
        {
          address: '경기도 안성시 미양면 안성맞춤대로 390',
          latitude: 36.9637421,
          longitude: 127.2489201,
        },
        {
          address: '경기도 이천시 호법면 중부대로 743',
          latitude: 37.2484522,
          longitude: 127.4162929,
        },
        {
          address: '인천광역시 서구 갑문1로 20, 스카이박스 4층 (오류동)',
          latitude: 37.5634818,
          longitude: 126.6020275,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로57번길 108, 지하1층',
          latitude: 37.6149265,
          longitude: 126.7250269,
        },
        {
          address: '경기도 화성시 마도면 송정서길 28',
          latitude: 37.2237372,
          longitude: 126.7860182,
        },
        {
          address: '경기도 이천시 부발읍 황무로 1840',
          latitude: 37.2605697,
          longitude: 127.5174413,
        },
        {
          address: '경기도 이천시 호법면 안평로114번길 134',
          latitude: 37.2390181,
          longitude: 127.4232216,
        },
        {
          address: '경기도 화성시 마도면 마도로 496',
          latitude: 37.1881479,
          longitude: 126.7573014,
        },
        {
          address:
            '경기도 화성시 팔탄면 온천로 118, (주)지에스네트웍스 발안지점',
          latitude: 37.1338027,
          longitude: 126.8643717,
        },
        {
          address: '경기도 군포시 번영로 82, 한국복합물류(주) J동 5층 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address:
            '경상남도 양산시 물금읍 제방로 225, 양산ICD5단지(제44동, 제62동)',
          latitude: 35.3113072,
          longitude: 129.0163436,
        },
        {
          address: '경상북도 경산시 와촌면 상암길37길 75-9',
          latitude: 35.9491605,
          longitude: 128.8523611,
        },
        {
          address: '전라북도 익산시 왕궁면 국가식품로2길 41',
          latitude: 35.9663437,
          longitude: 127.0878737,
        },
        {
          address: '경기도 화성시 영천로 179 (영천동)',
          latitude: 37.2058535,
          longitude: 127.1129513,
        },
        {
          address: '강원도 원주시 문막읍 원문로 2570',
          latitude: 37.2784384,
          longitude: 127.7728322,
        },
        {
          address:
            '경기도 광주시 도척면 도척로 401-98, 유유물류센터 지하동 2층',
          latitude: 37.3154211,
          longitude: 127.3397842,
        },
        {
          address: '경기도 파주시 탄현면 헤이리로133번길 61',
          latitude: 37.7962101,
          longitude: 126.6926922,
        },
        {
          address: '경기도 광주시 도척면 도척로 376-74',
          latitude: 37.3189838,
          longitude: 127.33283,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로152번길 115, 케이로지스필드 1층',
          latitude: 37.5989061,
          longitude: 126.7843497,
        },
        {
          address: '경기도 안성시 원곡면 지문로 393, 켄달스퀘어LP산하센터 4층',
          latitude: 37.0637653,
          longitude: 127.1456783,
        },
        {
          address: '경기도 이천시 호법면 덕평로 189-20',
          latitude: 37.1971392,
          longitude: 127.3798917,
        },
        {
          address: '인천광역시 서구 갑문로 20 (오류동)',
          latitude: 37.601328,
          longitude: 126.645178,
        },
        {
          address:
            '경기도 안양시 동안구 시민대로110번길 20, 삼성출판사물류창고 3,4층 (호계동)',
          latitude: 37.3858472,
          longitude: 126.9457956,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로230번길 16, 씨비알이지아이 김포 물류센터 1층',
          latitude: 37.6033543,
          longitude: 126.7709573,
        },
        {
          address: '충청남도 아산시 음봉면 월산로 156-23',
          latitude: 36.8470899,
          longitude: 127.0867853,
        },
        {
          address: '전라남도 목포시 달동 1330-30 호 외',
          latitude: 34.7736319,
          longitude: 126.3168894,
        },
        {
          address: '부산광역시 동구 자성로140번길 53 (범일동)',
          latitude: 35.1350903,
          longitude: 129.0638685,
        },
        {
          address: '경기도 남양주시 진건읍 독정로231번길 38',
          latitude: 37.6802527,
          longitude: 127.1901972,
        },
        {
          address: '전라북도 군산시 산단남북로 126, (주)퓨텍 (오식도동)',
          latitude: 35.9571395,
          longitude: 126.5625808,
        },
        {
          address: '경기도 남양주시 화도읍 재재기로149번길 57',
          latitude: 37.6174206,
          longitude: 127.3067134,
        },
        {
          address: '경기도 안성시 원곡면 지문로 393, KSLP창고 가동',
          latitude: 37.0637653,
          longitude: 127.1456783,
        },
        {
          address: '경기도 남양주시 화도읍 마치로 306, GS물류센타',
          latitude: 37.65399499999999,
          longitude: 127.2794949,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로182번길 12, aT한국농수산식품유통공사 김포비축기지',
          latitude: 37.6033543,
          longitude: 126.7709573,
        },
        {
          address: '충청북도 청주시 청원구 내수읍 초정약수로 440',
          latitude: 36.719908,
          longitude: 127.5717393,
        },
        {
          address: '경기도 평택시 안중읍 안현로 536',
          latitude: 36.9879131,
          longitude: 126.9317204,
        },
        {
          address: '경기도 평택시 서탄면 발안로 1198-5',
          latitude: 37.1345883,
          longitude: 127.0329591,
        },
        {
          address: '대구광역시 동구 팔공로53길 114 (봉무동)',
          latitude: 35.9184609,
          longitude: 128.6370882,
        },
        {
          address: '제주특별자치도 제주시 함선로 249',
          latitude: 33.5113124,
          longitude: 126.6831515,
        },
        {
          address: '충청남도 천안시 동남구 병천면 충절로 1529-5',
          latitude: 36.7705875,
          longitude: 127.2769976,
        },
        {
          address:
            '충청남도 천안시 동남구 수신면 5산단로 182, (주)동방생활산업',
          latitude: 36.7445568,
          longitude: 127.2731027,
        },
        {
          address: '경기도 오산시 오산로 149, 오산물류센터 8층 806호 (오산동)',
          latitude: 37.1393116,
          longitude: 127.0737052,
        },
        {
          address: '경기도 이천시 부발읍 황무로 1780',
          latitude: 37.2650063,
          longitude: 127.5157718,
        },
        {
          address:
            '경기도 의정부시 산단로98번길 65, 의정부우편집중국 3층 (용현동)',
          latitude: 37.7457092,
          longitude: 127.0818154,
        },
        {
          address:
            '경기도 부천시 신흥로511번길 80, 켄달스퀘어 부천 로지스틱스파크 에이동 301호 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address: '경기도 용인시 처인구 모현읍 포은대로 1068',
          latitude: 37.3354558,
          longitude: 127.1642812,
        },
        {
          address: '전라남도 장성군 장성읍 단풍로 142',
          latitude: 35.3234594,
          longitude: 126.8080559,
        },
        {
          address: '광주광역시 광산구 하남산단4번로 14 (장덕동)',
          latitude: 35.1919552,
          longitude: 126.799252,
        },
        {
          address:
            '울산광역시 울주군 두서면 활천산업로 119, (주)KCC울산물류창고 3동',
          latitude: 35.5069575,
          longitude: 129.319921,
        },
        {
          address: '경기도 이천시 백사면 지읍로 54',
          latitude: 37.3168256,
          longitude: 127.480657,
        },
        {
          address: '충청북도 옥천군 옥천읍 성왕로 1171',
          latitude: 36.3212562,
          longitude: 127.5783482,
        },
        {
          address:
            '인천광역시 중구 자유무역로 232, 한진 지디씨물류센터 (운서동)',
          latitude: 37.4876568,
          longitude: 126.4730973,
        },
        {
          address: '경기도 남양주시 와부읍 고래산로 91',
          latitude: 37.6111309,
          longitude: 127.2783875,
        },
        {
          address: '경기도 이천시 모가면 사실로 512-40',
          latitude: 37.1584455,
          longitude: 127.4408754,
        },
        {
          address: '경기도 이천시 부발읍 중부대로2000번길 35, 3층',
          latitude: 37.29073169999999,
          longitude: 127.5299953,
        },
        {
          address: '경기도 용인시 처인구 원삼면 맹리로 87-1',
          latitude: 37.1974501,
          longitude: 127.3355558,
        },
        {
          address: '경기도 광주시 오포읍 봉골길 153-1',
          latitude: 37.3557733,
          longitude: 127.200243,
        },
        {
          address: '경기도 광주시 곤지암읍 광여로 896',
          latitude: 37.3895564,
          longitude: 127.4114491,
        },
        {
          address: '경기도 광주시 도척면 국사봉로133번길 4',
          latitude: 37.3189304,
          longitude: 127.3487066,
        },
        {
          address: '전라남도 여수시 중흥1로 20 (중흥동)',
          latitude: 34.825386,
          longitude: 127.68643,
        },
        {
          address: '충청북도 청주시 흥덕구 오송읍 오송생명1로 13, (주)파이온텍',
          latitude: 36.6364967,
          longitude: 127.3118639,
        },
        {
          address: '인천광역시 서구 정서진7로 18 (오류동)',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address: '충청북도 청주시 청원구 북이면 신대석성로 144',
          latitude: 36.7416317,
          longitude: 127.5285938,
        },
        {
          address: '인천광역시 중구 자유무역로 259 (운서동)',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address: '경상북도 군위군 효령면 경북대로 2185, 농산물물류센타',
          latitude: 36.11850099999999,
          longitude: 128.572999,
        },
        {
          address: '전라남도 영암군 삼호읍 대불역로 133',
          latitude: 34.77693,
          longitude: 126.4378847,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27, c-1-1동',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '경기도 용인시 처인구 양지면 남평로 111-73, 지하1, 지하2',
          latitude: 37.227022,
          longitude: 127.2967327,
        },
        {
          address: '경기도 용인시 처인구 백암면 죽양대로904번길 65',
          latitude: 37.1484536,
          longitude: 127.3909062,
        },
        {
          address: '충청남도 천안시 서북구 성거읍 모전4길 77-1',
          latitude: 36.9091449,
          longitude: 127.2012678,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 225, 양산ICD 2단지 내',
          latitude: 35.3091009,
          longitude: 129.0148416,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로152번길 115, 케이로지스필드 지하1, 지상7층',
          latitude: 37.5989061,
          longitude: 126.7843497,
        },
        {
          address: '경기도 광주시 직동로 19-5 (직동)',
          latitude: 37.399395,
          longitude: 127.2012502,
        },
        {
          address: '경기도 화성시 정남면 정남산단로 9',
          latitude: 37.1684098,
          longitude: 126.9828967,
        },
        {
          address: '경상북도 칠곡군 가산면 경북대로 1460',
          latitude: 36.0762908,
          longitude: 128.5401161,
        },
        {
          address: '경기도 화성시 동탄물류로 103, C블럭 1층 (신동)',
          latitude: 37.169032,
          longitude: 127.131495,
        },
        {
          address:
            '경기도 이천시 마장면 청강가창로 309, 켄달스퀘어LP마장센터 A동 4층',
          latitude: 37.2082361,
          longitude: 127.3587663,
        },
        {
          address: '경기도 용인시 처인구 원삼면 원양로 487',
          latitude: 37.1864479,
          longitude: 127.3144286,
        },
        {
          address:
            '경기도 화성시 동탄물류로 103, 동탄물류단지 C블록 1동 1층 (신동)',
          latitude: 37.199327,
          longitude: 127.0970177,
        },
        {
          address:
            '부산광역시 남구 북항로 132, (주)한진감만동택배터미널 (감만동)',
          latitude: 35.10911189999999,
          longitude: 129.0794021,
        },
        {
          address: '충청북도 청주시 서원구 남이면 저산척북로 646',
          latitude: 36.5669817,
          longitude: 127.4056244,
        },
        {
          address: '충청북도 청주시 서원구 현도면 우록길 15-22',
          latitude: 36.6424341,
          longitude: 127.4890319,
        },
        {
          address:
            '경기도 군포시 번영로 82, 한국복합물류(주) J동 1,5,6층 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '전라남도 담양군 담양읍 에코산단3로 8',
          latitude: 35.3105989,
          longitude: 126.9817476,
        },
        {
          address: '경기도 화성시 우정읍 석천길 17-4',
          latitude: 37.0570742,
          longitude: 126.7928739,
        },
        {
          address: '경기도 시흥시 시화벤처로 73, (주)고려제지 G2호 (정왕동)',
          latitude: 37.3302813,
          longitude: 126.7161961,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로230번길 16, 씨비알이지아이김포물류센터 6층',
          latitude: 37.6033543,
          longitude: 126.7709573,
        },
        {
          address: '경기도 시흥시 희망공원로 117, 5동 (정왕동)',
          latitude: 37.3348758,
          longitude: 126.7140251,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로 75, 제일모직 수도권 통합물류센터 B동 3층 1호',
          latitude: 37.6033543,
          longitude: 126.7709573,
        },
        {
          address: '인천광역시 서구 갑문로 20, 1층 (오류동)',
          latitude: 37.6000646,
          longitude: 126.6477534,
        },
        {
          address:
            '부산광역시 강서구 미음국제5로마길 7, 태영코퍼레이션 (미음동)',
          latitude: 35.151518,
          longitude: 128.8586677,
        },
        {
          address: '경상북도 포항시 남구 철강로 468, (주)동연특수 (장흥동)',
          latitude: 35.9711161,
          longitude: 129.3829594,
        },
        {
          address: '광주광역시 서구 매월2로15번길 15 (매월동)',
          latitude: 35.1184953,
          longitude: 126.8587952,
        },
        {
          address: '충청북도 음성군 삼성면 청용로 397-29',
          latitude: 37.0197856,
          longitude: 127.4712293,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27, 한국복합물류 c동 5층',
          latitude: 35.2924011,
          longitude: 129.0104501,
        },
        {
          address: '강원도 강릉시 신석길 52 (유산동)',
          latitude: 37.7361577,
          longitude: 128.9210761,
        },
        {
          address: '경기도 화성시 동탄물류로 103, C블럭 지하1층 (신동)',
          latitude: 37.1710646,
          longitude: 127.1256765,
        },
        {
          address: '세종특별자치시 부강면 연청로 745-46, C-2-2동 1층,3층',
          latitude: 36.5439377,
          longitude: 127.3567475,
        },
        {
          address: '충청남도 계룡시 두마면 사계로 184, 대전우편집중국',
          latitude: 36.2610596,
          longitude: 127.274699,
        },
        {
          address: '강원도 동해시 공단6로 59-7 (구호동)',
          latitude: 37.4739779,
          longitude: 129.1381543,
        },
        {
          address: '경기도 화성시 비봉면 현대기아로 759-1',
          latitude: 37.2225561,
          longitude: 126.8585287,
        },
        {
          address: '경기도 화성시 정남면 정남산단로 9, 1,3층',
          latitude: 37.1684098,
          longitude: 126.9828967,
        },
        {
          address: '광주광역시 광산구 하남산단10번로 48 (안청동)',
          latitude: 35.2140429,
          longitude: 126.8024129,
        },
        {
          address: '경기도 광주시 곤지암읍 도척로 125-43',
          latitude: 37.339759,
          longitude: 127.3406275,
        },
        {
          address: '전라남도 장성군 장성읍 단풍로 138',
          latitude: 35.3234594,
          longitude: 126.8080559,
        },
        {
          address: '광주광역시 광산구 하남산단10번로 60 (안청동)',
          latitude: 35.2147033,
          longitude: 126.8036575,
        },
        {
          address: '경기도 용인시 처인구 유림로 209 (유방동)',
          latitude: 37.2522716,
          longitude: 127.2122613,
        },
        {
          address: '충청남도 천안시 서북구 입장면 용정도하길 215-40',
          latitude: 36.93039,
          longitude: 127.1855515,
        },
        {
          address: '경기도 이천시 호법면 덕평로 224',
          latitude: 37.1870763,
          longitude: 127.3778499,
        },
        {
          address: '충청남도 천안시 동남구 목천읍 세종로 4755',
          latitude: 36.7490583,
          longitude: 127.171382,
        },
        {
          address: '인천광역시 동구 보세로 54 (만석동)',
          latitude: 37.48643029999999,
          longitude: 126.616716,
        },
        {
          address:
            '경기도 용인시 처인구 원삼면 죽양대로1626번길 42, 원진물류 C센타',
          latitude: 37.1802696,
          longitude: 127.3375172,
        },
        {
          address: '경기도 용인시 처인구 백암면 덕평로 184',
          latitude: 37.1844193,
          longitude: 127.3762094,
        },
        {
          address: '대구광역시 북구 유통단지로7길 42 (산격동)',
          latitude: 35.9088051,
          longitude: 128.607939,
        },
        {
          address: '전라북도 김제시 백구면 번영로 2852',
          latitude: 35.8766165,
          longitude: 126.9966801,
        },
        {
          address: '강원도 원주시 우산공단길 42 (우산동)',
          latitude: 37.3754007,
          longitude: 127.9386358,
        },
        {
          address: '인천광역시 서구 갑문1로 10, 은산해운항공(주) (오류동)',
          latitude: 37.5648023,
          longitude: 126.6053199,
        },
        {
          address: '인천광역시 서구 북항로 144, 3층 (원창동)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '경기도 광주시 곤지암읍 신대길 134-14',
          latitude: 37.3629965,
          longitude: 127.3339763,
        },
        {
          address: '경기도 파주시 검산로 301-22 (검산동)',
          latitude: 37.7987465,
          longitude: 126.7384174,
        },
        {
          address: '경상북도 칠곡군 왜관읍 호국로 405-8',
          latitude: 36.0191586,
          longitude: 128.4268132,
        },
        {
          address: '충청남도 당진시 송산면 석문방조제로 530',
          latitude: 36.9905383,
          longitude: 126.685206,
        },
        {
          address: '인천광역시 서구 봉수대로 121 (가좌동)',
          latitude: 37.4958557,
          longitude: 126.680671,
        },
        {
          address: '세종특별자치시 부강면 연청로 745-46, 6동 배송센터A동',
          latitude: 36.5439377,
          longitude: 127.3567475,
        },
        {
          address: '경기도 화성시 동탄물류로 103, C블럭 지하1,2층 (신동)',
          latitude: 37.169032,
          longitude: 127.131495,
        },
        {
          address: '경기도 용인시 처인구 양지면 중부대로 2453-36',
          latitude: 37.2391992,
          longitude: 127.3082831,
        },
        {
          address: '경기도 남양주시 진접읍 진벌로 60',
          latitude: 37.737829,
          longitude: 127.227004,
        },
        {
          address: '대전광역시 대덕구 대화로106번길 111 (대화동)',
          latitude: 36.37119690000001,
          longitude: 127.4054371,
        },
        {
          address:
            '경기도 시흥시 군자천로131번길 77, 한국산업단지공단 시화공동물류 1,2동 (정왕동)',
          latitude: 37.3358513,
          longitude: 126.7123352,
        },
        {
          address:
            '인천광역시 서구 염곡로 26, 린나이코리아 인천물류센타 (가좌동)',
          latitude: 37.4873469,
          longitude: 126.6654745,
        },
        {
          address: '경기도 이천시 마장면 서이천로 401',
          latitude: 37.2604475,
          longitude: 127.3837892,
        },
        {
          address:
            '인천광역시 미추홀구 송림로307번길 68, (주)토지산업개발 1동 (도화동)',
          latitude: 37.4779841,
          longitude: 126.6644923,
        },
        {
          address: '경기도 파주시 탄현면 헤이리로133번길 19-52',
          latitude: 37.7950269,
          longitude: 126.6932507,
        },
        {
          address: '충청북도 음성군 대소면 대소산단로 44-50',
          latitude: 36.9810056,
          longitude: 127.454303,
        },
        {
          address: '전라북도 군산시 산단동서로 44-8 (오식도동)',
          latitude: 35.9529218,
          longitude: 126.5784665,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 181-76, 제주도지사동',
          latitude: 36.9725927,
          longitude: 126.8372458,
        },
        {
          address: '광주광역시 광산구 하남산단6번로 65 (오선동)',
          latitude: 35.2030895,
          longitude: 126.8024112,
        },
        {
          address: '전라남도 목포시 달동 1330-30 외',
          latitude: 34.7736319,
          longitude: 126.3168894,
        },
        {
          address: '경기도 이천시 마장면 서이천로 142-19',
          latitude: 37.2604475,
          longitude: 127.3837892,
        },
        {
          address: '경기도 이천시 부발읍 황무로 2037-37',
          latitude: 37.2432879,
          longitude: 127.5136223,
        },
        {
          address: '제주특별자치도 서귀포시 성산읍 중산간동로 4270',
          latitude: 33.4119114,
          longitude: 126.8416603,
        },
        {
          address: '대전광역시 대덕구 신탄진로 276 (와동)',
          latitude: 36.4085828,
          longitude: 127.4219268,
        },
        {
          address:
            '충청남도 천안시 동남구 풍세면 풍세산단3로 111, 이랜드패션통합물류센터',
          latitude: 36.7309141,
          longitude: 127.098017,
        },
        {
          address: '부산광역시 금정구 노포사송로 27 (노포동)',
          latitude: 35.2814969,
          longitude: 129.0911713,
        },
        {
          address: '부산광역시 사상구 대동로 116 (학장동)',
          latitude: 35.1391504,
          longitude: 128.980814,
        },
        {
          address: '부산광역시 강서구 가리새3로 37, 부산비축기지 (범방동)',
          latitude: 35.1660756,
          longitude: 128.8827018,
        },
        {
          address: '부산광역시 사하구 을숙도대로 520 (신평동)',
          latitude: 35.0845184,
          longitude: 128.9611061,
        },
        {
          address: '제주특별자치도 제주시 일주서로 7263 (외도이동)',
          latitude: 33.4936231,
          longitude: 126.4347273,
        },
        {
          address: '부산광역시 동구 중앙대로248번길 7-6 (초량동)',
          latitude: 35.1189875,
          longitude: 129.0434755,
        },
        {
          address: '부산광역시 사상구 장인로77번길 69 (학장동)',
          latitude: 35.1451319,
          longitude: 128.9771545,
        },
        {
          address:
            '부산광역시 기장군 장안읍 반룡산단로 102, 씨제이대한통운(주)동부산지점',
          latitude: 35.313761,
          longitude: 129.2439793,
        },
        {
          address: '광주광역시 남구 서문대로 424 (송하동)',
          latitude: 35.1049156,
          longitude: 126.8799203,
        },
        {
          address: '울산광역시 남구 장생포고래로 292, 대한통운(주) (매암동)',
          latitude: 35.5065772,
          longitude: 129.3853257,
        },
        {
          address: '전라남도 장성군 동화면 동화로 342-8',
          latitude: 35.2629762,
          longitude: 126.7352089,
        },
        {
          address: '광주광역시 북구 삼소로 266 (월출동)',
          latitude: 35.2476307,
          longitude: 126.8739954,
        },
        {
          address: '충청북도 음성군 금왕읍 금왕테크노로 66',
          latitude: 36.9934257,
          longitude: 127.5968168,
        },
        {
          address:
            '부산광역시 강서구 미음국제4로 28, CJ대한통운(주) 1동 (미음동)',
          latitude: 35.1459196,
          longitude: 128.8792621,
        },
        {
          address:
            '경상북도 칠곡군 지천면 금호로 272, 영남컨복합화물터미널및내륙컨테이너기지민 10동',
          latitude: 35.9584669,
          longitude: 128.4496262,
        },
        {
          address: '울산광역시 남구 신여천로35번길 34, 대한통운(주) (여천동)',
          latitude: 35.5157792,
          longitude: 129.3471766,
        },
        {
          address: '울산광역시 북구 진장유통1로 59 (진장동)',
          latitude: 35.5595054,
          longitude: 129.3598997,
        },
        {
          address: '경기도 안성시 삼죽면 삼죽로 18-6',
          latitude: 37.066821,
          longitude: 127.3726992,
        },
        {
          address: '경기도 화성시 동탄물류1로 13 (신동)',
          latitude: 37.1710646,
          longitude: 127.1256765,
        },
        {
          address: '인천광역시 서구 정서진3로 7 (오류동)',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address: '경기도 파주시 월롱면 황소바위길 99, 크라운베이커리',
          latitude: 37.78013869999999,
          longitude: 126.7941931,
        },
        {
          address: '경기도 군포시 번영로 82, 한국복합물류(주) F동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경기도 이천시 마장면 이장로157번길 58',
          latitude: 37.2696295,
          longitude: 127.3814097,
        },
        {
          address: '충청남도 천안시 동남구 수신면 5산단로 185',
          latitude: 36.7442206,
          longitude: 127.2676698,
        },
        {
          address: '인천광역시 중구 영종순환로900번길 30, 아레나스 (운북동)',
          latitude: 37.5233016,
          longitude: 126.5521633,
        },
        {
          address: '전라북도 완주군 봉동읍 테크노밸리2로 32',
          latitude: 35.9381046,
          longitude: 127.1680948,
        },
        {
          address: '울산광역시 울주군 온산읍 우봉강양로 35',
          latitude: 35.4505115,
          longitude: 129.3360001,
        },
        {
          address: '충청북도 진천군 진천읍 가산길 66-19',
          latitude: 36.8821782,
          longitude: 127.4692326,
        },
        {
          address: '인천광역시 서구 북항로32번안길 105 (원창동)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '인천광역시 서구 북항로45번길 75 (석남동)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '경상북도 구미시 1공단로10길 103-9 (공단동)',
          latitude: 36.0933423,
          longitude: 128.3828376,
        },
        {
          address: '울산광역시 북구 모듈화산업로 207-1 (연암동)',
          latitude: 35.57977109999999,
          longitude: 129.3745902,
        },
        {
          address: '경기도 이천시 호법면 이섭대천로309번길 56-22, 3층',
          latitude: 37.2260822,
          longitude: 127.4124909,
        },
        {
          address: '광주광역시 광산구 평동산단7번로 21 (연산동)',
          latitude: 35.133297,
          longitude: 126.7610826,
        },
        {
          address: '경기도 안산시 단원구 시화호수로 835, 3층 (성곡동)',
          latitude: 37.2933333,
          longitude: 126.5925,
        },
        {
          address: '경기도 파주시 하우고개길 458-1 (상지석동)',
          latitude: 37.7154414,
          longitude: 126.7705463,
        },
        {
          address:
            '경상남도 김해시 상동면 상동로 680-59, 쿠팡로지스틱스서비스 유한회사',
          latitude: 35.3102781,
          longitude: 128.9441403,
        },
        {
          address: '경기도 평택시 산단로 263, 물류창고 1동 (칠괴동)',
          latitude: 37.0343916,
          longitude: 127.0955402,
        },
        {
          address: '경기도 안성시 죽산면 녹배길 35',
          latitude: 37.06604799999999,
          longitude: 127.391781,
        },
        {
          address: '경기도 안성시 원곡면 원곡물류단지1로 61',
          latitude: 37.039271,
          longitude: 127.1292377,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27, A동 1층',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '부산광역시 사하구 하신번영로 28 (신평동)',
          latitude: 35.1042661,
          longitude: 128.9600424,
        },
        {
          address: '경기도 용인시 처인구 양지면 죽양대로 2136',
          latitude: 37.2267362,
          longitude: 127.305446,
        },
        {
          address: '경기도 남양주시 화도읍 재재기로 100-14',
          latitude: 37.6209348,
          longitude: 127.3050277,
        },
        {
          address: '충청남도 아산시 염치읍 아산로 624',
          latitude: 36.8275007,
          longitude: 126.9705809,
        },
        {
          address: '인천광역시 서구 갑문3로 37, 티제이물류센터 3층 (오류동)',
          latitude: 37.5644035,
          longitude: 126.6013523,
        },
        {
          address: '경기도 용인시 처인구 남사읍 원암로 439',
          latitude: 37.0927332,
          longitude: 127.170228,
        },
        {
          address: '경기도 용인시 처인구 원삼면 보개원삼로 2051',
          latitude: 37.1491666,
          longitude: 127.3183249,
        },
        {
          address:
            '인천광역시 서구 염곡로 133, D동 4개 호실[동화기업(주)] (가좌동)',
          latitude: 37.4959368,
          longitude: 126.6654347,
        },
        {
          address:
            '경기도 부천시 신흥로511번길 80, 켄달스퀘어 부천 로지스틱스파크 B동 4층 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address: '전라북도 익산시 함라면 함안로 342',
          latitude: 36.0517363,
          longitude: 126.9026015,
        },
        {
          address: '전라북도 군산시 산단로 33, (주)동명스틸 다동 (오식도동)',
          latitude: 35.9505054,
          longitude: 126.5825216,
        },
        {
          address: '제주특별자치도 제주시 애월읍 광성로 175',
          latitude: 33.4597199,
          longitude: 126.4262138,
        },
        {
          address: '부산광역시 금정구 동천로7번길 80 (회동동)',
          latitude: 35.2283579,
          longitude: 129.1224968,
        },
        {
          address:
            '인천광역시 서구 북항로 28-23, 인천 남청라 복합물류단지  (원창동)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '경기도 이천시 호법면 덕평로 383',
          latitude: 37.1971392,
          longitude: 127.3798917,
        },
        {
          address: '경기도 파주시 광탄면 부흥로235번길 146',
          latitude: 37.8064229,
          longitude: 126.8752183,
        },
        {
          address: '경기도 용인시 기흥구 신정로 268, 금원물류창고 (신갈동)',
          latitude: 37.290904,
          longitude: 127.0994099,
        },
        {
          address: '경기도 용인시 처인구 백암면 원설로 677',
          latitude: 37.141949,
          longitude: 127.3894415,
        },
        {
          address: '충청남도 아산시 인주면 아산호로 59, 세일철강(주)',
          latitude: 36.8892048,
          longitude: 126.924052,
        },
        {
          address: '경상남도 창원시 진해구 두동로 31(두동)',
          latitude: 35.1242676,
          longitude: 128.801235,
        },
        {
          address: '제주특별자치도 제주시 한경면 고산남8길 39',
          latitude: 33.2993632,
          longitude: 126.1931145,
        },
        {
          address: '대전광역시 유성구 대정로 67, 68 (대정동)',
          latitude: 36.317203,
          longitude: 127.3185743,
        },
        {
          address: '경기도 용인시 기흥구 언동로 39, 청덕물류 (청덕동)',
          latitude: 37.28978499999999,
          longitude: 127.1368926,
        },
        {
          address: '경기도 이천시 마장면 프리미엄아울렛로 33-80, 지하2층',
          latitude: 37.252952,
          longitude: 127.389535,
        },
        {
          address: '경기도 안산시 단원구 별망로459번길 66(목내동)',
          latitude: 37.3086806,
          longitude: 126.7789338,
        },
        {
          address: '경기도 평택시 오성면 오성산단1로 131',
          latitude: 37.028531,
          longitude: 126.948972,
        },
        {
          address: '충청남도 천안시 서북구 한들1로 123(백석동)',
          latitude: 36.8261777,
          longitude: 127.1165187,
        },
        {
          address: '인천광역시 서구 원전로 54, 도림주철관공업(주) (경서동)',
          latitude: 37.5508197,
          longitude: 126.6470106,
        },
        {
          address: '경기도 안성시 원곡면 기업단지로 271-11',
          latitude: 37.0147986,
          longitude: 127.1585685,
        },
        {
          address: '경기도 안성시 삼죽면 삼죽로 75, 3, 4층',
          latitude: 37.071933,
          longitude: 127.3772148,
        },
        {
          address: '경기도 안성시 공도읍 서동대로 4046',
          latitude: 36.9963763,
          longitude: 127.1553012,
        },
        {
          address: '경기도 군포시 번영로 82, 한국복합물류(주) G-2-1동 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address:
            '경기도 군포시 번영로 82, 한국복합물류(주) G-2-1동 1~5층 (부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '충청북도 음성군 대소면 대풍산단로 315',
          latitude: 36.9748332,
          longitude: 127.465517,
        },
        {
          address: '경기도 여주시 능서면 양화로 348-18, A동 1층',
          latitude: 37.2534086,
          longitude: 127.5600004,
        },
        {
          address:
            '경기도 부천시 신흥로511번길 80, 켄달스퀘어 부천 로지스틱스파크 A동 4층 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address: '충청남도 천안시 서북구 직산읍 금곡로 1',
          latitude: 36.8613755,
          longitude: 127.1042696,
        },
        {
          address: '경기도 이천시 마장면 덕평로661번길 53',
          latitude: 37.2174936,
          longitude: 127.3734369,
        },
        {
          address: '경기도 이천시 마장면 청강가창로 309, B동 3층',
          latitude: 37.2082361,
          longitude: 127.3587663,
        },
        {
          address: '충청북도 청주시 서원구 현도면 죽암도원로 70',
          latitude: 36.6424341,
          longitude: 127.4890319,
        },
        {
          address: '부산광역시 서구 등대로 123 (남부민동)',
          latitude: 35.0842316,
          longitude: 129.0256111,
        },
        {
          address: '전라남도 여수시 여수산단로 611',
          latitude: 34.8318989,
          longitude: 127.6865664,
        },
        {
          address: '전라남도 여수시 낙포단지길 152',
          latitude: 34.8601089,
          longitude: 127.7715336,
        },
        {
          address: '전라남도 여수시 낙포단지길 29(C지구)',
          latitude: 34.8612468,
          longitude: 127.7549589,
        },
        {
          address: '전라남도 여수시 여수산단4로 96',
          latitude: 34.83242329999999,
          longitude: 127.6764787,
        },
        {
          address: '전라남도 광양시 황길동 1408번지',
          latitude: 34.9186275,
          longitude: 127.6456388,
        },
        {
          address: '전라남도 광양시 항만2로 70',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 여수시 여수산단로 742',
          latitude: 34.821052,
          longitude: 127.696714,
        },
        {
          address: '전라남도 여수시 여수산단4로 166-40',
          latitude: 34.8382518,
          longitude: 127.6729276,
        },
        {
          address: '전라남도 강진군 해강로 1405 (강진읍)',
          latitude: 34.6315713,
          longitude: 126.7554741,
        },
        {
          address: '전라남도 광양시 항만8로 40(도이동) ',
          latitude: 34.9223601,
          longitude: 127.6778785,
        },
        {
          address: '충청북도 음성군 대소면 한삼로91번길 29-16',
          latitude: 36.9424369,
          longitude: 127.4918424,
        },
        {
          address: '충청북도 음성군 대소면 대금로 742-16',
          latitude: 36.9722977,
          longitude: 127.5178004,
        },
        {
          address: '전라남도 광양시 염포길 19 (황금동)',
          latitude: 34.9171555,
          longitude: 127.6182952,
        },
        {
          address: '충청북도 음성군 맹동면 덕금로 87번길 39',
          latitude: 36.9220832,
          longitude: 127.5262856,
        },
        {
          address: '충청북도 음성군 금왕읍 리노산단길 31',
          latitude: 36.9920993,
          longitude: 127.5981108,
        },
        {
          address: '충청북도 음성군 생극면 일생로 408',
          latitude: 37.0351384,
          longitude: 127.580179,
        },
        {
          address: '전라남도 담양군 남대덕로 1109 (대덕면)',
          latitude: 35.2476646,
          longitude: 127.0392406,
        },
        {
          address: '전라남도 여수시 중흥3로 18 (중흥동)',
          latitude: 34.8212861,
          longitude: 127.6992063,
        },
        {
          address: '전라남도 여수시 상암로 963 (월내동)',
          latitude: 34.8469538,
          longitude: 127.7269082,
        },
        {
          address: '전라남도 여수시 중앙로 30 (교동)',
          latitude: 34.7400424,
          longitude: 127.7310359,
        },
        {
          address: '전라북도 정읍시 소성면 식품특화로 140',
          latitude: 35.5568293,
          longitude: 126.7832468,
        },
        {
          address: '전라북도 군산시 내흥2길 197 (내흥동)',
          latitude: 35.9985395,
          longitude: 126.7595201,
        },
        {
          address: '전라남도 여수시 상암로 830-7',
          latitude: 34.841117,
          longitude: 127.7528832,
        },
        {
          address: '전라남도 여수시 낙포단지길 79',
          latitude: 34.8632881,
          longitude: 127.7619384,
        },
        {
          address: '경상남도 양산시 칠산길 52 (다방동)',
          latitude: 35.3343238,
          longitude: 129.0475747,
        },
        {
          address: '울산광역시 남구 용연로 50번길 94',
          latitude: 35.4783197,
          longitude: 129.3558159,
        },
        {
          address: '울산광역시 울주군 온산읍 산남길 56',
          latitude: 35.41210239999999,
          longitude: 129.3410988,
        },
        {
          address: '울산광역시 남구 납도로 156 (매암동)',
          latitude: 35.5191011,
          longitude: 129.3634103,
        },
        {
          address: '울산광역시 남구 부곡로 68 (부곡동 88)',
          latitude: 35.5031012,
          longitude: 129.3376489,
        },
        {
          address: '울산광역시 남구 산업로 304 (선암동)',
          latitude: 35.5132288,
          longitude: 129.3383317,
        },
        {
          address: '울산광역시 울주군 온산읍 당목길 50',
          latitude: 35.4428437,
          longitude: 129.3564983,
        },
        {
          address: '울산광역시 남구 처용로487번길 154',
          latitude: 35.4808347,
          longitude: 129.3511209,
        },
        {
          address: '경상남도 양산시 유산공단8길 10',
          latitude: 35.3661892,
          longitude: 129.0314858,
        },
        {
          address: '울산광역시 울주군 온산읍 화산로 110-26',
          latitude: 35.42022,
          longitude: 129.332276,
        },
        {
          address: '충청북도 진천군 광혜원면 월성안길 40',
          latitude: 36.9778603,
          longitude: 127.4464586,
        },
        {
          address: '충청남도 천안시 동남구 성남면 세성로 66',
          latitude: 36.7428566,
          longitude: 127.2495057,
        },
        {
          address: '충청남도 공주시 정안면 정안농공단지길 32-172',
          latitude: 36.6176341,
          longitude: 127.1267651,
        },
        {
          address: '충청남도 천안시 동남구 목천읍 성남로 59',
          latitude: 36.7670267,
          longitude: 127.2099208,
        },
        {
          address: '세종특별자치시 전의면 산단길 21-101',
          latitude: 36.6987767,
          longitude: 127.2142875,
        },
        {
          address: '충청북도 청주시 흥덕구 오송읍 오송생명5로 55',
          latitude: 36.6265007,
          longitude: 127.3276128,
        },
        {
          address: '충청남도 천안시 동남구 풍세면 풍세산단5로 17',
          latitude: 36.727636,
          longitude: 127.101216,
        },
        {
          address: '충청북도 청주시 청원구 오창읍 두릉유리로 48',
          latitude: 36.7423189,
          longitude: 127.4545139,
        },
        {
          address: '충청남도 천안시 동남구 성남면 5산단3로 14',
          latitude: 36.7527174,
          longitude: 127.267247,
        },
        {
          address: '충청남도 당진시 신평면 매산리 976-28',
          latitude: 36.9118034,
          longitude: 126.7971572,
        },
        {
          address: '충청남도 당진시 신평면 당진항만로 81',
          latitude: 36.9596063,
          longitude: 126.8482892,
        },
        {
          address: '충청남도 아산시 인주면 인주산단로 123-34',
          latitude: 36.8822292,
          longitude: 126.8763756,
        },
        {
          address: '광주광역시 광산구 소촌로 149번길 50 ',
          latitude: 35.1571458,
          longitude: 126.7865548,
        },
        {
          address: '전라남도 영암군 삼호읍 대불로 609',
          latitude: 34.7721406,
          longitude: 126.4130429,
        },
        {
          address: '전라남도 여수시 낙포단지길 60',
          latitude: 34.862118,
          longitude: 127.7633155,
        },
        {
          address: '전라남도 광양시 중마로 13',
          latitude: 34.9260483,
          longitude: 127.6859264,
        },
        {
          address: '전라남도 광양시 항만8로 90',
          latitude: 34.9220476,
          longitude: 127.6787985,
        },
        {
          address: '전라남도 여수시 국동남8길 46',
          latitude: 34.7275285,
          longitude: 127.7197391,
        },
        {
          address: '대전광역시 대덕구 대화로132번길 161 (대화동)',
          latitude: 36.372685,
          longitude: 127.401854,
        },
        {
          address: '전라북도 정읍시 북면 3산단2길 2',
          latitude: 35.6119271,
          longitude: 126.9110382,
        },
        {
          address: '충청남도 당진시 신평면 당진항만로 161',
          latitude: 36.9596063,
          longitude: 126.8482892,
        },
        {
          address: '충청남도 천안시 서북구 금곡로 52-44 (직산읍)',
          latitude: 36.8689504,
          longitude: 127.104844,
        },
        {
          address: '충청남도 당진시 고대공단2길 227 (송악읍)',
          latitude: 36.9766212,
          longitude: 126.7587374,
        },
        {
          address: '충청남도 천안시 서북구 천안대로 929-60 (성정동)',
          latitude: 36.8197022,
          longitude: 127.1352644,
        },
        {
          address: '충청남도 아산시 음봉면 음봉로 232',
          latitude: 36.8385851,
          longitude: 127.0688868,
        },
        {
          address: '인천광역시 중구 신흥동 3가 71-2',
          latitude: 37.4333845,
          longitude: 126.6228222,
        },
        {
          address: '충청남도 천안시 동남구 풍세면 성엽자기길 59',
          latitude: 36.7206762,
          longitude: 127.1441484,
        },
        {
          address: '충청남도 당진시 당진항만로 199 (신평면)',
          latitude: 36.8852316,
          longitude: 126.7735905,
        },
        {
          address: '인천광역시 중구 신흥동3가 71-2',
          latitude: 37.4333845,
          longitude: 126.6228222,
        },
        {
          address: '충청남도 서천군 장항공단길 37-19 (장항읍, 우진주산)',
          latitude: 36.0071678,
          longitude: 126.7168368,
        },
        {
          address: '인천광역시 중구 내항로 465-110',
          latitude: 37.4737341,
          longitude: 126.6214796,
        },
        {
          address: '인천광역시 중구 항동7가 1-33 ,82-36, 1-61, 1-33',
          latitude: 37.4625877,
          longitude: 126.6272546,
        },
        {
          address: '인천광역시 중구 신흥동3가 69-8',
          latitude: 37.4312439,
          longitude: 126.6285018,
        },
        {
          address: '인천광역시 중구 항동7가 및 북성동1가',
          latitude: 37.4527683,
          longitude: 126.6054053,
        },
        {
          address: '인천광역시 중구 신흥동3가 76-4',
          latitude: 37.4350727,
          longitude: 126.6163145,
        },
        {
          address: '울산광역시 북구 성내4길 51-2(염포동)',
          latitude: 35.5228083,
          longitude: 129.3995936,
        },
        {
          address: '충청남도 천안시 서북구 번영로 465 (성성동)',
          latitude: 36.8443431,
          longitude: 127.1215375,
        },
        {
          address: '울산광역시 남구 부두로 94(매암동) ',
          latitude: 35.5194888,
          longitude: 129.3738779,
        },
        {
          address: '울산광역시 남구 장생포로 20(여천동)',
          latitude: 35.5183097,
          longitude: 129.3453558,
        },
        {
          address: '울산광역시 남구 매암로 28(매암동)',
          latitude: 35.5139168,
          longitude: 129.377916,
        },
        {
          address: '울산광역시 울주군 온산읍 산암로 311-116',
          latitude: 35.4352991,
          longitude: 129.3522505,
        },
        {
          address: '울산광역시 남구 장생포고래로 292',
          latitude: 35.5064875,
          longitude: 129.3853878,
        },
        {
          address: '울산광역시 남구 신항로716번길 1(황성동)',
          latitude: 35.46262,
          longitude: 129.36427,
        },
        {
          address: '울산광역시 남구 매암로28, 2층(매암동)',
          latitude: 35.5139168,
          longitude: 129.377916,
        },
        {
          address: '울산광역시 울주군 온산읍 산암로 379',
          latitude: 35.4352991,
          longitude: 129.3522505,
        },
        {
          address: '울산광역시 울주군 온산읍 산암로 237',
          latitude: 35.4380067,
          longitude: 129.3566319,
        },
        {
          address: '울산광역시 남구 부두로 265(여천동) ',
          latitude: 35.5290743,
          longitude: 129.3664208,
        },
        {
          address: '충청남도 당진시 신평면 당진항만로 277',
          latitude: 36.9596063,
          longitude: 126.8482892,
        },
        {
          address: '충청남도 아산시 신정리길 180 (영인면)',
          latitude: 36.8779196,
          longitude: 127.0097764,
        },
        {
          address: '전라북도 익산시 성당면 성당로 413-47',
          latitude: 36.1014515,
          longitude: 126.9217117,
        },
        {
          address: '전라북도 완주군 과학로 886 (봉동읍, LS엠트론)',
          latitude: 35.9485669,
          longitude: 127.1281102,
        },
        {
          address: '전라북도 군산시 서해로 495 (오식도동)',
          latitude: 35.9704306,
          longitude: 126.5535513,
        },
        {
          address: '전라북도 군산시 서해로 194 (소룡동, 군산항제5부두)',
          latitude: 35.9754164,
          longitude: 126.5853007,
        },
        {
          address: '전라북도 군산시 서해로 510 (오식도동)',
          latitude: 35.9727762,
          longitude: 126.5501691,
        },
        {
          address: '전라북도 군산시 서해로 692 (비응도동)',
          latitude: 35.9713089,
          longitude: 126.5663096,
        },
        {
          address: '전라북도 무주군 안성면 공단로 31',
          latitude: 35.8682712,
          longitude: 127.6411811,
        },
        {
          address: '전라북도 완주군 화산로 33 (화산면)',
          latitude: 36.0257679,
          longitude: 127.2505013,
        },
        {
          address: '전라북도 군산시 해망로 130 (금암동)',
          latitude: 35.9840698,
          longitude: 126.7080658,
        },
        {
          address: '전라북도 순창군 순창읍 순창로 30',
          latitude: 35.358442,
          longitude: 127.1455045,
        },
        {
          address: '전라북도 군산시 외항1길 439 (소룡동)',
          latitude: 35.9759094,
          longitude: 126.6532765,
        },
        {
          address: '전라북도 익산시 약촌로 133 (신흥동, 광전자(주))',
          latitude: 35.9458749,
          longitude: 126.9748425,
        },
        {
          address: '전라북도 군산시 동군산로 565-1 (임피면, 정진물산㈜)',
          latitude: 35.98426910000001,
          longitude: 126.8360509,
        },
        {
          address:
            '전라북도 군산시 서해로 400 (오식도동, ㈜군산컨테이너터미널)',
          latitude: 35.9736652,
          longitude: 126.5592474,
        },
        {
          address: '전라북도 군산시 임해로 452 (소룡동)',
          latitude: 35.9723374,
          longitude: 126.6253679,
        },
        {
          address: '전라북도 익산시 약촌로8길 62-9 (어양동, 에이유이)',
          latitude: 35.9479576,
          longitude: 126.982877,
        },
        {
          address: '전라북도 군산시 외항안길 145 (소룡동, (주)세방)',
          latitude: 35.9697475,
          longitude: 126.6161355,
        },
        {
          address: '전라북도 전주시 덕진구 팔복로 59',
          latitude: 35.8483399,
          longitude: 127.0985108,
        },
        {
          address: '충청남도 당진시 송산면 동곡로 65-18',
          latitude: 36.9721058,
          longitude: 126.7001508,
        },
        {
          address: '충청남도 당진시 고대공단2길 255 (송악읍)',
          latitude: 36.9766212,
          longitude: 126.7587374,
        },
        {
          address: '충청남도 당진시 신평면 당진항만로 151',
          latitude: 36.9596063,
          longitude: 126.8482892,
        },
        {
          address: '울산광역시 남구 부두로 219',
          latitude: 35.5290743,
          longitude: 129.3664208,
        },
        {
          address: '울산광역시 남구 매암로 16',
          latitude: 35.5137309,
          longitude: 129.3792861,
        },
        {
          address: '제주특별자치도 제주시 공항로 2 (용담이동)',
          latitude: 33.5063344,
          longitude: 126.4952613,
        },
        {
          address: '제주특별자치도 제주시 공항로 2 (용담이동, 국제공항)',
          latitude: 33.51041350000001,
          longitude: 126.4913534,
        },
        {
          address: '경상남도 양산시 신기로 114 (북정동)',
          latitude: 35.3610682,
          longitude: 129.0442307,
        },
        {
          address: '경상남도 창원시 마산합포구 드림베이대로 201 (가포동)',
          latitude: 35.1795757,
          longitude: 128.5662716,
        },
        {
          address: '경상남도 창원시 의창구 남면로 201 (대원동, 동원산업)',
          latitude: 35.3046158,
          longitude: 128.6807306,
        },
        {
          address: '경상남도 밀양시 남기동길 111 (산외면)',
          latitude: 35.5096199,
          longitude: 128.7981604,
        },
        {
          address:
            '경상남도 양산시 산막공단북6길 78 (산막동, 대한통운국제물류센타)',
          latitude: 35.3747691,
          longitude: 129.0532365,
        },
        {
          address: '경상남도 양산시 상북중앙로 43 (상북면, (주)천우익스프레스)',
          latitude: 35.3892793,
          longitude: 129.0524712,
        },
        {
          address: '경상남도 양산시 삼동로 23 (하북면)',
          latitude: 35.4977832,
          longitude: 129.093242,
        },
        {
          address: '경상남도 양산시 유산공단7길 45 (유산동)',
          latitude: 35.363039,
          longitude: 129.0308483,
        },
        {
          address: '경상남도 양산시 제방로 225 (물금읍, (주)양산아이시디)',
          latitude: 35.300074,
          longitude: 129.0136919,
        },
        {
          address: '경상남도 창원시 진해구 안골로89번길 105 (안골동)',
          latitude: 35.0906968,
          longitude: 128.7877261,
        },
        {
          address: '부산광역시 강서구 과학산단2로 19번길 100-118',
          latitude: 35.1510132,
          longitude: 128.8201298,
        },
        {
          address: '경상남도 사천시 공단1로 78 (사남면, 한국항공우주산업)',
          latitude: 35.0759131,
          longitude: 128.0630069,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 13 ',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '부산광역시 남구 신선로 330(용당동)',
          latitude: 35.1158164,
          longitude: 129.0957778,
        },
        {
          address: '경상남도 창원시 진해구 신항4로 16-15(용원동)',
          latitude: 35.1026966,
          longitude: 128.8293151,
        },
        {
          address: '경상남도 창원시 성산구 성주동 48-5',
          latitude: 35.1906683,
          longitude: 128.6925028,
        },
        {
          address: '경상남도 양산시 제방로 225 (물금읍)',
          latitude: 35.3113072,
          longitude: 129.0163436,
        },
        {
          address: '경상남도 사천시 사남면 외국기업로 35',
          latitude: 35.0646964,
          longitude: 128.0599642,
        },
        {
          address: '세종특별자치시  부강면 연청로 745-46',
          latitude: 36.5439377,
          longitude: 127.3567475,
        },
        {
          address: '부산광역시 사하구 을숙도대로 761 (구평동)',
          latitude: 35.0864259,
          longitude: 128.9882305,
        },
        {
          address: '부산광역시 사하구 다대로170번길 10 (신평동)',
          latitude: 35.08771670000001,
          longitude: 128.9763245,
        },
        {
          address: '부산광역시 사하구 을숙도대로709번길 5 (신평동)',
          latitude: 35.0857097,
          longitude: 128.9828506,
        },
        {
          address: '부산광역시 남구 북항로 191 (감만동)',
          latitude: 35.1161618,
          longitude: 129.0830231,
        },
        {
          address: '부산광역시 강서구 녹산산업북로 400 (송정동)',
          latitude: 35.0964331,
          longitude: 128.8667625,
        },
        {
          address: '부산광역시 강서구 유통단지2로 76 (대저2동, (주)청강)',
          latitude: 35.1624941,
          longitude: 128.9517386,
        },
        {
          address: '서울특별시 강서구 하늘길 210 (공항동, 한국항공화물청사)',
          latitude: 37.553386,
          longitude: 126.811351,
        },
        {
          address: '서울특별시 금천구 두산로7길 13 (독산동)',
          latitude: 37.4712891,
          longitude: 126.8911995,
        },
        {
          address: '서울특별시 강서구 하늘길 210 (공항동)',
          latitude: 37.555525,
          longitude: 126.8067017,
        },
        {
          address: '서울특별시 성동구 아차산로15길 28',
          latitude: 37.5451798,
          longitude: 127.063502,
        },
        {
          address: '서울특별시 성동구 뚝섬로17가길 49',
          latitude: 37.54073229999999,
          longitude: 127.0589748,
        },
        {
          address: '서울특별시 강서구 하늘길 247 (공항동, 물류창고)',
          latitude: 37.5554102,
          longitude: 126.8068404,
        },
        {
          address: '서울특별시 강서구 하늘길 246 (공항동, 대한항공화물청사)',
          latitude: 37.5520019,
          longitude: 126.8127133,
        },
        {
          address: '서울특별시 성동구 둘레19길 13',
          latitude: 37.5356497,
          longitude: 127.0575383,
        },
        {
          address: '서울특별시 송파구 송파대로 55 (장지동)',
          latitude: 37.483697,
          longitude: 127.1357954,
        },
        {
          address: '서울특별시 성동구 아차산로13길 38',
          latitude: 37.5462023,
          longitude: 127.0620068,
        },
        {
          address: '서울특별시 강서구 하늘길 227 (공항동, 보세창고)',
          latitude: 37.555525,
          longitude: 126.8067017,
        },
        {
          address: '서울특별시 성동구 아차산로 67',
          latitude: 37.5461868,
          longitude: 127.05183,
        },
        {
          address: '경상남도 양산시 상북면 상북중앙로 91',
          latitude: 35.3929345,
          longitude: 129.0557644,
        },
        {
          address: '경상남도 양산시 어곡공단1길 78 (어곡동)',
          latitude: 35.3800317,
          longitude: 129.0186883,
        },
        {
          address: '울산광역시 남구 사평로 108-70 (부곡동)',
          latitude: 35.4959826,
          longitude: 129.3313766,
        },
        {
          address: '울산광역시 남구 여천로217번길 19 (여천동)',
          latitude: 35.5315101,
          longitude: 129.3644527,
        },
        {
          address: '경상남도 양산시 소주회야로 45-89 (소주동, 청정냉동(주))',
          latitude: 35.4053349,
          longitude: 129.1576832,
        },
        {
          address: '경상남도 양산시 어실로 447-22 (어곡동)',
          latitude: 35.3933714,
          longitude: 129.008314,
        },
        {
          address: '울산광역시 남구 장생포로 303',
          latitude: 35.5106676,
          longitude: 129.3747682,
        },
        {
          address: '경상남도 창원시 진해구 두동남로 67 (두동)',
          latitude: 35.1216375,
          longitude: 128.8101945,
        },
        {
          address: '경상남도 양산시 어실로 447-15 (어곡동)',
          latitude: 35.3940065,
          longitude: 129.0093269,
        },
        {
          address: '울산광역시 남구 매암로 14 (매암동)',
          latitude: 35.5098268,
          longitude: 129.3790959,
        },
        {
          address: '울산광역시 울주군 온산읍 당월로 594',
          latitude: 35.4543652,
          longitude: 129.3473197,
        },
        {
          address: '울산광역시 울주군 온산읍 당월로 556-116',
          latitude: 35.4330968,
          longitude: 129.3530813,
        },
        {
          address: '울산광역시 남구 산업로 134',
          latitude: 35.5067954,
          longitude: 129.3216423,
        },
        {
          address: '경상남도 양산시 유산공단4길 88',
          latitude: 35.3589851,
          longitude: 129.0266607,
        },
        {
          address: '울산광역시 남구 장생포로 304 (매암동)',
          latitude: 35.5091366,
          longitude: 129.3745856,
        },
        {
          address: '경상남도 양산시 상북면 충렬로 394-57',
          latitude: 35.3792097,
          longitude: 129.0452843,
        },
        {
          address: '울산광역시 울주군 삼남면 방기리 337',
          latitude: 35.5001895,
          longitude: 129.0939712,
        },
        {
          address: '울산광역시 남구 용연로50번길 94',
          latitude: 35.4783197,
          longitude: 129.3558159,
        },
        {
          address: '울산광역시 남구 상개로 142',
          latitude: 35.4962608,
          longitude: 129.3215656,
        },
        {
          address: '울산광역시 울주군 온산읍 산암로 297',
          latitude: 35.4352991,
          longitude: 129.3522505,
        },
        {
          address: '울산광역시 울주군 두서면 활천산업로 119',
          latitude: 35.5069575,
          longitude: 129.319921,
        },
        {
          address: '울산광역시 남구 용잠로 435 (용잠동)',
          latitude: 35.4893236,
          longitude: 129.3756462,
        },
        {
          address: '경상남도 양산시 어실로 320 (어곡동)',
          latitude: 35.3869963,
          longitude: 129.0202112,
        },
        {
          address: '전라남도 여수시 수정1길 2 (수정동)',
          latitude: 34.7447073,
          longitude: 127.7468394,
        },
        {
          address: '전라남도 목포시 신항로294번길 45 (달동)',
          latitude: 34.7574418,
          longitude: 126.354507,
        },
        {
          address: '전라남도 여수시 국동남8길 46 (국동)',
          latitude: 34.7275285,
          longitude: 127.7197391,
        },
        {
          address: '울산광역시 남구 부두로 101',
          latitude: 35.5198685,
          longitude: 129.3729925,
        },
        {
          address: '경상남도 진주시 큰들로 128 (상평동)',
          latitude: 35.1711077,
          longitude: 128.1169957,
        },
        {
          address: '경상남도 양산시 하북면 양산대로 1957-32',
          latitude: 35.440211,
          longitude: 129.069912,
        },
        {
          address: '경상남도 양산시 어실로 447-27(어곡동) ',
          latitude: 35.3932556,
          longitude: 129.0093363,
        },
        {
          address: '울산광역시 울주군 온산읍 당목길 78',
          latitude: 35.4448412,
          longitude: 129.358326,
        },
        {
          address: '경상남도 양산시 제방로 27 (물금읍, 한국복합물류)',
          latitude: 35.2924011,
          longitude: 129.0104501,
        },
        {
          address: '경상남도 창원시 의창구 북면 신촌본포로 315',
          latitude: 35.3490763,
          longitude: 128.6219784,
        },
        {
          address: '경상남도 사천시 공단1로 141 (사남면, BAT코리아제조)',
          latitude: 35.0702368,
          longitude: 128.0601297,
        },
        {
          address: '경상남도 양산시 제방로 27 (물금읍)',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '경상남도 창원시 진해구 두동남로 37 (두동)',
          latitude: 35.1255145,
          longitude: 128.81798,
        },
        {
          address: '경상남도 양산시 제방로 223 (물금읍)',
          latitude: 35.3113072,
          longitude: 129.0163436,
        },
        {
          address: '경상남도 양산시 제방로 225 (물금읍, (주)대현)',
          latitude: 35.3113072,
          longitude: 129.0163436,
        },
        {
          address: '경상남도 창원시 진해구 신항남로 4 (가주동)',
          latitude: 35.1915469,
          longitude: 128.7077967,
        },
        {
          address: '경상남도 창원시 성산구 공단로 799 (성주동)',
          latitude: 35.1871427,
          longitude: 128.7031774,
        },
        {
          address: '경상남도 양산시 제방로 27 (물금읍, 물류분류 및 보관창고)',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '경상남도 양산시 상북중앙로 91 (상북면, 백양보세창고)',
          latitude: 35.3933345,
          longitude: 129.0556097,
        },
        {
          address: '경상남도 함안군 공단서길 18 (칠서면, (주)동아오츠카)',
          latitude: 35.3689714,
          longitude: 128.4794326,
        },
        {
          address: '경상남도 양산시 산막공단남5길 12 (북정동)',
          latitude: 35.3660888,
          longitude: 129.0579071,
        },
        {
          address: '경상남도 김해시 주촌면 서부로1637번길 131',
          latitude: 35.2463681,
          longitude: 128.8312479,
        },
        {
          address: '경상남도 양산시 충렬로 394-57 (상북면)',
          latitude: 35.3792097,
          longitude: 129.0452843,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길86',
          latitude: 36.9596063,
          longitude: 126.8482892,
        },
        {
          address: '충청남도 보령시 대천항중앙길 66',
          latitude: 36.3272478,
          longitude: 126.5073784,
        },
        {
          address: '인천광역시 옹진군 백령면 진촌리 2463-10',
          latitude: 37.9669291,
          longitude: 124.710463,
        },
        {
          address: '인천광역시 서구 길주로 36',
          latitude: 37.5063629,
          longitude: 126.6658666,
        },
        {
          address: '경기도 용인시 기흥구 중부대로 684번길 14',
          latitude: 37.2645994,
          longitude: 127.1348948,
        },
        {
          address: '인천광역시 중구 공항동로296번길 97-49(운서동)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '부산광역시 사하구 감천항로 239(구평동)',
          latitude: 35.0713835,
          longitude: 128.9911761,
        },
        {
          address: '부산광역시 서구 원양로 147(암남동)',
          latitude: 35.0659561,
          longitude: 129.0121407,
        },
        {
          address: '부산광역시 서구 원양로 244(암남동)',
          latitude: 35.0694901,
          longitude: 129.0084265,
        },
        {
          address: '인천광역시 중구 축항대로296번길 115(신흥동3가)',
          latitude: 37.4383779,
          longitude: 126.6264059,
        },
        {
          address: '부산광역시 강서구 녹산산단232로 38-17(송정동)',
          latitude: 35.085314,
          longitude: 128.8423469,
        },
        {
          address: '부산광역시 강서구 녹산산단381로 36(송정동)',
          latitude: 35.0919627,
          longitude: 128.8594615,
        },
        {
          address: '부산광역시 사하구 다대로605번길 17(다대동)',
          latitude: 35.0528129,
          longitude: 128.9732287,
        },
        {
          address: '제주특별자치도 서귀포시 대정읍 대한로88번길 86-14',
          latitude: 33.2297926,
          longitude: 126.2548891,
        },
        {
          address: '부산광역시 서구 원양로 1 B-206, 702(암남동)',
          latitude: 35.0694901,
          longitude: 129.0084265,
        },
        {
          address: '제주특별자치도 제주시 도리로67번지',
          latitude: 33.4996988,
          longitude: 126.459093,
        },
        {
          address: '제주특별자치도 서귀포시 성산읍 한도로 141-10',
          latitude: 33.470052,
          longitude: 126.9228365,
        },
        {
          address: '제주특별자치도 서귀포시 남원읍 하례광장로 42-41',
          latitude: 33.2980672,
          longitude: 126.6066375,
        },
        {
          address: '제주특별자치도 서귀포시 대정읍 무릉도원로 87',
          latitude: 33.2868674,
          longitude: 126.2095338,
        },
        {
          address: '제주특별자치도 제주시 오도2길 (이호이동)2',
          latitude: 33.4933762,
          longitude: 126.4580006,
        },
        {
          address: '경기도 평택시 포승읍 하만호길 153',
          latitude: 36.9546448,
          longitude: 126.8570809,
        },
        {
          address:
            '제주특별자치도 제주시 노형동(제주특별자치도 제주시 1100로 289-26) 2969',
          latitude: 33.4561511,
          longitude: 126.48637,
        },
        {
          address: '충청남도 보령시 대천항중앙길 8(신흑동)',
          latitude: 36.3192338,
          longitude: 126.5096599,
        },
        {
          address: '전라북도 군산시 해망로 340-2',
          latitude: 35.9840698,
          longitude: 126.7080658,
        },
        {
          address: '강원도 속초시 농공단지2길 59(대포동)',
          latitude: 38.1712814,
          longitude: 128.5974445,
        },
        {
          address: '전라남도 무안군 삼향읍 왕산리 1256-9',
          latitude: 34.8668385,
          longitude: 126.4042417,
        },
        {
          address: '전라남도 무안군 현경면 평산리 118-7,8',
          latitude: 35.0106706,
          longitude: 126.4455587,
        },
        {
          address: '전라남도 여수시 어항단지로 11(국동)',
          latitude: 34.7253121,
          longitude: 127.7125587,
        },
        {
          address: '전라북도 군산시 해망로 582-11(소룡동)',
          latitude: 35.982268,
          longitude: 126.6780433,
        },
        {
          address: '전라북도 군산시 비응남로31',
          latitude: 35.938225,
          longitude: 126.5259798,
        },
        {
          address: '강원도 고성군 토성면 토성로 25',
          latitude: 38.2496303,
          longitude: 128.5666781,
        },
        {
          address: '전라남도 여수시 화양면 석교로 121',
          latitude: 34.7078644,
          longitude: 127.5875928,
        },
        {
          address: '경기도 오산시 오산로 149(오산동)',
          latitude: 37.1393116,
          longitude: 127.0737052,
        },
        {
          address: '전라남도 여수시 봉산2로 8(봉산동)',
          latitude: 34.7311508,
          longitude: 127.7252959,
        },
        {
          address: '경상남도 통영시 도산면 도산일주로 54-77',
          latitude: 34.9034032,
          longitude: 128.3584573,
        },
        {
          address: '경상남도 사천시 거북등길 65',
          latitude: 34.9699283,
          longitude: 128.0517394,
        },
        {
          address: '제주특별자치도 제주시 상도로226번지',
          latitude: 33.4970325,
          longitude: 126.8548916,
        },
        {
          address: '제주특별자치도 제주시 만덕로 29번지',
          latitude: 33.5139396,
          longitude: 126.5322014,
        },
        {
          address: '경기도 포천시 화합로 231(동교동)',
          latitude: 37.8406111,
          longitude: 127.1289005,
        },
        {
          address: '제주특별자치도 제주시 오라로4길 18번지',
          latitude: 33.4969852,
          longitude: 126.5064432,
        },
        {
          address: '제주특별자치도 제주시 한림읍 한림해안로141-4번지',
          latitude: 33.4160944,
          longitude: 126.2615355,
        },
        {
          address: '제주특별자치도 제주시 한림읍 한림해안로 141-11번지',
          latitude: 33.416128,
          longitude: 126.2605264,
        },
        {
          address: '경기도 시흥시 매화로116번길 18 (도창동)',
          latitude: 37.4084777,
          longitude: 126.8134829,
        },
        {
          address: '경상남도 거제시 사등면 견내량1길 71',
          latitude: 34.8851467,
          longitude: 128.4798957,
        },
        {
          address: '강원도 양양군 양양읍 포월새말길 23-35',
          latitude: 38.0983223,
          longitude: 128.6250023,
        },
        {
          address: '충청남도 보령시 청소면 청소큰길 97',
          latitude: 36.440035,
          longitude: 126.5860934,
        },
        {
          address: '전라남도 여수시 신월1길 15-1(신월동)',
          latitude: 34.7251718,
          longitude: 127.7115361,
        },
        {
          address: '전라남도 여수시 망양로 494-14',
          latitude: 34.7893509,
          longitude: 127.7528683,
        },
        {
          address: '전라남도 여수시 망양로 506-2(오천동)',
          latitude: 34.7902667,
          longitude: 127.7528317,
        },
        {
          address: '전라남도 여수시 망양로 445-10(만흥동)',
          latitude: 34.7859217,
          longitude: 127.7493666,
        },
        {
          address: '전라남도 완도군 완도읍 해변공원로124번길 26',
          latitude: 34.3260897,
          longitude: 126.7501663,
        },
        {
          address: '경상북도 포항시 북구 장성동 현진에버빌',
          latitude: 36.0677034,
          longitude: 129.3742812,
        },
        {
          address: '경상북도 울진군 후포면 못골길 17-15 ',
          latitude: 36.6918679,
          longitude: 129.4406988,
        },
        {
          address: '경상남도 통영시 동호안길 69',
          latitude: 34.8399225,
          longitude: 128.4354367,
        },
        {
          address: '경상남도 통영시 용남면 견내량로 46',
          latitude: 34.8885405,
          longitude: 128.4637923,
        },
        {
          address: '경상남도 통영시 도산면 도선선창길 132',
          latitude: 34.9183675,
          longitude: 128.355123,
        },
        {
          address: '제주특별자치도 제주시 추자면 대서1길10',
          latitude: 33.9623194,
          longitude: 126.2985797,
        },
        {
          address: '경기도 용인시 기흥구 고매로 222',
          latitude: 37.2235926,
          longitude: 127.1311086,
        },
        {
          address: '강원도 속초시 농공단지1길 42(대포동)',
          latitude: 38.1732542,
          longitude: 128.5951702,
        },
        {
          address: '전라남도 여수시 남산로 60-16(남산동)',
          latitude: 34.7362338,
          longitude: 127.7327791,
        },
        {
          address: '전라남도 여수시 화양면 화양로 1480',
          latitude: 34.7119186,
          longitude: 127.6195127,
        },
        {
          address: '전라남도 함평군 대동면 동함평산단길 19-135',
          latitude: 35.0329654,
          longitude: 126.9657946,
        },
        {
          address: '경상남도 사천시 등대길 23',
          latitude: 34.9255863,
          longitude: 128.0735935,
        },
        {
          address: '전라남도 신안군 지도읍 송도2길 37',
          latitude: 35.0441258,
          longitude: 126.2040651,
        },
        {
          address: '경상남도 창원시 마산회원구 봉암공단8길 5',
          latitude: 35.214216,
          longitude: 128.5995583,
        },
        {
          address: '경상남도 통영시 도산면 남해안대로 2133-17',
          latitude: 34.9369294,
          longitude: 128.3467728,
        },
        {
          address: '강원도 동해시 공단6로 32',
          latitude: 37.4737283,
          longitude: 129.1391034,
        },
        {
          address: '경기도 광주시 장지9길 74',
          latitude: 37.4024073,
          longitude: 127.2375598,
        },
        {
          address: '경기도 광주시 곤지암읍 경충대로311번길 17 ',
          latitude: 37.3354623,
          longitude: 127.3678282,
        },
        {
          address: '경상남도 통영시 동호안길 100',
          latitude: 34.839238,
          longitude: 128.4362663,
        },
        {
          address: '경상남도 사천시 거북등길 27 ',
          latitude: 34.9689768,
          longitude: 128.0507061,
        },
        {
          address: '경상남도 사천시 청송길 34-46',
          latitude: 34.931671,
          longitude: 128.1057118,
        },
        {
          address: '경상남도 사천시 어시장길 34-10',
          latitude: 34.9264259,
          longitude: 128.0699965,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 351',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address:
            '경상남도 창원시 마산합포구 수산1길 186, 마산수산업협동조합 지하1층(동성동)',
          latitude: 35.2026326,
          longitude: 128.5801719,
        },
        {
          address: '경상북도 경주시 감포읍 경감로',
          latitude: 35.789496,
          longitude: 129.4719672,
        },
        {
          address: '경상북도 포항시 남구 희망대로 1310',
          latitude: 36.0248859,
          longitude: 129.3369737,
        },
        {
          address: '전라남도 여수시 율촌면 모래목길 90-44',
          latitude: 34.880138,
          longitude: 127.5904601,
        },
        {
          address: '충청남도 서천군 장항읍 원수리 450-20',
          latitude: 36.0094334,
          longitude: 126.7201134,
        },
        {
          address: '강원도 양양군 양양읍 정손길 60',
          latitude: 38.0977232,
          longitude: 128.6220934,
        },
        {
          address: '강원도 속초시 중앙로108번길 31(금호동)',
          latitude: 38.2012027,
          longitude: 128.5888462,
        },
        {
          address: '부산광역시 서구 원양로 214(암남동)',
          latitude: 35.0694901,
          longitude: 129.0084265,
        },
        {
          address: '부산광역시 서구 원양로 224(암남동)',
          latitude: 35.0694901,
          longitude: 129.0084265,
        },
        {
          address: '부산광역시 서구 등대로 117(남부민동)',
          latitude: 35.084752,
          longitude: 129.0261034,
        },
        {
          address: '부산광역시 사하구 장평로 24(장림동)',
          latitude: 35.0853755,
          longitude: 128.9762048,
        },
        {
          address: '제주특별자치도 서귀포시 대정읍 노을해안로 88',
          latitude: 33.2439986,
          longitude: 126.2196643,
        },
        {
          address: '경상남도 사천시 청송길 34-32',
          latitude: 34.931671,
          longitude: 128.1057118,
        },
        {
          address: '제주특별자치도 제주시 대통동길55',
          latitude: 33.5044568,
          longitude: 126.4639982,
        },
        {
          address: '인천광역시 중구 축항대로22번길 39(북성동1가)',
          latitude: 37.4586439,
          longitude: 126.5973267,
        },
        {
          address: '경기도 화성시 정남면 서봉로851번길 92-25',
          latitude: 37.1537334,
          longitude: 126.9523153,
        },
        {
          address:
            '경기도 시흥시 공단1대로 196번길 28, 2다 604호(정왕동, 시화공단)',
          latitude: 37.3367927,
          longitude: 126.7215441,
        },
        {
          address: '제주특별자치도 제주시 백포북길30번지',
          latitude: 33.5025581,
          longitude: 126.458184,
        },
        {
          address: '제주특별자치도 제주시 추자로 734번지',
          latitude: 33.9540906,
          longitude: 126.3320879,
        },
        {
          address: '경상남도 사천시 청송길 64-39',
          latitude: 34.932177,
          longitude: 128.1064864,
        },
        {
          address: '대전광역시 대덕구 신탄진로 1 (읍내동)',
          latitude: 36.3827688,
          longitude: 127.4247506,
        },
        {
          address: '대전광역시 유성구 금남구즉로 1361 (봉산동)',
          latitude: 36.4446172,
          longitude: 127.3806139,
        },
        {
          address: '부산광역시 강서구 녹산산단381로12번길 58',
          latitude: 35.08954629999999,
          longitude: 128.865503,
        },
        {
          address: '인천광역시 동구 보세로 42번길 29-11',
          latitude: 37.4881949,
          longitude: 126.6176102,
        },
        {
          address: '인천광역시 강화군 내가면 해안서로 850',
          latitude: 37.7010711,
          longitude: 126.3846269,
        },
        {
          address: '경기도 고양시 일산서구 덕산로173번길 119(가좌동, 1호)',
          latitude: 37.6980827,
          longitude: 126.7179719,
        },
        {
          address: '경기도 고양시 일산서구 덕산로173번길 119(가좌동, 2호)',
          latitude: 37.6980827,
          longitude: 126.7179719,
        },
        {
          address: '경기도 용인시 모현읍 곡현로 718번길 27',
          latitude: 37.3450377,
          longitude: 127.2274859,
        },
        {
          address: '경기도 용인시 처인구 처인성로 1177',
          latitude: 37.1250963,
          longitude: 127.1526881,
        },
        {
          address: '경기도 화성시 안녕남로 24',
          latitude: 37.1976672,
          longitude: 126.9864178,
        },
        {
          address: '경기도 광주시 장지9길 34-16 ',
          latitude: 37.3986047,
          longitude: 127.2389491,
        },
        {
          address: '경기도 이천시 마장면 둔터로 24-14',
          latitude: 37.2848643,
          longitude: 127.4002944,
        },
        {
          address: '강원도 고성군 거진읍 돌고개길 47-40',
          latitude: 38.4288873,
          longitude: 128.4527985,
        },
        {
          address: '충청남도 태안군 근흥면 근흥로 1022-40',
          latitude: 36.7035569,
          longitude: 126.1994963,
        },
        {
          address: '전라남도 여수시 국동남8길 12(국동)',
          latitude: 34.7302367,
          longitude: 127.7217304,
        },
        {
          address: '전라남도 여수시 망양로 464(오천동)',
          latitude: 34.7870908,
          longitude: 127.751071,
        },
        {
          address: '전라남도 여수시 소호로 634(학동)',
          latitude: 34.761855,
          longitude: 127.6617679,
        },
        {
          address: '전라남도 여수시 망양로 482-6(오천동)',
          latitude: 34.7883994,
          longitude: 127.7517795,
        },
        {
          address: '전라남도 여수시 국동남6길 49-22(국동)',
          latitude: 34.7266886,
          longitude: 127.7198773,
        },
        {
          address: '경상북도 포항시 남구 구룡포읍 병포길',
          latitude: 35.9828337,
          longitude: 129.5521294,
        },
        {
          address: '경상북도 문경시 산양면 산양공단1길 1',
          latitude: 36.6116711,
          longitude: 128.2302498,
        },
        {
          address: '경상남도 통영시 미우지해안로 59',
          latitude: 34.8279759,
          longitude: 128.4003444,
        },
        {
          address: '경상남도 통영시 도산면 도선선창길 192-1',
          latitude: 34.9155064,
          longitude: 128.3532152,
        },
        {
          address: '제주특별자치도 제주시 조천읍 함선로 166',
          latitude: 33.5146236,
          longitude: 126.6754325,
        },
        {
          address: '대전광역시 대덕구 대덕대로1447번길 39 (문평동)',
          latitude: 36.4493702,
          longitude: 127.4079981,
        },
        {
          address: '부산광역시 기장군 장안읍 명례산단3로 9',
          latitude: 35.313761,
          longitude: 129.2439793,
        },
        {
          address: '부산광역시 사하구 감천항로 315',
          latitude: 35.0645093,
          longitude: 128.9915228,
        },
        {
          address: '부산광역시 강서구 신항로 96-82',
          latitude: 35.0857053,
          longitude: 128.8317399,
        },
        {
          address: '부산광역시 강서구 신항로 96-17',
          latitude: 35.07817259999999,
          longitude: 128.8330003,
        },
        {
          address: '부산광역시 강서구 신항로 96-13',
          latitude: 35.07817259999999,
          longitude: 128.8330003,
        },
        {
          address: '부산광역시 남구 신선로 326',
          latitude: 35.1154351,
          longitude: 129.0965834,
        },
        {
          address: '부산광역시 강서구 신항남로 330',
          latitude: 35.2122157,
          longitude: 128.9805666,
        },
        {
          address: '부산광역시 강서구 신항남로 416',
          latitude: 35.2122157,
          longitude: 128.9805666,
        },
        {
          address: '부산광역시 강서구 신항북로 70',
          latitude: 35.07817259999999,
          longitude: 128.8330003,
        },
        {
          address: '부산광역시 강서구 신항북로 68',
          latitude: 35.07817259999999,
          longitude: 128.8330003,
        },
        {
          address: '부산광역시 강서구 신항남로 454',
          latitude: 35.2122157,
          longitude: 128.9805666,
        },
        {
          address: '부산광역시 강서구 신항로 96-72',
          latitude: 35.07817259999999,
          longitude: 128.8330003,
        },
        {
          address: '부산광역시 강서구 신항남로 372',
          latitude: 35.07925609999999,
          longitude: 128.8334479,
        },
        {
          address: '부산광역시 강서구 신항로 96-47',
          latitude: 35.07817259999999,
          longitude: 128.8330003,
        },
        {
          address: '대전광역시 동구 물류로14번길 32(구도동)',
          latitude: 36.2600172,
          longitude: 127.4748093,
        },
        {
          address: '부산광역시 사하구 장평로 174 (장림동)',
          latitude: 35.081701,
          longitude: 128.9733688,
        },
        {
          address: '부산광역시 강서구 봉림길203번길 213 (봉림동)',
          latitude: 35.1676139,
          longitude: 128.8949921,
        },
        {
          address: '부산광역시 기장군 정관면 산단1로 12',
          latitude: 35.3158705,
          longitude: 129.1783738,
        },
        {
          address: '부산광역시 해운대구 반송로 596 (석대동)',
          latitude: 35.2195551,
          longitude: 129.1277202,
        },
        {
          address: '부산광역시 강서구 녹산산업북로 119 (송정동)',
          latitude: 35.0985723,
          longitude: 128.8376332,
        },
        {
          address: '대전광역시 동구 안골로28번길 (구도동)',
          latitude: 36.2656108,
          longitude: 127.4730118,
        },
        {
          address: '대전광역시 유성구 대정북로 67 (대정동)',
          latitude: 36.3173548,
          longitude: 127.3237347,
        },
        {
          address: '경상남도 통영시 도산면 도산일주로 2119',
          latitude: 34.8836496,
          longitude: 128.3682752,
        },
        {
          address: '경상남도 사천시 청송길 34-65',
          latitude: 34.931671,
          longitude: 128.1057118,
        },
        {
          address: '제주특별자치도 제주시 구좌읍 김녕로 135번지',
          latitude: 33.5554848,
          longitude: 126.752457,
        },
        {
          address: '경기도 안산시 상록구 방아고개길 35-7',
          latitude: 37.3632675,
          longitude: 126.8704448,
        },
        {
          address: '경기도 평택시 포승읍 서동대로437-61,3동',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '경기도 의정부시 입석로 82(가능동)',
          latitude: 37.7552956,
          longitude: 127.0165289,
        },
        {
          address: '경기도 김포시 양촌읍 김포대로1685번길 75',
          latitude: 37.6635322,
          longitude: 126.6488072,
        },
        {
          address: '경기도 광주시 경충대로 1801(장지동)',
          latitude: 37.4008376,
          longitude: 127.2363785,
        },
        {
          address: '강원도 고성군 죽왕면 공현진해변길 78-1',
          latitude: 38.355459,
          longitude: 128.5100407,
        },
        {
          address: '전라남도 목포시 공단중앙로 75-22',
          latitude: 34.8158404,
          longitude: 126.3773341,
        },
        {
          address: '전라남도 목포시 연산로 246',
          latitude: 34.8169194,
          longitude: 126.3738964,
        },
        {
          address: '전라남도 여수시 중앙1길 11(중앙동)',
          latitude: 34.7402426,
          longitude: 127.7368124,
        },
        {
          address: '전라남도 여수시 망양로 514-27(오천동)',
          latitude: 34.7916403,
          longitude: 127.7553497,
        },
        {
          address: '전라남도 여수시 화양로 1366-2',
          latitude: 34.7043341,
          longitude: 127.6139813,
        },
        {
          address: '전라남도 여수시 망양로 506-16(오천동)',
          latitude: 34.7901358,
          longitude: 127.7536046,
        },
        {
          address: '전라남도 여수시 망양로 482-3(오천동)',
          latitude: 34.7889276,
          longitude: 127.7517309,
        },
        {
          address: '전라남도 신안군 지도읍 해제지도로 979-5',
          latitude: 35.0595366,
          longitude: 126.2351613,
        },
        {
          address: '경상북도 포항시 남구 구룡포읍 호미로',
          latitude: 35.994793,
          longitude: 129.55712,
        },
        {
          address: '경상북도 경산시 진량읍 대구대로',
          latitude: 35.8876958,
          longitude: 128.8485216,
        },
        {
          address: '경상남도 창원시 마산합포구 구산면 난포1길 170',
          latitude: 35.0818218,
          longitude: 128.6107304,
        },
        {
          address: '경상남도 사천시 대방길 36-22',
          latitude: 34.9293448,
          longitude: 128.0619209,
        },
        {
          address: '경기도 화성시 정남면 서봉로851번길 92-25, 3층',
          latitude: 37.1537334,
          longitude: 126.9523153,
        },
        {
          address: '경기도 화성시 정남면 서봉로851번길 92-25, 2층',
          latitude: 37.1537334,
          longitude: 126.9523153,
        },
        {
          address: '경기도 화성시 정남면 서봉로851번길 92-25, 1층',
          latitude: 37.1537334,
          longitude: 126.9523153,
        },
        {
          address: '제주특별자치도 제주시 관덕로 8길28번지',
          latitude: 33.5108293,
          longitude: 126.52311,
        },
        {
          address: '제주특별자치도 제주시 구좌읍 해맞이해안로1370번지',
          latitude: 33.5277345,
          longitude: 126.854968,
        },
        {
          address: '제주특별자치도 제주시 도두봉 2길 44번지',
          latitude: 33.5066951,
          longitude: 126.4744285,
        },
        {
          address: '제주특별자치도 제주시 금능농공길 40번지',
          latitude: 33.3602019,
          longitude: 126.2436041,
        },
        {
          address: '제주특별자치도 제주시 서흘 1길 64번지',
          latitude: 33.5302407,
          longitude: 126.5901915,
        },
        {
          address: '제주특별자치도 제주시 금능농공길48-22번지',
          latitude: 33.3607001,
          longitude: 126.2416087,
        },
        {
          address: '제주특별자치도 서귀포시 토평공단로 155번길 37',
          latitude: 33.2923972,
          longitude: 126.5787052,
        },
        {
          address: '제주특별자치도 서귀포시 성산읍 성산등용로 107-10',
          latitude: 33.4698158,
          longitude: 126.9293901,
        },
        {
          address: '부산광역시 강서구 미음로 71-1',
          latitude: 35.148118,
          longitude: 128.8692922,
        },
        {
          address: '부산광역시 사하구 다대로1066번길 61-3(장림동)',
          latitude: 35.0796739,
          longitude: 128.9589845,
        },
        {
          address: '부산광역시 서구 충무대로 214(남부민동)',
          latitude: 35.0869959,
          longitude: 129.0220104,
        },
        {
          address: '인천광역시 남동구 청능대로448번길 63(고잔동)',
          latitude: 37.3961209,
          longitude: 126.7075223,
        },
        {
          address: '인천광역시 서구 검암로 20번길 13 (검암동)',
          latitude: 37.5660344,
          longitude: 126.6819911,
        },
        {
          address: '인천광역시 옹진군 영흥면 영흥남로9번길 428, 434',
          latitude: 37.2426149,
          longitude: 126.4754074,
        },
        {
          address: '경기도 고양시 일산서구 산남로 128-8(구산동, 3호)',
          latitude: 37.6978601,
          longitude: 126.7076502,
        },
        {
          address: '경기도 고양시 일산서구 산남로 128-8(구산동, 2호)',
          latitude: 37.6978601,
          longitude: 126.7076502,
        },
        {
          address: '경기도 용인시 기흥구 중부대로 714',
          latitude: 37.2634156,
          longitude: 127.1378983,
        },
        {
          address: '경기도 용인시 기흥구 원고매로 29',
          latitude: 37.2222324,
          longitude: 127.1067031,
        },
        {
          address: '경기도 용인시 처인구 모현읍 곡현로718번길 27',
          latitude: 37.3450377,
          longitude: 127.2274859,
        },
        {
          address: '경기도 용인시 처인구 중부대로 1022-1 ',
          latitude: 37.2462467,
          longitude: 127.1606787,
        },
        {
          address: '경기도 화성시 반월북길 27-5',
          latitude: 37.2301041,
          longitude: 127.0624872,
        },
        {
          address: '전라남도 영광군 법성면 영광로27',
          latitude: 35.3551234,
          longitude: 126.4545328,
        },
        {
          address: '서울특별시 성동구 뚝섬로17가길 49 (성수동2가)',
          latitude: 37.54073229999999,
          longitude: 127.0589748,
        },
        {
          address: '서울특별시 강서구 하늘길 112, 김포공항 (공항동)',
          latitude: 37.5586545,
          longitude: 126.7944739,
        },
        {
          address: '서울특별시 노원구 석계로 98-2, 광운대역 (월계동)',
          latitude: 37.6232015,
          longitude: 127.0616631,
        },
        {
          address: '울산광역시 울주군 청량면 율리영해로 12',
          latitude: 35.527456,
          longitude: 129.235217,
        },
        {
          address:
            '서울특별시 송파구 송파대로 55, 서울복합물류 F동 301호 (장지동)',
          latitude: 37.4746178,
          longitude: 127.1260071,
        },
        {
          address: '울산광역시 북구 호계로 88 (창평동)',
          latitude: 35.6144005,
          longitude: 129.3589277,
        },
        {
          address: '대구광역시 동구 공항로 221 (지저동)',
          latitude: 35.89941940000001,
          longitude: 128.638395,
        },
        {
          address: '대구광역시 중구 달성로26길 16 (수창동)',
          latitude: 35.8758869,
          longitude: 128.5829373,
        },
        {
          address: '대구광역시 북구 노원로 205 (침산동)',
          latitude: 35.9005863,
          longitude: 128.5822365,
        },
        {
          address:
            '대전광역시 유성구 유성대로1366번길 10 (장동, (주)한화 종합연구소)',
          latitude: 36.4034936,
          longitude: 127.3664937,
        },
        {
          address: '인천광역시 중구 서해대로93번길 42',
          latitude: 37.4421995,
          longitude: 126.6121423,
        },
        {
          address: '인천광역시 서구 원석로 41 (석남동)',
          latitude: 37.4988888,
          longitude: 126.6409594,
        },
        {
          address: '인천광역시 중구 축항대로118번길 189',
          latitude: 37.4433161,
          longitude: 126.6008505,
        },
        {
          address: '인천광역시 중구 축항대로165번길 40 (항동7가)',
          latitude: 37.4555851,
          longitude: 126.6176026,
        },
        {
          address: '인천광역시 중구 축항대로296번길 99',
          latitude: 37.4383779,
          longitude: 126.6264059,
        },
        {
          address: '인천광역시 서구 봉수대로501번길 57-3 (원창동)',
          latitude: 37.5185326,
          longitude: 126.6555088,
        },
        {
          address: '인천광역시 중구 축항대로212번길 18',
          latitude: 37.4501625,
          longitude: 126.6178844,
        },
        {
          address: '인천광역시 중구 축항대로 124',
          latitude: 37.4537523,
          longitude: 126.610064,
        },
        {
          address: '서울특별시 강남구 광평로31길 52 (수서동)',
          latitude: 37.485591,
          longitude: 127.0888998,
        },
        {
          address: '서울특별시 영등포구 양평로21길 25 (양평동4가)',
          latitude: 37.5355686,
          longitude: 126.893059,
        },
        {
          address: '인천광역시 중구 서해대로94번길 130 (신흥동3가, 화인통상)',
          latitude: 37.4307041,
          longitude: 126.6294255,
        },
        {
          address: '인천광역시 중구 연안부두로99번길 21',
          latitude: 37.4510598,
          longitude: 126.5988114,
        },
        {
          address: '대구광역시 동구 공항로 221 (지저동, 대구국제공항)',
          latitude: 35.8994871,
          longitude: 128.6383866,
        },
        {
          address: '울산광역시 남구 장생포고래로125번길 38 (장생포동)',
          latitude: 35.5051704,
          longitude: 129.3700308,
        },
        {
          address: '울산광역시 남구 신항로716번길 60 (황성동)',
          latitude: 35.46262,
          longitude: 129.36427,
        },
        {
          address: '경기도 광주시 두둘기길 33 (초월읍)',
          latitude: 37.3984102,
          longitude: 127.3140792,
        },
        {
          address: '경기도 안성시 일죽면 죽화로 139-1',
          latitude: 37.1118006,
          longitude: 127.4435814,
        },
        {
          address: '경기도 평택시 포승산단로 10 (포승읍)',
          latitude: 36.9703049,
          longitude: 126.8622795,
        },
        {
          address: '경기도 평택시 청룡길 181 (청룡동)',
          latitude: 37.0267178,
          longitude: 127.124284,
        },
        {
          address: '경기도 광주시 마도로 5 (도척면)',
          latitude: 37.2774187,
          longitude: 127.3478507,
        },
        {
          address: '경기도 광주시 곤지암읍 광여로 49',
          latitude: 37.3508892,
          longitude: 127.3515455,
        },
        {
          address: '경기도 평택시 평택항만길 305 (포승읍)',
          latitude: 36.9748859,
          longitude: 126.8375983,
        },
        {
          address: '경기도 평택시 삼남로 745-24 (진위면)',
          latitude: 37.0879854,
          longitude: 127.089615,
        },
        {
          address: '경기도 평택시 직산동길 66 (포승읍)',
          latitude: 36.948168,
          longitude: 126.8764655,
        },
        {
          address: '경기도 광주시 곤지암읍 경충대로 65-5',
          latitude: 37.3271747,
          longitude: 127.3925459,
        },
        {
          address:
            '울산광역시 남구 용연로98번길 46 (성암동, 에어프로덕츠코리아(주))',
          latitude: 35.4829962,
          longitude: 129.3577456,
        },
        {
          address: '울산광역시 울주군 반구대로 149 (삼남면, 오뚜기)',
          latitude: 35.5112615,
          longitude: 129.0935757,
        },
        {
          address: '울산광역시 남구 장생포고래로 305 (매암동)',
          latitude: 35.5067745,
          longitude: 129.3841835,
        },
        {
          address: '울산광역시 남구 신항로716번길 76 (황성동)',
          latitude: 35.46262,
          longitude: 129.36427,
        },
        {
          address: '울산광역시 울주군 삼동면 삼동로 76',
          latitude: 35.4974721,
          longitude: 129.0995158,
        },
        {
          address: '울산광역시 남구 장생포고래로 267 (매암동)',
          latitude: 35.504032,
          longitude: 129.3832271,
        },
        {
          address: '울산광역시 남구 장생포고래로 157-1 (장생포동)',
          latitude: 35.5019581,
          longitude: 129.374072,
        },
        {
          address: '울산광역시 남구 용연로 370 (황성동, 울산신항)',
          latitude: 35.458499,
          longitude: 129.3609404,
        },
        {
          address:
            '울산광역시 남구 장생포고래로 147 (장생포동, (주)한백트레이딩)',
          latitude: 35.5015159,
          longitude: 129.3709541,
        },
        {
          address: '울산광역시 남구 매암로 74 (매암동)',
          latitude: 35.515401,
          longitude: 129.3765289,
        },
        {
          address: '울산광역시 남구 장생포로 304 (매암동, 경동도시가스(주))',
          latitude: 35.5091366,
          longitude: 129.3745856,
        },
        {
          address: '울산광역시 울주군 산암로 311-116 (온산읍, 세방(주))',
          latitude: 35.4358406,
          longitude: 129.3560097,
        },
        {
          address: '울산광역시 울주군 우봉길 3-36 (온산읍, 무림P&P)',
          latitude: 35.4060412,
          longitude: 129.3555313,
        },
        {
          address:
            '울산광역시 울주군 당목길 26 (온산읍, 정일울산컨테이너터미널)',
          latitude: 35.4412269,
          longitude: 129.3524688,
        },
        {
          address: '울산광역시 남구 장생포고래로 307 (매암동)',
          latitude: 35.5047985,
          longitude: 129.3758312,
        },
        {
          address: '울산광역시 남구 신항로 666 (황성동)',
          latitude: 35.46262,
          longitude: 129.36427,
        },
        {
          address: '인천광역시 중구 축항대로290번길 23',
          latitude: 37.4460457,
          longitude: 126.6264675,
        },
        {
          address: '인천광역시 중구 축항대로86번길 11 (항동7가, 고려보세창고)',
          latitude: 37.45499849999999,
          longitude: 126.6068604,
        },
        {
          address: '인천광역시 중구 축항대로 194 (항동7가)',
          latitude: 37.4513957,
          longitude: 126.6169417,
        },
        {
          address: '인천광역시 중구 축항대로 229 (항동7가)',
          latitude: 37.4513616,
          longitude: 126.6230442,
        },
        {
          address: '인천광역시 중구 축항대로86번길 70',
          latitude: 37.4510307,
          longitude: 126.6019963,
        },
        {
          address:
            '인천광역시 중구 축항대로296번길 115 (신흥동3가, (주)프로젠스 냉동창고)',
          latitude: 37.4375263,
          longitude: 126.6272199,
        },
        {
          address: '인천광역시 중구 연안부두로148번길 10',
          latitude: 37.4470904,
          longitude: 126.5963672,
        },
        {
          address: '인천광역시 중구 축항대로86번길 12',
          latitude: 37.4555182,
          longitude: 126.6057692,
        },
        {
          address: '인천광역시 중구 서해대로 282 (신흥동3가)',
          latitude: 37.4517993,
          longitude: 126.6279072,
        },
        {
          address: '인천광역시 동구 보세로 95 (만석동)',
          latitude: 37.4846587,
          longitude: 126.6139464,
        },
        {
          address: '인천광역시 중구 연안부두로99번길 15',
          latitude: 37.4513403,
          longitude: 126.5995347,
        },
        {
          address: '인천광역시 중구 서해대로271번길 35 (항동7가)',
          latitude: 37.4536602,
          longitude: 126.6229783,
        },
        {
          address:
            '인천광역시 중구 축항대로 274 (신흥동3가, 인천세관세아로지스보세창고)',
          latitude: 37.4481541,
          longitude: 126.624924,
        },
        {
          address: '인천광역시 중구 축항대로212번길 36',
          latitude: 37.4482844,
          longitude: 126.6172431,
        },
        {
          address:
            '인천광역시 중구 공항동로465번길 84 (운서동, 샤프도앤코코리아(유)기내식시설)',
          latitude: 37.4812232,
          longitude: 126.4533923,
        },
        {
          address:
            '인천광역시 중구 서해대로30번길 13 (신흥동3가, 유니온로직스센터)',
          latitude: 37.4328535,
          longitude: 126.6167791,
        },
        {
          address: '인천광역시 중구 서해대로30번길 35',
          latitude: 37.4327942,
          longitude: 126.6192592,
        },
        {
          address:
            '서울특별시 송파구 송파대로 55, C동 5층 (장지동,서울복합물류)',
          latitude: 37.4746178,
          longitude: 127.1260071,
        },
        {
          address:
            '서울특별시 송파구 송파대로 55, c동 205호 (장지동,서울복합물류)',
          latitude: 37.4746178,
          longitude: 127.1260071,
        },
        {
          address: '서울특별시 강서구 하늘길 210, 8-2호 (공항동,화물청사)',
          latitude: 37.553386,
          longitude: 126.811351,
        },
        {
          address: '서울특별시 서초구 양재대로12길 56 (양재동)',
          latitude: 37.4583497,
          longitude: 127.0381148,
        },
        {
          address: '서울특별시 노원구 화랑로45길 71 (월계동)',
          latitude: 37.6208026,
          longitude: 127.0659356,
        },
        {
          address: '서울특별시 금천구 디지털로 154 (가산동)',
          latitude: 37.4763636,
          longitude: 126.8840042,
        },
        {
          address: '서울특별시 성동구 아차산로13길 38 (성수동2가)',
          latitude: 37.5462023,
          longitude: 127.0620068,
        },
        {
          address: '서울특별시 강서구 양천로47길 54 (마곡동)',
          latitude: 37.5735461,
          longitude: 126.8378001,
        },
        {
          address: '서울특별시 도봉구 도봉로180길 9 (도봉동)',
          latitude: 37.6837042,
          longitude: 127.046774,
        },
        {
          address: '서울특별시 성동구 아차산로 67 (성수동2가)',
          latitude: 37.5461868,
          longitude: 127.05183,
        },
        {
          address: '인천광역시 중구 축항대로 106',
          latitude: 37.4552508,
          longitude: 126.6086189,
        },
        {
          address: '인천광역시 동구 보세로 103 (만석동, 주식회사 삼미 창고)',
          latitude: 37.48456420000001,
          longitude: 126.6124975,
        },
        {
          address: '인천광역시 중구 축항대로290번길 13',
          latitude: 37.4466401,
          longitude: 126.6272149,
        },
        {
          address: '인천광역시 중구 축항대로296번길 47 (신흥동3가)',
          latitude: 37.4434792,
          longitude: 126.6293814,
        },
        {
          address: '인천광역시 연수구 아암대로 755 (동춘동)',
          latitude: 37.4013725,
          longitude: 126.6566326,
        },
        {
          address: '인천광역시 중구 축항대로296번길 56-29',
          latitude: 37.4438774,
          longitude: 126.6276363,
        },
        {
          address: '인천광역시 중구 축항대로211번길 21 (항동7가)',
          latitude: 37.4535548,
          longitude: 126.620348,
        },
        {
          address: '인천광역시 중구 축항대로86번길 15',
          latitude: 37.452763,
          longitude: 126.6029609,
        },
        {
          address:
            '인천광역시 중구 서해대로30번길 32 (신흥동3가, 인천남항컨테이너물류기지)',
          latitude: 37.4317161,
          longitude: 126.618453,
        },
        {
          address: '인천광역시 중구 축항대로212번길 17 (항동7가)',
          latitude: 37.4493126,
          longitude: 126.6194913,
        },
        {
          address: '인천광역시 중구 서해대로271번길 17',
          latitude: 37.4524433,
          longitude: 126.6240935,
        },
        {
          address: '인천광역시 중구 서해대로 227 (항동7가)',
          latitude: 37.4488616,
          longitude: 126.6221441,
        },
        {
          address:
            '인천광역시 중구 축항대로296번길 23 (신흥동3가, (주)듀얼로지스틱스 물류창고)',
          latitude: 37.44628610000001,
          longitude: 126.6287764,
        },
        {
          address: '인천광역시 서구 북항로309번길 118 (원창동)',
          latitude: 37.4974623,
          longitude: 126.6174213,
        },
        {
          address: '인천광역시 서구 북항로120번길 29 (원창동)',
          latitude: 37.5136205,
          longitude: 126.633737,
        },
        {
          address: '인천광역시 서구 정서진로 30 (오류동, (유)동방보세창고)',
          latitude: 37.5711136,
          longitude: 126.6704459,
        },
        {
          address: '인천광역시 중구 서해대로94번길 96',
          latitude: 37.4326879,
          longitude: 126.6264529,
        },
        {
          address:
            '인천광역시 연수구 인천신항대로 920 (송도동, (주)인천크로스독)',
          latitude: 37.3449418,
          longitude: 126.6295224,
        },
        {
          address: '인천광역시 서구 북항로 136 (원창동, (주)매직비젼 인천창고)',
          latitude: 37.5019127,
          longitude: 126.6243171,
        },
        {
          address: '인천광역시 중구 인중로 305',
          latitude: 37.4770792,
          longitude: 126.6160118,
        },
        {
          address: '인천광역시 서구 북항로178번길 68-15 (원창동)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '인천광역시 중구 서해대로 176 (신흥동3가)',
          latitude: 37.4435957,
          longitude: 126.6223514,
        },
        {
          address: '인천광역시 중구 축항대로290번길 103',
          latitude: 37.4390693,
          longitude: 126.6225338,
        },
        {
          address: '인천광역시 중구 연안부두로 158 (항동7가, 태광통상주식회사)',
          latitude: 37.4461539,
          longitude: 126.5969268,
        },
        {
          address: '인천광역시 중구 연안부두로 162 (항동7가)',
          latitude: 37.4455008,
          longitude: 126.5964217,
        },
        {
          address:
            '인천광역시 서구 북항로45번길 5 (석남동, (주)우덱스 인천북항창)',
          latitude: 37.5004817,
          longitude: 126.6353384,
        },
        {
          address: '인천광역시 중구 서해대로293번길 11',
          latitude: 37.4530944,
          longitude: 126.6256865,
        },
        {
          address: '인천광역시 서구 정서진2로 18 (오류동)',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address: '인천광역시 중구 축항대로 147',
          latitude: 37.4554375,
          longitude: 126.6130064,
        },
        {
          address: '인천광역시 서구 원석로 112 (석남동)',
          latitude: 37.50915190000001,
          longitude: 126.6796147,
        },
        {
          address: '인천광역시 서구 정서진2로 9 (오류동)',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address: '인천광역시 중구 축항대로 99 (항동7가)',
          latitude: 37.4567562,
          longitude: 126.6089086,
        },
        {
          address: '인천광역시 서구 염곡로 133 (가좌동)',
          latitude: 37.4959368,
          longitude: 126.6654347,
        },
        {
          address:
            '인천광역시 연수구 인천신항대로 924 (송도동, (주)지앤아이로지텍 물류센터)',
          latitude: 37.3839118,
          longitude: 126.6438546,
        },
        {
          address: '경기도 안성시 샛터길 40 (발화동)',
          latitude: 36.9894214,
          longitude: 127.2740971,
        },
        {
          address: '부산광역시 사하구 감천항로 250(구평동)',
          latitude: 35.070851,
          longitude: 128.9900546,
        },
        {
          address: '대구광역시 북구 노원로27(노원동3가)',
          latitude: 35.8918963,
          longitude: 128.5655347,
        },
        {
          address: '경기도 용인시 처인구 이동읍 백옥대로 144번길 36-10',
          latitude: 37.1490035,
          longitude: 127.2090661,
        },
        {
          address: '경기도 양평군 옥천면 하사천길4번길 25',
          latitude: 37.5255623,
          longitude: 127.4832649,
        },
        {
          address: '강원도 동해시 향로봉길 116',
          latitude: 37.5377214,
          longitude: 129.1123871,
        },
        {
          address: '강원도 삼척시 원덕읍 임원항구로 16',
          latitude: 37.2297725,
          longitude: 129.3440457,
        },
        {
          address: '전라북도 고창군 신림면 가평로 31',
          latitude: 35.45898560000001,
          longitude: 126.703149,
        },
        {
          address: '전라남도 여수시 국동남9길 21(국동)',
          latitude: 34.72884020000001,
          longitude: 127.722102,
        },
        {
          address: '전라남도 여수시 망양로 445-13(만흥동)',
          latitude: 34.7855549,
          longitude: 127.7489929,
        },
        {
          address: '전라남도 여수시 화양면 화양로 1492',
          latitude: 34.7128997,
          longitude: 127.62047,
        },
        {
          address: '부산광역시 사하구 다대로 360(장림동)',
          latitude: 35.0765408,
          longitude: 128.975017,
        },
        {
          address: '부산광역시 서구 원양로 125(암남동)',
          latitude: 35.0643087,
          longitude: 129.0127431,
        },
        {
          address: '부산광역시 서구 충무대로 170(남부민동)',
          latitude: 35.0866805,
          longitude: 129.0232785,
        },
        {
          address: '부산광역시 사하구 을숙도대로 685(신평1동)',
          latitude: 35.0857183,
          longitude: 128.980232,
        },
        {
          address: '부산광역시 강서구 녹산산업북로 400(송정동)',
          latitude: 35.0964331,
          longitude: 128.8667625,
        },
        {
          address: '부산광역시 사하구 장평로 157(장림동)',
          latitude: 35.0800509,
          longitude: 128.9725389,
        },
        {
          address: '부산광역시 사하구 다대로 361(장림동)',
          latitude: 35.0762748,
          longitude: 128.9751355,
        },
        {
          address: '부산광역시 사하구 다대로320번길 22(장림동)',
          latitude: 35.07408789999999,
          longitude: 128.9739121,
        },
        {
          address: '부산광역시 서구 암남공원로 435(암남동)',
          latitude: 35.0766119,
          longitude: 129.0074554,
        },
        {
          address: '부산광역시 사하구 원양로 313(감천동)',
          latitude: 35.07887850000001,
          longitude: 129.0051181,
        },
        {
          address: '부산광역시 서구 암남공원로 463(암남동)',
          latitude: 35.0788813,
          longitude: 129.0065129,
        },
        {
          address: '제주특별자치도 서귀포시 성산읍 성산등용로 104',
          latitude: 33.4707686,
          longitude: 126.9308329,
        },
        {
          address: '제주특별자치도 제주시 한림읍 금능농공길48번지',
          latitude: 33.3598083,
          longitude: 126.2435712,
        },
        {
          address: '경상북도 포항시 남구 장기면 영암리',
          latitude: 35.9087656,
          longitude: 129.5207067,
        },
        {
          address: '경상북도 포항시 남구 구룡포읍 병포리',
          latitude: 35.9799126,
          longitude: 129.521284,
        },
        {
          address: '경상북도 포항시 남구 구룡포읍 석병리',
          latitude: 36.0226186,
          longitude: 129.5697663,
        },
        {
          address: '부산광역시 서구 충무대로 202(남부민동)',
          latitude: 35.08705,
          longitude: 129.0224387,
        },
        {
          address: '부산광역시 기장읍 대변로 140-7',
          latitude: 35.2263647,
          longitude: 129.2271811,
        },
        {
          address: '부산광역시 사하구 서포로 36(구평동)',
          latitude: 35.0819489,
          longitude: 128.9864187,
        },
        {
          address: '부산광역시 서구 등대로 123(남부민동)',
          latitude: 35.0842316,
          longitude: 129.0256111,
        },
        {
          address: '부산광역시 사하구 을숙도대로 685(신평동)',
          latitude: 35.0857183,
          longitude: 128.980232,
        },
        {
          address: '부산광역시 사하구 감천항로 12(감천동)',
          latitude: 35.0861934,
          longitude: 128.9975786,
        },
        {
          address: '경상북도 울진군 후포면 울진대게로 201 ',
          latitude: 36.6805547,
          longitude: 129.4607086,
        },
        {
          address: '부산광역시 사하구 장림번영로84번길 27(장림동)',
          latitude: 35.079061,
          longitude: 128.9748057,
        },
        {
          address: '부산광역시 서구 충무대로 228(남부민동)',
          latitude: 35.0868477,
          longitude: 129.0213065,
        },
        {
          address: '제주특별자치도 제주시 한림읍 한근길18번지',
          latitude: 33.4118672,
          longitude: 126.2594816,
        },
        {
          address: '경상남도 창원시 마산합포구 진동면 해양관광로 70-76',
          latitude: 35.108257,
          longitude: 128.4896976,
        },
        {
          address: '경상남도 통영시 도산면 도산일주로 2124',
          latitude: 34.8837805,
          longitude: 128.3691127,
        },
        {
          address: '경상남도 사천시 등대길 27 ',
          latitude: 34.9255306,
          longitude: 128.0733275,
        },
        {
          address: '경상남도 통영시 남망길 106 (동호동 300-2, 300-3)',
          latitude: 34.8396714,
          longitude: 128.427949,
        },
        {
          address: '경상남도 양산시 어곡동 856',
          latitude: 35.3820459,
          longitude: 129.0173401,
        },
        {
          address: '경상남도 거제시 능포로16길 21',
          latitude: 34.8846493,
          longitude: 128.7398063,
        },
        {
          address: '경상남도 사천시 팔포3길 56-51',
          latitude: 34.92611670000001,
          longitude: 128.078861,
        },
        {
          address: '경상남도 통영시 동호안길 33',
          latitude: 34.8409637,
          longitude: 128.4346976,
        },
        {
          address: '경상남도 통영시 도산면 도산일주로 2225',
          latitude: 34.8822778,
          longitude: 128.3755811,
        },
        {
          address: '경상남도 통영시 해평5길 76',
          latitude: 34.8340399,
          longitude: 128.4186092,
        },
        {
          address: '경상남도 창원시 마산합포구 수산1길 18',
          latitude: 35.1982497,
          longitude: 128.5734079,
        },
        {
          address: '경상남도 창원시 마산합포구 수산1길 222',
          latitude: 35.2039361,
          longitude: 128.5822316,
        },
        {
          address: '제주특별자치도 제주시 한경면 일주서로 4482-1번지',
          latitude: 33.3623131,
          longitude: 126.1948289,
        },
        {
          address: '경상남도 통영시 광도면 안정로 286',
          latitude: 34.9173102,
          longitude: 128.4153783,
        },
        {
          address: '전라남도 영광군 법성면 진내리 44-1',
          latitude: 35.3654642,
          longitude: 126.4400988,
        },
        {
          address: '경상북도 울진군 평해읍 울진대게로 645 ',
          latitude: 36.7088207,
          longitude: 129.4741846,
        },
        {
          address: '전라남도 여수시 망양로 457(만흥동)',
          latitude: 34.7872388,
          longitude: 127.7506946,
        },
        {
          address: '전라남도 여수시 망양로 494-16(오천동)',
          latitude: 34.7891841,
          longitude: 127.7533168,
        },
        {
          address: '전라남도 여수시 어항단지로 184(봉산동)',
          latitude: 34.7302696,
          longitude: 127.7263023,
        },
        {
          address: '충청남도 보령시 남포방조제로 115',
          latitude: 36.3015241,
          longitude: 126.5309748,
        },
        {
          address: '충청남도 보령시 해안로 507',
          latitude: 36.3379319,
          longitude: 126.5430004,
        },
        {
          address: '강원도 속초시 농공단지길 76',
          latitude: 38.1765545,
          longitude: 128.5937588,
        },
        {
          address: '경기도 양평군 양동면 쌍학마곡길 123-1',
          latitude: 37.4192228,
          longitude: 127.753667,
        },
        {
          address: '경기도 광주시 도척면 국사봉로 75 ',
          latitude: 37.3204958,
          longitude: 127.3423224,
        },
        {
          address: '경기도 용인시 기흥구 동탄기흥로 741',
          latitude: 37.2250405,
          longitude: 127.100913,
        },
        {
          address: '인천광역시 중구 축항대로86번길 138(항동7가)',
          latitude: 37.44529989999999,
          longitude: 126.5989275,
        },
        {
          address: '인천광역시 중구 연안부두로 24-1(항동7가)',
          latitude: 37.4562368,
          longitude: 126.6029144,
        },
        {
          address: '부산광역시 사하구 원양로 359(감천동)',
          latitude: 35.0829538,
          longitude: 129.0060804,
        },
        {
          address: '부산광역시 사하구 장림번영로84번길 21(장림동)',
          latitude: 35.0795784,
          longitude: 128.9748097,
        },
        {
          address: '부산광역시 사하구 장평로 269(신평동)',
          latitude: 35.0905546,
          longitude: 128.9726997,
        },
        {
          address: '부산광역시 사하구 다산로225번길 35(장림동)',
          latitude: 35.0745721,
          longitude: 128.9529029,
        },
        {
          address: '부산광역시 영도구 남항서로 14(남항동3가)',
          latitude: 35.0831587,
          longitude: 129.0378125,
        },
        {
          address: '부산광역시 사하구 다산로225번길 53(장밀동)',
          latitude: 35.0748714,
          longitude: 128.9530992,
        },
        {
          address: '부산광역시 서구 충무대로 226(남부민동)',
          latitude: 35.0866123,
          longitude: 129.0226011,
        },
        {
          address: '부산광역시 동구 충장대로 367(범일동)',
          latitude: 35.1301896,
          longitude: 129.0584965,
        },
        {
          address: '제주특별자치도 제주시 도두항서길5번지',
          latitude: 33.504349,
          longitude: 126.4647452,
        },
        {
          address: '제주특별자치도 제주시 임항로 55-8번지',
          latitude: 33.5171047,
          longitude: 126.5318713,
        },
        {
          address: '경상남도 양산시 소주동 433',
          latitude: 35.4060152,
          longitude: 129.1574613,
        },
        {
          address: '경상남도 통영시 미우지해안로 120',
          latitude: 34.8259652,
          longitude: 128.3985568,
        },
        {
          address: '경상남도 사천시 중촌2길 27',
          latitude: 34.9692952,
          longitude: 128.0545337,
        },
        {
          address: '경상남도 통영시 용남면 밤개길 51',
          latitude: 34.8920857,
          longitude: 128.4650551,
        },
        {
          address: '경상남도 통영시 광도면 용호로 560',
          latitude: 34.8905424,
          longitude: 128.3799775,
        },
        {
          address: '전라남도 영광군 법성면 굴비로4길 6-9',
          latitude: 35.3555192,
          longitude: 126.4482102,
        },
        {
          address: '전라남도 영광군 홍농읍 계마길 75',
          latitude: 35.3957584,
          longitude: 126.4046195,
        },
        {
          address: '전라남도 영광군 법성면 진굴비길3길 8',
          latitude: 35.3617488,
          longitude: 126.4385441,
        },
        {
          address: '충청남도 태안군 태안읍 원이로 341-23',
          latitude: 36.7836117,
          longitude: 126.2730776,
        },
        {
          address: '경기도 광주시 곤지암읍 신만로 81',
          latitude: 37.3353239,
          longitude: 127.3891659,
        },
        {
          address: '경기도 광주시 경충대로 1502',
          latitude: 37.4032992,
          longitude: 127.27038,
        },
        {
          address: '경기도 광주시 순암로 536-7 효성광주냉장 ',
          latitude: 37.4123354,
          longitude: 127.1970081,
        },
        {
          address: '경기도 광주시 경충대로 1425 ',
          latitude: 37.3967813,
          longitude: 127.2748536,
        },
        {
          address:
            '경기도 용인시 기흥구 동탄기흥로 681번길 1 (고매동,세미냉장)',
          latitude: 37.2199125,
          longitude: 127.0951901,
        },
        {
          address: '부산광역시 사하구 다대로 166(신평동)',
          latitude: 35.0941591,
          longitude: 128.9728325,
        },
        {
          address: '부산광역시 사하구 감천항로 24(감천동)',
          latitude: 35.0856565,
          longitude: 128.9968757,
        },
        {
          address: '부산광역시 사하구 감천항로 240(구평동)',
          latitude: 35.0713766,
          longitude: 128.9899305,
        },
        {
          address: '부산광역시 강서구 녹산산단382로59번길 7(송정동)',
          latitude: 35.08389349999999,
          longitude: 128.860048,
        },
        {
          address: '제주특별자치도 제주시 구좌읍 일주동로 3747번지',
          latitude: 33.5314441,
          longitude: 126.8206181,
        },
        {
          address: '제주특별자치도 제주시 임항로 45번지',
          latitude: 33.5169344,
          longitude: 126.5298281,
        },
        {
          address: '제주특별자치도 제주시 도두1동 2614-2',
          latitude: 33.5059719,
          longitude: 126.4646231,
        },
        {
          address: '제주특별자치도 제주시 도공로4-3번지',
          latitude: 33.5055444,
          longitude: 126.4645349,
        },
        {
          address: '제주특별자치도 제주시 임항로 37-3번지',
          latitude: 33.5167949,
          longitude: 126.5287068,
        },
        {
          address: '경상남도 고성군 거류면 은황길 237',
          latitude: 34.9638938,
          longitude: 128.3885275,
        },
        {
          address: '경상남도 고성군 고성읍 신월로 9',
          latitude: 34.9555313,
          longitude: 128.332524,
        },
        {
          address: '경상남도 거제시 동부면 거제남서로 2245',
          latitude: 34.7837687,
          longitude: 128.5713869,
        },
        {
          address: '경상남도 거제시 장승포로 58',
          latitude: 34.866876,
          longitude: 128.729692,
        },
        {
          address: '경상남도 통영시 광도면 덕포리 895-3',
          latitude: 34.9043577,
          longitude: 128.4204166,
        },
        {
          address: '경상남도 통영시 광도면 덕포로 341',
          latitude: 34.914176,
          longitude: 128.4210795,
        },
        {
          address: '부산광역시 서구 원양로 67(암남동)',
          latitude: 35.0613514,
          longitude: 129.0092555,
        },
        {
          address: '경기도 용인시 처인구 모현읍 오산리 260번지',
          latitude: 37.3303113,
          longitude: 127.1465759,
        },
        {
          address: '제주특별자치도 서귀포시 토평공단로 127번길 46',
          latitude: 33.2909999,
          longitude: 126.5788792,
        },
        {
          address: '제주특별자치도 제주시 한림읍 귀덕 3길9번지',
          latitude: 33.4386895,
          longitude: 126.279506,
        },
        {
          address: '제주특별자치도 제주시 백포북길38번지',
          latitude: 33.5028116,
          longitude: 126.4601581,
        },
        {
          address: '제주특별자치도 제주시 추자면 추자로576-4번지',
          latitude: 33.9451581,
          longitude: 126.3280491,
        },
        {
          address: '제주특별자치도 제주시 오일장서길66번지',
          latitude: 33.4974957,
          longitude: 126.4722203,
        },
        {
          address: '경상남도 밀양시 삼랑진읍 천태로 373-21',
          latitude: 35.4110825,
          longitude: 128.8701085,
        },
        {
          address: '경상남도 사천시 대방길 96-15',
          latitude: 34.9297117,
          longitude: 128.0583331,
        },
        {
          address: '경상남도 통영시 평인일주로 1107',
          latitude: 34.8595204,
          longitude: 128.4172432,
        },
        {
          address: '경상남도 통영시 산양읍 이운길 10',
          latitude: 34.8007428,
          longitude: 128.4315258,
        },
        {
          address: '경상북도 구미시 오태3길 19',
          latitude: 36.0739708,
          longitude: 128.3583477,
        },
        {
          address: '경상북도 울진군 후포면 반소골길 43 ',
          latitude: 36.6615732,
          longitude: 129.4260777,
        },
        {
          address: '전라남도 강진군 마량면 마량5길 26-1',
          latitude: 34.4497179,
          longitude: 126.8183121,
        },
        {
          address: '전라남도 여수시 어항단지로 210(봉산동)',
          latitude: 34.729998,
          longitude: 127.7282152,
        },
        {
          address: '전라남도 여수시 어항단지로 7-2(신월동)',
          latitude: 34.7257733,
          longitude: 127.7120188,
        },
        {
          address: '강원도 동해시 일출로 92-26',
          latitude: 37.5499672,
          longitude: 129.1167892,
        },
        {
          address: '대전광역시 대덕구 문평동로48번길 116(문평동)',
          latitude: 36.4506937,
          longitude: 127.4057502,
        },
        {
          address: '인천광역시 중구 축항대로 147(항동7가)',
          latitude: 37.4554375,
          longitude: 126.6130064,
        },
        {
          address: '경기도 양평군 양평읍 중앙로 378번길 20',
          latitude: 37.4907455,
          longitude: 127.5286696,
        },
        {
          address: '강원도 동해시 공단2로 33',
          latitude: 37.4735112,
          longitude: 129.1405981,
        },
        {
          address: '강원도 동해시 공단6로 13',
          latitude: 37.4721875,
          longitude: 129.1402264,
        },
        {
          address: '대구광역시 북구 매천로2길 49-8(팔달동)',
          latitude: 35.8981882,
          longitude: 128.5474843,
        },
        {
          address: '부산광역시 서구 원양로 73(암남동)',
          latitude: 35.0622927,
          longitude: 129.0099917,
        },
        {
          address: '부산광역시 사하구 원양로 314(감천동)',
          latitude: 35.07896849999999,
          longitude: 129.0059931,
        },
        {
          address: '부산광역시 서구 충무대로 140(남부민동)',
          latitude: 35.0875367,
          longitude: 129.0239373,
        },
        {
          address: '부산광역시 강서구 녹산산단407로 65(송정동)',
          latitude: 35.0950294,
          longitude: 128.8617245,
        },
        {
          address: '부산광역시 서구 충무대로 234(남부민동)',
          latitude: 35.0863197,
          longitude: 129.022559,
        },
        {
          address: '부산광역시 사하구 암남공원로 471(감천동)',
          latitude: 35.0803324,
          longitude: 129.0065362,
        },
        {
          address: '부산광역시 서구 원양로 295(암남동)',
          latitude: 35.0777666,
          longitude: 129.0051724,
        },
        {
          address: '경기도 성남시 중원구 갈마치로 200 (상대원동)',
          latitude: 37.4321034,
          longitude: 127.174548,
        },
        {
          address: '인천광역시 중구 축항대로 194(항동7가)',
          latitude: 37.4513957,
          longitude: 126.6169417,
        },
        {
          address: '경기도 평택시 오성면 숙성리736-11',
          latitude: 36.9946396,
          longitude: 126.9643676,
        },
        {
          address: '경기도 이천시 호법면 안평리 99번지 29호',
          latitude: 37.2467502,
          longitude: 127.4244432,
        },
        {
          address: '인천광역시 중구 서해대로94번길 98(신흥동3가)',
          latitude: 37.4321443,
          longitude: 126.6264323,
        },
        {
          address: '대구광역시 동구 신평로 157-7(신평동)',
          latitude: 35.880591,
          longitude: 128.6842373,
        },
        {
          address: '부산광역시 사하구 다대로605번길 23(다대동)',
          latitude: 35.0528309,
          longitude: 128.9726753,
        },
        {
          address: '제주특별자치도 제주시 한림읍 한근길12번지',
          latitude: 33.4117181,
          longitude: 126.2590761,
        },
        {
          address: '제주특별자치도 제주시 연북로 157번지',
          latitude: 33.4820072,
          longitude: 126.49836,
        },
        {
          address: '경상남도 사천시 청널1길 14',
          latitude: 34.9279021,
          longitude: 128.067616,
        },
        {
          address: '경상남도 사천시 동남평길 57 ',
          latitude: 34.9435909,
          longitude: 128.0995887,
        },
        {
          address: '경상남도 사천시 중촌2길 11',
          latitude: 34.9684981,
          longitude: 128.0548672,
        },
        {
          address: '경상남도 사천시 대방길 36-17',
          latitude: 34.92921520000001,
          longitude: 128.0615104,
        },
        {
          address: '경상남도 통영시 동호안길 55',
          latitude: 34.8401415,
          longitude: 128.4352094,
        },
        {
          address: '경상남도 통영시 산양읍 산양일주로 595',
          latitude: 34.7932089,
          longitude: 128.4220559,
        },
        {
          address: '경상남도 통영시 산양읍 풍화일주로 541-21',
          latitude: 34.8232599,
          longitude: 128.3432075,
        },
        {
          address: '경상남도 통영시 도천동 33-56',
          latitude: 34.8397514,
          longitude: 128.4168635,
        },
        {
          address: '경상남도 통영시 항남동 147-2',
          latitude: 34.8402573,
          longitude: 128.423866,
        },
        {
          address: '경상남도 창원시 마산합포구 수산1길 214',
          latitude: 35.2036357,
          longitude: 128.5817023,
        },
        {
          address: '경상북도 영덕군 축산면 축산항초교길 19',
          latitude: 36.5083491,
          longitude: 129.4404994,
        },
        {
          address: '경상북도 포항시 남구 송도동',
          latitude: 36.0310979,
          longitude: 129.3777927,
        },
        {
          address: '전라남도 영광군 법성면 용덕로 136-5',
          latitude: 35.3602151,
          longitude: 126.4642323,
        },
        {
          address: '전라북도 고창군 상하면 구시포해변길 126',
          latitude: 35.4467053,
          longitude: 126.4428567,
        },
        {
          address: '강원도 속초시 방축길 128(대포동)',
          latitude: 38.1710297,
          longitude: 128.5955572,
        },
        {
          address: '인천광역시 중구 서해대로94번길 106(신흥동3가)',
          latitude: 37.4319368,
          longitude: 126.6281117,
        },
        {
          address: '부산광역시 사하구 장평로 43(장림동)',
          latitude: 35.0698684,
          longitude: 128.9726735,
        },
        {
          address: '제주특별자치도 제주시 조천읍 북촌 12길84번지',
          latitude: 33.5430915,
          longitude: 126.7027046,
        },
        {
          address: '제주특별자치도 제주시 한림읍 한림해안로 149번지',
          latitude: 33.4159173,
          longitude: 126.262342,
        },
        {
          address: '제주특별자치도 서귀포시 성산읍 성산등용로 107-17',
          latitude: 33.4698158,
          longitude: 126.9293901,
        },
        {
          address: '제주특별자치도 제주시 도공로9-7번지',
          latitude: 33.5049168,
          longitude: 126.4660559,
        },
        {
          address: '제주특별자치도 제주시 임항로 37-7번지',
          latitude: 33.5174238,
          longitude: 126.5307228,
        },
        {
          address: '제주특별자치도 제주시 구좌읍 구좌해안로96번지',
          latitude: 33.5568924,
          longitude: 126.7240797,
        },
        {
          address: '제주특별자치도 제주시 한림읍 대림1길7-1번지',
          latitude: 33.4185886,
          longitude: 126.2638907,
        },
        {
          address: '제주특별자치도 제주시 도공로4-1번지',
          latitude: 33.505565,
          longitude: 126.4648154,
        },
        {
          address: '경상남도 남해군 미조면 미조뢰 235',
          latitude: 34.7105121,
          longitude: 128.0471014,
        },
        {
          address: '경상남도 고성군 고성읍 율대5길 71',
          latitude: 34.9639822,
          longitude: 128.3530595,
        },
        {
          address: '경상남도 사천시 유람선길 42-40',
          latitude: 34.9303678,
          longitude: 128.0622063,
        },
        {
          address: '경상남도 통영시 남망길 106 (동호동 300-5)',
          latitude: 34.8396714,
          longitude: 128.427949,
        },
        {
          address: '경상남도 사천시 거북등길 27',
          latitude: 34.9689768,
          longitude: 128.0507061,
        },
        {
          address: '충청남도 서천군 종천면 당정리 432-2',
          latitude: 36.1017028,
          longitude: 126.6371857,
        },
        {
          address: '경상남도 사천시 석양길 104 ',
          latitude: 34.9805339,
          longitude: 128.0477483,
        },
        {
          address: '전라남도 여수시 어항단지로 18-8(신월동)',
          latitude: 34.72485169999999,
          longitude: 127.7115328,
        },
        {
          address: '경상남도 통영시 욕지면 욕지일주로 178-5',
          latitude: 34.63461160000001,
          longitude: 128.2724878,
        },
        {
          address: '경상남도 통영시 광도면 용호로 506',
          latitude: 34.8855005,
          longitude: 128.3833916,
        },
        {
          address: '경상남도 창원시 마산합포구 진동면 광암해안길 16-1',
          latitude: 35.1041828,
          longitude: 128.4971651,
        },
        {
          address: '경상북도 영덕군 축산면 축산항길 33',
          latitude: 36.5077217,
          longitude: 129.4472112,
        },
        {
          address: '전라남도 완도군 완도읍 죽정리 842',
          latitude: 34.345051,
          longitude: 126.7281449,
        },
        {
          address: '전라남도 완도군 군외면 청해진로 960',
          latitude: 34.3852839,
          longitude: 126.7125442,
        },
        {
          address: '충청남도 서천군 장항읍 원수리 212',
          latitude: 36.0041138,
          longitude: 126.7209947,
        },
        {
          address: '충청남도 태안군 근흥면 신진부두길 24',
          latitude: 36.6742783,
          longitude: 126.135519,
        },
        {
          address: '강원도 양양군 강현면 장산3길 56-10',
          latitude: 38.1375316,
          longitude: 128.5871387,
        },
        {
          address: '경기도 성남시 중원구 둔촌대로456번길 7 (상대원동)',
          latitude: 37.4312323,
          longitude: 127.1676379,
        },
        {
          address: '부산광역시 사하구 을숙도대로 717(구평동)',
          latitude: 35.085621,
          longitude: 128.9844495,
        },
        {
          address: '부산광역시 사하구 을숙도대로873번길 10(감천동)',
          latitude: 35.0891839,
          longitude: 128.9973284,
        },
        {
          address: '부산광역시 사하구 다대로605번길 25(다대동)',
          latitude: 35.0532353,
          longitude: 128.9724883,
        },
        {
          address: '제주특별자치도 제주시 용담3동 516-2',
          latitude: 33.5161097,
          longitude: 126.5061899,
        },
        {
          address: '제주특별자치도 제주시 용화로 4길11번지',
          latitude: 33.5088352,
          longitude: 126.5050116,
        },
        {
          address: '제주특별자치도 제주시 도두항서길7번지',
          latitude: 33.5050937,
          longitude: 126.4662873,
        },
        {
          address: '경상남도 사천시 청송길 39',
          latitude: 34.932894,
          longitude: 128.1074552,
        },
        {
          address: '경상남도 사천시 등대길 29',
          latitude: 34.9253086,
          longitude: 128.0736655,
        },
        {
          address: '경상남도 사천시 각산로 103',
          latitude: 34.9304565,
          longitude: 128.063267,
        },
        {
          address: '경상남도 사천시 거북등길 33',
          latitude: 34.9687757,
          longitude: 128.0508177,
        },
        {
          address: '경상남도 사천시 송포공단길 81-9',
          latitude: 34.973189,
          longitude: 128.0514873,
        },
        {
          address: '경상남도 통영시 장좌로 85-10',
          latitude: 34.84097,
          longitude: 128.4326716,
        },
        {
          address: '경상북도 경주시 감포읍 감포항구길',
          latitude: 35.8064527,
          longitude: 129.5034175,
        },
        {
          address: '전라남도 완도군 완도읍 농공단지길 5',
          latitude: 34.3371018,
          longitude: 126.7285833,
        },
        {
          address: '전라남도 여수시 하멜로 88(종화동)',
          latitude: 34.7372946,
          longitude: 127.7478853,
        },
        {
          address: '충청남도 보령시 대천항중앙길 78',
          latitude: 36.327588,
          longitude: 126.5061223,
        },
        {
          address: '충청남도 천안시 서북구 천안대로 1347(신당동)',
          latitude: 36.8552449,
          longitude: 127.15879,
        },
        {
          address: '강원도 속초시 설악금강대교로 67(청호동)',
          latitude: 38.2049653,
          longitude: 128.5935724,
        },
        {
          address: '강원도 동해시 공단7로 26',
          latitude: 37.4744757,
          longitude: 129.1390616,
        },
        {
          address: '강원도 동해시 공단6로 25',
          latitude: 37.4727962,
          longitude: 129.1392453,
        },
        {
          address: '경기도 용인시 기흥구 동탄기흥로 776',
          latitude: 37.2271258,
          longitude: 127.102707,
        },
        {
          address: '부산광역시 서구 충무대로 122-1(암남동)',
          latitude: 35.0813116,
          longitude: 129.0251151,
        },
        {
          address: '부산광역시 서구 원양로 87(암남동)',
          latitude: 35.0624824,
          longitude: 129.0115596,
        },
        {
          address: '부산광역시 사하구 다산로 259(장림동)',
          latitude: 35.0757604,
          longitude: 128.9533257,
        },
        {
          address: '부산광역시 사하구 감천항로419번길 32(구평동)',
          latitude: 35.0541159,
          longitude: 128.9964923,
        },
        {
          address: '부산광역시 서구 원양로 71(암남동)',
          latitude: 35.0621072,
          longitude: 129.0089951,
        },
        {
          address: '경기도 광주시 초월읍 평촌길 12-187 ',
          latitude: 37.3606378,
          longitude: 127.3198801,
        },
        {
          address: '경상남도 창원시 마산합포구 진전면 회진로 1503',
          latitude: 35.0902188,
          longitude: 128.4593992,
        },
        {
          address: '경상북도 포항시 남구 대보면 강사리',
          latitude: 36.0404519,
          longitude: 129.5617224,
        },
        {
          address: '충청남도 홍성군 구항면 충서로 869',
          latitude: 36.5555698,
          longitude: 126.6456653,
        },
        {
          address: '강원도 삼척시 근덕면 방재로 773',
          latitude: 37.3792607,
          longitude: 129.2304726,
        },
        {
          address: '강원도 강릉시 농공단지길 28-29',
          latitude: 37.8702921,
          longitude: 128.8261702,
        },
        {
          address: '강원도 강릉시 농공단지길 40-25',
          latitude: 37.8697582,
          longitude: 128.8271292,
        },
        {
          address: '경상남도 사천시 대방길 68',
          latitude: 34.9290709,
          longitude: 128.0598574,
        },
        {
          address: '경상남도 사천시 등대길 45 ',
          latitude: 34.9247456,
          longitude: 128.073074,
        },
        {
          address: '경상남도 통영시 멘데해안길 39',
          latitude: 34.8439141,
          longitude: 128.4357322,
        },
        {
          address: '전라남도 목포시 산정공단로 36',
          latitude: 34.8169973,
          longitude: 126.3771693,
        },
        {
          address: '전라남도 목포시 산정공단로 30(연산동)',
          latitude: 34.816534,
          longitude: 126.3753467,
        },
        {
          address: '충청남도 당진시 합덕읍 농공단지길 47',
          latitude: 36.8023238,
          longitude: 126.7232447,
        },
        {
          address: '강원도 삼척시 이사부길 54-8',
          latitude: 37.4375079,
          longitude: 129.1931011,
        },
        {
          address: '강원도 속초시 중앙부두길 29',
          latitude: 38.2021424,
          longitude: 128.5916979,
        },
        {
          address: '강원도 강릉시 모산로 169번길 20',
          latitude: 37.7262329,
          longitude: 128.900322,
        },
        {
          address: '경상남도 고성군 고성읍 신월로 127',
          latitude: 34.9503653,
          longitude: 128.3346333,
        },
        {
          address: '경상남도 통영시 도천상가안길 93',
          latitude: 34.8403145,
          longitude: 128.4174775,
        },
        {
          address: '경상남도 창원시 마산합포구 수산1길 238',
          latitude: 35.2042138,
          longitude: 128.5825894,
        },
        {
          address: '전라남도 여수시 돌산읍 신추길 3',
          latitude: 34.7319406,
          longitude: 127.7496192,
        },
        {
          address: '전라남도 목포시 해안로 143',
          latitude: 34.7814666,
          longitude: 126.3798222,
        },
        {
          address: '전라남도 목포시 해안로 118(금화동)',
          latitude: 34.7803881,
          longitude: 126.3771831,
        },
        {
          address: '대구광역시 북구 팔달북로 11길 17(노원동3가)',
          latitude: 35.8913494,
          longitude: 128.5585658,
        },
        {
          address: '부산광역시 사하구 원양로 353(감천동)',
          latitude: 35.0826395,
          longitude: 129.0052892,
        },
        {
          address: '부산광역시 서구 충무대로 146(남부민동)',
          latitude: 35.0876282,
          longitude: 129.0225019,
        },
        {
          address: '경상남도 김해시 삼안로 51',
          latitude: 35.2331225,
          longitude: 128.9173042,
        },
        {
          address: '경상남도 창원시 마산합포구 구산면 이순신로 172',
          latitude: 35.0810399,
          longitude: 128.6027856,
        },
        {
          address: '경상남도 통영시 멘데해안길 111',
          latitude: 34.8433216,
          longitude: 128.439555,
        },
        {
          address: '제주특별자치도 제주시 추자면 대서1길16번지',
          latitude: 33.9621931,
          longitude: 126.2993535,
        },
        {
          address: '제주특별자치도 서귀포시 칠십리로 44',
          latitude: 33.2406862,
          longitude: 126.5613649,
        },
        {
          address: '경상남도 고성군 고성읍 율대5길 29',
          latitude: 34.9661652,
          longitude: 128.3528958,
        },
        {
          address: '경상남도 사천시 등대길 59',
          latitude: 34.924223,
          longitude: 128.0726127,
        },
        {
          address: '경상북도 영덕군 강구면 강영로 140',
          latitude: 36.3726174,
          longitude: 129.3853916,
        },
        {
          address: '전라남도 목포시 삼학로92번길 6-1',
          latitude: 34.7857161,
          longitude: 126.3937334,
        },
        {
          address: '전라북도 정읍시 정읍북로 653-29',
          latitude: 35.6190862,
          longitude: 126.8918525,
        },
        {
          address: '전라북도 전주시 덕진구 동부대로 1177',
          latitude: 35.8688054,
          longitude: 127.1180248,
        },
        {
          address: '전라북도 전주시 덕진구 동부대로 1187',
          latitude: 35.8688054,
          longitude: 127.1180248,
        },
        {
          address: '충청남도 서천군 장항읍 장산로 357',
          latitude: 36.0078959,
          longitude: 126.6999173,
        },
        {
          address: '충청남도 태안군 남면 안면대로 571-16',
          latitude: 36.6997977,
          longitude: 126.287744,
        },
        {
          address: '강원도 강릉시 연주로 10',
          latitude: 37.8575114,
          longitude: 128.8380098,
        },
        {
          address: '인천광역시 중구 연안부두로99번길 15(항동7가)',
          latitude: 37.4513403,
          longitude: 126.5995347,
        },
        {
          address: '부산광역시 사상구 낙동대로 1414(삼락동)',
          latitude: 35.1770248,
          longitude: 128.9776229,
        },
        {
          address: '경상남도 고성군 고성읍 남해안대로 2771',
          latitude: 34.9885046,
          longitude: 128.3260073,
        },
        {
          address: '경상남도 고성군 고성읍 남해안대로 2246',
          latitude: 34.9466803,
          longitude: 128.3449702,
        },
        {
          address: '경상남도 고성군 고성읍 신월2길 6',
          latitude: 34.9491494,
          longitude: 128.3433591,
        },
        {
          address: '경상남도 거제시 하청면 와항1길 32-1',
          latitude: 34.9632384,
          longitude: 128.6493293,
        },
        {
          address: '경상남도 거제시 둔덕면 법동어구로 500',
          latitude: 34.8195876,
          longitude: 128.5084902,
        },
        {
          address: '경상북도 울진군 후포면 울진대게로 132 ',
          latitude: 36.6801399,
          longitude: 129.4535887,
        },
        {
          address: '충청남도 서천군 장항읍 원수리 450-4',
          latitude: 36.0071678,
          longitude: 126.7168368,
        },
        {
          address: '충청남도 서산시 고북면 용암리 164-10',
          latitude: 36.693108,
          longitude: 126.5531474,
        },
        {
          address: '강원도 강릉시 농공단지길 40-19',
          latitude: 37.8704585,
          longitude: 128.8277452,
        },
        {
          address: '부산광역시 사상구 낙동대로1390번길 25(삼락동)',
          latitude: 35.18406,
          longitude: 128.9783163,
        },
        {
          address: '부산광역시 사상구 낙동대로1390번길 22(삼락동)',
          latitude: 35.1835206,
          longitude: 128.9778026,
        },
        {
          address: '부산광역시 사하구 다대로170번길 10(신평동)',
          latitude: 35.08771670000001,
          longitude: 128.9763245,
        },
        {
          address: '충청남도 서천군 장항읍 창선1리 328-1',
          latitude: 36.0077408,
          longitude: 126.6943505,
        },
        {
          address: '경상남도 사천시 등대길 65',
          latitude: 34.9241483,
          longitude: 128.0724069,
        },
        {
          address: '경상북도 안동시 경동로 842-28',
          latitude: 36.5603117,
          longitude: 128.7481498,
        },
        {
          address: '제주특별자치도 제주시 한림읍 한림해안로 141-4번지',
          latitude: 33.4160944,
          longitude: 126.2615355,
        },
        {
          address: '전라남도 여수시 중앙동 269',
          latitude: 34.7377246,
          longitude: 127.7384432,
        },
        {
          address: '강원도 동해시 일출로 88',
          latitude: 37.5515254,
          longitude: 129.1172334,
        },
        {
          address: '부산광역시 서구 충무대로 166-47(남부민동)',
          latitude: 35.08691520000001,
          longitude: 129.0231367,
        },
        {
          address: '부산광역시 사하구 다대로 332(장림동)',
          latitude: 35.0806032,
          longitude: 128.9704367,
        },
        {
          address: '부산광역시 사하구 장평로 174(장림동)',
          latitude: 35.081701,
          longitude: 128.9733688,
        },
        {
          address: '경상남도 사천시 유람선길 143',
          latitude: 34.9270702,
          longitude: 128.065714,
        },
        {
          address: '경상북도 울진군 후포면 후포로 150 ',
          latitude: 36.68265239999999,
          longitude: 129.4568895,
        },
        {
          address: '경상북도 포항시 북구 동빈로1가',
          latitude: 36.0371795,
          longitude: 129.3682174,
        },
        {
          address: '강원도 강릉시 해안로 1730',
          latitude: 37.8895823,
          longitude: 128.8286288,
        },
        {
          address: '부산광역시 서구 충무대로 166-41(남부민동)',
          latitude: 35.08691520000001,
          longitude: 129.0231367,
        },
        {
          address: '부산광역시 연제구 세병로 31(연산동)',
          latitude: 35.1913352,
          longitude: 129.0836662,
        },
        {
          address: '경상남도 창원시 마산합포구 오동동 14길 17(오동동)',
          latitude: 35.2046598,
          longitude: 128.5805685,
        },
        {
          address: '인천광역시 중구 서해대로94번길 106 (신흥동3가)',
          latitude: 37.4319368,
          longitude: 126.6281117,
        },
        {
          address: '인천광역시 중구 항동7가 71-1   ',
          latitude: 37.44529989999999,
          longitude: 126.5989275,
        },
        {
          address: '경기도 용인시 처인구 원삼면 미평리 511-3',
          latitude: 37.1919782,
          longitude: 127.3146252,
        },
        {
          address: '경기도 광주시 순암로 536-7 (삼동)',
          latitude: 37.4148424,
          longitude: 127.2078484,
        },
        {
          address: '경상북도 칠곡군 지천면 황학2길 52',
          latitude: 36.0393356,
          longitude: 128.4874213,
        },
        {
          address:
            '강원도 홍천군 홍천읍 농공단지길 23-10, 홍천축산업협동조합 육가공공장',
          latitude: 37.6545482,
          longitude: 127.8269617,
        },
        {
          address: '경기도 안성시 원곡면 원곡물류단지1로 103',
          latitude: 37.039271,
          longitude: 127.1292377,
        },
        {
          address: '충청남도 논산시 연무읍 동안로 718',
          latitude: 36.1386931,
          longitude: 127.0870966,
        },
        {
          address: '부산광역시 사하구 다대로 320번길 10(장림동)',
          latitude: 35.074202,
          longitude: 128.9755275,
        },
        {
          address: '부산광역시 서구 등대로 122-3(남부민동)',
          latitude: 35.0846513,
          longitude: 129.0252172,
        },
        {
          address: '인천광역시 중구 축항대로69번길 33',
          latitude: 37.4582206,
          longitude: 126.6084656,
        },
        {
          address: '부산광역시 사하구 다대로 370(장림동)',
          latitude: 35.0756228,
          longitude: 128.9768481,
        },
        {
          address: '부산광역시 사하구 신산로 190(신평동)',
          latitude: 35.0891579,
          longitude: 128.9758876,
        },
        {
          address: '경상남도 사천시 유람선길 79',
          latitude: 34.9280698,
          longitude: 128.0642864,
        },
        {
          address: '경상남도 통영시 미수동 397-1',
          latitude: 34.8281176,
          longitude: 128.4038128,
        },
        {
          address: '경상북도 울진군 후포면 동해대로 318 ',
          latitude: 36.6687768,
          longitude: 129.4358978,
        },
        {
          address: '경상북도 포항시 북구 죽도동',
          latitude: 36.0318476,
          longitude: 129.3640905,
        },
        {
          address: '경상북도 포항시 북구 여천동',
          latitude: 36.039336,
          longitude: 129.3681631,
        },
        {
          address: '부산광역시 사하구 장평로71번길 10(장림동)',
          latitude: 35.071828,
          longitude: 128.9720104,
        },
        {
          address: '경상남도 창원시 마산합포구 구산면 수정1길 131',
          latitude: 35.1207402,
          longitude: 128.5863457,
        },
        {
          address: '경상북도 포항시 남구 구룡포읍 구룡포리',
          latitude: 35.9961243,
          longitude: 129.5554949,
        },
        {
          address: '강원도 속초시 청호로 65(청호동)',
          latitude: 38.1956953,
          longitude: 128.5964715,
        },
        {
          address: '부산광역시 사하구 장림로 212(장림동)',
          latitude: 35.0819753,
          longitude: 128.9719849,
        },
        {
          address: '제주특별자치도 서귀포시 칠십리로 63',
          latitude: 33.2398789,
          longitude: 126.5632804,
        },
        {
          address: '경상북도 울진군 후포면 울진대게로 225 ',
          latitude: 36.6798043,
          longitude: 129.4623725,
        },
        {
          address: '경상북도 포항시 남구 동빈동',
          latitude: 36.0446033,
          longitude: 129.3693657,
        },
        {
          address: '충청남도 당진시 양지말길 8(대덕동)',
          latitude: 36.8776377,
          longitude: 126.6355116,
        },
        {
          address: '충청남도 논산시 해월로198번길 19(전일냉동)',
          latitude: 36.2048132,
          longitude: 127.0896627,
        },
        {
          address: '충청남도 서천군 장항읍 창선1리 328-9',
          latitude: 36.0077042,
          longitude: 126.6951254,
        },
        {
          address: '부산광역시 서구 송도해변로 197(암남동)',
          latitude: 35.0786776,
          longitude: 129.0221336,
        },
        {
          address: '부산광역시 사하구 장평로76번길 22(장림동)',
          latitude: 35.0733523,
          longitude: 128.9740339,
        },
        {
          address: '부산광역시 서구 원양로 139(암남동)',
          latitude: 35.0649482,
          longitude: 129.0126995,
        },
        {
          address: '부산광역시 사하구 다대로 359(장림동)',
          latitude: 35.0765049,
          longitude: 128.974988,
        },
        {
          address: '부산광역시 사상구 새벽시장로 16(감전동)',
          latitude: 35.1558665,
          longitude: 128.9756058,
        },
        {
          address: '경상남도 통영시 미우지해안로 73',
          latitude: 34.8272694,
          longitude: 128.3991614,
        },
        {
          address: '경상북도 영덕군 강구면 영덕대게로 77',
          latitude: 36.3599187,
          longitude: 129.3871186,
        },
        {
          address: '전라남도 여수시 삼산면 거문길 18-1',
          latitude: 34.0258933,
          longitude: 127.3101264,
        },
        {
          address: '부산광역시 사상구 모덕로27번길 153(삼락동)',
          latitude: 35.1894151,
          longitude: 128.9808972,
        },
        {
          address: '부산광역시 사하구 장림로 304(장림동)',
          latitude: 35.0840482,
          longitude: 128.9814336,
        },
        {
          address: '부산광역시 사하구 비봉로 56(신평동)',
          latitude: 35.0988171,
          longitude: 128.9659056,
        },
        {
          address: '부산광역시 사하구 원양로 363(감천동)',
          latitude: 35.0833117,
          longitude: 129.0056495,
        },
        {
          address: '제주특별자치도 제주시 한림읍 한림해안로 432번지',
          latitude: 33.4355213,
          longitude: 126.2674492,
        },
        {
          address: '경상남도 사등면 덕호해안길 87',
          latitude: 34.8783468,
          longitude: 128.474965,
        },
        {
          address: '경상남도 사천시 대방길 96-20',
          latitude: 34.9297998,
          longitude: 128.0587502,
        },
        {
          address: '경상남도 사천시 등대길 27',
          latitude: 34.9255306,
          longitude: 128.0733275,
        },
        {
          address: '경상남도 통영시 멘데해안길 169',
          latitude: 34.8433537,
          longitude: 128.4414064,
        },
        {
          address: '경상남도 통영시 산양읍 원항1길 7-28',
          latitude: 34.7969013,
          longitude: 128.3839569,
        },
        {
          address: '경상남도 통영시 동호동 315-27',
          latitude: 34.8411186,
          longitude: 128.431697,
        },
        {
          address: '경상남도 창원시 마산합포구 드림베이대로 17(해운동)',
          latitude: 35.180001,
          longitude: 128.5665736,
        },
        {
          address: '경상북도 구미시 중앙로33길 10-1',
          latitude: 36.1241146,
          longitude: 128.3443622,
        },
        {
          address: '전라남도 여수시 국동남8길 46(국동)',
          latitude: 34.7275285,
          longitude: 127.7197391,
        },
        {
          address: '전라남도 여수시 망양로 494-7(오천동)',
          latitude: 34.7897748,
          longitude: 127.7525228,
        },
        {
          address: '전라북도 군산시 새만금북로 534-42(내초동)',
          latitude: 35.9516579,
          longitude: 126.5921203,
        },
        {
          address: '충청남도 논산시 광석면 논산평야로 9',
          latitude: 36.2356509,
          longitude: 127.0332466,
        },
        {
          address: '부산광역시 사하구 다대동로6번길 1(다대동)',
          latitude: 35.0540888,
          longitude: 128.9718308,
        },
        {
          address: '경상남도 남해군 설천면 금음리 1번지 12호',
          latitude: 34.9296397,
          longitude: 127.9270422,
        },
        {
          address: '경상남도 고성군 거류면 당동6길 50-12',
          latitude: 34.9904725,
          longitude: 128.4074905,
        },
        {
          address: '경상남도 고성군 삼산면 공룡로 2624-64',
          latitude: 34.9392817,
          longitude: 128.3063746,
        },
        {
          address: '경상남도 통영시 용남면 적촌길 2-19',
          latitude: 34.8887051,
          longitude: 128.4548286,
        },
        {
          address: '경상남도 통영시 산양읍 산양일주로 1488',
          latitude: 34.7916355,
          longitude: 128.3871824,
        },
        {
          address: '경상남도 통영시 멘데산업길 45',
          latitude: 34.8444934,
          longitude: 128.4358293,
        },
        {
          address: '경상남도 통영시 산양읍 논아랫길 31',
          latitude: 34.8034883,
          longitude: 128.3957402,
        },
        {
          address: '경상남도 통영시 사량면 진촌2길 6-79',
          latitude: 34.843539,
          longitude: 128.2259627,
        },
        {
          address: '부산광역시 사하구 다산로225번길 51(장림동)',
          latitude: 35.0760083,
          longitude: 128.9526334,
        },
        {
          address: '울산광역시 울주군 청량읍 화창6길 10',
          latitude: 35.49028029999999,
          longitude: 129.3089463,
        },
        {
          address: '충청남도 태안군 남면 진산2길 376',
          latitude: 36.70128450000001,
          longitude: 126.2854897,
        },
        {
          address: '전라남도 완도군 군외면 신학리 888',
          latitude: 34.376533,
          longitude: 126.6420358,
        },
        {
          address: '전라남도 완도군 군외면 원동리 800-4',
          latitude: 34.3979107,
          longitude: 126.6322912,
        },
        {
          address: '충청남도 태안군 태안읍 원이로 78-1',
          latitude: 36.7643138,
          longitude: 126.2880688,
        },
        {
          address: '강원도 고성군 거진읍 거탄진로 194',
          latitude: 38.4489319,
          longitude: 128.4609454,
        },
        {
          address: '인천광역시 중구 축항대로86번길 69(항동7가)',
          latitude: 37.450443,
          longitude: 126.6039579,
        },
        {
          address: '부산광역시 강서구 낙동남로682번길 94(녹산동)',
          latitude: 35.1181886,
          longitude: 128.8919971,
        },
        {
          address: '부산광역시 서구 원양로 175(암남동)',
          latitude: 35.0671951,
          longitude: 129.0093789,
        },
        {
          address: '부산광역시 서구 원양로 179(암남동)',
          latitude: 35.0677206,
          longitude: 129.0090576,
        },
        {
          address: '부산광역시 사하구 원양로 328(감천동)',
          latitude: 35.0796639,
          longitude: 129.0061661,
        },
        {
          address: '부산광역시 서구 원양로 119(암남동)',
          latitude: 35.0635927,
          longitude: 129.0123528,
        },
        {
          address: '경상남도 고성군 삼산면 장치2길 501-48',
          latitude: 34.9443085,
          longitude: 128.2423989,
        },
        {
          address: '경상남도 통영시 광도면 용호2길 47',
          latitude: 34.8763576,
          longitude: 128.3857261,
        },
        {
          address: '경상남도 통영시 남망길 88 (동호동 294-2)',
          latitude: 34.8407562,
          longitude: 128.4273609,
        },
        {
          address: '경상남도 통영시 산양읍 풍화일주로 1319',
          latitude: 34.8326334,
          longitude: 128.3723818,
        },
        {
          address: '경상남도 통영시 도산면 도산일주로 2358',
          latitude: 34.8901446,
          longitude: 128.3751114,
        },
        {
          address: '경상북도 칠곡군 지천면 신동로 78-14',
          latitude: 35.9561657,
          longitude: 128.4792585,
        },
        {
          address: '경상북도 울릉군 울릉읍 봉래1길',
          latitude: 37.4955275,
          longitude: 130.9092582,
        },
        {
          address: '경상북도 울진군 후포면 후포삼율로 20-7 ',
          latitude: 36.6722024,
          longitude: 129.4388487,
        },
        {
          address: '경상북도 울진군 평해읍 박실길 37 ',
          latitude: 36.70921430000001,
          longitude: 129.4725279,
        },
        {
          address: '경상북도 포항시 북구 청하면 월포리',
          latitude: 36.2063316,
          longitude: 129.3640788,
        },
        {
          address: '전라남도 완도군 신지면 신상리 13-6',
          latitude: 34.3487379,
          longitude: 126.8560476,
        },
        {
          address: '전라남도 여수시 망양로 506-12(오천동)',
          latitude: 34.7900356,
          longitude: 127.753134,
        },
        {
          address: '전라남도 완도군 군외면 황진리 777-5',
          latitude: 34.3932495,
          longitude: 126.6567988,
        },
        {
          address: '강원도 동해시 공단2로 37',
          latitude: 37.4738531,
          longitude: 129.1401805,
        },
        {
          address: '강원도 동해시 공단2로 43',
          latitude: 37.4740909,
          longitude: 129.1399048,
        },
        {
          address: '부산광역시 사하구 원양로 349(감천동)',
          latitude: 35.0822079,
          longitude: 129.0052675,
        },
        {
          address: '부산광역시 기장읍 무양2길 17-5',
          latitude: 35.2258106,
          longitude: 129.2265312,
        },
        {
          address: '제주특별자치도 서귀포시 대정읍 하모항구로 30',
          latitude: 33.2169977,
          longitude: 126.2502028,
        },
        {
          address: '경상남도 사천시 유람선길 32',
          latitude: 34.9299155,
          longitude: 128.0634023,
        },
        {
          address: '경상남도 통영시 동호로 132',
          latitude: 34.8400641,
          longitude: 128.4374296,
        },
        {
          address: '경상남도 통영시 용남면 화포2길 146',
          latitude: 34.8602693,
          longitude: 128.4464849,
        },
        {
          address: '경상북도 울진군 죽변면 죽변항길 163 ',
          latitude: 37.0567889,
          longitude: 129.4262049,
        },
        {
          address: '경상북도 영덕군 강구면 강영로 117',
          latitude: 36.3704638,
          longitude: 129.3849879,
        },
        {
          address: '경상북도 영덕군 강구면 강영로 78',
          latitude: 36.3671718,
          longitude: 129.3848349,
        },
        {
          address: '경상북도 영덕군 강구면 강영로 84',
          latitude: 36.3675959,
          longitude: 129.3853305,
        },
        {
          address: '전라북도 고창군 해리면 구동호2길 33',
          latitude: 35.518063,
          longitude: 126.4868783,
        },
        {
          address: '전라북도 군산시 공항로 18(소룡동921)',
          latitude: 35.9812431,
          longitude: 126.6822008,
        },
        {
          address: '충청남도 당진시 송악읍 대섬길 4-45',
          latitude: 36.9798069,
          longitude: 126.7229718,
        },
        {
          address: '인천광역시 계양구 아나지로 420',
          latitude: 37.5252398,
          longitude: 126.7389077,
        },
        {
          address: '부산광역시 사하구 을숙도대로709번길 5(신평동)',
          latitude: 35.0857097,
          longitude: 128.9828506,
        },
        {
          address: '경상북도 경산시 진량읍 공단4로',
          latitude: 35.8672384,
          longitude: 128.8257462,
        },
        {
          address: '전라남도 여수시 돌산읍 신추길 7',
          latitude: 34.7320315,
          longitude: 127.7499575,
        },
        {
          address: '전라남도 여수시 돌산읍 백초길 65',
          latitude: 34.7311422,
          longitude: 127.7497821,
        },
        {
          address: '전라북도 군산시 금암동 274-10',
          latitude: 35.987004,
          longitude: 126.7234743,
        },
        {
          address: '충청남도 태안군 태안읍 서해로 2014',
          latitude: 36.7553282,
          longitude: 126.3282385,
        },
        {
          address: '충청북도 청주시 흥덕구 옥산면 오송가락로 834 ',
          latitude: 36.6623972,
          longitude: 127.3755109,
        },
        {
          address: '부산광역시 사하구 장림번영로 88-2(장림동)',
          latitude: 35.0799334,
          longitude: 128.9749345,
        },
        {
          address: '부산광역시 서구 충무대로 122(암남동)',
          latitude: 35.0811844,
          longitude: 129.0250269,
        },
        {
          address: '강원도 속초시 중앙로 354(영랑동)',
          latitude: 38.2200978,
          longitude: 128.5916742,
        },
        {
          address: '경상북도 영덕군 강구면 강영로 108',
          latitude: 36.3697449,
          longitude: 129.3853574,
        },
        {
          address: '충청남도 서천군 장항읍 장산로 327',
          latitude: 36.0082973,
          longitude: 126.6964644,
        },
        {
          address: '충청남도 보령시 해안로 125',
          latitude: 36.3466842,
          longitude: 126.577031,
        },
        {
          address: '충청남도 논산시 중앙로500번길 21-1(화지동)',
          latitude: 36.2081175,
          longitude: 127.0848731,
        },
        {
          address: '울산광역시 동구 동진5길 71(방어동)',
          latitude: 35.4843966,
          longitude: 129.4296596,
        },
        {
          address: '인천광역시 중구 축항대로 18(북성동1가)',
          latitude: 37.4607836,
          longitude: 126.6013389,
        },
        {
          address: '부산광역시 사하구 원양로 319(감천동)',
          latitude: 35.0794003,
          longitude: 129.0050159,
        },
        {
          address: '제주특별자치도 서귀포시 남원읍 일주동로 7825',
          latitude: 33.2707177,
          longitude: 126.6474524,
        },
        {
          address: '제주특별자치도 제주시 추자면 추자로449번지',
          latitude: 33.9415048,
          longitude: 126.3182195,
        },
        {
          address: '경상남도 사천시 등대길 31-17',
          latitude: 34.9253842,
          longitude: 128.0738758,
        },
        {
          address: '경상남도 사천시 노대길 26',
          latitude: 34.9782664,
          longitude: 128.0548562,
        },
        {
          address: '경상남도 통영시 해송정4길 50',
          latitude: 34.842599,
          longitude: 128.4301193,
        },
        {
          address: '경상북도 울진군 죽변면 죽변항길 217 ',
          latitude: 37.0556819,
          longitude: 129.4251937,
        },
        {
          address: '경상북도 포항시 북구 송라면 조사리',
          latitude: 36.22206,
          longitude: 129.3722385,
        },
        {
          address: '경상북도 포항시 북구 청하면 신흥리',
          latitude: 36.1545736,
          longitude: 129.3758994,
        },
        {
          address: '전라남도 여수시 망양로 449(만흥동)',
          latitude: 34.78629859999999,
          longitude: 127.7502866,
        },
        {
          address: '전라남도 목포시 산정공단로 37',
          latitude: 34.8179475,
          longitude: 126.3757158,
        },
        {
          address: '충청남도 서산시 수석산업로 64（수석동)',
          latitude: 36.7761664,
          longitude: 126.5017281,
        },
        {
          address: '강원도 고성군 토성면 잼버리동로 473',
          latitude: 38.2370576,
          longitude: 128.5585672,
        },
        {
          address: '울산광역시 남구 여천동 937번지 14호',
          latitude: 35.5386218,
          longitude: 129.3427374,
        },
        {
          address: '인천광역시 중구 축항대로 50(항동7가)',
          latitude: 37.4578377,
          longitude: 126.6033525,
        },
        {
          address: '부산광역시 사하구 원양로 340(감천동)',
          latitude: 35.0812185,
          longitude: 129.0057685,
        },
        {
          address: '부산광역시 서구 해안새벽시장길 54',
          latitude: 35.0939092,
          longitude: 129.0248395,
        },
        {
          address: '경상남도 사천시 충무길 25',
          latitude: 34.9804409,
          longitude: 128.0525444,
        },
        {
          address: '경상남도 창원시 진해구 행암로 92번길(장천동)',
          latitude: 35.1287976,
          longitude: 128.6996414,
        },
        {
          address: '경상북도 영덕군 강구면 강영로 61',
          latitude: 36.3654859,
          longitude: 129.3836462,
        },
        {
          address: '경상남도 고성군 하이면 하이로 486-10',
          latitude: 34.9467865,
          longitude: 128.1311321,
        },
        {
          address: '부산광역시 사하구 감천항로 239 (구평동)',
          latitude: 35.0713835,
          longitude: 128.9911761,
        },
        {
          address: '부산광역시 사하구 장평로 269 (신평동)',
          latitude: 35.0905546,
          longitude: 128.9726997,
        },
        {
          address: '부산광역시 사하구 감천항로405번길 74 (구평동)',
          latitude: 35.0522332,
          longitude: 128.9980961,
        },
        {
          address: '부산광역시 동구 충장대로 255-1 (좌천동)',
          latitude: 35.1286573,
          longitude: 129.0510268,
        },
        {
          address: '부산광역시 사하구 감천항로 339 (구평동)',
          latitude: 35.062218,
          longitude: 128.9938204,
        },
        {
          address: '부산광역시 강서구 미음산단1로16번길 22 (구랑동)',
          latitude: 35.1393187,
          longitude: 128.8613109,
        },
        {
          address: '부산광역시 남구 우암로 165 (우암동, 동국보세장치장)',
          latitude: 35.1237794,
          longitude: 129.0783767,
        },
        {
          address: '부산광역시 강서구 가락대로 346 (송정동)',
          latitude: 35.105542,
          longitude: 128.8495554,
        },
        {
          address: '부산광역시 영도구 해양로 34 (청학동)',
          latitude: 35.0911395,
          longitude: 129.0615476,
        },
        {
          address: '부산광역시 사하구 을숙도대로 717 (구평동)',
          latitude: 35.085621,
          longitude: 128.9844495,
        },
        {
          address: '부산광역시 사하구 감천항로 221-14 (구평동)',
          latitude: 35.0756779,
          longitude: 128.9945474,
        },
        {
          address: '부산광역시 동구 충장대로 334 (범일동)',
          latitude: 35.1284121,
          longitude: 129.05962,
        },
        {
          address: '부산광역시 강서구 공항진입로 108 (대저2동)',
          latitude: 35.172707,
          longitude: 128.9457484,
        },
        {
          address: '부산광역시 사하구 원양로 353 (감천동)',
          latitude: 35.0826395,
          longitude: 129.0052892,
        },
        {
          address: '부산광역시 동구 충장대로 367 (범일동)',
          latitude: 35.1301896,
          longitude: 129.0584965,
        },
        {
          address: '부산광역시 사하구 장림로 86 (장림동)',
          latitude: 35.0805266,
          longitude: 128.9601239,
        },
        {
          address: '부산광역시 사상구 강변대로456번길 33-32 (엄궁동)',
          latitude: 35.1265919,
          longitude: 128.965574,
        },
        {
          address: '부산광역시 사하구 감천항로 255 (구평동)',
          latitude: 35.0714162,
          longitude: 128.9918059,
        },
        {
          address: '부산광역시 서구 등대로 117 (남부민동)',
          latitude: 35.084752,
          longitude: 129.0261034,
        },
        {
          address:
            '부산광역시 동구 충장대로 314 (좌천동, 한국허치슨터미널(주))',
          latitude: 35.1276159,
          longitude: 129.0591723,
        },
        {
          address: '부산광역시 사상구 낙동대로 1414 (삼락동)',
          latitude: 35.1770248,
          longitude: 128.9776229,
        },
        {
          address: '부산광역시 남구 북항로 105 (감만동)',
          latitude: 35.1179006,
          longitude: 129.0785702,
        },
        {
          address: '부산광역시 남구 우암로 225 (우암동, (주)케이씨티시)',
          latitude: 35.124123,
          longitude: 129.073035,
        },
        {
          address: '부산광역시 서구 충무대로 140 (남부민동)',
          latitude: 35.0875367,
          longitude: 129.0239373,
        },
        {
          address: '부산광역시 사하구 장림로 304 (장림동)',
          latitude: 35.0840482,
          longitude: 128.9814336,
        },
        {
          address: '부산광역시 강서구 미음국제2로 25 (미음동)',
          latitude: 35.1473295,
          longitude: 128.8767706,
        },
        {
          address: '부산광역시 사하구 하신번영로 7 (신평동)',
          latitude: 35.08337059999999,
          longitude: 128.9587459,
        },
        {
          address: '제주특별자치도 제주시 정실5길39',
          latitude: 33.4694839,
          longitude: 126.5110191,
        },
        {
          address: '부산광역시 서구 충무대로 234 (남부민동)',
          latitude: 35.0863197,
          longitude: 129.022559,
        },
        {
          address: '제주특별자치도 제주시 구좌읍 세화 1길 20-2번지',
          latitude: 33.5248265,
          longitude: 126.8546029,
        },
        {
          address: '제주특별자치도 제주시 통물길 30번지',
          latitude: 33.4894183,
          longitude: 126.4348515,
        },
        {
          address: '부산광역시 사하구 감천항로 250 (구평동)',
          latitude: 35.070851,
          longitude: 128.9900546,
        },
        {
          address: '제주특별자치도 제주시 도근내길 74번지',
          latitude: 33.4921982,
          longitude: 126.4393885,
        },
        {
          address: '부산광역시 서구 원양로 211 (암남동)',
          latitude: 35.0701578,
          longitude: 129.0077763,
        },
        {
          address: '부산광역시 남구 우암로 127 (감만동, 세방기업(주))',
          latitude: 35.1203672,
          longitude: 129.0796983,
        },
        {
          address: '부산광역시 영도구 해양로176번길 19 (청학동)',
          latitude: 35.0885279,
          longitude: 129.0683613,
        },
        {
          address: '전라남도 영광군 법성면 진굴비길 30-3',
          latitude: 35.3587889,
          longitude: 126.4479804,
        },
        {
          address: '전라남도 영광군 법성면 굴비로4길 5-9',
          latitude: 35.3554027,
          longitude: 126.4492433,
        },
        {
          address: '전라남도 영광군 영광읍 옥당로 201',
          latitude: 35.279699,
          longitude: 126.4992255,
        },
        {
          address: '전라남도 함평군 함평읍 한나리길 34-70',
          latitude: 35.1043499,
          longitude: 126.4894336,
        },
        {
          address: '전라북도 군산시 새만금북로 139-17(비응도동)',
          latitude: 35.9435677,
          longitude: 126.5325469,
        },
        {
          address: '전라북도 군산시 외항1길 32-54(소룡동)',
          latitude: 35.9818888,
          longitude: 126.6721095,
        },
        {
          address: '전라북도 군산시 임피면 미산길 32-12',
          latitude: 35.9828453,
          longitude: 126.8292999,
        },
        {
          address: '울산광역시 남구 처용로 725 (황성동)',
          latitude: 35.4726565,
          longitude: 129.3546399,
        },
        {
          address: '충청남도 보령시 해안로 505(남곡동)',
          latitude: 36.3396619,
          longitude: 126.5541411,
        },
        {
          address: '인천광역시 중구 대무의로301번길13-11, 가동(무의동)',
          latitude: 37.3898246,
          longitude: 126.4283056,
        },
        {
          address: '인천광역시 중구 영종순환로279-46, 2동(중산동)',
          latitude: 37.5233016,
          longitude: 126.5521633,
        },
        {
          address: '대구광역시 북구 칠성남로 30길 41(칠성동2가)',
          latitude: 35.8763109,
          longitude: 128.5997016,
        },
        {
          address: '부산광역시 사하구 다대로 320번길 18',
          latitude: 35.0742842,
          longitude: 128.9740472,
        },
        {
          address: '제주특별자치도 서귀포시 토평공단로107번길 38-2(토평동)',
          latitude: 33.2900175,
          longitude: 126.5819156,
        },
        {
          address: '제주특별자치도 제주시 추자면 대서6길54',
          latitude: 33.9618417,
          longitude: 126.291886,
        },
        {
          address: '제주특별자치도 제주시 도두봉2길 30',
          latitude: 33.5058154,
          longitude: 126.4712952,
        },
        {
          address: '경상남도 남해군 설천면 문항리 227',
          latitude: 34.9146008,
          longitude: 127.929172,
        },
        {
          address: '경상남도 통영시 도산면 도산일주로 1990-36',
          latitude: 34.8724631,
          longitude: 128.3689243,
        },
        {
          address: '전라남도 영광군 법성면 굴비로 4길 12-11',
          latitude: 35.3549963,
          longitude: 126.4477802,
        },
        {
          address: '경상남도 경상남도 창원시 마산합포구 진전면 대실로 170',
          latitude: 35.10231479999999,
          longitude: 128.4207877,
        },
        {
          address: '부산광역시 남구 우암로 263 (우암동)',
          latitude: 35.1225881,
          longitude: 129.0796611,
        },
        {
          address: '부산광역시 강서구 녹산산단382로50번길 33 (송정동)',
          latitude: 35.0842656,
          longitude: 128.85549,
        },
        {
          address: '부산광역시 강서구 화전산단5로14번길 25 (화전동)',
          latitude: 35.0997593,
          longitude: 128.8802743,
        },
        {
          address: '부산광역시 남구 우암로 175 (우암동)',
          latitude: 35.1252793,
          longitude: 129.0739169,
        },
        {
          address: '부산광역시 강서구 녹산산단232로 38-17 (송정동)',
          latitude: 35.085314,
          longitude: 128.8423469,
        },
        {
          address: '대구광역시 달성군 유가읍 테크노순환로1길 71',
          latitude: 35.6840454,
          longitude: 128.4512478,
        },
        {
          address: '제주특별자치도 제주시 원당로112-3번지',
          latitude: 33.5306872,
          longitude: 126.5944571,
        },
        {
          address: '경상남도 사천시 유람선길 42-56',
          latitude: 34.9305564,
          longitude: 128.0618967,
        },
        {
          address: '경상남도 통영시 국치1길 52-18',
          latitude: 34.8346352,
          longitude: 128.3928469,
        },
        {
          address: '경상남도 통영시 산양읍 산양일주로 397-42',
          latitude: 34.7932386,
          longitude: 128.4300562,
        },
        {
          address: '부산광역시 서구 송도해변로 197 (암남동)',
          latitude: 35.0786776,
          longitude: 129.0221336,
        },
        {
          address: '부산광역시 사하구 다대로 360 (장림동)',
          latitude: 35.0765408,
          longitude: 128.975017,
        },
        {
          address: '인천광역시 서구 갑문3로 25 (오류동)',
          latitude: 37.6008162,
          longitude: 126.6435294,
        },
        {
          address: '인천광역시 서구 원석로 101 (원창동)',
          latitude: 37.5046781,
          longitude: 126.6402833,
        },
        {
          address: '인천광역시 중구 서해대로94번길 106',
          latitude: 37.4319368,
          longitude: 126.6281117,
        },
        {
          address: '인천광역시 중구 공항로 272 (운서동)',
          latitude: 37.479174,
          longitude: 126.4406136,
        },
        {
          address: '인천광역시 서구 정서진3로 17 (오류동)',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address: '인천광역시 서구 북항로309번길 84 (원창동)',
          latitude: 37.4981016,
          longitude: 126.6105496,
        },
        {
          address:
            '인천광역시 연수구 인천신항대로 707 (송도동, 선광신컨테이너터미널)',
          latitude: 37.3468436,
          longitude: 126.63561,
        },
        {
          address: '인천광역시 미추홀구 소성로 48 (학익동)',
          latitude: 37.4451943,
          longitude: 126.654751,
        },
        {
          address: '인천광역시 중구 축항대로296번길 60-18',
          latitude: 37.4383779,
          longitude: 126.6264059,
        },
        {
          address: '인천광역시 중구 축항대로117번길 21',
          latitude: 37.4572615,
          longitude: 126.6110773,
        },
        {
          address: '인천광역시 중구 축항대로165번길 15 (항동7가)',
          latitude: 37.4553878,
          longitude: 126.6146835,
        },
        {
          address: '인천광역시 중구 서해대로94번길 98-1 (신흥동3가, 대한통운)',
          latitude: 37.4316839,
          longitude: 126.6260632,
        },
        {
          address: '인천광역시 서구 북항로 163 (원창동)',
          latitude: 37.505076,
          longitude: 126.6293349,
        },
        {
          address: '인천광역시 연수구 국제항만대로326번길 29 (송도동)',
          latitude: 37.4206023,
          longitude: 126.6445895,
        },
        {
          address: '인천광역시 중구 공항동로2길 103 (운서동)',
          latitude: 37.478848,
          longitude: 126.4526141,
        },
        {
          address: '광주광역시 광산구 하남산단6번로 29 (오선동)',
          latitude: 35.2030056,
          longitude: 126.7990389,
        },
        {
          address: '인천광역시 서구 북항로 135 (원창동)',
          latitude: 37.5060548,
          longitude: 126.6330154,
        },
        {
          address: '인천광역시 중구 축항대로117번길 9',
          latitude: 37.4561373,
          longitude: 126.6097576,
        },
        {
          address: '대전광역시 동구 안골로28번길 30 (구도동)',
          latitude: 36.25997419999999,
          longitude: 127.474458,
        },
        {
          address: '부산광역시 서구 원양로 63 (암남동)',
          latitude: 35.0613173,
          longitude: 129.0088056,
        },
        {
          address: '제주특별자치도 서귀포시 대정읍 일주서로3000번길 155-22',
          latitude: 33.2585479,
          longitude: 126.2294658,
        },
        {
          address: '제주특별자치도 제주시 추자면 추자로495',
          latitude: 33.9406948,
          longitude: 126.3233384,
        },
        {
          address: '울산광역시 울주군 두서면 구량차리로 78',
          latitude: 35.6198219,
          longitude: 129.1415249,
        },
        {
          address:
            '서울특별시 성동구 아차산로13길 30, 성수물류센터 1동(성수동2가)',
          latitude: 37.5455111,
          longitude: 127.0618508,
        },
        {
          address: '인천광역시 중구 축항대로 271 (신흥동3가)',
          latitude: 37.4495454,
          longitude: 126.6260125,
        },
        {
          address: '인천광역시 중구 축항대로86번길 70 (항동7가)',
          latitude: 37.4510307,
          longitude: 126.6019963,
        },
        {
          address: '인천광역시 중구 서해대로94번길 98',
          latitude: 37.4321443,
          longitude: 126.6264323,
        },
        {
          address:
            '인천광역시 중구 축항대로296번길 125 (신흥동3가, (주)국보아암물류센터)',
          latitude: 37.454114,
          longitude: 126.6169335,
        },
        {
          address: '인천광역시 중구 축항대로 240',
          latitude: 37.44962659999999,
          longitude: 126.6221459,
        },
        {
          address: '인천광역시 서구 거첨로 295 (오류동, 한진해운경인터미널)',
          latitude: 37.56627599999999,
          longitude: 126.598156,
        },
        {
          address: '인천광역시 서구 정서진로 17 (오류동)',
          latitude: 37.5711136,
          longitude: 126.6704459,
        },
        {
          address: '인천광역시 서구 북항로 100 (원창동, (주)나무친구들)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address:
            '인천광역시 중구 축항대로290번길 164 (신흥동3가, 한중물류센터)',
          latitude: 37.4351523,
          longitude: 126.617808,
        },
        {
          address: '인천광역시 서구 북항로 201 (원창동)',
          latitude: 37.5019127,
          longitude: 126.6243171,
        },
        {
          address: '인천광역시 중구 축항대로291번길 30',
          latitude: 37.4506817,
          longitude: 126.628886,
        },
        {
          address: '인천광역시 중구 서해대로209번길 68 (항동7가)',
          latitude: 37.4506822,
          longitude: 126.6161785,
        },
        {
          address: '인천광역시 중구 서해대로93번길 42 (항동7가)',
          latitude: 37.4421995,
          longitude: 126.6121423,
        },
        {
          address: '광주광역시 광산구 용아로 559 (장덕동)',
          latitude: 35.1908222,
          longitude: 126.8013494,
        },
        {
          address: '부산광역시 서구 등대로 122-3 (남부민동)',
          latitude: 35.0846513,
          longitude: 129.0252172,
        },
        {
          address: '부산광역시 서구 원양로 90 (암남동)',
          latitude: 35.0694901,
          longitude: 129.0084265,
        },
        {
          address: '부산광역시 사하구 장평로71번길 10 (장림동)',
          latitude: 35.071828,
          longitude: 128.9720104,
        },
        {
          address: '부산광역시 동구 성남로 84 (범일동)',
          latitude: 35.1309023,
          longitude: 129.0582193,
        },
        {
          address: '부산광역시 사하구 감천항로 70 (구평동)',
          latitude: 35.0845614,
          longitude: 128.9944554,
        },
        {
          address: '부산광역시 중구 충장대로13번길 61 (중앙동4가)',
          latitude: 35.1107099,
          longitude: 129.0395021,
        },
        {
          address: '부산광역시 사하구 을숙도대로 685 (신평동)',
          latitude: 35.0857183,
          longitude: 128.980232,
        },
        {
          address: '부산광역시 사하구 다대로605번길 25 (다대동)',
          latitude: 35.0532353,
          longitude: 128.9724883,
        },
        {
          address: '부산광역시 사하구 장평로 24 (장림동)',
          latitude: 35.0853755,
          longitude: 128.9762048,
        },
        {
          address: '부산광역시 서구 충무대로 228 (남부민동)',
          latitude: 35.0868477,
          longitude: 129.0213065,
        },
        {
          address: '부산광역시 사하구 감천항로 45 (감천동)',
          latitude: 35.08358080000001,
          longitude: 128.9982727,
        },
        {
          address: '부산광역시 사하구 감천항로 240 (구평동)',
          latitude: 35.0713766,
          longitude: 128.9899305,
        },
        {
          address: '부산광역시 사하구 감천항로 251 (구평동)',
          latitude: 35.0704694,
          longitude: 128.9907441,
        },
        {
          address: '부산광역시 강서구 녹산산단232로 16 (송정동)',
          latitude: 35.087618,
          longitude: 128.8422258,
        },
        {
          address: '부산광역시 사하구 다대로 370 (장림동)',
          latitude: 35.0756228,
          longitude: 128.9768481,
        },
        {
          address: '부산광역시 사하구 장림로 196 (장림동)',
          latitude: 35.081983,
          longitude: 128.9700177,
        },
        {
          address: '부산광역시 서구 충무대로 214 (남부민동)',
          latitude: 35.0869959,
          longitude: 129.0220104,
        },
        {
          address: '부산광역시 영도구 해양로57번길 23 (청학동)',
          latitude: 35.0885279,
          longitude: 129.0683613,
        },
        {
          address: '부산광역시 사하구 구평로 3 (구평동)',
          latitude: 35.0818702,
          longitude: 128.9877355,
        },
        {
          address: '대전광역시 대덕구 문평동로 41-16 (문평동)',
          latitude: 36.4475336,
          longitude: 127.4004366,
        },
        {
          address: '대전광역시 대덕구 평촌2길 59 (평촌동, 시설장비사무소)',
          latitude: 36.430181,
          longitude: 127.4349013,
        },
        {
          address: '부산광역시 사하구 서포로 36 (구평동)',
          latitude: 35.0819489,
          longitude: 128.9864187,
        },
        {
          address: '부산광역시 사하구 두송로 265 (구평동)',
          latitude: 35.0750058,
          longitude: 128.9895785,
        },
        {
          address: '부산광역시 사하구 신산로 190 (신평동)',
          latitude: 35.0891579,
          longitude: 128.9758876,
        },
        {
          address: '부산광역시 서구 충무대로 146 (남부민동)',
          latitude: 35.0876282,
          longitude: 129.0225019,
        },
        {
          address: '부산광역시 사하구 감천항로 60 (구평동)',
          latitude: 35.08429510000001,
          longitude: 128.996369,
        },
        {
          address: '부산광역시 영도구 해양로 109 (청학동)',
          latitude: 35.0955459,
          longitude: 129.067282,
        },
        {
          address: '부산광역시 강서구 녹산산단262로14번길 47-9 (송정동)',
          latitude: 35.0868044,
          longitude: 128.841259,
        },
        {
          address: '부산광역시 남구 우암로 183 (우암동)',
          latitude: 35.1260652,
          longitude: 129.0718898,
        },
        {
          address: '부산광역시 강서구 녹산산단362로 35 (송정동)',
          latitude: 35.0858816,
          longitude: 128.8575631,
        },
        {
          address: '부산광역시 사하구 다대동로6번길 1 (다대동)',
          latitude: 35.0540888,
          longitude: 128.9718308,
        },
        {
          address: '부산광역시 서구 원양로 244 (암남동)',
          latitude: 35.0694901,
          longitude: 129.0084265,
        },
        {
          address: '부산광역시 영도구 해양로57번길 12 (청학동)',
          latitude: 35.0962781,
          longitude: 129.0638675,
        },
        {
          address: '부산광역시 사하구 다대로 359 (장림동)',
          latitude: 35.0765049,
          longitude: 128.974988,
        },
        {
          address: '부산광역시 강서구 녹산산업중로 161 (송정동)',
          latitude: 35.0940318,
          longitude: 128.836456,
        },
        {
          address: '부산광역시 사하구 다대로 605 (다대동)',
          latitude: 35.052605,
          longitude: 128.9712794,
        },
        {
          address: '부산광역시 사하구 장평로76번길 22 (장림동)',
          latitude: 35.0733523,
          longitude: 128.9740339,
        },
        {
          address: '부산광역시 남구 신선로 379 (용당동)',
          latitude: 35.1194944,
          longitude: 129.0969373,
        },
        {
          address: '부산광역시 남구 신선로 157 (감만동, 감만통운창고)',
          latitude: 35.1111928,
          longitude: 129.0812659,
        },
        {
          address: '광주광역시 북구 양산로 192, 1층 (일곡동)',
          latitude: 35.2094174,
          longitude: 126.8809009,
        },
        {
          address: '경기도 용인시 처인구 백암면 한택로88번길 260, 두일냉장',
          latitude: 37.11243150000001,
          longitude: 127.4227725,
        },
        {
          address: '경기도 의정부시 호암로 212 (호원동)',
          latitude: 37.7195527,
          longitude: 127.0463897,
        },
        {
          address: '강원도 동해시 일출로 92-26, 대한냉동 7층 (묵호진동)',
          latitude: 37.5499672,
          longitude: 129.1167892,
        },
        {
          address: '대구광역시 북구 신천동로 960 (산격동)',
          latitude: 35.9023639,
          longitude: 128.5941563,
        },
        {
          address: '경기도 안성시 미양면 강덕1길 161, 농협안성농식품물류센터',
          latitude: 36.960967,
          longitude: 127.2258,
        },
        {
          address: '경상남도 밀양시 부북면 점필재로 229',
          latitude: 35.4864449,
          longitude: 128.7316421,
        },
        {
          address: '경기도 파주시 광탄면 부흥로275번길 104',
          latitude: 37.8052777,
          longitude: 126.8774875,
        },
        {
          address: '충청북도 청주시 청원구 오창읍 오산가좌로 654',
          latitude: 36.717232,
          longitude: 127.3666272,
        },
        {
          address: '경상북도 상주시 발산로 135 (초산동)',
          latitude: 36.4566306,
          longitude: 128.1764668,
        },
        {
          address: '충청남도 아산시 배방읍 구령길52번길 37',
          latitude: 36.7798018,
          longitude: 127.0523299,
        },
        {
          address: '강원도 원주시 호저면 원문로 525-23',
          latitude: 37.35922840000001,
          longitude: 127.9066272,
        },
        {
          address: '경기도 이천시 마장면 이장로 339 (외7필지)',
          latitude: 37.2802583,
          longitude: 127.3922578,
        },
        {
          address:
            '경기도 수원시 영통구 신원로 192 (매탄동, (주)우경인터내셔널)',
          latitude: 37.2526892,
          longitude: 127.060457,
        },
        {
          address: '경기도 이천시 호법면 안평로 201-60',
          latitude: 37.2398325,
          longitude: 127.4214989,
        },
        {
          address: '제주특별자치도 제주시 도공로 25-4 (도두일동)',
          latitude: 33.50430250000001,
          longitude: 126.4662464,
        },
        {
          address: '인천광역시 중구 운서동 2851 화물터미널A',
          latitude: 37.4620736,
          longitude: 126.4671635,
        },
        {
          address: '경기도 용인시 기흥구 중부대로684번길 14 (상하동)',
          latitude: 37.2645994,
          longitude: 127.1348948,
        },
        {
          address: '충청북도 청주시 흥덕구 산단로 88 (송정동)',
          latitude: 36.6426465,
          longitude: 127.4493216,
        },
        {
          address: '경상북도 칠곡군 지천면 금호자원길 40',
          latitude: 35.9407712,
          longitude: 128.4421384,
        },
        {
          address: '경상북도 경산시 진량읍 대구대로 513',
          latitude: 35.8811716,
          longitude: 128.85259,
        },
        {
          address: '경기도 김포시 대곶면 대곶북로 121-2',
          latitude: 37.6589357,
          longitude: 126.5878445,
        },
        {
          address: '경기도 김포시 대곶면 초원지리 601-1',
          latitude: 37.6575664,
          longitude: 126.5883135,
        },
        {
          address: '경기도 김포시 대곶면 초원지리 660-1   ',
          latitude: 37.6593353,
          longitude: 126.5966677,
        },
        {
          address: '경기도 파주시 법원읍 사임당로 572-39',
          latitude: 37.8542638,
          longitude: 126.8466495,
        },
        {
          address: '경기도 이천시 신둔면 경충대로 3035',
          latitude: 37.2976697,
          longitude: 127.4085045,
        },
        {
          address: '경상남도 양산시 어곡공단2길 6 (어곡동)',
          latitude: 35.36994,
          longitude: 129.0143116,
        },
        {
          address: '대전광역시 대덕구 대화로 36 (대화동)',
          latitude: 36.3679243,
          longitude: 127.4156195,
        },
        {
          address: '부산광역시 서구 원양로 295 (암남동)',
          latitude: 35.0777666,
          longitude: 129.0051724,
        },
        {
          address: '경기도 용인시 기흥구 용구대로2360번길 13 (마북동)',
          latitude: 37.2983517,
          longitude: 127.1102523,
        },
        {
          address: '인천광역시 서구 가좌로96번길 11 (가좌동, 효원실업공장)',
          latitude: 37.4806947,
          longitude: 126.6861407,
        },
        {
          address: '경기도 용인시 기흥구 동백죽전대로 191 (중동)',
          latitude: 37.2781868,
          longitude: 127.1560945,
        },
        {
          address: '부산광역시 사하구 감천동 344-2   ',
          latitude: 35.07887850000001,
          longitude: 129.0051181,
        },
        {
          address: '서울특별시 강서구 하늘길 112 (공항동)',
          latitude: 37.555525,
          longitude: 126.8067017,
        },
        {
          address: '경기도 안성시 미양면 개정길 98-52',
          latitude: 36.9523916,
          longitude: 127.1939078,
        },
        {
          address: '전라북도 군산시 서수면 동군산로 1075-60',
          latitude: 36.01008789999999,
          longitude: 126.8736704,
        },
        {
          address: '충청남도 계룡시 두마면 제1산단로 26-21',
          latitude: 36.2493531,
          longitude: 127.2693781,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로57번길 15',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '경기도 광주시 오포읍 세피내길 104',
          latitude: 37.3767217,
          longitude: 127.2439555,
        },
        {
          address: '경기도 광주시 초월읍 평촌길 12-187',
          latitude: 37.3606378,
          longitude: 127.3198801,
        },
        {
          address: '전라북도 군산시 개사길 18 (신관동)',
          latitude: 35.936193,
          longitude: 126.6753214,
        },
        {
          address: '경기도 여주시 웅골로 161 (가업동)',
          latitude: 37.2648553,
          longitude: 127.6292143,
        },
        {
          address: '전라북도 익산시 낭산면 낭산중앙로 227 ((유)민들래)',
          latitude: 36.0633565,
          longitude: 127.0041468,
        },
        {
          address: '대구광역시 달서구 성서공단북로 104 (호산동)',
          latitude: 35.8434844,
          longitude: 128.4842907,
        },
        {
          address: '전라북도 군산시 산북동 3609',
          latitude: 35.9618503,
          longitude: 126.6793448,
        },
        {
          address: '경상남도 양산시 어곡공단6길 16-6(3층 어곡동)',
          latitude: 35.4161074,
          longitude: 129.1486118,
        },
        {
          address: '경상남도 김해시 한림면 장방로 258(가,나,다,라동)',
          latitude: 35.3292876,
          longitude: 128.7802799,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리1로93번길 14(1층)',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address: '경상남도 창원시 진해구 남문동 1190 지디씨복합물류센터 B동',
          latitude: 35.1074146,
          longitude: 128.7602218,
        },
        {
          address: '경상북도 칠곡군 왜관읍 아곡8길 31',
          latitude: 35.989043,
          longitude: 128.3977049,
        },
        {
          address: '경상북도 칠곡군 왜관읍 공단로13길 6-15(2층)',
          latitude: 35.9677761,
          longitude: 128.4141941,
        },
        {
          address: '경기도 광주시 순암로 395-7 (중대동)',
          latitude: 37.3962875,
          longitude: 127.2314834,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 225, 77동',
          latitude: 35.3113072,
          longitude: 129.0163436,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로58번길 107',
          latitude: 37.5932469,
          longitude: 126.7885362,
        },
        {
          address: '경기도 광주시 초월읍 지월로 88-18',
          latitude: 37.4138367,
          longitude: 127.2999397,
        },
        {
          address: '경기도 용인시 기흥구 동탄기흥로 741 (고매동, 유상냉장)',
          latitude: 37.2247567,
          longitude: 127.1008389,
        },
        {
          address: '대전광역시 대덕구 동춘당로3번길 40, 1층 (송촌동)',
          latitude: 36.3589387,
          longitude: 127.4458582,
        },
        {
          address: '경상남도 김해시 유하로 177 (유하동)',
          latitude: 35.0672108,
          longitude: 127.7512687,
        },
        {
          address: '경기도 연천군 미산면 청정로918번길 123',
          latitude: 38.0403573,
          longitude: 126.9840071,
        },
        {
          address: '전라남도 여수시 망양로 514-19 (오천동)',
          latitude: 34.7917813,
          longitude: 127.7546532,
        },
        {
          address: '경기도 의정부시 장곡로364번길 9 (신곡동,지상1층)',
          latitude: 37.7362006,
          longitude: 127.0548645,
        },
        {
          address: '충청남도 천안시 서북구 입장면 위례성로 1950',
          latitude: 36.9128941,
          longitude: 127.2465828,
        },
        {
          address: '경기도 용인시 처인구 포곡읍 금어로 530',
          latitude: 37.2793973,
          longitude: 127.2478642,
        },
        {
          address: '강원도 강릉시 강릉대로 481 (포남동)',
          latitude: 37.7810285,
          longitude: 128.906508,
        },
        {
          address: '경상북도 경주시 천북면 천북산단로1길 74-42',
          latitude: 35.9377739,
          longitude: 129.2730739,
        },
        {
          address: '경기도 광주시 곤지암읍 경충대로498번길 131',
          latitude: 37.3395681,
          longitude: 127.3628709,
        },
        {
          address:
            '부산광역시 강서구 상덕로97번길 85, 외 1필지(강동동 상덕로 97번길 81-1) (강동동)',
          latitude: 35.1952609,
          longitude: 128.9129625,
        },
        {
          address: '부산광역시 사상구 모덕로102번길 41 (덕포동)',
          latitude: 35.178967,
          longitude: 128.9870064,
        },
        {
          address:
            '경기도 군포시 번영로 82, M동 1층 (부곡동, 한국복합물류(주))',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경상북도 칠곡군 왜관읍 삼청5길 50-22',
          latitude: 35.9795177,
          longitude: 128.4332608,
        },
        {
          address: '경기도 용인시 처인구 이동면 백옥대로 547',
          latitude: 37.1866564,
          longitude: 127.2043476,
        },
        {
          address: '경기도 평택시 진위면 마산8로 10, 진위3산업단지 B2-1',
          latitude: 37.0885825,
          longitude: 127.096829,
        },
        {
          address: '경기도 이천시 부발읍 경충대로 2330-91',
          latitude: 37.2685539,
          longitude: 127.4674744,
        },
        {
          address: '경기도 용인시 처인구 양지면 용곡로 130',
          latitude: 37.2275387,
          longitude: 127.2814716,
        },
        {
          address: '전라북도 김제시 봉황공단1길 107 (오정동)',
          latitude: 35.7690612,
          longitude: 126.9174589,
        },
        {
          address: '경기도 용인시 기흥구 하갈로 141-17 (상갈동)',
          latitude: 37.25978509999999,
          longitude: 127.1003536,
        },
        {
          address: '전라북도 정읍시 정읍남로 1278 (시기동)',
          latitude: 35.5564058,
          longitude: 126.8434922,
        },
        {
          address: '경기도 용인시 기흥구 기곡로 22 (하갈동)',
          latitude: 37.2496632,
          longitude: 127.0988744,
        },
        {
          address: '인천광역시 서구 북항로45번길 64 (석남동, (주)우드뱅크)',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '경기도 남양주시 오남읍 진건오남로 825',
          latitude: 37.6894412,
          longitude: 127.2063037,
        },
        {
          address: '서울특별시 성동구 고산자로22길 11, 지하층 (마장동)',
          latitude: 37.5691645,
          longitude: 127.0385989,
        },
        {
          address: '강원도 강릉시 모산로169번길 20 (담산동)',
          latitude: 37.7262329,
          longitude: 128.900322,
        },
        {
          address: '경상남도 창녕군 대지면 경남대로 4897-66',
          latitude: 35.5582917,
          longitude: 128.4807338,
        },
        {
          address: '경기도 고양시 덕양구 통일로 1028-26 (관산동)',
          latitude: 37.7041574,
          longitude: 126.8699307,
        },
        {
          address: '전라북도 김제시 황산면 남산로 326',
          latitude: 35.7787147,
          longitude: 126.9721546,
        },
        {
          address: '경기도 광주시 경충대로 1425 (쌍령동)',
          latitude: 37.4002394,
          longitude: 127.2708758,
        },
        {
          address: '경상북도 칠곡군 지천면 금송로 339',
          latitude: 35.9697369,
          longitude: 128.4516861,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 257',
          latitude: 36.9698405,
          longitude: 126.8412498,
        },
        {
          address: '충청북도 제천시 한방엑스포로 104 (왕암동)',
          latitude: 37.1448563,
          longitude: 128.1570982,
        },
        {
          address: '경상북도 구미시 장천면 장군로 339-4',
          latitude: 36.1241378,
          longitude: 128.5307309,
        },
        {
          address: '제주특별자치도 제주시 조천읍 신와로 74',
          latitude: 33.5179501,
          longitude: 126.6191211,
        },
        {
          address: '충청북도 음성군 삼성면 청용로 293',
          latitude: 37.0150907,
          longitude: 127.4608244,
        },
        {
          address: '경기도 용인시 처인구 남사면 경기동로 386-12',
          latitude: 37.1380249,
          longitude: 127.1664016,
        },
        {
          address: '경기도 용인시 처인구 양지면 중부대로 2605',
          latitude: 37.2476183,
          longitude: 127.3221799,
        },
        {
          address: '경기도 용인시 처인구 남사면 당하로 154',
          latitude: 37.1458663,
          longitude: 127.1481277,
        },
        {
          address: '경기도 용인시 처인구 남사면 경기동로 263',
          latitude: 37.1405284,
          longitude: 127.1542268,
        },
        {
          address: '경상남도 양산시 어곡공단1길 134 (어곡동)',
          latitude: 35.3820459,
          longitude: 129.0173401,
        },
        {
          address: '경상남도 양산시 어곡공단6길 16-55 (어곡동)',
          latitude: 35.4161074,
          longitude: 129.1486118,
        },
        {
          address: '경기도 안산시 단원구 원시로 216 (원시동)',
          latitude: 37.316379,
          longitude: 126.7835544,
        },
        {
          address: '경기도 용인시 기흥구 하갈로15번길 34, 아신 (보라동)',
          latitude: 37.2498257,
          longitude: 127.1028829,
        },
        {
          address: '강원도 강릉시 박월동 442-1',
          latitude: 37.7314988,
          longitude: 128.9146722,
        },
        {
          address: '경기도 용인시 처인구 이동읍 문화로 137-9, 1층',
          latitude: 37.1358874,
          longitude: 127.2144195,
        },
        {
          address: '경기도 광주시 초월읍 경충대로 1146',
          latitude: 37.3794968,
          longitude: 127.2966547,
        },
        {
          address: '인천광역시 서구 건지로 84 (가좌동)',
          latitude: 37.498325,
          longitude: 126.6508105,
        },
        {
          address: '세종특별자치시 부강면 연청로 745-46',
          latitude: 36.5439377,
          longitude: 127.3567475,
        },
        {
          address: '경기도 용인시 처인구 남사면 원암로 481',
          latitude: 37.1025426,
          longitude: 127.1745262,
        },
        {
          address: '전라남도 나주시 노안면 유곡로 255',
          latitude: 35.0755436,
          longitude: 126.7328266,
        },
        {
          address: '경기도 포천시 소흘읍 무림길 63',
          latitude: 37.7708141,
          longitude: 127.1315861,
        },
        {
          address: '경기도 광주시 중앙로346번길 25 (송정동)',
          latitude: 37.429574,
          longitude: 127.2624406,
        },
        {
          address: '충청북도 음성군 맹동면 덕금로 56',
          latitude: 36.9188592,
          longitude: 127.5293167,
        },
        {
          address: '경기도 안성시 대덕면 서동대로 4672-32',
          latitude: 37.0108552,
          longitude: 127.2239919,
        },
        {
          address:
            '제주특별자치도 서귀포시 토평공단로155번길 45, 1동 1층 (토평동)',
          latitude: 33.2931783,
          longitude: 126.5797581,
        },
        {
          address:
            '서울특별시 성동구 마장로35길 68, 지하1,2층 (마장동, 마축일축산물시장)',
          latitude: 37.5706431,
          longitude: 127.0412606,
        },
        {
          address:
            '충청북도 진천군 덕산읍 산수산단3로 66, BGF리테일 중앙물류센터',
          latitude: 36.89151950000001,
          longitude: 127.4847618,
        },
        {
          address: '경기도 광주시 초월읍 경충대로 1337-21, B3층',
          latitude: 37.392847,
          longitude: 127.2795433,
        },
        {
          address: '경기도 화성시 팔탄면 시청로721번길 25, 중부로지스(주)',
          latitude: 37.1752752,
          longitude: 126.8746572,
        },
        {
          address: '부산광역시 사하구 신평동 산 41-7   ',
          latitude: 35.0857097,
          longitude: 128.9828506,
        },
        {
          address: '경상남도 창녕군 남지읍 남지중앙1길 35-7',
          latitude: 35.3918064,
          longitude: 128.4728,
        },
        {
          address: '부산광역시 서구 원양로 73 (암남동)',
          latitude: 35.0622927,
          longitude: 129.0099917,
        },
        {
          address: '경기도 김포시 승가로58번길 107 (풍무동)',
          latitude: 37.6103711,
          longitude: 126.716975,
        },
        {
          address: '경상북도 김천시 공단1길 26-34 (대광동)',
          latitude: 36.1386908,
          longitude: 128.1458981,
        },
        {
          address: '경기도 용인시 처인구 양지면 주북로 333-8,  동',
          latitude: 37.2474602,
          longitude: 127.2690808,
        },
        {
          address: '경기도 부천시 경인로 135 (송내동)',
          latitude: 37.4842734,
          longitude: 126.7704926,
        },
        {
          address: '경기도 평택시 서탄면 수월암4길 14',
          latitude: 37.1322745,
          longitude: 127.027269,
        },
        {
          address: '대전광역시 대덕구 방두말3길 20 (평촌동)',
          latitude: 36.4300136,
          longitude: 127.428532,
        },
        {
          address: '경기도 이천시 율면 고당로 170',
          latitude: 37.0972902,
          longitude: 127.5489305,
        },
        {
          address: '경기도 용인시 처인구 모현읍 곡현로 506-2, 에스알냉장',
          latitude: 37.3292563,
          longitude: 127.2218904,
        },
        {
          address: '경기도 오산시 오산로 149, 롯데오산물류센터 809호 (오산동)',
          latitude: 37.1571702,
          longitude: 127.0938308,
        },
        {
          address:
            '인천광역시 중구 축항대로290번길 121, 삼양사인천공장 (신흥동3가)',
          latitude: 37.4370074,
          longitude: 126.6217298,
        },
        {
          address: '부산광역시 사상구 낙동대로1016번길 17 (감전동)',
          latitude: 35.1511083,
          longitude: 128.9734429,
        },
        {
          address: '충청남도 천안시 동남구 풍세면 풍세산단로 33',
          latitude: 36.727636,
          longitude: 127.101216,
        },
        {
          address: '광주광역시 북구 하서로176번길 22 (양산동)',
          latitude: 35.1926212,
          longitude: 126.8782972,
        },
        {
          address: '전라북도 김제시 백구면 번영로 2138',
          latitude: 35.9082594,
          longitude: 126.9351085,
        },
        {
          address: '부산광역시 해운대구 좌동로91번길 49 (좌동)',
          latitude: 35.1742129,
          longitude: 129.1734982,
        },
        {
          address: '경상북도 포항시 남구 연일읍 동해대로 345',
          latitude: 36.0222703,
          longitude: 129.2880909,
        },
        {
          address: '광주광역시 서구 회재로 711-1 (매월동)',
          latitude: 35.1119884,
          longitude: 126.8479548,
        },
        {
          address: '부산광역시 금정구 금단로 75 (구서동)',
          latitude: 35.2561506,
          longitude: 129.0944491,
        },
        {
          address: '인천광역시 남동구 경인로 539 (간석동,1층)',
          latitude: 37.4622923,
          longitude: 126.6984468,
        },
        {
          address: '경기도 이천시 백사면 원적로618번길 285',
          latitude: 37.3209804,
          longitude: 127.4621504,
        },
        {
          address: '부산광역시 사상구 장인로 3 (감전동, 샤니)',
          latitude: 35.1447234,
          longitude: 128.9703468,
        },
        {
          address:
            '서울특별시 강서구 하늘길 210, 구화물청사동 1층 (공항동, 한국항공화물청사)',
          latitude: 37.553386,
          longitude: 126.811351,
        },
        {
          address: '광주광역시 광산구 하남산단천변우로 14 (도천동)',
          latitude: 35.2072349,
          longitude: 126.8136752,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리길 196(1층)',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address: '경상남도 김해시 진례면 고모로526번길 54(가동)',
          latitude: 35.2681569,
          longitude: 128.7801714,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 351(남문동)',
          latitude: 35.1047399,
          longitude: 128.7604762,
        },
        {
          address: '경상남도 창원시 마산회원구 봉암공단8길 5(지상2층 봉암동)',
          latitude: 35.214216,
          longitude: 128.5995583,
        },
        {
          address: '경상북도 칠곡군 왜관읍 현대로 93',
          latitude: 35.9886599,
          longitude: 128.4374286,
        },
        {
          address: '경상북도 칠곡군 지천면 금호로1길 2-13',
          latitude: 35.9577579,
          longitude: 128.4451801,
        },
        {
          address: '충청북도 음성군 맹동면 맹동산단1길 47-23(나, 바동)',
          latitude: 36.9198599,
          longitude: 127.5646368,
        },
        {
          address: '강원도 강릉시 사천면 손맞이길 132-7',
          latitude: 37.84131,
          longitude: 128.8695206,
        },
        {
          address: '경기도 여주시 가남읍 여주남로 532(A동 1층)',
          latitude: 37.2476515,
          longitude: 127.5919878,
        },
        {
          address: '경기도 광주시 중앙로346번길 25(송정동, 일부)',
          latitude: 37.429574,
          longitude: 127.2624406,
        },
        {
          address: '경기도 광주시 도척면 국사봉로 97-27',
          latitude: 37.3196233,
          longitude: 127.3443835,
        },
        {
          address: '경기도 광주시 도척면 도척로 401-82(1층)',
          latitude: 37.3137399,
          longitude: 127.3406394,
        },
        {
          address: '경기도 광주시 오포읍 오포로 614(1,2층)',
          latitude: 37.3514244,
          longitude: 127.21501,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로 37(1층)',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '경기도 안성시 죽산면 송문주로 337(1동 1~4층)',
          latitude: 37.0785148,
          longitude: 127.4224058,
        },
        {
          address:
            '경기도 안성시 미양면 강덕1길 161(안성농식품물류센터1동 지하1층)',
          latitude: 36.9545201,
          longitude: 127.2268191,
        },
        {
          address: '경기도 이천시 경충대로 2994-33(사음동)',
          latitude: 37.2934285,
          longitude: 127.4161802,
        },
        {
          address:
            '경기도 용인시 처인구 백암면 한택로88번길 260(A동 1층 116,117호)',
          latitude: 37.1123989,
          longitude: 127.4228421,
        },
        {
          address: '경기도 용인시 처인구 백암면 청계로67번길 30(1층일부)',
          latitude: 37.1592941,
          longitude: 127.3930001,
        },
        {
          address: '경기도 용인시 처인구 이동읍 덕성로46번길 53',
          latitude: 37.171512,
          longitude: 127.1992106,
        },
        {
          address: '경기도 용인시 처인구 양지면 식송로 18(2층)',
          latitude: 37.2325952,
          longitude: 127.2340902,
        },
        {
          address: '경상남도 밀양시 상동면 상동로 160',
          latitude: 35.5261477,
          longitude: 128.7816957,
        },
        {
          address: '경기도 김포시 양촌읍 유현삭시로 377(가,나동)',
          latitude: 37.6443493,
          longitude: 126.6136436,
        },
        {
          address: '경기도 안성시 일죽면 사실로 161-57(A-1동)',
          latitude: 37.1275444,
          longitude: 127.4312769,
        },
        {
          address: '경기도 안성시 양성면 양성로 376-106(A동 지1층)',
          latitude: 37.08593820000001,
          longitude: 127.2120963,
        },
        {
          address: '경기도 안성시 일죽면 사실로 161-57(3층)',
          latitude: 37.1275444,
          longitude: 127.4312769,
        },
        {
          address: '경기도 안성시 공단1로 80-6(신건지동)',
          latitude: 37.0148555,
          longitude: 127.2455348,
        },
        {
          address: '경기도 안성시 죽산면 송문주로 335',
          latitude: 37.0785148,
          longitude: 127.4224058,
        },
        {
          address: '경기도 이천시 백사면 원적로618번길 285(1층)',
          latitude: 37.3209804,
          longitude: 127.4621504,
        },
        {
          address: '경기도 용인시 기흥구 기곡로 29-9(지하1층 하갈동)',
          latitude: 37.251165,
          longitude: 127.1015078,
        },
        {
          address:
            '경기도 용인시 기흥구 원고매로 12-1(대한펄프기흥물류센타 A,C동 1층 고매동)',
          latitude: 37.2213595,
          longitude: 127.1059078,
        },
        {
          address:
            '경기도 용인시 기흥구 용구대로 1706(미립물산 물류창고 지하2, 3층 공세동)',
          latitude: 37.2357483,
          longitude: 127.1357825,
        },
        {
          address:
            '경기도 오산시 동부대로 468-31(더본로지스틱스주냉동창고 지하1층,지하2층일부 원동)',
          latitude: 37.1444449,
          longitude: 127.0823359,
        },
        {
          address: '경기도 남양주시 오남읍 양지로대대울1길 15-45(2층)',
          latitude: 37.7013916,
          longitude: 127.1873668,
        },
        {
          address:
            '경기도 평택시 오성면 오성산단1로 131(한국초저온 평택오성냉동물류단지 A,B동)',
          latitude: 37.028531,
          longitude: 126.948972,
        },
        {
          address: '경기도 평택시 포승읍 포승산단로40번길 30(가동 1층)',
          latitude: 36.9703049,
          longitude: 126.8622795,
        },
        {
          address: '경기도 수원시 권선구 오목천로132번길 55(3층 고색동)',
          latitude: 37.2422787,
          longitude: 126.9757933,
        },
        {
          address: '부산광역시 사하구 다대동로6번길 17(101호 다대동)',
          latitude: 35.0534984,
          longitude: 128.9718304,
        },
        {
          address: '부산광역시 사하구 장림로 86(장림동)',
          latitude: 35.0805266,
          longitude: 128.9601239,
        },
        {
          address: '부산광역시 서구 원양로 90(암남동)',
          latitude: 35.0694901,
          longitude: 129.0084265,
        },
        {
          address:
            '서울특별시 송파구 송파대로 55(서울복합물류 B동 지하1층 장지동)',
          latitude: 37.4746178,
          longitude: 127.1260071,
        },
        {
          address: '세종특별자치시 부강면 갈산산수로 281-1(1동)',
          latitude: 36.5558311,
          longitude: 127.3552637,
        },
        {
          address: '제주특별자치도 서귀포시 토평공단로155번길 45(1층 토평동)',
          latitude: 33.2931783,
          longitude: 126.5797581,
        },
        {
          address: '경기도 용인시 처인구 양지면 식송로 18(2층 일부)',
          latitude: 37.2627303,
          longitude: 127.3321113,
        },
        {
          address: '경기도 용인시 처인구 양지면 식송로 18(1층일부)',
          latitude: 37.2627303,
          longitude: 127.3321113,
        },
        {
          address: '경기도 군포시 번영로 82(P동 1층 부곡동, 한국복합물류센터)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경기도 광주시 초월읍 산수로 642-27(1,2층)',
          latitude: 37.3842189,
          longitude: 127.3135318,
        },
        {
          address:
            '경기도 용인시 처인구 이동읍 남북대로 2549(두웰로지스물류센터 지층)',
          latitude: 37.2523413,
          longitude: 127.2139075,
        },
        {
          address: '경기도 화성시 서신면 바다뜰길 8-9(1층)',
          latitude: 37.1708123,
          longitude: 126.6984865,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로182번길 23(1,2층)',
          latitude: 37.6149265,
          longitude: 126.7250269,
        },
        {
          address: '경기도 이천시 율면 고당로 170(A동)',
          latitude: 37.0972902,
          longitude: 127.5489305,
        },
        {
          address: '경기도 이천시 마장면 덕평로 816-38(지하2층)',
          latitude: 37.2313471,
          longitude: 127.3667961,
        },
        {
          address: '경기도 이천시 마장면 이장로 115-21(3층)',
          latitude: 37.2634475,
          longitude: 127.3770441,
        },
        {
          address: '경기도 용인시 처인구 원삼면 미평로 84(106.107호)',
          latitude: 37.183693,
          longitude: 127.3271349,
        },
        {
          address: '경기도 용인시 처인구 남사면 당하로 107',
          latitude: 37.1461035,
          longitude: 127.1537099,
        },
        {
          address:
            '경기도 화성시 동탄산단3길 20-5(주채과원 A동 2층 일부호 방교동)',
          latitude: 37.1769687,
          longitude: 127.0924892,
        },
        {
          address: '경기도 용인시 처인구 동부로 169(2층 운학동)',
          latitude: 37.2030361,
          longitude: 127.2538316,
        },
        {
          address: '경기도 오산시 오산로 149(1층 오산동, 오산물류센터)',
          latitude: 37.1401768,
          longitude: 127.0672571,
        },
        {
          address: '경기도 평택시 삼봉로 36(1,2층 독곡동)',
          latitude: 37.0896243,
          longitude: 127.0678986,
        },
        {
          address: '경기도 안양시 만안구 덕천로72번길 85(지상1층 안양동)',
          latitude: 37.3885861,
          longitude: 126.9396141,
        },
        {
          address: '인천광역시 부평구 가좌로84번길 59(십정동, 1층 일부)',
          latitude: 37.4768338,
          longitude: 126.6893818,
        },
        {
          address: '인천광역시 중구 축항대로296번길 172(신흥동3가, 1층)',
          latitude: 37.4333845,
          longitude: 126.6228222,
        },
        {
          address: '부산광역시 서구 등대로 122(1층 남부민동)',
          latitude: 35.0850288,
          longitude: 129.025665,
        },
        {
          address: '세종특별자치시 연서면 아홉거리길 92(1·2·3층)',
          latitude: 36.5937681,
          longitude: 127.2831075,
        },
        {
          address:
            '경상남도 양산시 물금읍 제방로 225(1층 101,104호 양산ICD물류센터6단지 한진물류창고)',
          latitude: 35.3091009,
          longitude: 129.0148416,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27(1층 306호 한국복합물류)',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '경상남도 김해시 분성로583번길 32(삼방동)',
          latitude: 35.2394881,
          longitude: 128.9108683,
        },
        {
          address: '경상남도 창원시 진해구 신항7로 63(1~5층층 남문동)',
          latitude: 35.1074146,
          longitude: 128.7602218,
        },
        {
          address:
            '충청북도 청주시 서원구 현도면 죽암도원로 12-40(지하1층~지상3층)',
          latitude: 36.6424341,
          longitude: 127.4890319,
        },
        {
          address: '충청북도 청주시 서원구 현도면 죽암도원로 70(1층)',
          latitude: 36.6424341,
          longitude: 127.4890319,
        },
        {
          address: '경기도 시흥시 협력로 280(1-2층 정왕동)',
          latitude: 37.3506293,
          longitude: 126.716393,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-129(물류센터 7동)',
          latitude: 36.9391405,
          longitude: 126.8729559,
        },
        {
          address: '경기도 평택시 서탄면 발안로 1084(1층)',
          latitude: 37.1314656,
          longitude: 127.020951,
        },
        {
          address: '경기도 평택시 진위면 경기대로 1952(1동)',
          latitude: 37.11635040000001,
          longitude: 127.0667587,
        },
        {
          address: '경기도 평택시 산단로 263(가동 지하4층 칠괴동)',
          latitude: 37.0343916,
          longitude: 127.0955402,
        },
        {
          address: '경기도 평택시 산단로 263(지하4층 칠괴동)',
          latitude: 37.0343916,
          longitude: 127.0955402,
        },
        {
          address: '광주광역시 광산구 하남산단5번로 46(1, 2동 장덕동)',
          latitude: 35.190283,
          longitude: 126.8091479,
        },
        {
          address:
            '인천광역시 중구 공항동로193번길 90(1층 18호 운서동, 인천항공화물터미널A)',
          latitude: 37.4621507,
          longitude: 126.4672416,
        },
        {
          address: '경상남도 양산시 어곡공단6길 16-55(1층 어곡동)',
          latitude: 35.4161074,
          longitude: 129.1486118,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리로 100(2동)',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address: '경상남도 김해시 진영읍 본산2로 29(B동 1층)',
          latitude: 35.3116847,
          longitude: 128.7494451,
        },
        {
          address: '경상남도 김해시 상동면 상동로 724(3층)',
          latitude: 35.3147855,
          longitude: 128.9458071,
        },
        {
          address: '경상북도 칠곡군 지천면 금호로 356',
          latitude: 35.9478447,
          longitude: 128.4444734,
        },
        {
          address: '전라남도 담양군 대덕면 창평현로 1175',
          latitude: 35.2577395,
          longitude: 127.0579519,
        },
        {
          address: '충청남도 서천군 장항읍 장산로 315',
          latitude: 36.0083625,
          longitude: 126.695079,
        },
        {
          address: '충청남도 천안시 서북구 입장면 용정도하길 215-19(1층)',
          latitude: 36.93039,
          longitude: 127.1855515,
        },
        {
          address: '충청북도 음성군 감곡면 사곡길 33',
          latitude: 37.1117273,
          longitude: 127.6753777,
        },
        {
          address: '충청북도 청주시 흥덕구 산단로 88(송정동)',
          latitude: 36.6426465,
          longitude: 127.4493216,
        },
        {
          address: '경기도 화성시 양감면 초록로 103(B동 1층)',
          latitude: 37.095142,
          longitude: 126.9713791,
        },
        {
          address:
            '경기도 화성시 동탄물류로 48(화성동탄물류단지B블럭 1층 일부호 신동)',
          latitude: 37.199327,
          longitude: 127.0970177,
        },
        {
          address: '광주광역시 광산구 진곡산단5번로 69(진곡동)',
          latitude: 35.210749,
          longitude: 126.781454,
        },
        {
          address:
            '인천광역시 서구 정서진8로 13(주세인티앤엘 인천아라뱃길 물류센터 1층 오류동)',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address: '인천광역시 중구 월미로 94(한진 가,나동 1층 북성동1가)',
          latitude: 37.479659,
          longitude: 126.6094248,
        },
        {
          address:
            '서울특별시 송파구 송파대로 55(서울복합물류 F동 지하1층 장지동)',
          latitude: 37.4746178,
          longitude: 127.1260071,
        },
        {
          address: '세종특별자치시 부강면 부강외천로 340(2동 1층 2,3호)',
          latitude: 36.5260468,
          longitude: 127.3898493,
        },
        {
          address: '세종특별자치시 부강면 부강외천로 340(2동 1층 1,4호)',
          latitude: 36.5260468,
          longitude: 127.3898493,
        },
        {
          address: '제주특별자치도 제주시 일주서로 7263(1~2층 외도이동)',
          latitude: 33.4936231,
          longitude: 126.4347273,
        },
        {
          address: '제주특별자치도 제주시 우정로8길 16(3층 외도일동)',
          latitude: 33.4895711,
          longitude: 126.429257,
        },
        {
          address: '제주특별자치도 제주시 오일장중길 105-1(도두일동)',
          latitude: 33.498335,
          longitude: 126.4758888,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27(3동 1층)',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '경상남도 밀양시 부북면 점필재로 229(농협밀양물류센터 1층)',
          latitude: 35.4843412,
          longitude: 128.7248844,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리로 220(1,2,3층)',
          latitude: 35.2490716,
          longitude: 128.747734,
        },
        {
          address: '경상북도 경산시 진량읍 대구대로 535(A동 지하1층)',
          latitude: 35.8796994,
          longitude: 128.8532797,
        },
        {
          address: '경상북도 구미시 선산읍 죽장8길 18(1동 1층)',
          latitude: 36.24614589999999,
          longitude: 128.2728151,
        },
        {
          address: '충청남도 청양군 운곡면 신대길 14-26',
          latitude: 36.5218034,
          longitude: 126.8601085,
        },
        {
          address: '충청남도 논산시 연무읍 동안로 1092(주해오름물류)',
          latitude: 36.1856171,
          longitude: 127.1002237,
        },
        {
          address: '충청남도 논산시 연무읍 감바위로 44-13',
          latitude: 36.1223146,
          longitude: 127.1276163,
        },
        {
          address: '광주광역시 광산구 하남산단10번로 48(주3동 1층 안청동)',
          latitude: 35.2140429,
          longitude: 126.8024129,
        },
        {
          address:
            '대전광역시 서구 도솔로296번길 39(대전 서구 전통시장 공동물류창고 1층 일부분호 괴정동)',
          latitude: 36.3339986,
          longitude: 127.3826078,
        },
        {
          address: '충청북도 제천시 금성면 청풍호로24길 15(4동 1층)',
          latitude: 37.079695,
          longitude: 128.2027419,
        },
        {
          address: '강원도 원주시 지정면 조엄로 347-2(공장동 1층)',
          latitude: 37.3557368,
          longitude: 127.8565014,
        },
        {
          address: '경기도 광주시 초월읍 경충대로 1337-21(B3층)',
          latitude: 37.392847,
          longitude: 127.2795433,
        },
        {
          address: '경기도 광주시 초월읍 산수로508번길 11',
          latitude: 37.4059447,
          longitude: 127.3102943,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로152번길 115(1층 일부호)',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '경기도 안성시 서운면 서운로 420(다동)',
          latitude: 36.9495977,
          longitude: 127.2592985,
        },
        {
          address: '경기도 안성시 양성면 양성로 376-106(A동 지2층)',
          latitude: 37.0879609,
          longitude: 127.2110923,
        },
        {
          address:
            '경기도 안성시 죽산면 송문주로 219(리치물류창고1주건축물 지1층)',
          latitude: 37.0785148,
          longitude: 127.4224058,
        },
        {
          address: '경기도 이천시 호법면 덕평로 472-67(3층)',
          latitude: 37.2070003,
          longitude: 127.3914454,
        },
        {
          address:
            '경기도 용인시 기흥구 하갈로15번길 32(A동 1층일부/2층, B동 1층 하갈동)',
          latitude: 37.2360735,
          longitude: 127.0932243,
        },
        {
          address:
            '경기도 용인시 처인구 이동읍 삼배울로 23(주식회사 프레시지 1층)',
          latitude: 37.1775187,
          longitude: 127.210341,
        },
        {
          address: '경기도 용인시 처인구 남사면 원암로 439(지하2층 일부호)',
          latitude: 37.0927332,
          longitude: 127.170228,
        },
        {
          address: '경기도 용인시 처인구 이동읍 서리로101번길 43-1',
          latitude: 37.1902547,
          longitude: 127.1800578,
        },
        {
          address: '경기도 용인시 처인구 백암면 한택로88번길 260(A동 1층)',
          latitude: 37.1123989,
          longitude: 127.4228421,
        },
        {
          address: '경기도 용인시 처인구 남사면 완장리 산 102 지하2층 일부',
          latitude: 37.1770483,
          longitude: 127.1794314,
        },
        {
          address: '경기도 용인시 처인구 백암면 박곡로 38(1층)',
          latitude: 37.1743686,
          longitude: 127.3939221,
        },
        {
          address:
            '경기도 용인시 처인구 백암면 한택로88번길 260(두일냉장 A동 1층 114호)',
          latitude: 37.11243150000001,
          longitude: 127.4227725,
        },
        {
          address: '경기도 용인시 처인구 양지면 중부대로 2465(1층 일부호)',
          latitude: 37.2407107,
          longitude: 127.3039894,
        },
        {
          address: '경기도 남양주시 진접읍 금강로1281번길 24-1',
          latitude: 37.711362,
          longitude: 127.1733666,
        },
        {
          address: '경기도 평택시 서탄면 서탄2로 149(3동 1층)',
          latitude: 37.1149177,
          longitude: 127.0354174,
        },
        {
          address: '경기도 평택시 진위면 마산8로 10(진위 물류센터 창고동 1층)',
          latitude: 37.0914915,
          longitude: 127.09242,
        },
        {
          address: '경기도 평택시 진위면 마산8로 10(진위 물류센터 창고동 2층)',
          latitude: 37.0914915,
          longitude: 127.09242,
        },
        {
          address: '강원도 속초시 방축길 128(1~3층 대포동)',
          latitude: 38.1710297,
          longitude: 128.5955572,
        },
        {
          address: '강원도 강릉시 구정면 회산로 171-117(3층)',
          latitude: 37.7245573,
          longitude: 128.8477246,
        },
        {
          address: '경기도 포천시 내촌면 금강로 3089(지하2층)',
          latitude: 37.791875,
          longitude: 127.2402223,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 257(주신양물류 냉동창고)',
          latitude: 36.9663,
          longitude: 126.8422216,
        },
        {
          address: '경기도 부천시 신흥로511번길 80(1층 일부 오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address: '광주광역시 광산구 하남산단천변우로 14(가,나동 1층 도천동)',
          latitude: 35.2072349,
          longitude: 126.8136752,
        },
        {
          address: '인천광역시 중구 축항대로117번길 21(1층 일부, 2층 항동7가)',
          latitude: 37.4572615,
          longitude: 126.6110773,
        },
        {
          address: '인천광역시 중구 축항대로290번길 23(신흥동3가)',
          latitude: 37.4460457,
          longitude: 126.6264675,
        },
        {
          address: '대구광역시 서구 평리로21길 21(1층 중리동)',
          latitude: 35.8604474,
          longitude: 128.5348758,
        },
        {
          address: '제주특별자치도 제주시 오광로2길 18(1~지하1층 이호이동)',
          latitude: 33.4929873,
          longitude: 126.4545861,
        },
        {
          address: '경상남도 양산시 어곡공단2길 48(주경일 1층 어곡동)',
          latitude: 35.3700586,
          longitude: 129.0168254,
        },
        {
          address: '경상북도 경산시 진량읍 대구대로 513(A동 1층)',
          latitude: 35.8811716,
          longitude: 128.85259,
        },
        {
          address: '경상북도 경산시 하양읍 지식산업2로1길 63(3층)',
          latitude: 35.8428733,
          longitude: 128.7636976,
        },
        {
          address: '경상북도 영천시 금호읍 앵기길 52',
          latitude: 35.9342449,
          longitude: 128.8669881,
        },
        {
          address: '경상북도 포항시 북구 흥해읍 영일만항로 236',
          latitude: 36.1104956,
          longitude: 129.4309348,
        },
        {
          address: '전라남도 보성군 벌교읍 장암길 185-95',
          latitude: 34.8122827,
          longitude: 127.40021,
        },
        {
          address: '전라북도 완주군 용진읍 하이1길 51-12',
          latitude: 35.8583064,
          longitude: 127.1738408,
        },
        {
          address: '충청북도 음성군 대소면 내산길 21-25',
          latitude: 36.9490011,
          longitude: 127.4594346,
        },
        {
          address: '충청북도 음성군 생극면 음성로 1550(지하,지상 1층)',
          latitude: 37.0259372,
          longitude: 127.6057218,
        },
        {
          address: '충청북도 음성군 대소면 대소산단로 20',
          latitude: 36.9835246,
          longitude: 127.4594926,
        },
        {
          address:
            '충청북도 진천군 덕산읍 산수산단3로 66(BGF리테일 중앙물류센터)',
          latitude: 36.89151950000001,
          longitude: 127.4847618,
        },
        {
          address: '충청북도 청주시 서원구 남이면 청남로 1052',
          latitude: 36.5463324,
          longitude: 127.4306972,
        },
        {
          address: '경기도 광주시 초월읍 산수로 264(1층)',
          latitude: 37.3854559,
          longitude: 127.3161983,
        },
        {
          address: '경기도 고양시 덕양구 유산길50번길 13(1층,2층 내유동)',
          latitude: 37.7285579,
          longitude: 126.8484601,
        },
        {
          address: '경기도 오산시 동부대로 468-31(지하2층 B203호 원동)',
          latitude: 37.1441712,
          longitude: 127.0795464,
        },
        {
          address: '경기도 광주시 오포읍 오포로 614(1층)',
          latitude: 37.3514244,
          longitude: 127.21501,
        },
        {
          address:
            '경기도 광주시 도척면 도척로 401-98(제이더블유엘도척물류센터 1동 1~2층)',
          latitude: 37.3154211,
          longitude: 127.3397842,
        },
        {
          address: '경기도 광주시 초월읍 산수로 368(1동 1~2층)',
          latitude: 37.3842189,
          longitude: 127.3135318,
        },
        {
          address: '경기도 화성시 동탄기흥로257번나길 30-3(1층 일부호 방교동)',
          latitude: 37.1944769,
          longitude: 127.0937082,
        },
        {
          address:
            '경기도 화성시 동탄물류로 48(화성동탄물류단지비블럭 B동 2층 일부호 신동)',
          latitude: 37.199327,
          longitude: 127.0970177,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로152번길 131(주에스에스지닷컴 김포2센터  2,3층)',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address:
            '경기도 안성시 미양면 강덕1길 161(농협안성농식품물류센터 4층)',
          latitude: 36.9614327,
          longitude: 127.223519,
        },
        {
          address: '경기도 안성시 일죽면 사실로 161-41(1층)',
          latitude: 37.1268337,
          longitude: 127.4300273,
        },
        {
          address:
            '경기도 안성시 미양면 개정길 98-52(냉동물류센터우진냉장 주건축물제1동 3층)',
          latitude: 36.9523916,
          longitude: 127.1939078,
        },
        {
          address: '경기도 안성시 일죽면 사실로 161-41(A-2 2,3,4층)',
          latitude: 37.1268337,
          longitude: 127.4300273,
        },
        {
          address: '경기도 안성시 양성면 남북대로 2066(지2층)',
          latitude: 37.0845669,
          longitude: 127.2053692,
        },
        {
          address: '경기도 이천시 부발읍 중부대로1763번길 45(2층)',
          latitude: 37.2930618,
          longitude: 127.5002694,
        },
        {
          address: '경기도 이천시 마장면 덕평로 965(창고동 지하2층)',
          latitude: 37.234124,
          longitude: 127.3681152,
        },
        {
          address: '경기도 이천시 호법면 중부대로714번길 166(2층)',
          latitude: 37.2466855,
          longitude: 127.412194,
        },
        {
          address:
            '경기도 용인시 기흥구 덕영대로 1994(지하1,4층 일부호 상갈동)',
          latitude: 37.2630747,
          longitude: 127.1007869,
        },
        {
          address:
            '경기도 용인시 처인구 원삼면 미평로 84(LotteMart물류센터 B동 1층 108호)',
          latitude: 37.1873373,
          longitude: 127.327224,
        },
        {
          address: '경기도 용인시 처인구 백암면 덕평로 140-9(2층 일부호)',
          latitude: 37.1813182,
          longitude: 127.3735781,
        },
        {
          address:
            '경기도 용인시 처인구 모현읍 곡현로 506-2(지하1층일부,1층,2층일부,3층)',
          latitude: 37.3292563,
          longitude: 127.2218904,
        },
        {
          address:
            '경기도 용인시 처인구 모현읍 곡현로 506-2(지하1,지상2층 일부호)',
          latitude: 37.3292563,
          longitude: 127.2218904,
        },
        {
          address: '경기도 용인시 처인구 백암면 덕평로 140(2층 일부)',
          latitude: 37.1813182,
          longitude: 127.3735781,
        },
        {
          address: '경기도 용인시 처인구 백암면 덕평로 140(1층일부)',
          latitude: 37.1813182,
          longitude: 127.3735781,
        },
        {
          address: '경기도 오산시 동부대로 468-31(4층 403호 원동)',
          latitude: 37.1441712,
          longitude: 127.0795464,
        },
        {
          address:
            '경기도 시흥시 협력로 280, 신세계E-MART 시화물류센터 2층 (정왕동)',
          latitude: 37.350112,
          longitude: 126.717084,
        },
        {
          address: '경상남도 창원시 마산합포구 해안대로 234',
          latitude: 35.1956889,
          longitude: 128.5707017,
        },
        {
          address: '경상남도 창원시 진해구 신항5로 15-24',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '충청남도 천안시 동남구 수신면 수신로 503',
          latitude: 36.73521,
          longitude: 127.2835547,
        },
        {
          address: '경상북도 포항시 북구 흥해읍 영일만항로 151',
          latitude: 36.1055766,
          longitude: 129.435255,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-100',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '서울특별시 송파구 양재대로 932(가락동)',
          latitude: 37.4933411,
          longitude: 127.1097998,
        },
        {
          address: '경기도 용인시 기흥구 덕영대로 1994(상갈동)',
          latitude: 37.2630747,
          longitude: 127.1007869,
        },
        {
          address: '경기도 용인시 기흥구 동탄기흥로 741(고매동)',
          latitude: 37.2250405,
          longitude: 127.100913,
        },
        {
          address: '경기도 광주시 경충대로 1502(쌍령동)',
          latitude: 37.4002394,
          longitude: 127.2708758,
        },
        {
          address: '충청남도 천안시 서북구 천일고1길 38(신당동)',
          latitude: 36.8571837,
          longitude: 127.157182,
        },
        {
          address: '전라남도 나주시 금천면 원곡길 61',
          latitude: 35.04079610000001,
          longitude: 126.7459825,
        },
        {
          address: '인천광역시 계양구 아나지로 420(2층 작전동)',
          latitude: 37.5252398,
          longitude: 126.7389077,
        },
        {
          address: '강원도 동해시 송정중앙로 77-1',
          latitude: 37.5003703,
          longitude: 129.1254685,
        },
        {
          address: '전라남도 광양시 항만3로 20',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '충청북도 진천군 문백면 문덕길 171',
          latitude: 36.8423851,
          longitude: 127.4600077,
        },
        {
          address: '경기도 용인시 기흥구 중부대로 714(상하동)',
          latitude: 37.2572389,
          longitude: 127.141426,
        },
        {
          address: '경기도 용인시 처인구 이동읍 백옥대로144번길 36-6',
          latitude: 37.1489178,
          longitude: 127.2085132,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-207',
          latitude: 36.9425131,
          longitude: 126.86685,
        },
        {
          address: '경기도 광주시 경충대로 1425(쌍령동)',
          latitude: 37.4002394,
          longitude: 127.2708758,
        },
        {
          address: '경상북도 봉화군 석포면 승부길 16',
          latitude: 37.0427591,
          longitude: 129.058621,
        },
        {
          address: '경상북도 구미시 1공단로6길 53-4',
          latitude: 36.0969637,
          longitude: 128.3774146,
        },
        {
          address: '경상북도 김천시 어모면 산업단지4로 89-25',
          latitude: 36.161571,
          longitude: 128.116879,
        },
        {
          address: '경상북도 칠곡군 왜관읍 아곡5길 86-84',
          latitude: 36.0011034,
          longitude: 128.4301699,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-61',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-153',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '전라북도 완주군 봉동읍 과학로 801',
          latitude: 35.9402832,
          longitude: 127.1216845,
        },
        {
          address: '전라북도 완주군 봉동읍 과학로 912',
          latitude: 35.9501487,
          longitude: 127.1260147,
        },
        {
          address: '경상북도 칠곡군 가산면 송학위봉길 64',
          latitude: 36.10424769999999,
          longitude: 128.522653,
        },
        {
          address: '전라북도 완주군 봉동읍 완주산단7로 20',
          latitude: 35.9542498,
          longitude: 127.1211054,
        },
        {
          address: '전라북도 완주군 봉동읍 구암리 86-6번지',
          latitude: 35.9434898,
          longitude: 127.1152782,
        },
        {
          address: '전라북도 군산시 외항안길 63 (소룡동)',
          latitude: 35.9758802,
          longitude: 126.6147899,
        },
        {
          address: '전라북도 군산시 외항로 452(소룡동)',
          latitude: 35.9659624,
          longitude: 126.6202934,
        },
        {
          address: '경상남도 창원시 진해구 태평로 143(대죽동)',
          latitude: 35.1414994,
          longitude: 128.6720653,
        },
        {
          address: '울산광역시 남구 산업로 432(여천동)',
          latitude: 35.5225407,
          longitude: 129.3551072,
        },
        {
          address: '전라남도 나주시 영산포로 205-7(영산동)',
          latitude: 34.9994538,
          longitude: 126.7100055,
        },
        {
          address: '경상남도 창원시 마산합포구 수산1길 214(오동동)',
          latitude: 35.2036357,
          longitude: 128.5817023,
        },
        {
          address: '경상남도 진주시 솔밭로56번길 18(상평동)',
          latitude: 35.17412660000001,
          longitude: 128.1093161,
        },
        {
          address: '대전광역시 서구 도솔로 530(용문동)',
          latitude: 36.3405816,
          longitude: 127.4030765,
        },
        {
          address: '경기도 안양시 동안구 귀인로 45(호계동)',
          latitude: 37.3844197,
          longitude: 126.9456711,
        },
        {
          address: '경기도 광주시 장지9길 74(장지동)',
          latitude: 37.4024073,
          longitude: 127.2375598,
        },
        {
          address: '충청남도 논산시 해월로198번길 19(반월동)',
          latitude: 36.20478810000001,
          longitude: 127.0898037,
        },
        {
          address: '경기도 성남시 중원구 둔촌대로388번길 14(상대원동)',
          latitude: 37.4318361,
          longitude: 127.1587386,
        },
        {
          address: '경기도 부천시 오정로190번길 16(오정동)',
          latitude: 37.5251593,
          longitude: 126.7817051,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-154',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '부산광역시 사상구 새벽시장로 20(감전동)',
          latitude: 35.1558017,
          longitude: 128.9761472,
        },
        {
          address: '경상북도 구미시 고아읍 선황로 383',
          latitude: 36.2167926,
          longitude: 128.2904351,
        },
        {
          address:
            '경기도 용인시 기흥구 동탄기흥로681번길 1(고매동, A,B,C동 각 일부)',
          latitude: 37.2203389,
          longitude: 127.0952741,
        },
        {
          address: '경기도 용인시 수지구 동천로 6(동천동)',
          latitude: 37.3419548,
          longitude: 127.1012782,
        },
        {
          address: '경기도 용인시 기흥구 중부대로684번길 14(상하동)',
          latitude: 37.2645994,
          longitude: 127.1348948,
        },
        {
          address: '대전광역시 동구 옛신탄진로 12(삼성동)',
          latitude: 36.3420209,
          longitude: 127.4257076,
        },
        {
          address: '대구광역시 북구 노원로 27(노원동3가)',
          latitude: 35.8918963,
          longitude: 128.5655347,
        },
        {
          address: '경기도 평택시 포승읍 포승공단순환로 49',
          latitude: 36.966785,
          longitude: 126.8472153,
        },
        {
          address:
            '경기도 성남시 분당구 성남대로43번길 11(구미동,  성남농수산물종합유통센터)',
          latitude: 37.3387265,
          longitude: 127.1066614,
        },
        {
          address: '광주광역시 광산구 평동산단외로64번길 12(용동)',
          latitude: 35.1317615,
          longitude: 126.7510859,
        },
        {
          address: '광주광역시 광산구 첨단과기로 59-26(비아동,1층)',
          latitude: 35.2248634,
          longitude: 126.8318982,
        },
        {
          address: '광주광역시 광산구 진곡산단1번로 42(주2동 1층 오선동)',
          latitude: 35.2036906,
          longitude: 126.8031498,
        },
        {
          address: '광주광역시 북구 양일로 111(주건축물제17동 1층 양산동)',
          latitude: 35.1990143,
          longitude: 126.8775757,
        },
        {
          address: '광주광역시 북구 삼소로 266(월출동)',
          latitude: 35.2476307,
          longitude: 126.8739954,
        },
        {
          address: '인천광역시 남동구 앵고개로 426(고잔동, 남동공단 119BL-3LT)',
          latitude: 37.39843740000001,
          longitude: 126.6874766,
        },
        {
          address: '대구광역시 달서구 성서공단북로 104(호산동,지상1층)',
          latitude: 35.8434844,
          longitude: 128.4842907,
        },
        {
          address: '경기도 용인시 수지구 문인로 30(동천동)',
          latitude: 37.334135,
          longitude: 127.1001764,
        },
        {
          address: '경기도 용인시 처인구 모현읍 포은대로 892',
          latitude: 37.34303999999999,
          longitude: 127.1898088,
        },
        {
          address: '대구광역시 달서구 성서서로 121(지상1,3,5층 갈산동)',
          latitude: 35.8355813,
          longitude: 128.498475,
        },
        {
          address: '전라남도 장성군 장성읍 보해길 41',
          latitude: 35.3127696,
          longitude: 126.7990636,
        },
        {
          address: '충청북도 옥천군 동이면 옥천동이로 576-40',
          latitude: 36.2783187,
          longitude: 127.6219683,
        },
        {
          address: '경기도 용인시 기흥구 신정로41번길 40(신갈동)',
          latitude: 37.2775842,
          longitude: 127.1008161,
        },
        {
          address: '경상남도 김해시 진례면 고모로 24',
          latitude: 35.2304226,
          longitude: 128.7686221,
        },
        {
          address: '경상북도 칠곡군 기산면 기산공단1길 11',
          latitude: 35.97529129999999,
          longitude: 128.3688687,
        },
        {
          address: '경상북도 군위군 효령면 경북대로 2185',
          latitude: 36.1182607,
          longitude: 128.5727854,
        },
        {
          address: '충청남도 아산시 영인면 영인로202번길 49',
          latitude: 36.8669057,
          longitude: 126.9528735,
        },
        {
          address: '충청남도 천안시 동남구 동면 화복로 35',
          latitude: 36.7814908,
          longitude: 127.3627502,
        },
        {
          address: '경기도 광주시 신만로 81',
          latitude: 37.3353239,
          longitude: 127.3891659,
        },
        {
          address: '경기도 화성시 동탄산단3길 20-5(A동 1층 일부호 방교동)',
          latitude: 37.1769687,
          longitude: 127.0924892,
        },
        {
          address: '경기도 이천시 신둔면 경충대로 3035-1(88,89-2)',
          latitude: 37.2977712,
          longitude: 127.4078901,
        },
        {
          address: '경기도 용인시 기흥구 용구대로 2442-1(마북동,외6필지)',
          latitude: 37.3020627,
          longitude: 127.1069509,
        },
        {
          address: '경기도 용인시 처인구 백암면 한택로88번길 260(A동 일부)',
          latitude: 37.1123989,
          longitude: 127.4228421,
        },
        {
          address: '경기도 용인시 처인구 남사면 경기동로 386-12(A동 지하1층)',
          latitude: 37.1380249,
          longitude: 127.1664016,
        },
        {
          address: '경기도 용인시 기흥구 청명산로 2(하갈동)',
          latitude: 37.2558079,
          longitude: 127.0930521,
        },
        {
          address: '인천광역시 중구 월미로 22(북성동1가, 4)',
          latitude: 37.4762583,
          longitude: 126.6156934,
        },
        {
          address:
            '인천광역시 중구 공항동로193번길 40-112(운서동, 대한항공화물청사)',
          latitude: 37.4620736,
          longitude: 126.4671635,
        },
        {
          address:
            '인천광역시 중구 공항동로295번길 77-45(1층 운서동, 외항사화물터미널)',
          latitude: 37.4698485,
          longitude: 126.4637807,
        },
        {
          address: '경상남도 양산시 소주회야로 45-89(소주동)',
          latitude: 35.4060152,
          longitude: 129.1574613,
        },
        {
          address: '충청남도 아산시 둔포면 윤보선로 320',
          latitude: 36.8994687,
          longitude: 127.0147749,
        },
        {
          address: '경기도 광주시 경충대로 1146',
          latitude: 37.3794968,
          longitude: 127.2966547,
        },
        {
          address: '충청남도 태안군 태안읍 중앙로 124-1',
          latitude: 36.7513975,
          longitude: 126.3018916,
        },
        {
          address: '경기도 용인시 기흥구 동탄기흥로 776(고매동)',
          latitude: 37.2271258,
          longitude: 127.102707,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-177',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '경기도 광주시 순암로 536-7(삼동)',
          latitude: 37.4148424,
          longitude: 127.2078484,
        },
        {
          address: '경기도 고양시 덕양구 통일로 1028-26(관산동)',
          latitude: 37.7041574,
          longitude: 126.8699307,
        },
        {
          address:
            '인천광역시 중구 축항대로 147(항동7가, 27-9,10,11,12,169,179번지)',
          latitude: 37.4554375,
          longitude: 126.6130064,
        },
        {
          address: '경상남도 창원시 진해구 신항4로 15-77',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '인천광역시 중구 연안부두로99번길 15(항동7가, 31.32.331층)',
          latitude: 37.4513403,
          longitude: 126.5995347,
        },
        {
          address: '대구광역시 북구 노원로 215(침산동)',
          latitude: 35.9009119,
          longitude: 128.5834818,
        },
        {
          address: '전라남도 나주시 노안면 유곡로 255(외 4필지)',
          latitude: 35.0755436,
          longitude: 126.7328266,
        },
        {
          address: '인천광역시 중구 공항동로295번길 77-65(운서동)',
          latitude: 37.4661237,
          longitude: 126.4601775,
        },
        {
          address: '인천광역시 중구 공항로 272(운서동)',
          latitude: 37.479174,
          longitude: 126.4406136,
        },
        {
          address: '서울특별시 금천구 두산로7길 13(독산동,[두산4길 7])',
          latitude: 37.4712891,
          longitude: 126.8911995,
        },
        {
          address: '경기도 광주시 국사봉로 75',
          latitude: 37.3204958,
          longitude: 127.3423224,
        },
        {
          address: '대구광역시 북구 신천동로 960(산격동)',
          latitude: 35.9023639,
          longitude: 128.5941563,
        },
        {
          address: '경상남도 양산시 물금읍 증산리 848-8 C동1층',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '경기도 여주시 삼교1길 9-7',
          latitude: 37.2398424,
          longitude: 127.6524339,
        },
        {
          address: '충청남도 보령시 해안로 125(내항동)',
          latitude: 36.3311211,
          longitude: 126.588601,
        },
        {
          address: '강원도 횡성군 안흥면 봉화로 790',
          latitude: 37.4614772,
          longitude: 128.1387955,
        },
        {
          address: '경기도 광주시 경충대로498번길 131',
          latitude: 37.3395681,
          longitude: 127.3628709,
        },
        {
          address: '경기도 용인시 기흥구 고매로43번길 1(공세동)',
          latitude: 37.2319245,
          longitude: 127.1132929,
        },
        {
          address: '부산광역시 서구 원양로 243(암남동)',
          latitude: 35.0718257,
          longitude: 129.0063342,
        },
        {
          address: '경상북도 청도군 청도읍 월곡2길 63',
          latitude: 35.630512,
          longitude: 128.7544285,
        },
        {
          address: '인천광역시 중구 내항로67',
          latitude: 37.4743131,
          longitude: 126.6289814,
        },
        {
          address: '경상남도 창원시 진해구 신항6로 15',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항10로 16',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항7로 5',
          latitude: 35.07817259999999,
          longitude: 128.8330003,
        },
        {
          address: '경상남도 창원시 진해구 신항7로 32',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 마산합포구 해안대로234',
          latitude: 35.1956889,
          longitude: 128.5707017,
        },
        {
          address: '경상남도 창원시 마산회원구 양덕로 13',
          latitude: 35.2219063,
          longitude: 128.5923429,
        },
        {
          address: '인천광역시 서구 북항로 335',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '인천광역시 서구 북항로335번길 17',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 13',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항10로 7',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 성산구 적현로 492',
          latitude: 35.1875711,
          longitude: 128.5955338,
        },
        {
          address: '인천광역시 서구 북항로 100',
          latitude: 37.5069115,
          longitude: 126.6364221,
        },
        {
          address: '전라북도 군산시 임해로 442',
          latitude: 35.9723374,
          longitude: 126.6253679,
        },
        {
          address: '전라북도 군산시 서해로 194',
          latitude: 35.9746919,
          longitude: 126.5873086,
        },
        {
          address: '전라남도 광양시 항만2로 166',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 광양시 항만2로 97',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 광양시 태인4길 45',
          latitude: 34.9429067,
          longitude: 127.7630376,
        },
        {
          address: '전라남도 광양시 항만2로 161',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 광양시 항만7로 71-24',
          latitude: 34.9193067,
          longitude: 127.6684431,
        },
        {
          address: '전라남도 광양시 항만4로 20',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 광양시 항만7로 17',
          latitude: 34.9172329,
          longitude: 127.6714213,
        },
        {
          address: '전라남도 광양시 항만2로 114',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 광양시 항만8로 174',
          latitude: 34.9256986,
          longitude: 127.6776947,
        },
        {
          address: '대전광역시 대덕구 방두말1길 12 (상서동)',
          latitude: 36.429667,
          longitude: 127.4252367,
        },
        {
          address: '전라남도 광양시 항만7로 71-85',
          latitude: 34.913089,
          longitude: 127.6693644,
        },
        {
          address: '전라남도 광양시 컨부두로 390',
          latitude: 34.9105247,
          longitude: 127.6745016,
        },
        {
          address: '경상남도 창원시 진해구 신항10로 19',
          latitude: 35.1254988,
          longitude: 128.8063389,
        },
        {
          address: '경상남도 창원시 진해구 신항10로 30',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 95',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항5로 15-67',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항로 434',
          latitude: 35.083766,
          longitude: 128.784353,
        },
        {
          address: '경상남도 창원시 진해구 신항5로 15-78',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항5로 15-41',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항5로 15-58',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항4로 15-48',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항4로 16-15',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항4로 15-82',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항5로 15-13',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항3로 22',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항로 434-1',
          latitude: 35.083766,
          longitude: 128.784353,
        },
        {
          address: '경상남도 창원시 진해구 신항5로 15-85',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 마산회원구 자유무역1길34',
          latitude: 35.2206349,
          longitude: 128.5795296,
        },
        {
          address: '경기도 김포시 고촌읍 전호리 141-2',
          latitude: 37.5960925,
          longitude: 126.7945491,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-137',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-159',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '전라남도 광양시 항만7로 15, 컨부두로 460, 컨부두로 545',
          latitude: 34.905384,
          longitude: 127.662971,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 139',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 104',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 74',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '인천광역시 중구 축항대로 296번길 99',
          latitude: 37.4383779,
          longitude: 126.6264059,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-99',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 110',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항10로 133',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 307',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 393',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 321',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '전라남도 광양시 항만8로 18-35(도이동808-2)',
          latitude: 34.9230681,
          longitude: 127.6800614,
        },
        {
          address: '전라남도 광양시 태인4길 9',
          latitude: 34.942204,
          longitude: 127.7587077,
        },
        {
          address: '전라남도 광양시 항만8로 40',
          latitude: 34.9223601,
          longitude: 127.6778785,
        },
        {
          address: '전라남도 여수시 여수산단로 274-9',
          latitude: 34.8063997,
          longitude: 127.6705911,
        },
        {
          address: '전라남도 광양시 항만7로 52',
          latitude: 34.9197343,
          longitude: 127.6738929,
        },
        {
          address: '전라남도 광양시 항만8로 72',
          latitude: 34.9243936,
          longitude: 127.6750894,
        },
        {
          address: '전라남도 광양시 항만8로 6',
          latitude: 34.9197729,
          longitude: 127.68028,
        },
        {
          address: '경상북도 포항시 남구 동해안로 6262',
          latitude: 35.9988251,
          longitude: 129.3891437,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 27',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '충청남도 당진시 송악읍 고대리 333',
          latitude: 36.9779523,
          longitude: 126.7468067,
        },
        {
          address: '강원도 동해시 대동로 265-1',
          latitude: 37.493231,
          longitude: 129.1252257,
        },
        {
          address: '강원도 동해시 용정로 169',
          latitude: 37.5029714,
          longitude: 129.1261511,
        },
        {
          address: '경상남도 창원시 진해구 신항7로 56',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항9로 137',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 203',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 73',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항6로 12',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 117',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항6로 30',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 165, 161',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-212',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-158',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '경상남도 창원시 진해구 신항8로 343',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-55',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '경상남도 창원시 진해구 신항10로 17',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항10로 137',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항7로 132',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항7로 133',
          latitude: 35.1144168,
          longitude: 128.7212875,
        },
        {
          address: '경상남도 창원시 진해구 신항7로 63',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '전라남도 여수시 여수산단로 1469-120',
          latitude: 34.821052,
          longitude: 127.696714,
        },
        {
          address: '전라남도 여수시 여수산단로 1469-100',
          latitude: 34.821052,
          longitude: 127.696714,
        },
        {
          address: '부산광역시 남구 신선로 294',
          latitude: 35.1105748,
          longitude: 129.0951833,
        },
        {
          address: '부산광역시 강서구 신항남로 586',
          latitude: 35.2122157,
          longitude: 128.9805666,
        },
        {
          address: '인천광역시 서구 정서진3로 17',
          latitude: 37.5569312,
          longitude: 126.604845,
        },
        {
          address: '인천광역시 중구 서해대로30번길13',
          latitude: 37.4328535,
          longitude: 126.6167791,
        },
        {
          address: '경상남도 창원시 진해구 신항4로 15-85',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항4로 15-6',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '인천광역시 중구 서해대로94번길 132',
          latitude: 37.4309413,
          longitude: 126.6309229,
        },
        {
          address: '경상남도 창원시 진해구 신항4로 15-29',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항4로 15-38',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '경상남도 창원시 진해구 신항로 434-2',
          latitude: 35.083766,
          longitude: 128.784353,
        },
        {
          address: '경상남도 창원시 진해구 신항5로 15-10',
          latitude: 35.1330251,
          longitude: 128.7100381,
        },
        {
          address: '울산광역시 남구 신항로716번길 76(황성동)',
          latitude: 35.46262,
          longitude: 129.36427,
        },
        {
          address: '경상북도 포항시 북구 흥해읍 영일만항로 233',
          latitude: 36.1104956,
          longitude: 129.4309348,
        },
        {
          address: '경상북도 포항시 남구 섬안로 59',
          latitude: 35.9972687,
          longitude: 129.3654404,
        },
        {
          address: '경상북도 포항시 남구 대송로 220',
          latitude: 35.9978013,
          longitude: 129.3759269,
        },
        {
          address: '경기도 이천시 마장면 덕평로 787, 1층',
          latitude: 37.2284134,
          longitude: 127.3665119,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-105',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '전라북도 군산시 서해로 640',
          latitude: 35.9713089,
          longitude: 126.5663096,
        },
        {
          address: '전라북도 군산시 임해로 406',
          latitude: 35.976398,
          longitude: 126.6422683,
        },
        {
          address: '전라남도 광양시 항만8로 205',
          latitude: 34.9220476,
          longitude: 127.6787985,
        },
        {
          address: '전라남도 광양시 항만8로 18-35(도이동808-1)',
          latitude: 34.9230681,
          longitude: 127.6800614,
        },
        {
          address: '전라남도 여수시 여수산단로 1469-80',
          latitude: 34.8605738,
          longitude: 127.7421141,
        },
        {
          address: '전라남도 광양시 항만7로 21',
          latitude: 34.9172329,
          longitude: 127.6714213,
        },
        {
          address: '경상남도 양산시 산막공단북3길 9(산막동)',
          latitude: 35.3700164,
          longitude: 129.054251,
        },
        {
          address: '부산광역시 강서구 낙동남로 1030-25 (명지동)',
          latitude: 35.1130109,
          longitude: 128.9254253,
        },
        {
          address: '울산광역시 북구 무룡1로 44-9 (연암동)',
          latitude: 35.5756052,
          longitude: 129.3658775,
        },
        {
          address: '경상남도 밀양시 부북면 사포로 127',
          latitude: 35.4891961,
          longitude: 128.7356614,
        },
        {
          address: '경기도 광주시 도척면 도척로 401-61',
          latitude: 37.3154211,
          longitude: 127.3397842,
        },
        {
          address: '경기도 광주시 도척면 도척로 401-54',
          latitude: 37.3154211,
          longitude: 127.3397842,
        },
        {
          address: '경기도 용인시 수지구 문인로 30 (동천동)',
          latitude: 37.334135,
          longitude: 127.1001764,
        },
        {
          address:
            '경기도 부천시 신흥로511번길 80, 켄달스퀘어 부천 로지스틱스파크 1층일부층 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address:
            '경기도 용인시 처인구 원삼면 미평로 84, LotteMart물류센터 5,6호',
          latitude: 37.1873373,
          longitude: 127.327224,
        },
        {
          address: '충청남도 논산시 연무읍 동안로 1092, (주)해오름물류',
          latitude: 36.1856171,
          longitude: 127.1002237,
        },
        {
          address: '경상남도 창원시 마산회원구 봉암공단8길 5, 4호 5호 (봉암동)',
          latitude: 35.214216,
          longitude: 128.5995583,
        },
        {
          address:
            '서울특별시 송파구 송파대로 55, 지하1층 (장지동, 서울복합물류 B동(장지동))',
          latitude: 37.46922900000001,
          longitude: 127.126316,
        },
        {
          address: '전라남도 장성군 동화면 용정기산길 35',
          latitude: 35.2931602,
          longitude: 126.7458245,
        },
        {
          address: '경기도 용인시 처인구 포곡읍 성산로 600, 지상1층 201,203호',
          latitude: 37.2831256,
          longitude: 127.2051658,
        },
        {
          address: '경기도 포천시 내촌면 금강로 3089',
          latitude: 37.791875,
          longitude: 127.2402223,
        },
        {
          address: '경기도 평택시 유천로 49 (합정동)',
          latitude: 36.97711779999999,
          longitude: 127.1073402,
        },
        {
          address: '경기도 광주시 도척면 도척로 401-98',
          latitude: 37.3154211,
          longitude: 127.3397842,
        },
        {
          address: '충청남도 논산시 가야곡면 매죽헌로638번길 58',
          latitude: 36.1273199,
          longitude: 127.1501419,
        },
        {
          address: '인천광역시 중구 공항동로295번길 77-45 (운서동)',
          latitude: 37.4698485,
          longitude: 126.4637807,
        },
        {
          address: '전라북도 익산시 낭산면 낭산농공단지길 40',
          latitude: 36.0742701,
          longitude: 127.035542,
        },
        {
          address: '경기도 광주시 오포읍 오포안로 234',
          latitude: 37.3577898,
          longitude: 127.2136693,
        },
        {
          address: '경상북도 칠곡군 지천면 신동로2길 91-33',
          latitude: 35.9672438,
          longitude: 128.4792345,
        },
        {
          address: '경기도 용인시 처인구 양지면 추계리 192-1 ',
          latitude: 37.2480962,
          longitude: 127.3244391,
        },
        {
          address: '부산광역시 동구 성남로 9 (좌천동, 씨제이물류센터)',
          latitude: 35.1285324,
          longitude: 129.0537005,
        },
        {
          address: '경상남도 양산시 어곡공단2길 48 (어곡동)',
          latitude: 35.3700586,
          longitude: 129.0168254,
        },
        {
          address: '부산광역시 사하구 원양로 340 (감천동)',
          latitude: 35.0812185,
          longitude: 129.0057685,
        },
        {
          address: '경상북도 칠곡군 가산면 송신로 78',
          latitude: 36.0933733,
          longitude: 128.5348171,
        },
        {
          address: '충청남도 천안시 서북구 천일고1길 38 (신당동)',
          latitude: 36.8571837,
          longitude: 127.157182,
        },
        {
          address: '충청남도 서산시 고북면 내포로 2236-37',
          latitude: 36.6814241,
          longitude: 126.5390625,
        },
        {
          address: '경기도 용인시 기흥구 덕영대로 1994 (상갈동, 고려냉장)',
          latitude: 37.2630747,
          longitude: 127.1007869,
        },
        {
          address: '부산광역시 사하구 원양로 363 (감천동)',
          latitude: 35.0833117,
          longitude: 129.0056495,
        },
        {
          address: '부산광역시 서구 원양로 214 (암남동)',
          latitude: 35.0694901,
          longitude: 129.0084265,
        },
        {
          address: '부산광역시 사하구 다대로 332 (장림동)',
          latitude: 35.0806032,
          longitude: 128.9704367,
        },
        {
          address: '경상남도 거창군 거창읍 강남로 267-98',
          latitude: 35.6886789,
          longitude: 127.9314797,
        },
        {
          address: '경기도 양주시 평화로1399번길 48-2 (덕계동)',
          latitude: 37.8152521,
          longitude: 127.0441003,
        },
        {
          address: '경기도 광주시 경충대로 1502 (쌍령동)',
          latitude: 37.4002394,
          longitude: 127.2708758,
        },
        {
          address: '인천광역시 중구 연안부두로99번길 15 (항동7가)',
          latitude: 37.4513403,
          longitude: 126.5995347,
        },
        {
          address: '경기도 용인시 기흥구 농서로 51 (농서동,번지 외 9필지)',
          latitude: 37.2227691,
          longitude: 127.0912607,
        },
        {
          address: '인천광역시 중구 자유무역로 25, 3층 (운서동)',
          latitude: 37.4722539,
          longitude: 126.4688958,
        },
        {
          address: '경기도 안성시 죽산면 송문주로 337',
          latitude: 37.0363933,
          longitude: 127.4379981,
        },
        {
          address: '서울특별시 성동구 마장로35길 112, 지하1층 (마장동)',
          latitude: 37.5685624,
          longitude: 127.04523,
        },
        {
          address: '경기도 용인시 처인구 중부대로 1022-1 (삼가동)',
          latitude: 37.2378661,
          longitude: 127.1627766,
        },
        {
          address: '경기도 용인시 기흥구 중부대로 714 (상하동)',
          latitude: 37.2572389,
          longitude: 127.141426,
        },
        {
          address: '경기도 용인시 수지구 동천로 6 (동천동)',
          latitude: 37.3419548,
          longitude: 127.1012782,
        },
        {
          address: '경기도 용인시 기흥구 원고매로 29 (고매동)',
          latitude: 37.2222324,
          longitude: 127.1067031,
        },
        {
          address: '대구광역시 동구 팔공로 220-2 (봉무동)',
          latitude: 35.9180615,
          longitude: 128.6430589,
        },
        {
          address: '제주특별자치도 제주시 오일장중길 105-1 (도두일동)',
          latitude: 33.498335,
          longitude: 126.4758888,
        },
        {
          address: '서울특별시 성동구 고산자로 330, 지하1층 (마장동)',
          latitude: 37.5688976,
          longitude: 127.0376877,
        },
        {
          address: '제주특별자치도 제주시 오광로2길 18 (이호이동)',
          latitude: 33.4929873,
          longitude: 126.4545861,
        },
        {
          address: '경기도 용인시 처인구 이동면 백옥대로144번길 36-6',
          latitude: 37.1489178,
          longitude: 127.2085132,
        },
        {
          address: '제주특별자치도 제주시 우정로8길 28 (외도일동)',
          latitude: 33.48944,
          longitude: 126.427881,
        },
        {
          address: '경기도 오산시 동부대로 468-31, 지하1층 (원동)',
          latitude: 37.1441712,
          longitude: 127.0795464,
        },
        {
          address: '경상남도 김해시 한림면 김해대로1099번길 20-44',
          latitude: 35.2978991,
          longitude: 128.8071107,
        },
        {
          address: '경상북도 경산시 진량읍 일연로 554',
          latitude: 35.8574395,
          longitude: 128.8082474,
        },
        {
          address: '경기도 광주시 초월읍 동막골길 23',
          latitude: 37.3775352,
          longitude: 127.3194555,
        },
        {
          address: '경기도 파주시 법원읍 자운서원로 396-8',
          latitude: 37.8642082,
          longitude: 126.847315,
        },
        {
          address: '경상남도 거창군 위천면 당산농공길 40',
          latitude: 35.7521898,
          longitude: 127.8580074,
        },
        {
          address: '전라남도 나주시 다시면 영산로 4619',
          latitude: 35.0169739,
          longitude: 126.6495154,
        },
        {
          address: '부산광역시 사하구 장림동  325-1',
          latitude: 35.081983,
          longitude: 128.9700177,
        },
        {
          address: '부산광역시 사하구 다대로605번길 17 (다대동)',
          latitude: 35.0528129,
          longitude: 128.9732287,
        },
        {
          address: '대구광역시 북구 칠곡중앙대로 21 (팔달동)',
          latitude: 35.8998712,
          longitude: 128.5416646,
        },
        {
          address: '경기도 여주시 가남읍 은봉리 49',
          latitude: 37.17698590000001,
          longitude: 127.5679452,
        },
        {
          address: '서울특별시 강서구 등촌로 59-1, 지1층 (화곡동)',
          latitude: 37.5353432,
          longitude: 126.8631622,
        },
        {
          address: '경기도 안성시 일죽면 사실로 161-41',
          latitude: 37.1268337,
          longitude: 127.4300273,
        },
        {
          address: '경기도 양주시 양주산성로 103-8 (남방동)',
          latitude: 37.7700812,
          longitude: 127.03352,
        },
        {
          address: '대전광역시 동구 옛신탄진로 12 (삼성동)',
          latitude: 36.3420209,
          longitude: 127.4257076,
        },
        {
          address: '경기도 용인시 기흥구 동탄기흥로681번길 1 (고매동)',
          latitude: 37.2203389,
          longitude: 127.0952741,
        },
        {
          address: '경기도 용인시 처인구 백암면 청계로67번길 30 (지하1층)',
          latitude: 37.1592941,
          longitude: 127.3930001,
        },
        {
          address: '경기도 이천시 부발읍 경충대로 2330-73',
          latitude: 37.2685539,
          longitude: 127.4674744,
        },
        {
          address: '경기도 의왕시 고산로 8 (고천동)',
          latitude: 37.3525627,
          longitude: 126.9703291,
        },
        {
          address: '경상남도 양산시 칠산길 11 (다방동)',
          latitude: 35.3323566,
          longitude: 129.0450239,
        },
        {
          address: '충청북도 증평군 도안면 원명로 35, 풀무원',
          latitude: 36.83131789999999,
          longitude: 127.6189367,
        },
        {
          address: '경기도 남양주시 와부읍 수레로 682-1, 1층',
          latitude: 37.6172313,
          longitude: 127.2749111,
        },
        {
          address: '경기도 평택시 포승읍 포승공단순환로 49, 3층 302호',
          latitude: 36.966785,
          longitude: 126.8472153,
        },
        {
          address: '광주광역시 광산구 임곡로 657 (안청동)',
          latitude: 35.2137332,
          longitude: 126.8032354,
        },
        {
          address:
            '경기도 용인시 기흥구 고매로43번길 1, 요진그린냉장 2층 201,202호 (공세동)',
          latitude: 37.2319245,
          longitude: 127.1132929,
        },
        {
          address: '경기도 용인시 처인구 모현읍 초부로 132-4',
          latitude: 37.3143261,
          longitude: 127.2559258,
        },
        {
          address: '경기도 광주시 초월읍 산수로 264, 1층',
          latitude: 37.3854559,
          longitude: 127.3161983,
        },
        {
          address: '경기도 용인시 처인구 백암면 한택로88번길 260',
          latitude: 37.1123989,
          longitude: 127.4228421,
        },
        {
          address: '충청북도 진천군 진천읍 장수로 147-28 ((주)씨티에스)',
          latitude: 36.8746568,
          longitude: 127.4205573,
        },
        {
          address: '충청북도 괴산군 괴산읍 자연식품길 26',
          latitude: 36.8117117,
          longitude: 127.7908552,
        },
        {
          address: '경기도 화성시 동탄물류로 48, 동탄물류단지B블럭 2층 (신동)',
          latitude: 37.199327,
          longitude: 127.0970177,
        },
        {
          address: '전라북도 남원시 주생면 요천로 749',
          latitude: 35.3748177,
          longitude: 127.314939,
        },
        {
          address: '경기도 광주시 도척면 마도로 174-29',
          latitude: 37.2885696,
          longitude: 127.336623,
        },
        {
          address: '경기도 이천시 마장면 덕평로 677',
          latitude: 37.234124,
          longitude: 127.3681152,
        },
        {
          address: '경기도 파주시 문산읍 내포리 70-9',
          latitude: 37.8563289,
          longitude: 126.781969,
        },
        {
          address: '광주광역시 광산구 안청동733-2',
          latitude: 35.2147033,
          longitude: 126.8036575,
        },
        {
          address: '서울특별시 동작구 노들로2길 44 (노량진동)',
          latitude: 37.5146427,
          longitude: 126.9345674,
        },
        {
          address: '경상북도 포항시 북구 장량로262번길 23 (양덕동)',
          latitude: 36.0806428,
          longitude: 129.409978,
        },
        {
          address: '전라북도 익산시 현영길 94 (현영동)',
          latitude: 35.9684497,
          longitude: 126.9360902,
        },
        {
          address: '경상남도 양산시 소주회야로 45-89 (소주동)',
          latitude: 35.4060152,
          longitude: 129.1574613,
        },
        {
          address: '전라남도 목포시 연산동 1245-1   ',
          latitude: 34.8173485,
          longitude: 126.3735022,
        },
        {
          address: '경기도 안성시 양성면 양성로 406',
          latitude: 37.0868748,
          longitude: 127.2076614,
        },
        {
          address: '경기도 평택시 포승읍 평택항로 95',
          latitude: 36.9685601,
          longitude: 126.8466506,
        },
        {
          address: '경기도 파주시 법원읍 보광로 1906',
          latitude: 37.8360401,
          longitude: 126.8652994,
        },
        {
          address: '광주광역시 광산구 사암로 684, 서부복합센터 (장덕동)',
          latitude: 35.19160790000001,
          longitude: 126.8088137,
        },
        {
          address: '경기도 광주시 신만로58번길 6-18 (곤지암읍)',
          latitude: 37.3325546,
          longitude: 127.391926,
        },
        {
          address: '경기도 평택시 포승읍 연암길 99-17',
          latitude: 36.9618632,
          longitude: 126.8458409,
        },
        {
          address: '경기도 파주시 황새말2길 78 (조리읍)',
          latitude: 37.7676601,
          longitude: 126.8226739,
        },
        {
          address: '경기도 용인시 기흥구 구성로 288 (청덕동, STX레이다시스)',
          latitude: 37.2903107,
          longitude: 127.1409073,
        },
        {
          address: '경기도 평택시 산단로 263 (칠괴동)',
          latitude: 37.0343916,
          longitude: 127.0955402,
        },
        {
          address: '경기도 이천시 서이천로 383 (마장면)',
          latitude: 37.2593961,
          longitude: 127.393165,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로58번길 35-14',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 220',
          latitude: 36.9698405,
          longitude: 126.8412498,
        },
        {
          address: '경기도 평택시 하만호길 227 (포승읍)',
          latitude: 36.9501593,
          longitude: 126.851299,
        },
        {
          address: '경기도 평택시 평택항안로 55 (포승읍)',
          latitude: 36.9911832,
          longitude: 126.8510118,
        },
        {
          address: '경기도 오산시 남부대로 374 (원동, 이화다이아몬드(주))',
          latitude: 37.1348062,
          longitude: 127.0768668,
        },
        {
          address: '경기도 광주시 장지9길 34-16 (장지동)',
          latitude: 37.3986047,
          longitude: 127.2389491,
        },
        {
          address: '경기도 평택시 포승읍 하만호길 227',
          latitude: 36.9501593,
          longitude: 126.851299,
        },
        {
          address: '경기도 용인시 처인구 죽양대로912번길 54 (백암면)',
          latitude: 37.1448514,
          longitude: 127.3936367,
        },
        {
          address: '경기도 광주시 오포로 240 (오포읍, (주)주성엔지니어링)',
          latitude: 37.3491593,
          longitude: 127.1873691,
        },
        {
          address: '경기도 안산시 단원구 범지기로 116 (원시동)',
          latitude: 37.307374,
          longitude: 126.7879566,
        },
        {
          address: '경기도 이천시 서이천로 91 (마장면)',
          latitude: 37.2604475,
          longitude: 127.3837892,
        },
        {
          address: '경기도 용인시 처인구 죽양대로1650번길 2-14 (원삼면)',
          latitude: 37.1850887,
          longitude: 127.3333192,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 75-18',
          latitude: 36.9575294,
          longitude: 126.8462702,
        },
        {
          address: '경기도 평택시 포승읍 평택항안로 55',
          latitude: 36.9611111,
          longitude: 126.8333333,
        },
        {
          address: '경기도 김포시 아라육로 37 (고촌읍)',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '경기도 용인시 기흥구 중부대로684번길 14 (상하동, 오로라CS)',
          latitude: 37.2651577,
          longitude: 127.1351016,
        },
        {
          address:
            '경기도 평택시 평택항만길 181-21 (포승읍, 평택컨테이너터미널)',
          latitude: 36.96541120000001,
          longitude: 126.8398052,
        },
        {
          address: '경기도 용인시 기흥구 고매로43번길 1 (공세동, 요진그린냉장)',
          latitude: 37.2319245,
          longitude: 127.1132929,
        },
        {
          address: '경기도 평택시 발안로 1198-5 (서탄면)',
          latitude: 37.1345883,
          longitude: 127.0329591,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 241',
          latitude: 36.9695859,
          longitude: 126.8427056,
        },
        {
          address: '경기도 성남시 중원구 둔촌대로 456 (상대원동)',
          latitude: 37.4309263,
          longitude: 127.1676227,
        },
        {
          address: '경기도 안성시 남사당로 71 (보개면)',
          latitude: 37.02644799999999,
          longitude: 127.2957286,
        },
        {
          address:
            '경기도 용인시 기흥구 동탄기흥로681번길 1 (고매동, 세미냉장)',
          latitude: 37.2199125,
          longitude: 127.0951901,
        },
        {
          address: '경기도 용인시 처인구 당하로 154 (남사면)',
          latitude: 37.1458663,
          longitude: 127.1481277,
        },
        {
          address: '경기도 의왕시 오봉로 175 (이동, 의왕제2터미널)',
          latitude: 37.3302504,
          longitude: 126.9580792,
        },
        {
          address: '경기도 이천시 중부대로763번길 141-27 (호법면)',
          latitude: 37.249452,
          longitude: 127.4241194,
        },
        {
          address: '경기도 평택시 고덕면 삼성로 114',
          latitude: 37.0380043,
          longitude: 127.0555448,
        },
        {
          address: '경기도 이천시 마장면 둔터로 24-26',
          latitude: 37.2851508,
          longitude: 127.4017018,
        },
        {
          address: '경기도 광주시 오포읍 포은대로 271',
          latitude: 37.355868,
          longitude: 127.222556,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 56',
          latitude: 36.9600306,
          longitude: 126.8485546,
        },
        {
          address: '경기도 평택시 평택항만길 75-18 (포승읍)',
          latitude: 36.9575294,
          longitude: 126.8462702,
        },
        {
          address: '경기도 이천시 부발읍 부흥로81번길 124-3',
          latitude: 37.2989134,
          longitude: 127.5310276,
        },
        {
          address:
            '경기도 안산시 단원구 강촌로139번길 9 (성곡동, (주)코리아써키트)',
          latitude: 37.3183181,
          longitude: 126.7644194,
        },
        {
          address: '경기도 용인시 처인구 죽양대로801번길 6 (백암면)',
          latitude: 37.1321861,
          longitude: 127.3916583,
        },
        {
          address: '경기도 화성시 동탄산단3길 19-22 (동탄면, 상원로지스틱)',
          latitude: 37.1629014,
          longitude: 127.0837494,
        },
        {
          address: '경기도 평택시 포승읍 직산동길 87-14',
          latitude: 36.9507511,
          longitude: 126.8781386,
        },
        {
          address:
            '서울특별시 용산구 이촌로 343-20, 용산동창고시설(용산동6가69-5) 1동 1층 1호 (용산동6가)',
          latitude: 37.519212,
          longitude: 126.9848107,
        },
        {
          address: '충청북도 음성군 대소면 대금로 157',
          latitude: 36.9831291,
          longitude: 127.4632989,
        },
        {
          address: '충청북도 음성군 대풍산단로 128 (대소면)',
          latitude: 36.9661747,
          longitude: 127.4646555,
        },
        {
          address: '충청북도 진천군 산삼로 216 (이월면, 동아물류(주)물류창고)',
          latitude: 36.9025975,
          longitude: 127.4630075,
        },
        {
          address: '충청북도 청주시 흥덕구 오송읍 상정쌍청로 171',
          latitude: 36.654993,
          longitude: 127.3454442,
        },
        {
          address: '충청북도 청주시 흥덕구 국사오산로 604 (옥산면)',
          latitude: 36.6717457,
          longitude: 127.3653657,
        },
        {
          address: '충청북도 충주시 하풍1길 21 (풍동)',
          latitude: 36.9401629,
          longitude: 127.9021811,
        },
        {
          address: '충청북도 진천군 덕산면 신척산단4로 127',
          latitude: 36.928675,
          longitude: 127.485914,
        },
        {
          address: '충청북도 청주시 청원구 오창읍 두릉유리로 688',
          latitude: 36.7282588,
          longitude: 127.4084509,
        },
        {
          address: '충청북도 청주시 청원구 내수읍 오창대로 980',
          latitude: 36.7219769,
          longitude: 127.495889,
        },
        {
          address: '충청북도 음성군 초금로 688 (금왕읍)',
          latitude: 36.9732217,
          longitude: 127.5618251,
        },
        {
          address: '충청북도 청주시 흥덕구 강내면 저산길 120-3',
          latitude: 36.5663664,
          longitude: 127.3601344,
        },
        {
          address: '강원도 동해시 대동로 210 (송정동, 동해항)',
          latitude: 37.49286110000001,
          longitude: 129.1271568,
        },
        {
          address: '강원도 동해시 동해항3길 4 (송정동, 영동인쇄소)',
          latitude: 37.5001666,
          longitude: 129.1261801,
        },
        {
          address: '강원도 동해시 공단6로 73 (구호동)',
          latitude: 37.4754533,
          longitude: 129.1345666,
        },
        {
          address: '강원도 동해시 일출로 92-26 (묵호진동)',
          latitude: 37.5499672,
          longitude: 129.1167892,
        },
        {
          address: '강원도 동해시 송정중앙로 78 (송정동)',
          latitude: 37.50037349999999,
          longitude: 129.1258904,
        },
        {
          address: '충청북도 청주시 청원구 오창대로 980 (내수읍, 청주국제공항)',
          latitude: 36.7219769,
          longitude: 127.495889,
        },
        {
          address: '충청북도 청주시 상당구 상장인차로 188 (가덕면)',
          latitude: 36.5292518,
          longitude: 127.5250405,
        },
        {
          address: '충청남도 보령시 관창공단길 256 (주교면, GMDAEWOO보령공장)',
          latitude: 36.3795043,
          longitude: 126.5790957,
        },
        {
          address: '충청남도 서천군 장항읍 장항공단길 64',
          latitude: 36.0094334,
          longitude: 126.7201134,
        },
        {
          address: '충청남도 서산시 대산읍 대죽2로 35',
          latitude: 37.003663,
          longitude: 126.417949,
        },
        {
          address: '충청남도 천안시 서북구 성거읍 석문길 47-1',
          latitude: 36.8497391,
          longitude: 127.1760535,
        },
        {
          address: '충청남도 청양군 신대길 14-5 (운곡면)',
          latitude: 36.5218034,
          longitude: 126.8601085,
        },
        {
          address: '충청남도 서산시 대산읍 독곶1로 54',
          latitude: 37.0042603,
          longitude: 126.37941,
        },
        {
          address: '충청남도 서산시 도당가금말길 66 (음암면)',
          latitude: 36.7898684,
          longitude: 126.505508,
        },
        {
          address: '충청남도 당진시 고대면 대호만로 870',
          latitude: 36.96825949999999,
          longitude: 126.5844504,
        },
        {
          address: '충청남도 서천군 장항공단길10번길 36-1 (장항읍)',
          latitude: 36.0041138,
          longitude: 126.7209947,
        },
        {
          address: '충청남도 천안시 동남구 성남로 59 (목천읍, (주)YL)',
          latitude: 36.7670267,
          longitude: 127.2099208,
        },
        {
          address: '충청남도 천안시 동남구 성남면 대흥1길 122',
          latitude: 36.7269946,
          longitude: 127.2270672,
        },
        {
          address: '충청북도 음성군 리노산단길 31 (금왕읍)',
          latitude: 36.9920993,
          longitude: 127.5981108,
        },
        {
          address: '충청북도 진천군 진천읍 씨제이로 110',
          latitude: 36.8782964,
          longitude: 127.4615591,
        },
        {
          address: '충청북도 음성군 소이로 313 (소이면)',
          latitude: 36.9318506,
          longitude: 127.7527454,
        },
        {
          address: '충청북도 음성군 대풍산단로 116-18 (대소면)',
          latitude: 36.9684084,
          longitude: 127.4640154,
        },
        {
          address:
            '경기도 안산시 단원구 범지기로 116 (원시동, 교세라엘코코리아(주))',
          latitude: 37.3074013,
          longitude: 126.7883417,
        },
        {
          address: '경기도 화성시 팔탄면 버들로 1369-9',
          latitude: 37.1274177,
          longitude: 126.85721530000001,
        },
        {
          address:
            '경기도 용인시 기흥구 삼성로 1 (농서동, 삼성전자(주)기흥캠퍼스)',
          latitude: 37.2291165,
          longitude: 127.0807703,
        },
        {
          address: '경기도 수원시 영통구 삼성로 243 (매탄동)',
          latitude: 37.2594571,
          longitude: 127.0594335,
        },
        {
          address: '경기도 이천시 마장면 지산로 175-10',
          latitude: 37.2126747,
          longitude: 127.356348,
        },
        {
          address: '경기도 광주시 경충대로498번길 131 (곤지암읍)',
          latitude: 37.3395681,
          longitude: 127.3628709,
        },
        {
          address: '경기도 용인시 수지구 손곡로 19 (동천동)',
          latitude: 37.3358148,
          longitude: 127.1006811,
        },
        {
          address: '경기도 용인시 처인구 모현읍 곡현로 506-2',
          latitude: 37.3292563,
          longitude: 127.2218904,
        },
        {
          address: '경기도 이천시 대월로932번길 63 (대월면)',
          latitude: 37.2369915,
          longitude: 127.500553,
        },
        {
          address: '경기도 용인시 처인구 중부대로 2453-36 (양지면, 신영냉장)',
          latitude: 37.2391992,
          longitude: 127.3082831,
        },
        {
          address: '경기도 평택시 포승장안로 110 (포승읍)',
          latitude: 36.9980959,
          longitude: 126.8986521,
        },
        {
          address: '경기도 김포시 아라육로58번길 107 (고촌읍)',
          latitude: 37.5932469,
          longitude: 126.7885362,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 305',
          latitude: 36.9748859,
          longitude: 126.8375983,
        },
        {
          address: '경기도 오산시 경기대로 78-26 (갈곶동, (주)일양종합물류)',
          latitude: 37.1310045,
          longitude: 127.0749509,
        },
        {
          address: '경기도 안성시 원곡면 천덕산로 535-14',
          latitude: 37.077327,
          longitude: 127.1609191,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 399-16',
          latitude: 36.9825256,
          longitude: 126.8294432,
        },
        {
          address: '경기도 안성시 이현배티길 42-12 (양성면)',
          latitude: 37.0904038,
          longitude: 127.2147553,
        },
        {
          address: '경기도 화성시 배미능골길 112-37 (우정읍)',
          latitude: 37.0612897,
          longitude: 126.7715541,
        },
        {
          address: '경기도 평택시 포승읍 신영리 951',
          latitude: 36.9460163,
          longitude: 126.8854212,
        },
        {
          address: '경기도 화성시 버들로 1369-9 (팔탄면, KR베어링㈜)',
          latitude: 37.1274177,
          longitude: 126.85721530000001,
        },
        {
          address: '경기도 이천시 사음로 11 (사음동)',
          latitude: 37.2964842,
          longitude: 127.4147275,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 181-28',
          latitude: 36.9691608,
          longitude: 126.8399573,
        },
        {
          address: '경기도 부천시 신흥로511번길 80 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address: '경기도 평택시 포승읍 하만호길 187',
          latitude: 36.9522917,
          longitude: 126.8514298,
        },
        {
          address: '경기도 광주시 오포읍 오포로 636',
          latitude: 37.3505416,
          longitude: 127.2030228,
        },
        {
          address: '경기도 김포시 고촌읍 금포로 679-25',
          latitude: 37.6254491,
          longitude: 126.7479703,
        },
        {
          address: '경기도 이천시 호법면 덕평로 472-67',
          latitude: 37.2070003,
          longitude: 127.3914454,
        },
        {
          address: '경기도 화성시 송산면 화성로 632',
          latitude: 37.2107191,
          longitude: 126.7583508,
        },
        {
          address: '경기도 화성시 동탄물류로 48 (신동)',
          latitude: 37.2506839,
          longitude: 127.0501924,
        },
        {
          address: '경기도 이천시 덕평로581번길 10 (호법면, CJ물류센터)',
          latitude: 37.2304161,
          longitude: 127.3654691,
        },
        {
          address: '경기도 평택시 포승읍 포승공단순환로 644',
          latitude: 36.9810162,
          longitude: 126.8479693,
        },
        {
          address: '경기도 수원시 권선구 오목천로132번길 55 (고색동)',
          latitude: 37.2422787,
          longitude: 126.9757933,
        },
        {
          address: '경기도 화성시 동탄산단4길 37 (동탄면, (주)하나로티엔에스)',
          latitude: 37.1769687,
          longitude: 127.0924892,
        },
        {
          address: '경기도 용인시 기흥구 탑실로35번길 20 (공세동)',
          latitude: 37.2411492,
          longitude: 127.1120793,
        },
        {
          address: '경기도 안산시 단원구 시화로 38 (성곡동, 조흥화학공업(주))',
          latitude: 37.3274765,
          longitude: 126.7408049,
        },
        {
          address: '경기도 평택시 포승읍 포승공단순환로 642',
          latitude: 36.9851639,
          longitude: 126.8288816,
        },
        {
          address: '경기도 평택시 안중읍 서해로 1279',
          latitude: 37.0071948,
          longitude: 126.9454175,
        },
        {
          address: '경기도 파주시 조리읍 탑삭골길 77-43',
          latitude: 37.7384283,
          longitude: 126.7904339,
        },
        {
          address: '경기도 포천시 장자경제로 69-28 (신북면)',
          latitude: 37.3313865,
          longitude: 126.716805,
        },
        {
          address: '경기도 평택시 서탄로 33 (진위면)',
          latitude: 37.1035721,
          longitude: 127.0583226,
        },
        {
          address: '경상남도 양산시 산막공단북5길 106 (산막동)',
          latitude: 35.3750638,
          longitude: 129.0545808,
        },
        {
          address:
            '경상남도 양산시 어실로 447-15 (어곡동, 양산세관성신보세창고)',
          latitude: 35.3927117,
          longitude: 129.0064709,
        },
        {
          address: '경상남도 양산시 어실로 447-22 (어곡동, 삼광보세창고)',
          latitude: 35.3938335,
          longitude: 129.0078919,
        },
        {
          address:
            '경상남도 양산시 수서로 223-40 (상북면, 양산세관(주)한국G.W보세창고)',
          latitude: 35.4606,
          longitude: 128.2132,
        },
        {
          address: '경상남도 창원시 진해구 행암로92번안길 30 (장천동, DLC)',
          latitude: 35.1302184,
          longitude: 128.6981616,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리길 170-45',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address: '경기도 고양시 일산동구 장항로225번길 57 (장항동)',
          latitude: 37.6410523,
          longitude: 126.7710654,
        },
        {
          address: '경기도 여주시 삼교1길 9-7 (삼교동)',
          latitude: 37.2398424,
          longitude: 127.6524339,
        },
        {
          address: '경기도 용인시 처인구 한터로58번길 37 (유방동)',
          latitude: 37.2523413,
          longitude: 127.2139075,
        },
        {
          address: '경기도 평택시 만호길 2-19 (포승읍)',
          latitude: 36.9649342,
          longitude: 126.8610523,
        },
        {
          address: '경기도 이천시 마장면 프리미엄아울렛로 96',
          latitude: 37.252952,
          longitude: 127.389535,
        },
        {
          address: '경기도 이천시 억만리로 140-27 (마장면)',
          latitude: 37.259195,
          longitude: 127.37015,
        },
        {
          address: '경기도 수원시 영통구 신원로250번길 20 (매탄동, 동원냉동)',
          latitude: 37.2573518,
          longitude: 127.0603313,
        },
        {
          address: '경기도 안성시 중앙대학로 13 (대덕면)',
          latitude: 37.0085772,
          longitude: 127.2194654,
        },
        {
          address: '경기도 이천시 부발읍 경충대로2191번길 37',
          latitude: 37.2564962,
          longitude: 127.4817106,
        },
        {
          address: '경기도 안성시 서운면 제3공단1길 68-18',
          latitude: 36.9741659,
          longitude: 127.2696708,
        },
        {
          address: '경기도 이천시 호법면 덕평로 472-96',
          latitude: 37.2070003,
          longitude: 127.3914454,
        },
        {
          address: '경기도 광주시 신만로 81 (곤지암읍)',
          latitude: 37.3353239,
          longitude: 127.3891659,
        },
        {
          address: '경기도 용인시 기흥구 중부대로 714 (상하동, 아주냉장)',
          latitude: 37.2634156,
          longitude: 127.1378983,
        },
        {
          address: '경기도 평택시 평택항로 95 (포승읍)',
          latitude: 36.9685601,
          longitude: 126.8466506,
        },
        {
          address: '경기도 파주시 사임당로 572-39 (법원읍)',
          latitude: 37.8542638,
          longitude: 126.8466495,
        },
        {
          address: '경상남도 양산시 산막공단북1길 41 (산막동)',
          latitude: 35.3738052,
          longitude: 129.0514038,
        },
        {
          address:
            '경상남도 양산시 어실로 447-27 (어곡동, 양산세관대성상사보세창고)',
          latitude: 35.3887516,
          longitude: 129.0519991,
        },
        {
          address: '경상북도 포항시 남구 동해안로5277번길 75-11 (동해면)',
          latitude: 35.9770435,
          longitude: 129.4835975,
        },
        {
          address: '경상북도 영주시 적서공단로 23 (적서동)',
          latitude: 36.7934743,
          longitude: 128.6238774,
        },
        {
          address: '경상북도 구미시 비산로 135 (공단동)',
          latitude: 36.1204551,
          longitude: 128.3869561,
        },
        {
          address: '경상북도 구미시 옥계2공단로 29 (황상동)',
          latitude: 36.113687,
          longitude: 128.4153177,
        },
        {
          address: '경상북도 김천시 공단3길 94 (응명동)',
          latitude: 36.15365329999999,
          longitude: 128.126724,
        },
        {
          address: '경상북도 구미시 임천인덕로 204 (산동면)',
          latitude: 36.1551695,
          longitude: 128.4634716,
        },
        {
          address: '경상북도 구미시 1공단로10길 103-23 (공단동)',
          latitude: 36.0933223,
          longitude: 128.3839935,
        },
        {
          address: '경상북도 칠곡군 3공단1로 62-13 (석적읍)',
          latitude: 36.0883456,
          longitude: 128.403666,
        },
        {
          address: '경상북도 칠곡군 금호로 272 (지천면)',
          latitude: 35.9584669,
          longitude: 128.4496262,
        },
        {
          address: '경상북도 구미시 첨단기업2로 7 (산동면, 우향전자)',
          latitude: 36.1410601,
          longitude: 128.449009,
        },
        {
          address: '경상북도 경산시 대구대로 529 (진량읍, 대원)',
          latitude: 35.8804898,
          longitude: 128.8525185,
        },
        {
          address: '경상북도 포항시 남구 냉천로 508 (오천읍, 세방기업㈜)',
          latitude: 35.9848052,
          longitude: 129.3655516,
        },
        {
          address: '경상북도 구미시 산동면 첨단기업5로 10-107',
          latitude: 36.146612,
          longitude: 128.43386,
        },
        {
          address: '경상북도 칠곡군 칠곡대로 635 (약목면)',
          latitude: 36.0373511,
          longitude: 128.3640177,
        },
        {
          address: '전라남도 무안군 망운면 공항로 970-260',
          latitude: 34.9922093,
          longitude: 126.3880705,
        },
        {
          address: '전라남도 목포시 달리길157번길 35-1 (달동)',
          latitude: 34.7763943,
          longitude: 126.3072121,
        },
        {
          address: '전라남도 광양시 제철로 1800 (금호동, (주)POSCO)',
          latitude: 34.9052022,
          longitude: 127.7646932,
        },
        {
          address: '전라남도 여수시 망양로 457 (만흥동)',
          latitude: 34.7872388,
          longitude: 127.7506946,
        },
        {
          address: '경상북도 포항시 남구 냉천로 620 (오천읍)',
          latitude: 35.9443406,
          longitude: 129.3950875,
        },
        {
          address: '경상북도 포항시 남구 동해안로 6262 (동촌동)',
          latitude: 35.9988251,
          longitude: 129.3891437,
        },
        {
          address: '경상남도 양산시 북정공단1길 50 (북정동)',
          latitude: 35.3655765,
          longitude: 129.0447828,
        },
        {
          address: '경상남도 진주시 산업단지로44번길 66 (사봉면)',
          latitude: 35.1912954,
          longitude: 128.2840986,
        },
        {
          address: '경상남도 양산시 유산공단10길 60-116 (유산동)',
          latitude: 35.3698847,
          longitude: 129.0231144,
        },
        {
          address: '경상남도 양산시 어실로 461-1 (어곡동, (주)보성)',
          latitude: 35.3949722,
          longitude: 129.006031,
        },
        {
          address: '경상남도 창원시 진해구 두동남로 16 (두동)',
          latitude: 35.1269033,
          longitude: 128.8144028,
        },
        {
          address:
            '경상남도 창원시 진해구 남의로44번길 10 (남양동, 티와이밸브)',
          latitude: 35.1145649,
          longitude: 128.7857091,
        },
        {
          address: '경상남도 창원시 진해구 두동서로 21 (두동)',
          latitude: 35.1267208,
          longitude: 128.8150099,
        },
        {
          address: '경상남도 양산시 상북면 상북중앙로 96',
          latitude: 35.3937625,
          longitude: 129.0566338,
        },
        {
          address: '경상남도 양산시 칠산길 52 (다방동, 오성창고)',
          latitude: 35.3343238,
          longitude: 129.0475747,
        },
        {
          address: '경상남도 양산시 유산공단4길 88 (유산동)',
          latitude: 35.3589851,
          longitude: 129.0266607,
        },
        {
          address: '경상남도 양산시 충렬로 394-13 (상북면)',
          latitude: 35.37804,
          longitude: 129.0444163,
        },
        {
          address: '경상남도 양산시 양산대로 2187 (하북면, 대동창고(주))',
          latitude: 35.4595215,
          longitude: 129.0781891,
        },
        {
          address: '경상남도 양산시 산막공단북2길 34 (산막동)',
          latitude: 35.3714607,
          longitude: 129.0537988,
        },
        {
          address: '경상남도 창원시 진해구 대장로 44 (소사동)',
          latitude: 35.13108709999999,
          longitude: 128.7821898,
        },
        {
          address: '경상북도 구미시 4공단로 249-29 (금전동)',
          latitude: 36.1345195,
          longitude: 128.4419831,
        },
        {
          address: '경상북도 포항시 남구 동해면 약전로8번길 8-16',
          latitude: 35.989496,
          longitude: 129.4520465,
        },
        {
          address: '경상북도 칠곡군 지천면 금호로 308',
          latitude: 35.9478447,
          longitude: 128.4444734,
        },
        {
          address: '경상북도 청도군 각남면 한재로 1346',
          latitude: 35.6276629,
          longitude: 128.6465234,
        },
        {
          address: '경기도 안성시 죽산면 죽양대로 95-16',
          latitude: 37.0880135,
          longitude: 127.4346532,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 820',
          latitude: 36.9630153,
          longitude: 126.8573505,
        },
        {
          address: '경기도 광주시 곤지암읍 신만로436번길 6',
          latitude: 37.362341,
          longitude: 127.400183,
        },
        {
          address:
            '경기도 안산시 단원구 산단로19번길 168 (목내동, 성보화학(주))',
          latitude: 37.30331839999999,
          longitude: 126.7675479,
        },
        {
          address: '경기도 광주시 경충대로 2210 (삼동)',
          latitude: 37.4150338,
          longitude: 127.1982307,
        },
        {
          address: '경기도 광주시 새재길 78 (곤지암읍)',
          latitude: 37.333981,
          longitude: 127.3977216,
        },
        {
          address: '경기도 안산시 단원구 능안로 107 (신길동)',
          latitude: 37.32465699999999,
          longitude: 126.7795261,
        },
        {
          address: '경기도 광주시 장지9길 74 (장지동)',
          latitude: 37.4024073,
          longitude: 127.2375598,
        },
        {
          address: '경기도 용인시 기흥구 용구대로 1706 (공세동)',
          latitude: 37.2816038,
          longitude: 127.1064881,
        },
        {
          address: '경기도 성남시 분당구 대왕판교로 95 (금곡동)',
          latitude: 37.3517506,
          longitude: 127.1007089,
        },
        {
          address: '경기도 이천시 억만리로 140-29 (마장면, 대화물류(주))',
          latitude: 37.259195,
          longitude: 127.37015,
        },
        {
          address: '경기도 안산시 단원구 별망로 253 (성곡동)',
          latitude: 37.3103565,
          longitude: 126.7551483,
        },
        {
          address: '경기도 파주시 오금로 34 (탄현면)',
          latitude: 37.8249711,
          longitude: 126.7058105,
        },
        {
          address: '경기도 화성시 경기동로 220-17 (동탄면)',
          latitude: 37.1573839,
          longitude: 127.097207,
        },
        {
          address: '경기도 광주시 도척면 국사봉로 75',
          latitude: 37.3204958,
          longitude: 127.3423224,
        },
        {
          address: '경기도 용인시 수지구 동천로 6 (동천동, 수지냉장)',
          latitude: 37.3419548,
          longitude: 127.1012782,
        },
        {
          address: '경기도 광주시 장지9길 42-4 (장지동)',
          latitude: 37.399708,
          longitude: 127.2374742,
        },
        {
          address: '경기도 용인시 처인구 중부대로 2605 (양지면, 선일자동냉장)',
          latitude: 37.2476183,
          longitude: 127.3221799,
        },
        {
          address: '경기도 평택시 현곡길 194 (청북읍, (주)서해로지스)',
          latitude: 37.0495135,
          longitude: 126.922156,
        },
        {
          address: '경기도 용인시 기흥구 용구대로 1608 (공세동)',
          latitude: 37.2816038,
          longitude: 127.1064881,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 145',
          latitude: 36.9645018,
          longitude: 126.8421493,
        },
        {
          address: '경기도 용인시 처인구 경기동로 479-11 (남사면, 씨엠파트너)',
          latitude: 37.1403125,
          longitude: 127.1742124,
        },
        {
          address:
            '경기도 성남시 중원구 사기막골로150번길 19 (상대원동, 한국축지공장)',
          latitude: 37.4432426,
          longitude: 127.1784929,
        },
        {
          address: '경기도 평택시 하만호길 287-1 (포승읍)',
          latitude: 36.9587074,
          longitude: 126.8542012,
        },
        {
          address: '경기도 평택시 청북읍 청오로 440-9',
          latitude: 37.0369623,
          longitude: 126.9576637,
        },
        {
          address: '경기도 광주시 국사봉로 97-27 (도척면)',
          latitude: 37.3196233,
          longitude: 127.3443835,
        },
        {
          address: '경기도 광주시 곤지암읍 경충대로311번길 17',
          latitude: 37.3354623,
          longitude: 127.3678282,
        },
        {
          address: '경기도 안성시 뱀골길 9-32 (원곡면)',
          latitude: 37.0531824,
          longitude: 127.1315622,
        },
        {
          address: '경기도 이천시 원적로618번길 241 (백사면)',
          latitude: 37.3215205,
          longitude: 127.4606526,
        },
        {
          address: '경기도 평택시 현덕면 서해로 470-28',
          latitude: 36.943561,
          longitude: 126.9159687,
        },
        {
          address: '경기도 의왕시 창말로 39 (이동, 의왕제1터미널)',
          latitude: 37.3362467,
          longitude: 126.9557925,
        },
        {
          address: '경기도 광주시 국사봉로 185-36 (도척면)',
          latitude: 37.3143666,
          longitude: 127.3513178,
        },
        {
          address: '경기도 평택시 평택항만길 181-40 (포승읍)',
          latitude: 36.9691608,
          longitude: 126.8399573,
        },
        {
          address: '경기도 용인시 처인구 포곡로246번길 41 (포곡읍)',
          latitude: 37.2741133,
          longitude: 127.2322716,
        },
        {
          address: '경기도 화성시 재안골길 6-5 (서신면)',
          latitude: 37.1782918,
          longitude: 126.7107374,
        },
        {
          address: '경기도 김포시 아라육로58번길 147 (고촌읍, (주)티제이물류)',
          latitude: 37.6033543,
          longitude: 126.7709573,
        },
        {
          address: '경기도 안성시 노성로 166 (일죽면)',
          latitude: 37.1140703,
          longitude: 127.4846882,
        },
        {
          address: '경기도 안성시 미양면 미양로 660',
          latitude: 36.98337,
          longitude: 127.2227192,
        },
        {
          address: '경기도 안성시 양성로 406 (양성면)',
          latitude: 37.0868748,
          longitude: 127.2076614,
        },
        {
          address: '경기도 평택시 송내길 81-2 (포승읍)',
          latitude: 36.9650209,
          longitude: 126.8687063,
        },
        {
          address: '경기도 연천군 청정로2310번길 121-62 (군남면)',
          latitude: 38.0217721,
          longitude: 127.0417859,
        },
        {
          address: '경기도 용인시 처인구 포은대로 892 (모현면)',
          latitude: 37.34303999999999,
          longitude: 127.1898088,
        },
        {
          address: '경기도 평택시 엘지로 222 (진위면)',
          latitude: 37.1236179,
          longitude: 127.0892413,
        },
        {
          address: '경기도 평택시 포승읍 포승산단로40번길 54',
          latitude: 36.9703049,
          longitude: 126.8622795,
        },
        {
          address: '경기도 화성시 화성로 632 (송산면)',
          latitude: 37.2107191,
          longitude: 126.7583508,
        },
        {
          address: '경기도 평택시 서동대로 983 (포승읍)',
          latitude: 36.971791,
          longitude: 126.8700324,
        },
        {
          address: '경기도 용인시 처인구 죽양대로2071번길 7 (양지면, 양지물류)',
          latitude: 37.2189999,
          longitude: 127.3144466,
        },
        {
          address: '경기도 용인시 기흥구 농서로 51 (농서동)',
          latitude: 37.2227691,
          longitude: 127.0912607,
        },
        {
          address: '경기도 용인시 기흥구 동탄기흥로 776 (고매동, 강동냉장)',
          latitude: 37.228029,
          longitude: 127.102388,
        },
        {
          address: '경기도 이천시 호법면 이섭대천로309번길 56-22',
          latitude: 37.2260822,
          longitude: 127.4124909,
        },
        {
          address: '경기도 평택시 오성면 오성서로 141',
          latitude: 36.9946396,
          longitude: 126.9643676,
        },
        {
          address: '경기도 평택시 서동대로 549 (포승읍)',
          latitude: 36.9453646,
          longitude: 126.8725649,
        },
        {
          address: '경기도 고양시 일산동구 고봉로702번길 125-25 (성석동)',
          latitude: 37.7163547,
          longitude: 126.7964968,
        },
        {
          address: '경기도 안성시 심교길 8-35 (공도읍)',
          latitude: 37.0284526,
          longitude: 127.1752388,
        },
        {
          address: '경기도 이천시 덕평로 816-38 (마장면, SLX물류센터)',
          latitude: 37.2308874,
          longitude: 127.3679472,
        },
        {
          address: '충청남도 서산시 독곶2로 82 (대산읍)',
          latitude: 36.994878,
          longitude: 126.3606157,
        },
        {
          address: '강원도 인제군 인제읍 덕산로 64',
          latitude: 38.0821721,
          longitude: 128.1867158,
        },
        {
          address: '부산광역시 사하구 암남공원로 471 (감천동)',
          latitude: 35.0803324,
          longitude: 129.0065362,
        },
        {
          address: '경기도 파주시 문산읍 독서울2길 44-16',
          latitude: 37.8636167,
          longitude: 126.8051579,
        },
        {
          address:
            '인천광역시 서구 정서진8로 13, (주)세인티앤엘 인천아라뱃길 물류센터 (오류동)',
          latitude: 37.54816,
          longitude: 126.676691,
        },
        {
          address: '부산광역시 사하구 원양로 359 (감천동)',
          latitude: 35.0829538,
          longitude: 129.0060804,
        },
        {
          address: '경상남도 창녕군 성산면 창한로 385-63',
          latitude: 35.6323113,
          longitude: 128.4595698,
        },
        {
          address: '경기도 고양시 일산동구 장항로225번길 195 (장항동)',
          latitude: 37.6421949,
          longitude: 126.7643523,
        },
        {
          address: '광주광역시 광산구 동곡로185번길 63-26 (하산동)',
          latitude: 35.1004068,
          longitude: 126.7724821,
        },
        {
          address: '인천광역시 중구 서해대로94번길 98 (신흥동3가)',
          latitude: 37.4321443,
          longitude: 126.6264323,
        },
        {
          address: '인천광역시 중구 축항대로290번길 155 (신흥동3가)',
          latitude: 37.4349005,
          longitude: 126.6200815,
        },
        {
          address: '경상북도 칠곡군 왜관읍 공단로13길 6-15',
          latitude: 35.967926,
          longitude: 128.4154959,
        },
        {
          address: '경기도 이천시 부발읍 중부대로1763번길 45',
          latitude: 37.2930618,
          longitude: 127.5002694,
        },
        {
          address: '인천광역시 부평구 가좌로84번길 59, 1동 1층 (십정동)',
          latitude: 37.4768338,
          longitude: 126.6893818,
        },
        {
          address: '경기도 남양주시 진접읍 금강로1281번길 24-1, 지1층',
          latitude: 37.711362,
          longitude: 127.1733666,
        },
        {
          address: '서울특별시 금천구 시흥대로 169 (시흥동)',
          latitude: 37.4490955,
          longitude: 126.9022039,
        },
        {
          address: '경기도 고양시 일산동구 견달산로 324 (문봉동)',
          latitude: 37.6948976,
          longitude: 126.8206916,
        },
        {
          address: '강원도 강릉시 구정면 범일로 35',
          latitude: 37.7103867,
          longitude: 128.9113402,
        },
        {
          address: '서울특별시 강서구 하늘길 247, 1층 (공항동, 물류창고)',
          latitude: 37.555525,
          longitude: 126.8067017,
        },
        {
          address: '경기도 여주시 가남읍 여주남로 532',
          latitude: 37.2476515,
          longitude: 127.5919878,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-129, 7동 (물류센터 7동)',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '경기도 용인시 처인구 남사면 처인성로 1027',
          latitude: 37.176268,
          longitude: 127.1809693,
        },
        {
          address: '전라북도 군산시 서수면 동군산로 965',
          latitude: 36.0117824,
          longitude: 126.8759864,
        },
        {
          address: '경상북도 영천시 송죽길 118 (도동)',
          latitude: 35.9399221,
          longitude: 128.9356521,
        },
        {
          address: '전라북도 정읍시 신태인읍 석지로 621-48',
          latitude: 35.6972842,
          longitude: 126.8731515,
        },
        {
          address: '경기도 용인시 기흥구 상갈동 246-6',
          latitude: 37.262163,
          longitude: 127.1004538,
        },
        {
          address: '대구광역시 북구 칠곡중앙대로51길 32 (태전동)',
          latitude: 35.9173436,
          longitude: 128.5451476,
        },
        {
          address: '경기도 고양시 일산서구 덕산로57번길 27-25 (구산동)',
          latitude: 37.6970622,
          longitude: 126.708832,
        },
        {
          address: '전라북도 익산시 왕궁면 호남로 359,  359-1',
          latitude: 35.9442776,
          longitude: 127.0550939,
        },
        {
          address: '서울특별시 금천구 범안로 1209 (독산동)',
          latitude: 37.4667856,
          longitude: 126.8962852,
        },
        {
          address: '부산광역시 기장군 일광면 이화로 113-28',
          latitude: 35.2775378,
          longitude: 129.2292672,
        },
        {
          address: '전라북도 순창군 풍산면 삼촌2길 47-15',
          latitude: 35.314543,
          longitude: 127.1238282,
        },
        {
          address: '경상북도 안동시 풍산읍 지풍로 1846-8',
          latitude: 36.5705947,
          longitude: 128.5387066,
        },
        {
          address: '경기도 김포시 대곶면 대곶로 429-19',
          latitude: 37.6818046,
          longitude: 126.5525556,
        },
        {
          address: '광주광역시 광산구 동곡로185번길 63-5 (하산동)',
          latitude: 35.1004068,
          longitude: 126.7724821,
        },
        {
          address: '경기도 용인시 처인구 남사면 통삼로 282-21',
          latitude: 37.1227717,
          longitude: 127.131999,
        },
        {
          address: '경기도 평택시 진위면 진위서로 63',
          latitude: 37.1095807,
          longitude: 127.071736,
        },
        {
          address:
            '경상남도 창원시 진해구 신항7로 63 (남문동, 엠에스디스트리파크(주)웅동물류센터)',
          latitude: 35.1074146,
          longitude: 128.7602218,
        },
        {
          address: '부산광역시 강서구 금호순서길282번길 80, 나동 (대저2동)',
          latitude: 35.1613463,
          longitude: 128.9427904,
        },
        {
          address:
            '인천광역시 중구 공항로 272 (운서동, 인천국제공항화물터미널)',
          latitude: 37.4848155,
          longitude: 126.4396163,
        },
        {
          address: '대전광역시 중구 대둔산로300번길 36, 1,2층 (사정동)',
          latitude: 36.296204,
          longitude: 127.3879658,
        },
        {
          address: '전라북도 김제시 백구면 황토로 1193',
          latitude: 35.8838981,
          longitude: 126.9599899,
        },
        {
          address:
            '경상북도 칠곡군 지천면 금호로 272 (영남컨복합화물터미널및내륙컨테이너기지 4동(라동))',
          latitude: 35.9584669,
          longitude: 128.4496262,
        },
        {
          address: '경기도 용인시 처인구 원삼면 맹리로2번길 31',
          latitude: 37.1909285,
          longitude: 127.3275348,
        },
        {
          address: '경기도 용인시 기흥구 청명산로 2 (하갈동)',
          latitude: 37.2558079,
          longitude: 127.0930521,
        },
        {
          address:
            '경기도 군포시 번영로 82, 1층 (부곡동, 한국복합물류(주) 복합창고 9동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27, 6동 (액소후레쉬물류(주))',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '경상남도 함안군 칠서면 함의로 161',
          latitude: 35.310433,
          longitude: 128.4941152,
        },
        {
          address: '서울특별시 성동구 고산자로 344, 지하1층 (마장동, 봉지빌딩)',
          latitude: 37.5700927,
          longitude: 127.037944,
        },
        {
          address: '광주광역시 광산구 동곡로185번길 63-13 (하산동)',
          latitude: 35.1004068,
          longitude: 126.7724821,
        },
        {
          address: '울산광역시 울주군 삼남면 반구대로 149',
          latitude: 35.5112615,
          longitude: 129.0935757,
        },
        {
          address: '서울특별시 성동구 고산자로 345(지하1층 마장동, 고운타워)',
          latitude: 37.5702068,
          longitude: 127.0373607,
        },
        {
          address: '충청남도 공주시 유구읍 중앙2길 92-1',
          latitude: 36.5488289,
          longitude: 126.9516322,
        },
        {
          address: '전라남도 나주시 나주서부로 37-20 (운곡동)',
          latitude: 34.9872145,
          longitude: 126.6963896,
        },
        {
          address: '부산광역시 기장군 기장읍 차성로287번길 23',
          latitude: 35.2430803,
          longitude: 129.211893,
        },
        {
          address: '경기도 용인시 처인구 백암면 덕평로 140, 비1층',
          latitude: 37.1813182,
          longitude: 127.3735781,
        },
        {
          address: '강원도 강릉시 수리골길 109 (교동)',
          latitude: 37.775541,
          longitude: 128.898134,
        },
        {
          address: '경기도 양주시 은현면 그루고개로 435',
          latitude: 37.85424,
          longitude: 127.0137306,
        },
        {
          address: '충청남도 서천군 장항읍 장항공단길 37-19',
          latitude: 36.0071678,
          longitude: 126.7168368,
        },
        {
          address: '경기도 용인시 처인구 모현읍 포은대로 1114, 우주',
          latitude: 37.33686489999999,
          longitude: 127.1668127,
        },
        {
          address: '경기도 고양시 일산서구 덕산로65번길 19 (구산동)',
          latitude: 37.6951952,
          longitude: 126.7116231,
        },
        {
          address: '전라북도 남원시 사매면 대사로 1244',
          latitude: 35.4925378,
          longitude: 127.3428792,
        },
        {
          address: '전라북도 전주시 덕진구 구렛들2길 25 (팔복동1가)',
          latitude: 35.8586773,
          longitude: 127.0996471,
        },
        {
          address: '경기도 용인시 처인구 양지면 식송로 18 (2층)',
          latitude: 37.2325952,
          longitude: 127.2340902,
        },
        {
          address: '경상남도 함안군 칠서면 공단안길 66-92, 오뚜기라면주식회사',
          latitude: 35.3586401,
          longitude: 128.4880829,
        },
        {
          address: '경기도 용인시 기흥구 중부대로874번길 3 (상하동)',
          latitude: 37.250793,
          longitude: 127.1475908,
        },
        {
          address: '경기도 용인시 처인구 백암면 백암로 49, 오뚜기물류서비스',
          latitude: 37.1533147,
          longitude: 127.3841362,
        },
        {
          address: '경기도 용인시 처인구 백암면 청계로67번길 30',
          latitude: 37.1592941,
          longitude: 127.3930001,
        },
        {
          address: '충청북도 괴산군 청안면 칠보로 712, 주식회사 시즈너FS',
          latitude: 36.7810281,
          longitude: 127.6555575,
        },
        {
          address: '경기도 연천군 전곡읍 전영로11번길 2-20',
          latitude: 38.0310093,
          longitude: 127.0678402,
        },
        {
          address: '서울특별시 성동구 마장로31길 40, 지하1층 (마장동)',
          latitude: 37.5697882,
          longitude: 127.0384008,
        },
        {
          address: '경상남도 양산시 상북면 수서로 503-40 (부산로지스)',
          latitude: 35.4477409,
          longitude: 129.0210973,
        },
        {
          address:
            '경기도 부천시 신흥로511번길 112, 부천 저온물류센터 2~6층 (오정동)',
          latitude: 37.4993078,
          longitude: 126.7761475,
        },
        {
          address:
            '경기도 오산시 오산로 149, 701~705, B07,B12,B13,B14호 (오산동)',
          latitude: 37.1393116,
          longitude: 127.0737052,
        },
        {
          address: '인천광역시 중구 서해대로94번길 100 (신흥동3가)',
          latitude: 37.4348599,
          longitude: 126.6250788,
        },
        {
          address: '경기도 용인시 처인구 남사면 원암로 439',
          latitude: 37.0927332,
          longitude: 127.170228,
        },
        {
          address: '경상남도 김해시 진례면 테크노밸리1로93번길 14',
          latitude: 35.2491873,
          longitude: 128.7674388,
        },
        {
          address: '충청북도 청주시 서원구 남이면 청남로 1052, B동',
          latitude: 36.5463324,
          longitude: 127.4306972,
        },
        {
          address:
            '서울특별시 송파구 송파대로 55, 지상2층 (장지동, 서울복합물류, F동)',
          latitude: 37.4746178,
          longitude: 127.1260071,
        },
        {
          address: '제주특별자치도 제주시 영강길 129-1 (영평동)',
          latitude: 33.4875891,
          longitude: 126.5833686,
        },
        {
          address: '경상북도 포항시 북구 청하면 고현길49번길 23',
          latitude: 36.1611172,
          longitude: 129.3352168,
        },
        {
          address: '충청북도 청주시 서원구 남이면 척산화당로 85-20',
          latitude: 36.558573,
          longitude: 127.4570482,
        },
        {
          address:
            '경상남도 밀양시 산외면 남기동길 111, (밀양2센터 1층) 나동 1층',
          latitude: 35.5096199,
          longitude: 128.7981604,
        },
        {
          address: '서울특별시 성동구 고산자로26길 5 (마장동)',
          latitude: 37.5707723,
          longitude: 127.0384153,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로152번길 115, 1층',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '경기도 안성시 공도읍 서동대로 4036-1',
          latitude: 36.9971733,
          longitude: 127.1549823,
        },
        {
          address: '경상남도 사천시 노대길 26, 해상냉장 (노룡동)',
          latitude: 34.9782664,
          longitude: 128.0548562,
        },
        {
          address: '부산광역시 사하구 원양로 319 (감천동)',
          latitude: 35.0794003,
          longitude: 129.0050159,
        },
        {
          address: '경기도 화성시 양감면 초록로 103, B동 1층',
          latitude: 37.095142,
          longitude: 126.9713791,
        },
        {
          address: '전라북도 익산시 낭산면 함낭로 1097',
          latitude: 36.0760438,
          longitude: 127.0264066,
        },
        {
          address: '서울특별시 성동구 마장로33길 51 (마장동)',
          latitude: 37.5701228,
          longitude: 127.0397685,
        },
        {
          address: '경기도 광주시 장지9길 34-16, 4-6층 (장지동)',
          latitude: 37.3986047,
          longitude: 127.2389491,
        },
        {
          address: '서울특별시 성동구 마장동 439-9 지하1,2층',
          latitude: 37.5702119,
          longitude: 127.0411902,
        },
        {
          address:
            '경기도 용인시 기흥구 신수로 178 (신갈동, 한국야쿠르트신갈물류센터)',
          latitude: 37.2868311,
          longitude: 127.0998558,
        },
        {
          address: '인천광역시 중구 서해대로140번길 42 (신흥동3가)',
          latitude: 37.4382691,
          longitude: 126.6239237,
        },
        {
          address: '인천광역시 중구 월미로 22 (북성동1가)',
          latitude: 37.4762583,
          longitude: 126.6156934,
        },
        {
          address: '전라북도 군산시 나포면 외곤1길 40',
          latitude: 36.0313388,
          longitude: 126.8370844,
        },
        {
          address: '인천광역시 중구 축항대로296번길 115 (신흥동3가)',
          latitude: 37.4383779,
          longitude: 126.6264059,
        },
        {
          address: '경기도 평택시 청북읍 청북서로 23',
          latitude: 37.0490191,
          longitude: 126.9026991,
        },
        {
          address: '강원도 춘천시 후석로440번길 10 (후평동)',
          latitude: 37.8884511,
          longitude: 127.744305,
        },
        {
          address: '강원도 횡성군 우천면 우천제2농공단지로 65-50',
          latitude: 37.4594739,
          longitude: 128.0623572,
        },
        {
          address: '세종특별자치시 부강면 갈산산수로 281-1',
          latitude: 36.5558311,
          longitude: 127.3552637,
        },
        {
          address: '전라북도 익산시 여산면 두여길 119',
          latitude: 36.074134,
          longitude: 127.0780304,
        },
        {
          address: '경상남도 창원시 진해구 신항6로 30, GDC (남문동)',
          latitude: 35.1074146,
          longitude: 128.7602218,
        },
        {
          address: '전라북도 완주군 이서면 이서남로 46',
          latitude: 35.7980542,
          longitude: 127.0482013,
        },
        {
          address: '경기도 파주시 법원읍 자운서원로 410-6 (자연일가)',
          latitude: 37.8647232,
          longitude: 126.8461819,
        },
        {
          address: '경기도 안성시 미양면 신두만곡로 811-15',
          latitude: 36.9732143,
          longitude: 127.2430596,
        },
        {
          address: '경기도 용인시 처인구 동부로 169, 2층 (운학동, 용인냉장)',
          latitude: 37.2222201,
          longitude: 127.2250941,
        },
        {
          address: '충청남도 천안시 서북구 입장면 용정도하길 215-19',
          latitude: 36.927205,
          longitude: 127.1869479,
        },
        {
          address: '경기도 안양시 만안구 덕천로72번길 85, 1층 (안양동)',
          latitude: 37.3885861,
          longitude: 126.9396141,
        },
        {
          address: '경기도 광주시 초월읍 산수로 368',
          latitude: 37.3842189,
          longitude: 127.3135318,
        },
        {
          address: '경상남도 김해시 진영읍 본산2로 29',
          latitude: 35.3116847,
          longitude: 128.7494451,
        },
        {
          address: '충청북도 음성군 대소면 대금로 20, 1층',
          latitude: 36.9883803,
          longitude: 127.4487785,
        },
        {
          address: '경기도 광주시 초월읍 산수로 642-27',
          latitude: 37.3842189,
          longitude: 127.3135318,
        },
        {
          address: '전라남도 나주시 다시면 고막원길 8-6',
          latitude: 35.0281757,
          longitude: 126.6089423,
        },
        {
          address: '전라남도 구례군 용방면 용산로 107-42',
          latitude: 35.2750575,
          longitude: 127.4123763,
        },
        {
          address: '전라남도 나주시 동수농공단지길 159-38 (동수동)',
          latitude: 34.9842301,
          longitude: 126.6764042,
        },
        {
          address: '경기도 안성시 일죽면 죽화로  139-1',
          latitude: 37.1118006,
          longitude: 127.4435814,
        },
        {
          address: '인천광역시 남동구 앵고개로 426 (고잔동)',
          latitude: 37.39843740000001,
          longitude: 126.6874766,
        },
        {
          address: '서울특별시 성동구 고산자로24길 11, 지층호 (마장동)',
          latitude: 37.57006670000001,
          longitude: 127.0387447,
        },
        {
          address: '서울특별시 금천구 가산로9길 9 (가산동)',
          latitude: 37.4769535,
          longitude: 126.8913363,
        },
        {
          address: '경기도 안양시 만안구 병목안로 25, 삼덕빌딩 2동 (안양동)',
          latitude: 37.4180344,
          longitude: 126.9195037,
        },
        {
          address:
            '강원도 고성군 죽왕면 공현진해변길 78-1, 죽왕수산업협동조합 냉동창고',
          latitude: 38.355459,
          longitude: 128.5100407,
        },
        {
          address: '전라남도 나주시 이창택지길 37-4 (이창동)',
          latitude: 34.9961396,
          longitude: 126.7035969,
        },
        {
          address: '대구광역시 달성군 논공읍 논공로 465',
          latitude: 35.7376014,
          longitude: 128.4678441,
        },
        {
          address: '충청남도 계룡시 두마면 제1산단로 40-29',
          latitude: 36.2505567,
          longitude: 127.2684056,
        },
        {
          address: '충청남도 서천군 장항읍 장항공단길10번길 36-1',
          latitude: 36.0041138,
          longitude: 126.7209947,
        },
        {
          address: '경기도 용인시 처인구 이동읍 삼배울로 23, 주식회사 프레시지',
          latitude: 37.1775187,
          longitude: 127.210341,
        },
        {
          address: '인천광역시 남동구 능허대로559번길 24 (고잔동)',
          latitude: 37.3961189,
          longitude: 126.6761467,
        },
        {
          address: '경기도 남양주시 진접읍 경복대로272번길 27, 3동 1층',
          latitude: 37.7250877,
          longitude: 127.2041407,
        },
        {
          address: '인천광역시 계양구 아나지로 495, 지하1, 1층 (서운동)',
          latitude: 37.5261723,
          longitude: 126.7473633,
        },
        {
          address: '대구광역시 서구 국채보상로3길 25 (이현동)',
          latitude: 35.8704556,
          longitude: 128.5330999,
        },
        {
          address: '충청북도 청주시 청원구 오창읍 성재2길 21',
          latitude: 36.7206165,
          longitude: 127.3442076,
        },
        {
          address: '충청북도 음성군 대소면 대물로 36',
          latitude: 36.973789,
          longitude: 127.4710052,
        },
        {
          address: '부산광역시 서구 원양로 147 (암남동)',
          latitude: 35.0659561,
          longitude: 129.0121407,
        },
        {
          address: '경기도 안성시 원곡면 청원로 1752-122',
          latitude: 37.0348578,
          longitude: 127.1109698,
        },
        {
          address:
            '경상남도 창원시 진해구 신항8로 351 (남문동, (주)동원로엑스웅동냉동창고)',
          latitude: 35.07817259999999,
          longitude: 128.8330003,
        },
        {
          address: '경기도 시흥시 오이도로 22-12, 가동 (정왕동)',
          latitude: 37.3472117,
          longitude: 126.7026075,
        },
        {
          address: '경기도 수원시 영통구 신원로250번길 20 (매탄동)',
          latitude: 37.25706780000001,
          longitude: 127.0612783,
        },
        {
          address: '경기도 용인시 기흥구 보라동 423-3',
          latitude: 37.2545322,
          longitude: 127.1087512,
        },
        {
          address: '경기도 여주시 삼교동 삼교1길 9-7',
          latitude: 37.2398424,
          longitude: 127.6524339,
        },
        {
          address: '전라북도 익산시 목천로 90 (목천동)',
          latitude: 35.9217129,
          longitude: 126.9371575,
        },
        {
          address: '강원도 원주시 문막읍 원문로 2057, 1동 2층',
          latitude: 37.3014218,
          longitude: 127.8033424,
        },
        {
          address: '경기도 김포시 통진읍 김포대로1950번길 68-32',
          latitude: 37.6806177,
          longitude: 126.6313758,
        },
        {
          address:
            '경기도 오산시 동부대로 468-31, 더본냉장 지상2,3층 및 지하2층 (원동)',
          latitude: 37.1436107,
          longitude: 127.0838866,
        },
        {
          address: '전라남도 목포시 삼학로92번길 6-1 (산정동)',
          latitude: 34.7857161,
          longitude: 126.3937334,
        },
        {
          address: '서울특별시 성동구 마장로31길 44(마장동,지하1층, 2층)',
          latitude: 37.5700198,
          longitude: 127.0385076,
        },
        {
          address: '부산광역시 북구 덕천로 375, 나호 (만덕동)',
          latitude: 35.2103091,
          longitude: 129.0441791,
        },
        {
          address: '충청남도 천안시 동남구 성남면 5산단1로 81',
          latitude: 36.7527174,
          longitude: 127.267247,
        },
        {
          address: '강원도 횡성군 우천면 수남로 365',
          latitude: 37.4592396,
          longitude: 128.066247,
        },
        {
          address: '경상남도 함안군 칠원면 오곡로 54',
          latitude: 35.2778587,
          longitude: 128.5247676,
        },
        {
          address: '강원도 강릉시 강동면 오이동길 58',
          latitude: 37.6822066,
          longitude: 129.0142686,
        },
        {
          address: '경기도 평택시 진위면 경기대로 1952',
          latitude: 37.11635040000001,
          longitude: 127.0667587,
        },
        {
          address: '대전광역시 대덕구 생산5길 11 (대화동)',
          latitude: 36.36608470000001,
          longitude: 127.4093584,
        },
        {
          address: '경상남도 양산시 산막공단북2길 11 (산막동)',
          latitude: 35.3700206,
          longitude: 129.0515946,
        },
        {
          address: '경상남도 창원시 마산회원구 봉암공단1길 9 (봉암동)',
          latitude: 35.2201404,
          longitude: 128.5958408,
        },
        {
          address: '경기도 광명시 남부순환로 1092, 5층 (철산동)',
          latitude: 37.487733,
          longitude: 126.8757411,
        },
        {
          address: '대구광역시 북구 노원로 106, 1,3층 (노원동3가)',
          latitude: 35.8954218,
          longitude: 128.5734245,
        },
        {
          address: '경기도 이천시 마장면 이장로311번길 83',
          latitude: 37.2803303,
          longitude: 127.386647,
        },
        {
          address: '서울특별시 동대문구 사가정로 217 (장안동)',
          latitude: 37.5791376,
          longitude: 127.069221,
        },
        {
          address: '서울특별시 서초구 서초대로70길 15 (서초동)',
          latitude: 37.4956841,
          longitude: 127.0239604,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로182번길 23, 롯데마트몰 물류센터 2층',
          latitude: 37.5962874,
          longitude: 126.7806494,
        },
        {
          address: '인천광역시 중구 공항동로296번길 146-2 (운서동)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 225, 44동 (5단지)',
          latitude: 35.3113072,
          longitude: 129.0163436,
        },
        {
          address: '대구광역시 달성군 다사읍 서재로12길 39',
          latitude: 35.8673154,
          longitude: 128.4940517,
        },
        {
          address: '경기도 광주시 초월읍 두둘기길 33',
          latitude: 37.3984102,
          longitude: 127.3140792,
        },
        {
          address: '경기도 이천시 마장면 서이천로 556',
          latitude: 37.2604475,
          longitude: 127.3837892,
        },
        {
          address: '경기도 용인시 처인구 포곡읍 성산로 600',
          latitude: 37.2831256,
          longitude: 127.2051658,
        },
        {
          address: '제주특별자치도 제주시 애월읍 항몽로 297',
          latitude: 33.4586534,
          longitude: 126.4099723,
        },
        {
          address: '충청북도 괴산군 사리면 사리로 81 ((주)엘림식품)',
          latitude: 36.8036988,
          longitude: 127.6437652,
        },
        {
          address: '전라북도 익산시 금마면 무왕로33길 220',
          latitude: 35.9863945,
          longitude: 127.0561782,
        },
        {
          address: '충청북도 옥천군 옥천읍 양수로6길 20, 공장 주1동',
          latitude: 36.2947403,
          longitude: 127.5558224,
        },
        {
          address: '충청북도 옥천군 옥천읍 양수로6길 19 (주1동)',
          latitude: 36.2948545,
          longitude: 127.5562259,
        },
        {
          address: '충청북도 옥천군 군북면 자모길 21-3, 1동 1층',
          latitude: 36.3316527,
          longitude: 127.5205174,
        },
        {
          address: '경기도 화성시 팔탄면 제암고주로53번길 20-46',
          latitude: 37.1256947,
          longitude: 126.8861782,
        },
        {
          address: '전라남도 나주시 산포면 영산로 6041',
          latitude: 35.0396674,
          longitude: 126.7876466,
        },
        {
          address:
            '서울특별시 성동구 마장로35길 76, 지층 119호~123호 (마장동, 현대아파트)',
          latitude: 37.57016,
          longitude: 127.042999,
        },
        {
          address: '경기도 부천시 신흥로 370, 2층일부 (내동)',
          latitude: 37.5164188,
          longitude: 126.7756439,
        },
        {
          address: '경상북도 경산시 진량읍 대구대로 535',
          latitude: 35.8796994,
          longitude: 128.8532797,
        },
        {
          address: '전라남도 나주시 봉황면 영나로 1992',
          latitude: 34.9568422,
          longitude: 126.7370739,
        },
        {
          address: '서울특별시 성동구 고산자로22길 8 (마장동, 금강빌딩)',
          latitude: 37.5690356,
          longitude: 127.0381303,
        },
        {
          address: '대구광역시 달서구 와룡로57길 48-4 (죽전동)',
          latitude: 35.8582495,
          longitude: 128.5347713,
        },
        {
          address: '경기도 화성시 동탄산단3길 20-5 (방교동)',
          latitude: 37.2075992,
          longitude: 127.0616193,
        },
        {
          address: '경상북도 구미시 고아읍 대평길 196-3',
          latitude: 36.1432369,
          longitude: 128.3657441,
        },
        {
          address: '경상남도 창원시 진해구 신항10로 133(남문동)',
          latitude: 35.1096562,
          longitude: 128.7637678,
        },
        {
          address: '부산광역시 강서구 신항로 96-72(성북동)',
          latitude: 35.07817259999999,
          longitude: 128.8330003,
        },
        {
          address: '부산광역시 강서구 녹산산단178로 37-14 (송정동)',
          latitude: 35.085278,
          longitude: 128.8385676,
        },
        {
          address: '경상남도 사천시 곤양면 곤북로 40',
          latitude: 35.0556533,
          longitude: 127.9567412,
        },
        {
          address: '전라남도 나주시 동수농공단지길 100-12 (운곡동)',
          latitude: 34.9859203,
          longitude: 126.6828827,
        },
        {
          address: '충청남도 공주시 정안면 모란길 85',
          latitude: 36.5340032,
          longitude: 127.1222175,
        },
        {
          address: '서울특별시 성동구 마장로35다길 9, 지층,2층 (마장동, 농협)',
          latitude: 37.56958950000001,
          longitude: 127.0406684,
        },
        {
          address: '제주특별자치도 제주시 한림읍 한림해안로 94',
          latitude: 33.4119063,
          longitude: 126.2586101,
        },
        {
          address: '서울특별시 성동구 마장로35라길 16, 지하1층 (마장동)',
          latitude: 37.5698073,
          longitude: 127.0410811,
        },
        {
          address: '경기도 용인시 처인구 백암면 근곡로107번길 4-1, 3층',
          latitude: 37.1798769,
          longitude: 127.351978,
        },
        {
          address:
            '서울특별시 성동구 마장로35길 76, 지층 117호 (마장동, 현대아파트)',
          latitude: 37.57016,
          longitude: 127.042999,
        },
        {
          address: '서울특별시 성동구 마장로37길 59, 지층 (마장동)',
          latitude: 37.57051999999999,
          longitude: 127.0418553,
        },
        {
          address: '충청남도 당진시 양지말길 8 (대덕동)',
          latitude: 36.8776377,
          longitude: 126.6355116,
        },
        {
          address: '충청북도 진천군 덕산면 가신길 33-1',
          latitude: 36.9293476,
          longitude: 127.5070482,
        },
        {
          address: '경상북도 영주시 풍기읍 소백로2273번길 6',
          latitude: 36.8988009,
          longitude: 128.5450084,
        },
        {
          address: '전라남도 담양군 담양읍 월광로 43, 참푸른글로벌',
          latitude: 35.3338933,
          longitude: 126.9760327,
        },
        {
          address: '전라북도 익산시 함열읍 익산대로78길 127-46',
          latitude: 36.032646,
          longitude: 126.9526925,
        },
        {
          address: '전라북도 익산시 금마면 호남로 1018',
          latitude: 35.995933,
          longitude: 127.0693333,
        },
        {
          address: '전라북도 김제시 금구면 봉두로 161',
          latitude: 35.7798737,
          longitude: 127.0165709,
        },
        {
          address: '제주특별자치도 제주시 애월읍 광성로 166',
          latitude: 33.459672,
          longitude: 126.4298012,
        },
        {
          address: '서울특별시 성동구 마장로35나길 3-12, 1층 (마장동)',
          latitude: 37.5689549,
          longitude: 127.0399623,
        },
        {
          address: '충청남도 예산군 덕산면 읍내리 251-220',
          latitude: 36.7035719,
          longitude: 126.6743356,
        },
        {
          address:
            '경기도 용인시 기흥구 용구대로 1706, 미립물산 물류창고 (공세동)',
          latitude: 37.2357483,
          longitude: 127.1357825,
        },
        {
          address: '전라북도 완주군 이서면 콩쥐팥쥐로 1010',
          latitude: 35.81987,
          longitude: 127.0101153,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27, 한국복합물류 나동',
          latitude: 35.2924011,
          longitude: 129.0104501,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로 20',
          latitude: 37.5992827,
          longitude: 126.7892322,
        },
        {
          address: '인천광역시 서구 열우물로 201 (가좌동)',
          latitude: 37.4807392,
          longitude: 126.6873859,
        },
        {
          address: '서울특별시 성동구 고산자로24길 6, 지층 (마장동)',
          latitude: 37.5698672,
          longitude: 127.0381394,
        },
        {
          address: '경기도 포천시 삼육사로 2029-1 (선단동)',
          latitude: 37.8625859,
          longitude: 127.1459335,
        },
        {
          address: '서울특별시 성동구 청계천로10가길 72-30, 지하층 (마장동)',
          latitude: 37.5711878,
          longitude: 127.0366587,
        },
        {
          address: '경상북도 경산시 남천면 남천로 441',
          latitude: 35.7644474,
          longitude: 128.7282452,
        },
        {
          address: '서울특별시 성동구 마장로31길 48, 지층 (마장동)',
          latitude: 37.5704221,
          longitude: 127.0385703,
        },
        {
          address:
            '충청남도 천안시 동남구 병천면 봉항로 133, 수협냉장사업소 (102,103,203,302,303호)',
          latitude: 36.7725974,
          longitude: 127.3107638,
        },
        {
          address: '경기도 광주시 경충대로 1507-6 (쌍령동)',
          latitude: 37.41424860000001,
          longitude: 127.2673807,
        },
        {
          address: '경기도 용인시 기흥구 영덕동 692-2   ',
          latitude: 37.2779346,
          longitude: 127.0698835,
        },
        {
          address: '경상남도 진주시 솔밭로56번길 18 (상평동)',
          latitude: 35.17412660000001,
          longitude: 128.1093161,
        },
        {
          address: '경기도 남양주시 진건읍 고재로191번길 8-1, 제1동 제1호',
          latitude: 37.6342836,
          longitude: 127.1835957,
        },
        {
          address:
            '서울특별시 성동구 고산자로26길 18, 지하1,지상2층 (마장동, 세화유통)',
          latitude: 37.5703199,
          longitude: 127.0397399,
        },
        {
          address:
            '서울특별시 성동구 마장로35길 76, 지층 201,202호 (마장동, 현대아파트)',
          latitude: 37.57016,
          longitude: 127.042999,
        },
        {
          address: '충청남도 홍성군 갈산면 갈산로150번길 8-29',
          latitude: 36.595728,
          longitude: 126.555849,
        },
        {
          address: '인천광역시 중구 공항동로296번길 97-51, 1층 (운서동)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '경기도 화성시 비봉면 주석로485번길 19',
          latitude: 37.199769,
          longitude: 126.8755295,
        },
        {
          address: '경기도 안성시 삼죽면 강촌길 4',
          latitude: 37.0700155,
          longitude: 127.3704834,
        },
        {
          address: '경기도 평택시 팽성읍 추팔산단1길 157',
          latitude: 36.9530094,
          longitude: 127.075271,
        },
        {
          address: '경기도 포천시 해룡로 142 (동교동)',
          latitude: 37.856902,
          longitude: 127.1389027,
        },
        {
          address: '서울특별시 성동구 고산자로20길 9(지하1층 마장동)',
          latitude: 37.5679461,
          longitude: 127.0380237,
        },
        {
          address: '경기도 의정부시 송산로1161번길 170, 1층 (용현동)',
          latitude: 37.7260813,
          longitude: 127.0849068,
        },
        {
          address: '경기도 시흥시 동서로 688 (물왕동)',
          latitude: 37.3855458,
          longitude: 126.8391916,
        },
        {
          address: '경기도 시흥시 박달로 17 (논곡동)',
          latitude: 37.4001551,
          longitude: 126.8568758,
        },
        {
          address: '경기도 안성시 안성맞춤대로 833 (계동)',
          latitude: 36.9886598,
          longitude: 127.2677596,
        },
        {
          address: '경상북도 안동시 서후면 죽전길 138',
          latitude: 36.5989698,
          longitude: 128.5981278,
        },
        {
          address: '경상북도 안동시 풍산읍 산업단지2길 55',
          latitude: 36.5948086,
          longitude: 128.5469777,
        },
        {
          address: '충청남도 홍성군 갈산면 백야로246번길 65',
          latitude: 36.5793857,
          longitude: 126.5626996,
        },
        {
          address: '부산광역시 서구 원양로 179 (암남동)',
          latitude: 35.0677206,
          longitude: 129.0090576,
        },
        {
          address: '인천광역시 중구 공항동로295번길 77-65 (운서동)',
          latitude: 37.4661237,
          longitude: 126.4601775,
        },
        {
          address: '경기도 이천시 마장면 덕평로 811',
          latitude: 37.2298157,
          longitude: 127.3640299,
        },
        {
          address: '충청북도 진천군 진천읍 씨제이로 110, CJ제일제당(주)',
          latitude: 36.85497489999999,
          longitude: 127.4412383,
        },
        {
          address: '경기도 오산시 오산로 149, 308, B09, 709호 (오산동)',
          latitude: 37.1393116,
          longitude: 127.0737052,
        },
        {
          address: '서울특별시 금천구 범안로 1204 (독산동)',
          latitude: 37.4662695,
          longitude: 126.8954382,
        },
        {
          address: '경상북도 칠곡군 왜관읍 삼청4길 39',
          latitude: 35.9786507,
          longitude: 128.4228858,
        },
        {
          address: '경기도 평택시 서탄면 수월암5길 16',
          latitude: 37.117062,
          longitude: 127.0228784,
        },
        {
          address: '경상남도 사천시 정동면 예수길 52',
          latitude: 35.062073,
          longitude: 128.086792,
        },
        {
          address: '경상남도 사천시 정동면 상정대로 2609',
          latitude: 35.0619373,
          longitude: 128.1141964,
        },
        {
          address: '충청남도 공주시 사곡면 호계장터2길 7-3',
          latitude: 36.5026118,
          longitude: 127.0263091,
        },
        {
          address: '경기도 고양시 덕양구 강매로 259 (강매동)',
          latitude: 37.6095923,
          longitude: 126.8454449,
        },
        {
          address: '경기도 안성시 일죽면 죽화로 13',
          latitude: 37.1178349,
          longitude: 127.4335595,
        },
        {
          address: '인천광역시 부평구 세월천로40번길 11 (청천동)',
          latitude: 37.5137339,
          longitude: 126.70487,
        },
        {
          address: '충청남도 논산시 강변로 269 (부창동,외 4필지)',
          latitude: 36.2029105,
          longitude: 127.0794059,
        },
        {
          address: '경상남도 고성군 고성읍 월평로 169',
          latitude: 34.9665544,
          longitude: 128.3501522,
        },
        {
          address: '경기도 오산시 경기대로 729 (내삼미동)',
          latitude: 37.1837169,
          longitude: 127.0577496,
        },
        {
          address: '전라남도 영광군 대마면 전기차2로 157, (주)부경식품',
          latitude: 35.2778634,
          longitude: 126.5892074,
        },
        {
          address:
            '서울특별시 성동구 마장로31나길 17(마장동빌딩 지하1,2층 마장동)',
          latitude: 37.5701914,
          longitude: 127.0394506,
        },
        {
          address: '경기도 용인시 처인구 양지면 식송로 18 (1층)',
          latitude: 37.2325952,
          longitude: 127.2340902,
        },
        {
          address: '충청남도 공주시 반포면 반포초교길 36-8',
          latitude: 36.3972435,
          longitude: 127.2500942,
        },
        {
          address: '울산광역시 북구 성내2길 3 (염포동)',
          latitude: 35.5244568,
          longitude: 129.4009111,
        },
        {
          address: '부산광역시 동래구 온천천로543번길 14 (안락동)',
          latitude: 35.19053,
          longitude: 129.1126134,
        },
        {
          address: '경기도 광주시 장지동 482-2',
          latitude: 37.4008376,
          longitude: 127.2363785,
        },
        {
          address: '경기도 용인시 기흥구 용구대로 2442-1 (마북동)',
          latitude: 37.3020627,
          longitude: 127.1069509,
        },
        {
          address: '광주광역시 광산구 첨단과기로 59-26 (비아동)',
          latitude: 35.2248634,
          longitude: 126.8318982,
        },
        {
          address: '서울특별시 성동구 마장로33길 49, 지하층 (마장동)',
          latitude: 37.56997459999999,
          longitude: 127.0396051,
        },
        {
          address: '전라남도 함평군 월야면 밀재로 1892-16',
          latitude: 35.1690345,
          longitude: 126.6642834,
        },
        {
          address: '경기도 성남시 중원구 둔촌대로 352, 성남냉동 (하대원동)',
          latitude: 37.4313045,
          longitude: 127.1572614,
        },
        {
          address: '광주광역시 광산구 진곡산단5번로 69 (진곡동)',
          latitude: 35.210749,
          longitude: 126.781454,
        },
        {
          address: '충청남도 청양군 대치면 독정길 229',
          latitude: 36.4557998,
          longitude: 126.8474255,
        },
        {
          address: '서울특별시 송파구 양재대로 932 (가락동)',
          latitude: 37.4933411,
          longitude: 127.1097998,
        },
        {
          address: '경상남도 함안군 칠서면 무릉길 127',
          latitude: 35.3226355,
          longitude: 128.5184048,
        },
        {
          address: '서울특별시 성동구 마장로35길 66, 지하1층 (마장동)',
          latitude: 37.570638,
          longitude: 127.0412537,
        },
        {
          address: '서울특별시 성동구 마장로31길 43, 지층 (마장동)',
          latitude: 37.5701109,
          longitude: 127.0381861,
        },
        {
          address: '서울특별시 성동구 고산자로24길 14-2, 지하1층 (마장동)',
          latitude: 37.5697427,
          longitude: 127.0390024,
        },
        {
          address: '전라남도 목포시 산정공단로 36 (연산동)',
          latitude: 34.8169973,
          longitude: 126.3771693,
        },
        {
          address: '전라남도 목포시 공단중앙로 75-22 (연산동)',
          latitude: 34.8158404,
          longitude: 126.3773341,
        },
        {
          address: '전라북도 전주시 덕진구 구렛들2길 19 (팔복동1가)',
          latitude: 35.8584088,
          longitude: 127.099659,
        },
        {
          address: '경기도 양평군 옥천면 옥천리  3-3,3-4',
          latitude: 37.5201916,
          longitude: 127.482372,
        },
        {
          address: '광주광역시 광산구 어등대로595번길 2 (소촌동)',
          latitude: 35.151033,
          longitude: 126.7880262,
        },
        {
          address: '대구광역시 북구 유통단지로13길 8 (산격동)',
          latitude: 35.9086624,
          longitude: 128.6104761,
        },
        {
          address: '충청남도 논산시 연무읍 동안로 718 (외 8필지)',
          latitude: 36.1386931,
          longitude: 127.0870966,
        },
        {
          address: '경기도 화성시 남양읍 현대연구소로31-7,31-8',
          latitude: 37.1691748,
          longitude: 126.8154457,
        },
        {
          address: '경기도 평택시 오성면 양교길246',
          latitude: 37.0212503,
          longitude: 126.9626284,
        },
        {
          address: '경기도 평택시 포승읍 포승향남로29-18',
          latitude: 36.98273,
          longitude: 126.8788172,
        },
        {
          address: '경기도 평택시 포승읍 평택항로306',
          latitude: 36.9851712,
          longitude: 126.8364983,
        },
        {
          address: '경기도 오산시 남부대로349',
          latitude: 37.1328614,
          longitude: 127.0682743,
        },
        {
          address: '경기도 광명시 서부샛길778',
          latitude: 37.4869922,
          longitude: 126.87345,
        },
        {
          address: '경상남도 양산시 어곡공단1길 134(어곡동)',
          latitude: 35.3820459,
          longitude: 129.0173401,
        },
        {
          address:
            '인천광역시 중구 운서동 2851 외 325필지 화물터미널 B동 101호 (1층)',
          latitude: 37.4698485,
          longitude: 126.4637807,
        },
        {
          address: '경기도 양주시 남면 현석로833(경신리93-1)',
          latitude: 37.8538015,
          longitude: 126.9859463,
        },
        {
          address: '경기도 화성시 삼성1로3길 16',
          latitude: 37.2222783,
          longitude: 127.0736255,
        },
        {
          address: '경기도 김포시 하성면 하성로615',
          latitude: 37.7347781,
          longitude: 126.6355496,
        },
        {
          address: '경기도 시흥시 엠티브이24로 18-1',
          latitude: 37.4177608,
          longitude: 126.7946514,
        },
        {
          address: '경기도 부천시 벌말로207(대장동)',
          latitude: 37.5497731,
          longitude: 126.7661344,
        },
        {
          address: '경기도 화성시 장안면 금의솔안길43-7',
          latitude: 37.1066517,
          longitude: 126.8401149,
        },
        {
          address: '경기도 화성시 팔탄면 마곡길61',
          latitude: 37.1682989,
          longitude: 126.9043221,
        },
        {
          address: '경기도 화성시 비봉면 푸른들판로1209',
          latitude: 37.2108683,
          longitude: 126.8706736,
        },
        {
          address: '경기도 화성시 팔탄면 노하길330번길48-10',
          latitude: 37.1547581,
          longitude: 126.862703,
        },
        {
          address: '경기도 화성시 우정읍 버들로851(주곡리749-1)',
          latitude: 37.1143725,
          longitude: 126.8121042,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 188',
          latitude: 36.9667778,
          longitude: 126.8428672,
        },
        {
          address: '경기도 평택시 진위면 삼남로647',
          latitude: 37.0822522,
          longitude: 127.0912267,
        },
        {
          address: '경기도 평택시 청북읍 원한산길143',
          latitude: 37.0442001,
          longitude: 126.9688025,
        },
        {
          address: '경기도 평택시 포승읍 원정리7-1',
          latitude: 37.0030765,
          longitude: 126.7999627,
        },
        {
          address: '부산광역시 사하구 감천항로 80(구평동)',
          latitude: 35.08455650000001,
          longitude: 128.9935056,
        },
        {
          address: '경기도 양주시 광적면 부흥로230번길 76-108',
          latitude: 37.8090613,
          longitude: 126.926927,
        },
        {
          address: '경기도 김포시 승가로76번길90',
          latitude: 37.6096371,
          longitude: 126.7158471,
        },
        {
          address: '경기도 화성시 비봉면 화성로1555번길25',
          latitude: 37.2251512,
          longitude: 126.8534086,
        },
        {
          address: '경상북도 경산시 진량읍 금박로 695',
          latitude: 35.8760585,
          longitude: 128.8581654,
        },
        {
          address: '인천광역시 중구 축항대로212번길 17(항동7가)',
          latitude: 37.4493126,
          longitude: 126.6194913,
        },
        {
          address: '광주광역시 북구 중흥로 153-14 (중흥동)',
          latitude: 35.1625755,
          longitude: 126.91119,
        },
        {
          address: '광주광역시 남구 송암로 114 (송하동)',
          latitude: 35.114179,
          longitude: 126.872617,
        },
        {
          address: '충청남도 천안시 동남구 병천면 봉항로 133',
          latitude: 36.7725974,
          longitude: 127.3107638,
        },
        {
          address: '충청남도 논산시 강변로 269(부창동)',
          latitude: 36.2029105,
          longitude: 127.0794059,
        },
        {
          address: '경상북도 경산시 압량면 가야로 20',
          latitude: 35.8533655,
          longitude: 128.7684176,
        },
        {
          address: '경상북도 경주시 강동면 모서별봉길 61',
          latitude: 35.9446533,
          longitude: 129.2526712,
        },
        {
          address: '전라남도 장성군 서삼면 물류로 335(푸드머스장성물류센터)',
          latitude: 35.3194545,
          longitude: 126.7547443,
        },
        {
          address: '충청북도 진천군 광혜원면 광혜원산단2길 112',
          latitude: 36.9882911,
          longitude: 127.4368715,
        },
        {
          address: '경기도 용인시 기흥구 중부대로874번길 2-1(상하동)',
          latitude: 37.2509451,
          longitude: 127.1465633,
        },
        {
          address: '대전광역시 동구 물류로14번길 88 (구도동)',
          latitude: 36.26897340000001,
          longitude: 127.4759224,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 225(주양산아이시디 90동)',
          latitude: 35.300074,
          longitude: 129.0136919,
        },
        {
          address: '부산광역시 사상구 학감대로 178번길 11(학장동)',
          latitude: 35.1470953,
          longitude: 128.9893541,
        },
        {
          address: '부산광역시 사상구 사상로333번길 36(덕포동)',
          latitude: 35.1750667,
          longitude: 128.9823419,
        },
        {
          address: '부산광역시 사하구 감천항로291번길 73(구평동)',
          latitude: 35.0683054,
          longitude: 128.9936924,
        },
        {
          address: '경기도 시흥시 수인로 2732-20',
          latitude: 37.40689709999999,
          longitude: 126.830287,
        },
        {
          address: '경기도 시흥시 옥구천서로131번길 56',
          latitude: 37.3415874,
          longitude: 126.7053259,
        },
        {
          address: '경기도 안산시 단원구 해안로31번길 12',
          latitude: 37.3034031,
          longitude: 126.7620262,
        },
        {
          address: '인천광역시 중구 축항대로118번길 114',
          latitude: 37.4458561,
          longitude: 126.6030634,
        },
        {
          address: '인천광역시 서구 중봉대로 244',
          latitude: 37.5009728,
          longitude: 126.6488143,
        },
        {
          address: '경기도 평택시 청북읍 청북로161-5',
          latitude: 37.0532316,
          longitude: 126.9469191,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길397',
          latitude: 36.9791293,
          longitude: 126.8337498,
        },
        {
          address: '경기도 화성시 장안면 장안로227번길134-6',
          latitude: 37.090584,
          longitude: 126.8459079,
        },
        {
          address: '경기도 평택시 청북읍 청북서로183-23',
          latitude: 37.0515123,
          longitude: 126.9093061,
        },
        {
          address: '경기도 평택시 청북읍 청북서로183-23,C동',
          latitude: 37.0515123,
          longitude: 126.9093061,
        },
        {
          address: '경기도 화성시 장안면 매바위로366번길68-23',
          latitude: 37.1461259,
          longitude: 126.8172975,
        },
        {
          address: '경기도 화성시 양감면 은행나무로62번길 18-81 ',
          latitude: 37.0659964,
          longitude: 126.9377247,
        },
        {
          address: '경기도 평택시 포승읍 포승공단순환로 5',
          latitude: 36.9636946,
          longitude: 126.8441087,
        },
        {
          address: '경기도 화성시 양감면 은행나무로62번길 18-99(요당리 103-12)',
          latitude: 37.0659964,
          longitude: 126.9377247,
        },
        {
          address: '경기도 오산시 황새로 221',
          latitude: 37.1382279,
          longitude: 127.0573483,
        },
        {
          address: '경기도 평택시 안중읍 서해로 1193',
          latitude: 37.0004774,
          longitude: 126.9415218,
        },
        {
          address: '경기도 화성시 장안면 포승장안로 768',
          latitude: 37.0640146,
          longitude: 126.8459518,
        },
        {
          address: '경기도 화성시 우정읍 포승향남로 1450-18',
          latitude: 37.0856464,
          longitude: 126.8235636,
        },
        {
          address: '경기도 부천시 신흥로441번길 60',
          latitude: 37.5237722,
          longitude: 126.772872,
        },
        {
          address: '경기도 평택시 청북읍 청북서로 13',
          latitude: 37.0515123,
          longitude: 126.9093061,
        },
        {
          address: '경기도 수원시 장안구 장안로427번길 41-15',
          latitude: 37.316708,
          longitude: 126.979879,
        },
        {
          address: '경기도 화성시 우정읍 매바위로237번길 46-11',
          latitude: 37.1353181,
          longitude: 126.8048315,
        },
        {
          address: '인천광역시 서구 드림로 209번길 57',
          latitude: 37.5843709,
          longitude: 126.6685152,
        },
        {
          address: '경기도 시흥시 수인로 2732-10',
          latitude: 37.40689709999999,
          longitude: 126.830287,
        },
        {
          address: '경기도 안산시 단원구 목내로 44',
          latitude: 37.3035205,
          longitude: 126.7732149,
        },
        {
          address: '인천광역시 남동구 청능대로 337',
          latitude: 37.40136090000001,
          longitude: 126.6974674,
        },
        {
          address: '경기도 시흥시 수인로 2732-16',
          latitude: 37.40689709999999,
          longitude: 126.830287,
        },
        {
          address: '인천광역시 서구 드림로 483',
          latitude: 37.5868734,
          longitude: 126.6923244,
        },
        {
          address: '경기도 화성시 팔탄면 버들로1337-37',
          latitude: 37.1290793,
          longitude: 126.8562844,
        },
        {
          address: '부산광역시 강서구 녹산산단382로50번길 40 (송정동)',
          latitude: 35.0847393,
          longitude: 128.8547832,
        },
        {
          address: '경기도 포천시 소흘읍 소흘로 33',
          latitude: 37.8072789,
          longitude: 127.1365989,
        },
        {
          address: '경기도 평택시 청북읍 청북중앙로406',
          latitude: 37.0479226,
          longitude: 126.8963992,
        },
        {
          address: '경기도 화성시 남양읍 주석로344',
          latitude: 37.2046865,
          longitude: 126.8634727,
        },
        {
          address: '부산광역시 강서구 녹산산단262로13번길 13 (송정동)',
          latitude: 35.0878108,
          longitude: 128.8491257,
        },
        {
          address: '부산광역시 사하구 을숙도대로 589(신평동)',
          latitude: 35.0861003,
          longitude: 128.9699448,
        },
        {
          address: '인천광역시 서구 건지로 86번길 9',
          latitude: 37.4980914,
          longitude: 126.651577,
        },
        {
          address: '인천광역시 중구 자유무역로 25',
          latitude: 37.4737341,
          longitude: 126.6214796,
        },
        {
          address: '인천광역시 중구 공항동로 296번길 97-51,G1블럭 인천물류센터',
          latitude: 37.4818325,
          longitude: 126.4774657,
        },
        {
          address: '인천광역시 연수구 송도국제대로343번길 113',
          latitude: 37.3848777,
          longitude: 126.6587343,
        },
        {
          address: '경기도 안산시 단원구 시화호수로841번길 20',
          latitude: 37.2933333,
          longitude: 126.5925,
        },
        {
          address: '인천광역시 중구 축항대로165번길 15',
          latitude: 37.4553878,
          longitude: 126.6146835,
        },
        {
          address: '인천광역시 서구 원당대로507번길 84-3',
          latitude: 37.594842,
          longitude: 126.6572679,
        },
        {
          address: '인천광역시 중구 서해대로179번길 70',
          latitude: 37.4480212,
          longitude: 126.6144588,
        },
        {
          address: '인천광역시 중구 공항동로296번길 98-114, B-3',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '인천광역시 중구 축항대로290번길 1',
          latitude: 37.4474275,
          longitude: 126.6276729,
        },
        {
          address: '경기도 평택시 청북읍 청북중앙로658-23',
          latitude: 37.0597924,
          longitude: 126.896831,
        },
        {
          address: '경기도 화성시 향남읍 장안로782',
          latitude: 37.0854728,
          longitude: 126.8893854,
        },
        {
          address: '경기도 용인시 처인구 남사면 원암로 6',
          latitude: 37.0911588,
          longitude: 127.1496599,
        },
        {
          address: '인천광역시 중구 축항대로296번길 47',
          latitude: 37.4434792,
          longitude: 126.6293814,
        },
        {
          address: '경기도 화성시 마도면 마도로747-34',
          latitude: 37.1931877,
          longitude: 126.7816895,
        },
        {
          address: '경기도 평택시 청북읍 후사리327-1',
          latitude: 37.0277173,
          longitude: 126.936899,
        },
        {
          address: '인천광역시 서구 길주로44번길 13',
          latitude: 37.5047442,
          longitude: 126.6654295,
        },
        {
          address: '부산광역시 서구 원양로 171(암남동)',
          latitude: 35.0664308,
          longitude: 129.0103497,
        },
        {
          address: '경기도 여주시 가남읍 경충대로 904',
          latitude: 37.17698590000001,
          longitude: 127.5679452,
        },
        {
          address: '경기도 안성시 원곡면 천덕산로 535(1층일부,2층,3층)',
          latitude: 37.077327,
          longitude: 127.1609191,
        },
        {
          address: '경기도 용인시 처인구 양지면 추계로 4',
          latitude: 37.2480962,
          longitude: 127.3244391,
        },
        {
          address: '경기도 용인시 기흥구 용구대로 2467(보정동)',
          latitude: 37.3064992,
          longitude: 127.105573,
        },
        {
          address:
            '경기도 오산시 황새로 109(누읍동,외 2필지131-4, 137 누읍동 물류창고 A동 1층)',
          latitude: 37.13617470000001,
          longitude: 127.0590013,
        },
        {
          address: '경기도 오산시 부산동 2 외 12필지',
          latitude: 37.1564391,
          longitude: 127.0956139,
        },
        {
          address:
            '경기도 고양시 일산동구 장항로225번길 195(장항동,외1필지 A동1층일부,2층전체,B동1,2층전체)',
          latitude: 37.6421949,
          longitude: 126.7643523,
        },
        {
          address: '경기도 평택시 청북읍 청북서로 23(1동 1~2층)',
          latitude: 37.0490191,
          longitude: 126.9026991,
        },
        {
          address:
            '경기도 성남시 중원구 둔촌대로456번길 7(다이아몬드냉장 공장및창고동 지1,6,7,9층 일부2,4층호 상대원동)',
          latitude: 37.4312323,
          longitude: 127.1676379,
        },
        {
          address: '광주광역시 광산구 상완길 177(1층 수완동)',
          latitude: 35.2058004,
          longitude: 126.8288292,
        },
        {
          address:
            '인천광역시 중구 축항대로86번길 8(항동7가, 27-200 외 2필지 1층)',
          latitude: 37.4561217,
          longitude: 126.6061366,
        },
        {
          address: '인천광역시 중구 서해대로94번길 98(신흥동3가, 1층,2층)',
          latitude: 37.4321443,
          longitude: 126.6264323,
        },
        {
          address: '인천광역시 중구 항동7가 32-1',
          latitude: 37.4567927,
          longitude: 126.6219409,
        },
        {
          address: '강원도 동해시 대동로 210',
          latitude: 37.492385,
          longitude: 129.1337869,
        },
        {
          address: '강원도 동해시 임항로 121',
          latitude: 37.5478881,
          longitude: 129.1110139,
        },
        {
          address: '강원도 동해시 대동로210',
          latitude: 37.492385,
          longitude: 129.1337869,
        },
        {
          address: '강원도 동해시 대동로 167',
          latitude: 37.4862912,
          longitude: 129.1239875,
        },
        {
          address: '경기도 평택시 포승읍 서동대로 437-129',
          latitude: 36.9406966,
          longitude: 126.869606,
        },
        {
          address: '인천광역시 중구 항동7가 43 등',
          latitude: 37.4603313,
          longitude: 126.6111188,
        },
        {
          address: '인천광역시 중구 항동7가 43-1 등',
          latitude: 37.4597343,
          longitude: 126.611686,
        },
        {
          address: '인천광역시 중구 항동7가 1-9 등',
          latitude: 37.4622676,
          longitude: 126.6304909,
        },
        {
          address: '인천광역시 중구 북성동1가 6-44',
          latitude: 37.4767327,
          longitude: 126.6089872,
        },
        {
          address: '인천광역시 중구 북성동1가 4-250 등',
          latitude: 37.47508699999999,
          longitude: 126.6145483,
        },
        {
          address: '인천광역시 중구 항동7가 1-26 ',
          latitude: 37.4675666,
          longitude: 126.6253029,
        },
        {
          address: '인천광역시 중구 북성동1가 6-2 등',
          latitude: 37.4781156,
          longitude: 126.613952,
        },
        {
          address: '인천광역시 중구 항동7가 1-26 등',
          latitude: 37.4675666,
          longitude: 126.6253029,
        },
        {
          address: '인천광역시 중구 항동7가 55-2',
          latitude: 37.4561546,
          longitude: 126.6247896,
        },
        {
          address:
            '인천광역시 중구 서해대로94번길 106(신흥동3가, A동 1,3,4층,   B동 1층)',
          latitude: 37.4319368,
          longitude: 126.6281117,
        },
        {
          address: '부산광역시 기장군 정관읍 산단1로 66-26',
          latitude: 35.3130677,
          longitude: 129.1778702,
        },
        {
          address: '부산광역시 남구 우암로 175(우암동)',
          latitude: 35.1252793,
          longitude: 129.0739169,
        },
        {
          address:
            '부산광역시 서구 원양로 35(암남동, 감천항수산물시장 1층~8층)',
          latitude: 35.0589973,
          longitude: 129.0101415,
        },
        {
          address:
            '부산광역시 서구 원양로 295(암남동, 주동영콜드프라자제2공장1동냉동창고)',
          latitude: 35.0777666,
          longitude: 129.0051724,
        },
        {
          address: '부산광역시 사하구 다대동로6번길 21(다대동)',
          latitude: 35.053456,
          longitude: 128.9721719,
        },
        {
          address: '부산광역시 사하구 을숙도대로 761(구평동)',
          latitude: 35.0864259,
          longitude: 128.9882305,
        },
        {
          address: '부산광역시 기장군 기장읍 기장해안로 640',
          latitude: 35.2216519,
          longitude: 129.2314862,
        },
        {
          address: '부산광역시 사하구 원양로 349(감천동,감내포길 130)',
          latitude: 35.0822079,
          longitude: 129.0052675,
        },
        {
          address: '부산광역시 사하구 원양로 359(감천동,외1필지387-22)',
          latitude: 35.0829538,
          longitude: 129.0060804,
        },
        {
          address:
            '부산광역시 사하구 감천항로 250(구평동,외4필지414-8,산98-4,산98,산98-6)',
          latitude: 35.070851,
          longitude: 128.9900546,
        },
        {
          address: '부산광역시 사하구 장림로 196(장림동)',
          latitude: 35.081983,
          longitude: 128.9700177,
        },
        {
          address: '부산광역시 사하구 장평로76번길 22(장림동,외 2필지441, 446)',
          latitude: 35.0733523,
          longitude: 128.9740339,
        },
        {
          address: '부산광역시 사하구 다대로605번길 5(다대동)',
          latitude: 35.0527788,
          longitude: 128.9718657,
        },
        {
          address: '전라남도 광양시 항만4로 19',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 광양시 항만7로 71-59',
          latitude: 34.9162076,
          longitude: 127.6684906,
        },
        {
          address: '전라남도 광양시 항만7로 71-82',
          latitude: 34.9193067,
          longitude: 127.6684431,
        },
        {
          address: '대전광역시 대덕구 방두말1길 12(상서동)',
          latitude: 36.429667,
          longitude: 127.4252367,
        },
        {
          address: '경기도 시흥시 오이도로 22-12(정왕동,1다 801호)',
          latitude: 37.3472117,
          longitude: 126.7026075,
        },
        {
          address: '경기도 용인시 기흥구 농서로 51(농서동,지하1층, 지상1~4층)',
          latitude: 37.2227691,
          longitude: 127.0912607,
        },
        {
          address: '경기도 용인시 처인구 남사면 경기동로 263(A동 1층, 2층일부)',
          latitude: 37.1405284,
          longitude: 127.1542268,
        },
        {
          address: '경기도 안성시 샛터길 40(발화동)',
          latitude: 36.9894214,
          longitude: 127.2740971,
        },
        {
          address: '경상남도 양산시 어곡공단1길 31(어곡동,1층)',
          latitude: 35.3740926,
          longitude: 129.0181614,
        },
        {
          address: '경상남도 창원시 마산합포구 드림베이대로 201',
          latitude: 35.1795757,
          longitude: 128.5662716,
        },
        {
          address: '울산광역시 남구 신항로716번길 60(황성동)',
          latitude: 35.46262,
          longitude: 129.36427,
        },
        {
          address: '경상남도 양산시 산막공단북1길 2(산막동)',
          latitude: 35.3700835,
          longitude: 129.0505775,
        },
        {
          address: '광주광역시 광산구 상완길 163(수완동,1층)',
          latitude: 35.2065043,
          longitude: 126.8304875,
        },
        {
          address: '전라남도 영암군 삼호읍 대불역로 39',
          latitude: 34.7768425,
          longitude: 126.4284271,
        },
        {
          address: '전라남도 광양시 항만2로 55',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 광양시 항만3로 136',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '강원도 동해시 효자로 707, 2층',
          latitude: 37.4927348,
          longitude: 129.1115816,
        },
        {
          address: '강원도 동해시 효자로 707, 1층 101호',
          latitude: 37.4927348,
          longitude: 129.1115816,
        },
        {
          address: '강원도 강릉시 경강로 1878',
          latitude: 37.746278,
          longitude: 128.8753019,
        },
        {
          address: '강원도 동해시 공단1로 177',
          latitude: 37.48031780000001,
          longitude: 129.150615,
        },
        {
          address: '강원도 동해시 용정로 171',
          latitude: 37.5036894,
          longitude: 129.1258735,
        },
        {
          address: '전라남도 영암군 삼호읍 대불로 629',
          latitude: 34.7763155,
          longitude: 126.4254515,
        },
        {
          address: '부산광역시 서구 원양로 73(암남동, 주보림로지스틱냉동창고)',
          latitude: 35.062345,
          longitude: 129.0098176,
        },
        {
          address: '부산광역시 서구 원양로 139(암남동, 보성냉장)',
          latitude: 35.0649836,
          longitude: 129.0126783,
        },
        {
          address: '대전광역시 유성구 대정북로 30 (대정동)',
          latitude: 36.3156156,
          longitude: 127.3188487,
        },
        {
          address: '전라남도 목포시 달동 1342 외 2필지',
          latitude: 34.7736319,
          longitude: 126.3168894,
        },
        {
          address: '전라남도 목포시 신항로 294번길 45',
          latitude: 34.7574418,
          longitude: 126.354507,
        },
        {
          address: '전라남도 광양시 항만2로 137',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 광양시 항만7로 71-56',
          latitude: 34.9193067,
          longitude: 127.6684431,
        },
        {
          address: '전라남도 광양시 항만7로 6',
          latitude: 34.9178267,
          longitude: 127.6769156,
        },
        {
          address: '전라남도 광양시 항만7로 13',
          latitude: 34.9268242,
          longitude: 127.6989247,
        },
        {
          address: '전라남도 광양시 항만3로 174',
          latitude: 34.9406968,
          longitude: 127.6958882,
        },
        {
          address: '전라남도 광양시 컨부두로 150',
          latitude: 34.90889689999999,
          longitude: 127.6692668,
        },
        {
          address: '전라남도 광양시 항만7로 71-29',
          latitude: 34.9193067,
          longitude: 127.6684431,
        },
        {
          address: '전라남도 광양시 항만7로 19',
          latitude: 34.9172329,
          longitude: 127.6714213,
        },
        {
          address: '서울특별시 강서구 하늘길 112(공항동)',
          latitude: 37.555525,
          longitude: 126.8067017,
        },
        {
          address: '부산광역시 서구 원양로 79(암남동)',
          latitude: 35.0623531,
          longitude: 129.0106371,
        },
        {
          address: '인천광역시 중구 서해대로209번길 23(항동7가, 1층)',
          latitude: 37.4465861,
          longitude: 126.618635,
        },
        {
          address: '광주광역시 광산구 하남산단2번로 22(하남동,1층)',
          latitude: 35.1868443,
          longitude: 126.7974212,
        },
        {
          address:
            '울산광역시 울주군 두서면 서하구량길 196-11(다동, 609-1 1동)',
          latitude: 35.6263625,
          longitude: 129.1420274,
        },
        {
          address: '경기도 안양시 만안구 전파로24번길 35-37(지상2층 안양동)',
          latitude: 37.3886601,
          longitude: 126.9366092,
        },
        {
          address: '경상남도 진주시 문산읍 문산로 702(나동)',
          latitude: 35.1474628,
          longitude: 128.2078798,
        },
        {
          address: '제주특별자치도 제주시 우정로 47(외도일동)',
          latitude: 33.4886371,
          longitude: 126.4312536,
        },
        {
          address: '제주특별자치도 제주시 신와로 92',
          latitude: 33.5202567,
          longitude: 126.617752,
        },
        {
          address: '서울특별시 강서구 하늘길 247(1층 공항동)',
          latitude: 37.555525,
          longitude: 126.8067017,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 27(6, 1-1동)',
          latitude: 35.2946701,
          longitude: 129.0111398,
        },
        {
          address: '충청북도 음성군 삼성면 하이텍산단로 81',
          latitude: 37.0095069,
          longitude: 127.4665362,
        },
        {
          address: '강원도 원주시 우산로 177(우산동)',
          latitude: 37.3775489,
          longitude: 127.9368556,
        },
        {
          address: '경기도 용인시 처인구 포곡읍 성산로 600(1층)',
          latitude: 37.2831256,
          longitude: 127.2051658,
        },
        {
          address: '경기도 용인시 기흥구 동백죽전대로 191(중동, 3층제외)',
          latitude: 37.2781868,
          longitude: 127.1560945,
        },
        {
          address: '강원도 원주시 흥업면 승안동길 7-15(외 9필지)',
          latitude: 37.3112647,
          longitude: 127.8985672,
        },
        {
          address: '경기도 용인시 처인구 백암면 원설로 445(A동 지층)',
          latitude: 37.141949,
          longitude: 127.3894415,
        },
        {
          address: '전라북도 군산시 외항1길 32-18(소룡동)',
          latitude: 35.9814634,
          longitude: 126.6721,
        },
        {
          address: '인천광역시 중구 인중로 305(북성동1가, 1층)',
          latitude: 37.4770792,
          longitude: 126.6160118,
        },
        {
          address: '부산광역시 사상구 장인로 3(감전동)',
          latitude: 35.1452212,
          longitude: 128.9704251,
        },
        {
          address: '충청남도 청양군 운곡면 신대길 14-5',
          latitude: 36.5218034,
          longitude: 126.8601085,
        },
        {
          address: '충청남도 아산시 음봉면 신의길 234',
          latitude: 36.8961222,
          longitude: 127.0815757,
        },
        {
          address: '충청북도 옥천군 옥천읍 양수로6길 23',
          latitude: 36.292209,
          longitude: 127.5535709,
        },
        {
          address: '강원도 원주시 문막읍 동화큰골길 8-1',
          latitude: 37.3292244,
          longitude: 127.8535019,
        },
        {
          address: '강원도 원주시 소초면 수래울길 5(1,2층)',
          latitude: 37.3991206,
          longitude: 127.969441,
        },
        {
          address: '경기도 양주시 녹양로 214(가동 남방동)',
          latitude: 37.7692909,
          longitude: 127.0347142,
        },
        {
          address: '경기도 광주시 순암로 395-7(A동 2층 중대동)',
          latitude: 37.4066786,
          longitude: 127.2173377,
        },
        {
          address: '서울특별시 송파구 송파대로 55(C동 지하1층 01~03호 장지동)',
          latitude: 37.513265,
          longitude: 127.101133,
        },
        {
          address: '경기도 안성시 대덕면 서동대로 4672-32(가동 1층, 2층)',
          latitude: 37.0108552,
          longitude: 127.2239919,
        },
        {
          address: '경기도 광주시 경충대로 2210(삼동)',
          latitude: 37.4150338,
          longitude: 127.1982307,
        },
        {
          address: '전라남도 곡성군 오산면 연화리 1016-1',
          latitude: 35.2603672,
          longitude: 127.1175178,
        },
        {
          address: '경기도 광주시 장지9길 42-4(1동 1층 장지동)',
          latitude: 37.399708,
          longitude: 127.2374742,
        },
        {
          address:
            '경기도 김포시 고촌읍 아라육로230번길 27(창고본동 2,3층 이마트몰김포센터)',
          latitude: 37.6033543,
          longitude: 126.7709573,
        },
        {
          address: '경기도 양주시 광적로155번길 12(외 3필지)',
          latitude: 37.8318287,
          longitude: 126.9759266,
        },
        {
          address: '세종특별자치시 부강면 연청로 745-46(2동 화물취급장B)',
          latitude: 36.5439377,
          longitude: 127.3567475,
        },
        {
          address: '경기도 이천시 호법면 중부대로763번길 140(1층)',
          latitude: 37.2479692,
          longitude: 127.4238466,
        },
        {
          address: '경기도 이천시 모가면 대월로261번길 3(사동 1층)',
          latitude: 37.291873,
          longitude: 126.8387065,
        },
        {
          address: '경기도 용인시 처인구 백암면 근곡로107번길 4-1(3층)',
          latitude: 37.1798769,
          longitude: 127.351978,
        },
        {
          address: '경상북도 칠곡군 왜관읍 삼청5길 50-22(2동)',
          latitude: 35.9795177,
          longitude: 128.4332608,
        },
        {
          address: '강원도 동해시 동해대로 4755(단봉동)',
          latitude: 37.468642,
          longitude: 129.1169533,
        },
        {
          address: '강원도 동해시 공단2로 37(1,2,3층 구호동)',
          latitude: 37.4738531,
          longitude: 129.1401805,
        },
        {
          address: '강원도 강릉시 연곡면 연주로 10',
          latitude: 37.8575114,
          longitude: 128.8380098,
        },
        {
          address: '경기도 양주시 가마골로258번길 41(가동)',
          latitude: 37.7427067,
          longitude: 126.9790211,
        },
        {
          address: '경기도 광주시 봉골길 153-3(창고동 지하,1.2일부층)',
          latitude: 37.3557733,
          longitude: 127.200243,
        },
        {
          address: '경기도 김포시 고촌읍 아라육로57번길 15(1,2층)',
          latitude: 37.6149265,
          longitude: 126.7250269,
        },
        {
          address: '경기도 안성시 일죽면 죽화로 13(나동 2층 전호)',
          latitude: 37.1178349,
          longitude: 127.4335595,
        },
        {
          address: '경기도 이천시 마장면 덕평로 811(외14필지)',
          latitude: 37.2298157,
          longitude: 127.3640299,
        },
        {
          address: '경기도 이천시 신둔면 황무로338번길 359(A동1층2층)',
          latitude: 37.29571480000001,
          longitude: 127.3737362,
        },
        {
          address: '경기도 이천시 호법면 중부대로714번길 166',
          latitude: 37.2466855,
          longitude: 127.412194,
        },
        {
          address: '경기도 이천시 마장면 마도로 177(지하1층,3층)',
          latitude: 37.2658283,
          longitude: 127.351872,
        },
        {
          address: '경기도 용인시 처인구 남사면 당하로 154(1층, 2층일부)',
          latitude: 37.1458663,
          longitude: 127.1481277,
        },
        {
          address: '경기도 오산시 오산로 149(3층 오산동)',
          latitude: 37.1393116,
          longitude: 127.0737052,
        },
        {
          address: '광주광역시 광산구 하남산단2번로 24(하남동, 1층)',
          latitude: 35.186723,
          longitude: 126.7979138,
        },
        {
          address: '광주광역시 광산구 하남산단10번로 48(안청동)',
          latitude: 35.2140429,
          longitude: 126.8024129,
        },
        {
          address: '광주광역시 서구 회재로 711-1(매월동)',
          latitude: 35.1119884,
          longitude: 126.8479548,
        },
        {
          address:
            '인천광역시 중구 서해대로94번길 98-1(신흥동3가, 1층,2층,3층,4층)',
          latitude: 37.4309457,
          longitude: 126.6257876,
        },
        {
          address: '인천광역시 중구 서해대로209번길 66(항동7가, 95-9번지 1층)',
          latitude: 37.4502789,
          longitude: 126.6165973,
        },
        {
          address: '부산광역시 금정구 금단로 75(구서동)',
          latitude: 35.2561506,
          longitude: 129.0944491,
        },
        {
          address: '충청남도 당진시 대섬길 4-45',
          latitude: 36.9798069,
          longitude: 126.7229718,
        },
        {
          address: '충청북도 옥천군 옥천읍 마암로2길 21',
          latitude: 36.2931569,
          longitude: 127.5645476,
        },
        {
          address: '충청북도 제천시 한방엑스포로 104(왕암동)',
          latitude: 37.1448563,
          longitude: 128.1570982,
        },
        {
          address: '강원도 원주시 호저면 호매곡1길 97(제2동 1층)',
          latitude: 37.397218,
          longitude: 127.9259266,
        },
        {
          address:
            '경기도 용인시 처인구 양지면 주북로 333-8(지1층,지2층일부층)',
          latitude: 37.2474602,
          longitude: 127.2690808,
        },
        {
          address: '경기도 용인시 처인구 한터로58번길 37(유방동)',
          latitude: 37.2523413,
          longitude: 127.2139075,
        },
        {
          address: '경기도 용인시 기흥구 하갈로 141-17(상갈동)',
          latitude: 37.25978509999999,
          longitude: 127.1003536,
        },
        {
          address: '경기도 용인시 기흥구 기곡로 32(하갈동)',
          latitude: 37.2495917,
          longitude: 127.0971236,
        },
        {
          address: '경기도 용인시 처인구 중부대로 1022-1(삼가동, 지하2층, 4층)',
          latitude: 37.2378661,
          longitude: 127.1627766,
        },
        {
          address:
            '경기도 오산시 동부대로 468-31(1층,2층,3층 예비실, 303호, 4층 원동)',
          latitude: 37.1441712,
          longitude: 127.0795464,
        },
        {
          address: '경기도 평택시 오성면 오성서로 153',
          latitude: 36.9917989,
          longitude: 126.9666836,
        },
        {
          address: '경기도 평택시 산단로 263(가동 지상2,지하4층 칠괴동)',
          latitude: 37.0343916,
          longitude: 127.0955402,
        },
        {
          address: '경기도 평택시 고덕면 고덕북로 203',
          latitude: 37.0701133,
          longitude: 127.01949,
        },
        {
          address: '광주광역시 광산구 사암로106번길 25(우산동)',
          latitude: 35.1537776,
          longitude: 126.8088358,
        },
        {
          address: '부산광역시 사하구 감천항로 255(구평동)',
          latitude: 35.0714162,
          longitude: 128.9918059,
        },
        {
          address: '부산광역시 사하구 다대로1066번길 61-3(장림동, A동,D동)',
          latitude: 35.0796739,
          longitude: 128.9589845,
        },
        {
          address: '부산광역시 사하구 두송로 265(구평동)',
          latitude: 35.0750058,
          longitude: 128.9895785,
        },
        {
          address: '부산광역시 서구 원양로 111(A동 2층 암남동)',
          latitude: 35.06332690000001,
          longitude: 129.0120096,
        },
        {
          address: '제주특별자치도 제주시 선반로6길 9(화북일동)',
          latitude: 33.5139604,
          longitude: 126.5624977,
        },
        {
          address: '전라북도 완주군 봉동읍 은하율소로 179-49',
          latitude: 35.955848,
          longitude: 127.1724826,
        },
        {
          address: '경상남도 양산시 산막공단북1길 2(1층 산막동)',
          latitude: 35.3700835,
          longitude: 129.0505775,
        },
        {
          address:
            '경기도 성남시 분당구 대왕판교로 95(금곡동, 지하2층,  지상1층, 2층, 3층, 4층)',
          latitude: 37.3517506,
          longitude: 127.1007089,
        },
        {
          address: '경기도 수원시 권선구 오목천로132번길 55(고색동)',
          latitude: 37.2422787,
          longitude: 126.9757933,
        },
        {
          address: '대구광역시 북구 노원로17길 6(노원동3가)',
          latitude: 35.8954121,
          longitude: 128.5711138,
        },
        {
          address: '제주특별자치도 제주시 백포남길 63(이호일동)',
          latitude: 33.498001,
          longitude: 126.4626703,
        },
        {
          address: '인천광역시 서구 건지로 84(1층 가좌동)',
          latitude: 37.498325,
          longitude: 126.6508105,
        },
        {
          address: '대전광역시 대덕구 방두말3길 20(1층 평촌동)',
          latitude: 36.4300136,
          longitude: 127.428532,
        },
        {
          address: '경기도 의정부시 호암로 212(지상1층 호원동)',
          latitude: 37.7195527,
          longitude: 127.0463897,
        },
        {
          address: '경기도 남양주시 진접읍 남가로131번길 7-1(가동 1층)',
          latitude: 37.6940829,
          longitude: 127.1780749,
        },
        {
          address: '경기도 군포시 번영로 82(M동 1층 부곡동)',
          latitude: 37.3309517,
          longitude: 126.9371468,
        },
        {
          address: '제주특별자치도 제주시 우정로8길 16(외도일동,1층)',
          latitude: 33.4895711,
          longitude: 126.429257,
        },
        {
          address: '제주특별자치도 제주시 우정로8길 28(외도일동)',
          latitude: 33.48944,
          longitude: 126.427881,
        },
        {
          address: '경상북도 구미시 고아읍 대평길 196-3(주4)',
          latitude: 36.1432369,
          longitude: 128.3657441,
        },
        {
          address: '경상북도 칠곡군 왜관읍 삼청5길 50-7(2동)',
          latitude: 35.9795177,
          longitude: 128.4332608,
        },
        {
          address: '경상남도 양산시 어곡공단2길 6(B동 1층 어곡동)',
          latitude: 35.36994,
          longitude: 129.0143116,
        },
        {
          address: '경기도 용인시 기흥구 기곡로 22(하갈동)',
          latitude: 37.2496632,
          longitude: 127.0988744,
        },
        {
          address: '전라북도 남원시 인월면 천왕봉로 135-53',
          latitude: 35.45604,
          longitude: 127.6126388,
        },
        {
          address: '경기도 용인시 기흥구 기곡로 22(지하2층 하갈동)',
          latitude: 37.2496632,
          longitude: 127.0988744,
        },
        {
          address: '경기도 용인시 처인구 양지면 죽양대로2071번길 10-8(2층)',
          latitude: 37.2194253,
          longitude: 127.314484,
        },
        {
          address: '전라북도 익산시 왕궁면 왕궁로 695',
          latitude: 35.9417955,
          longitude: 127.082843,
        },
        {
          address: '경기도 남양주시 수동면 비룡로 958(1층 일부)',
          latitude: 37.7191863,
          longitude: 127.315715,
        },
        {
          address: '경상남도 밀양시 부북면 사포로 91',
          latitude: 35.4723663,
          longitude: 128.7460882,
        },
        {
          address: '경상남도 김해시 상동면 동북로437번길 138-94',
          latitude: 35.299822,
          longitude: 128.9587148,
        },
        {
          address:
            '경상북도 칠곡군 지천면 금호로 272(4동 영남권내륙화물기지화물하역장)',
          latitude: 35.9584669,
          longitude: 128.4496262,
        },
        {
          address: '경상북도 경산시 진량읍 대구대로 513(A동 2,3층)',
          latitude: 35.8811716,
          longitude: 128.85259,
        },
        {
          address: '전라남도 나주시 동수농공단지길 62-237(운곡동)',
          latitude: 34.9900212,
          longitude: 126.6864249,
        },
        {
          address: '경기도 광주시 도척면 도척로 401-98(B동)',
          latitude: 37.3154211,
          longitude: 127.3397842,
        },
        {
          address: '경기도 광주시 직동로 39(가. 나동 직동)',
          latitude: 37.4000597,
          longitude: 127.1985426,
        },
        {
          address: '경기도 화성시 주석로485번길 19',
          latitude: 37.199769,
          longitude: 126.8755295,
        },
        {
          address: '경기도 안성시 원곡면 칠곡리 D1-1 D1-1',
          latitude: 37.0480881,
          longitude: 127.161067,
        },
        {
          address: '경기도 안성시 양성면 양성로 406(지하,1,2층)',
          latitude: 37.0868748,
          longitude: 127.2076614,
        },
        {
          address: '경기도 안성시 죽산면 걸미로 145-29(A동 1,2층, B동 1층)',
          latitude: 37.019198,
          longitude: 127.435232,
        },
        {
          address: '경기도 용인시 기흥구 하갈로86번길 46(가동 지하1층 하갈동)',
          latitude: 37.2556228,
          longitude: 127.1024683,
        },
        {
          address: '경기도 용인시 기흥구 중부대로874번길 3(상하동)',
          latitude: 37.250793,
          longitude: 127.1475908,
        },
        {
          address: '경기도 용인시 처인구 포곡읍 성산로 600(지층)',
          latitude: 37.2831256,
          longitude: 127.2051658,
        },
        {
          address: '경기도 용인시 처인구 남사면 통삼로 282-21(지하2층 일부호)',
          latitude: 37.1227717,
          longitude: 127.131999,
        },
        {
          address: '경기도 용인시 기흥구 원고매로 29(고매동)',
          latitude: 37.2222324,
          longitude: 127.1067031,
        },
        {
          address: '인천광역시 중구 공항동로296번길 69(운서동)',
          latitude: 37.471794,
          longitude: 126.4748636,
        },
        {
          address: '경기도 안성시 일죽면 방초리 227-1',
          latitude: 37.1275444,
          longitude: 127.4312769,
        },
        {
          address: '제주특별자치도 제주시 원남 6길46번지',
          latitude: 33.4852236,
          longitude: 126.5294507,
        },
        {
          address: '제주특별자치도 제주시 도공로 14번지',
          latitude: 33.5051036,
          longitude: 126.4649764,
        },
        {
          address: '제주특별자치도 제주시 한경면 두신로 146번지',
          latitude: 33.355158,
          longitude: 126.1867489,
        },
        {
          address: '경상남도 사천시 유람선길 175',
          latitude: 34.9273657,
          longitude: 128.0675586,
        },
        {
          address: '경상남도 사천시 대방길 60-45',
          latitude: 34.9305914,
          longitude: 128.0604047,
        },
        {
          address: '경상남도 통영시 민양길 93',
          latitude: 34.843858,
          longitude: 128.3867423,
        },
        {
          address: '경상남도 통영시 도산면 노전길 50-69',
          latitude: 34.9106757,
          longitude: 128.3549585,
        },
        {
          address: '경상남도 통영시 용남면 용남해안로 475',
          latitude: 34.8713878,
          longitude: 128.4529055,
        },
        {
          address: '경상남도 창원시 마산합포구 수산1길 222(오동동)',
          latitude: 35.2039361,
          longitude: 128.5822316,
        },
        {
          address: '전라남도 여수시 돌산읍 평사로 367',
          latitude: 34.6560801,
          longitude: 127.729899,
        },
        {
          address: '전라남도 여수시 율촌면 두언길 21',
          latitude: 34.8307914,
          longitude: 127.5386685,
        },
        {
          address: '전라북도 군산시 임사길 10(산북동)',
          latitude: 35.9499648,
          longitude: 126.6566199,
        },
        {
          address: '충청남도 태안군 근흥면 신진대교길 9-32',
          latitude: 36.6798579,
          longitude: 126.1471855,
        },
        {
          address: '강원도 속초시 농공단지길 118(대포동)',
          latitude: 38.1756865,
          longitude: 128.595797,
        },
        {
          address: '제주특별자치도 제주시 애월읍 신엄안 3길 55번지',
          latitude: 33.4733342,
          longitude: 126.3617833,
        },
        {
          address: '제주특별자치도 제주시 한림읍 명랑로71번지',
          latitude: 33.4141586,
          longitude: 126.2682392,
        },
        {
          address: '제주특별자치도 제주시 수정 2길20번지',
          latitude: 33.4921381,
          longitude: 126.4267197,
        },
        {
          address: '제주특별자치도 제주시 한림읍 한림해안로 93번지',
          latitude: 33.4122855,
          longitude: 126.2570448,
        },
        {
          address: '경상남도 고성군 거류면 화당로 161',
          latitude: 34.9846484,
          longitude: 128.4211563,
        },
        {
          address: '경상남도 사천시 대방길 96-11',
          latitude: 34.9296044,
          longitude: 128.0582411,
        },
        {
          address: '경상남도 통영시 도산면 도산일주로 2129',
          latitude: 34.88454189999999,
          longitude: 128.3680593,
        },
        {
          address: '경상남도 통영시 멘데산업길 51',
          latitude: 34.8441959,
          longitude: 128.4360978,
        },
        {
          address: '경상남도 통영시 광도면 덕포로 334',
          latitude: 34.913096,
          longitude: 128.4202959,
        },
        {
          address: '경상남도 창원시 마산합포구 구산면 이순신로 693',
          latitude: 35.0681022,
          longitude: 128.6313695,
        },
        {
          address: '전라남도 영광군 법성면 영광로 195-28',
          latitude: 35.3450583,
          longitude: 126.4646875,
        },
        {
          address: '전라남도 여수시 국동남9길 17(국동)',
          latitude: 34.7290876,
          longitude: 127.7222802,
        },
        {
          address: '전라남도 여수시 국동남7길 28(국동)',
          latitude: 34.7292861,
          longitude: 127.7203687,
        },
        {
          address: '충청남도 태안군 근흥면 안흥1길 77',
          latitude: 36.6783897,
          longitude: 126.1556354,
        },
        {
          address: '충청남도 아산시 도고면 도고산로659번길 27',
          latitude: 36.7450608,
          longitude: 126.8929467,
        },
        {
          address: '강원도 속초시 농공단지길 107(대포동)',
          latitude: 38.1750833,
          longitude: 128.5949875,
        },
        {
          address: '강원도 동해시 동해대로 4755',
          latitude: 37.5311952,
          longitude: 129.1068506,
        },
        {
          address: '부산광역시 서구 원양로 35(암남동)',
          latitude: 35.0581547,
          longitude: 129.0109164,
        },
        {
          address: '경기도 이천시 마장면 이치리 161번지 6호',
          latitude: 37.2658055,
          longitude: 127.3792244,
        },
        {
          address: '경기도 성남시 중원구 둔촌대로 550 (상대원동)',
          latitude: 37.4310706,
          longitude: 127.1780068,
        },
        {
          address: '전라남도 여수시 어항단지로 35-8(국동)',
          latitude: 34.7258646,
          longitude: 127.7136574,
        },
        {
          address: '전라북도 군산시 임피면 동군산로 565-1',
          latitude: 35.98426910000001,
          longitude: 126.8360509,
        },
        {
          address: '전라북도 군산시 관원리 492-4',
          latitude: 36.01008789999999,
          longitude: 126.8736704,
        },
        {
          address: '충청남도 서천군 장항읍 원수리 935-34',
          latitude: 36.0071024,
          longitude: 126.7013823,
        },
        {
          address: '강원도 동해시 새들길 1-2',
          latitude: 37.5746519,
          longitude: 129.0946523,
        },
        {
          address: '경기도 하남시 초광산단로 41(초이동)',
          latitude: 37.526471,
          longitude: 127.172159,
        },
        {
          address: '경기도 평택시 포승읍 만호리570-4',
          latitude: 36.9600306,
          longitude: 126.8485546,
        },
        {
          address: '경기도 평택시 유천로 49',
          latitude: 36.97711779999999,
          longitude: 127.1073402,
        },
        {
          address: '경기도 용인시 처인구 모현읍 곡현로 560번길 13',
          latitude: 37.3344053,
          longitude: 127.2232817,
        },
        {
          address: '경기도 용인시 처인구 백암면 박곡리 720번지 19호 2층',
          latitude: 37.1578116,
          longitude: 127.3912128,
        },
        {
          address: '부산광역시 사하구 다대로354번길 71(장림동)',
          latitude: 35.0697843,
          longitude: 128.9736099,
        },
        {
          address: '제주특별자치도 제주시 추자면 추자로576-15번지',
          latitude: 33.9448168,
          longitude: 126.3294716,
        },
        {
          address: '제주특별자치도 제주시 구좌읍 구좌해안로229-16번지',
          latitude: 33.558256,
          longitude: 126.7372137,
        },
        {
          address: '전라남도 여수시 망양로 510(오천동)',
          latitude: 34.791083,
          longitude: 127.752591,
        },
        {
          address: '전라남도 완도군 소안면 비자리 1130-1',
          latitude: 34.170943,
          longitude: 126.653254,
        },
        {
          address: '경기도 성남시 중원구 사기막골로 121 (상대원동)',
          latitude: 37.4401285,
          longitude: 127.1757402,
        },
        {
          address: '경기도 용인시 기흥구 고매동 산 76번지 강동냉장 내 4층',
          latitude: 37.2274118,
          longitude: 127.1033835,
        },
        {
          address: '제주특별자치도 서귀포시 토평공단로 127번길 39',
          latitude: 33.2907986,
          longitude: 126.5798841,
        },
        {
          address: '제주특별자치도 제주시 추자면 예초 1길13번지',
          latitude: 33.9535811,
          longitude: 126.3316088,
        },
        {
          address: '제주특별자치도 제주시 동문로 2길29-5번지',
          latitude: 33.5106192,
          longitude: 126.5271969,
        },
        {
          address: '제주특별자치도 제주시 성지로39번지',
          latitude: 33.5107163,
          longitude: 126.5276236,
        },
        {
          address: '경상남도 사천시 해안관광로 477',
          latitude: 34.9680441,
          longitude: 128.0540762,
        },
        {
          address: '경상남도 사천시 송천길 68',
          latitude: 34.9720493,
          longitude: 128.05217,
        },
        {
          address: '경상남도 사천시 대방길 60-50',
          latitude: 34.929925,
          longitude: 128.060806,
        },
        {
          address: '경상북도 울진군 후포면 중밤터2길 43-7 ',
          latitude: 36.6844369,
          longitude: 129.4349067,
        },
        {
          address: '전라남도 신안군 지도읍 봉리길 1115',
          latitude: 35.0961152,
          longitude: 126.1605363,
        },
        {
          address: '제주특별자치도 제주시 도공로 3-4번지',
          latitude: 33.5057063,
          longitude: 126.4658837,
        },
        {
          address: '제주특별자치도 제주시 도근내길 94번지',
          latitude: 33.4925689,
          longitude: 126.4344826,
        },
        {
          address: '경기도 용인시 처인구 백암면 덕평로 140(B2, 1층 일부호)',
          latitude: 37.1813182,
          longitude: 127.3735781,
        },
        {
          address: '경기도 평택시 유천로 49(합정동)',
          latitude: 36.97711779999999,
          longitude: 127.1073402,
        },
        {
          address:
            '대전광역시 대덕구 대덕대로1447번길 39(가동 문평동, 씨제이대한통운택배허브터미널)',
          latitude: 36.4493702,
          longitude: 127.4079981,
        },
        {
          address: '광주광역시 북구 양산로 192(일곡동, A동 1층)',
          latitude: 35.2094174,
          longitude: 126.8809009,
        },
        {
          address: '부산광역시 사하구 장평로71번길 10(장림동,b동)',
          latitude: 35.071828,
          longitude: 128.9720104,
        },
        {
          address: '제주특별자치도 제주시 도공로 4-7(도두일동)',
          latitude: 33.5055913,
          longitude: 126.4640261,
        },
        {
          address: '제주특별자치도 제주시 도두항서7길 18(도두일동)',
          latitude: 33.503421,
          longitude: 126.4652439,
        },
        {
          address: '경상남도 함안군 칠서면 공단서2길 45',
          latitude: 35.3666238,
          longitude: 128.4770153,
        },
        {
          address: '경상남도 양산시 물금읍 제방로 225(7동)',
          latitude: 35.3113072,
          longitude: 129.0163436,
        },
        {
          address: '경상남도 김해시 칠산로 128-1(신문동)',
          latitude: 35.1844053,
          longitude: 128.8337105,
        },
        {
          address: '경상남도 진주시 큰들로65번길 11(상평동,번지1,2층)',
          latitude: 35.1719933,
          longitude: 128.1097941,
        },
        {
          address: '경상남도 창원시 의창구 대산면 진산대로 316(외2필지)',
          latitude: 35.3289116,
          longitude: 128.7126963,
        },
        {
          address: '경상북도 안동시 경북대로 597(1층 송현동)',
          latitude: 36.5568464,
          longitude: 128.7001616,
        },
        {
          address: '경기도 평택시 포승읍 평택항만길 56(제1동)',
          latitude: 36.9600306,
          longitude: 126.8485546,
        },
        {
          address:
            '경기도 용인시 기흥구 하갈로15번길 34(지하2층 일부, 지하1층 일부 보라동)',
          latitude: 37.2497785,
          longitude: 127.1026109,
        },
        {
          address: '대전광역시 대덕구 대화로32번길 335(1층 대화동)',
          latitude: 36.3746516,
          longitude: 127.4062054,
        },
        {
          address: '인천광역시 서구 북항로245번길 13-22(원창동)',
          latitude: 37.5019127,
          longitude: 126.6243171,
        },
        {
          address: '부산광역시 사하구 을숙도대로755번길 6(구평동)',
          latitude: 35.0867079,
          longitude: 128.9878007,
        },
        {
          address: '부산광역시 서구 원양로 189(암남동)',
          latitude: 35.068032,
          longitude: 129.0087884,
        },
        {
          address:
            '세종특별자치시 부강면 연청로 745-46(4동 A호 중부복합물류터미널 화물취급장)',
          latitude: 36.5448046,
          longitude: 127.3565168,
        },
        {
          address: '경상남도 합천군 대병면 황계폭포로 61',
          latitude: 35.5232412,
          longitude: 128.0522056,
        },
        {
          address: '전라북도 진안군 진안읍 대연장길 4(농공2단지내)',
          latitude: 35.7719812,
          longitude: 127.3818263,
        },
        {
          address: '전라북도 익산시 낭산면 낭산중앙로 227',
          latitude: 36.0633253,
          longitude: 127.0043561,
        },
        {
          address: '충청남도 홍성군 광천읍 충서로 499-30',
          latitude: 36.5284558,
          longitude: 126.6224474,
        },
        {
          address:
            '충청남도 계룡시 두마면 제1산단로 26-21(계룡제1일반산업단지 B3-1-4)',
          latitude: 36.2493531,
          longitude: 127.2693781,
        },
        {
          address: '강원도 동해시 새들길 1-2(초구동)',
          latitude: 37.5746519,
          longitude: 129.0946523,
        },
        {
          address: '경기도 광주시 도척면 도척로 401-61(외 도척로 401-54)',
          latitude: 37.3154211,
          longitude: 127.3397842,
        },
        {
          address: '제주특별자치도 제주시 도두항서 5길5번지',
          latitude: 33.5045833,
          longitude: 126.4642409,
        },
        {
          address: '경기도 광주시 장지9길 34-16(장지동)',
          latitude: 37.3986047,
          longitude: 127.2389491,
        },
        {
          address: '경기도 화성시 팔탄면 시청로721번길 25',
          latitude: 37.1753924,
          longitude: 126.8746286,
        },
        {
          address: '경기도 이천시 호법면 중부대로763번길 141-27(외5필지)',
          latitude: 37.249452,
          longitude: 127.4241194,
        },
        {
          address: '충청남도 천안시 서북구 입장면 위례성로 1950(외6필지)',
          latitude: 36.9128941,
          longitude: 127.2465828,
        },
        {
          address: '경기도 여주시 웅골로 161',
          latitude: 37.2666411,
          longitude: 127.6253717,
        },
        {
          address: '부산광역시 서구 충무대로 174(남부민동)',
          latitude: 35.0866748,
          longitude: 129.0236393,
        },
        {
          address: '제주특별자치도 제주시 다랑곶 4길31번지',
          latitude: 33.4890068,
          longitude: 126.4791255,
        },
        {
          address: '제주특별자치도 제주시 도두봉 2길32번지',
          latitude: 33.5066951,
          longitude: 126.4744285,
        },
        {
          address: '제주특별자치도 제주시 도두봉 2길30번지',
          latitude: 33.5066951,
          longitude: 126.4744285,
        },
        {
          address: '제주특별자치도 제주시 우정로 7길26-7번지',
          latitude: 33.4883815,
          longitude: 126.4339266,
        },
        {
          address: '제주특별자치도 제주시 한림읍 명상로76-20번지',
          latitude: 33.3748218,
          longitude: 126.2765065,
        },
        {
          address: '제주특별자치도 제주시 도두항서길21번지',
          latitude: 33.5061166,
          longitude: 126.4659647,
        },
        {
          address: '제주특별자치도 제주시 도공로14-9번지',
          latitude: 33.5047368,
          longitude: 126.4640444,
        },
        {
          address: '제주특별자치도 제주시 계명 2길10번지',
          latitude: 33.4891423,
          longitude: 126.4245261,
        },
        {
          address: '전라북도 익산시 여산면 가람로 52-6',
          latitude: 36.0301073,
          longitude: 127.0945104,
        },
        {
          address: '경기도 시흥시 오이도로 22-12(정왕동,라동)',
          latitude: 37.3472117,
          longitude: 126.7026075,
        },
        {
          address:
            '경기도 안산시 단원구 원시로 216(원시동,반월공단1 B-62호 주아워홈1동 2층)',
          latitude: 37.297212,
          longitude: 126.7830578,
        },
        {
          address:
            '경기도 성남시 중원구 갈마치로 200(상대원동,1층,3층,5층,6층,7층)',
          latitude: 37.4321034,
          longitude: 127.174548,
        },
        {
          address: '울산광역시 울주군 범서읍 원천상길 2-3(1층)',
          latitude: 35.5624943,
          longitude: 129.2212166,
        },
        {
          address: '울산광역시 울주군 삼동면 암리3길 5(3,4층)',
          latitude: 35.5028621,
          longitude: 129.0999034,
        },
        {
          address: '울산광역시 북구 무룡1로 44-9(연암동,주현대백화점물류창고)',
          latitude: 35.5769649,
          longitude: 129.3667819,
        },
        {
          address: '대전광역시 대덕구 덕암북로4번길 177(1층 덕암동)',
          latitude: 36.440159,
          longitude: 127.4211127,
        },
        {
          address: '광주광역시 광산구 상완길 163(수완동)',
          latitude: 35.2065043,
          longitude: 126.8304875,
        },
        {
          address: '인천광역시 강화군 길상면 길상로 197',
          latitude: 37.6348099,
          longitude: 126.5029376,
        },
        {
          address:
            '인천광역시 남동구 경인로 539(간석동,경인로 917 1층일부냉동창고)',
          latitude: 37.4872368,
          longitude: 126.7216757,
        },
        {
          address: '부산광역시 강서구 공항로767번다길 2(1층 일부호 대저2동)',
          latitude: 35.1744143,
          longitude: 128.9564158,
        },
        {
          address: '부산광역시 서구 원양로 67(암남동, 해원냉장1층~12층)',
          latitude: 35.06153949999999,
          longitude: 129.0092621,
        },
        {
          address:
            '부산광역시 서구 원양로 125(암남동, 주냉장인터불고제2공장 1층~12층)',
          latitude: 35.0641781,
          longitude: 129.0126506,
        },
        {
          address:
            '서울특별시 동대문구 약령시로9길 39(제기동,,133-24 지층[약령시로9길39])',
          latitude: 37.58465959999999,
          longitude: 127.0351661,
        },
        {
          address: '전라남도 목포시 자유로97번길 16(산정동)',
          latitude: 34.794913,
          longitude: 126.4005896,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  },
};
