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
        successMsg.style.cssText = 'display: none; align-items: center; gap: 8px; color: #fff; margin-top: 15px; font-size: 13px; font-family: inherit; background: #333; padding: 6px 12px; border-radius: 4px; width: fit-content;';
        successMsg.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; background: #4caf50; border-radius: 50%;">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" fill="white"/>
            </svg>
          </div>
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
