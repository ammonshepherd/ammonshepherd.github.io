/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function nav() {
    var x = document.getElementById("menu-items");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }