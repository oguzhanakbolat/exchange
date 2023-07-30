export const formatMoney = (money) => {
    const list = Number(money);
    if(list > 10000) {
      return list.toFixed(1);
    }
    else if(list > 1000) {
      return list.toFixed(2);
    }
    else if(list > 100) {
      return list.toFixed(3);
    }
    else {
      return list.toFixed(4);
    }
}