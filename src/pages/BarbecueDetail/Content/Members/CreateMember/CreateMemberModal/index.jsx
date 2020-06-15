import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';
import { FormItem } from 'components/FormItem';
import { TEXTS } from 'logic/texts';
import { ModalTitle } from 'visual/styles/ModalTitle';
import { ModalFormButtons } from 'visual/styles/ModalFormButtons';
import { Button } from 'visual/styles/Button';
import { createMember } from 'logic/requests/barbecue';
import { BarbecueContext } from 'contexts/BarbecueContext';
import { Form } from './styles';

const formDefault = {
  needDrink: 'true',
};

export function CreateMemberModal({ opened, closeModal }) {
  const { fetch } = useContext(BarbecueContext);
  const [form, setForm] = useState(formDefault);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  function updateForm(key, value) {
    const newForm = { ...form };
    newForm[key] = value;
    setForm(newForm);
  }

  async function submit(event) {
    event.preventDefault();

    setLoading(true);
    await createMember({ barbecue: id, ...form });
    setLoading(false);
    fetch(id);
  }

  function cancel(event) {
    event.preventDefault();
    closeModal();
  }

  const { formText, title } = TEXTS.createMember;

  useEffect(() => {
    if (!opened) setForm(formDefault);
  }, [opened]);
  return (
    <Modal opened={opened}>
      <ModalTitle>{title}</ModalTitle>
      <Form onSubmit={submit}>
        <FormItem
          dictionary={formText.name}
          value={form[formText.name[0]]}
          onChange={updateForm}
          required
        />
        <FormItem
          dictionary={formText.budget}
          value={form[formText.budget[0]]}
          onChange={updateForm}
          type="number"
          min="0"
          required
        />
        <FormItem
          dictionary={formText.needDrink}
          value={form[formText.needDrink[0]]}
          onChange={updateForm}
          type="select"
          options={formText.needDrinkOptions}
          min="0"
          required
        />
        <ModalFormButtons>
          <Button disabled={loading ? 'disabled' : ''} type="submit">
            {formText.submit}
          </Button>
          <Button onClick={cancel}>{formText.cancel}</Button>
        </ModalFormButtons>
      </Form>
    </Modal>
  );
}

CreateMemberModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateMemberModal;
