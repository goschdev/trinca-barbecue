import React from 'react';
import PropTypes from 'prop-types';

import { ModalFormItem } from 'visual/styles/ModalFormItem';
import { Label } from 'visual/styles/Label';
import { Input } from 'visual/styles/Input';
import { Select } from 'visual/styles/Select';

export function FormItem({
  dictionary,
  type,
  as,
  rows,
  required,
  min,
  options,
  internalRef,
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
          as={as}
          name={id}
          rows={rows}
          required={required}
          min={min}
          ref={internalRef}
        />
      )}
      {isSelect && (
        <Select id={`form-${id}`} ref={internalRef} name={id}>
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
  type: PropTypes.string,
  as: PropTypes.string,
  rows: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.string,
  internalRef: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})),
};

FormItem.defaultProps = {
  type: 'text',
  as: 'input',
  rows: '',
  required: false,
  min: '',
  options: [],
};

export default FormItem;
