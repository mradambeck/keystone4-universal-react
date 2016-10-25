export default function renderLayout(app, props) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
</head>
<body>
  <div id="app">${app}</div>
  <script>window.PROPS = ${props}</script>
  <script src="bundle.js"></script>
</body>
</html>
  `;
}