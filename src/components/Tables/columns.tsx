export const columns = [
  {
    Header: 'Name',
    accessor: 'name', // String-based value accessors!
  },
  {
    Header: 'Slogan',
    accessor: 'slogan.slogan', // String-based value accessors!
  },
  {
    id: 'github-stars',
    Header: 'Stars',
    accessor: (d: any) => d.fields.githubData ? d.fields.githubData.repository.stargazers.totalCount : 'no data',
  },
  {
    id: 'npm-weekly-downloads',
    Header: 'NPM Downloads',
    accessor: (d: any) => d.fields.npmData ? d.fields.npmData.downloads : 'no data',
  },
];

// const data = [
//   {
//     name: 'Tanner Linsley',
//     age: 26,
//     friend: {
//       name: 'Jason Maurer',
//       age: 23,
//     },
//   },
// ];

// const columns = [{
//   Header: 'Name',
//   accessor: 'name' // String-based value accessors!
// }, {
//   Header: 'Age',
//   accessor: 'age',
//   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
// }, {
//   id: 'friendName', // Required because our accessor is not a string
//   Header: 'Friend Name',
//   accessor: d => d.friend.name // Custom value accessors!
// }, {
//   Header: props => <span>Friend Age</span>, // Custom header components!
//   accessor: 'friend.age'
// }]
