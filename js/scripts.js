$(document).ready(function() {
  $("form#vacationWizard").submit(function(event) {
    var name = $("input#name").val();
    var budget = parseInt($("input#budget").val());
    var climate = $("select#climate").val();
    var social = $("select#social").val();
    //variables for wizard

    if (budget) {
      var match; // match is main variable. Using budget, climate and social from above inputs (via forms) and setting parameters via && <= >= !== === < else and if.
      if (climate === 'hot' && budget <= 800 && budget >= 250 && social !== 'party') {
        match ="Phoenix!";
        $("#photo").after("<img src='img/phoenix.jpg'>");
        //location photo for the user
        alert('Loading Vacation Match... Press OK to continue!');
        //simulating computer thinking and wait times, giving the user the impression that the computer had to have time to think to come up with the best result.
        alert(name + ", It looks like you're going to have a great trip to " + match + ". Enjoy the blistering heat and sunshine because you can get all of it here!");
        //text alert stating the name of user, variable match, and personalized message.
        $(this).remove();
        //removes form entries (to prevent duplicates entries) and shows location picture in the span where the form was. simulaton of navigating to a destination webpage.
      }
      if (climate === 'hot' && budget > 800 && social !== 'party') {
        match ="Maui!";
        $("#photo").after("<img src='img/maui.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(name + ", It looks like you're going to have a great trip to " + match + ". Enjoy the beaches and sunshine because this is as good as it gets!");
        $(this).remove();
      }
      if (climate === 'cold' && budget <= 800 && budget >= 250 && social !== 'party') {
        match ="Anchorage";
        $("#photo").after("<img src='img/anchorage.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(name + ", It looks like you're going to have a great trip to " + match + ". You wanted cold and there's a lot of it here!");
        $(this).remove();
      }
      if (climate === 'cold' && budget > 800 && social !== 'party') {
        match ="Iceland";
        $("#photo").after("<img src='img/iceland.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(name + ", It looks like you're going to have a great trip to " + match + ". Enjoy all that Iceland has to offer!");
        $(this).remove();
      }
      if (budget < 250) {
        match ="Portland Staycation!";
        $("#photo").after("<img src='img/portland.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(name + ", It looks like you're going to have a great trip doing a " + match + ". At least you're not having to deal with the airport!");
        $(this).remove();
      }
      if (budget >=250 && social === 'party') {
        match ="Las Vegas";
        $("#photo").after("<img src='img/vegas.jpg'>");
        alert('Loading Vacation Match... Press OK to continue!');
        alert(name + ", It looks like you're going to have a great trip to " + match + ". Enjoy the nightlife but stay out of trouble!");
        $(this).remove();
        // console.log(match);
      }

    } else {
      alert('Please enter your budget.');
      //added so that the form wouldn't submit if there wasn't enough data submitted. currently the only option that isn't pre-selected is the budget string input. this was effectively rendered obsolete when "required=""" was added into the form class divider. If the form is changed this will still work and prevent the user from submitting incomplete information.
    }

    console.log(budget);
    console.log(social);
    console.log(climate);
    console.log(match);
    console.log(name);
    //console log variable checkers for troubleshooting issues. JShints (an atom editor add-on) shows that console.log(match); is wrong (line 66), as does Chrome console log. this may be inadvertintly be an error in JShints as match isn't explicitly defined until the user uses the form inputs, so logically match isn't defined YET. When defining match and console.log(match) is called upon (line 56) it does work. I believe this is known as local scope, as opposed to variable/global scope.

    $("#vaca").show();
    event.preventDefault();
  });
});
