// Progressively enhances any <form data-ajax-form> (submitting to Web3Forms) to
// post via fetch instead of a full page reload. Forms still work with JS
// disabled — plain POST to Web3Forms, which redirects to the `redirect` field.
document.querySelectorAll('form[data-ajax-form]').forEach((form) => {
  const status = form.querySelector('[data-form-status]');
  const button = form.querySelector('button[type="submit"]');
  const buttonLabel = button ? button.textContent : '';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (button) {
      button.disabled = true;
      button.textContent = 'Sending…';
    }
    if (status) {
      status.textContent = '';
      status.classList.remove('form-status-ok', 'form-status-error');
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const data = await res.json();

      if (data.success) {
        form.reset();
        if (status) {
          status.textContent = "Thanks — we'll be in touch within one business day.";
          status.classList.add('form-status-ok');
        }
      } else {
        if (status) {
          status.textContent = data.message || 'Something went wrong. Please try again or email us directly.';
          status.classList.add('form-status-error');
        }
      }
    } catch (err) {
      if (status) {
        status.textContent = 'Something went wrong. Please try again or email us directly.';
        status.classList.add('form-status-error');
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = buttonLabel;
      }
    }
  });
});
