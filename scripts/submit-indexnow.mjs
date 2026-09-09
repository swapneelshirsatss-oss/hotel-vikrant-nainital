/**
 * Fast Indexing & SEO Indexation Velocity Protocol (IndexNow)
 * Submits all canonical production URLs to both IndexNow Central Gateway (Bing, Yandex, Seznam, Naver)
 * and Bing Direct Endpoints.
 */

const HOST = "vikranthotelnainital.in";
const KEY = "b679b32c6a0c4f828a2a19b88301ecfd";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/rooms/`,
  `https://${HOST}/amenities/`,
  `https://${HOST}/attractions/`,
  `https://${HOST}/gallery/`,
  `https://${HOST}/about/`,
  `https://${HOST}/contact/`,
  `https://${HOST}/privacy-policy/`,
  `https://${HOST}/terms/`,
];

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

async function submitUrls() {
  console.log(`[START] IndexNow Instant Crawl Submission for ${HOST}`);
  console.log(`[INFO] Submitting ${URL_LIST.length} canonical URLs with key: ${KEY}`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  for (const endpoint of ENDPOINTS) {
    try {
      console.log(`[SEND] Submitting to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok || response.status === 200 || response.status === 202) {
        console.log(`[OK] Successfully accepted by ${endpoint} (HTTP ${response.status})`);
      } else {
        const text = await response.text();
        console.warn(`[WARN] ${endpoint} responded with HTTP ${response.status}: ${text}`);
      }
    } catch (err) {
      console.error(`[FAIL] Error submitting to ${endpoint}:`, err.message);
    }
  }

  console.log("[DONE] Multi-engine IndexNow submission complete.");
}

submitUrls();
