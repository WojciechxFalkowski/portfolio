
import * as yup from "yup";
import { FieldType, type GenericFormObject } from "../GenericForm/contracts";
import { ComponentType, Theme } from "../Button/Button.props";

export const formConfiguration: GenericFormObject = {
    formClass: "grid grid-cols-12 gap-4",
    submitButton: {
        name: "form.send",
        componentType: ComponentType.Button,
        class: "col-span-12",
        theme: Theme.Primary,
    },
    fields: [
        {
            id: "name",
            name: "form.name",
            as: FieldType.input,
            type: "text",
            initialValue: "",
            validation: yup.string().required("form.fieldIsRequired"),
            class: "col-span-12 md:col-span-6",
        },
        {
            id: "email",
            name: "form.email",
            as: FieldType.input,
            type: "text",
            initialValue: "",
            validation: yup.string().required("form.fieldIsRequired"),
            class: "col-span-12 md:col-span-6",
        },
        {
            id: "message",
            name: "form.message",
            as: FieldType.textarea,
            type: "text",
            initialValue: "",
            validation: yup.string().required("form.fieldIsRequired"),
            class: "col-span-12",
            inputClass: 'h-32',
        },
    ],
};
