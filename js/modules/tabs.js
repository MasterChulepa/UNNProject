function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    class TabAction {
        constructor(tabs, tabsContent, tabsParent) {
            this.tabs = tabs;
            this.tabsContent = tabsContent;
            this.tabsParent = tabsParent;
        }
        hideTubs() {
            this.tabs.forEach(item => {
                item.style.display = 'none';
            });

            this.tabsContent.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
        showTubs(i = 0) {
            this.tabs[i].style.display = 'block';
            this.tabsContent[i].classList.add(activeClass);
        }

        addTabEvent() {
            this.tabsParent.addEventListener('click', (e) => {
                const target = e.target;
                if (target && target.classList.contains(tabsSelector.slice(1))) {
                    this.tabsContent.forEach((item, i) => {
                        if (target == item) {
                            this.hideTubs();
                            this.showTubs(i);
                        }
                    });
                }
            });
        }

    }
    const tabsAction = new TabAction(tabs, tabsContent, tabsParent);


    tabsAction.hideTubs();
    tabsAction.showTubs();
    tabsAction.addTabEvent();
}
export default tabs;