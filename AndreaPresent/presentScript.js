// presentScript.js

const checkLove = () => {
    const personName = document.getElementById("personName").value.toLowerCase();
    
    if (personName === "andrea") {
      document.getElementById("loveQuestion").style.display = "none";
      document.getElementById("ticket").style.display = "block";
    }
    // For other names, you might want to display a message or handle differently
  };