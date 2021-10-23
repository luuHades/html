function getObject(){
    let E= document.getElementById("dt").value;
    let DofBirth = new Date (E);
    let D = DofBirth.getDate() ;
    let M = DofBirth.getMonth()+1;
    //document.getElementById("Zodiac").innerHTML = DofBirth ; test
    let DM = M*100 + D ;
    //document.getElementById("test").innerHTML = DM ; test
      if ( DM >= 321 && DM <=420) {
      document.getElementById("Zodiac").innerHTML = "Aries";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Aries.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 421 && DM <=520)  {
      document.getElementById("Zodiac").innerHTML = "Taurus";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Taurus.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 521 && DM <=620)  {
      document.getElementById("Zodiac").innerHTML = "Gemini";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Gemini.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 621 && DM <=722)  {
      document.getElementById("Zodiac").innerHTML = "Cancer";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Cancer.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 723 && DM <=822) {
      document.getElementById("Zodiac").innerHTML = "Leo";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Leo.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 823 && DM <=922) {
      document.getElementById("Zodiac").innerHTML = "Virgo";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Virgo.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 923 && DM <=1022) {
      document.getElementById("Zodiac").innerHTML = "Libra";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Libra.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 1023 && DM <=1122) {
      document.getElementById("Zodiac").innerHTML = "Scorpio";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Scorpio.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 1123 && DM <=1221) {
      document.getElementById("Zodiac").innerHTML = "Sagittarius";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Sagittarius.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 1222 || DM <=119) {
      document.getElementById("Zodiac").innerHTML = "Capricorn";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Capricorn.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 120 && DM <=219) {
      document.getElementById("Zodiac").innerHTML = "Aquarius";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Aquarius.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
		else if ( DM >= 220 && DM <=320) {
      document.getElementById("Zodiac").innerHTML = "Pisces";
      document.getElementById("img1").innerHTML = '<img id="imgs" src="img/Zodiac/Pisces.jpg" alt="">' ;
      document.getElementById("test").style.animationName ="Bgrcolor";
      } 
}
function InName() {
   let n = document.getElementById("name").value;
   document.getElementById("ReName").innerHTML = n;
}
function ChangeFont(){
   let m = document.getElementById("textfont").value;
   if      (m==0){
      document.getElementById("ReName").style.fontFamily = "cursive";
   }
   else if (m == 1) {
      document.getElementById("ReName").style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
   }
   else if (m ==2) {
      document.getElementById("ReName").style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
   }
   else if (m ==3) {
      document.getElementById("ReName").style.fontFamily = "fantasy";
   }
}
function none(){
   document.getElementById("ReName").style.textDecorationLine= "none";
}
function underline(){
   document.getElementById("ReName").style.textDecorationLine= "underline";
}
function overline(){
   document.getElementById("ReName").style.textDecorationLine= "overline";
}
function through(){
   document.getElementById("ReName").style.textDecorationLine= "line-through";
}

