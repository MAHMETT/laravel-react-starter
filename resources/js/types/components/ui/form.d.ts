import { FieldPath, FieldValues } from 'react-hook-form';

export type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
};

export type FormItemContextValue = {
    id: string;
};

export type FormContextProps = {
    // This is a simplified type - actual implementation might vary
    [key: string]: unknown;
};

// Additional form types can be added as needed
