document.addEventListener('DOMContentLoaded', function() {
      const links = document.querySelectorAll('a');
      const siteHost = window.location.hostname;

      links.forEach(link => {
        if (link.href && (link.protocol === 'http:' || link.protocol === 'https:')) {
          const linkHost = new URL(link.href).hostname;
          if (linkHost !== siteHost) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
          }
        }
      });
    });
    