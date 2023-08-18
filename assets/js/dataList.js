// URL에서 XML 데이터를 가져오는 함수
export async function fetchXmlData(url, tag, text, key) {
  try {
    let data = "";
    if (tag != null && text != null) {
      data = `${url}${tag}=${text}&serviceKey=${key}`;
    } else {
      data = `${url}&serviceKey=${key}`;
    }
    const response = await fetch(data);
    const xmlData = await response.text();
    return xmlData;
  } catch (error) {
    console.error("XML 데이터 가져오기 실패:", error);
    return null;
  }
}

// XML 데이터를 파싱하여 특정 태그의 값을 가져오는 함수
export function extractTagValue(xmlData, tagName) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "text/xml");
  const tagElement = xmlDoc.querySelector(tagName);
  if (tagElement) {
    return tagElement.textContent;
  } else {
    return null;
  }
}
