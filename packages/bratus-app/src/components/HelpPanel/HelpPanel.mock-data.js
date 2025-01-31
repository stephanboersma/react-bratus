export const Elements = [
  {
    id: 'node-1',
    type: 'reactComponent',
    data: {
      label: 'I am a component',
      component: { timesUsed: 1 },
      linesOfCode: 1,
      outDegree: 1,
      inDegree: 0,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'node-2',
    type: 'reactComponent',
    data: {
      label: 'Solid connections denote components that are rendered by default',
      component: { timesUsed: 1 },
      linesOfCode: 80,
      outDegree: 0,
      inDegree: 1,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'node-3',
    type: 'reactComponent',
    data: {
      label: 'My height is proportional to how many lines of code I have.',
      component: { timesUsed: 1 },
      linesOfCode: 120,
      outDegree: 1,
      inDegree: 0,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'node-4',
    type: 'reactComponent',
    data: {
      label: 'Red dashed connections denote a Route.',
      component: { timesUsed: 1 },
      linesOfCode: 120,
      outDegree: 0,
      inDegree: 1,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'node-5',
    type: 'reactComponent',
    data: {
      label: 'This is how many times I have been used ->',
      component: { timesUsed: 6 },
      linesOfCode: 40,
      outDegree: 1,
      inDegree: 0,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'node-6',
    type: 'reactComponent',
    data: {
      label:
        'Black dashed connection denote a component rendered within an if-statement',
      component: { timesUsed: 1 },
      linesOfCode: 240,
      outDegree: 0,
      inDegree: 1,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'Hover me to highlight',
    type: 'reactComponent',
    data: {
      label: 'Hover me to highlight',
      component: { timesUsed: 1 },
      linesOfCode: 50,
      outDegree: 0,
      inDegree: 0,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'edge-1',
    source: 'node-1',
    target: 'node-2',
  },
  {
    id: 'edge-2',
    source: 'node-3',
    target: 'node-4',
    label: '/route',
    animated: true,
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: {
      fill: '#001529',
      fillOpacity: 0.7,
    },
    labelStyle: { fill: '#fff' },
    style: { stroke: 'red' },
  },
  {
    id: 'edge-3',
    source: 'node-5',
    target: 'node-6',
    animated: true,
  },
];
