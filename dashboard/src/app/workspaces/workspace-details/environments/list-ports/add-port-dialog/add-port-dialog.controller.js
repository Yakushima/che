/*
 * Copyright (c) 2015-2016 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';

/**
 * @ngdoc controller
 * @name list.environment.variables.controller:AddPortDialogController
 * @description This class is handling the controller for the dialog box about adding the port.
 * @author Oleksii Kurinnyi
 */
export class AddPortDialogController {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor($mdDialog, $scope, lodash) {
    this.$mdDialog = $mdDialog;
    this.updateInProgress = false;
    this.lodash = lodash;

    this.port = 0;
    this.protocol = 'http';

    let ctrl = this;
    // validate port uniqueness
    $scope.isUnique = (port) => {
      let isUsed = ctrl.lodash.some(ctrl.servers, (server) => {
        return parseInt(server.port, 10) === port;
      });
      return !isUsed;
    }
  }

  /**
   * It will hide the dialog box.
   */
  hide() {
    this.$mdDialog.hide();
  }

  /**
   * Adds new port
   */
  addPort() {
    this.updateInProgress = true;

    this.callbackController.addPort(this.port, this.protocol).finally(() => {
      this.updateInProgress = false;
      this.hide();
    });
  }

}
