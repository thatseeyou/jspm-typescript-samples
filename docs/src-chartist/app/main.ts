import '../css/chartist.css!css';

import domready = require('domready');
import 'screenlog';
import { TestItem, makeTestButtons } from '../../libs/testbutton';

import * as t from './tests';

const tests:TestItem[] = [
    {text: '---- clear log ----', action: screenLog.clear},
    {text: 'line chart', action: t.testLine},
    {text: 'pie chart', action: t.testPie},
    {text: 'bar chart', action: t.testBar}
];

domready(() => {
    screenLog.init({ autoScroll: true });

    makeTestButtons(tests);
});
