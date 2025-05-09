import React, { useState, useEffect, useRef } from 'react';

// Validates the first half of an email address.
const validateText = (text: string) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages: string[] = [
  'hi',
  'hello',
  'hola',
  'you-can-email-me-at-literally-anything! Really',
  'well, not anything. But most things',
  'like-this',
  'or-this',
  'but not this :(  ',
  'you.can.also.email.me.with.specific.topics.like',
  'just-saying-hi',
  'please-work-for-us',
  'help',
  'admin',
  'or-I-really-like-your-website',
  'thanks',
];

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current!();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

interface EmailLinkProps {
  loopMessage?: boolean;
}

const EmailLink: React.FC<EmailLinkProps> = ({ loopMessage = false }) => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, setIdx] = useState(0); // points to current message
  const [message, setMessage] = useState(messages[idx]);
  const [char, setChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      if (loopMessage) {
        setIdx(0);
        setChar(0);
      } else {
        setIsActive(false);
      }
    } else {
      setMessage(messages[newIdx].slice(0, newChar));
      setIdx(newIdx);
      setChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <div
      className="inline-container"
      style={validateText(message) ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <a href={validateText(message) ? `mailto:${message}@0xneit.dev` : ''}>
        <span>{message}</span>
        <span>@0xneit.dev</span>
      </a>
    </div>
  );
};

export default EmailLink;
