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

export function EditMemberModal({ opened, closeModal, originalData }) {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { id } = originalData;

  const { loaded, submitUpdateMember, submitDeleteMember } = useContext(
    BarbecueContext,
  );

  function submit(values) {
    submitUpdateMember({ id, ...values });
    closeModal();
  }

  function cancel(event) {
    event.preventDefault();
    closeModal();
  }

  function deleteMember(event) {
    event.preventDefault();
    submitDeleteMember(id);
    closeModal();
  }

  useEffect(() => {
    const { budget, name, needDrink } = originalData;
    setValue('name', name);
    setValue('budget', budget);
    setValue('needDrink', needDrink);
    if (!opened) reset();
  }, [opened, originalData, reset, setValue]);

  const { formText, titleEdit } = TEXTS.createMember;
  return (
    <Modal opened={opened}>
      <ModalTitle>{titleEdit}</ModalTitle>
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
            {formText.update}
          </Button>
          <Button onClick={deleteMember}>{formText.delete}</Button>
          <Button onClick={cancel}>{formText.cancel}</Button>
        </ModalFormButtons>
      </Form>
    </Modal>
  );
}

EditMemberModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  originalData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    budget: PropTypes.number,
    paid: PropTypes.bool,
    needDrink: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }).isRequired,
};

export default EditMemberModal;
