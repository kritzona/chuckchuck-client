import React, { useState, useRef, useEffect } from 'react'

import PartMessengerFooter from '../../parts/PartMessengerFooter/PartMessengerFooter'
import SendBoxContainer from '../../containers/SendBoxContainer'
import MessagesContainer from '../../containers/MessagesContainer'

import {
  TemplateMessengerBackgroundStyled,
  TemplateMessengerMessagesStyled,
  TemplateMessengerMessagesWrapperStyled,
  TemplateMessengerSendboxStyled,
  TemplateMessengerStyled,
} from './TemplateMessengerStyled'
import { IContactItem } from '../../store/contact/types'
import { IMessageItem } from '../../store/messenger/types'

interface IProps {
  dialogId: string | number
  contactItem: IContactItem
  messageItems: IMessageItem[]
}

const TemplateMessenger = (props: IProps) => {
  const [init, setInit] = useState(false)

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

      if (!init) {
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

    if (!init) setInit(true)
  }, [init, setInit])
  useEffect(() => {
    setTimeout(() => {
      if (
        templateMessengerMessagesEndRef &&
        templateMessengerMessagesEndRef.current
      ) {
        templateMessengerMessagesEndRef.current.scrollIntoView({})
      }
    }, 10)
  }, [props.messageItems])

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
                <MessagesContainer messageItems={props.messageItems} />
                <div ref={templateMessengerMessagesEndRef} />
              </div>
            </div>
          </div>
        </TemplateMessengerMessagesWrapperStyled>
      </TemplateMessengerMessagesStyled>
      <TemplateMessengerSendboxStyled ref={templateMessengerSendboxRef}>
        <PartMessengerFooter>
          <SendBoxContainer
            contactId={props.contactItem.id}
            dialogId={props.dialogId}
          />
        </PartMessengerFooter>
      </TemplateMessengerSendboxStyled>
    </TemplateMessengerStyled>
  )
}

export default TemplateMessenger
