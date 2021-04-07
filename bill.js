function calculate(form)
{
   var tax=form.elements["tax"].value;
   var price=form.elements["price"].value;
   var tip=form.elements["tip"].value;
   var taxLength=tax.toString().length;
   var priceLength=price.toString().length;
   if(tax<0|| tax>100){
        document.getElementById("totals").innerHTML="  ";
       alert("Invalid entry for Tax percent. Must be a number between 0 and 100");
   }
   else if(taxLength>4){
        document.getElementById("totals").innerHTML="  ";
        alert("Invalid entry for tax");
   }
   else if(price<0 || price>1000){
        document.getElementById("totals").innerHTML="   ";
        alert("Invalid entry for tip percent. Must be an integer between 0 and 1000");
   }
   else if(priceLength>4){
        document.getElementById("totals").innerHTML="   ";
        alert("Invalid entry for tax");
   }
   else if (tip<0 || tip>100){
         document.getElementById("totals").innerHTML="   ";
        alert("Invalid entry for tip. Must be a non-decimal integer between 0 and 200");
   }
   else{
        calculateTotals(price, tax, tip);
   }
}
function calculateTotals(price, tax, tip){
   var tipAmount=calculatePercentage(tip, price);
   var taxAmount=calculatePercentage(tax, price);
   var totalCost=parseInt(price) + parseInt(tax) + parseInt(tipAmount);
   document.getElementById("totals").innerHTML="Price: $" + parseInt(price).toFixed(2) +"<br></br>"+ "Tax: $" + parseInt(taxAmount).toFixed(2) + "<br></br>" +
    "Tip: $" + parseInt(tipAmount).toFixed(2) +"<br></br>" + "Total: $" + parseInt(totalCost).toFixed(2);
}
function calculatePercentage(tip, price)
{
    var amount=parseInt(tip)/100;
    amount=amount*price;
    return amount;
}
