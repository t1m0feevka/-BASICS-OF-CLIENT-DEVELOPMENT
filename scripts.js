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

//1
function handleClickAttr() {
  alert("Medicines that care about you are NeoPharm!");
}

document.getElementById("propertyBtn").onclick = function() {
  alert("NeoPharm has been your reliable partner in the medical field for over 10 years!");
};

//2
function showAlert() {
  alert("Це вигляд нашого магазину");
}

function showImage() {
  const container = document.getElementById("storePhoto");

  if (container.innerHTML === "") {
    const img = document.createElement("img");
    img.src = "store.jpg"; 
    img.style.width = "400px"; 
    img.style.border = "2px solid #555";
    container.appendChild(img);
  }
}

//3
const button1 = document.getElementById("storeBtn");
button1.addEventListener("click", showAlert);
button1.addEventListener("click", showImage);

const pharmaHandler = {
  handleEvent(event) {
    const log = document.getElementById("pharmaLog");

    log.innerText = `the element on which the handler was triggered - ${event.currentTarget.tagName}  
    We offer certified drugs of European quality!`;

    event.currentTarget.removeEventListener("click", this);
  }
};

const button2 = document.getElementById("pharmacyBtn");
button2.addEventListener("click", pharmaHandler);

//4
document.addEventListener("DOMContentLoaded", function () {
  const dl = document.querySelector("dl");

  dl.onclick = function (event) {
    if (event.target.tagName === "DT") {
      dl.querySelectorAll("dt").forEach((el) => el.classList.remove("highlighted"));

      event.target.classList.add("highlighted");
    }
  };
});

//5
document.addEventListener("DOMContentLoaded", () => {
  const awardsMenu = document.getElementById("awardsMenu");
  const awardPhoto = document.getElementById("awardPhoto");

  const awardImages = {
    innovation: "1.jpg",
    quality: "2.jpg",
    customerCare: "3.jpg",
    ecoFriendly: "4.jpeg"
  };

  awardsMenu.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;

    const awardKey = btn.dataset.award;
    const imgSrc = awardImages[awardKey];

    if (imgSrc) {
      awardPhoto.innerHTML = `<img src="${imgSrc}" alt="${btn.textContent.trim()} award" />`;
    } else {
      awardPhoto.innerHTML = "";
    }
  });
});
