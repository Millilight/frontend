import React from 'react';
import { FormattedMessage } from 'react-intl';

function translate(
  id: string | undefined,
  values?: Record<string, string> | undefined
) {
  return <FormattedMessage id={id} values={{ br: <br />, ...values }} />;
}

export default translate;
