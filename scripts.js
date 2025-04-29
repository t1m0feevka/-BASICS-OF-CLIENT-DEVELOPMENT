function dialogWithUser() {
    let attempt = 0;
    while (true) {
      let answer = prompt("Is Ms. Khmelyuk the best lecturer?");
      attempt++;
      if (answer === "yes") {
        alert("You are absolutely right! number of attempts: " + attempt);
        break;
      } else {
        alert("Hmmm... you're wrong. try again");
      }
    }
  }
  
  function showDeveloperInfo(lastName, firstName, position = "Student") {
    alert("Developer: " + lastName + " " + firstName + "\nPosition: " + position);
  }
  
  function compareStrings() {
    let str1 = prompt("Enter the first line:");
    let str2 = prompt("Enter the second line:");
    
    if (str1 > str2) {
      alert("Larger line - " + str1);
    } else if (str2 > str1) {
      alert("Larger line - " + str2);
    } else {
      alert("The lines are the same!");
    }
  }

  function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
    setTimeout(() => {
      document.body.style.backgroundColor = "";
    }, 30000);
  }

  function redirect() {
    location.href = "http://roz.kpi.ua";
  }

  function domManipulation() {
    // getElementById
    const title = document.getElementById("importantInfo");
    title.textContent = "Important information has been changed.";
  
    // querySelectorAll
    let elements = document.querySelectorAll(".edText");
    elements.forEach((el, index) => {
        el.textContent = `Text ${index + 1} has been changed!`;
      });
    
    // innerHTML / outerHTML
    console.log("innerHTML: ", document.getElementById("expText").innerHTML);
    console.log("outerHTML: ", document.getElementById("expText").outerHTML);

    // textContent
    console.log("textContent: ", document.getElementById("expText").textContent);

    // nodeValue / data
    const textNode = document.getElementById("expText").firstChild;
    if (textNode.nodeType === Node.TEXT_NODE) {
        console.log("nodeValue: ", textNode.nodeValue);
    }

    //document.write("<p>document.write</p>");

    const newDiv = document.createElement("div");
    const newText = document.createTextNode("New text for div");
    newDiv.appendChild(newText);

    const container = document.getElementById("container");
    container.append("in the container"); 
    container.prepend("in front of the container"); 
    container.after("after the container");
    
    const replacement = document.createElement("p");
    replacement.textContent = "The replacement was successful.";
    document.getElementById("repl").replaceWith(replacement);

    const texts = document.querySelectorAll(".text");
    if (texts.length > 0) {
        texts[1].remove();
      }
  } 