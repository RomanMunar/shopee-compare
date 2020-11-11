import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import pubsub from "sweet-pubsub";
import { Icon } from "../../components/Icon";

import { Container, StyledToast, CloseIcon, Title, Message } from "./Styles";

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const addToast = ({ type = "success", title, message, duration = 5 }) => {
      const id = Date.now();

      setToasts((currentToasts) => [
        ...currentToasts,
        { id, type, title, message },
      ]);

      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000);
      }
    };

    pubsub.on("toast", addToast);

    return () => {
      pubsub.off("toast", addToast);
    };
  }, []);

  const removeToast = (id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  };

  return (
    <Container>
      <TransitionGroup>
        {toasts.map((toast) => (
          <CSSTransition key={toast.id} classNames='jira-toast' timeout={200}>
            <StyledToast
              key={toast.id}
              type={toast.type}
              onClick={() => removeToast(toast.id)}
            >
              <CloseIcon>
                <svg
                  viewBox='0 0 20 20'
                  fill='#fff'
                  width={15}
                  height={15}
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </CloseIcon>
              {toast.title && <Title>{toast.title}</Title>}
              {toast.message && <Message>{toast.message}</Message>}
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
