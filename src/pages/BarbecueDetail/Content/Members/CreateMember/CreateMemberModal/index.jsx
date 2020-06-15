import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { Modal } from 'components/Modal';
import { FormItem } from 'components/FormItem';
import { TEXTS } from 'logic/texts';
import { ModalTitle } from 'visual/styles/ModalTitle';
import { ModalFormButtons } from 'visual/styles/ModalFormButtons';
import { Button } from 'visual/styles/Button';
import { BarbecueContext } from 'contexts/BarbecueContext';
import { Form } from './styles';

export function CreateMemberModal({ opened, closeModal }) {
  const { register, handleSubmit, reset } = useForm();

  const { loaded, submitCreateMember } = useContext(BarbecueContext);

  function submit(values) {
    submitCreateMember(values);
  }

  function cancel(event) {
    event.preventDefault();
    closeModal();
  }

  useEffect(() => {
    if (!opened) reset();
  }, [opened, reset]);

  const { formText, title } = TEXTS.createMember;
  return (
    <Modal opened={opened}>
      <ModalTitle>{title}</ModalTitle>
      <Form onSubmit={handleSubmit(submit)}>
        <FormItem dictionary={formText.name} internalRef={register} required />
        <FormItem
          dictionary={formText.budget}
          internalRef={register}
          type="number"
          min="0"
          required
        />
        <FormItem
          dictionary={formText.needDrink}
          internalRef={register}
          type="select"
          options={formText.needDrinkOptions}
          min="0"
          required
        />
        <ModalFormButtons>
          <Button disabled={!loaded ? 'disabled' : ''} type="submit">
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
