import { Icon, Tabs } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ProfilePanel } from '../VTheme/Profile'
import PersonalGoalSection from '../Goal/PersonalGoalSection'
import ActiveOpsSection from '../Op/ActiveOpsSection'
import InterestedOpsSection from '../Op/InterestedOpsSection'
import ArchivedOpsSection from '../Op/ArchivedOpsSection'
import ArchivedInterestedOpsSection from '../Op/ArchivedInterestedOpsSection'
import RecommendedOpsSection from '../Op/RecommendedOpsSection'
import PersonDetail from '../../components/Person/PersonDetail'

import VTabs from '../VTheme/VTabs'
const { TabPane } = Tabs

const homeActiveTab = (
  <span>
    <Icon type='inbox' />
    <FormattedMessage
      id='home.tab.active'
      defaultMessage='Active'
      description='show opportunities list on volunteer home page'
    />
  </span>
)
const homeHistoryTab = (
  <span>
    <Icon type='history' />
    <FormattedMessage
      id='home.tab.history'
      defaultMessage='History'
      description='show volunteering history on volunteer home page'
    />
  </span>
)
const homeProfileTab = (
  <span>
    <Icon type='setting' />
    <FormattedMessage
      id='home.tab.profile'
      defaultMessage='Profile'
      description='show profile on volunteer home page'
    />
  </span>
)
const homeDiscoverTab = (
  <span>
    <Icon type='file-search' />
    <FormattedMessage
      id='home.tab.discover'
      defaultMessage='Discover'
      description='tab to find new ops and recommendations'
    />
  </span>
)

export const HomeTabs = ({ person, onChange }) => (
  <VTabs defaultActiveKey='active' onChange={onChange}>
    <TabPane tab={homeActiveTab} key='active'>
      <ProfilePanel>
        <PersonalGoalSection />
        <ActiveOpsSection />
        <InterestedOpsSection />
      </ProfilePanel>
    </TabPane>
    <TabPane tab={homeDiscoverTab} key='discover'>
      <ProfilePanel>
        <RecommendedOpsSection />
      </ProfilePanel>
    </TabPane>
    <TabPane tab={homeHistoryTab} key='history'>
      <ProfilePanel>
        <ArchivedOpsSection />
        <ArchivedInterestedOpsSection />
      </ProfilePanel>
    </TabPane>
    <TabPane tab={homeProfileTab} key='profile'>
      <ProfilePanel>
        <PersonDetail person={person} />
      </ProfilePanel>
    </TabPane>
  </VTabs>
)

HomeTabs.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default HomeTabs
