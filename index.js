let distance = +prompt("First distance");
let second_distance = +prompt("Second distance");

if (distance && second_distance) {
    alert("Sum of distance = " + `${distance + second_distance}`);
    let myDistance = distance * 5;
    alert("New distance: " + `${myDistance}`);
    let mySecondDistance = second_distance / 10000;
    alert("New second distance: " + `${mySecondDistance}`)
}
else {
    alert("Err")
}

