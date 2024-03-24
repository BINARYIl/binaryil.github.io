
document.getElementById('conversionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let urlInput = document.getElementById('urlInput').value;
  let binary = textToBinary(urlInput);
  let ilFormat = binaryToIl(binary);
  document.getElementById('ilOutput').textContent = ilFormat;
  document.getElementById('url').textContent = "https://binaryil.github.io/"+ilFormat;
  
});

document.getElementById('decodeForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let ilInput = document.getElementById('ilInput').value;
  let binary = IlTobinary(ilInput);
  let originalText = binaryToText(binary);
  document.getElementById('decodedOutput').textContent = originalText;
});


