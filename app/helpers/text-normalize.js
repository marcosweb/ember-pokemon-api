import { helper } from '@ember/component/helper';

export function textNormalize(params/*, hash*/) {
  const [text] = params
  return text ? text.replace(/[^a-zA-Z0-9]/g,' ') : params;
}

export default helper(textNormalize);
