<div id="cookiebanner" class="bg">
  <p>Wir verwenden Cookies, um Ihnen das beste Online-Erlebnis zu bieten. Mit Ihrer Zustimmung akzeptieren Sie die Verwendung von Cookies.</p>
  <button id="acceptBtn">Okay</button>
  <button id="declineBtn">Nein, danke</button>
</div>

<script async src="https://www.googletagmanager.com/gtag/js?id=........"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    var trackingID = '.....';
    var disableString = 'ga-disable-' + trackingID;

    function accept() {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 365);
        document.cookie = 'accepted=yes, i accept google analytics; expires=' + expirationDate.toUTCString() + '; path=/; SameSite=None; Secure';
        document.getElementById('cookiebanner').remove();
        gtag('config', trackingID, {
            'anonymize_ip': true,
            'allow_google_signals': false,
            'allow_ad_personalization_signals': false
        });
    }

    function decline() {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 365);
        document.cookie = disableString + '=true; expires=' + expirationDate.toUTCString() + '; path=/; SameSite=None; Secure';
        document.getElementById('cookiebanner').remove();
    }

    function showBanner() {
        var banner = document.getElementById('cookiebanner');
        banner.classList.add('visible');
    }

    document.getElementById('acceptBtn').addEventListener('click', accept);
    document.getElementById('declineBtn').addEventListener('click', decline);

    if (document.cookie.indexOf(disableString + '=true') > -1) {
        window[disableString] = true;
        document.getElementById('cookiebanner').remove();
    } else if (document.cookie.indexOf('accepted=') >= 0) {
        accept();
    } else {
        setTimeout(showBanner, 5500);
    }
</script>