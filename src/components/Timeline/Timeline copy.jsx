import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import './Timeline.css';

const isBrowser = typeof window != 'undefined';

const getScrollPosition = ({ element, useWindow }) => {
  if (!isBrowser) {
    return { x: 0, y: 0 };
  }

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
};

const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callback = () => {
    const currentPos = getScrollPosition({ element, useWindow });
    effect({ previousPos: position.current, currentPos });
    position.current = currentPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callback, wait);
        }
      } else {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, deps);
};

const EventItem = (props) => {
  const timeItem = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const checkPosition = (el) => {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => setIsVisible(checkPosition(timeItem.current)), []);

  useScrollPosition(({ curPos }) =>
    setIsVisible(checkPosition(timeItem.current))
  );

  const { date, content, role, company, location } = props;

  return (
    <li ref={timeItem} className={isVisible ? 'inView' : null}>
      <div>
        <time>
          {date.from} - {date.to}
        </time>
        <h4 className="title">{role}</h4>
        <h3 className="company">{company}</h3>
        <p>
          <i>{location}</i>
        </p>
        <p className="description">{content}</p>
      </div>
    </li>
  );
};

const Timeline = (props) => {
  const scrollArea = React.useRef();

  const makeTimeline = (events) => {
    const evlist = events.map((item) => {
      return (
        <EventItem
          date={item.date}
          content={item.content}
          role={item.role}
          company={item.company}
          location={item.location}
          key={`${item.time}`}
        />
      );
    });
    return <ul>{evlist}</ul>;
  };

  return (
    <div className="timeline" ref={scrollArea}>
      <ul>{makeTimeline(props.events)}</ul>
    </div>
  );
};

export default Timeline;
