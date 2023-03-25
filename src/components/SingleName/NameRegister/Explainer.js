import React from 'react'
import styled from '@emotion/styled/macro'
import { useTranslation } from 'react-i18next'

import mq from 'mediaQuery'
import Step from './Step'
import Button from '../../Forms/Button'
import { ReactComponent as Bell } from '../../Icons/Bell.svg'
import { ReactComponent as Tick } from '../../Icons/GreyCircleTick.svg'
import RequestRegister from '../../../assets/request-register.svg'
import Wait from '../../../assets/wait.svg'
import RegisterComplete from '../../../assets/register-complete.svg'

import { requestPermission, hasPermission } from './notification'
import Modal from 'react-modal'
import LottieAnimation from './LottieAnimation'

const Steps = styled('section')`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 30px;
  ${mq.large`
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-template-rows: 1fr;
  `}
`

const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-family: Open Sans;
    font-weight: 300;
    font-size: 18px;
    color: #2b2b2b;
    letter-spacing: 0;
    margin: 0;
    margin-bottom: 5px;

    ${mq.medium`
      font-size: 24px;
      color: #2B2B2B;
      letter-spacing: 0;
    `}
  }

  p {
    margin: 0;
    font-weight: 400;
    font-family: Open Sans;
    font-size: 14px;
    color: #adbbcd;
    letter-spacing: 0;
  }
`

const NotifyButton = styled(Button)`
  flex-shrink: 0;
`

const NotifyButtonDisabled = styled('div')`
  color: hsla(0, 0%, 82%, 1);
`
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: undefined,
    border: undefined
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
    zIndex: 99
  }
}
const Explainer = ({ step, waitPercentComplete, waitTime }) => {
  const { t } = useTranslation()
  const titles = {
    PRICE_DECISION: t('register.titles.0'),
    COMMIT_SENT: t('register.titles.1'),
    COMMIT_CONFIRMED: t('register.titles.1'),
    AWAITING_REGISTER: t('register.titles.1'),
    REVEAL_SENT: t('register.titles.1'),
    REVEAL_CONFIRMED: t('register.titles.2')
  }
  console.log(
    'STEP1==>',
    step === 'PRICE_DECISION' ? 0 : step === 'COMMIT_SENT' ? 50 : 100
  )
  console.log(
    'condition--->',
    step === 'PRICE_DECISION' ? 0 : step === 'COMMIT_SENT' ? 50 : 100,
    '11111',
    step === 'PRICE_DECISION' || step === 'COMMIT_SENT'
      ? 0
      : step === 'COMMIT_CONFIRMED'
      ? waitPercentComplete
      : 100,
    '22222',
    step === 'REVEAL_CONFIRMED' ? 100 : step === 'REVEAL_SENT' ? 50 : 0
  )

  const isOpenModal = () => {
    console.log(
      'isOpenModal-->',
      ((step === 'PRICE_DECISION' ? 0 : step === 'COMMIT_SENT' ? 50 : false) &&
        (step === 'PRICE_DECISION'
          ? 0
          : step === 'COMMIT_SENT'
          ? 50
          : false)) ||
        (step === 'PRICE_DECISION' || step === 'COMMIT_SENT'
          ? 0
          : step === 'COMMIT_CONFIRMED'
          ? waitPercentComplete
          : false)
    )
    return (
      ((step === 'PRICE_DECISION' ? 0 : step === 'COMMIT_SENT' ? 50 : false) &&
        (step === 'PRICE_DECISION'
          ? 0
          : step === 'COMMIT_SENT'
          ? 50
          : false)) ||
      (step === 'PRICE_DECISION' || step === 'COMMIT_SENT'
        ? 0
        : step === 'COMMIT_CONFIRMED'
        ? waitPercentComplete
        : false)
    )
  }
  return (
    <>
      <Header>
        <Modal
          isOpen={isOpenModal()}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <LottieAnimation />
        </Modal>
        <div>
          <h2>{titles[step]}</h2>
          <p>{t('register.favourite')}</p>
        </div>
        {hasPermission() ? (
          <NotifyButtonDisabled>
            <Tick style={{ marginRight: 5 }} />
            {t('register.notify')}
          </NotifyButtonDisabled>
        ) : (
          <NotifyButton type="hollow-primary" onClick={requestPermission}>
            <Bell style={{ marginRight: 5 }} />
            {t('register.notify')}
          </NotifyButton>
        )}
      </Header>

      <Steps>
        <Step
          number={1}
          progress={
            step === 'PRICE_DECISION' ? 0 : step === 'COMMIT_SENT' ? 50 : 100
          }
          title={t('register.step1.title')}
          text={t('register.step1.text') + ' ' + t('register.step1.text2')}
          image={RequestRegister}
        />
        <Step
          number={2}
          progress={
            step === 'PRICE_DECISION' || step === 'COMMIT_SENT'
              ? 0
              : step === 'COMMIT_CONFIRMED'
              ? waitPercentComplete
              : 100
          }
          title={
            t(
              'register.step2.title'
            ) /* `Wait for ${moment
            .duration({ seconds: waitTime })
            .humanize()}` //add back localization of moment*/
          }
          text={t('register.step2.text')}
          image={Wait}
        />
        <Step
          number={3}
          progress={
            step === 'REVEAL_CONFIRMED' ? 100 : step === 'REVEAL_SENT' ? 50 : 0
          }
          title={t('register.step3.title')}
          text={t('register.step3.text')}
          image={RegisterComplete}
        />
      </Steps>
    </>
  )
}

export default Explainer
