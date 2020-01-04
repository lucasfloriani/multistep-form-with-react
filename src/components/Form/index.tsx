import React, { useState } from 'react'
import formStep from '../../enums/formStep'
import Container from '../../components/Container'
import StepOne, { StepOneData } from '../../components/StepOne'
import StepTwo, { StepTwoData } from '../../components/StepTwo'
import StepThree, { StepThreeData } from '../../components/StepThree'

type FormData = StepOneData & StepTwoData & StepThreeData

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    celular: '',
    email: '',
    profissao: '',
    cpf: '',
    dataNascimento: '',
    cep: '',
    endereco: '',
    senha: '',
    confirmarSenha: '',
  })
  const [step, setStep] = useState(formStep.StepOne)

  const changeStep = (step: number) => (values: StepOneData | StepTwoData | StepThreeData) => {
    setFormData(oldValues => ({ ...oldValues, ...values }))
    setStep(step)
  }
  const changeToStepTwo = changeStep(formStep.StepTwo)
  const changeToStepThree = changeStep(formStep.StepThree)
  const backToStepOne = changeStep(formStep.StepOne)
  const backToStepTwo = changeStep(formStep.StepTwo)

  const submit = (values: StepThreeData) => alert(JSON.stringify({ ...formData, ...values }))

  return (
    <Container>
      {step === formStep.StepOne && (
        <StepOne
          changeStep={changeToStepTwo}
          initialValues={{
            celular: formData.celular,
            email: formData.email,
            profissao: formData.profissao,
          }}
        />
      )}
      {step === formStep.StepTwo && (
        <StepTwo
          backStep={backToStepOne}
          changeStep={changeToStepThree}
          initialValues={{
            cpf: formData.cpf,
            dataNascimento: formData.dataNascimento,
          }}
        />
      )}
      {step === formStep.StepThree && (
        <StepThree
          backStep={backToStepTwo}
          submit={submit}
          initialValues={{
            cep: formData.cep,
            endereco: formData.endereco,
            senha: formData.senha,
            confirmarSenha: formData.confirmarSenha,
          }}
        />
      )}
    </Container>
  )
}

export default Form
