// Get Parameters from URL and Convert to Object
const getParameters = (URL) =>
  JSON.parse(
    `{"${decodeURI(URL.split("?")[1])
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`
  );

console.log(getParameters("https://www.google.com.hk/search?q=js+md&newwindow=1"));
// {q: 'js+md', newwindow: '1'}
