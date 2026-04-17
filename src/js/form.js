(function() {
  const advertorial = document.getElementById('advertorial');
  const formView = document.getElementById('form-view');
  const thankYouView = document.getElementById('thank-you-view');
  
  const startBtn = document.getElementById('start-btn');
  const nextBtns = document.querySelectorAll('.next-btn');
  const prevBtns = document.querySelectorAll('.prev-btn');
  const submitBtn = document.getElementById('submit-btn');
  
  const steps = document.querySelectorAll('.form-step');
  const stepIndicators = document.querySelectorAll('.step');
  
  let currentStep = 0;

  // Navigation Logic
  startBtn.addEventListener('click', () => {
    advertorial.style.display = 'none';
    formView.style.display = 'block';
    window.scrollTo(0, 0);
  });

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      steps[currentStep].classList.remove('active');
      stepIndicators[currentStep].classList.remove('active');
      currentStep++;
      steps[currentStep].classList.add('active');
      stepIndicators[currentStep].classList.add('active');
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      steps[currentStep].classList.remove('active');
      stepIndicators[currentStep].classList.remove('active');
      currentStep--;
      steps[currentStep].classList.add('active');
      stepIndicators[currentStep].classList.add('active');
    });
  });

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    formView.style.display = 'none';
    thankYouView.style.display = 'block';
    window.scrollTo(0, 0);
    
    // Simulate real-time lead delivery log
    const leadData = {
      timestamp: new Date().toISOString(),
      source: "Advertorial_Showcase",
      details: {
        name: document.getElementById('name').value || "John Doe",
        email: document.getElementById('email').value || "john@example.com",
        service: document.getElementById('service').value,
        budget: document.getElementById('budget').value
      }
    };
    
    document.getElementById('lead-log').textContent = `[EVENT] Lead_Captured: 
${JSON.stringify(leadData, null, 2)}
[ACTION] Delivers lead via Webhook to Buyer CRM...
[STATUS] 200 OK - Lead Received.`;
  });
})();
