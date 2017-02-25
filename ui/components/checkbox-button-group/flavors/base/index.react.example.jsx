// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let Fieldset = props =>
  <fieldset className={classNames('slds-form-element', props.className)}>
    <legend className="slds-form-element__legend slds-form-element__label">Scheduled Day(s)</legend>
    <div className="slds-form-element__control">
      {props.children}
    </div>
  </fieldset>;

let CheckboxGroup = props =>
  <div className="slds-checkbox--button-group">
    {props.children}
  </div>;

let Checkbox = props =>
  <span className={classNames('slds-button slds-checkbox--button', props.className)}>
    <input
      aria-describedby={props.errorId}
      disabled={props.disabled}
      id={props.id}
      name="checkbox"
      type="checkbox"
    />
    <label className="slds-checkbox--button__label" htmlFor={props.id}>
      <span className="slds-checkbox--faux">
        {props.children}
      </span>
    </label>
  </span>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let StateA = props =>
  <Demo>
    <Fieldset>
      <CheckboxGroup>
        <Checkbox id="monday">Mon</Checkbox>
        <Checkbox id="tuesday">Tue</Checkbox>
        <Checkbox id="wednesday">Wed</Checkbox>
        <Checkbox id="thursday">Thu</Checkbox>
        <Checkbox id="friday">Fri</Checkbox>
      </CheckboxGroup>
    </Fieldset>
  </Demo>;

let StateB = props =>
  <Demo>
    <Fieldset className="slds-has-error">
      <CheckboxGroup>
        <Checkbox errorId="error_01" id="monday">Mon</Checkbox>
        <Checkbox errorId="error_01" id="tuesday">Tue</Checkbox>
        <Checkbox errorId="error_01" id="wednesday">Wed</Checkbox>
        <Checkbox errorId="error_01" id="thursday">Thu</Checkbox>
        <Checkbox errorId="error_01" id="friday">Fri</Checkbox>
      </CheckboxGroup>
      <div id="error_01" className="slds-form-element__help">This field is required</div>
    </Fieldset>
  </Demo>;

let StateC = props =>
  <Demo>
    <Fieldset>
      <CheckboxGroup>
        <Checkbox id="monday" disabled="true">Mon</Checkbox>
        <Checkbox id="tuesday" disabled="true">Tue</Checkbox>
        <Checkbox id="wednesday" disabled="true">Wed</Checkbox>
        <Checkbox id="thursday" disabled="true">Thu</Checkbox>
        <Checkbox id="friday" disabled="true">Fri</Checkbox>
      </CheckboxGroup>
    </Fieldset>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'checkbox-alt',
    label: 'Default',
    element: <StateA />
  },
  {
    id: 'checkbox-alt-has-error',
    label: 'Has error',
    element: <StateB />
  },
  {
    id: 'checkbox-alt-disabled',
    label: 'Disabled',
    element: <StateC />
  }
];