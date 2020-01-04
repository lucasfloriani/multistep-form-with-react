import React from 'react'
import { useFormik } from 'formik'

export type StepOneData = {
  celular: string,
  email: string,
  profissao: string,
}

type StepOneProps = {
  changeStep: (values: StepOneData) => void
  initialValues: StepOneData
}

const StepOne: React.FC<StepOneProps> = ({ changeStep, initialValues }) => {
  const {
    errors,
    handleChange,
    handleSubmit,
    values,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => changeStep(values)
  })

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="profissao">Nome do profissional/empresa</label>
        <input
          id="profissao"
          name="profissao"
          value={values.profissao}
          onChange={handleChange}
        >
        </input>
        {errors.profissao && <p>{errors.profissao}</p>}
      </div>
      <div>
        <label htmlFor="celular">Celular</label>
        <input
          id="celular"
          name="celular"
          value={values.celular}
          onChange={handleChange}
        >
        </input>
        {errors.celular && <p>{errors.celular}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        >
        </input>
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button>Próximo</button>
    </form>
  )
}

export default StepOne

