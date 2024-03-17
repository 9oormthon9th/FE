import CategorySearchOneAsync from './CategorySearchOneAsync';
import KeywordSearchOneAsync from './KeywordSearchOneAsync';
import CategoryConst from './CategoryConst';

async function searchFiveTimes(centerPosList) {
  const results = [
    {
      label: '아침 식사',
      place: null,
    },
    {
      label: '점심 식사',
      place: null,
    },
    {
      label: '카페',
      place: null,
    },
    {
      label: '저녁 식사',
      place: null,
    },
    {
      label: '숙소',
      place: null,
    },
  ];

  const promises = [
    CategorySearchOneAsync(centerPosList[0], CategoryConst.food),
    CategorySearchOneAsync(centerPosList[1], CategoryConst.food),
    CategorySearchOneAsync(centerPosList[2], CategoryConst.cafe),
    KeywordSearchOneAsync(centerPosList[3], '맛집'),
    CategorySearchOneAsync(centerPosList[4], CategoryConst.accommodation),
  ];

  const xx = await Promise.all(promises);
  for (let i = 0; i < 5; i++) {
    results[i].place = xx[i];
    results[i].place.place_url = results[i].place.place_url.replace(
      /^http:\/\//i,
      'https://'
    );
  }

  return results;
}

export default searchFiveTimes;
