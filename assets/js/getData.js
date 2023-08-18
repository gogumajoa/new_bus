import * as apiData from "./dataList.js";
import * as key from "./apiKey.js";

// xml에서 원하는 데이터를 하나만 가져오는 함수
async function exportXML() {
  const xmlData = await apiData.fetchXmlData(
    key.route_url,
    "lineno",
    "부산진구9",
    key.apikey
  );
  if (xmlData) {
    console.log(xmlData);
  } else {
    console.log("XML 데이터 가져오기 실패");
  }
}

// 실행
exportXML();
