const main = document.getElementById('main');
main.srcdoc = `
<script>
  alert(window.document.URL);
  Object.defineProperty(window.document, 'URL', {
      value: 'http://new.url.com'
  })
  alert(window.document.URL);
</script>
`

main.onload = () => {
  document.getElementById('message').innerHTML += '<div>iframe is loaded</div>';
};
