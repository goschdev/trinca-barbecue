import React from 'react';

import { Label } from 'visual/styles/Label';
import { Input } from 'visual/styles/Input';
import { TEXTS } from 'logic/texts';
import { Wrapper } from 'visual/styles/Wrapper';
import { Button } from 'visual/styles/Button';

import { Container, Form, FormItem, SetBodyBackground } from './styles';

export function Auth() {
  return (
    <Container>
      <SetBodyBackground />
      <Wrapper>
        <Form>
          <FormItem>
            <Label htmlFor="login">{TEXTS.auth.login}</Label>
            <Input
              id="login"
              placeholder={TEXTS.auth.loginPlaceholder}
              type="email"
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="password">{TEXTS.auth.password}</Label>
            <Input
              id="password"
              placeholder={TEXTS.auth.passwordPlaceholder}
              type="password"
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
