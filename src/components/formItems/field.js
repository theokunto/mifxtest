import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
const CommonField = ({ label, fieldName, validation, placeholder, type }) => {
    return (
        <Field name={fieldName} validate={validation}>
            {({ field, form }) =>
            (
                <FormControl isInvalid={form.errors?.[fieldName] && form.touched?.[fieldName]} mt={4}>
                    <FormLabel>{label}</FormLabel>
                    <Input {...field}
                        placeholder={placeholder}
                        type={type === "password" ? 'password' : "text"}
                    />
                    <FormErrorMessage>{form.errors?.[fieldName]}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    )
};
export default CommonField;