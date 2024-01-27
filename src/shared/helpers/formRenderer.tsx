import InputField from '@/components/Form/InputField';

export type FieldType = 'input';

export interface IForm {
  name: string;
  label?: string;
  placeholder?: string;
  field: FieldType;
}

const formComponentMap: Record<FieldType, React.ComponentType<any>> = {
  input: InputField,
  // [FormType.SELECT]: SelectField,
  // Add other form types and their corresponding components here
};

export default function renderForm(listForm: IForm[]) {
  return (
    <div className="grid grid-cols-1 gap-main">
      {listForm.map((item: IForm) => {
        const Component = formComponentMap[item.field];
        if (!Component) return null;
        return <Component key={item.name} {...item} />;
      })}
    </div>
  );
}
