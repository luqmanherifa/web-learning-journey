const btnAccordion = document.getElementsByClassName('btn-accordion');

for(var i = 0; i < btnAccordion.length; i++) {
  btnAccordion[i].addEventListener('click', function() {
    this.classList.toggle('btn-accordion-padding-active');

    var accordion = this.parentElement;
    accordion.classList.toggle('accordion-border-active');

    var panelAccordion = this.nextElementSibling;
    
    if(panelAccordion.style.display === 'block') {
      panelAccordion.style.display = 'none';
    } else {
      panelAccordion.style.display = 'block';
    }

    if(panelAccordion.style.maxHeight) {
      panelAccordion.style.maxHeight = null;
    } else {
      panelAccordion.style.maxHeight = panelAccordion.scrollHeight + 'px';
    }
  });
}