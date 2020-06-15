import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

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
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [id, setId] = useState();

  async function submit(values) {
    setLoading(true);
    const { data } = await createBarbecue(values);
    setId(data.id);
    setLoading(false);
    setSuccess(true);
  }

  function cancel(event) {
    event.preventDefault();
    closeModal();
  }

  function detailLink() {
    return ROUTES.BARBECUE_DETAIL.replace(':id', id);
  }

  useEffect(() => {
    if (!opened) reset();
  }, [opened, reset]);

  const { formText, title } = TEXTS.createBarbecue;

  return (
    <Modal opened={opened}>
      <ModalTitle>{title}</ModalTitle>
      <Form onSubmit={handleSubmit(submit)}>
        <FormItem dictionary={formText.title} internalRef={register} required />
        <FormItem
          dictionary={formText.budget}
          internalRef={register}
          type="number"
          min="0"
        />
        <FormItem
          dictionary={formText.datetime}
          internalRef={register}
          type="datetime-local"
          required
        />
        <FormItem
          dictionary={formText.description}
          internalRef={register}
          as="textarea"
          rows="3"
        />
        <FormItem
          dictionary={formText.notes}
          internalRef={register}
          as="textarea"
          rows="3"
        />
        <ModalFormButtons>
          <Button type="submit" disabled={loading ? 'disabled' : ''}>
            {formText.submit}
          </Button>
          <Button onClick={cancel}>{formText.cancel}</Button>
        </ModalFormButtons>
        {success && <Redirect to={detailLink()} />}
      </Form>
    </Modal>
  );
}

CreateBarbecueModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateBarbecueModal;
