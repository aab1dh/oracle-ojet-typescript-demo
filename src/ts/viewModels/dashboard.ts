
import * as AccUtils from "../accUtils";
import ArrayDataProvider = require("ojs/ojarraydataprovider")
import * as ko from "knockout";
import "ojs/ojarraydataprovider"
import { ojButton } from "ojs/ojbutton";
import "ojs/ojbutton";
import { ojAccordion } from "ojs/ojaccordion";
import "ojs/ojaccordion";
import { ojSelectSingle } from "ojs/ojselectsingle"
import "ojs/ojselectsingle"
import { ojChart } from "ojs/ojchart"
import "ojs/ojchart"
// import "requirejs/text"
import * as data from "text!data/data.json"
class DashboardViewModel {
  types = [
    { value: 'pie', label: 'Pie' },
    { value: 'bar', label: 'Bar' }
  ];
  chartData = JSON.parse(data);
  chartTypes
  val
  chartDataProvider

  constructor() {
    let self = this;
    self.chartTypes = new ArrayDataProvider(this.types, { keyAttributes: 'value' });
    self.val = ko.observable("pie");
    self.chartDataProvider = new ArrayDataProvider(this.chartData, { keyAttributes: 'id' });


    self.val.subscribe(data => console.log(data))


  }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Dashboard page loaded.");
    document.title = "Dashboard";
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}

export = DashboardViewModel;
