import { Input, InputProps } from '@nextui-org/input';

export interface IInputFieldProps extends InputProps {}

export default function InputField(props: IInputFieldProps) {
  // Record<"base"｜ "label"｜ "inputWrapper"｜ "innerWrapper"｜ "mainWrapper" ｜ "input" ｜ "clearButton" ｜ "helperWrapper" ｜ "description" ｜ "errorMessage", string>
  const styles = {
    label: 'text-lg font-medium text-primary',
    base: 'w-full text-[#D2D1D6]',
    inputWrapper: 'px-3 bg-transparent border-1 border-border rounded-[10px]',
    input: 'text-primary',
  };

  return (
    <Input
      classNames={styles}
      key="email"
      type="email"
      label="Email"
      labelPlacement="outside"
      placeholder="Enter your email"
      {...props}
    />
  );
}
