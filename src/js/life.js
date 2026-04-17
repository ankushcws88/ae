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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate real-time lead delivery log
    const leadData = {
      event_type: "LIFE_ENQUIRY",
      timestamp: new Date().toISOString(),
      payload: {
        identity: {
          name: document.getElementById('name').value || "Anonymous",
          dob: document.getElementById('dob').value || "1990-01-01"
        },
        lifestyle: {
          activity_level: document.getElementById('activity').value,
          goal: document.getElementById('goal').value
        }
      }
    };
    
    document.getElementById('lead-log').textContent = `>>> INCOMING_LEAD_STREAM: 
${JSON.stringify(leadData, null, 2)}
>>> DISPATCHING to LifePartner_API...
>>> DELIVERY_STATUS: SUCCESS (ID: ${Math.random().toString(36).substr(2, 9).toUpperCase()})`;
  });
})();
