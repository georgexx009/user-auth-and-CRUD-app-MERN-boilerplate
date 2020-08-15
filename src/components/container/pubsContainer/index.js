import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';

import PubCard from '../../presentational/pubCard';
import FloatingBtn from '../../presentational/FloatingBtn/index2';
import NewPubForm from '../../presentational/NewPubForm';
import AnimateContainer from '../AnimateContainer';
import { updatePubs } from '../../../actions';
import { retrievePubs } from '../../../services';

const onClick = (mounted, setMounted) => {
  setMounted(!mounted);
};

const PubContainer = () => {
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);
  const pubsInfo = useSelector((state) => state.pubsInfo);

  useEffect(() => {
    retrievePubs().then((pubs) => {
      dispatch(updatePubs(pubs));
    });
  }, []);

  const closeBtnForm = () => {
    setMounted(false);
  };

  return (
    <>
      <div className="pubs-container">
        <AnimateContainer mounted={mounted}>
          <NewPubForm handleCloseBtn={closeBtnForm} />
        </AnimateContainer>
        {pubsInfo.map((pubsInfo, i) => (
          <PubCard
            key={i}
            username={pubsInfo.username}
            content={pubsInfo.content}
          />
        ))}
      </div>
      <FloatingBtn
        onClick={() => {
          onClick(mounted, setMounted);
        }}
      />
    </>
  );
};

export default PubContainer;
