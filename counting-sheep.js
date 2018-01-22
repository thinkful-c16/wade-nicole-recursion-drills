function countSheep(number) {
    //base case
    if (number === 0) {
        return;
    }

    //general case
    console.log(number + " - Another sheep jump over the fence");
    countSheep(number-1);
}

countSheep(3);