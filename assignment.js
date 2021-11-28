// problem 1
function seerToMon(seer) {
    if (typeof(seer) == 'number' && seer >= 1) {
        const mon = seer / 40;
        return mon;
    }
    else if (typeof(seer) == 'number' && seer < 1) {
        return 'please enter a positive number and the minimum value must be 1'
    }
    else if (typeof(seer) == 'string') {
        return 'please enter a number not a string'
    }
    else {
        return 'please enter a number'
    }
}
const weightInSeer = 20;
const weightInMon = seerToMon(weightInSeer);
console.log(weightInMon);

// problem 2
function totalSales(shirtsQuantity, pantsQuantity, shoesQuantity) {
    if (typeof(shirtsQuantity) == 'number' && typeof(pantsQuantity) == 'number' && typeof(shoesQuantity) == 'number') {
        if (shirtsQuantity >= 1 && pantsQuantity >= 1 && shoesQuantity >= 1) {
            const shirtPrice = 100;
            const pantPrice = 200;
            const shoesPrice = 500;
            const totalShirtPrice = shirtsQuantity * shirtPrice;
            const totalPantPrice = pantsQuantity * pantPrice;
            const totalShoesPrice = shoesQuantity * shoesPrice;
            const total = totalShirtPrice + totalPantPrice + totalShoesPrice;
            return total;
        }
        else {
            return 'please enter a positive number for every parameter and the minimum value must be 1';
        }
    }
    else if (typeof(shirtsQuantity) != 'number' || typeof(pantsQuantity) != 'number' || typeof(shoesQuantity) != 'number') {
        return 'please enter all parameter in number'
    }
}
const shirtQuantity = 11;
const pantQuantity = 2;
const shoeQuantity = 1;
const totalSale = totalSales(shirtQuantity, pantQuantity, shoeQuantity);
console.log(totalSale);

// problem 3
function deliveryCost(shirtsQuantity) {
    if (typeof(shirtsQuantity) == 'number' && shirtsQuantity >= 1) {
        const deliveryCostForEveryShirtUpto100Shirts = 100;
        const deliveryCostForEveryShirtFor101To200Shirts = 80;
        const deliveryCostForEveryShirtForMoreThen200Shirts = 50;
        // Let
        const i = deliveryCostForEveryShirtUpto100Shirts;
        const m = deliveryCostForEveryShirtFor101To200Shirts;
        const l = deliveryCostForEveryShirtForMoreThen200Shirts;
        if (shirtsQuantity <= 100) {
            const deliveryCharge = shirtsQuantity * i;
            return deliveryCharge;
        }
        else if (shirtsQuantity <= 200) {
            const costForEveryShirtForFirst100 = 100 * i;
            const restQuantity = shirtsQuantity - 100;
            const costForRestQuantity = restQuantity * m;
            const deliveryCharge = costForEveryShirtForFirst100 + costForRestQuantity;
            return deliveryCharge;
        }
        else {
            const costForEveryShirtForFirst100 = 100 * i;
            const costForEveryShirtForSecond100 = 100 * m;
            const restQuantity = shirtsQuantity - 200;
            const costForRestQuantity = restQuantity * l;
            const deliveryCharge = costForEveryShirtForFirst100 + costForEveryShirtForSecond100 + costForRestQuantity;
            return deliveryCharge;
        }
    }
    else if (shirtsQuantity < 1) {
        return 'please enter a positive number and the minimum value must be 1'
    }
    else if (typeof(shirtsQuantity) == 'string') {
        return 'please enter a number not a string'
    }
    else {
        return 'please enter a number'
    }
}
const numberOfShirtsForDelivery = 202;
const deliveryCharge = deliveryCost(numberOfShirtsForDelivery);
console.log(deliveryCharge);

// problem 4
function perfectFriend(firendsName) {
    if (typeof(firendsName) == 'string') {
        return 'please enter an array not a string';
    }
    else if (typeof(firendsName) == 'number') {
        return 'please enter an array not a number';
    }
    else if (typeof(firendsName == 'object')) {
        for (let i = 0; i < firendsName.length; i++) {
            let correctFriend = firendsName[i];
            if (correctFriend.length == 5) {
                return correctFriend;
                break;
            }
        }
    }
    else {
        return 'please enter a object';
    }
}
const friendList = ['abul', 'babul', 'kamrul', 'ratul', 'shariful'];
const rightFriend = perfectFriend(friendList);
console.log(rightFriend);