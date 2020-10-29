productContainer = [];

var inps = document.getElementsByClassName("form-control");

function addProduct()
{

   var productName =  document.getElementById("productNameInp").value;
   var productPrice =  document.getElementById("productPriceInp").value;
   var productCategory =  document.getElementById("productCategoryInp").value;
   var productCode =  document.getElementById("productCodeInp").value;
   var productDesc =  document.getElementById("productDec").value;

   var makaneldash = productCode.search("-");
   var productCompany = productCode.slice(0, makaneldash);
   var productModel = productCode.slice(makaneldash+1 , productCode.length);
  
var product = 
{
name:productName,
price:productPrice,
category:productCategory,
company:productCompany,
model:productModel,
desc:productDesc,

}
productContainer.push(product);
displayData ();
clearForm ();
}

function displayData ()
{
var temp="";

for(var i = 0 ; i < productContainer.length ; i++)
{
temp +="<tr><td>"+productContainer[i].name+"</td><td>"+productContainer[i].price+"</td><td>"+productContainer[i].category+"</td><td>"+productContainer[i].model+"</td><td>"+productContainer[i].desc+"</td></tr>";


}

document.getElementById("tableBody").innerHTML = temp;

}


function clearForm ()
{
   for(var i = 0 ; i < inps.length ; i++)
   {
      inps[i].value = "";
   }
}