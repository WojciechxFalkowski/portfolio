
import * as yup from "yup";
import { FieldType, type GenericFormObject } from "../GenericForm/contracts";
import { ComponentType, Theme } from "../Button/Button.props";

export const formConfiguration: GenericFormObject = {
    formClass: "grid grid-cols-12 gap-4",
    submitButton: {
        name: "Send",
        componentType: ComponentType.Button,
        class: "col-span-12",
        theme: Theme.Primary,
    },
    fields: [
        {
            id: "name",
            name: "Imię",
            as: FieldType.input,
            type: "text",
            initialValue: "",
            validation: yup.string().required("Pole jest wymagane"),
            class: "col-span-12 md:col-span-6",
        },
        {
            id: "email",
            name: "Email",
            as: FieldType.input,
            type: "text",
            initialValue: "",
            validation: yup.string().required("Pole jest wymagane"),
            class: "col-span-12 md:col-span-6",
        },
        {
            id: "message",
            name: "Wiadomość",
            as: FieldType.textarea,
            type: "text",
            initialValue: "",
            validation: yup.string().required("Pole jest wymagane"),
            class: "col-span-12",
            inputClass: 'h-32',
        },
    ],
};

export const NEW_TEAM_MEMBER_ROUTE = 'new'
export const TEAM_MEMBER_ROUTE = 'cms-zespol-id'
export const TEAM_MEMBERS_ROUTE = 'cms-zespol'
export const HOME_ROUTE = 'cms'