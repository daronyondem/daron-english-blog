const fs = require('fs');
const axios = require('axios');

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
const filePath = './content/speaking.md'; 
const tableHeader = "Here is where I'm planning to be next;";

fs.readFile(filePath, 'utf8', (err, markdown) => {
  if (err) {
    console.error('Error reading the markdown file:', err);
    return;
  }

  const tableStart = markdown.indexOf(tableHeader) + tableHeader.length;
  const tableEnd = markdown.indexOf('<br/>', tableStart);
  const tableMarkdown = markdown.substring(tableStart, tableEnd).trim();

  const lines = tableMarkdown.split('\n').slice(2);
  const embeds = lines.map(line => {
    // Extract data from each column
    const [nameColumn, topic, date, place] = line.split('|').slice(1).map(text => text.trim());
    const nameMatch = nameColumn.match(/\[(.*?)\]\((.*?)\)/) || [];
    const name = nameMatch[1] || nameColumn;
    const url = nameMatch[2];

    return {
      description: `Konu: ${topic}\nTarih: ${date}\n`,
      fields: [],
      footer: {
        text: place
      },
      title: name,
      ...(url && { url })
    };
  });

  axios.post(webhookUrl, {
    username: 'Etkinlik Habercisi',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/7653/7653930.png',
    content: "An update has been made on the future event list on https://daron.blog/speaking/",
    embeds: embeds
  })
  .then(() => console.log('Message sent'))
  .catch(console.error);
});
