import React, { useState, useRef, useEffect } from 'react'
import Messages from '../../components/organisms/Messages/Messages'
import SendBox from '../../components/organisms/SendBox/SendBox'
import {
  TemplateMessengerBackgroundStyled,
  TemplateMessengerMessagesStyled,
  TemplateMessengerMessagesWrapperStyled,
  TemplateMessengerSendboxStyled,
  TemplateMessengerStyled,
} from './TemplateMessengerStyled'
import PartMessengerFooter from '../../parts/PartMessengerFooter/PartMessengerFooter'

interface IProps {}

const TemplateMessenger = (props: IProps) => {
  const [loaded, setLoaded] = useState(false)

  const templateMessengerMessagesRef = useRef<HTMLDivElement>(null)
  const templateMessengerMessagesWrapperRef = useRef<HTMLDivElement>(null)
  const templateMessengerMessagesEndRef = useRef<HTMLDivElement>(null)
  const templateMessengerSendboxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let templateMessengerSendboxHeight = 0

    if (templateMessengerSendboxRef && templateMessengerSendboxRef.current) {
      templateMessengerSendboxHeight =
        templateMessengerSendboxRef.current.clientHeight
    }

    if (templateMessengerMessagesRef && templateMessengerMessagesRef.current) {
      templateMessengerMessagesRef.current.style.height = `calc(100% - ${templateMessengerSendboxHeight}px)`
      templateMessengerMessagesRef.current.style.maxHeight = `calc(100% - ${templateMessengerSendboxHeight}px)`

      if (!loaded) {
        setTimeout(() => {
          if (
            templateMessengerMessagesEndRef &&
            templateMessengerMessagesEndRef.current
          ) {
            templateMessengerMessagesEndRef.current.scrollIntoView({
              behavior: 'smooth',
            })
          }
        }, 10)
      }
    }

    if (!loaded) setLoaded(true)
  }, [loaded, setLoaded])

  return (
    <TemplateMessengerStyled>
      <TemplateMessengerBackgroundStyled />
      <TemplateMessengerMessagesStyled ref={templateMessengerMessagesRef}>
        <TemplateMessengerMessagesWrapperStyled
          ref={templateMessengerMessagesWrapperRef}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Messages />
                <div ref={templateMessengerMessagesEndRef} />
              </div>
            </div>
          </div>
        </TemplateMessengerMessagesWrapperStyled>
      </TemplateMessengerMessagesStyled>
      <TemplateMessengerSendboxStyled ref={templateMessengerSendboxRef}>
        <PartMessengerFooter>
          <SendBox />
        </PartMessengerFooter>
      </TemplateMessengerSendboxStyled>
    </TemplateMessengerStyled>
  )
}

export default TemplateMessenger
