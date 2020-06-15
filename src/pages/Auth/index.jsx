import React, { useContext } from 'react';

import { Label } from 'visual/styles/Label';
import { Input } from 'visual/styles/Input';
import { TEXTS } from 'logic/texts';
import { Wrapper } from 'visual/styles/Wrapper';
import { Button } from 'visual/styles/Button';

import { useForm } from 'react-hook-form';
import { AuthContext } from 'contexts/AuthContext';
import { Container, Form, FormItem } from './styles';

export function Auth() {
  const { register, handleSubmit } = useForm();
  const { setAuthenticated } = useContext(AuthContext);

  function submit() {
    setAuthenticated();
  }
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit(submit)}>
          <FormItem>
            <Label htmlFor="login">{TEXTS.auth.login}</Label>
            <Input
              id="login"
              placeholder={TEXTS.auth.loginPlaceholder}
              type="email"
              name="login"
              required
              ref={register}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="password">{TEXTS.auth.password}</Label>
            <Input
              id="password"
              placeholder={TEXTS.auth.passwordPlaceholder}
              name="password"
              type="password"
              ref={register}
            />
          </FormItem>
          <FormItem>
            <Button type="submit">{TEXTS.auth.submit}</Button>
          </FormItem>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Auth;
