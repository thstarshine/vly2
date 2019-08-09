import MemberTable from '../MemberTable'
import test from 'ava'
import { mountWithIntl } from '../../../lib/react-intl-test-helper'
import sinon from 'sinon'
import withMockRoute from '../../../server/util/mockRouter'
import fixture from './member.fixture.js'

test.before('Setup fixtures', fixture)

test('MemberTable renders properly', t => {
  const members = t.context.members
  const handleMembershipChange = sinon.spy()
  const wrapper = mountWithIntl(<MemberTable
    members={members}
    onMembershipChange={handleMembershipChange}
  />)

  // Confirm table headers
  t.is(wrapper.find('th').at(0).text(), 'Selected')
  t.is(wrapper.find('th').at(1).text(), 'Name')
  t.is(wrapper.find('th').at(2).text(), 'Validation')
  t.is(wrapper.find('th').at(3).text(), 'Status')
  // Confirm table data
  const row1 = wrapper.find('tr').at(1)

  t.regex(row1.find('td').at(1).text(), /avowkind/)
  t.regex(row1.find('td').at(2).text(), /avowkind follows/)
  t.is(row1.find('td').at(3).text(), 'follower')
  const inviteBtn = row1.find('td').at(4).find('button').first()
  t.is(inviteBtn.text(), 'Add')
  inviteBtn.simulate('click')
  t.truthy(handleMembershipChange.called)
  t.is(handleMembershipChange.getCall(0).args[0], members[0])

  const row2 = wrapper.find('tr').at(7)

  t.regex(row2.find('td').at(1).text(), /Dali/)
  t.is(row2.find('td').at(2).text(), 'test member 1')
  t.is(row2.find('td').at(3).text(), 'joiner')
  const AddBtn = row2.find('td').at(4).find('button').first()
  t.is(AddBtn.text(), 'Add')
  AddBtn.simulate('click')
  t.truthy(handleMembershipChange.calledTwice)
  t.is(handleMembershipChange.getCall(1).args[0], members[6])
  t.is(handleMembershipChange.getCall(1).args[1], 'add')

  t.is(row2.find('td').at(4).find('button').at(1).text(), 'Reject')
})

test('row click handler pushes to profile page', t => {
  const members = t.context.members

  const handleMembershipChange = sinon.spy()
  const RoutedTable = withMockRoute(MemberTable, '/about')
  const wrapper = mountWithIntl(<RoutedTable
    members={members}
    onMembershipChange={handleMembershipChange}
  />, '/test')
  const row1 = wrapper.find('tr').at(1)
  t.regex(row1.find('td').at(1).text(), /avowkind/)
  row1.find('.ant-avatar').first().simulate('click')
})