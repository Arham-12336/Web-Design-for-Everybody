function billingFunction(){
  if (document.getElementById('same').checked){
      billingName.value=shippingName.value;
      billingZip.value=shippingZip.value;   
  }
  else{
    billingName.value="";
    billingZip.value="";
  }
}