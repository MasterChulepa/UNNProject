export default class MenuService {
    
    async  getMenu(url) {
        let res = await fetch(url);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        return await res.json();                               //дожидаемся окончания перевода данных из промиса в json
    }

    transferPrice(menuCard) {
        return  menuCard.price * menuCard.transfer;
    }
}

