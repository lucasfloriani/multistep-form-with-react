import React from 'react'
import { useFormik } from 'formik'

export type StepThreeData = {
  cep: string
  endereco: string
  senha: string
  confirmarSenha: string
}

type StepThreeProps = {
  backStep: (values: StepThreeData) => void
  submit: (values: StepThreeData) => void
  initialValues: StepThreeData
}

const StepThree: React.FC<StepThreeProps> = ({ backStep, initialValues, submit }) => {
  const {
    errors,
    handleChange,
    handleSubmit,
    values,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => submit(values)
  })

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cep">CEP</label>
        <input
          id="cep"
          name="cep"
          value={values.cep}
          onChange={handleChange}
        >
        </input>
        {errors.cep && <p>{errors.cep}</p>}
      </div>
      <div>
        <label htmlFor="endereco">CPF</label>
        <input
          id="endereco"
          name="endereco"
          value={values.endereco}
          onChange={handleChange}
        >
        </input>
        {errors.endereco && <p>{errors.endereco}</p>}
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          name="senha"
          value={values.senha}
          onChange={handleChange}
        >
        </input>
        {errors.senha && <p>{errors.senha}</p>}
      </div>
      <div>
        <label htmlFor="confirmarSenha">Confirmar Senha</label>
        <input
          id="confirmarSenha"
          type="password"
          name="confirmarSenha"
          value={values.confirmarSenha}
          onChange={handleChange}
        >
        </input>
        {errors.confirmarSenha && <p>{errors.confirmarSenha}</p>}
      </div>
      <div>
        <button type="button" onClick={() => backStep(initialValues)}>Voltar</button>
        <button>Enviar</button>
      </div>
    </form>
  )
}

export default StepThree

