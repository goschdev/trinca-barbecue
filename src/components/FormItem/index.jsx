import React from 'react';
import PropTypes from 'prop-types';

import { ModalFormItem } from 'visual/styles/ModalFormItem';
import { Label } from 'visual/styles/Label';
import { Input } from 'visual/styles/Input';
import { Select } from 'visual/styles/Select';

export function FormItem({
  dictionary,
  value,
  type,
  onChange,
  as,
  rows,
  required,
  min,
  options,
}) {
  const [id, title, placeholder] = dictionary;
  const isSelect = type === 'select';
  return (
    <ModalFormItem>
      <Label htmlFor={`form-${id}`}>{title}</Label>
      {!isSelect && (
        <Input
          placeholder={placeholder}
          id={`form-${id}`}
          type={type}
          value={value}
          as={as}
          rows={rows}
          onChange={({ target }) => onChange(id, target.value)}
          required={required}
          min={min}
        />
      )}
      {isSelect && (
        <Select
          id={`form-${id}`}
          onChange={({ target }) => onChange(id, target.value)}
          value={value}
        >
          {options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
        </Select>
      )}
    </ModalFormItem>
  );
}

FormItem.propTypes = {
  dictionary: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  as: PropTypes.string,
  rows: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
};

FormItem.defaultProps = {
  type: 'text',
  as: 'input',
  rows: '',
  value: '',
  required: false,
  min: '',
  options: [],
};

export default FormItem;
