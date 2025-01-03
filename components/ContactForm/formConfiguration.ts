
import * as yup from "yup";
import { FieldType, type GenericFormObject } from "../GenericForm/contracts";
import { ComponentType, Theme } from "../Button/Button.props";

export const formConfiguration: GenericFormObject = {
    formClass: "grid grid-cols-12 gap-4",
    submitButton: {
        name: "contactForm.button",
        componentType: ComponentType.Button,
        class: "col-span-12 w-full",
        theme: Theme.Primary,
    },
    fields: [
        {
            id: "name",
            name: "contactForm.name",
            as: FieldType.input,
            type: "text",
            initialValue: "",
            validation: yup.string().required("form.fieldIsRequired"),
            class: "col-span-12 md:col-span-6",
        },
        {
            id: "email",
            name: "contactForm.email",
            as: FieldType.input,
            type: "text",
            initialValue: "",
            validation: yup.string().required("form.fieldIsRequired"),
            class: "col-span-12 md:col-span-6",
        },
        {
            id: "message",
            name: "contactForm.message",
            as: FieldType.textarea,
            type: "text",
            initialValue: "",
            validation: yup.string().required("form.fieldIsRequired"),
            class: "col-span-12",
            inputClass: 'h-32',
        },
    ],
};
