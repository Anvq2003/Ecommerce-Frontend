import ButtonMain from '@/components/Button';
import CheckboxField from '@/components/Form/CheckBoxField';
import InputField from '@/components/Form/InputField';
import { ButtonProps } from "@heroui/button";

export type FieldType = 'input' | 'checkbox' | 'select';
export type Type = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

export interface IForm {
  type?: Type;
  name: string;
  label?: string;
  placeholder?: string;
  field: FieldType;
  startContent?: React.ReactNode | string | any;
  endContent?: React.ReactNode | string | any;
}

const formComponentMap: Record<FieldType, React.ComponentType<any>> = {
  input: InputField,
  checkbox: CheckboxField,
  select: InputField,
  // Add other form types and their corresponding components here
};

export const renderForm = (listForm: IForm[], className?: string) => {
  return (
    <div className="flex w-full flex-col gap-main">
      {listForm.map((item: IForm) => {
        const Component = formComponentMap[item.field];
        if (!Component) return null;
        return <Component key={item.name} {...item} />;
      })}
    </div>
  );
};

export interface IActionForm extends ButtonProps {
  label: string;
  onPress?: () => void;

  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost' | any;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | any;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full' | any;
  size?: 'sm' | 'md' | 'lg' | any;
}

export const renderActionForm = (listAction: IActionForm[]) => {
  return listAction.map((item: IActionForm, index: number) => {
    return (
      <ButtonMain key={index} {...item}>
        {item.label}
      </ButtonMain>
    );
  });
};
