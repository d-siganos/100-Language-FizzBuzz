let x = prompt("Fizzbuzz - Enter an Integer > ");
let y = 1;
while (y <= x) {
    if (y % 3 == 0 && y % 5 != 0) {
        document.write("Fizz");
    } 
    if (y % 3 != 0 && y % 5 == 0) {
        document.write("Buzz");
    }
    if (y % 3 != 0 && y % 5 != 0) {
        document.write(y);
    } 
    y++;
}