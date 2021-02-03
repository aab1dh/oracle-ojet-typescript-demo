import * as AccUtils from "../accUtils";
import ArrayDataProvider = require("ojs/ojarraydataprovider")
import * as ko from "knockout";
import "ojs/ojarraydataprovider"
import { ojListView } from "ojs/ojlistview"
import "ojs/ojlistview"
import "ojs/ojavatar"
import "ojs/ojprogress-circle";
import "ojs/ojknockout";
class CustomersViewModel {

  RESTurl = "https://apex.oracle.com/pls/apex/oraclejet/lp/activities/";
  activityDataProvider: ko.Observable<any> = ko.observable()
  loader: ko.Observable<boolean> = ko.observable(true)
  constructor() { }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Customers page loaded.");
    document.title = "Customers";
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
  async transitionCompleted(): Promise<void> {
    // implement if needed
    let self = this;

    console.log('calling api', this.RESTurl)
    await $.getJSON(this.RESTurl).then(function (data) {
      console.log(data)
      const activitiesArray = data.items;
      // self.activityDataProvider = ko.observableArray(activitiesArray)
      // self.activityDataProvider(new ArrayDataProvider(activitiesArray, { keyAttributes: 'id' }));
      self.activityDataProvider(new ArrayDataProvider(activitiesArray, { keyAttributes: 'id' }));
      self.loader(false)
    }
    );
  }


}

export = CustomersViewModel;