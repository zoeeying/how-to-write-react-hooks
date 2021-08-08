/* eslint-disable jsx-a11y/anchor-is-valid */
import { Popover, Tag } from 'antd'

const data = [
  {
    id: '1',
    name: 'Kennedy',
    job: 'Chief Mobility Orchestrator',
    city: 'North Alec',
  },
  {
    id: '2',
    name: 'Lucius',
    job: 'Internal Research Manager',
    city: 'Littleland',
  },
  {
    id: '3',
    name: 'Carlos',
    job: 'Lead Configuration Analyst',
    city: 'South Lillian',
  },
  {
    id: '4',
    name: 'Urban',
    job: 'Chief Operations Agent',
    city: 'Shieldshaven',
  },
  {
    id: '5',
    name: 'Katrine',
    job: 'Legacy Solutions Orchestrator',
    city: 'South Kyleigh',
  },
  {
    id: '6',
    name: 'Kennedi',
    job: 'Global Assurance Developer',
    city: 'East Jaunitaville',
  },
  {
    id: '7',
    name: 'Mariah',
    job: 'Forward Functionality Administrator',
    city: 'West Kody',
  },
  {
    id: '8',
    name: 'Danika',
    job: 'Forward Applications Developer',
    city: 'Lake Max',
  },
  {
    id: '9',
    name: 'Freeda',
    job: 'Legacy Tactics Officer',
    city: 'North Brandonview',
  },
  {
    id: '10',
    name: 'Lila',
    job: 'Future Research Coordinator',
    city: 'South Helenabury',
  },
]

function ListWithMore({ renderItem, data = [], max }) {
  const elements = data.map((item, index) => renderItem(item, index, data))
  const show = elements.slice(0, max)
  const hide = elements.slice(max)

  return (
    <span>
      {show}
      {hide.length > 0 && (
        <Popover content={hide}>
          <a>
            <span>and {hide.length} more...</span>
          </a>
        </Popover>
      )}
    </span>
  )
}

export default function ListWithMoreExample() {
  return (
    <div>
      <h2>User Names</h2>
      <div>
        <ListWithMore
          renderItem={user => {
            return <Tag>{user.name}</Tag>
          }}
          data={data}
          max={3}
        />
      </div>
    </div>
  )
}
