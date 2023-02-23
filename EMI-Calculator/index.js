function computeEMI(){
    // Compute the EMI

    const amount = parseInt(document.getElementById('amt').value, 10);
    var roi = parseFloat(document.getElementById('roi').value, 10);
    const tenure = parseInt(document.getElementById('tenure').value, 10);

    var interestPerYear = (amount * roi)/100; 
    var monthlyInterest = interestPerYear/12;
    var monthlyPayment = monthlyInterest + (amount/tenure);
    var totalInterestCost = monthlyInterest * tenure;
    var totalPayable = monthlyPayment * tenure;
    
    document.getElementById("monthlyInterest").innerHTML = "INR " +monthlyInterest.toFixed(2);
    
    document.getElementById("monthlyPayment").innerHTML = "INR " +monthlyPayment.toFixed(2); 
    
    document.getElementById("totalPayable").innerHTML = "INR " +totalPayable.toFixed(2);
    
    document.getElementById("totalInterestCost").innerHTML = "INR " +totalInterestCost.toFixed(2);;

    
    // Modal code

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Results are updated, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // CSS changed using javascript
        }
    }
}