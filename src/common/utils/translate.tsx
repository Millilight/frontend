import React from 'react';
import { FormattedMessage } from 'react-intl';

// Translations are in lang/fr.json (Has to be a flat json, no nesting!)
// id: the key of the translation in the json
// Example of usage with parameter values :
//  {translate('example.hello', {name: "Jean"})}
//  With in the json :  { 'example.hello': 'Hello {name}}
function translate(
  id: string | undefined,
  values?: Record<string, string> | undefined
) {
  return <FormattedMessage id={id} values={{ br: <br />, ...values }} />;
}

export default translate;
