class BasicSelection extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Conditional Selection Boxes Preview"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}        
        options={{
          selection: true,
          selectionProps: rowData => ({
            disabled: rowData.name === 'Mehmet',
            color: 'primary'
          })
        }}
      />
    )
  }
}