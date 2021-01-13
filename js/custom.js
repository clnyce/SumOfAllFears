// Sum of All Fears Function
document.getElementById("sumBtn").addEventListener('click', function () {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let input3 = parseInt(document.getElementById("input3").value);
    let input4 = parseInt(document.getElementById("input4").value);
    let kValue = parseInt(document.getElementById("kValue").value);

    //Collect inputs in an array
    let sumArray = [input1, input2, input3, input4];

    let result = "";

    //Check that only numbers have been entered
    if (isNaN(input1) || isNaN(input2) || isNaN(input3) || isNaN(input4) || isNaN(kValue)) {
        swal("Unable to process", "Please enter a number in each box!", "error");
        clearText();
        return;
    }

    // Run numbers through array to add them to each other
    let array = [];
    for (let i = 0; i < sumArray.length; i++) {
        for (let s = i + 1; s < sumArray.length; s++) {
            if (sumArray[i] + sumArray[s] == kValue) {
                result = `${sumArray[i]} + ${sumArray[s]} = ${kValue}`;
                array.push(result);
            }
        }
    }
    if(array.length > 0){
        document.getElementById("output").innerHTML = "Success!";
        document.getElementById("numSum").innerHTML = array;
    }
    else{
        document.getElementById("output").innerHTML = `No combinations of the numbers you entered add up to <b>${kValue}</b>!`;
        document.getElementById("numSum").innerHTML = "";
    }

    // if (result != "") {
    //     document.getElementById("output").innerHTML = "Success!";
    //     document.getElementById("numSum").innerHTML = result;
    // }
    // else {
    //     document.getElementById("output").innerHTML = `No combinations of the numbers you entered add up to <b>${kValue}</b>!`;
    //     document.getElementById("numSum").innerHTML = "";
    // }
    clearText()
})


function clearText() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("kValue").value = "";
    document.getElementById("output").value = "";
    document.getElementById("numSum").value = "";
}
    