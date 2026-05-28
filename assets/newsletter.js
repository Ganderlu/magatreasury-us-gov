(function() {
  function initNewsletter() {
    const forms = document.querySelectorAll('.footer__newsletter, #ContactFooter, #footer-subscribe, .subscribe-form');
    forms.forEach(form => {
      if (form.dataset.newsletterInitialized) return;
      form.dataset.newsletterInitialized = 'true';

      // Add success message container if not exists
      let successMsg = form.querySelector('.newsletter-success-msg');
      if (!successMsg) {
        successMsg = document.createElement('div');
        successMsg.className = 'newsletter-success-msg';
        successMsg.style.cssText = 'display: none; align-items: center; gap: 6px; color: #fff; margin-top: 12px; font-size: 13px; font-family: inherit;';
        successMsg.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4caf50"/>
          </svg>
          <span>Thanks for subscribing</span>
        `;
        form.appendChild(successMsg);
      }

      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        const submitBtn = form.querySelector('button[type="submit"]');
        
        if (!email) return;

        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '...';

        try {
          const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });

          const data = await response.json();

          if (data.success) {
            successMsg.style.display = 'flex';
            emailInput.value = '';
          } else {
            console.error('Newsletter error:', data.error);
          }
        } catch (error) {
          console.error('Newsletter network error:', error);
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNewsletter);
  } else {
    initNewsletter();
  }
})();
