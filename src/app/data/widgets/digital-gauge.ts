import { Widget } from 'src/app/models/widget';
import { DigitalGaugeComponent } from '../../../../projects/pro-widgets/src/public_api';

export const digitalGauge: Widget = {
  name: 'Digital Gauge',
  component: DigitalGaugeComponent,
  module: 'DigitalGaugeModule',
  valueGenerator: () => Math.sin(new Date().getTime() / 5000) * 50 + 50,
  dataFieldName: 'value',
  tabs: [
    {
      label: 'Colors',
      fields: [
        'defaultColor',
        'normalColor',
        'backgroundColor',
        'outerBackgroundColor'
      ]
    },
    {
      label: 'Thresholds',
      fields: [
        'warnThreshold',
        'warnColor',
        'dangerThreshold',
        'dangerColor'
      ]
    },
    {
      label: 'Fontcolors and Underline',
      fields: [
        'fontColor',
        'unitColor',
        'underlineColor'
      ]
    },
    {
      label: 'Ranges and Units',
      fields: [
        'min',
        'max',
        'unit',
        'strokeWidth'
      ]
    }
  ]
};
