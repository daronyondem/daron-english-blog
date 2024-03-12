const fs = require('fs');
const axios = require('axios');
const { execSync } = require('child_process');

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
const filePath = './content/speaking.md';
const tableHeader = "Here is where I'm planning to be next;";

// Function to get file content from the previous commit
function getFileFromPreviousCommit(filePath) {
  try {
    // Fetch the file content from the previous commit
    return execSync(`git show HEAD^:${filePath}`).toString();
  } catch (error) {
    console.error('Error fetching file from previous commit:', error);
    return '';
  }
}

// Function to extract the table from markdown
function extractTable(markdown, tableHeader) {
  const tableStart = markdown.indexOf(tableHeader) + tableHeader.length;
  const tableEnd = markdown.indexOf('<br/>', tableStart);
  return markdown.substring(tableStart, tableEnd).trim();
}

// Function to parse markdown table into array of objects
function parseTable(markdownTable) {
  const lines = markdownTable.split('\n').slice(2); // Skip header and separator
  return lines.map(line => {
    const [nameColumn, topic, date, place] = line.split('|').slice(1).map(text => text.trim());
    const nameMatch = nameColumn.match(/\[(.*?)\]\((.*?)\)/) || [];
    const name = nameMatch[1] || nameColumn;
    const url = nameMatch[2];

    return { name, topic, date, place, url };
  });
}

// Function to find changed rows
function findChanges(current, previous) {
  const changes = current.filter(row => !previous.some(prevRow => JSON.stringify(row) === JSON.stringify(prevRow)));
  return changes;
}

// Read current file
const currentMarkdown = fs.readFileSync(filePath, 'utf8');
const previousMarkdown = getFileFromPreviousCommit(filePath);

// Extract and parse tables
const currentTable = extractTable(currentMarkdown, tableHeader);
const previousTable = extractTable(previousMarkdown, tableHeader);
const currentParsed = parseTable(currentTable);
const previousParsed = parseTable(previousTable);

// Find changes
const changes = findChanges(currentParsed, previousParsed);

// Prepare Discord message
const embeds = changes.map(change => ({
  description: `Konu: ${change.topic}\nTarih: ${change.date}\n`,
  fields: [],
  footer: {
    text: change.place
  },
  title: change.name,
  ...(change.url && { url: change.url })
}));

if (embeds.length > 0) {
  // Send notification to Discord
  axios.post(webhookUrl, {
    username: 'Etkinlik Habercisi',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/7653/7653930.png',
    content: "An update has been made on the future event list on https://daron.blog/speaking/",
    embeds: embeds
  })
  .then(() => console.log('Message sent'))
  .catch(console.error);
} else {
  console.log('No changes detected.');
}
