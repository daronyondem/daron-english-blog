const fs = require('fs');
const axios = require('axios');

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
const filePath = './content/speaking.md'; 

fs.readFile(filePath, 'utf8', (err, markdown) => {
  if (err) {
    console.error('Error reading the markdown file:', err);
    return;
  }

  const tableStart = markdown.indexOf("Here is where I'm planning to be next;") + "Here is where I'm planning to be next;".length;
  const tableEnd = markdown.indexOf('<br/>', tableStart);
  const tableContent = '```' + markdown.substring(tableStart, tableEnd).trim() + '```';

  axios.post(webhookUrl, {
    username: 'Etkinlik Habercisi',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/7653/7653930.png',
    content: tableContent
  })
  .then(() => console.log('Message sent'))
  .catch(console.error);
});
