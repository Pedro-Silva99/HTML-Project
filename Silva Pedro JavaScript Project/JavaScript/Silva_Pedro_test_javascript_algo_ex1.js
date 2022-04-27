/* Here I create a new Array named "to_verify" and I copy the values of the sudoku table given
I use a for loop so I can copy the values one by one , i start in the position "0" of the array given
(i=0, and I finish in the array.length of the table give, I do this because the length of the table is 9 
because it has 9 numbers but since I'm going by position in the array and the position starts in 0 I only need
to go until the 8th position , so my gap is from 0<=x<9 and with this gap I can get the 9 positions I need
[0,1,2,3,4,5,6,7,8], the last condition is the interval I use in the loop(for) i go by i++ (i=i+1) this means i go
1 by 1 and I only increment the "+1" in the i after the condition is tested, if I did "++i" it would increment the i
before testing the condition, so I would only get the position from 1 to 8
*/
let to_verify = new Array(9);
for (let i=0; i < to_verify.length; i++){
    to_verify[i] = new Array(9);
}
/*Here I use the split() method wich divides a string into an ordered list of substrings, puts these substrings into an array,
 and returns the array, after I have the numbers of the array separated i use the parseInt() function that
 parses a string argument and returns an integer of the specified radix so I can turn the string into numbers and i save it in
 "to_verify[i][j] so now every number(data) of the array as to position i and j (x and y) instead of just i (x), I do this so further
 in the exercise I can check the columns and rows"   */ 
function convertTableInTwoDimensions() {
    for (let i in array_number){
        let row = array_number[i].split(' ');
        for (let j in row){
            to_verify[i][j]= parseInt(row[j]);
        }
    }
}
/*Here I create a local variable "table" and use the getElementById so it places this table on the HTML , the I define the numbers
of table rows using the first for loop, and for each row that is created I fill it with the second for loop 
, in the second for loop i fill it one by one "j++" and i define it has the HTML table data(td), in the end I append each table data to 
their table row and after that I append each filled row to the table*/ 
function displayTableInHTML() {
    let table = document.getElementById('table');
    for (let i=0; i < to_verify.length; i++){
        let tr = document.createElement('tr');
        for (let j=0; j < to_verify[i].length; j++){
            let td = document.createElement('td');
            td.innerHTML = to_verify[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
