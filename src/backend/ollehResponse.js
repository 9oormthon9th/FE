const parseOllehResponse = (response) => {
  console.log('response', response);
  return {
    startPlace: response['시작점'],
    endPlace: response['종점'],
    startLng: response['시작점 경도'],
    startLat: response['시작점 위도'],
    endLng: response['종점 경도'],
    endLat: response['종점 위도'],
    expectedTime: response['예상 소요 시간'],
    courseNumber: response['올레길 코스 번호'],
    courseName: response['올레길 코스 이름'],
    totalKm: response['총 길이(KM)'],
    wheelchair: response['휠체어 구간 유무'],
    description: response['description'],
    image1: response['images'],
    image2: response['image2'],
  };
};

// 시작점: "쇠소깍 다리"
// 시작점 경도: 126.6226777
// 시작점 위도: 33.25308839
// 예상 소요 시간: "3~4"
// 올레길 코스 번호: "6코스"
// 올레길 코스 이름: "쇠소깍- 제주올레여행자센터 올레"
// 종점: "제주올레 여행자센터"
// 종점 경도: 126.5587
// 종점 위도: 33.24761962
// 총 길이(KM): 11
// 휠체어 구간 유무: true

export default parseOllehResponse;
