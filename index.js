import satori from 'satori';
import { html } from 'satori-html';
import fs from 'fs/promises';

async function generateCard() {
  const fontData = await fs.readFile('./Roboto-Regular.ttf'); 

  const markup = html`
    <div style="
      width: 800px;
      height: 80px;
      background: #2d3f59ff;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      color: white;
      font-family: Roboto, sans-serif;
      font-weight: 800;
      font-size: 18px;
      padding: 0 20px;
      /* Glow effect - multiple layers for depth */
      box-shadow: 
        0 0 20px rgba(255,255,255,0.3),
        0 0 40px rgba(45, 63, 89, 0.6),
        0 0 60px rgba(45, 63, 89, 0.4);
    ">
      <span>blacksmith(@fnstart)</span>
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
