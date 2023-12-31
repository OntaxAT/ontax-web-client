import PinInput from '@/components/form/PinInput';
import { FC } from 'react';

interface ILogIn2FaViewProps {
  onSubmit: (code: string[]) => Promise<boolean>;
}
/**
 * The log in 2fa view
 */
const LogIn2FaView: FC<ILogIn2FaViewProps> = ({ onSubmit }) => {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center mb-3">
        <h1 className="text-2xl font-semibold">Verify your identity</h1>
        <p className="text-sm text-muted-foreground px-10">
          Enter the 6-digit code generated by your authenticator app.
        </p>
      </div>
      <PinInput
        onComplete={onSubmit}
        containerClassName="w-10/12"
        length={6}
        errorMessage="Invalid code. Please try again."
      />
    </>
  );
};

export default LogIn2FaView;
