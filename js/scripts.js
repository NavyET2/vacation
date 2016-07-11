$(document).ready(function() {
  $("form#vacationWizard").submit(function(event) {
    var budget = parseInt($("input#budget").val());
    var climate = $("select#climate").val();
    var social = $("select#social").val();

    if (budget) {
      var match;
      if (climate === 'hot' && budget <= 800 && budget >= 250 && social !== 'party') {
        match ="Phoenix!";
        $("#photo").append("<img src='img/phoenix.jpg'>");
      }
      if (climate === 'hot' && budget > 800 && social !== 'party') {
        match ="Maui!";
        $("#photo").append("<img src='img/maui.jpg'>");
      }
      if (climate === 'cold' && budget <= 800 && budget >= 250 && social !== 'party') {
        match ="Anchorage";
        $("#photo").append("<img src='img/anchorage.jpg'>");
      }
      if (climate === 'cold' && budget > 800 && social !== 'party') {
        match ="Iceland";
        $("#photo").append("<img src='img/iceland.jpg'>");
      }
      if (budget < 250 && social !== 'party') {
        match ="Portland Staycation!";
        $("#photo").append("<img src='img/portland.jpg'>");
      }
      if (social === 'party') {
        match ="Las Vegas";
        $("#photo").append("<img src='img/vegas.jpg'>");
      }

    } else {
      alert('Please enter your budget.');
    }



    $("#yourvaca").append(match);

    console.log(budget);
    console.log(social);
    console.log(climate)
    console.log(match)

    $("#vaca").show();
    event.preventDefault();
  });
});
