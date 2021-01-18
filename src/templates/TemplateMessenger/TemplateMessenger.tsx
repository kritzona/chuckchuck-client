import React, { useRef, useEffect } from 'react'
import Messages from '../../components/organisms/Messages/Messages'
import MessengerHeader from '../../components/organisms/MessengerHeader/MessengerHeader'
import SendBox from '../../components/organisms/SendBox/SendBox'
import './TemplateMessenger.scss'

const TemplateMessenger = () => {
  const templateMessengerHeaderRef = useRef<HTMLDivElement>(null)
  const templateMessengerMessagesRef = useRef<HTMLDivElement>(null)
  const templateMessengerSendboxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let templateMessengerHeaderHeight = 0
    let templateMessengerSendboxHeight = 0

    if (templateMessengerHeaderRef && templateMessengerHeaderRef.current) {
      templateMessengerHeaderHeight =
        templateMessengerHeaderRef.current.clientHeight
    }
    if (templateMessengerSendboxRef && templateMessengerSendboxRef.current) {
      templateMessengerSendboxHeight =
        templateMessengerSendboxRef.current.clientHeight
    }

    if (templateMessengerMessagesRef && templateMessengerMessagesRef.current) {
      templateMessengerMessagesRef.current.style.height = `calc(100% - ${templateMessengerHeaderHeight}px - ${templateMessengerSendboxHeight}px)`
    }
  })

  return (
    <div className="template-messenger">
      <div
        className="template-messenger__header"
        ref={templateMessengerHeaderRef}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <MessengerHeader></MessengerHeader>
            </div>
          </div>
        </div>
      </div>
      <div
        className="template-messenger__messages"
        ref={templateMessengerMessagesRef}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Messages></Messages>
            </div>
          </div>
        </div>
      </div>
      <div
        className="template-messenger__sendbox"
        ref={templateMessengerSendboxRef}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SendBox></SendBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemplateMessenger
