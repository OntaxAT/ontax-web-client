import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Input } from '../ui/input';

interface IPinInputProps {
  variant?: 'alpha' | 'numeric';
  isOTP?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  length?: number;
}

/**
 * 4-digit pin input component (alpha-numerical or numerical)
 */
const PinInput: FC<IPinInputProps> = ({
  variant = 'numeric',
  isOTP,
  containerClassName,
  inputClassName,
  length = 4
}) => {
  return (
    <div className={cn('flex justify-between w-10/12 mx-auto', containerClassName)}>
      {Array.from({ length }).map((_, i) => (
        <Input
          key={i}
          maxLength={1}
          type="text"
          {...(isOTP && { autoComplete: 'one-time-code' })}
          className={cn('w-9', inputClassName)}
          placeholder="○"
          onKeyDown={async e => {
            e.preventDefault();
            if (e.key === 'Backspace') {
              if (i > 0 && e.currentTarget.value === '') {
                const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                input.focus();
                input.value = '';
              }
              e.currentTarget.value = '';
            } else if (e.key === 'Delete') {
              if (i < length - 1) {
                const input = e.currentTarget.nextElementSibling as HTMLInputElement;
                input.focus();
              }
              e.currentTarget.value = '';
            } else if (e.key === 'ArrowLeft') {
              if (e.currentTarget.selectionStart === 0) {
                const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                if (input) {
                  input.focus();
                  input.selectionStart = 0;
                  input.selectionEnd = input.value.length;
                }
              } else {
                e.currentTarget.selectionStart = e.currentTarget.selectionEnd = 0;
              }
            } else if (e.key === 'ArrowRight' || e.key === 'Tab') {
              if (e.currentTarget.selectionStart === 1 || e.key === 'Tab') {
                const input = e.currentTarget.nextElementSibling as HTMLInputElement;
                if (input) {
                  input.focus();
                  input.selectionStart = 0;
                  input.selectionEnd = input.value.length;
                }
              } else {
                e.currentTarget.selectionStart = e.currentTarget.selectionEnd = 1;
              }
            } else if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
              const value = await navigator.clipboard.readText();
              if (
                !value ||
                (variant === 'numeric' && !/^\d+$/.test(value)) ||
                (variant === 'alpha' && !/^[a-zA-Z]+$/.test(value))
              ) {
                e.currentTarget.value = '';
                return;
              }

              let nextSibling = e.target as HTMLInputElement;
              for (let j = 0; j < length && nextSibling !== null; j++) {
                nextSibling.value = value[j];
                console.log('nextSibling: ', nextSibling);
                if (j === length - 1) {
                  nextSibling.focus();
                }
                nextSibling = nextSibling.nextElementSibling as HTMLInputElement;
              }
            } else if (variant === 'numeric' && /^\d$/.test(e.key)) {
              const input = e.currentTarget.nextElementSibling as HTMLInputElement;
              if (input) {
                input.focus();
              }
              e.currentTarget.value = e.key;
              return;
            } else if (variant === 'alpha' && /^[a-zA-Z]$/.test(e.key)) {
              const input = e.currentTarget.nextElementSibling as HTMLInputElement;
              if (input) {
                input.focus();
              }
              e.currentTarget.value = e.key;
              return;
            }
          }}
        />
      ))}
    </div>
  );
};

export default PinInput;
