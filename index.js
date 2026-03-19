import satori from 'satori';
import { html } from 'satori-html';
import fs from 'fs/promises';

async function generateCard() {
  const fontData = await fs.readFile('./Roboto-Regular.ttf'); 

  const markup = html`
    <div style="
      width: 800px;
      height: 80px;
      background: #0d1117;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      color: white;
      font-family: Roboto, sans-serif;  /* Match the font name below */
      font-weight: 600;
      font-size: 18px;
      padding: 0 20px;
    ">
      <span>Hello Test</span>
      <img width="20" height="20" src="./files/C++lang.png?raw=true" />
      <img width="20" height="20" src="./files/Cslang.png?raw=true" />
      <img width="20" height="20" src="./files/Rustlang.png?raw=true" />
      <img width="20" height="20" src="./files/Javascriptlang.png?raw=true" />
      <img width="20" height="20" src="./files/Typescriptlang.png?raw=true" />
      <img width="20" height="20" src="./files/Pythonlang.png?raw=true" />
    </div>
  `;

  const svg = await satori(markup, {
    width: 800,
    height: 80,
    fonts: [
      {
        name: 'Roboto',
        data: fontData,
        weight: 400, 
        style: 'normal',
      },
    ],
  });

  await fs.writeFile('page.svg', svg);
  console.log('✅ page.svg generated!');
}

generateCard();
