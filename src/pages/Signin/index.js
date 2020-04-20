import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/fastfeet.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <div className="login-box">
      <img src={logo} alt="FastFeet" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>Seu Email</strong>
        <Input name="email" type="email" placeholder="Insira seu email aqui" />
        <strong>Sua Senha</strong>
        <Input name="password" type="password" placeholder="" />

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </div>
  );
}
