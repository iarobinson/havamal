window.onload = init;

function init() {
  var havamalDocument = document.getElementById("havamal-here");

  
  for (var i = 0; i < havamal.length; i += 1) {
    var stanza = havamal[i];
    var uniqueMaxim = document.createElement("div");
    uniqueMaxim.className = "row";
    
    // Add Specific in Chapter Titles 
    if (i == 0) {
      chapterGen(0);
    } else if (i == 79) {
       chapterGen(1);
    } else if (i == 88) {
      chapterGen(2);
    } else if (i == 93) {
      chapterGen(3);
    } else if (i == 100) {
      chapterGen(4);
    } else if (i == 108) {
      chapterGen(5);
    } else if (i == 136) {
      chapterGen(6);
    } else if (i == 144) {
      chapterGen(7);
    }

    function chapterGen(num) {
      var sectionTitle = document.createElement("h2");
      var chapterTitle = document.createTextNode(havamalChapters[num]);
      sectionTitle.appendChild(chapterTitle);
      havamalDocument.appendChild(sectionTitle);
    }

    // Don't add a number to chapter 165 because it doesn't exist
    if (i !== havamal.length) {
      // The number displayed starts at 1 so this sets number for humans
      var stanzaNum = i + 1;
      
      // Set classes and id selectors for chapters
      var sectionNumber = document.createElement("h3");
      sectionNumber.className = "four columns";
      sectionNumber.id = "stanza-num";
      
      // Add text to the DOM node
      var havamalNumber = document.createTextNode(stanzaNum);
      
      // Add the number to the section DOM element
      sectionNumber.appendChild(havamalNumber);
      
      // Add the number to the maxim DOM element
      uniqueMaxim.appendChild(sectionNumber);
    }

    // Create a dom element for each new stanza
    var uniqueStanza = document.createElement("div");
    uniqueStanza.className = "eight columns";
    uniqueStanza.id = "poem-space";
    
    // console.log("Where?");
    for (var j = 0; j < stanza.length; j += 1) {
      var line = stanza[j];
      var poemSpace = document.createElement("p");
      let newLine = document.createTextNode(line);
      
      poemSpace.appendChild(newLine);
      poemSpace.className = "poem-line";
      
      uniqueStanza.appendChild(poemSpace);
    }
    
    // Append the chapter + content to the same maxim
    uniqueMaxim.appendChild(uniqueStanza);
    
    // Append the final maxim to the overall document
    havamalDocument.appendChild(uniqueMaxim);
  }
}