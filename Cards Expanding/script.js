const panels =
    document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        // class "active" to the clicked panel
        panel.classList.add('active');
    });
});

// remove the class "active" from all the panels
function removeActiveClasses() {
       
    panels.forEach((panel) => {
        panel.classList.remove('active'); 
    });
}