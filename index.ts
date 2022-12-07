// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const userUrlList = [
  {
    uri: '/videos/715886460',
  },
  {
    uri: '/videos/722455327',
  },
];
let generalUrlList = [
  {
    uri: '/videos/722455327',
  },
  {
    uri: '/videos/718272007',
  },
  {
    uri: '/videos/720116663',
  },
  {
    uri: '/videos/722455212',
  },
  {
    uri: '/videos/718256245',
  },
  {
    uri: '/videos/714905145',
  },
];
const matchingUrlList = userUrlList.filter(function (o1) {
  return generalUrlList.some(function (o2) {
    return o1.uri === o2.uri;
  });
});
console.log(matchingUrlList);
