import React from 'react';
import { communitiesDataDesktop } from './communitiesData';
import CommunitiesGroup from './CommunitiesGroup';
import CommunitiesHeader from './CommunitiesHeader';

const Communities = () => (
  <div className="communities">
    <CommunitiesHeader />

    <CommunitiesGroup
      title="community grants"
      text="Organizations that fund open source projects, artists, and many more."
      cards={communitiesDataDesktop.cards}
    />
  </div>
);

export default Communities;
