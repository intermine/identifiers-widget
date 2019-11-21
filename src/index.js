import {
  define
} from 'hybrids';
import styles from '../dist/style.css';
/* Add any additional library imports you may need here. */


/**
 * === Don't remove this method or styles will break.
 * We directly insert a style element into the document head
 * in order to embed styles.
 **/
function styleTemplate() {
  var myStyle = document.createElement("style");
  myStyle.setAttribute("id", "IdentifiersWidgetStyle");
  myStyle.setAttribute("type", "text/css");
  myStyle.innerHTML = styles.toString();
  return myStyle;
}

/**
 * === Don't remove this method or styles will break.
 * Check if there is already a style element for this component and add if not.
 * Useful in cases where this component might be initialised more than once.
 **/
function addStylesIfNeeded() {
  if (!document.getElementById("IdentifiersWidgetStyle")) {
    document.head.appendChild(styleTemplate());
  }
}

const footer = `
  <div class="footer">
    Data provided by <a href="http://identifiers.org/">Identifiers.org</a>
  </div>
`

/**
 * initialises an existing library, called inside the web component wrapper.
 **/
function initComponent(options) {
  return {
    get: (host, v) => v, // required to be recognized as property descriptor,
    set: () => {}, //required to stop TypeError: setting getter-only property "x"
    connect: async (host, key) => {
      //leave this line here. Deleting it will result in your css going AWOL.
      addStylesIfNeeded();

      //0. show a loader while we fetch things
      const identifier = host.getAttribute("identifier");
      var header = `
      <h1>${identifier}</h1>
      <h2>Loading results...</h2>
      `;
      host.innerHTML = header + `
      <div class='loader'>
        <div class='lds-ripple'><div></div><div></div></div>
      </div>` + footer;

      //1. get identifiers.org details for our given identifier
      const identifiersInfo = await getIdentifiersOrgInfo(identifier);
      console.log(identifiersInfo);
      if (identifiersInfo.errorMessage) {
        handleError(identifiersInfo.errorMessage, host);
      } else {
      const resolvedResources = identifiersInfo.payload.resolvedResources;
      const localId = identifiersInfo.payload.parsedCompactIdentifier.localId;

      //3. build visual output for each element
      header = `<h1>${localId}</h1>`;

      var output = header + `<ul class="identifier-list">`;

      resolvedResources.map(function(resource) {
        var className = "secondary";
        if (resource.official) {
          className = "primary";
        }
        output = output + `
          <li class="${className}">
            <a href="${resource.compactIdentifierResolvedUrl}">
              ${resource.description}
            </a>
          </li>`;
      });
      output = output + `</ul>`;

      host.innerHTML = output + footer;
    }
  }
}
}

function handleError(errorMessage, host) {
  console.error("😭 problem loading data:", errorMessage);
  console.log(host);
  host.querySelector('.loader').innerHTML = "Error loading data: " + errorMessage;
}

async function getIdentifiersOrgInfo(myIdentifier) {
  const response = await fetch('https://resolver.api.identifiers.org/' + myIdentifier);
  return await response.json();
}

/**
 * This is where we get started. Needs to be
 * paired with a `define` method call - see end of the page.
 **/
export const IdentifiersWidget = {
  init: initComponent()
};

// this line connects the html element in index.html with the javascript defined above.
define('identifiers-widget', IdentifiersWidget);
