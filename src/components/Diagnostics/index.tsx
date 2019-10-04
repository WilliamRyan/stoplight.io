import { MonacoCodeStore } from '@stoplight/monaco';
import { DiagnosticSeverity, Dictionary } from '@stoplight/types';
import cn from 'classnames';
import * as React from 'react';

import { useSpectral } from '../../hooks/useSpectral';
import { Icon, IconProp } from '../Icon';

const severityIcons: Dictionary<{ icon: IconProp; color: string }> = {
  Error: {
    icon: 'exclamation-circle',
    color: 'red',
  },
  Warning: {
    icon: 'exclamation-triangle',
    color: 'orange',
  },
  Info: {
    icon: 'info-circle',
    color: 'blue',
  },
  Hint: {
    icon: 'comment',
    color: 'green',
  },
};

export const Diagnostics: React.FunctionComponent<{
  className?: string;
  value?: string;
  monacoStore?: MonacoCodeStore;
}> = ({ className, value, monacoStore }) => {
  const { isValidating, results } = useSpectral(value);

  let fallbackText = 'Add an OpenAPI v2 or v3 document to see the Spectral results.';
  if (value) {
    if (isValidating) {
      fallbackText = 'Validating...';
    } else {
      fallbackText = 'Congratulations, there are no errors or warnings in this document!';
    }
  }

  return (
    <div className={cn(className, 'flex flex-col h-full px-3 pt-3 -mr-3')}>
      <div className="flex items-center text-grey-dark h-10 px-1">
        <div className="w-10 text-center">Type</div>
        <div className="ml-4 w-10 text-center">Line</div>
        <div className="ml-4 flex-1">Message</div>
      </div>

      <div className="flex-1 overflow-auto">
        {results.length > 0 ? (
          results.map((result, index) => {
            const { icon, color } = severityIcons[DiagnosticSeverity[result.severity]];

            return (
              <div
                key={index}
                className="flex cursor-pointer hover:bg-grey-light p-1 2"
                onClick={() => {
                  if (!monacoStore || !monacoStore.editor) return;

                  monacoStore.editor.focus();

                  monacoStore.editor.setPosition({
                    column: result.range.start.character + 1,
                    lineNumber: result.range.start.line + 1,
                  });

                  monacoStore.editor.revealRangeAtTop({
                    startLineNumber: Math.max(result.range.start.line - 1, 1),
                    startColumn: result.range.start.character + 1,
                    endLineNumber: result.range.end.line + 1,
                    endColumn: result.range.end.character + 1,
                  });
                }}
              >
                <div className="w-10 text-center leading-loose text-base" title={DiagnosticSeverity[result.severity]}>
                  <Icon icon={icon} style={{ color }} />
                </div>
                <div className="ml-4 w-10 text-center">{result.range.start.line + 1}</div>
                <div className="ml-4 flex-1" title={result.message}>
                  {result.message}
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex font-semibold h-12 items-center">{fallbackText}</div>
        )}
      </div>
    </div>
  );
};
