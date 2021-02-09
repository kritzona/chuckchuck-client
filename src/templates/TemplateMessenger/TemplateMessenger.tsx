import React, { useState, useRef, useEffect } from 'react'

import { Scrollbars } from 'react-custom-scrollbars'

import PartMessengerFooter from '../../parts/PartMessengerFooter/PartMessengerFooter'
import SendBoxContainer from '../../containers/SendBoxContainer'
import MessagesContainer from '../../containers/MessagesContainer'

import {
  TemplateMessengerBackgroundStyled,
  TemplateMessengerMessagesStyled,
  TemplateMessengerMessagesWrapperStyled,
  TemplateMessengerSendboxStyled,
  TemplateMessengerStyled,
  TemplateMessengerMessagesContainerStyled,
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
  const [scrollbarMinHeight, setScrollbarMinHeight] = useState(0)
  const [scrollbarMaxHeight, setScrollbarMaxHeight] = useState(0)

  const templateMessengerMessagesRef = useRef<HTMLDivElement>(null)
  const templateMessengerMessagesWrapperRef = useRef<HTMLDivElement>(null)
  const templateMessengerMessagesEndRef = useRef<HTMLDivElement>(null)
  const templateMessengerSendboxRef = useRef<HTMLDivElement>(null)
  const templateMessengerMessagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let templateMessengerSendboxHeight = 0

    if (templateMessengerSendboxRef && templateMessengerSendboxRef.current) {
      templateMessengerSendboxHeight =
        templateMessengerSendboxRef.current.clientHeight
    }

    if (templateMessengerMessagesRef && templateMessengerMessagesRef.current) {
      templateMessengerMessagesRef.current.style.height = `calc(100% - ${templateMessengerSendboxHeight}px)`
      templateMessengerMessagesRef.current.style.maxHeight = `calc(100% - ${templateMessengerSendboxHeight}px)`

      setScrollbarMaxHeight(templateMessengerMessagesRef.current.clientHeight)
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

    if (
      templateMessengerMessagesContainerRef &&
      templateMessengerMessagesContainerRef.current
    ) {
      setScrollbarMinHeight(
        templateMessengerMessagesContainerRef.current.clientHeight,
      )
    }
  }, [props.messageItems])

  return (
    <TemplateMessengerStyled>
      <TemplateMessengerBackgroundStyled />
      <TemplateMessengerMessagesStyled ref={templateMessengerMessagesRef}>
        <TemplateMessengerMessagesWrapperStyled
          ref={templateMessengerMessagesWrapperRef}
        >
          <Scrollbars
            style={{
              minHeight:
                scrollbarMinHeight <= scrollbarMaxHeight
                  ? scrollbarMinHeight
                  : scrollbarMaxHeight,
              maxHeight: scrollbarMaxHeight,
            }}
            hideTracksWhenNotNeeded={true}
            autoHide={true}
            renderView={(props) => (
              <div
                {...props}
                style={{ ...props.style, overflowX: 'hidden', marginBottom: 0 }}
              />
            )}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <TemplateMessengerMessagesContainerStyled
                    ref={templateMessengerMessagesContainerRef}
                  >
                    <MessagesContainer messageItems={props.messageItems} />
                  </TemplateMessengerMessagesContainerStyled>
                  <div ref={templateMessengerMessagesEndRef} />
                </div>
              </div>
            </div>
          </Scrollbars>
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
