import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';
import { ModalTitle } from 'visual/styles/ModalTitle';
import { TEXTS } from 'logic/texts';

import { ModalFormButtons } from 'visual/styles/ModalFormButtons';
import { Button } from 'visual/styles/Button';
import { createBarbecue } from 'logic/requests/barbecue';
import { Redirect } from 'react-router-dom';
import { ROUTES } from 'logic/constants';
import { FormItem } from 'components/FormItem';
import { Form } from './styles';

export function CreateBarbecueModal({ opened, closeModal }) {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [id, setId] = useState();

  function updateForm(key, value) {
    const newForm = { ...form };
    newForm[key] = value;
    setForm(newForm);
  }

  async function submit(event) {
    event.preventDefault();

    setLoading(true);
    const { data } = await createBarbecue(form);
    setId(data.id);
    setLoading(false);
    setSuccess(true);
  }

  useEffect(() => {
    if (!opened) setForm({});
  }, [opened]);

  const { formText, title } = TEXTS.createBarbecue;

  return (
    <Modal opened={opened}>
      <ModalTitle>{title}</ModalTitle>
      <Form onSubmit={submit}>
        <FormItem
          dictionary={formText.title}
          value={form[formText.title[0]]}
          onChange={updateForm}
          required
        />
        <FormItem
          dictionary={formText.budget}
          value={form[formText.budget[0]]}
          onChange={updateForm}
          type="number"
          min="0"
        />
        <FormItem
          dictionary={formText.datetime}
          value={form[formText.datetime[0]]}
          onChange={updateForm}
          type="datetime-local"
          required
        />
        <FormItem
          dictionary={formText.description}
          value={form[formText.description[0]]}
          onChange={updateForm}
          as="textarea"
          rows="3"
        />
        <FormItem
          dictionary={formText.notes}
          value={form[formText.notes[0]]}
          onChange={updateForm}
          as="textarea"
          rows="3"
        />
        <ModalFormButtons>
          <Button type="submit" disabled={loading ? 'disabled' : ''}>
            {formText.submit}
          </Button>
          <Button onClick={closeModal}>{formText.cancel}</Button>
        </ModalFormButtons>
        {success && <Redirect to={ROUTES.BARBECUE_DETAIL.replace(':id', id)} />}
      </Form>
    </Modal>
  );
}

CreateBarbecueModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateBarbecueModal;
