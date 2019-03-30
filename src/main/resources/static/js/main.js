function extendDishContent(toHide) {
    let id = toHide.id.split("-")[1];
    let contentToExtended = document.getElementById('dishContentExtended-' + id);
    // console.log('want: ' + 'dishContentExtended-' + id + ' got: ' + contentToExtended);
    contentToExtended.className = 'day__row-content day__row-content--extended';
    toHide.className = 'day__entry-background day__row-content day__row-content--hidden';
}

// TODO
function getDayEntryShrink(toHide) {
    let contentToExtended = document.getElementById('dayEntry1ContentHidden');
    contentToExtended.className = 'day__row-content day__row-content--extended';
    toHide.className = 'day__entry-background day__row-content day__row-content--hidden';
}

function newDayDish() {
    // console.log(date);

    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE) {
            let newDish = document.createElement('div');
            newDish.innerHTML = request.responseText;
            document.getElementById('dayList').appendChild(newDish);
        }
    }
    request.open('GET', 'http://localhost:8080/newDayDish?date='); // TODO change link to non static
    request.send();
}

function newIngredient(id) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE) {
            let newIngredient = document.createElement('div');
            newIngredient.innerHTML = request.responseText;
            console.log('Want: ' + 'ingredientList-' + id);
            document.getElementById('ingredientList-' + id).appendChild(newIngredient);
        }
    }
    request.open('GET', 'http://localhost:8080/newIngredient'); // TODO change link
    request.send();
}

function saveDayDish(id) {
    console.log("saveDayDishId: " + id);
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status !== 200) {
                console.log('Something went wrong. Dish is not saved! Code:' + request.status);
            }
        }
    }
    // TODO change to real data
    let ingredient = {
        name: 'ingredient name'
    };

    let dish = {
        id: 0,
        localTime: 0,
        dishName: 'name',
        ingredients: ingredient,
        commentText: 'comment text',
        quantity: 1,
        unit: 'g'
    };

    request.open('POST', 'http://localhost:8080/saveDishRow'); // TODO change link
    request.setRequestHeader("Content-Type", "application/json");

    console.log('trying to send dish: ' + JSON.stringify(dish));
    request.send(JSON.stringify(dish));
}

// Open the registration popup if there was an error
// let url = window.location.href.split("/")[window.location.href.split("/").length - 1];
// console.log(url);
// if(url === "registration") {
//     location.href = "#pop-reg"; // TODO dont let it be in the browser history
// }