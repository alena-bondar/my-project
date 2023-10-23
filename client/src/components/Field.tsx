import { ReactElement } from "react";
import {
  Control,
  FieldPathByValue,
  FieldValues,
  PathValue,
  useController,
} from "react-hook-form";

type FieldProps<
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, string | number>,
> = {
  type: string;
  name: TPath;
  control: Control<TFieldValues>;
  defaultValue?: PathValue<TFieldValues, TPath>;
  title?: string;
  placeholder?: string;
};
export const Field = <
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, string | number>,
>({
  type,
  name,
  control,
  defaultValue,
  title,
  placeholder,
}: FieldProps<TFieldValues, TPath>): ReactElement | null => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <div>
      <p>{title}</p>
      <div>
        <input
          {...field}
          type={type}
          name={field.name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
