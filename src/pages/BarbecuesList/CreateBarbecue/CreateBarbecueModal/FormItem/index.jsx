import React from 'react';
import PropTypes from 'prop-types';

import { ModalFormItem } from 'visual/styles/ModalFormItem';
import { Label } from 'visual/styles/Label';
import { Input } from 'visual/styles/Input';

export function FormItem({
  dictionary,
  value,
  type,
  onChange,
  as,
  rows,
  required,
}) {
  const [id, title, placeholder] = dictionary;
  return (
    <ModalFormItem>
      <Label htmlFor={`form-${id}`}>{title}</Label>
      <Input
        placeholder={placeholder}
        id={`form-${id}`}
        type={type}
        value={value}
        as={as}
        rows={rows}
        onChange={({ target }) => onChange(id, target.value)}
        required={required}
      />
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
};

FormItem.defaultProps = {
  type: 'text',
  as: 'input',
  rows: '',
  value: '',
  required: false,
};

export default FormItem;
