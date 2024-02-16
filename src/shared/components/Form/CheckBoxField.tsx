import { Checkbox, CheckboxProps } from '@nextui-org/react';

export interface ICheckboxFieldProps extends CheckboxProps {}

export default function CheckboxField(props: ICheckboxFieldProps) {
  return (
    <Checkbox
      classNames={{
        label: 'font-medium',
      }}
      defaultSelected
      color="default"
      {...props}
    >
      {props.children}
    </Checkbox>
  );
}
