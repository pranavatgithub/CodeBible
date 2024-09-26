var status = login ? 'Logged in' : 'Not logged in'; //if status=login status=logged in else not logged in

// multiple ternary operator
function checkSign(num) {
    return num > 0 ? "positive" : num === 0 ? "zero" : "negative";
  }
  
  checkSign(10);