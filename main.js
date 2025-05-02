function strengthEffect() {
  var sub1 = parseFloat(document.getElementById("SUBJ1").value);

  var sub2 = parseFloat(document.getElementById("SUBJ2").value);

  var sub3 = parseFloat(document.getElementById("SUBJ3").value);

 
  var ave = (sub1 + sub2 + sub3) / 3;

      if (ave >= 70 && ave <= 74.99) {
        window.alert("Poor Performance. Your average is: " + ave.toFixed(2));


      } else if (ave >= 75 && ave <= 79.99) {
        window.alert("Needs Improvement. Your average is: " + ave.toFixed(2));

      } else if (ave >= 80 && ave <= 86.99) {
        window.alert("Satisfactory. Your average is: " + ave.toFixed(2));



      } else if (ave >= 87 && ave <= 93.99) {
        window.alert("Above Satisfactory. Your average is: " + ave.toFixed(2));

      } else if (ave >= 94 && ave <= 100) {
        window.alert("Excellent. Your average is: " + ave.toFixed(2));

      } else {
        window.alert("Invalid input. Please enter scores between 0 and 100.");
      }
    }

