/* @flow */

import formatTree from './formatter/formatTree';
import parseReactElement from './parser/parseReactElement';
import type { Element as ReactElement } from 'react';
import type { Options } from './options';
import formatComplexDataStructure from './formatter/formatComplexDataStructure';

const reactElementToJsxString = (
  element: ReactElement<any>,
  {
    filterProps = [],
    showDefaultProps = true,
    showFunctions = false,
    functionValue,
    tabStop = 2,
    useBooleanShorthandSyntax = true,
    useFragmentShortSyntax = true,
    sortProps = true,
    maxInlineAttributesLineLength,
    displayName,
  }: Options = {}
) => {
  const options = {
    filterProps,
    showDefaultProps,
    showFunctions,
    functionValue,
    tabStop,
    useBooleanShorthandSyntax,
    useFragmentShortSyntax,
    sortProps,
    maxInlineAttributesLineLength,
    displayName,
  };

  if (!element) {
    return formatComplexDataStructure(element, false, 0, options);
    // throw new Error('react-element-to-jsx-string: Expected a ReactElement');
  }

  return formatTree(parseReactElement(element, options), options);
};

export default reactElementToJsxString;

export {
  inlineFunction,
  preserveFunctionLineBreak,
} from './formatter/formatFunction';
