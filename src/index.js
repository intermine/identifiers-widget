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

/**
 * initialises an existing library, called inside the web component wrapper.
 **/
function initComponent(options) {
  return {
    get: (host, v) => v, // required to be recognized as property descriptor,
    set: () => {}, //required to stop TypeError: setting getter-only property "x"
    connect: async (host, key) => {

      var identifier = host.getAttribute("identifier");

      //1. get identifiers.org response for the geneid
      const identifiersInfo = await getIdentifiersOrgInfo(identifier);
      console.log(JSON.stringify(identifiersInfo));

      //2. output


      host.innerHTML = "<div>A placeholder for a pretty" +
        " visualisation for " + identifier + ".</div>";

      //leave this line here. Deleting it will result in your css going AWOL.
      addStylesIfNeeded();
    }
  }
}

async function getIdentifiersOrgInfo(myIdentifier) {
  const response = await fetch('https://resolver.api.identifiers.org/' + myIdentifier);
  return await response.json();
}

/**
 * This is where we place the bulk of the code, wrapping an existing BioJS component
 * or where we might initialise a component written from scratch. Needs to be
 * paired with a `define` method call - see end of the page.
 **/
export const IdentifiersWidget = {
  init: initComponent()
};

// this line connects the html element in index.html with the javascript defined above.
define('identifiers-widget', IdentifiersWidget);
