//Business Logic
const leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true; 
  } else {
    return false;
  }
  };

  //UI Logic
  $(document).ready(function (){
    $("form#leap-year").submit(function(event){
      event.preventDefault();

      const year = parseInt($("input#year").val());
      const result = leapYear(year);
      $(".entered").text(year);
      if (result !== true) {
        $(".not").text("not"); 
        } else {
          $(".not").text("");
        }
        $("#answer").show();
    })
  })