const h2s = Array.from(document.getElementsByTagName("h2"));

function toggleAccordion(h2) {    
    const arrow = h2.childNodes[1];
    const paragraph = h2.nextElementSibling;

    h2.classList.toggle("accordion__h2--shown");
    arrow.classList.toggle("arrow--shown");        
    paragraph.classList.toggle("hidden");
}

h2s.forEach(element => {    
  element.onclick = () => {
      h2s.forEach(element2 => {
          if (element !== element2 && element2.classList.contains("accordion__h2--shown")) {
              toggleAccordion(element2);
          }
      });
      toggleAccordion(element);
  }
});

toggleAccordion(h2s[0]);