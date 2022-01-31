export default class TabAction{
    constructor(tabs, tabsSelectors, tabsParent) {
        this.tabs = tabs;
        this.tabsSelectors = tabsSelectors;
        this.tabsParent = tabsParent;
      }
      hideTubs() {
        this.tabs.forEach(item => {
            item.style.display = 'none';
        });

        this.tabsSelectors.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    showTubs(i = 0) {
        this.tabs[i].style.display = 'block';
        this.tabsSelectors[i].classList.add('tabheader__item_active');
    }

    addTabEvent(){
        this.tabsParent.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.classList.contains('tabheader__item')) {
                this.tabsSelectors.forEach((item, i) => {
                    if (target == item) {
                        this.hideTubs();
                        this.showTubs(i);
                    }
                });
            }
        });
    }

}