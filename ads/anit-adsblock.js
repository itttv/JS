document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var adContainer = document.getElementById('adContainer');
        if (adContainer) {
            adContainer.style.display = 'block';
        }
    }, 5 * 60 * 1000); // 5 menit = 300.000 ms

    function showAdBlockMessage() {
        var adBlockMessage = document.createElement('div');
        adBlockMessage.style.position = 'fixed';
        adBlockMessage.style.top = '0';
        adBlockMessage.style.left = '0';
        adBlockMessage.style.width = '100%';
        adBlockMessage.style.height = '100%';
        adBlockMessage.style.background = 'rgba(0, 0, 0, 0.7)';
        adBlockMessage.style.zIndex = '9999';
        adBlockMessage.style.display = 'flex';
        adBlockMessage.style.justifyContent = 'center';
        adBlockMessage.style.alignItems = 'center';

        adBlockMessage.innerHTML = `
<div class='warning-message' style='background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); text-align: center; max-width: 500px; margin: 20px auto;'>
    <h2 style='margin: 0; color: #e74c3c;'>AD BLOCKER DETECTED</h2>
    <p style='font-size: 16px; color: #333;'>To access this website smoothly, please disable your Ad Blocker and DNS. You can also use a VPN:<a href='https://1.1.1.1' style='color: #3498db; text-decoration: none;' target='_blank'>https://1.1.1.1</a>.</p>
</div>
        `;
        document.body.appendChild(adBlockMessage);
    }

    var adScript = document.createElement('script');
    adScript.src = '//stoolsymphony.com/22/b1/f5/22b1f52c0e91b7d401534bc5929e62f1.js';
    adScript.async = true;
    adScript.onload = function() {
        console.log('good');
    };
    adScript.onerror = function() {
        console.log('oops');
        showAdBlockMessage();
    };
    document.head.appendChild(adScript);
  });

  function closeAd() {
      var adContainer = document.getElementById('adContainer');
      if (adContainer) {
          adContainer.style.display = 'none';
      }
  }
