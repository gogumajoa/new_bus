import * as apiData from "./dataList.js";
import * as key from "./apiKey.js";

const main_stop = document.querySelector("#main_stop");

// 주요 정차 정류소 데이터 가져오기
async function getmain_stop() {
  /*노선 버튼으로 누를 시 버튼 텍스트 읽어와서 노선 id 수동으로 하기
9번
5290509000

6-1
5290506100

6
5290506000
  */

  const xmlData = await apiData.fetchXmlData(
    key.station_url,
    "lineid",
    "5290509000",
    key.apikey
  );

  if (xmlData) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "text/xml");

    const bstopnmElements = xmlDoc.getElementsByTagName("bstopnm");
    const bstopnmList = [];

    for (let i = 0; i < bstopnmElements.length; i++) {
      const bstopnm = bstopnmElements[i].textContent;
      bstopnmList.push(bstopnm);
    }

    if (bstopnmList) {
      main_stop.innerHTML += bstopnmList[0];
      for (let i = 1; i < bstopnmList.length; i++) {
        main_stop.innerHTML += `-${bstopnmList[i]}`;
      }
    } else {
      console.log("태그 값이 없습니다.");
    }
  } else {
    console.log("XML 데이터 가져오기 실패");
  }
}

// 실행
getmain_stop();
