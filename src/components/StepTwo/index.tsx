import React from 'react'
import { useFormik } from 'formik'

export type StepTwoData = {
  dataNascimento: string,
  cpf: string,
}

type StepTwoProps = {
  backStep: (values: StepTwoData) => void
  changeStep: (values: StepTwoData) => void
  initialValues: StepTwoData
}

const StepTwo: React.FC<StepTwoProps> = ({ backStep, changeStep, initialValues }) => {
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
        <label htmlFor="dataNascimento">Data de nascimento</label>
        <input
          id="dataNascimento"
          name="dataNascimento"
          value={values.dataNascimento}
          onChange={handleChange}
        >
        </input>
        {errors.dataNascimento && <p>{errors.dataNascimento}</p>}
      </div>
      <div>
        <label htmlFor="cpf">CPF</label>
        <input
          id="cpf"
          name="cpf"
          value={values.cpf}
          onChange={handleChange}
        >
        </input>
        {errors.cpf && <p>{errors.cpf}</p>}
      </div>
      <div>
        <button type="button" onClick={() => backStep(initialValues)}>Voltar</button>
        <button>Próximo</button>
      </div>
    </form>
  )
}

export default StepTwo

