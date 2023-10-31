import { cn, generateId } from '@/lib/utils/misc';
import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { Input } from '../ui/input';

interface IPinInputProps {
  variant?: 'alpha' | 'numeric';
  isOTP?: boolean;
  containerClassName?: HTMLAttributes<HTMLDivElement>['className'];
  inputClassName?: HTMLAttributes<HTMLInputElement>['className'];
  length?: number;
  onComplete: (code: string[]) => Promise<boolean>;
  errorMessage?: string;
  successMessage?: string;
}

/**
 * 4-digit pin input component (alpha-numerical or numerical)
 */
const PinInput: FC<IPinInputProps> = ({
  variant = 'numeric',
  isOTP,
  containerClassName,
  inputClassName,
  length = 4,
  onComplete,
  errorMessage,
  successMessage = 'Identity verified - You will be redirected shortly.'
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'incomplete' | 'success' | 'error'>('incomplete');
  const [code, setCode] = useState<Array<string | undefined>>(new Array(length).fill(undefined));
  const [inputIds] = useState<string[]>(Array.from({ length }).map(() => generateId(5)));

  useEffect(() => {
    if (code.length === length && code.every(c => c !== undefined)) {
      const handleComplete = async () => {
        setStatus('incomplete');
        setIsLoading(true);
        const success = await onComplete(code as string[]);
        setStatus(success ? 'success' : 'error');
        setIsLoading(false);
      };
      handleComplete();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  useEffect(() => {
    if (status !== 'incomplete' && code.some(c => c !== undefined)) {
      setStatus('incomplete');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  useEffect(() => {
    if (status === 'error') {
      console.log(inputIds);
      const lastInputField = document.querySelector<HTMLInputElement>(
        `input#${inputIds[length - 1]}`
      );
      if (lastInputField) {
        lastInputField.focus();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="grid gap-4">
      <div className={cn('flex justify-between w-10/12 mx-auto', containerClassName)}>
        {Array.from({ length }).map((_, i) => {
          const id = inputIds[i];
          return (
            <Input
              id={id}
              autoFocus={i === 0}
              key={i}
              maxLength={1}
              type="text"
              {...(isOTP && { autoComplete: 'one-time-code' })}
              className={cn(
                'w-9',
                inputClassName,
                status === 'error' && 'ring-1 ring-red-500',
                status === 'success' && 'ring-1 ring-green-500'
              )}
              placeholder="○"
              disabled={isLoading}
              onKeyDown={async e => {
                e.preventDefault();
                // Reset code if it's incomplete
                if (
                  status !== 'incomplete' &&
                  (code.some(c => c === undefined) ||
                    (e.currentTarget.value === '' && code[i] !== undefined))
                ) {
                  setStatus('incomplete');
                }
                if (e.key === 'Dead') {
                  //TODO: Get this to work
                  e.currentTarget.setSelectionRange(0, 0);
                  return;
                }
                // Delete currently selected input if it's empty or focus previous input
                if (e.key === 'Backspace') {
                  if (i > 0 && e.currentTarget.value === '') {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                    input.focus();
                    input.value = '';
                  }
                  e.currentTarget.value = '';
                  const newCode = [...code];
                  newCode[i] = undefined;
                  setCode(newCode);
                  return;
                }
                // Remove next input if it's not empty and focus it
                else if (e.key === 'Delete') {
                  if (i < length - 1) {
                    const input = e.currentTarget.nextElementSibling as HTMLInputElement;
                    input.focus();
                    const newCode = [...code];
                    newCode[i + 1] = undefined;
                    setCode(newCode);
                    input.value = '';
                  }
                  return;
                }
                // Focus previous input and select the number
                else if (e.key === 'ArrowLeft') {
                  if (e.currentTarget.selectionStart === 0) {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                    if (input) {
                      input.focus();
                      input.setSelectionRange(0, input.value.length);
                    }
                  } else {
                    e.currentTarget.selectionStart = e.currentTarget.selectionEnd = 0;
                  }
                  return;
                }
                // Focus next input and select the number
                else if (e.key === 'ArrowRight' || e.key === 'Tab') {
                  if (e.currentTarget.selectionStart === 1 || e.key === 'Tab') {
                    const input = e.currentTarget.nextElementSibling as HTMLInputElement;
                    if (input) {
                      input.focus();
                      input.setSelectionRange(0, input.value.length);
                    }
                  } else {
                    e.currentTarget.selectionStart = e.currentTarget.selectionEnd = 1;
                  }
                  return;
                }
                // Paste code from clipboard if it's valid into all following input fields
                else if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
                  const value = (await navigator.clipboard.readText()).slice(0, length);
                  if (
                    !value ||
                    (variant === 'numeric' && !/^\d+$/.test(value)) ||
                    (variant === 'alpha' && !/^[a-zA-Z]+$/.test(value))
                  ) {
                    e.currentTarget.value = '';
                    setCode([]);
                    return;
                  }

                  let nextSibling = e.target as HTMLInputElement;
                  for (let j = 0; j < length && nextSibling !== null; j++) {
                    nextSibling.value = value[j];
                    if (j === length - 1) {
                      nextSibling.focus();
                    }
                    nextSibling = nextSibling.nextElementSibling as HTMLInputElement;
                  }
                  setCode(value.split(''));
                  return;
                }
                // Set input value to the pressed key if it's valid and focus next input
                else if (
                  (variant === 'numeric' && /^\d$/.test(e.key)) ||
                  (variant === 'alpha' && /^[a-zA-Z]$/.test(e.key))
                ) {
                  const input = e.currentTarget.nextElementSibling as HTMLInputElement;
                  if (input) {
                    input.focus();
                  }
                  e.currentTarget.value = e.key;
                  const newCode = [...code];
                  newCode[i] = e.key;
                  setCode(newCode);
                } else {
                  e.currentTarget.value = '';
                }
              }}
            />
          );
        })}
      </div>
      <p
        className={cn(
          'text-sm text-red-500 text-center invisible',
          status === 'success' && 'text-green-500',
          ((status === 'error' && errorMessage) || status === 'success') && 'visible'
        )}
      >
        {status === 'success' ? successMessage : errorMessage}
      </p>
    </div>
  );
};

export default PinInput;
