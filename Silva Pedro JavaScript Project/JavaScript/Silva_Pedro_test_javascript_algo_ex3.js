/*This function check every row*/
function checkRows(){
    checkErrors(to_verify,'Line');
}
/*This function check every column*/
function checkColumns(){
    let columns_to_verify = new Array(9);
    for (let i=0; i < columns_to_verify.length; i++){
        columns_to_verify[i] = new Array(9);
    }
    for(let i=0; i < to_verify.length; i++){
        for (j=0; j < to_verify[i].length; j++){
            columns_to_verify[j][i] = to_verify[i][j];
        }
    }
    let errorTable = document.getElementById('errors');
    checkErrors(columns_to_verify,'Column');
}
/*This function checks all  regions*/
function checkRegion(x,y){
    let region_to_verify = [];
    let xstartindex = x*3;
    let ystartindex = y*3;
    let errorTable = document.getElementById('errors');
    
    for (let i=xstartindex; i < xstartindex + 3; i++){
        for (let j=ystartindex; j < ystartindex + 3; j++){
            region_to_verify.push(to_verify[i][j]);
        }
    }
    
    if (checkTotalAndValueOfNumbers(region_to_verify)===false){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = `Region ${3*y + x + 1} incorrect`;
        tr.appendChild(td);
        for (let i=0; i < region_to_verify.length; i++){
            let dataValue = document.createElement('td');
            dataValue.innerHTML = region_to_verify[i];
            tr.appendChild(dataValue);
        }
        errorTable.appendChild(tr);
    }
}
/*This function check every region one by one*/
function checkRegions(){
    for (let i=0; i < 3; i++){
        for (let j=0; j < 3; j++){
            checkRegion(i,j);
        }
    }
}
/*This function checks if there are any errors in the different elements(line,row and column) if exists any error it passes the numbers of that element to html so they can be showed*/
function checkErrors(matrix,text){
    let errorTable = document.getElementById('errors');
    for(let i=0; i < matrix.length; i++){
        if (!checkTotalAndValueOfNumbers(matrix[i])){
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.innerHTML = `${text} ${i+1} incorrect`;
            tr.appendChild(td);
            for (let j=0; j < matrix[i].length; j++){
                let dataValue = document.createElement('td');
                dataValue.innerHTML = matrix[i][j];
                tr.appendChild(dataValue);
            }
            errorTable.appendChild(tr);
        }         
    }
}
/*This function is responsible for showing in the html the result, if there are errors it prints the error table saved in the previous functions, if it is correct it prints the 
sentence "the table is correct"*/ 
function checkSuccess(){
    let errorTable = document.getElementById('errors');
    if(!errorTable.innerHTML){
        let noErrors = document.getElementById('noErrors');
        noErrors.innerHTML = 'the table is correct';
    }
}