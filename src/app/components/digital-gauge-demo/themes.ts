export const styles = [
  {
    name: 'Dark',
    min: 0,
    max: 100,
    unit: '°C',
    defaultColor: 'white',
    backgroundColor: '#424242',
    fontColor: '#d0d0d0',
    unitColor: '#a0a0a0',
    normalColor: 'red',
    warnColor: 'white',
    dangerColor: 'white',
    warnThreshold: 110,
    dangerThreshold: 110
  },
  {
    name: 'No background',
    min: 0,
    max: 100,
    unit: '°C',
    defaultColor: 'rgba(0,0,0,0)',
    backgroundColor: 'rgba(0,0,0,0)',
    fontColor: '#121212',
    unitColor: '#121212',
    normalColor: 'green',
    warnColor: 'orange',
    dangerColor: 'red',
    warnThreshold: 60,
    dangerThreshold: 80
  },
  {
    name: 'Green Accent',
    min: 0,
    max: 100,
    unit: '°C',
    defaultColor: '#121212',
    backgroundColor: '#121212',
    fontColor: 'white',
    unitColor: '#66ff22',
    normalColor: '#66ff22',
    warnColor: '#66ff22',
    dangerColor: '#66ff22',
    warnThreshold: 100,
    dangerThreshold: 100
  }
];
