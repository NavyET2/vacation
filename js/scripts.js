$(document).ready(function() {
  $("form#vacationWizard").submit(function(event) {
    var budget = parseInt($("input#budget").val());
    var climate = $("select#climate").val();
    var social = $("select#social").val();
    //parameters for wizard

    if (budget) {
      var match; // match is main variable. Using budget, climate and social from above inputs (via forms) and setting parameters via && <= >= !== === < else and if.
      if (climate === 'hot' && budget <= 800 && budget >= 250 && social !== 'party') {
        match ="Phoenix!";
        $("#photo").after("<img src='img/phoenix.jpg'>");
        //location photo for the user
        alert('Loading Vacation Match... Press OK to continue!');
        //simulating computer thinking and wait times, giving the user the impression that the computer had to have time to think to come up wit the best result.
        alert(match);
        //text alert stating the variable match
        $(this).remove();
        //removes form entries (to prevent duplicates entries) and shows location picture in the span where the form was.
      }
      if (climate === 'hot' && budget > 800 && social !== 'party') {
        match ="Maui!";
        $("#photo").after("<img src='img/maui.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(match);
        $(this).remove();
      }
      if (climate === 'cold' && budget <= 800 && budget >= 250 && social !== 'party') {
        match ="Anchorage";
        $("#photo").after("<img src='img/anchorage.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(match);
        $(this).remove();
      }
      if (climate === 'cold' && budget > 800 && social !== 'party') {
        match ="Iceland";
        $("#photo").after("<img src='img/iceland.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(match);
        $(this).remove();
      }
      if (budget < 250) {
        match ="Portland Staycation!";
        $("#photo").after("<img src='img/portland.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(match);
        $(this).remove();
      }
      if (budget >=250 && social === 'party') {
        match ="Las Vegas";
        $("#photo").after("<img src='img/vegas.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(match);
        $(this).remove();
      }

    } else {
      alert('Please enter your budget.');
      //dded so that the form wouldn't submit if there wasn't enough data submitted. urrently the only option that isn't pre-selected is the budget string input. this was effectively rendered obsolete when "required=""" was added into the form class divider.
    }


    console.log(budget);
    console.log(social);
    console.log(climate);
    console.log(match);
    //console log variable checkers for troubleshooting issues. JShints shows that console.log(match); is wrong (line 66), but it shows up just fine in chrome console log. this may be inadvertintly be an error in JShints as match isn't explicitly defined until the user uses the form inputs, so logically match isn't defined YET.

    $("#vaca").show();
    event.preventDefault();
  });
});
