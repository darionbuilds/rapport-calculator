import puppeteer from 'puppeteer';

export default async function fetchNpcList() {
  const baseUrl = 'https://lostarkcodex.com';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${baseUrl}/us/reputation/`, {
    waitUntil: 'networkidle2',
  });
  await page.select('[name="ReputationTable_length"]', '100');
  const npcList = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll<HTMLTableRowElement>(
        '#ReputationTable > tbody > tr'
      )
    );
    return rows.map((currentRow) => {
      const cells = currentRow.cells;
      return {
        id: cells[0].innerText,
        icon: cells[1].querySelector<HTMLImageElement>('img')!.src,
        name: cells[2].innerText,
        location: cells[3].innerText,
      };
    });
  });
  await browser.close();
}
