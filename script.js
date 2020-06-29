const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // Remove all show and border classes
    removeBorder();
    removeShow();
    removeDark();
    // Add border to current tab item
    this.classList.add('tab-border');
    this.classList.add('dark');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

//Remove dark class
function removeDark() {
    tabItems.forEach(item => {
        item.classList.remove('dark');
    });
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

// Listen for tab item click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});


//Accordion


const accordionItemHeader = document.querySelectorAll(".accordion-item-header");
accordionItemHeader.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click" , event => {
    accordionItemHeader.classList.toggle("active");
  });
});
