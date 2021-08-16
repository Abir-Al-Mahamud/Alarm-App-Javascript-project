function setupTabs() {
    document.querySelectorAll('.tabs-button').forEach(button => {
        button.addEventListener("click", () => {
            const header = button.parentElement;
            const tabsContainer = header.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs-content[data-tab="${tabNumber}"]`);

            header.querySelectorAll('.tabs-button').forEach(button => {
                button.classList.remove("tabs-button--active")
            })
            tabsContainer.querySelectorAll('.tabs-content').forEach(tab => {
                tab.classList.remove("tabs-content--active")
            })

            button.classList.add('tabs-button--active');
            tabToActivate.classList.add('tabs-content--active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupTabs();

    document.querySelectorAll('.tabs').forEach(tabsContainer => {
        tabsContainer.querySelector('.tabs-header .tabs-button').click();
    })
});