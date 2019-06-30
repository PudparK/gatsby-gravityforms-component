import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { ifDefaultValue, islabelHidden } from '../../utils/inputSettings'
import { getFieldID, slugify } from '../../utils/helpers'

import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import Multiselect from '../../components/Multiselect'
import Checkbox from '../../components/Checkbox'
import Radio from '../../components/Radio'
import Html from '../../components/Html'

const FieldBuilder = ({ formId, formData, register, errors }) => {
    return formData.formFields.map(field => {
        let inputWrapperClass = classnames(
            'gravityform__' + field.type,
            field.cssClass,
            { 'field-required': field.isRequired },
            { 'hidden-label': islabelHidden(field.labelPlacement) }
        )

        switch (field.type) {
            case 'text':
                return (
                    <Input
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        value={ifDefaultValue(field)}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        inputMaskValue={field.inputMaskValue}
                        errors={props.errors[`input_${field.id}`]}
                    />
                )
            case 'textarea':
                return (
                    <Textarea
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        value={ifDefaultValue(field)}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        inputMaskValue={field.inputMaskValue}
                        errors={props.errors[`input_${field.id}`]}
                    />
                )
            case 'select':
                return (
                    <Select
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        value={ifDefaultValue(field)}
                        options={JSON.parse(field.choices)}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        errors={props.errors[`input_${field.id}`]}
                    />
                )
            case 'multiselect':
                return (
                    <Multiselect
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        value={ifDefaultValue(field)}
                        options={JSON.parse(field.choices)}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        errors={props.errors[`input_${field.id}`]}
                    />
                )
            case 'number':
                return (
                    <Input
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        value={ifDefaultValue(field)}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        inputMaskValue={field.inputMaskValue}
                        errors={props.errors[`input_${field.id}`]}
                    />
                )
            case 'checkbox':
                return (
                    <Checkbox
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        options={JSON.parse(field.choices)}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        errors={props.errors[`input_${field.id}`]}
                    />
                )
            case 'radio':
                return (
                    <Radio
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        options={JSON.parse(field.choices)}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        errors={props.errors[`input_${field.id}`]}
                    />
                )
            case 'hidden':
                return (
                    <Input
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        value={ifDefaultValue(field)}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        placeholder={field.placeholder}
                        errors={props.errors[`input_${field.id}`]}
                    />
                )
            case 'html':
                return (
                    <Html
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        content={field.content}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                    />
                )
            default:
                return null
        }
    })
}

export default FieldBuilder
