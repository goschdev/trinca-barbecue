import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';
import { ModalTitle } from 'visual/styles/ModalTitle';
import { TEXTS } from 'logic/texts';

import { ModalFormButtons } from 'visual/styles/ModalFormButtons';
import { Button } from 'visual/styles/Button';
import { createBarbecue } from 'logic/requests/barbecue';
import { FormItem } from './FormItem';
import { Form } from './styles';

export function CreateBarbecueModal({ opened, closeModal }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  function updateData(key, value) {
    const newData = { ...data };
    newData[key] = value;
    setData(newData);
  }

  async function submit() {
    setLoading(true);
    await createBarbecue(data);
    setLoading(false);
  }

  useEffect(() => {
    if (!opened) setData({});
  }, [opened]);

  const { form, title } = TEXTS.createBarbecue;

  return (
    <Modal opened={opened}>
      <ModalTitle>{title}</ModalTitle>
      <Form onSubmit={submit}>
        <FormItem
          dictionary={form.title}
          value={data[form.title[0]]}
          onChange={updateData}
          required
        />
        <FormItem
          dictionary={form.budget}
          value={data[form.budget[0]]}
          onChange={updateData}
          type="number"
        />
        <FormItem
          dictionary={form.datetime}
          value={data[form.datetime[0]]}
          onChange={updateData}
          type="datetime-local"
          required
        />
        <FormItem
          dictionary={form.description}
          value={data[form.description[0]]}
          onChange={updateData}
          as="textarea"
          rows="3"
        />
        <FormItem
          dictionary={form.notes}
          value={data[form.notes[0]]}
          onChange={updateData}
          as="textarea"
          rows="3"
        />
        <ModalFormButtons>
          <Button type="submit" disabled={loading ? 'disabled' : ''}>
            {form.submit}
          </Button>
          <Button onClick={closeModal}>{form.cancel}</Button>
        </ModalFormButtons>
      </Form>
    </Modal>
  );
}

CreateBarbecueModal.propTypes = {
  opened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateBarbecueModal;
