const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto('https://jjosias14.github.io/IS218-450-Team-E'); // Replace with the actual file path

    // Check the title of the page
    const title = await page.title();
    if (title !== 'Powerhouse Gym') {
      throw new Error('Title is incorrect');
    }

    // Check if navigation links are present
    const navLinks = await page.$$eval('nav li a', links => links.map(link => link.textContent));
    const expectedNavLinks = ['Home', 'About Us', 'Blog'];
    if (!navLinks.every(link => expectedNavLinks.includes(link))) {
      throw new Error('Navigation links are missing or incorrect');
    }

    // Check if the main content is present
    const mainContent = await page.$('.index-content');
    if (!mainContent) {
      throw new Error('Main content is missing');
    }

    console.log('Test passed: All elements are running correctly.');
  } catch (error) {
    console.error('Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();
